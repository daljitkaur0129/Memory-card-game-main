//step1 
//create an array of choices;
let cardArray=[
    {
        "name": "brinjal",
        "vegetable": "/images/brinjal.svg"
    },
    {
        "name": "coconut",
        "vegetable": "/images/coconut.svg"
    },
    {
        "name": "corn",
        "vegetable": "/images/corn.svg"
    },
    {
        "name": "pea",
        "vegetable": "/images/pea.svg"
    },
    {
        "name": "potato",
        "vegetable": "/images/potato.svg"
    },
    {
        "name": "redish",
        "vegetable": "/images/redish.svg"
    },
    {
        "name": "tomato",
        "vegetable": "/images/tomato.svg"
    },
    {
        "name": "turnip",
        "vegetable": "/images/turnip.svg"
    },
    {
        "name": "chilli",
        "vegetable": "/images/chilli.svg"
    },
];


const container = document.querySelector(".container");
const cards = container.querySelectorAll(".cards");
const innerCards = container.querySelectorAll(".innerCards");
const grid = container.querySelector(".grid");
const btn = container.querySelector(".btn");
const result = container.querySelector(".result");
const mainVegetables = cardArray.concat(cardArray);
const score = container.querySelector(".score");


const cardsArray = [...cards];




let click =0;
function checkHide(){
    const allHide = [...cards].every(card => card.classList.contains("hide"));

    if(allHide){
        grid.classList.add("delete");
        result.classList.remove("vanish");

    }
};

//step 2
// we have to increase the size of the array form 9 to 18
// assign the image to every card here
//assign a dataset to each card

btn.addEventListener("click",()=>{
shuffleArray(mainVegetables);
cardData();
console.log("click");
grid.classList.remove("delete");

result.classList.add("vanish");
num = 0;
click=0;


cardsArray.forEach(card => {
  card.classList.remove("hide","flip");
});


})

const innerCardsArray = [...innerCards];
function cardData(){
     innerCardsArray.forEach((card,index)=>{
      card.firstElementChild.style.backgroundImage = `url('${mainVegetables[index]['vegetable']}')`;
      card.dataset.name = mainVegetables[index].name;
});

};
cardData();

// innerCards.forEach((card, index) =>{
//     card.firstElementChild.style.backgroundImage = `url('${mainVegetables[index]['vegetable']}')`;
//     card.dataset.name = mainVegetables[index].name;

// });


// step 3
//put on click intraction on all the cards
//create a system where two cards flip on click 
//create a logic to select only two cards and match their data
let num=0;
let firstCard;
let secondCard;


cardsArray.forEach(card => {
    card.addEventListener("click",()=>{

    if (card.classList.contains("flip") || num >= 2) return;
        num++;
        click++;
        score.innerText = click;
     


       if(num<3){
        card.classList.add('flip');

        if(num===1){
            firstCard = card;
            console.log(card.firstElementChild.dataset);
        }
        else if(num===2){

            secondCard = card;
            console.log(card.firstElementChild.dataset);
            
            if(firstCard.firstElementChild.dataset.name === secondCard.firstElementChild.dataset.name){
             setTimeout(()=>{
             console.log("same");
             num=0;
             firstCard.classList.add("hide");
             secondCard.classList.add("hide");
             checkHide();
             },1000)


            }
            else{
                console.log("different");
                setTimeout(()=>{
                firstCard.classList.remove('flip');
                secondCard.classList.remove('flip');
                num=0;
                },1500);
                
            };

          
          
        }
        


       };



    });
});



//setp 4 Fishers-Yates Shuffel
//call it after we concat in step 2 so that the function called before we assign teh values to the cards
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};




//step 5 call the play again


