var addButton = document.getElementById("add_button");
var heading = document.getElementById("heading")
addButton.addEventListener("click", addStyle);

function addStyle() {
    heading.classList.add("addStyle")
}

document.getElementById("remove_button").addEventListener("click", function () {
    heading.classList.remove("addStyle")
});



var headings = document.getElementById("headings");

// document.querySelectorAll(".myButton")[0].addEventListener("click", function () {
//     var text = this.innerHTML;
//     headings.innerHTML = text + " Has Been Clickted"

// })

// ========= for single button ========

var buttonLength = document.querySelectorAll(".myButton").length;

for (var i = 0; i < buttonLength; i++) {
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        headings.innerHTML = text + " Has Been Clickted"

    })
}

// ========== multiple button by for Loop =========