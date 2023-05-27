var startPos = 0,
  translate = 20,
  prevTranslate = 0

window.onload = load;

function load() {
  /*let slides_offer = Array.from(document.getElementsByClassName('offer-slider'))
    slides_offer.forEach((slide, index) => {
    slide.addEventListener('touchstart', (e) => touchStart(e, slide))
    slide.addEventListener('touchend', (e) => touchEnd(e, index, slide, "offer-slider", "o-dot", " active"))
    slide.addEventListener('touchmove', (e) => touchMove(e, slide))
  })*/

  let slides_driver = Array.from(document.getElementsByClassName('driver-slider'))
  slides_driver.forEach((slide, index) => {
    slide.addEventListener('touchstart', (e) => touchStart(e, slide))
    slide.addEventListener('touchend', (e) => touchEnd(e, index, slide, 'driver-slider', 'd-dot', ' active'))
    slide.addEventListener('touchmove', (e) => touchMove(e, slide))
  })

  let slides = Array.from(document.getElementsByClassName('mySlides'))
  slides.forEach((slide, index) => {
    slide.addEventListener('touchstart', (e) => touchStart(e, slide))
    slide.addEventListener('touchend', (e) => touchEnd(e, index, slide, 'mySlides', 'dot', ' active'))
    slide.addEventListener('touchmove', (e) => touchMove(e, slide))
  })
}

function getPositionX(event){
  return event.changedTouches[0].clientX
}

function touchStart(event){
  startPos = getPositionX(event)
}

function touchEnd(event, index, slide, slides_, dots_, dots_active){
  var element = slide;
  element.style.opacity = '1';
  element.style.transform = "translateX(" + 0 + "px)"
  if(startPos-getPositionX(event) > 50)
  {
    currentSlide(index+2, slides_, dots_, dots_active)
  }
  else if(startPos-getPositionX(event) < -50){
    currentSlide(index, slides_, dots_, dots_active)
  }
}

function touchMove(event, slide){
  var element = slide;
  element.style.opacity = '0.5';

  if(startPos-getPositionX(event) > 0){
    element.style.transform = "translateX(-"+ translate +"px)";
    prevTranslate = -translate;
  }
  else if (startPos-getPositionX(event) < 0){
    element.style.transform = "translateX(" + translate + "px)";
    prevTranslate = translate;
  }
}
