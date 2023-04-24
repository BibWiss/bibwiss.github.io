// buttons for (nested) collapsible containers 

function toggleContainers(div, content) {
    var optionContainer = document.getElementById(div);
    var c = document.getElementById(content);
    optionContainer.addEventListener("click", function() {if (optionContainer.classList.contains("not-active")) {
      c.removeAttribute("style", "display: none");
      optionContainer.setAttribute("class", "active btn btn-light btn-clicked");
      optionContainer.setAttribute("aria-pressed", "true");
    } else if (optionContainer.classList.contains("active")) {
      c.setAttribute("style", "display: none");
      optionContainer.setAttribute("class", "not-active btn btn-light");
      optionContainer.setAttribute("aria-pressed", "false");
    }
    });
    };

//toggleContainers("div-social", "social-content");
//toggleContainers("div-news", "news-content");

toggleContainers("div-activities", "activities-content");
toggleContainers("div-publications", "publications-content");
toggleContainers("div-talks", "talks-content");
toggleContainers("div-memberships", "memberships-content");
toggleContainers("div-grants", "grants-content");

toggleContainers("div-blog", "blog-content");