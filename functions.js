function addContainer(div, content, name) {
    var container = document.getElementById(div);
    var newContainer = document.createElement("div");
    newContainer.setAttribute("id", name);
    newContainer.innerHTML = (content);
    container.appendChild(newContainer);
}

function toggleContainers(div, content, name) {
    var optionContainer = document.getElementById(div);
    optionContainer.addEventListener("click", function() {if (optionContainer.classList.contains("not-active")) {
      addContainer(div, content, name); 
      optionContainer.setAttribute("class", "active btn btn-light btn-clicked");
      optionContainer.setAttribute("aria-pressed", "true");
    } else if (optionContainer.classList.contains("active")) {
      document.getElementById(name).remove();
      optionContainer.setAttribute("class", "not-active btn btn-light");
      optionContainer.setAttribute("aria-pressed", "false");
    }
    });
    };

var socialContent = 
    "<div class='social-buttons'><a href='https://twitter.com/bibwiss' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-twitter'></i> Twitter</button></a><a href='http://www.linkedin.com/in/sophie-schneider-b72428150' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-linkedin-in'></i> LinkedIn</button></a><a href='https://github.com/bibwiss' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-github'></i> Github</button></a><a href=' https://orcid.org/0000-0002-8303-1798 ' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-orcid'></i> Orcid</button></a><a href=' https://www.researchgate.net/profile/Sophie-Schneider-15 ' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-researchgate'></i> ResearchGate</button></a><a href='https://infowissblog.de/' target='_blank'><button type='button' class='btn btn-light'><i class='fa-solid fa-earth-europe'></i> Blog</button></a></div>"

var newsContent = "<i class='fa-solid fa-person-chalkboard'></i> <em>Stellenlektüre 2.0 – Chancen und Herausforderungen der computergestützten Analyse von Schlüsselstellen</em>, presentation at InFoDiTexT+ on 30.05.2022, 17:15, <a href= 'https://dhd-blog.org/?p=17675' target='_blank'>Link</a>.</p>"

toggleContainers("div-social", socialContent, "social-added");
toggleContainers("div-news", newsContent, "news-added");

