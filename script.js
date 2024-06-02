function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function changeSizeM(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("main").style.fontSize = listValue;
}

function changeFamilyM(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("main").style.fontFamily = listValue;
}

function changeSize(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("mainHome").style.fontSize = listValue;
}

function changeFamily(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].text;
    document.getElementById("mainHome").style.fontFamily = listValue;
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let nome = document.getElementById('email').value;
    let email = document.getElementById('password').value;
    let senha = document.getElementById('confirm-repeat').value;
    let errorDiv = document.getElementById('error');
    errorDiv.innerHTML = '';
});