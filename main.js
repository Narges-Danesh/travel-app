const navbar = document.getElementById("navbar");
const locationTags = document.getElementById("location-tags");
addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

const locations = [
  "انگلیس",
  "فرانسه",
  "گرجستان",
  "ترکیه",
  "قشم",
  "کیش",
  "ارمنستان",
  "دبی",
];
locations.forEach(tag => {
    const span = document.createElement('span');
    span.classList.add('tag');
    const aTag = document.createElement('a');
    aTag.innerHTML = tag;
    span.appendChild(aTag)
    locationTags.appendChild(span)
})
