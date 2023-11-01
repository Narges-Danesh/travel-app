const navbar = document.getElementById("navbar");
const locationTags = document.getElementById("location-tags");
const popularSection = document.getElementById("popular-places");
const recommendedSection = document.getElementById("recommended");
const sectionContainer = document.getElementById("section-container");
const sectionElement = document.querySelector("section");

// ===================== NAV SCROLL EFFECT ==================
addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
// ===================== LOCATION TAGS ===================
const locations = ["مراکش", "نپال", "هند", "ژاپن", "گرجستان", "دبی"];
locations.forEach((tag) => {
  const span = document.createElement("span");
  span.classList.add("tag");
  const aTag = document.createElement("a");
  //   aTag.setAttribute("href", `index.html?location=${tag}`);
  span.innerHTML = tag;
  span.setAttribute("data-location", `${tag}`);
  //   span.appendChild(aTag);
  locationTags.appendChild(span);
});
// ===================== POPULAR LOCATIONS ===================
const popularLocations = [
  {
    img: "morocco/morocco-cover.jpg",
    location: "مراکش",
    stars: 4.6,
    days: 9,
    images: [
      ` <img src="images/morocco/Morocco.jpg" alt="" />
       <img src="images/morocco/Morocco (1).jpg" alt="" />
       <img src="images/morocco/morocco-cover.jpg" alt="" />
       <img src="images/morocco/zakariae-daoui-dql2-ln5srg-unsplash-scaled.jpg" alt="" />
       <img src="images/morocco/1440x810_cmsv2_03763c79-292c-518b-84c7-ca462feb3fab-7333510.webp" alt="" />`,
    ],
    distance: 5243,
    desc: `
      کشوری است در شمال غربی آفریقا . مراکش ساحلی طولانی با اقیانوس اطلس دارد که از شمال به جبل‌الطارق و دریای مدیترانه می‌رسد . کشور مراکش از سوی خاور با کشور الجزایر ، از غرب با اقیانوس اطلس ، از جنوب با کشور موریتانی و از شمال با دریای مدیترانه همسایه است . مراکش ادعای مالکیت صحرای غربی را دارد و بخش عمده‌ای از آن را از سال ۱۹۷۵ اداره کرده ‌است . وضعیت صحرای غربی هنوز مورد اختلاف و مناقشه است . پایتخت مراکش شهر رباط است .
نام «مراکش» در فارسی امروز معمولتر از «مغرب» است زیرا نام بین‌المللی پادشاهی مغرب مراکو است که برگرفته از نام مراکش است بنابراین کاربرد نام مراکش بجای مغرب در زبان فارسی بهتر است بویژه اینکه دولت آن کشور نام رسمی بین‌المللی مراکو را برسمیت می‌شناسد و نه نام عربی المغرب . ترکیه تنها کشور دنیا است که از پادشاهی مراکش با نام کشور فاس نام می‌برد .`,
    price: 20,
  },
  {
    img: "nepal/nepal-cover.jpg",
    location: "نپال",
    stars: 4.2,
    days: 7,
    images: [
      `
      <img src="images/nepal/nepal-cover.jpg" alt="" />
      
      <img src="images/nepal/154565_64a3a61ad2f3b.jpg" alt="" />
      <img src="images/nepal/154565_64a3a61ad2f3c.jpg" alt="" />
      <img src="images/nepal/154565_64a3a61ad2f38.jpg" alt="" />
      <img src="images/nepal/154565_478c8f28.jpg" alt="" />`,
    ],
    distance: 3312,
    desc: `کشور نپال با وسعتی حدود ۱۴۳ هزار و ۱۸۱ کیلومتر مربع، کشوری کوهستانی است که رشته کوه هیمالیا، بخش وسیعی از آن را تشکیل می‌دهد. بلندترین قله جهان، اورست، نیز در این کشور قرار دارد.

      نپال بین دو کشور هند و چین قرار دارد؛ بنابراین، در پاسخ به این سوال که نپال در کدام قاره است، باید بگوییم که نپال در جنوب آسیا قرار گرفته و از شمال به چین و از جنوب، غرب و شرق به هند می‌رسد. این کشور، به‌دلیل قرار گرفتن میان این دو کشور، هم از نظر نژادی و هم از نظر فرهنگی تا حد بسیاری ترکیبی از هند و چین است.`,
    price: 15,
  },
  {
    img: "india/india-cover.jpg",
    location: "هند",
    stars: 4.7,
    days: 15,
    images: [
      `
      <img src="images/india/india-cover.jpg" alt="" />
      
      <img src="images/india/110498_7bafffba.jpg" alt="" />
      <img src="images/india/110498_9b6a15da.jpg" alt="" />
      <img src="images/india/110498_514f164e.jpg" alt="" />
      <img src="images/india/110498_efd5cd61.jpg" alt="" />
      <img src="images/india/110851_a0b38f9d.jpg" alt="" />
      <img src="images/india/132595_3c4753bf.jpg" alt="" />`,
    ],
    distance: 2826,
    desc: `هند کشوری فریبنده و زیبا است. حتی اگر هزاران بار هم به این کشور سفر کنید، باز هم چیزی برای شگفت‌زده کردن‌ شما دارد. هند بین سواحل طلایی اقیانوس هند و قله‌های پوشیده از برف رشته‌کوه هیمالیا قرار گرفته است.

      کشوری متشکل از شگفتی‌های طبیعی و ساخت دست بشر، دنیای رنگارنگی از طعم‌ها و عطرهای متفاوت، صومعه‌های رازآلود، معبدهای شگفت‌انگیز، شهرهای شلوغ و پر همهمه، امپراتوری‌های گمشده، کاخ‌های مجلل، بازارهای شلوغ، پارک‌های ملی بکر، بناهای تاریخی حیرت‌انگیز و هزاران جاذبه‌ دیگر که شبیه آن‌ها را در هیچ جای دیگر دنیا پیدا نخواهید کرد.`,
    price: 13,
  },
];
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
// ===================== RECOMMENDED LOCATIONS ===================
const recommendedLocations = [
  {
    img: "dubai/dubai-cover.jpg",
    location: "دبی",
    stars: 4.9,
    date: "1 بهمن تا 25 بهمن",
    days: 25,
    images: [
      `    <img src="images/dubai/dubai-cover.jpg" alt="" />
      <img src="images/dubai/aquarium-1.jpg" alt="" />
      <img src="images/dubai/Dubai1-3.jpg" alt="" />
      <img src="images/dubai/Miracle-Garden-Dubai-600x400.jpg" alt="" />`,
    ],
    distance: 1235,
    desc: "شهر دبی یکی از شهرهای مهم تجاری در جهان نیز به شمار می رود. طبق آخرین سرشماری در سال 2009، جمعیت عروس امارات بالغ بر 1،771،000 می باشد. شهر دبی مساحتی بالغ بر 1،287،4 کیلومتر مربع (497،1 مایل) می باشد که از دیگر شهر های امارات 8 برابر بزرگ تر می باشد. دبی گران ترین شهر خاورمیانه است و در لیست شهر های گران و لاکچری جهان جایگاه 20 را دارد",
    price: 15,
  },
  {
    img: "georgia/georgia-cover.jpg",
    location: "گرجستان",
    stars: 4.6,
    date: "1 اسفند تا 10 اسفند",
    days: 10,
    images: [
      `
      
      <img src="images/georgia/georgia-cover.jpg" alt="" />
       <img src="images/georgia/bneGeneric_Georgia_sulphur_baths_Tbilisi___Cropped_0.jpg" alt="" />
      <img src="images/georgia/tbs.webp" alt="" />`,
    ],
    distance: 1525,
    desc: `گرجستان کشوری واقع در هر دو قاره آسیا و اروپا است. همسایگان گرجستان کشورهای روسیه، جمهوری آذربایجان، ترکیه و ارمنستان میباشند. پایتخت گرجستان شهر تفلیس است که یکی از مقاصد گردشگری و توریستی بسیاری از علاقه مندان است.

      گرجستان قصد عضویت در اتحادیه اروپا و ناتو را دارد و در حال حاضر عضو ناظر این مجامع میباشد. مردم گرجستان به زبان گرجی صحبت می کنند که زبان رسمی این کشور است و خط نوشتاری آنها نیز الفبای گرجی است.
      
      تعداد کثیری از مردم گرجستان پیرو مسیحیت هستند. گرجی ها بزرگترین قوم در گرجستان هستند و سایر قومیت های گرجستان شامل آذربایجانی ها، ارمنی ها و روس ها هستند. گرجستان کشوری است که بیشترین تعداد کلیسا را در یونسکو به نام خود ثبت کرده است و اماکن تاریخی بسیاری دارد که باعث جذب گردشگران زیادی شده است.`,
    price: 10,
  },
  {
    img: "japan/japan-cover.webp",
    location: "ژاپن",
    stars: 4.7,
    date: "1 دی تا 12 دی",
    days: 12,
    images: [
      `
      <img src="images/japan/japan-cover.webp" alt="" />

      <img src="images/japan/Japan-2107x1406.jpg" alt="" />
      <img src="images/japan/tokyoGettyImages-1031467664.webp" alt="" />`,
    ],
    distance: 8550,
    desc: `کشور ژاپن متشکل از بیش از 4000 جزیره است که مهمترین و شناخته شده ترین آنها شیکوکو، هوکایدو، هونشو، و کیوشو هستند به همین جهت ژاپن بیشتر از اینکه یک کشور شناخته شده باشد یک جزیره است.

      اغلب مناطق و سرزمین های ژاپن متشکل از کوه و جنگل است. میتوانیم بگوییم موقعیت جغرافیایی ژاپن در وضعیت خطرناکی قرار دارد، زیرا شکل قرارگیری پوسته های زمین در کنار یکدیگر به گونه ای است که اغلب در کنار یکدیگر  حرکت می کنند و باعث ایجاد زمین لرزه های متعددی می شوند.
      
      علاوه بر زمین لرزه ژاپن آتش فشان های زیادی را در طول سال تجره می کند که باعث خلق و ایجاد مناظر شگفت انگیزی در ژاپن می شود.`,
    price: 25,
  },
];
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
// ===================== DETAILS PAGE ===================
// const urlParams = new URLSearchParams(window.location.search);
// const paramLocation = urlParams.get("location");
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

    console.log(dataLocation);
    const allLocations = [...popularLocations, ...recommendedLocations];
    let thisLocation = allLocations.find((x) => x.location === dataLocation);
    addToDomDetails(thisLocation);

    // // =========== add a border to selected img ============
    const firstImg = document.querySelector(".images img");
    firstImg.classList.add("active");
    const backBtn = document.querySelector(".back-btn");

    backBtn.addEventListener("click", () => {
      sectionContainer.style.transform = `translateX(100%)`;
    });
  });
});

function addToDomDetails(place) {
  const { img, images, location, days, distance, stars, desc, price } = place;
  sectionElement.innerHTML = `
  <div class="img-slider">
  <span class="material-symbols-outlined bookmark"> bookmark </span>
  
  <span class="material-symbols-outlined back-btn">  chevron_left </span>
  <div class="big-cover">
    <img src="images/${img}" alt="" />
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
          <span>مدت تور</span>
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
    <div class="price"><b>${price}</b> میلیون</div>
    <button class="book-now-btn">رزرو کن</button>
  </div>
  `;
}
