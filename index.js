// functions

// utils
// check if a specific value in the data.json has some content or is null
function checkIfEmptyValue(prefix, val, suffix) {
    if (val != null) { return prefix + val + suffix }
    else { return "" };
};

// compare two input years (used in loop to identify when year changes)
function compareYear(year0, year1) {
    if (year1 != year0) { return `<h3>${year0}</h3>` }
    else { return "" };
}

// filter by hashtag
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
                rCur.classList.add("show-pub")
            }
        } else if (activeHashtagsListed.length == 1) {
            activeHashtagsListed = activeHashtagsListed.filter(item => item !== text);
            for (const rCur of resetPubs) {
                rCur.classList.remove("hide-pub")
                rCur.classList.add("show-pub")
            }
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

// light switch (change to dark/light mode)
function changeToDarkMode() {
    //body
    const body = document.getElementsByTagName("body");
    body[0].classList.add("dark-mode");
    body[0].classList.remove("light-mode");
    //hashtags
    const hashtags = document.querySelectorAll(`.hashtag`);
    for (const tag of hashtags) {
        tag.classList.remove("light-mode");
        tag.classList.add("dark-mode")
    }
    //icons
    const icons = document.querySelectorAll(`.internal-link`);
    for (const icon of icons) {
        icon.classList.remove("light-mode");
        icon.classList.add("dark-mode")
    } 
};

function changeToLightMode() {
    //body
    const body = document.getElementsByTagName("body");
    body[0].classList.add("light-mode");
    body[0].classList.remove("dark-mode");
    //hashtags
    const hashtags = document.querySelectorAll(`.hashtag`);
    for (const tag of hashtags) {
        tag.classList.remove("dark-mode");
        tag.classList.add("light-mode");
    //icons
    const icons = document.querySelectorAll(`.internal-link`);
    for (const icon of icons) {
        icon.classList.add("light-mode");
        icon.classList.remove("dark-mode")
    } 
    }
};

// get all data about publications from "data.json" file

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
                    // for each entry in jsondata, add div and information from "data.json"
                    var div = document.createElement("div");
                    div.setAttribute("id", "div_" + (i));
                    div.innerHTML = (`${compareYear(jsondata["year"][i], year0)}<p class="show-pub ${checkIfEmptyValue("", jsondata["type"][i], "")} ${checkIfEmptyValue("", jsondata["community"][i], "")}">${checkIfEmptyValue("<span class='authors'>", jsondata["co-author(s)"][i], "</span>: ")}<span class="title"><a href="${jsondata["link to publication"][i]}">${jsondata["title"][i]}</a></span>${checkIfEmptyValue(", in <span class='publisher'>", jsondata["publisher (e.g. journal/blog name)"][i], "</span>")}. ${checkIfEmptyValue(`<span class='hashtag hashtag-${jsondata["type"][i]} inactive light-mode'>`, jsondata["type"][i], "</span>")} ${checkIfEmptyValue(`<span class='hashtag hashtag-${jsondata["community"][i]} inactive light-mode'>`, jsondata["community"][i], "</span>")}</p>`);
                    passageContainer.appendChild(div);
                    var year0 = jsondata["year"][i];
                    //enable filtering by hashtag
                    document.querySelectorAll('span.hashtag').forEach((x) => {
                        x.addEventListener('click', filterByHashtag);
                    })
                    // add functionality to lightswitch
                    const lightSwitch = document.getElementById('flexSwitchCheckDefault');
                    lightSwitch.addEventListener('change', e => {
                    if(e.target.checked === true) {
                        console.log("Checkbox is checked - boolean value: ", e.target.checked);
                        changeToDarkMode();
                    }
                    if(e.target.checked === false) {
                        console.log("Checkbox is not checked - boolean value: ", e.target.checked);
                        changeToLightMode();
                    }
                    });
                };
            }
        );
    return jsondata;
};

getMetadata("data.json");