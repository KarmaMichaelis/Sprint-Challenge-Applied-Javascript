// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const cardsContainer=document.querySelector('.cards-container')

//come back and figure out if http is different from axios
function getCards(attributes){
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response=>{
        
        const cardDiv=document.createElement('div')
        const cardHead=document.createElement('div')
        const cardAuthor=document.createElement('div')
        const cardImgContainer=document.createElement('div')
        const cardImg=document.createElement('img')
        const cardSpan=document.createElement('span')

        cardsContainer.appendChild(cardDiv)
        cardDiv.appendChild(cardHead)
        cardHead.appendChild(cardAuthor)
        cardAuthor.appendChild(cardImgContainer)
        cardImgContainer.appendChild(cardImg)
        cardImgContainer.appendChild(cardSpan)

        cardDiv.classList.add('card')
        cardHead.classList.add('headline')
        cardAuthor.classList.add('author')
        cardImgContainer.classList.add('img-container')


    })
    .catch(error=>{
        console.log('this code those not work',error)
    })
    return getCards
}
getCards()