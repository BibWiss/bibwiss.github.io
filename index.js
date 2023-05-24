/*
TODO
* add dark mode
*/

/*
DARK MODE
* body background #15141a, color
* h[n] color
* delete img border (in general)
* a:hover color
* hashtag border color
 */

// check if a specific value in the data.json has some content or is null
function checkIfEmptyValue(prefix, val, suffix) {
    if (val != null) {return prefix + val + suffix}
    else {return ""};
};

// compare two input years (used in loop to identify when year changes)
function compareYear(year0, year1) {
    if (year1 != year0) {return `<h3>${year0}</h3>`}
    else {return ""};
}

var activeHashtagsListed = [];
  
  function filterByHashtag() {
    let text = this.textContent;
    if (this.classList.contains('active')) {
      this.classList.remove('active')
      this.classList.add('inactive')
      const similarPubs = document.querySelectorAll(`.${'hashtag-' + text}`);
            for (const sPub of similarPubs) {
                sPub.classList.remove("active");
                sPub.classList.add("inactive");
            };
        
        const resetPubs = document.querySelectorAll(`.hide-pub`); //resets all publications if there is only one tag left
        if (activeHashtagsListed.length > 1) {
            activeHashtagsListed = activeHashtagsListed.filter(item => item !== text);
            var pubsToKeepHiding = activeHashtagsListed.filter(Boolean).join("), .hide-pub:not(.");
            pubsToKeepHiding = ".hide-pub:not(." + pubsToKeepHiding + ")";
            console.log(pubsToKeepHiding);
            const resetCurrent = document.querySelectorAll(`.${activeHashtagsListed[0]}`);
            for (const rCur of resetCurrent) {
                rCur.classList.remove("hide-pub")
                rCur.classList.add("show-pub")}
        } else if (activeHashtagsListed.length == 1) {
            activeHashtagsListed = activeHashtagsListed.filter(item => item !== text);
            for (const rCur of resetPubs) {
                rCur.classList.remove("hide-pub")
                rCur.classList.add("show-pub")}
            };
    } else if (this.classList.contains('inactive')) {
      this.classList.remove('inactive');
      this.classList.add('active');
      activeHashtagsListed.push(text);
      const similarPubs = document.querySelectorAll(`.${'hashtag-' + text}`);
            for (const sPub of similarPubs) {
                sPub.classList.remove("inactive");
                sPub.classList.add("active");
            };
    const otherPubs = document.querySelectorAll(`.show-pub:not(.${text})`);
            for (const oPub of otherPubs) {
                oPub.classList.remove("show-pub");
                oPub.classList.add("hide-pub");
            };
    } 

  }

// get all metadata about publications from "data.json" file
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
                div.innerHTML = (`${compareYear(jsondata["year"][i], year0)}<p class="show-pub ${checkIfEmptyValue("",jsondata["type"][i],"")} ${checkIfEmptyValue("", jsondata["community"][i], "")}">${checkIfEmptyValue("<span class='authors'>", jsondata["co-author(s)"][i], "</span>: ")}<span class="title"><a href="${jsondata["link to publication"][i]}">${jsondata["title"][i]}</a></span>${checkIfEmptyValue(", in <span class='publisher'>",  jsondata["publisher (e.g. journal/blog name)"][i], "</span>")}. ${checkIfEmptyValue(`<span class='hashtag hashtag-${jsondata["type"][i]} inactive'>`,jsondata["type"][i],"</span>")} ${checkIfEmptyValue(`<span class='hashtag hashtag-${jsondata["community"][i]} inactive'>`, jsondata["community"][i], "</span>")}</p>`);
                passageContainer.appendChild(div);
                var year0 = jsondata["year"][i];
                //call filter function
                document.querySelectorAll('span.hashtag').forEach((x) => {
                    x.addEventListener('click', filterByHashtag);
                  })
            };
        }
    );
    return jsondata;
};

getMetadata("data.json");