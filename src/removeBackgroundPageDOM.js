import { createUIItem } from "./domFunctions";


export function initializeRemoveBackgroundPage() {
    const body = document.querySelector("body")

    const removeBackgroundPage = createUIItem("removeBackgroundPage", "div", [], body)
    removeBackgroundPage.id = "removeBackgroundPage"

    const title = createUIItem("title", "div", [], removeBackgroundPage)
    title.textContent = "Remove Background"

    const pictureUploadButton = createUIItem("pictureUpload", "input", [], removeBackgroundPage)
    pictureUploadButton.id = "pictureUpload"
    pictureUploadButton.type = "file"
    pictureUploadButton.accept = "image/png, image/jpeg"

    const removeBackgroundButton = createUIItem("removeBackgroundButton", "div", [], removeBackgroundPage)
    removeBackgroundButton.id = "removeBackgroundButton"
    removeBackgroundButton.textContent = "Remove Background"

    const contentContainer = createUIItem("contentContainer", "div", [], removeBackgroundPage)
    const imageContainer = createUIItem("imageContainer", "image", [], contentContainer)
    imageContainer.src = "#"

}