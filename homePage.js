// ===================== DETAILS PAGE ===================

// ===================== LOCATION TAGS ===================
const locations = ["مراکش", "نپال", "هند", "ژاپن", "گرجستان", "دبی"];
locations.forEach((tag) => {
  const span = document.createElement("span");
  span.classList.add("tag");
  span.innerHTML = tag;
  span.setAttribute("data-location", `${tag}`);
  locationTags.appendChild(span);
});
// =====================  ADD TO DOM ===================
popularLocations.forEach((card) => {
  const { img, location, stars } = card;

  popularSection.innerHTML += `
        
         <div class="popular-card" data-location="${location}" style='background-image: url(images/${img}), linear-gradient(180deg, transparent, black)'>
         <div class="name">${location}</div>
         <div class="stars">
           <span>${stars}</span>
           <span class="material-symbols-outlined star-icon"> star </span>
         </div>
         </div>
          `;
});

recommendedLocations.forEach((card) => {
  const { img, location, date, days, stars } = card;

  recommendedSection.innerHTML += `
          
          <div class="recommended-card" data-location="${location}" >
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

let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = popularSection.scrollLeft;
  popularSection.classList.add("dragging");
};
const dragging = (e) => {
  if (!isDragging) return;
  popularSection.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  setTimeout(() => {
    isDragging = false;
    popularSection.classList.remove("dragging");
  }, 100);
};

popularSection.addEventListener("mousedown", dragStart);
popularSection.addEventListener("mouseup", dragStop);
popularSection.addEventListener("mousemove", dragging);

const sliderImages = popularSection.querySelectorAll(".popular-card");
// sliderImages.forEach((image) => {
//     image.addEventListener('click', (e) => {
//         if (isDragging) {
//             e.preventDefault();
//     sectionContainer.style.transform = `translateX(100%)`;

//         } else {
//     sectionContainer.style.transform = `translateX(0)`;

//         }
//     });
// });

let dataLocation = "";

const allDataAttributes = document.querySelectorAll("[data-location]");
allDataAttributes.forEach((data) => {
  data.addEventListener("click", () => {
    sectionContainer.style.transform = `translateX(0)`;
    if (data.children.length > 2) {
      let nameElement = data.children[1].children;
      let children = Array.from(nameElement);
      children.forEach((child) => {
        if (child.classList.contains("name")) {
          dataLocation = child.innerHTML;
        }
      });
    } else if (data.children.length > 0) {
      let children = Array.from(data.children);
      children.forEach((child) => {
        if (child.classList.contains("name")) {
          dataLocation = child.innerHTML;
        }
      });
    } else {
      dataLocation = data.innerHTML;
    }

    let thisLocation = allLocations.find((x) => x.location === dataLocation);
    addToDomDetails(thisLocation);
  });
});
