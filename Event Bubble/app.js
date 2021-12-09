// ========== use case of event.stopImmediatePropagation() =====

document.getElementById("second_item").addEventListener("click", function (event) {
    console.log("Second Item Clicked");

})
document.getElementById("second_item").addEventListener("click", function (event) {
    console.log("Second Item-1 Clicked");
    event.stopImmediatePropagation()
})
document.getElementById("second_item").addEventListener("click", function (event) {
    console.log("Second Item-2 Clicked");

})
document.getElementById("second_item").addEventListener("click", function (event) {
    console.log("Second Item-3 Clicked");
})

