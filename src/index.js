import "./styles.css";
import { removeBackground } from "@imgly/background-removal"
import { initializeRemoveBackgroundPage } from "./removeBackgroundPageDOM";

function initialize() {
  initializeRemoveBackgroundPage()
  const imageInput = document.querySelector("input")
  const removeBackgroundButton = document.querySelector("#removeBackgroundButton")

  let config = {
    progress: (key, current, total) => {
      console.log(`Downloading ${key}: ${current} of ${total}`);
    }
  };

  removeBackgroundButton.addEventListener("click", () => {

    if (!imageInput.files.length) {
      alert("Please select an image first.");
      return;
    }

    removeBackground(imageInput.files[0], config).then((processedImage) => {
        const newImage = document.createElement("img");
        newImage.src = URL.createObjectURL(processedImage)
        newImage.classList.add("image")

        document.querySelector(".imageContainer").remove()
        
        const contentContainer = document.querySelector(".contentContainer")
        contentContainer.appendChild(newImage)
      })
      .catch((error) => console.error("Background removal failed:", error));
  })
}

initialize()
