function getNumber(input) {
    let value = document.getElementById('textbox').value;
    let number = input.innerText;

    if (value.length == 1 && value == "0" )
    {
        return document.getElementById('textbox').value = number;
    }
    return document.getElementById('textbox').value = value + number;
    
    
}



