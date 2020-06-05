

// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const headerContainer=document.querySelector('.header-container')
//debugger

function Header(headerData){
    //debugger
    const headerDiv=document.createElement('div')
    const headerSpan=document.createElement('span')
    const headerHOne=document.createElement('h1')
    const headerSpanTemp=document.createElement('span')
    //debugger
    headerDiv.appendChild(headerContainer)
    headerSpan.appendChild(headerDiv)
    headerHOne.appendChild(headerDiv)
    headerSpanTemp.appendChild(headerDiv)
    // debugger
    console.log('I am inside the function')

    headerDiv.classList.add('header')
    headerSpan.classList.add('date')
    headerSpanTemp.classList.add('temp')
    

    //return Header
}
Header()
