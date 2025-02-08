const scrollBox = document.querySelectorAll(".scroll");
for (const scrollelement of scrollBox) {
  scrollelement.scrollLeft = (scrollelement.scrollWidth - scrollelement.clientWidth) / 2;
  
}
