// 위의 전체, 수락, 거절, 미응답 누르면 span태그 class에 active 삽입
const listChecks = document.querySelectorAll(".status-tabs li span");

let templist = listChecks[0];

listChecks[0].classList.add("active");

listChecks.forEach((list, i) => {
    list.addEventListener("click", (e) => {
        if (templist) {
            templist.classList.remove("active");
        }
        templist = listChecks[i];
        listChecks[i].classList.add("active");
    });
});

// 조회 버튼 클릭시 숨겨진 모달 나오게한다

const showBtn = document.querySelector(".dropdown-trigger");
const monthModal = document.querySelector(".dropdown-menu");

const applicantWrapper = document.querySelector(".page-container");

showBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    monthModal.style.display = "block";
});

document.addEventListener("click", () => {
    monthModal.style.display = "none";
});

// 모달의 n개월 클릭시 버튼의 내용 변경한다.
const monthModalList = document.querySelectorAll(".dropdown-menu ul li button");

monthModalList.forEach((list, i) => {
    list.addEventListener("click", (e) => {
        showBtn.textContent = list.textContent;
    });
});

// 필터 아이콘 클릭하면 필터모달이 나온다.
const filterBtn = document.querySelector(".btn-filter-toggle");
const filterModal = document.querySelector(".filter-modal");

filterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    filterModal.style.display = "block";
});

document.addEventListener("click", () => {
    filterModal.style.display = "none";
});

// 하,,,
const filterBtnList = document.querySelectorAll(".filter-option");
const addbox = document.querySelector(".selected-filters");
const modalResetBtn = document.querySelector(".btn-filter-reset");
console.log(modalResetBtn);

filterBtnList.forEach((list, i) => {
    filterModal.addEventListener("click", (e) => {
        e.stopPropagation();
    });
    list.addEventListener("click", (e) => {
        const value = list.textContent;
        const spanId = `filter${i}`;
        const isActive = list.classList.toggle("active");

        const existSpan = document.getElementById(spanId);

        if (isActive && !existSpan) {
            const span = document.createElement("span");
            span.id = spanId;
            span.classList.add("selected-filter-tag");
            span.textContent = value;
            console.log(value);
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "btnSelDel mtcBtnB devFilterItemDelBtn";
            btn.dataset.filterGroup = "1_" + (i + 1);

            const skip = document.createElement("span");
            skip.className = "blind";
            skip.textContent = "삭제";

            span.append(btn);
            btn.append(skip);

            addbox.append(span);
            return;
        }

        if (!isActive && existSpan) {
            existSpan.remove();
        }
    });

    addbox.addEventListener("click", (e) => {
        const delBtn = e.target.closest(".btnSelDel");
        if (!delBtn) return;

        const item = delBtn.closest(".selected-filter-tag");
        const index = item.id.replace("filter", "");

        filterBtnList[index].classList.remove("active");
        item.remove();
    });
});

// 검색 누르면 위의 숨겨진 input에 값 입력
const searchBtn = document.querySelector(".btn-search");
const searchDiv = document.querySelectorAll(".selected-filter-tag");

console.log(searchDiv);

// 승인 버튼 클릭시 실시간으로 span입력

const applicantApproveBtn = document.querySelectorAll(".btn-approve");
const liveTimeStamp = document.querySelectorAll(".approval-time");
const approvemodalOverlay = document.querySelector(".modal--approve");

applicantApproveBtn.forEach((Btn, i) => {
    Btn.addEventListener("click", (e) => {
        if (liveTimeStamp[i].querySelector("span")) return;

        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 [1, 8]
        const date = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0"); // 24시간 형식 [1]
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const timeText = `${year}년${month}월${date}일${hours}시간${minutes}분`;

        const spanId = `stamps${i}`;
        const span = document.createElement("span");
        span.textContent = timeText;

        liveTimeStamp[i].append(span);
    });
});

// 승인 버튼을 누르면 상태에 승인인지 반려인지 선택
const approvalBtn = document.querySelector(".btn-approve");
const rejectBtn = document.querySelector(".btn-reject");
const statusText = document.querySelectorAll(".approval-name");
const isChecks = document.querySelectorAll(".checkbox-item");

console.log(statusText);
isChecks.forEach((check) => console.log(check.checked));

approvalBtn.addEventListener("click", (e) => {
    isChecks.forEach((check, i) => {
        if (check.checked) {
            const approval = document.createElement("span");
            approval.classList.add("approval-name");
            approval.style.color = "#5288FF";
            approval.textContent = "승인";

            statusText[i].append(approval);
            check.checked = false;
        }
    });
});

rejectBtn.addEventListener("click", (e) => {
    isChecks.forEach((check, i) => {
        if (check.checked) {
            const approval = document.createElement("span");
            approval.classList.add("approval-name");
            approval.style.color = "#FF501B";
            approval.textContent = "반려";

            statusText[i].append(approval);
            check.checked = false;
        }
    });
});

// const approvalBtn = document.querySelector(".btn-approve");
// const statusTexts = document.querySelectorAll(".approval-name");
// const checkboxes = document.querySelectorAll(".checkbox-item");

// const APPROVAL = "승인";
// const REJECT = "반려";

// // 승인 버튼 클릭
// approvalBtn.addEventListener("click", (e) => {
//     // 체크된 행들 찾기
//     const checkedRows = Array.from(checkboxes).filter((cb) => cb.checked);

//     checkedRows.forEach((checkbox) => {
//         // 체크박스가 속한 행(tr) 찾기
//         const row = checkbox.closest(".applicant-row");
//         // 그 행의 상태 텍스트 찾기
//         const statusText = row.querySelector(".approval-name");

//         if (statusText) {
//             statusText.textContent = APPROVAL;
//             checkbox.checked = false;
//         }
//     });
// });

// 검색하기 누르면 숨겨진 영역에 필터 체크한 것 나오게

// const hiddenFilter = document.querySelector(".filter-list");
// console.log(hiddenFilter);
