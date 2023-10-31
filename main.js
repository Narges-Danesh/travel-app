const navbar = document.getElementById("navbar");
const locationTags = document.getElementById("location-tags");
const popularSection = document.getElementById("popular-places");
const recommendedSection = document.getElementById("recommended");
// ===================== NAV SCROLL EFFECT ==================
addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
// ===================== LOCATION TAGS ===================
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
// ===================== POPULAR LOCATIONS ===================
const popularLocations = [
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
popularLocations.forEach((card) => {
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
// ===================== RECOMMENDED LOCATIONS ===================
const recommendedLocations = [
  {
    img: "dubai/dubai-cover.jpg",
    location: "دبی",
    stars: 4.9,
    date: "1 بهمن تا 25 بهمن",
    days: 25,
  },
  {
    img: "georgia/georgia-cover.jpg",
    location: "گرجستان",
    stars: 4.6,
    date: "1 اسفند تا 10 اسفند",
    days: 10,
  },
  {
    img: "japan/japan-cover.webp",
    location: "ژاپن",
    stars: 4.7,
    date: "1 دی تا 12 دی",
    days: 12,
  },
];
recommendedLocations.forEach((card) => {
  const { img, location, date, days, stars } = card;

  recommendedSection.innerHTML += `
<div class="recommended-card" >
<div class="location-cover" style=' background-image: url(images/${img});'>
</div>
<div class="desc">
  <div class="name">${location}</div>
  <div class="time">
  <span class="material-symbols-outlined">calendar_today</span>
  <span>${date}</span>
  </div>
  <div class="duration">
    <span class="material-symbols-outlined">schedule</span>
    ${days} <small>روز</small>
  </div>
</div>
<div class="stars">
  <span>${stars}</span>
  <span class="material-symbols-outlined star-icon"> star </span>
</div>
</div>
`;
});
