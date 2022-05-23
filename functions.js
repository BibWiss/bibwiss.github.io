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

var newsContent = "<ul><li><i class='fa-solid fa-person-chalkboard'></i> <em>Stellenlektüre 2.0 – Chancen und Herausforderungen der computergestützten Analyse von Schlüsselstellen</em>, presentation at InFoDiTexT+ on 30.05.2022, 17:15, <a href= 'https://dhd-blog.org/?p=17675' target='_blank'>link</a>.</li></ul></p>"

var pubContent = "<br/><strong><i class='fa-solid fa-book'></i> Publications</strong><ul><li>Schneider, Sophie (2020) <em>Bibliotheks- und InformationswissenschaftlerInnen in der Twittersphäre. Gekürzte und überarbeitete Fassung einer Bachelorarbeit</em>, in Informationspraxis, Bd. 6 Nr. 1 (2020). <a href='https://doi.org/10.11588/ip.2020.1.63052' target='_blank'>https://doi.org/10.11588/ip.2020.1.63052</a>. </li><li>Schneider, Sophie (2019) <em>Microblogging in den Informationswissenschaften – Quantitative Untersuchungen exemplarischer Communities auf Twitter</em> (Bachelorarbeit). <a href='https://opus4.kobv.de/opus4-fhpotsdam/frontdoor/index/index/docId/2340' target='_blank'>Link</a>. </li><li>Schneider, Sophie (2018) <em>Wie vielfältig kann und sollte Open Access sein?. Bericht zu den Open-Access-Tagen 2018 in Graz</em> , in LIBREAS. Library Ideas, 2/2018 (34). <a href='https://doi.org/10.18452/19555' target='_blank'>https://doi.org/10.18452/19555</a>.</li></ul><strong><i class='fa-solid fa-person-chalkboard'></i> Workshops & Talks</strong><ul><li><em>Back 'em Up: Computerspiele als Objekte kulturellen Erbes</em>, presentation at DHd2022. <a href='https://doi.org/10.5281/ZENODO.6328173' target='_blank'>https://doi.org/10.5281/ZENODO.6328173</a>.</li><li>Jonathan D. Geiger, Jan Horstmann, Rabea Kleymann, Ronald Monem, Stefan Reiners, Ramona Roller, Sophie Schneider und Mareike Schumacher: <em>Glossar der Begriffe: Ein kollaboratives Schreibexperiment der AG Digital Humanities Theorie</em>, workshop at vDHd2021. <a href='https://doi.org/10.5281/zenodo.5850782' target='_blank'>https://doi.org/10.5281/zenodo.5850782</a>.</li><li>Daniel Brenn, Mareike König, Lisa Kolodzie, Paul Ramisch, Sophie Schneider und Ulrike Wuttke: <em>#twitter101dh: Super-Experiment zu Twitter, Bibliotheken und COVID-19</em>, workshop at vDHd2021. <a href='https://doi.org/10.5281/zenodo.5850760' target='_blank'>https://doi.org/10.5281/zenodo.5850760</a>.</li></ul><strong><i class='fa-solid fa-users'></i> Memberships</strong><ul><li>2020-11 to present: <a href='https://dig-hum.de/' target='_blank'>DHd e.V.</a> (Digital Humanities im deutschsprachigen Raum)</li></ul><strong><i class='fa-solid fa-book-atlas'></i> Travel Grants</strong><ul><li><a href='https://dhd-blog.org/?p=13081' target='_blank'>Reisestipendium für den Besuch der DHd 2020</a></li><li>Reisestipendium für die Teilnahme am <a href='https://www.helsinki.fi/en/helsinki-centre-for-digital-humanities/helsinki-digital-humanities-hackathon' target='_blank'>Digital Humanities Hackathon 2019 (#dhh19)</a>, eine CLARIN/DARIAH Summer School</li><li><a href='https://libreas.wordpress.com/2018/06/08/libreas-reisestipendium/' target='_blank'>Reisestipendium des LIBREAS-Vereins für den Besuch der Open-Access-Tage 2018 (TU Graz)</a></li></ul>"

toggleContainers("div-social", socialContent, "social-added");
toggleContainers("div-news", newsContent, "news-added");
toggleContainers("div-pub", pubContent, "pub-added");
