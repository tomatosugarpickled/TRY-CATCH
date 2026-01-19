// 신고 버튼
const reportActiveButton = document.querySelector(".devQstnDetailMenuIcon");
const reportButton = document.querySelector(".view-more-layer");

reportActiveButton.addEventListener("click", (e) => {
    reportButton.classList.toggle("active");
});
// 공유하기 버튼
const shareButton = document.querySelector(".devShareBtn");
const toolDiv = document.querySelector(
    ".reaction-item .share-layer.tooltip-layer.qnaSpA",
);
shareButton.addEventListener("click", (e) => {
    toolDiv.style.display =
        toolDiv.style.display === "block" ? "none" : "block";
});

// 작성하기 버튼
const writeButtonDiv = document.querySelector(".navi-top-area.has-tooltip");
const writeButton = document.querySelector(".navi-top-area.has-tooltip a");

writeButton.addEventListener("click", (e) => {
    writeButtonDiv.classList.toggle("tooltip-open");
});

// URL 복사 클릭
const URLCopy = document.querySelector(
    ".button.button-copy-url.button-popup-component",
);
const URLCopyLayer = document.querySelector(".url-copy-layer");
const URLCopyLayerBefore = document.querySelector(".button.button-close");

URLCopy.addEventListener("click", (e) => {
    URLCopyLayer.classList.toggle("attached");
});

URLCopyLayerBefore.addEventListener("click", (e) => {
    URLCopyLayer.classList.remove("attached");
});

// 게시글(질문) 좋아요(로그인)
// const qstnLikeButton = document.querySelector(".devQstnLike");

// if (qstnLikeButton) {
//     qstnLikeButton.addEventListener("click", (e) => {
//         qstnLikeButton.classList.toggle("on");
//     });
// }

// 댓글 좋아요(로그인)
const chatLikeButtonList = document.querySelectorAll(
    ".answerArea li div button.btnHeart.qnaSpB.devBtnAnswerLike",
);
chatLikeButtonList.forEach((chatLike) => {
    chatLike.addEventListener("click", (e) => {
        chatLike.classList.toggle("active");
    });
});

// 대댓글(로그인)
// 대댓글 (각각 개별 토글) - ?. 문법 없이
// const commentReplyButtonList = document.querySelectorAll(
//     ".answerArea li div button.btnCmt.devBtnComtList",
// );

// commentReplyButtonList.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         // 내가 누른 버튼이 속한 li 찾기
//         const li = btn.closest("li");
//         const commentSec = li.querySelector(".commentSec");
//         btn.classList.toggle("active");
//         if (btn.classList.contains("active")) {
//             commentSec.style.display = "block";
//         } else {
//             commentSec.style.display = "none";
//         }
//     });
// });

// 북마크 등록(로그인)
// const buttonBookMark = document.querySelector(
//     ".btnBookmark.qnaSpB.devQnaDetailBookmark",
// );
// const bookMarkLayer = document.querySelector(
//     ".book-mark-layer.tooltip-layer.qnaSpA",
// );

// buttonBookMark.addEventListener("click", (e) => {
//     if (!buttonBookMark.classList.contains("on")) {
//         bookMarkLayer.style.opacity = "1";
//         setTimeout(() => {
//             bookMarkLayer.style.opacity = "0";
//         }, 975);
//     } else {
//         bookMarkLayer.style.opacity = "0";
//     }
//     buttonBookMark.classList.toggle("on");
// });

// 요소 선택（로그인）
// const wrapper = document.querySelector(".writeBoxWrap.cmtWrite");
// const textarea = wrapper.querySelector("textarea");
// const uiPlaceholder = wrapper.querySelector(".uiPlaceholder");
// const ph1 = wrapper.querySelector(".ph_1");
// const ph2 = wrapper.querySelector(".ph_2");

// // textarea 클릭(focus) 시
// textarea.addEventListener("focus", function () {
//     wrapper.classList.remove("case");
//     uiPlaceholder.classList.add("focus");
//     ph1.style.display = "none";
//     ph2.style.display = "block";
// });

// // 글자 입력 시(로그인)
// textarea.addEventListener("input", function () {
//     if (textarea.value.trim() !== "") {
//         ph2.style.display = "none";
//     } else {
//         // 글자가 없으면 ph2 다시 표시
//         ph2.style.display = "block";
//     }
// });

// // textarea blur 시 (원래대로 돌리려면)
// textarea.addEventListener("blur", function () {
//     if (textarea.value.trim() === "") {
//         wrapper.classList.add("case");
//         uiPlaceholder.classList.remove("focus");
//         ph1.style.display = "block";
//         ph2.style.display = "none";
//     }
// });

// 요소 선택（비로그인）
const wrapper = document.querySelector(".writeBoxWrap.cmtWrite");
const textarea = wrapper.querySelector("textarea");
const buttons = document.querySelectorAll(".btnBx.devComtRoot button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        alert("로그인 후 이용해주세요.");
    });
});

textarea.addEventListener("click", (e) => {
    alert("로그인 후 이용해주세요.");
});
