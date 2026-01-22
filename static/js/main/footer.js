// 공지사항 세로 슬라이드 배너(공용)
const noticeSlide = document.querySelector(".noti-slide .swiper-wrapper");
let count = 1;

// 첫번째 공지사항을 마지막에 추가
const firstNoticeBanner = document.createElement("li");
firstNoticeBanner.className = "swiper-slide";
firstNoticeBanner.style.height = "24px";
firstNoticeBanner.innerHTML = `<a href="">[무료] TRY-CATCH 더 리부트 컨퍼런스ㅣAI로 채용을 새롭게</a>`;
noticeSlide.appendChild(firstNoticeBanner);

// 마지막 공지사항을 맨 앞에 추가
const lastNoticeBanner = document.createElement("li");
lastNoticeBanner.className = "swiper-slide";
lastNoticeBanner.style.height = "24px";
lastNoticeBanner.innerHTML = `<a href="">TRY-CATCH 이용약관 개정 안내</a>`;
noticeSlide.prepend(lastNoticeBanner);

noticeSlide.style.transform = `translateY(-${24 * count}px)`;

const autoSlide = () => {
    count++;
    noticeSlide.style.transform = `translateY(-${24 * count}px)`;
    noticeSlide.style.transition = `transform 0.5s`;

    if (count === 4) {
        setTimeout(() => {
            noticeSlide.style.transform = `translateY(-${24}px)`;
            noticeSlide.style.transition = `transform 0s`;
        }, 500);
        count = 1;
    }
};

let autoSlideInterval = setInterval(autoSlide, 3000);

// 마우스 올리면 멈춤
noticeSlide.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});

// 마우스 떼면 다시 시작
noticeSlide.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});
