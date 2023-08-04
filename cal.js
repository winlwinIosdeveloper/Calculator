// const display = document.getElementById('textbox');
// const buttons = document.querySelectorAll("button");


// const specialCharacter = ["+", "-", "*", "/", "="];

// let output = "";

// const calculate = (btnValue) =>  {
//     if (btnValue === "=" && output !== "") {
//         // output = eval(output);
//         console.log(typeof(output));
//     }
//     else if (btnValue === "AC") {
//         output = "";
//     } else {
//         if (output === "" && specialCharacter.includes(btnValue)) {
//             return;
//         }
//         output += btnValue;
//         console.log(output);
//     }
//     display.value = output;

// };

// buttons.forEach( (button) => {
//     button.addEventListener('click', () => calculate(button.textContent)); 
// })