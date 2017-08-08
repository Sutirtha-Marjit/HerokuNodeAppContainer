function AppBegin(){
    const port = 3000;
    const path = require('path');
    const express = require("express");
    const CustomJobs = require('./customjobs');
    const app = express();
    
    var customjobs = new CustomJobs();
    customjobs.appIndexFileModifier('SerisPhotoDownloader');
    app.use('/',express.static('ui'));    
    app.use('/SerisPhotoDownloader', express.static('apps/SerisPhotoDownloader/dist/'));

    app.listen(process.env.PORT || port,function(){
        console.log('Application started');
    });
}


AppBegin();
