let myArr = [
    {
    'name' : 'CSS',
    'img' : 'http://thapatechnical.online/logos/css.png',
    },
    {
    'name' : 'HTML',
    'img' : 'http://thapatechnical.online/logos/html5.png',
    },
    {
    'name' : 'JQuery',
    'img' : 'http://thapatechnical.online/logos/jquery.png',
    },
    {
    'name' : 'JS',
    'img' : 'http://thapatechnical.online/logos/js.png',
    },
    {
    'name' : 'Node',
    'img' : 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
    'name' : 'Python',
    'img' : 'http://thapatechnical.online/logos/python.png',
    },

];
let parentDiv = document.querySelector("#card-section")

// let duplicateOriginalArr = [...myArr,...myArr]
let duplicateOriginalArr = myArr.concat(myArr)

let suffledArr = Array.from(duplicateOriginalArr).sort(() => 0.5 - 
Math.random())

let selectCount = 0;
let firstSelect = "";
let secondSelect = "";


const card_matches = () => {
    let card_Selected = document.querySelectorAll('.card-selected')

    card_Selected.forEach((currEl) => {
        currEl.classList.add('card_match')
    })
}


const resetGame = () => {
    let selectCount = 0;
    let firstSelect = "";
    let secondSelect = "";

    let card_Selected = document.querySelectorAll('.card-selected')

    card_Selected.forEach((currEl) => {
        currEl.classList.remove('card-selected')
    })
}

parentDiv.addEventListener('click' , (event) => {
    let currentCard = event.target

    if(currentCard.id === "card-section") {return false}
    
    selectCount++;

    if(selectCount < 3) {
    
        if(selectCount === 1) {
            firstSelect = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card-selected')

        } else {
            secondSelect = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add('card-selected')
        }

        if(firstSelect !== "" && secondSelect !== "") {
            if(firstSelect === secondSelect) {
                // currentCard.classList.add('card-match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                },1000)
            } 
            else {
             setTimeout(()=> {
                 resetGame()
             },1000)
            }
        }  
    } 
})


for (let i = 0 ; i<suffledArr.length; i++) {
    const childDiv = document.createElement('div')

    childDiv.classList.add('card')
    childDiv.dataset.name = suffledArr[i].name;
    
    const front_div = document.createElement('div')
    front_div.classList.add('front-card')
    
    const back_div = document.createElement('div')
    back_div.classList.add('back-card')
    back_div.style.backgroundImage = `url(${suffledArr[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)

}
