$(function(){
  // 메뉴누르면 해당 구역으로 이동
  $(".menuWrap > li").each(function(index){
    $(this).on("click",function(e){
      e.preventDefault();
      let scMove = $(".menu")[index].offsetTop;
      window.scrollTo({
        top:scMove,
        behavior:"smooth"
      });
    });
  });
  $(".u").css({"top":"-20px","left":"30px"});
});

// 포트폴리오 슬라이드
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  },
})

// 메뉴 효과용
const menu = document.querySelectorAll(".menu");
const menuWrap = document.querySelectorAll(".menuWrap > li");
const wrap = document.querySelector(".menuWrap");
let menuTop = [];
window.addEventListener("scroll",function(){
  let scTop = window.scrollY;
  for(let i = 0; i < menu.length; i++){
    menuTop[i] = menu[i].offsetTop - 300;
  }
  for(let i = 0; i < menuWrap.length; i++){
    if(scTop >= menuTop[i]){
        menu[i].classList.add("scEvent")
    }
  }
  // let wrapTop = wrap.offsetTop;
  if(scTop > menuTop[0]+260){
    wrap.classList.add("scEvent");
  }
  else{
    wrap.classList.remove("scEvent");
  }
});