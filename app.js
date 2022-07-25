const cardArray=[
{
    name:'fries',
    img:'images/fries.png'
},
{
   name:'cheeseburger',
   img:'images/cheeseburger.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name:'icecream',
    img:'images/icecream,png'
},
{
    name:'fries',
    img:'images/fries.png'
},
{
   name:'cheeseburger',
   img:'images/cheeseburger.png'
},
{
    name:'hotdog',
    img:'images/hotdog.png'
},
{
    name:'milkshake',
    img:'images/milkshake.png'
},
{
    name:'pizza',
    img:'images/pizza.png'
},
{
    name:'icecream',
    img:'images/icecream,png'
}

]

cardArray.sort(()=>0.5-Math.random())
const gridDisplay=document.querySelector('#grid');
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card =document.createElement('img')
        card.setAttribute('src','images/card.png')
        card.setAttribute('data-id',i)
        console.log(card);
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard(){
    const cardId=this.getAttribute('data-id')
    console.log(cardArray[cardId].name)
    console.log('clicked',cardId)
 }