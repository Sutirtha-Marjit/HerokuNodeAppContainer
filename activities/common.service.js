const ImageLoader = require('./imageloader');
const getDefaultObj = require('../generaljson');
const deleteFolder  = require('folder-delete');
const express = require('express');
const zipdir = require('zip-dir');
const fs = require('fs');
class CommonService {
    constructor(app) {
        console.log('CommonService initiated');
        this.zipurl='/napoleon/credentials/compactfiles/';
        this.folderName = 'quick-deal';
        this.imageDownloadFolder = `./${this.folderName}/`;
        this.createQuickDealFolder();
        app.use(this.zipurl, express.static('quick-deal'));
        app.get('/api/common/service/info',(req,res)=>{
            const obj = getDefaultObj();
            obj.data = "Heroku Node app container";
            obj.meta.status = true;
            res.json(obj);
        });
        

        app.post('/api/common/service/imageserisloader/',(req,res)=>{
            console.log('Req reached!!!');
            const obj = getDefaultObj();
            if(req.body.imageList){
                obj.data = req.body.imageList;
                
                this.loadSerisOfImage(req.body.imageList).then((data)=>{
                    console.log(data);
                    this.zipIt(`${this.imageDownloadFolder}${data.dirName}`,`${this.imageDownloadFolder}${data.dirName}.zip`);
                    obj.data = data;
                    
                    res.json(obj);
                }).catch((data)=>{
                    obj.data = data;
                    res.json(obj);
                });
                

            }else{
                obj.mets.status = false;
                res.json(obj);
            }

            
        });
    }

    createQuickDealFolder(){
        if(!fs.existsSync(this.folderName)){
            fs.mkdirSync(this.folderName);
        }
    }

    washDir(){
        //deleteFolder(this.imageDownloadFolder, {debugLog: true});
        deleteFolder(this.folderName,{debugLog:true})
    }

    zipIt(contents,target){
        const obj = getDefaultObj();
        const pr = new Promise((resolve,reject)=>{
            zipdir(contents,{saveTo:target},(err,buffer)=>{
                if(!err){
                    obj.meta.status = false;
                    obj.data = err;
                    reject(obj);
                }else{
                    
                    obj.meta.status = true;
                    obj.data = `zip file created as ${target}`;
                    resolve(obj);
                }
            });
        });

        return pr;
    }

    getDynFolderName(){
        const r = `${parseInt(Math.random()*250000,0)}`;
        const t = `${new Date().getTime()}`
        return `${r.replace('.','OPX')}`;
    }

    loadSerisOfImage(seris){
        const dirName = this.getDynFolderName();
        console.log(dirName);
        
        const loadActPr = new Promise((resolve,reject)=>{
            
            if(seris && seris.length){
                const max=seris.length;
                const resultArr = [];
                let c=0;
                const checkAndFinish = ()=>{
                    if(c===max){
                        resolve({
                            source: resultArr,
                            dirName: dirName,
                            zip: `${this.zipurl}${dirName}.zip`,
                            dest: []
                        });
                    }
                };
                seris.forEach((crURL,index)=>{
                    const imgLoader = new ImageLoader(`${this.imageDownloadFolder}${dirName}`);
                    const extension = (()=>{
                                            const arr = crURL.split('.');
                                            return arr[arr.length-1];
                                        })();
                    imgLoader.loadImage(crURL,`epst.image.${index}.${extension}`,(data)=>{
                        c++;
                        console.log(`Image loading successful for${data.url}`);
                        resultArr.push({url:data.url,status:true});
                        checkAndFinish();
                    },()=>{
                        c++;
                        console.log(`Image loading failed for${data.url}`);
                        resultArr.push({url:data.url,status:false});
                        checkAndFinish();
                    });
                });
            }else{
                reject({error:'no source found'});
            }
        });
        
        return loadActPr;
    }

}

module.exports = CommonService;