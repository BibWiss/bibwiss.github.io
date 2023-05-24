/*
TODO
* add function to reset filtering by clicking on hashtags once again
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

function switchHashtags() {
    if (button.classList.contains("inactive")) {
        button.classList.remove("inactive");
        button.classList.add("active");
    } 
    else if (button.classList.contains("active")) {
        button.classList.remove("active");
        button.classList.add("inactive");
    }
};
  
  function myFunction() {
    let text = this.textContent;
    if (this.classList.contains('active')) {
      this.classList.remove('active')
      this.classList.add('inactive')
      const similarPubs = document.querySelectorAll(`.${'hashtag-' + text}`);
            for (const sPub of similarPubs) {
                sPub.classList.remove("active");
                sPub.classList.add("inactive");
            };
        const resetPubs = document.querySelectorAll(`.hide-pub:not(.${text})`);
            for (const rPub of resetPubs) {
                rPub.classList.remove("hide-pub");
                rPub.classList.add("show-pub");
            };
  
  
  
    } else if (this.classList.contains('inactive')) {
      this.classList.remove('inactive');
      this.classList.add('active');
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

// filter publication entries by clicking on hashtags
function filterByHashtag(hashtags) {
    for (var i = 0; i < hashtags.length; i++) {
        var button = hashtags[i];
        let text = button.textContent;

        button.onclick = function(){
            this.classList.remove("inactive");
            this.classList.add("active");
            // change style for all hashtags with same content
            const similarPubs = document.querySelectorAll(`.${'hashtag-' + text}`);
            for (const sPub of similarPubs) {
                sPub.classList.remove("inactive");
                sPub.classList.add("active");
            };
            const otherPubs = document.querySelectorAll(`.show-pub:not(.${text})`);
            console.log(otherPubs)
            for (const oPub of otherPubs) {
                oPub.classList.remove("show-pub");
                oPub.classList.add("hide-pub");
            };
               };}
};

/*function resetFilter() {
    var active = document.getElementsByClassName("active");
    for (var i = 0; i < active.length; i++) {
        var button = active[i];
        //let text = button.textContent;
        
        button.onclick = function(){
            this.classList.remove("inactive");
            this.classList.add("active"); }
};}*/
// add funct to change active back to inactive on click

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
                //test
                //var inactiveHashtags = document.getElementsByClassName('inactive');
                //filterByHashtag(inactiveHashtags);

                document.querySelectorAll('span.hashtag').forEach((x) => {
                    x.addEventListener('click', myFunction);
                  })
            };
        }
    );
    return jsondata;
};

getMetadata("data.json");

/*
// reset filter on publications
function resetFilter() {
    var hashtags = document.getElementsByClassName('active');
    for (var i = 0; i < hashtags.length; i++) {
        var button = hashtags[i];
        let text = button.textContent;
        console.log(button[0]);
        
        button.onclick = function(){
            this.classList.remove("active");
            this.classList.add("inactive");
            // change style for all hashtags with same content
            const similarPubs = document.querySelectorAll(`.${'hashtag-' + text}`);
            for (const sPub of similarPubs) {
                sPub.classList.remove("active");
                sPub.classList.add("inactive");
            };
            const otherPubs = document.querySelectorAll(`.show-pub:not(.${text})`);
            for (const oPub of otherPubs) {
                // to do: check if parent node has other children with class "active"
                oPub.classList.remove("hide-pub");
                oPub.classList.add("show-pub");
            }
        };
}
};

resetFilter();
*/



