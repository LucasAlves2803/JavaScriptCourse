function ageInDays() {
    var birthYear = prompt("What year were you born... Good Friend?");
    var ageInDayss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode("You are " + ageInDayss + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function remove(){
    document.getElementById('ageInDays').remove();
}
// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
    div.appendChild(image);
   /* image.setAttribute("src","http://thecatapi.com/api/images/get?format=src&type=gif");
    document.getElementById("flex-cat-gen").appendChild(image); */
}

// Challenge 3: rpsGame
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = randomChoice();
    console.log("Eu :" + humanChoice + " " + "Computador:" + botChoice);
    result = decideWinner(humanChoice,botChoice);
    message = finalMessage(result[0]);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}

function remove_elements(){
    var pai = document.getElementById('flex-box-rps-div');
    var array = new Object();
    var lista = {
       'img1': { 'id': "rock", 'src' : "http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png" , 'height':"150" , 'width':"150" , "alt":"", "onclick":"rpsGame(this)"},
       'img2': {'id' :"paper" ,'src':"http://images.clipartpanda.com/paper-clip-art-niEBBqMiA.svg" , 'height':"150" , 'width':"150", 'alt':"", 'onclick':"rpsGame(this)"} ,
       'img3': {'id':"scissors", 'src' :"https://media.istockphoto.com/vectors/female-hand-sign-victory-sign-or-peace-sign-or-scissors-vector-id636582540", 'height':"150" , 'width': "150" , 'alt':"", onclick:"rpsGame(this)"},
       'button': { 'class':"btn btn-danger" , 'id':'botao', 'onclick':"remove_elements()", 'texto' : 'Jogar Novamente'}
    }
   // console.log(pai);
   // filho = pai.firstElementChild;
  //  console.log(filho);
    console.log(pai.hasChildNodes());  
    console.log(typeof pai); 

    array = pai.querySelectorAll("*");
    console.log(typeof array);
    console.log(array);
    for (var i =0; i < array.length; i++){ // percorre o array de objetosx   
        pai.removeChild(array[i])
    }
    console.log(pai);
    
    var img1 = document.createElement('img');
    img1.id = lista['img1']['id'];
    img1.src = lista['img1']['src'];
    img1.width = lista['img1']['width'];
    img1.height = lista['img1']['height'];
    img1.onclick = lista['img1']['onclick'];
    img1.alt = lista['img1']['alt'];

//    pai.appendChild(img1);
}

function randomChoice(){
    var num = Math.floor(Math.random()*3);
    if (num == 1){
        return "rock";
    }
    else if (num == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function decideWinner(humanChoice, botChoice){

    if (humanChoice == "rock"){
        if (botChoice == "rock"){
            return [0.5,0.5];
        }
        else if (botChoice == "paper"){
            return [0,1];
        }
        else{
            return [1,0];
        }
    }
    else if (humanChoice == 'paper'){
        if (botChoice == "paper"){
            return [0.5,0.5];
        }
        else if (botChoice == "scissors"){
            return [0,1];
        }
        else{
            return [1,0];
        }
    }
    else{
         if( botChoice == "scissors" ){
             return [0.5,0.5];
         }
         else if (botChoice == "rock"){
             return [0,1];
         }
         else{
             return [1,0];
         }
    }
    
}

function finalMessage(seuresultado){
    var mensagem = new Object();
    if (seuresultado == 1){
        mensagem['message'] = "Você Venceu!";
        mensagem['color'] = 'green';
    }
    else if (seuresultado == 0.5)
    {
        mensagem['message'] = "Você Empatou!";
        mensagem['color'] = 'yellow';
    }
    else{
        mensagem['message'] = "Você Perdeu!";
        mensagem['color'] = 'red';
    }
    return mensagem;
}

function rpsFrontEnd(humano, computador, mensagem){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    // let's remove all images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



   var hum = document.createElement('img');
   var comp = document.createElement('img');
   var h1 = document.createElement("h1");
   hum.src = imagesDatabase[humano];
   hum.width = '150';
   hum.height = '150';
   hum.style = 'box-shadow: 0px 10px 50px rgba(37,50,233,1);';
   hum.id = humano;
   comp.src = imagesDatabase[computador];
   comp.width = '150';
   comp.height = '150';
   comp.style = 'box-shadow: 0px 10px 50px rgba(243,38,233,1);';
   comp.id = computador;
   //console.log(mensagem['message'])
   texto = document.createTextNode(mensagem['message']);
   h1.appendChild(texto);
   h1.style ='color: ' + mensagem['color'] + "; font-size: 60px;";
   h1.id ='mensagem_final';
   document.getElementById("flex-box-rps-div").appendChild(hum);
   document.getElementById("flex-box-rps-div").appendChild(h1);
   document.getElementById("flex-box-rps-div").appendChild(comp);
}

//   =======================Challenge 4: Change the color of All buttons
var all_buttons = document.getElementsByTagName("button");  
/* all_buttons recebe um array/vetor/lista de objetos com todo
   os buttons que estão no corpo/body do html
*/

console.log(all_buttons);

var all_buttons_copy = [];

for (let i =0; i < all_buttons.length; i++){ // percorre o array de objetos
    all_buttons_copy.push(all_buttons[i].classList[1]); // copia all_buttons para a variável all_buttons_copy
}

console.log(all_buttons_copy); // array de objetos

function buttonColorChange(buttonThingy){
  
  if (buttonThingy.value === 'red'){
      buttonsRed();
  }else if (buttonThingy.value === 'green'){
      buttonsGreen();
  }else if(buttonThingy.value === "random"){
      buttonsRandom();
  }else if (buttonThingy.value == 'reset'){
      buttonsReset();
  }
}

function buttonsRed(){
    for (let i=0; i < all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen(){
    for (let i=0; i < all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
    }
}

function buttonsReset(){
    for (let i=0; i < all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(all_buttons_copy[i]);
    }
}


function buttonsRandom(){
    for (let i=0; i < all_buttons.length; i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(randomChoice2());
    }
}

function randomChoice2(){
    var num = Math.floor(Math.random()*4);
    if (num == 1){
        return "btn-danger";
    }
    else if (num == 2){
        return "btn-success";
    }
    else if (num == 3) {
        return "btn-primary";
    }
    else{
        return "btn-warning";
    }
}


// Challenge 5: Blackjack
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan':"dealer-blackjack-result", 'div':'#dealer-box', 'score': 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsmap' : {'2': 2, '3' : 3 , '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9' : 9 , '10': 10, 'K': 10, 'J': 10, 'Q': 10, 'A': [1,11]},
}

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackHit);
document.querySelector("#blackjack-deal-button").addEventListener('click',blackjackDeal);

function blackjackHit(){  
  var card = randomcard();
  showCard(YOU,card);
  SomaPontos(YOU);
 // atualiza(YOU);
}

function showCard(activePlayer, card){
    let cardImage = document.createElement('img');
    cardImage.src = 'static/images/'+ card +'.png';
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
}

function randomcard(){
    let randomindex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomindex];
}

function SomaPontos(activePlayer){
    let yourcards = document.querySelector(YOU['div']).querySelectorAll('img');
    var card,scores;
    for (let i=0; i < yourcards.length; i++){
        var card = yourcards[i].outerHTML.split('/')[2][0];
    }
    YOU['score'] = scores;
}



function blackjackDeal() {
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    // console.log(yourImages);
    for (var i=0; i < yourImages.length; i++){
       // console.log(yourImages[i].outerHTML.split("/")[2][0]);
        yourImages[i].remove();
    }

    for (var i=0; i < dealerImages.length; i++){
        // console.log(yourImages[i].outerHTML.split("/")[2][0]);
         dealerImages[i].remove();
     }
}

function updatecard(card, activeplayer){
    activeplayer['score'] += blackcjackGame['cardsmap'][card];

}


