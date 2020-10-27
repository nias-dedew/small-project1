function goBack() {
    location.replace("http://127.0.0.1:5500/page1.html")
};

//setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

//taking value to increment decrement input value
var valueCount

//plus button
document.querySelector(".plus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount++;

    //setting increment input value
    document.getElementById("quantity").value = valueCount

    if (valueCount > 1) {
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }
})

//minus button
document.querySelector(".minus-btn").addEventListener("click", function () {
    //getting value of input
    valueCount = document.getElementById("quantity").value;

    //input value decrement by 1
    valueCount--;

    //setting decrement input value
    document.getElementById("quantity").value = valueCount

    if (valueCount < 1) {
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled")
    }
})

