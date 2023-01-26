const value = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const btns = document.querySelectorAll(".btn");

// let count = 0;
// select value and buttons
// const valuex = document.querySelector("#value");

let counterStart = 0;

increase.addEventListener('click', function () {
    counterStart++;
    value.textContent = counterStart;
    if (counterStart > 0) {
        value.style.color = 'green';
    }
});

decrease.addEventListener('click', function () {
    counterStart--;
    value.textContent = counterStart;
    if (counterStart < 0) {
        value.style.color = 'red';
    }
    if (counterStart === 0) {
        value.style.color = 'black';
    }
});

reset.addEventListener('click', function () {
    counterStart = 0;
    value.textContent = counterStart;
    if (counterStart === 0) {
        value.style.color = 'black';
    }
});




// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains("decrease")) {
//             count--;
//         } else if (styles.contains("increase")) {
//             count++;
//         } else {
//             count = 0;
//         }

//         if (count > 0) {
//             valuex.style.color = "green";
//         }
//         if (count < 0) {
//             valuex.style.color = "red";
//         }
//         if (count === 0) {
//             valuex.style.color = "#222";
//         }
//         valuex.textContent = count;
//     });
// });