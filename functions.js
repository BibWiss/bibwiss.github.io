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
    
function changeColors() {
  var colors = ["#743ad5", "#f637b0", "#20ffcf"];   // the color choices
  var index = 0;                                     // index of the current color
  link = document.getElementById("internal-link");
  link.addEventListener("mouseover", function() {
    link.style.color = colors[index];  // set the color of body to the current color
      index = (index + 1) % colors.length;             // increment index to point to the next color (if it goes beyond the length of the coices array get it back to 0 using the modulo %)
})
link.addEventListener("mouseout", function() {
  link.style.color = "#30dcff"
})
};

changeColors();

//old

function addContainer(div, content, name) {
  var container = document.getElementById(div);
  var newContainer = document.createElement("div");
  newContainer.setAttribute("id", name);
  newContainer.innerHTML = (content);
  container.appendChild(newContainer);
}