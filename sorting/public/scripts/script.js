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
        populateFilters();
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

    function filterChanged() {
        var val = document.getElementById("filterSel").value.split("_");
        if (val[1] == "all") {
            $(".listItem").fadeIn();
        }


        //complete this function!

    }

    function sortChanged() {
        var x = document.getElementById("sortSel").value.split("_");
        console.log(x);
        var alg = x[0];
        var key = x[1];
        var url = "./getSortedJSON?alg=" + alg + "&key=" + key;
        console.log(url);
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