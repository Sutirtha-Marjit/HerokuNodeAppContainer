var CustomJobs=function(){
    
    const fs = require('fs');
    const pathsToChange = {
        defalut:["inline.bundle.js","polyfills.bundle.js","styles.bundle.js","vendor.bundle.js","main.bundle.js"]        
    };
    var pilotFileName = "pilot.index.html";
    
    
    
    this.appIndexFileModifier = function(appName){
        var contentString,indexFilePath,path;
        indexFilePath = "./apps/"+appName+'/dist/index.html';
        path = "./apps/"+appName+"/dist/"+pilotFileName;
        if (!fs.existsSync(path)) {
            console.log(path+" is not available.");
            fs.readFile(indexFilePath,'utf8',function(error,data){
                if(error){
                    console.log(error);
                }else{
                  contentString = data;
                  pathsToChange.defalut.forEach(function(val){
                      contentString = contentString.replace(val,appName+'/'+val);
                  });
                  fs.writeFile(path,contentString,function(error){
                      if(error){
                          console.log('Problem creating file '+path);
                      }else{
                          console.log(pilotFileName+' created successfully');
                      }
                  });
                }
                
            });
        }    
    };



};

module.exports = CustomJobs;
