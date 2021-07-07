// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabContainer=document.querySelector('.topics')


function getTabs(){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response=>{
    // console.log('this is the axios:',response)
    const tabDiv=document.createElement('div')
    tabContainer.appendChild(tabDiv)
    tabDiv.classList.add('tab')
    tabDiv.textContent='Topic Here'
})
.catch(error=>{
    console.log ('This is an error message:',error)
})
return getTabs
}
getTabs()

//come back to for loop
for(let i=0;i<getTabs.length;i++){
//    const tabDiv=getTabs([i])
//    tabContainer.appendChild(tabDiv)
   tabContainer[i]

}