// ========== use case of event.stopPropagation() ========= 

document.getElementById("second_item").addEventListener("click", function (event) {
    console.log("Second Item Clicked");
    event.stopPropagation();
})

document.getElementById("list_container").addEventListener("click", function (event) {
    console.log("List Container Clicked");
    event.stopPropagation();
})

document.getElementById("main_container").addEventListener("click", function () {
    console.log("Main Container Clicked")
})