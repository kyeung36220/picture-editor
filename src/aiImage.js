async function generateImage(prompt) {
    const response = await fetch("https://stablehorde.net/api/v2/generate/async", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apikey": "XShGitQHHFaIfED74DvAAQ"  // Optional, but recommended
        },
        body: JSON.stringify({
            prompt: prompt,
            params: {
                steps: 10,
                width: 512,
                height: 512
            }
        })
    });
  
    const data = await response.json();
    console.log("Request ID:", data.id);
  
    // Now poll the request status until the image is ready
    checkImageStatus(data.id);
  }
  
  async function checkImageStatus(id) {
    let isReady = false;
    while (!isReady) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 sec before polling
        const statusResponse = await fetch(`https://stablehorde.net/api/v2/generate/status/${id}`);
        const statusData = await statusResponse.json();
  
        if (statusData.done) {
            console.log("Image ready:", statusData.generations[0].img);
            const imgElement = document.createElement("img");
            imgElement.src = statusData.generations[0].img;
            document.body.appendChild(imgElement);
            isReady = true;
        } else {
            console.log("Waiting for image...");
        }
    }
  }
  
  // Example usage:
  generateImage("A futuristic city skyline at sunset, cyberpunk style");