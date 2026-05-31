function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveAnimation();

let tl = gsap.timeline();

function loading() {
  tl.from(".page1 h1", {
    y: 200,
    duration: 0.5,
    delay: 0.8,
    opacity: 0,
    stagger: 0.2
  })
  tl.from(".videocon", {
    opacity: 0,
    duration: 1

  })
}
loading();

function playBtnMove() {
  let videocon = document.querySelector(".videocon");
  let playBtn = document.querySelector(".play-btn");

  videocon.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1
    })
  })

  document.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 40,
      top: dets.y - 60,
      zIndex: 3
    })
  })
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0
    })
  })

}
playBtnMove();

function logoAnimation() {

  tl.to(".logo-text , .logo", {

    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: ".logo",
      scroller: ".main",
      start: "top 8%",
      end: "top -0%",
      scrub: 1
    }

  })
  tl.to(".ul", {
    opacity: 0,
    transform: "translateY(-120%)",
    scrollTrigger: {
      trigger: ".logo",
      scroller: ".main",
      start: "top 0%",
      end: "top -3%",
      scrub: 1
    }

  })
}
logoAnimation();

function cursorAnimation() {
  let cursor = document.querySelector(".cursor");
  let child1 = document.querySelector("#child1");

  child1.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {

      backgroundColor: " rgba(200, 195, 245, 0.251)",
      scale: 1,
      opacity: 1
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x - 100,
      top: dets.y - 100,
    });
  });

  child1.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: " scale(0)",
      opacity: 0,

    });
  });


  let child2 = document.querySelector("#child2");

  child2.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {

      backgroundColor: " #dadada",
      scale: 1,
      opacity: 1
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x - 100,
      top: dets.y - 100,
    });
  });

  child2.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: " scale(0)",
      opacity: 0,

    });
  });


  let child3 = document.querySelector("#child3");

  child3.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {

      backgroundColor: "rgba(60, 255, 0, 0.318)",
      scale: 1,
      opacity: 1
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x - 100,
      top: dets.y - 100,
    });
  });

  child3.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: " scale(0)",
      opacity: 0,

    });
  });


  let child4 = document.querySelector("#child4");

  child4.addEventListener("mouseenter", function () {
    gsap.to(".cursor", {

      backgroundColor: "rgba(220, 134, 237, 0.348)",
      scale: 1,
      opacity: 1
    });
  });
  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x - 100,
      top: dets.y - 100,
    });
  });

  child4.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      transform: " scale(0)",
      opacity: 0,

    });
  });

}
cursorAnimation();

function menuAnimation() {

  let menuBtn = document.querySelector(".menu1");
  let menuPage = document.querySelector(".menuPage");
  let span1 = document.querySelector(".span1");
  let span2 = document.querySelector(".span2");
  let logo = document.querySelector(".logo");
  let logoText = document.querySelector(".logo-text");
  let menu = document.querySelector(".menu2");
  let link1 = document.querySelector("#link1");
  let link2 = document.querySelector("#link2");
  let link3 = document.querySelector("#link3");
  let link4 = document.querySelector("#link4");


  menuBtn.addEventListener("click", function () {
    span1.classList.toggle("active");
    span2.classList.toggle("active2");
    menuPage.classList.toggle("menuActive");
    logo.classList.toggle("white");
    logoText.classList.toggle("white");
    menu.classList.toggle("white");
    link1.classList.toggle("linkActive");
    link2.classList.toggle("linkActive");
    link3.classList.toggle("linkActive");
    link4.classList.toggle("linkActive");

    gsap.from(".menuLinks ", {
      y: 100,
      stagger: 0.03
    })

    gsap.from(".left1 , .left2 , .left3 ", {
      y: 100,
      opacity: 0,
      stagger: 0.2
    })

  })
}
menuAnimation();

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      "@0.75": {
        slidesPerView: 5.1,
        spaceBetween: 0,
      },
      "@1.00": {
        slidesPerView: 5.1,
        spaceBetween: 0,
      },
      "@1.50": {
        slidesPerView: 5.1,
        spaceBetween: 0,
      },
    },
  });
}
swiperAnimation();

function sliderAnimation() {

  arr = [
    { no: 1, name: "Cartier.", info: "<div>THANK YOU SO MUCH FOR THE</div><div>BEAUTIFUL CATERING; IT MEANS </div><div>ALOT WORKING WITH A </div><div> COMPANYSUCH AS TWO GOOD</div><div>CO.</div> " },
    { no: 2, name: "Felicity T.", info: "<div>THE HAMPERS WE ORDERED  </div><div>WERE LOVELY AND THE TEAM </div><div>ARE WONDERFUL TO LIAISE </div><div>WITH.</div> " },
    { no: 3, name: "Barbara.", info: "<div>MY PACKAGE JUST ARRIVED </div><div>AND THE PRESENTATION IS SO </div><div>BEAUTIFUL; ELEGANT, MAGICAL</div><div>AND MEANINGFUL, WITH THE </div><div>ITEMS WRAPPED IN </div><div>DELICIOUS- SMELLING TISSUE </div><div>PAPER.GORGEOUS; WILL BE </div><div>BACK FOR MORE.</div> " },
    { no: 4, name: "Salesforce.", info: "<div>I THINK I SPEAK FOR EVERYONE</div><div> WHEN I SAY WE ARE VERY </div><div>GRATEFUL TO HAVE BEEN ABLE</div><div> TO COME IN AND HELP OUT FOR </div><div>THE DAY; THE WORK YOU DO IS </div><div>AMAZING.</div>" },
    { no: 5, name: "Benita C.", info: "<div>EVERYONE AT TWO GOOD ARE</div><div> LOVELY TO WORK WITH.</div><div> CATERING WAS EXCELLENT AND </div><div>WELL PRICED, ALL FOR A GOOD</div><div> CAUSE... WHAT'S NOT TO LOVE?</div>" },
    { no: 6, name: "Richard.", info: "<div>MY CEO ASKED ME WHO I HAD </div><div> USED FOR THE CATERING; WHEN  </div><div>I EXPLAINED ABOUT TWO </div><div> GOOD, SHE SAID 'OH, THAT'S  </div><div>WHY - THE FOOD IS MADE WITH </div><div> LOVE.'</div>" },
    { no: 7, name: "10x Banking.", info: "<div>THIS IS THE BEST CATERING  </div><div>FOOD I HAVE HAD IN YEARS. ALL  </div><div> THE MEALS WERE ABSOLUTELY </div><div>DELICIOUS, WELL PRESENTED  </div><div> AND GENEROUS.</div>" },
    { no: 8, name: "Brendan D.", info: "<div>GREAT CAUSE, GREAT PEOPLE  </div><div>AND ABSOLUTELY GREAT FOR  </div><div> THE ENVIRONMENT.</div>" },
    { no: 9, name: "Trish.", info: "<div>THANK YOU SO VERY MUCH  </div><div> FOR THE BEAUTIFUL GIFT PACKS;  </div><div> MY HEART MELTED. I NEARLY  </div><div> CRIED WHEN I OPENED ONE; I  </div><div> CAN ONLY IMAGINE HOW THE  </div><div> WOMEN IN THE SHELTERS FEEL  </div><div> WHEN THEY RECEIVE SUCH A  </div><div> GIFT.</div>" },
    { no: 10, name: "Amazon.", info: "<div>I WANTED TO SAY A MASSIVE  </div><div>THANK YOU FOR THE  </div><div>ABSOLUTELY BRILLIANT </div><div> CATERING AT OUR TEAM OFFSITE  </div><div>YESTERDAY. THE FOOD WAS  </div><div>ABSOLUTELY MAGNIFICENT -  </div><div>HIGH QUALITY, FRESH AND  </div><div>DELICIS. I HAD SO MANY  </div><div>POSITIVE COMMENTS FROM MY </div><div> TEAM...I WILL DEFINITELY BE A   </div><div>REPEAT CUSTOMER.</div>" },
    { no: 11, name: "Alix G.", info: "<div>LOVE THE QUALITY OF THE FOOD </div><div> AND LEVEL OF CUSTOMER  </div><div> SERVICE EQUALS THE  </div><div>'MEANINGFULNESS' OF EVERY </div><div> PURCHASE.</div>" },
    {
      no: 12, name: "Australian Chamber <br>Orchestra.",
      info: "<div>I CAN'T THANK YOU ENOUGH  </div><div>FOR THE AMAZING FOOD YOUR </div><div> TEAM PROVIDED US TODAY. OUR </div><div> STAFF COULDN’T SPEAK HIGHLY  </div><div>ENOUGH OF THE  </div><div>FISH AND THE SALADS; LOOKING FORWARD  </div><div>TO WORKING TOGETHER MORE.</div>"
    },
    { no: 13, name: "WiseTech.", info: "<div>BLOWN AWAY BY THE QUALITY </div><div>  OF THE FOOD AND  </div><div> PRESENTATION.</div>" },
    { no: 14, name: "Hanadi K.", info: "<div>I LOVE THE WAY THEY OPERATE;  </div><div>DONATING IS ONE THING BUT </div><div> EMPLOYING AND EMPOWERING  </div><div>WOMEN IS SO IMPORTANT.</div>" },
    {
      no: 15, name: "Holly, Purpose<br>Conference.",
      info: "<div>IT WAS AN ABSOLUTE PLEASURE </div><div> TO PARTNER WITH TWO GOOD  </div><div>CO FOR THE EVENT. YOUR FOOD  </div><div>WAS ABSOLUTELY DELICIOUS! </div><div> THE FEEDBACK WE HAVE  </div><div>RECEIVED HAS BEEN  </div><div>RESOUNDINGLY POSITIVE - WITH DEEPLY TOUCHED BY THE </div><div> EXPERIENCE.</div>"
    },
    { no: 16, name: "Diane M.", info: "<div>I LOVE THE STORY BEHIND THIS  </div><div>BUSINESS AND THE PEOPLE </div><div> WHO RUN AND WORK IN IT - IT  </div><div>FEELS GOOD TO WORK WITH  </div><div>PEOPLE DOING A GOOD JOB</div>" },
    { no: 17, name: "Barbara.", info: "<div>MY PACKAGE JUST ARRIVED  </div><div> AND THE PRESENTATION IS SO  </div><div>BEAUTIFUL...ELEGANT, MAGICAL  </div><div>AND MEANINGFUL AT THE SAME  </div><div>TIME. THANK YOU SO MUCH; </div><div> WILL BE BACK FOR MORE.</div>" },
    { no: 18, name: "Annabel.", info: "<div>HOW GOOD IS YOUR COOK  </div><div>BOOK!? OH MY, OH MY; I AM </div><div> GOING TO HAVE NO ISSUES </div><div> WORKING MY WAY THROUGH IT THIS YEAR, IT’S ALL SO BLOODY  </div><div>DELICIOUS.</div>" },
    { no: 19, name: "Lukus W.", info: "<div>AN IMMENSELY GREAT  </div><div>COMPANY... AND WHAT A  </div><div>GREAT  CAUSE DRIVING THE  </div><div>BUSINESS.</div>" }
  ]

  let clutter = ""
  arr.forEach((elem) => {

    clutter += `  <div id = "${elem.no}"class=" swiper-slide">
  <i id = " icon${elem.no}" class="fa-regular fa-circle"></i>
  <div class="noWrapper">
      <div> m// 00${elem.no}</div>
      <div>${elem.name}</div>
  </div>
  
  </div>`
  });

  let slide = document.querySelector(".swiper-slide");
  let wrap = document.querySelector(".swiper-wrapper")

  wrap.innerHTML = clutter

  wrap.addEventListener("click", function (dets) {
    let iconClicked = document.getElementById(`${Number(dets.target.id)}`)

    document.querySelector(".infoBox h1").innerHTML = arr[iconClicked.id - 1].info

    tl.from(".infoHolder div", {
      y: 200,
      duration: 0.3,
      delay: 0.2,
      opacity: 0,
      stagger: 0.1
    })

  })
}
sliderAnimation();

function textareaAnim() {

  let textarea = document.querySelector(".textarea");
  let h1 = document.querySelector(".inputH1");

  textarea.addEventListener("focus", () => {
    h1.style.opacity = 0
  })

  textarea.addEventListener("blur", () => {
    if (textarea.value.trim() == "") {
      textarea.value = ""
      h1.style.opacity = 1
    }
  })
}
textareaAnim();

function footerAnim() {
  gsap.from(".logoSvg path", {
    transform: "rotate(45deg)",
    opacity: 0,
    delay: 1,
    scale: 1.5,
    stagger: 1,
    scrollTrigger: {
      trigger: ".logoSvg",
      scroller: ".main",
      start: "top 100%",
      end: "top 80%",
      scrub: 2
    }

  })
}
footerAnim();