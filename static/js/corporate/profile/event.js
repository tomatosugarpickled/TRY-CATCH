// 로고 업로드 모달
// 열기
const logoUploadButton = document.getElementById("devLogoUp");
const logoUploadLayout = document.querySelector(".tbCell.tbLogo");

const logoUploadModal = document.querySelector(".popLogoUpload");
const logoDeleteModal = document.querySelector(".popLogoDel");

// 닫기
const logoUploadCloseButton = document.getElementById("devCloseLayer");
const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

// 로고 선택
const selectLogoInput = document.getElementById("devSelectLogo");
const selectLogoLabel = document.querySelector("#devSelectLogoDelegator label");
let logoImage = null;

// 로고 업로드
const logoUploadSubmitButton = document.getElementById("devSubmit");
const logoContainer = document.querySelector(".tbCell.tbLogo");

// 이벤트
// 닫기
inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
        logoUploadLayout.classList.remove("on");
    });
});
textareas.forEach((textarea) => {
    textarea.addEventListener("focus", (e) => {
        logoUploadLayout.classList.remove("on");
    });
});
logoUploadCloseButton.addEventListener("click", (e) => {
    logoUploadLayout.classList.remove("on");
});

// 열기
logoUploadButton.addEventListener("click", (e) => {
    logoUploadModal.classList.add("on");
    logoUploadLayout.classList.add("on");
});

// 로고 선택
selectLogoInput.addEventListener("change", (e) => {
    const [file] = e.target.files;
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener("load", (e) => {
        logoImage = e.target.result;

        const check = ["gif", "jpeg", "jpg", "png"].some((extension) =>
            logoImage.includes(extension),
        );

        if (!check) {
            selectLogoLabel.textContent = "";
            alert("파일 형식이 올바르지 않습니다.");
            return;
        }
        selectLogoLabel.textContent = file.name;
    });
});

// 로고 업로드
logoUploadSubmitButton.addEventListener("click", (e) => {
    console.log("들어옴");
    if (logoImage) {
        logoContainer.firstElementChild.remove();
        logoContainer.innerHTML += `
            <p class="logo">
                <img src="${logoImage}">
            </p>
            <p class="btn">
                <button type="button" class="infoBtn infoBtnDel" id="devLogoDel"></button>
                <button type="button" class="infoBtn infoBtnMod" id="devLogoModify"></button>
            </p>
        `;
        logoUploadLayout.classList.remove("on");

        alert("업로드 되었습니다.");
    } else {
        alert("로고를 선택해 주십시오.");
    }
});

// 로고 업로드 후
logoUploadLayout.addEventListener("click", (e) => {
    if (e.target.classList.contains("infoBtnDel")) {
        // logoUploadModal.classList.remove("on");

        logoDeleteModal.classList.add("on");
        logoUploadLayout.classList.add("on");
    } else if (e.target.classList.contains("infoBtnMod")) {
        logoDeleteModal.classList.remove("on");
        logoUploadModal.classList.add("on");

        logoUploadLayout.classList.add("on");
    }
});
