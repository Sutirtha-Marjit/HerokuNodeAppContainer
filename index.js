function AppBegin(){
    const port = 3000;
    const express = require("express");
    const app = express();

    app.use(express.static('ui'));

    app.listen(process.env.PORT || port,function(){
        console.log('Application started');
    });
}


AppBegin();
