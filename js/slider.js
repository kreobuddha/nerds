var slider = document.querySelector(".slider-list");

var sliderButton1 = document.querySelector(".slider-btn-1");
var sliderButton2 = document.querySelector(".slider-btn-2");
var sliderButton3 = document.querySelector(".slider-btn-3");

var sliderItem1 = document.querySelector(".slider-item-1");
var sliderItem2 = document.querySelector(".slider-item-2");
var sliderItem3 = document.querySelector(".slider-item-3");

sliderButton1.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("slider-btn-current")) {
		sliderButton2.classList.remove("slider-btn-current");
		sliderItem2.classList.remove("slider-item-current");

		sliderButton3.classList.remove("slider-btn-current");
		sliderItem3.classList.remove("slider-item-current");

		sliderButton1.classList.add("slider-btn-current");
		sliderItem1.classList.add("slider-item-current");
	}
});

sliderButton2.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("slider-btn-current")) {
		sliderButton1.classList.remove("slider-btn-current");
		sliderItem1.classList.remove("slider-item-current");

		sliderButton3.classList.remove("slider-btn-current");
		sliderItem3.classList.remove("slider-item-current");

		sliderButton2.classList.add("slider-btn-current");
		sliderItem2.classList.add("slider-item-current");
	}
});

sliderButton3.addEventListener("click", function(evt) {
	evt.preventDefault();

	if (!this.classList.contains("slider-btn-current")) {
		sliderButton1.classList.remove("slider-btn-current");
		sliderItem1.classList.remove("slider-item-current");

		sliderButton2.classList.remove("slider-btn-current");
		sliderItem2.classList.remove("slider-item-current");

		sliderButton3.classList.add("slider-btn-current");
		sliderItem3.classList.add("slider-item-current");
	}
});
