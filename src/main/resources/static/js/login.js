/*
Credits  Andy Tran
https://codepen.io/andytran/pen/RPBdgM
*/
const signUpBox = document.querySelector(".sign-up-box");

signUpBox.addEventListener("click", handleClick, false);
function handleClick(event) {
    if (signUpBox.classList.contains("active")) return;
    let str = `
        <span onclick="event.stopPropagation(); removedActive();">X</span>
        <input type="text" name="name" placeholder="별명"/>
        <input type="email" name="email" placeholder="이메일"/>
        <input type="password" name="password" placeholder="비밀번호"/>
        <button onclick="event.stopPropagation(); handleSignUp();" >회원가입</button>
    `;
    this.classList.toggle("active");
    this.innerHTML = "";
    setTimeout(() => (this.innerHTML = str), 500);
}

function removedActive() {
    signUpBox.classList.remove("active");
    signUpBox.innerHTML = `<i class="material-icons">회원가입</i>`;
}
function handleSignUp() {
    let signUpBoxActive = document.querySelector(".active");
    let inputs = signUpBoxActive.querySelectorAll("input");
    let nameField = inputs[0];
    let emailField = inputs[1];
    let passwordField = inputs[2];
    if (
        nameField.value === "" ||
        emailField.value === "" ||
        passwordField.value === ""
    ) {
        return;
    }
    removedActive();
}