var CustomJobs=function(){
    /*
    const fs = require('fs');
    const jsdom = require("jsdom");
    const {JSDOM} = jsdom;
    var pilotFileName = "pilot.index.html";

    console.log(pilotFileName);

    this.appIndexFileModifier = function(appName){
        var indexFilePath = "./apps/"+appName+'/dist/index.html';
        var path = "./apps/"+appName+"/dist/"+pilotFileName;
        if (!fs.existsSync(path)) {
            console.log(path+" is not available.");
            fs.readFile(indexFilePath,'utf8',function(error,data){
                if(error){
                    console.log(error);
                }else{
                    var jsdom = new JSDOM(data);
                    var scripts = jsdom.window.document.querySelectorAll('script');
                    for(var i=0;i<scripts.length;i++){
                        scripts[i].src = appName+"/"+scripts[i].src;                        
                    }

                    var mainHTML = '<!doctype><html>'+jsdom.window.document.documentElement.innerHTML+'</html>';
                    fs.writeFile(path,mainHTML,function(err){
                        if(err){
                            console.log(err);
                        }else{
                            console.log(pilotFileName+" has been created.");
                        }
                    });

                }
                
            });
        }    
    };

*/

};

module.exports = CustomJobs;
