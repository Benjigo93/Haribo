const body = document.querySelector("body")

const nav = body.querySelector(".header__nav")
const open = body.querySelector(".header__nav__icon")
const link = nav.querySelectorAll('a')
let checkNav = false

open.addEventListener("click", () => {
  if(!checkNav){
    nav.classList.add("is-open");
    checkNav = true
    for (let i = 0; i<link.length; i++){
      link[i].addEventListener('click', () => {
        nav.classList.remove("is-open");
        checkNav = false
      })
    }
  }else{
    nav.classList.remove("is-open");
    checkNav = false
  }
})

if (body.querySelector(".homepage")) {
  const articlesBox = body.querySelectorAll('.overview--articles__box')
  for (let j = 0; j<articlesBox.length; j++){
    articlesBox[j].addEventListener('click', ()=>{
      console.log('ok')
      window.location.href = "/pages/article"+ (j+1) +".html";
    })
  }
}

if (body.querySelector(".site--product")) {
  if (window.matchMedia("(max-width: 720px)").matches) {
    const productImage = body.querySelector(".product__image");
    const elementOpen = body.querySelector(".product__box--absolute");
    let checkOpen = false;
    elementOpen.addEventListener("click", () => {
      if (checkOpen == false) {
        elementOpen.classList.add("is-open");
        productImage.classList.add("is-open");
        checkOpen = true;
      } else {
        elementOpen.classList.remove("is-open");
        productImage.classList.remove("is-open");
        checkOpen = false;
      }
    });
  }
}
