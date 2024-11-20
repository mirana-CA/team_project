let heroSectionContainer = document.querySelector(".hero_section__pages");
let sildeArr = [
  {
    headingFirst: " Hi!",
    headingSecond: "I'm Jackson",
    button: `DOWNLOAD CV <i class="fa-solid fa-download"></i>`,
    img: "https://preview.colorlib.com/theme/jackson/images/img_bg_1.jpg",
  },
  {
    headingFirst: " I am",
    headingSecond: "a Designer",
    button: `VIEW PORTFOLIO <i class="fa-solid fa-briefcase"></i>`,
    img: "https://preview.colorlib.com/theme/jackson/images/img_bg_2.jpg",
  },
];
let index = 1;
let elem = sildeArr[index];

function updateSlide() {
  heroSectionContainer.classList.remove("slide-in");
  heroSectionContainer.classList.add("slide-out");

  setTimeout(() => {
    elem = sildeArr[index];
    heroSectionContainer.innerHTML = `
          <div class="hero_section__container">
            <h1>
              ${elem.headingFirst}
              <br />
               ${elem.headingSecond}
            </h1>

            <h2>
              100% html5 bootstrap templates Made by <a href="">colorlib.com</a>
            </h2>
            <button>
         ${elem.button}
           </button>
          </div>
      `;
    heroSectionContainer.style.backgroundImage = `url(${elem.img})`;
    heroSectionContainer.classList.remove("slide-out");
    heroSectionContainer.classList.add("slide-in");

    if (index == 1) {
      index = 0;
    } else {
      index++;
    }
  }, 500);
}

setInterval(updateSlide, 5000);
