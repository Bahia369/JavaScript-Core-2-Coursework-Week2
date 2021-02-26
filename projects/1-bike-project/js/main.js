const blueBtn = document.getElementById("blueBtn");
const greenBtn = document.getElementById("greenBtn");
const orangeBtn = document.getElementById("orangeBtn");

blueBtn.addEventListener("click", function() {
    let jumboDiv = document.getElementsByClassName("jumbotron")[0];
    jumboDiv.style.backgroundColor = `#588fbd`;
    jumboDiv.getElementsByClassName(
        "btn-primary"
        // "btn btn-primary btn-lrg"
    )[0].style.backgroundColor = `#ffa500`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.backgroundColor = `Black`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.color = `White`;
});

// green button change all 3
greenBtn.addEventListener("click", function() {
    document.getElementsByClassName(
        "jumbotron"
    )[0].style.backgroundColor = `#87ca8a`;
    document.getElementsByClassName(
        "btn btn-primary btn-lrg"
    )[0].style.backgroundColor = `black`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.backgroundColor = `Black`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.color = `#8c9c08`;
});
// orange button change all 3
orangeBtn.addEventListener("click", function() {
    document.getElementsByClassName(
        "jumbotron"
    )[0].style.backgroundColor = `#f0ad4e`;
    document.getElementsByClassName(
        "btn btn-primary btn-lrg"
    )[0].style.backgroundColor = `#5751fd`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.backgroundColor = `#31b0d5`;
    document.getElementsByClassName(
        "btn btn-secondary btn-lrg"
    )[0].style.color = `White`;
});

//submit button

let submitBtn = document.querySelector("form button");

function formBtn(event) {
    event.preventDefault();
    let emailField = document.querySelector("#exampleInputEmail1");
    let nameField = document.querySelector("#example-text-input");
    let descField = document.querySelector("#exampleTextarea");

    if (!emailField.value.length > 0 || !emailField.value.includes("@")) {
        emailField.style.backgroundColor = "Red";
    } else if (!nameField.value.length > 0) {
        nameField.style.backgroundColor = "Red";
    } else if (!descField.value.length > 0) {
        descField.style.backgroundColor = "Red";
    } else {
        alert("Thank you for filling out the form");
        nameField.value = "";
        emailField.value = "";
        descField.value = "";
    }
}
submitBtn.addEventListener("click", (event) => formBtn(event));