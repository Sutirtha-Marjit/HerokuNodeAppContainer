function AppBegin(){
    const port = 4500;
    const express = require("express");
    const app = express();

    app.use(express.static('ui'));

    app.listen(port,function(){
        console.log('Application started');
    });
}


AppBegin();
