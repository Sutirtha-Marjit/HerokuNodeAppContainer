const path = require('path');
const express = require("express");
var bodyParser = require('body-parser');
const port = 3000;    
const CustomJobs = require('./customjobs');
const CommonService = require('./activities/common.service');
const CORS = require('cors');

const app = express();
app.use(CORS());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


function activateCommonService(app){
    if(app){
        const cmservice = new CommonService(app);
        
    }else{
        console.log('No express job found');
    }
}


function AppBegin(){
    
    console.log('Dependencies loaded into environment');    
    console.log('Express app created');
    var customjobs = new CustomJobs();
     customjobs.appIndexFileModifier('SerisPhotoDownloader');
     console.log('SerisPhotoDownloader configured');
     activateCommonService(app);
    app.use(express.static('ui')); 
    
    console.log('Static folder assigned');
    
    app.use('/SerisPhotoDownloader', express.static('apps/SerisPhotoDownloader/dist/'));
    app.use('/HulkImageDownloader', express.static('apps/HulkImageDownloader/dist/HulkImageDownloader/'));
    
    
    app.listen(process.env.PORT || port,function(){
        console.log('Application started');
        console.log('Ready to listen');
    });
}


AppBegin();
