// change link color to a selection of different colors on hover

index = 0;

function changeColors(link, index) {
  var colors = ["#743ad5", "#f637b0", "#20ffcf"];   // the color choices
  index = (index + 1) % colors.length;
  link.addEventListener("mouseover", function() {
    link.style.color = colors[index];
    })
  link.addEventListener("mouseout", function() {
    link.style.color = "#30dcff";
    })
  link.addEventListener("touchcancel", function() {
    link.style.color = "#30dcff";
    })
};

all_links = document.links;

for (var i = 0; i < all_links.length+1; i++) { 
  var link = all_links[i];
  index = index+1;
  changeColors(link, index);
  
}