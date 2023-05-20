/*
TODO
* clean up files
* add dark mode
* [optional] add filter option based on hashtags 
* update on github
*/

/*
DARK MODE
* body background #15141a, color
* h[n] color
* delete img border (in general)
* a:hover color
* hashtag border color
 */

function checkIfEmptyValue(prefix, val, suffix) {
    if (val != null) {return prefix + val + suffix}
    else {return ""};
};

function compareYear(year0, year1) {
    if (year1 != year0) {return `<h3>${year0}</h3>`}
    else {return ""};
}

function getMetadata(path) {
    var passageContainer = document.getElementById("app");
    var jsondata;
    fetch(path)
    .then(
        function (u) { return u.json(); }
    )
    .then(
        function (json) {
            var jsondata = json;
            for (var i = Object.keys(jsondata.title).length; i--; i >= 0) {
                var div = document.createElement("div");
                div.setAttribute("id", "div_" + (i));
                div.innerHTML = (`${compareYear(jsondata["year"][i], year0)}<p>${checkIfEmptyValue("<span class='authors'>", jsondata["co-author(s)"][i], "</span>: ")}<span class="title"><a href="${jsondata["link to publication"][i]}">${jsondata["title"][i]}</a></span>${checkIfEmptyValue(", in <span class='publisher'>",  jsondata["publisher (e.g. journal/blog name)"][i], "</span>")}. ${checkIfEmptyValue("<span class='hashtag'>#",jsondata["type"][i],"</span>")} ${checkIfEmptyValue("<span class='hashtag'>#", jsondata["community"][i], "</span>")}</p>`);
                passageContainer.appendChild(div);
                var year0 = jsondata["year"][i];
            };
        }
    );
    return jsondata;
    
};

getMetadata("data.json");