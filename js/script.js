// Selecting elements
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

// Initializing string variable
let string = "";

// Adding click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Getting the inner HTML of the clicked button
        let buttonText = e.target.innerHTML;

        // Handling different button functionalities
        if (buttonText === 'AC') {
            string = "";
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
        } else if (buttonText === '=') {
            // Using try-catch to handle invalid expressions
            try {
                string = eval(string);
            } catch (error) {
                string = "Error";
            }
        } else {
            string += buttonText;
        }

        // Updating the input box value
        input.value = string;
    });
});