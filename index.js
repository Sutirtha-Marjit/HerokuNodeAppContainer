function AppBegin(){
    const port = 3000;
    const path = require('path');
    const express = require("express");
    //const CustomJobs = require('./customjobs');
    console.log('Dependencies loaded into environment');
    const app = express();
    console.log('Express app created');
    //var customjobs = new CustomJobs();
    //customjobs.appIndexFileModifier('SerisPhotoDownloader');
    app.use(express.static('ui'));    
    console.log('Static folder assigned');
    //app.use('/SerisPhotoDownloader', express.static('apps/SerisPhotoDownloader/dist/'));

    console.log('Ready to listen');
    app.listen(process.env.PORT || port,function(){
        console.log('Application started');
    });
}


AppBegin();
