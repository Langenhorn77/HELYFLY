var COMMENTS_QUANTITY = 2;
var count = 0;

var body = document.body;
var popup = document.querySelector(".popup__window");
var popupForm = popup.querySelector(".popup__form");
var close = popup.querySelector(".popup__close");
var booking = document.querySelector(".exclusive__booking");
var overlay = document.querySelector(".overlay");

var tel = document.querySelector("#tel");
var card = document.querySelector("#card");
var term = document.querySelector("#term");
var cvv = document.querySelector("#cvv");


// Показать комментарии

var reviewsCount = document.querySelector(".reviews__number");
var reviewsLoader = document.querySelector(".reviews__show");

var showCommentsHandler = function () {
  var commentsHidden = document.querySelectorAll(".reviews__item.visually-hidden");
  if (commentsHidden.length > COMMENTS_QUANTITY) {
    count++;
    for (var j = 0; j < COMMENTS_QUANTITY; j++) {
      commentsHidden[j].classList.remove('visually-hidden');
    }
    reviewsCount.childNodes[0].textContent = commentsHidden.length.toString();
  } else {
    for (var n = 0; n < commentsHidden.length; n++) {
      commentsHidden[n].classList.remove('visually-hidden');
      reviewsLoader.classList.add('disabled');
    }
    reviewsCount.childNodes[0].textContent = commentsHidden.length.toString();
  }
};

reviewsLoader.addEventListener('click', showCommentsHandler);

// Показать фото

var photosLoader = document.querySelector(".photos__show-button");

var showPhotosHandler = function () {
  var photosHidden = document.querySelectorAll(".photos__item.visually-hidden");
  for (var j = 0; j < photosHidden.length; j++) {
    photosHidden[j].classList.remove("visually-hidden");
  }
  photosLoader.disabled = true;
};

photosLoader.addEventListener('click', showPhotosHandler);


// Показать видео

var video = document.querySelector(".photo-session__video");
var videoImg = video.querySelector(".photo-session__video--img");
var videoIframe = video.querySelector(".photo-session__video--iframe");

videoImg.addEventListener("click", function () {
  videoImg.classList.add("disabled");
  videoIframe.classList.remove("disabled");
});


// Открытие и закрытие формы

booking.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  body.classList.toggle("noscroll");
  overlay.classList.add("overlay-show")
});

var closePopup = function () {
  popup.classList.remove("popup-show");
  body.classList.toggle("noscroll");
  overlay.classList.remove("overlay-show");
  if (popup.classList.contains("popup-error")) {
    popup.classList.remove("popup-error")
  }
}

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  closePopup();
});

var formRule = /[0-9]/;


popupForm.addEventListener("submit", function (evt) {
  if ((!(card.value.match(formRule))) || (card.value.length !== 16)) {
    evt.preventDefault();
    popup.classList.add("popup-error");
  } else if ((!(term.value.match(formRule))) || (term.value.length !== 4)) {
    evt.preventDefault();
    popup.classList.add("popup-error");
  } else if ((!(cvv.value.match(formRule))) || (cvv.value.length !== 3)) {
    evt.preventDefault();
    popup.classList.add("popup-error");
  } else if (!(tel.value.match(formRule))) {
    evt.preventDefault();
    popup.classList.add("popup-error");
  } else {
    evt.preventDefault();
    closePopup();
  }
});
