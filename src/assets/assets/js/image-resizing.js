const wrappers = document.querySelectorAll(".aximo-image-resizing-item");
const wrapArray = Array.from(wrappers);

wrapArray.forEach(item => {
  const text = item.childNodes[1]

  item.addEventListener("mouseover", function() {
    wrapArray.filter(others => {
      if (others !== item) {
        others.classList.remove("expand");
      }
    });
    this.classList.add("expand");
    text.classList.add('active')
  });

  item.addEventListener("mouseout", function() {
    this.classList.remove("expand");
    text.classList.remove('active')
  });
});
