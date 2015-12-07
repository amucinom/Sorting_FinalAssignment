function getXMLHTTPRequest() {
    var request;

    // Lets try using ActiveX to instantiate the XMLHttpRequest object
    try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (ex1) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (ex2) {
            request = null;
        }
    }

    // If the previous didn't work, lets check if the browser natively support XMLHttpRequest
    if (!request && typeof XMLHttpRequest != "undefined") {
        //The browser does, so lets instantiate the object
        request = new XMLHttpRequest();
    }

    return request;
}

function loadURL(filename, callback) {
    var aXMLHttpRequest = getXMLHTTPRequest();
    var allData;
    if (aXMLHttpRequest) {
        aXMLHttpRequest.open("GET", filename, true);

        aXMLHttpRequest.onreadystatechange = function(aEvt) {
            if (aXMLHttpRequest.readyState == 4) {
                allData = aXMLHttpRequest.responseText;
                callback(allData);
            }
        };
        aXMLHttpRequest.send(null);
    } else {
        alert("A problem occurred instantiating the XMLHttpRequest object.");
    }
}

function startUp() {
    // populateFilters();
    sortChanged();
}

function populateFilters() {
    var outS = "";
    outS += "<option disabled> Tags </option>";
    var temp = getAllTags();
    for (var i = 0; i < temp.length; i++) {
        outS += "<option value=tag_'" + temp[i] + "'>" + temp[i] + "</option>";
    }
    outS += "<option disabled> Categories </option>";
    var temp = getAllCats();
    for (var i = 0; i < temp.length; i++) {
        outS += "<option value=cat_'" + temp[i] + "'>" + temp[i] + "</option>";
    }
    document.getElementById("filterSel").innerHTML = outS;
}

function getAllTags() {
    // rewrite this -- ! important
    return ["all"];
}


function getAllCats() {
    // rewrite this -- ! important
    return ["all"];
}

var feed = [{id:1853,permalink:"http://subtlepatterns.com/pink-rice/",title:"Pink Rice",content:'<div class="patternpreview" style="background-image: url(\'/patterns/pink_rice.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/pink_rice.png">\r\n</div>\r\n\r\n<p>Everyone loves a bit of pink, right?\r\n\r\nMade by <a href="http://www.excogitoweb.it/" target="_blank">ExcogitoWeb.</a></p>\r\n\r\n<a class="download" href="/patterns/pink_rice.zip">Download</a>',excerpt:"Everyone loves a bit of pink, right? Made by ExcogitoWeb. Download",date:"July 7, 2015 18:41",categories:[{id:1,title:"Uncategorized",slug:"uncategorized"}],tags:[{id:57,title:"light",slug:"light"},{id:142,title:"pink",slug:"pink"},{id:76,title:"rice",slug:"rice"}]},{id:1845,permalink:"http://subtlepatterns.com/paisley/",title:"Paisley",content:'<div class="patternpreview" style="background-image: url(\'/patterns/paisley.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/paisley.png">\r\n</div>\r\n\r\n<p>The name Paisley reminds me of an old British servant. That\'s just me. \r\n\r\nMade by <a href="http://www.indexstudio.net/" target="_blank">Swetha.</a></p>\r\n\r\n<a class="download" href="/patterns/paisley.zip">Download</a>',excerpt:"The name Paisley reminds me of an old British servant. That&#8217;s just me. Made by Swetha. Download",date:"February 8, 2015 20:09",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:57,title:"light",slug:"light"},{id:141,title:"paisley",slug:"paisley"}]},{id:1843,permalink:"http://subtlepatterns.com/confectionary/",title:"Confectionary",content:'<div class="patternpreview" style="background-image: url(\'/patterns/confectionary.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/confectionary.png">\r\n</div>\r\n\r\n<p>This could be a hippy vintage wallpaper. Or something else\u2026\r\n\r\nMade by <a href="http://tileablepatterns.com/confectionary-pattern/" target="_blank">Tileable Patterns.</a></p>\r\n\r\n<a class="download" href="/patterns/confectionary.zip">Download</a>',excerpt:"This could be a hippy vintage wallpaper. Or something else\u2026 Made by Tileable Patterns. Download",date:"February 8, 2015 20:07",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:139,title:"confectionary",slug:"confectionary"},{id:140,title:"hippy",slug:"hippy"},{id:57,title:"light",slug:"light"},{id:104,title:"vintage",slug:"vintage"}]},{id:1841,permalink:"http://subtlepatterns.com/concrete-seamless/",title:"Concrete Seamless",content:'<div class="patternpreview" style="background-image: url(\'/patterns/concrete_seamless.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/concrete_seamless.png">\r\n</div>\r\n\r\n<p>How it all started, concrete. Back, and better than ever. Give it a try.\r\n\r\nMade by <a href="https://www.anchour.com/" target="_blank">Anchour.</a></p>\r\n\r\n<a class="download" href="/patterns/concrete_seamless.zip">Download</a>',excerpt:"How it all started, concrete. Back, and better than ever. Give it a try. Made by Anchour. Download",date:"February 8, 2015 20:00",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:25,title:"concrete",slug:"concrete"},{id:57,title:"light",slug:"light"},{id:138,title:"pattern",slug:"pattern"}]},{id:1839,permalink:"http://subtlepatterns.com/dark-embroidery/",title:"Dark Embroidery",content:'<div class="patternpreview" style="background-image: url(\'/patterns/dark_embroidery.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/dark_embroidery.png">\r\n</div>\r\n\r\n<p>A bit of vintage darkness for you here. Classic dark tile.\r\n\r\nMade by <a href="http://www.listvetra.ru/" target="_blank">Listvetra.</a></p>\r\n\r\n<a class="download" href="/patterns/dark_embroidery.zip">Download</a>',excerpt:"A bit of vintage darkness for you here. Classic dark tile. Made by Listvetra. Download",date:"February 8, 2015 19:58",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:29,title:"dark",slug:"dark"},{id:138,title:"pattern",slug:"pattern"}]},{id:1831,permalink:"http://subtlepatterns.com/symphony/",title:"Symphony",content:'<div class="patternpreview" style="background-image: url(\'/patterns/symphony.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/symphony.png">\r\n</div>\r\n\r\n<p>Enjoy this like the classical music pieces.\r\n\r\nMade by Irfan iLias.</p>\r\n\r\n<a class="download" href="/patterns/symphony.zip">Download</a>',excerpt:"Enjoy this like the classical music pieces. Made by Irfan iLias. Download",date:"November 25, 2014 19:00",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:57,title:"light",slug:"light"},{id:137,title:"symphony",slug:"symphony"}]},{id:1829,permalink:"http://subtlepatterns.com/contemporary-china-2/",title:"Contemporary China 2",content:'<div class="patternpreview" style="background-image: url(\'/patterns/contemporary_china_2.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/contemporary_china_2.png">\r\n</div>\r\n\r\n<p>Old China with a modern twist, take two.\r\n\r\nMade by Adam Charlts.</p>\r\n\r\n<a class="download" href="/patterns/contemporary_china_2.zip">Download</a>',excerpt:"Old China with a modern twist, take two. Made by Adam Charlts. Download",date:"November 25, 2014 18:57",categories:[{id:1,title:"Uncategorized",slug:"uncategorized"}],tags:[{id:136,title:"china",slug:"china"},{id:57,title:"light",slug:"light"}]},{id:1827,permalink:"http://subtlepatterns.com/contemporary-china/",title:"Contemporary China",content:'<div class="patternpreview" style="background-image: url(\'/patterns/contemporary_china.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/contemporary_china.png">\r\n</div>\r\n\r\n<p>Old China with a modern twist.\r\n\r\nMade by Adam Charlts.</p>\r\n\r\n<a class="download" href="/patterns/contemporary_china.zip">Download</a>',excerpt:"Old China with a modern twist. Made by Adam Charlts. Download",date:"November 25, 2014 18:56",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:136,title:"china",slug:"china"},{id:57,title:"light",slug:"light"}]},{id:1825,permalink:"http://subtlepatterns.com/eight-horns/",title:"Eight horns",content:'<div class="patternpreview" style="background-image: url(\'/patterns/eight_horns.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/eight_horns.png">\r\n</div>\r\n\r\n<p>An old rug, or a computer chip. You decide.\r\n\r\nMade by <a href="http://bdesign.by">Patutin Sergey.</p></a>\r\n\r\n<a class="download" href="/patterns/eight_horns.zip">Download</a>',excerpt:"An old rug, or a computer chip. You decide. Made by Patutin Sergey. Download",date:"November 25, 2014 18:54",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:135,title:"horns",slug:"horns"},{id:57,title:"light",slug:"light"}]},{id:1809,permalink:"http://subtlepatterns.com/feathered/",title:"Feathered",content:'<div class="patternpreview" style="background-image: url(\'/patterns/upfeathers.png\')"></div>\r\n\r\n<div class="rssthumb">\r\n<img src="/patterns/upfeathers.png">\r\n</div>\r\n\r\n<p>This is sort of fresh, but still feels a bit old school? Still cool!\r\n\r\nMade by Martuchox.</p>\r\n\r\n<a class="download" href="/patterns/upfeathers.zip">Download</a>',excerpt:"This is sort of fresh, but still feels a bit old school? Still cool! Made by Martuchox. Download",date:"October 13, 2014 19:14",categories:[{id:3,title:"Patterns",slug:"patterns"}],tags:[{id:57,title:"light",slug:"light"}]}];


function filterChanged() {
    var val = document.getElementById("filterSel").value.split('_');
    console.log(val);
    var myTag = val[0];
    console.log(myTag);

    var tag;
    var insideTag;
    var counter = 0;
    var filterArr = {};


    var outS = "";

    for (var i = 0; i < feed.length; i++) { // iterate through first level of feed object
        tag = feed[i].tags;

        outS +=
                "<li class='listItem'>" +
                "<div>" + feed[i].id + "</div>" +
                "<h1>" + feed[i].title + "</h1>" +
                "<div>" + feed[i].excerpt + "</div>" +
                "<div>" + new Date(feed[i].date).toString() + "</div>" +
                "<a target='_blank' href='" + feed[i].permalink + "'>" + feed[i].permalink + "</a><div> Tags: ";
        for (var j = 0; j < tag.length; j++) { // iterate to get to tag
            insideTag = feed[i].tags[j];
            // for (var k = 0; k < insideTag.length; k++) {



                outS += "<span class='label label-primary'>" + feed[i].tags[j].title + "</span></div>" +
                "</li>";

            filterArr[feed[i].id] = tag;

            //     var insideArr = {};
            //     insideArr[feed[i].tags[j].id] = feed[i].tags[j].title;
            // filterArr[feed[i].id] = insideArr;
            // var myObjs = {};
            // for (var index of feed[i].tags) {
            //     myObjs = index;
            // }
            // filterArr[feed[i].id] = myObjs;
            // }

        }
    }

    // console.log(feed);clear
    console.log(filterArr);
    // return filterArr;
    document.getElementById("theList").innerHTML = outS;
}




function sortChanged() {
    var x = document.getElementById("sortSel").value.split("_");
    // console.log(x);
    var alg = x[0];
    var key = x[1];
    var url = "./getSortedJSON?alg=" + alg + "&key=" + key;
    // console.log(url);
    loadURL(url, function(data) {
        objs = JSON.parse(data);
        var outS = "";
        for (var i = 0; i < objs.length; i++) {
            outS +=
                "<li class='listItem'>" +
                "<div>" + objs[i].id + "</div>" +
                "<h1>" + objs[i].title + "</h1>" +
                "<div>" + objs[i].excerpt + "</div>" +
                "<div>" + new Date(objs[i].date).toString() + "</div>" +
                "<a target='_blank' href='" + objs[i].permalink + "'>" + objs[i].permalink + "</a>" +
                "</li>";
        }
        document.getElementById("theList").innerHTML = outS;
    });
}
