function addContainer(div, content, name) {
    var container = document.getElementById(div);
    var newContainer = document.createElement("div");
    newContainer.setAttribute("class", "container");
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
    "<div class='social-buttons'><a href='https://twitter.com/bibwiss' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-twitter'></i> Twitter</button></a><a href='http://www.linkedin.com/in/sophie-schneider-b72428150' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-linkedin-in'></i> LinkedIn</button></a><a href='https://github.com/bibwiss' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-github'></i> Github</button></a><a href=' https://orcid.org/0000-0002-8303-1798 ' target='_blank'><button type='button' class='btn btn-light'><i class='fa-brands fa-orcid'></i> Orcid</button></a></div>"

toggleContainers("div-social", socialContent, "social-added");

