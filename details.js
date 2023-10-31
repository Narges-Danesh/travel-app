const sectionElement = document.querySelector("section");

// ===================== NAV SCROLL EFFECT ==================
addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  });

// ===================== DETAILS PAGE ===================

const details = [
    {
      cover: "dubai/dubai-cover.jpg",
      location: "دبی",
      images: [
        '<img src="images/dubai/dubai-cover.jpg" class="active" alt="" />',
        ' <img src="images/dubai/aquarium-1.jpg" alt="" />',
        ' <img src="images/dubai/Dubai1-3.jpg" alt="" />',
        ' <img src="images/dubai/Miracle-Garden-Dubai-600x400.jpg" alt="" />',
      ],
      days: 25,
      distance: 2000,
      stars: 4.8,
      desc: "شهر دبی یکی از شهرهای مهم تجاری در جهان نیز به شمار می رود. طبق آخرین سرشماری در سال 2009، جمعیت عروس امارات بالغ بر 1،771،000 می باشد. شهر دبی مساحتی بالغ بر 1،287،4 کیلومتر مربع (497،1 مایل) می باشد که از دیگر شهر های امارات 8 برابر بزرگ تر می باشد. دبی گران ترین شهر خاورمیانه است و در لیست شهر های گران و لاکچری جهان جایگاه 20 را دارد",
      id: 50,
    },
  ];
  details.forEach((detail) => {
    const { cover, images, location, days, distance, stars, desc } = detail;
    sectionElement.innerHTML += `
  <div class="img-slider">
  <span class="material-symbols-outlined bookmark"> bookmark </span>
  <span class="material-symbols-outlined back-btn"> chevron_left </span>
  <div class="big-cover">
    <img src="images/${cover}" alt="" />
    <div class="name">${location}</div>
  </div>
  <div class="images">
    ${images}
  </div>
  </div>
  
  <div class="tour-desc">
  <div class="tour-details">
    <div>
        <span class="material-symbols-outlined">schedule</span>
        <div class="text">
          <span>مدت زمان</span>
          <span>${days} روز</span>
        </div>
      </div>
      <div>
        <span class="material-symbols-outlined">distance</span>
        <div class="text">
          <span>فاصله</span>
          <span>${distance} کیلومتر</span>
        </div>
      </div>
      <div>
        <span class="material-symbols-outlined">star</span>
        <div class="text">
          <span>امتیاز </span>
          <span>${stars} </span>
        </div>
      </div>
  </div>
  
  <h1>توضیحات </h1>
  <p>${desc}</p>
  </div>
  <div class="book-now">
    <div class="price"><b>10</b> میلیون</div>
    <button class="book-now-btn">رزرو کن</button>
  </div>
  `;
  });
  