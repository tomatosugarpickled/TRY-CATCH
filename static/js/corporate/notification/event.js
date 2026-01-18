// 알림 선택
const notificationLiList = document.querySelectorAll(
    ".notification-list ul li",
);

// 알림창 다음/이전 버튼
DOMTokenList.prototype.includes = Array.prototype.includes;

const notificationSwiperWrapper = document.querySelector(
    ".notification-modal .swiper-wrapper",
);
const notificationNextButton = document.querySelector(
    ".notification-modal .swiper-button-next",
);
const notificationPrevButton = document.querySelector(
    ".notification-modal .swiper-button-prev",
);
const notificationSwiperButtons = [
    notificationNextButton,
    notificationPrevButton,
];
let notificationCount = 0;

// console.log(swiperWrapper);

notificationSwiperWrapper.style.transform = `translate(0px)`;
notificationSwiperWrapper.style.width = `${notificationLiList.length * 430}px`;
notificationSwiperButtons[1].classList.add("swiper-button-disabled");

// 알림창 닫기 버튼
const notificationModal = document.querySelector(".notification-modal");
const notificationCloseButton = document.querySelector(
    ".notification-modal .close-button",
);

// 이벤트
// 알림 선택
notificationList.addEventListener("click", (e) => {
    const notificationModal = document.querySelector(".notification-modal");
    notificationModal.classList.add("active");
});

// 이전/다음 버튼
notificationSwiperButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        notificationPrevButton.classList.remove("swiper-button-disabled");
        notificationNextButton.classList.remove("swiper-button-disabled");

        if (button.classList.includes("swiper-button-next")) {
            notificationCount++;
            notificationSwiperWrapper.style.transform = `translate(-${430 * notificationCount}px)`;

            if (notificationCount === notificationLiList.length - 1) {
                notificationNextButton.classList.add("swiper-button-disabled");
            }
        } else {
            notificationCount--;
            notificationSwiperWrapper.style.transform = `translate(-${430 * notificationCount}px)`;

            if (notificationCount === 0) {
                notificationPrevButton.classList.add("swiper-button-disabled");
            }
        }
    });
});

// 닫기 버튼
notificationCloseButton.addEventListener("click", (e) => {
    notificationModal.classList.remove("active");
});
