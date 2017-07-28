function AppController(){
    var bgRandom = function(){
        var styleText="";
        var imgSources = [
            "http://blogs.reuters.com/photographers-blog/files/2014/04/Envira_05x.jpg",
            "https://thebreakthrough.org/images/main_image/child_holds_candle_outside_his_tent.jpg",
            "http://img03.deviantart.net/da9b/i/2012/312/d/f/the_village_at_night_by_ghengispresley-d5kfse1.jpg",
            "https://c1.staticflickr.com/7/6214/6350869071_517fd73435_b.jpg",
            "https://s-media-cache-ak0.pinimg.com/originals/16/3b/06/163b06fc0a2bebb5309dd897d418fbc3.jpg",
            "https://c308991.ssl.cf1.rackcdn.com/SiteFiles/Venues/6089/af297616-afac-4d93-a87c-0dbf037906b5.jpg",
            "http://i.imgur.com/khR8dGXr.jpg",
            "http://7-themes.com/data_images/out/47/6929611-park-bench-at-night.jpg",
            "https://www.gymmembershipfees.com/wp-content/uploads/2015/09/Are-Night-Workouts-Effective-GymMembershipFees.jpg"
        ];

        imgSources.forEach(function(val,index){

            var lclStr = ".BG"+index+"{ background-image:url("+val+");}";
            styleText += lclStr;
        });
        var bgDiv = document.querySelector('.app-bg-shade');
        var imgBGStyle = document.createElement('style');
        var styleTextContent = document.createTextNode(styleText);
        var imgTag = document.createElement('IMG');
        imgTag.onload = function(){
            bgDiv.classList.add('complete');            
        }
        imgTag.onerror = function(){
            bgDiv.classList.remove(window["CurrentBGClass"]);
            bgDiv.classList.add('BG0');
            bgDiv.classList.add('complete');            
        } 
        
        imgBGStyle.appendChild(styleTextContent);
        imgBGStyle.id = "imgBGStyle";
        document.head.appendChild(imgBGStyle);


        

        var _o,x = parseInt((Math.random())*15);
        x >= imgSources.length ? _o = 0 : _o = x;
        window["CurrentBGClass"] = "BG"+_o;
        bgDiv.classList.add(window["CurrentBGClass"]);        
        imgTag.setAttribute('src',imgSources[_o]);
        

        
    }

    bgRandom();
}

AppController();