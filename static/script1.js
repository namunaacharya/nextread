document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.querySelector(".button1");

    myButton.addEventListener("click", function() {

        window.location.href = '/other_page';
    });
});

