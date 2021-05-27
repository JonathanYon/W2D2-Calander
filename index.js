window.onload = function(){
    // This is where our code performs everything it needs to
    // properly initialize the application itself

    // TODO: load existing meetings from the disk
    displayEntireMonth()
}

const displayEntireMonth = function(){

    let monthContainer = document.getElementById("month-container")
    monthContainer.innerHTML = ""

    for (let i = 1; i <= 31; i++){
        // Creating the new element (an object in memory)
        let newDay = document.createElement("div") // <div></div>

        // Customizing the new element (adding the number and the css class) 
        newDay.innerText = i  // <div>1</div>
        newDay.classList.add("day") // <div class="day">1</day>

        // Append the newly created element as a new child of the month container DIV
        monthContainer.appendChild(newDay)
    }
}