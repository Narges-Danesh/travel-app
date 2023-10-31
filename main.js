const navbar = document.getElementById("navbar");
const locationTags = document.getElementById("location-tags");
const popularSection = document.getElementById("popular-places");
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
locations.forEach((tag) => {
  const span = document.createElement("span");
  span.classList.add("tag");
  const aTag = document.createElement("a");
  aTag.innerHTML = tag;
  span.appendChild(aTag);
  locationTags.appendChild(span);
});

const locationCards = [
  {
    img: "morocco/morocco-cover.jpg",
    location: "مراکش",
    stars: 4.6,
  },
  {
    img: "nepal/nepal-cover.jpg",
    location: "نپال",
    stars: 4.2,
  },
  {
    img: "india/india-cover.jpg",
    location: "هند",
    stars: 4.7,
  },
];

locationCards.forEach((card) => {
  const { img, location, stars } = card;

  popularSection.innerHTML += `
<div class="popular-card" style='background-image: url(images/${img}), linear-gradient(180deg, transparent, black)'>
            <div class="card-location-name">${location}</div>
            <div class="stars">
              <span>${stars}</span>
              <span class="material-symbols-outlined star-icon"> star </span>
            </div>
          </div>
`;
});
