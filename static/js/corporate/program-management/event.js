NodeList.prototype.filter = Array.prototype.filter;

// 최근 등록일순
const sortButtons = document.querySelectorAll(".sort-button");

sortButtons.forEach((button) => {
    const sortDropDown = button.nextElementSibling;

    button.addEventListener("click", (e) => {
        sortDropDown.classList.toggle("active");
    });

    sortDropDown.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            if (button.classList.contains("sort1")) {
                const [previousItem] = sortDropDown
                    .querySelectorAll("button")
                    .filter((button) => button.classList.contains("active"));
                previousItem.classList.remove("active");
            }
            // server: 등록일/개수/담당자에 따라 프로그램 list 뿌리기
            // server: 담당자는 동적으로 생성해야함

            e.target.classList.add("active");

            if (button.classList.contains("sort1")) {
                button.textContent = e.target.textContent + "순";
            } else if (button.classList.contains("sort2")) {
                button.textContent = e.target.textContent + "씩 보기";
            } else {
                button.textContent = e.target.textContent;
            }

            sortDropDown.classList.remove("active");
        }
    });
});

// 더보기
const programList = document.querySelectorAll(
    ".scSelectAppList .scSelectAppItem",
);
programList.forEach((li) => {
    const moreOptionLayer = li.querySelector(".more-option");

    li.addEventListener("click", (e) => {
        if (e.target.closest(".moreOptionButton")) {
            moreOptionLayer.classList.toggle("active");
        }
    });
});

// document.addEventListener("click", (e) => {
//     programList.forEach((li) => {
//         const moreOptionLayer = li.querySelector(".more-option");

//         if (e.target === li.closest(".moreOptionButton")) {
//             console.log(e.target);
//             moreOptionLayer.classList.remove("active");
//         }
//     });

//     sortButtons.forEach((button) => {
//         if (e.target !== button) {
//             button.nextElementSibling.classList.remove("active");
//         }
//     });
// });
