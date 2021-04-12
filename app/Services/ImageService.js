import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"



class ImageService{
    async addImage(){
        let result = await sandboxApi.get('images')
        ProxyState.currentImage = result.data
    }
}

export const imageService = new ImageService

