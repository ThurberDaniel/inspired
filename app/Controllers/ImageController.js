import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


//Private
function _draw() {
  let img = ProxyState.currentImage;
  document.body.style.background = `url(${img.large_url}) center no-repeat`
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("currentImage", _draw);

    this.addImage()
  }

 async addImage() {
     try {
         await imageService.addImage()
     } catch (error) {
         console.error(error)
     }
  }



}

