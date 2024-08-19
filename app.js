var value = ""
const dateTimeElement = document.getElementById('DateTime');

function getNumber(element) {
    var elementValue = element.innerText
    
    var inputValue = document.getElementById("data")
    inputValue.value += elementValue;
}

function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    dateTimeElement.innerText = `${date} ${time}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);



function getResult() {
    var inputValue = document.getElementById("data")
    inputValue.value = eval(inputValue.value)

}
 function deleteValue() {
    var inputValue = document.getElementById("data")
   inputValue.value = data.value.slice(0,-1)

 }


function clearValue(){
    var inputValue = document.getElementById("data");
    inputValue.value = ""
}
