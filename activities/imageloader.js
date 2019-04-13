const ImageDownLoader = require('image-downloader');
const fs = require('fs');
class ImageLoader {

    constructor(folderPath='./quick-deal/') {
        this.path_string = folderPath;
        console.log('this.path_string',this.path_string);
    }

    
    loadImage(url,name, onLoadComplete, onFailure) {
        console.log(fs.existsSync(this.path_string));
        
        if(!fs.existsSync(this.path_string)){
            fs.mkdirSync(this.path_string);
            
        }           
        ImageDownLoader.image({url:url,dest:`${this.path_string}/${name}`}).then(()=>{
            onLoadComplete({url:url});
        }).catch(()=>{
            onFailure({url:url});
        })
        
        
    }


}

module.exports = ImageLoader;