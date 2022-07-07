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

var pubContent = "<strong><i class='fa-solid fa-person-chalkboard'></i> Workshops & Talks</strong><ul><li><em>Back 'em Up: Computerspiele als Objekte kulturellen Erbes</em>, presentation at DHd2022. <a href='https://doi.org/10.5281/ZENODO.6328173' target='_blank'>https://doi.org/10.5281/ZENODO.6328173</a>.</li><li>Jonathan D. Geiger, Jan Horstmann, Rabea Kleymann, Ronald Monem, Stefan Reiners, Ramona Roller, Sophie Schneider und Mareike Schumacher: <em>Glossar der Begriffe: Ein kollaboratives Schreibexperiment der AG Digital Humanities Theorie</em>, workshop at vDHd2021. <a href='https://doi.org/10.5281/zenodo.5850782' target='_blank'>https://doi.org/10.5281/zenodo.5850782</a>.</li><li>Daniel Brenn, Mareike König, Lisa Kolodzie, Paul Ramisch, Sophie Schneider und Ulrike Wuttke: <em>#twitter101dh: Super-Experiment zu Twitter, Bibliotheken und COVID-19</em>, workshop at vDHd2021. <a href='https://doi.org/10.5281/zenodo.5850760' target='_blank'>https://doi.org/10.5281/zenodo.5850760</a>.</li></ul><strong><i class='fa-solid fa-users'></i> Memberships</strong><ul><li>2020-11 to present: <a href='https://dig-hum.de/' target='_blank'>DHd e.V.</a> (Digital Humanities im deutschsprachigen Raum)</li></ul><strong><i class='fa-solid fa-book-atlas'></i> Travel Grants</strong><ul><li><a href='https://dhd-blog.org/?p=13081' target='_blank'>Reisestipendium für den Besuch der DHd 2020</a></li><li>Reisestipendium für die Teilnahme am <a href='https://www.helsinki.fi/en/helsinki-centre-for-digital-humanities/helsinki-digital-humanities-hackathon' target='_blank'>Digital Humanities Hackathon 2019 (#dhh19)</a>, eine CLARIN/DARIAH Summer School</li><li><a href='https://libreas.wordpress.com/2018/06/08/libreas-reisestipendium/' target='_blank'>Reisestipendium des LIBREAS-Vereins für den Besuch der Open-Access-Tage 2018 (TU Graz)</a></li></ul>"

toggleContainers("div-social", "social-content");
toggleContainers("div-news", "news-content");

toggleContainers("div-activities", "activities-content");
toggleContainers("div-publications", "publications-content");
toggleContainers("div-talks", "talks-content");

//old

function addContainer(div, content, name) {
  var container = document.getElementById(div);
  var newContainer = document.createElement("div");
  newContainer.setAttribute("id", name);
  newContainer.innerHTML = (content);
  container.appendChild(newContainer);
}