/* Data to Show*/
const data = [
//   https://kidadl.com/articles/best-kermit-the-frog-quotes-that-muppets-fan-will-love
  {
   quote: `“Changes happen as time passes by. Soon enough, you'll be grown.”`, 
   emoji: '🕰️', 
   image: `url(assets/KermitDriving.jpg)`
  },
  {
   quote: `“I've got a dream too, but it's about singing and dancing and making people happy.”`, 
   emoji: '🕺 💃', 
   image: `url(assets/KermitPoint.png)`
  },
  {
   quote: `“Always be yourself. Never take yourself too seriously.”`, 
   emoji: '😊', 
   image: `url(assets/KermitBench.jpg)`
  },
  {
   quote: `“I believe creativity is an inherent part of everyone.”`, 
   emoji: '🖼️', 
   image: `url(assets/KermitDesk.jpg)`
  },
  {
   quote: `“Life's like a movie. Write your own ending.”`, 
   emoji: '📽️', 
   image: `url(assets/KermitStairs.jpg)`
  },
  {
   quote: `“Just because you haven't found your talent yet doesn't mean you don't have one.”`, 
   emoji: '✨', 
   image: `url(assets/KermitTea.jpg)`
  }
  
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector('blockquote');
// emoji
const emoji = document.querySelector('p');
// background
const bgImage = document.querySelector('body');

// Check-Check: change text
quote.innerHTML = "Quotes from Kermit the frog";
// Check-Check: change emoji text
emoji.innerHTML = "😁";
// Check-Check: background image
bgImage.style.backgroundImage= 'url(assets/KermitHat.gif)';

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
*/
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("button.next");
// get previous button
const prevButton = document.querySelector("button.prev");
// get random button
const randButton = document.querySelector("button.random");

// listen for clicks on next button
nextButton.addEventListener("click", function () {
  // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  
});
  
// listen for clicks on previous button
prevButton.addEventListener("click", function () {
  // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
});

// listen for clicks on random button
randButton.addEventListener('click', function() {
  
  // generate random number, for total number, of items (data)
  randomNumber = Math.floor ( Math.random() * data.length );
  
  // display data based random number
  quote.innerHTML = data[randomNumber].quote;
  emoji.innerHTML = data[randomNumber].emoji;
  bgImage.style.backgroundImage = data[randomNumber].image;
  
});

// listen for keypress next
document.addEventListener('keyup', function(){
  
  // Next Right Arrow  
  if ( event.keyCode === 39 ) {
   
   // update, then increase item number with each click
  itemNumber = itemNumber + 1;
  
  // if at LAST item
  if ( itemNumber > data.length -1 ) {
    // reset counting to first item
    itemNumber = 0;
  }

  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
    
  }
  
  // Prev Left Arrow
  if ( event.keyCode === 37 ) {
  
   // update, then DEcrease item number with each click
  itemNumber = itemNumber - 1;
  
  // if at FIRST item
  if ( itemNumber < 0 ) {
    // reset counting to last item
    itemNumber = data.length -1;
  }  
  
  // display data based on array index
  quote.innerHTML = data[itemNumber].quote;
  emoji.innerHTML = data[itemNumber].emoji;
  bgImage.style.backgroundImage = data[itemNumber].image;
  }
  
  // Random Spacebar
  if ( event.keyCode === 32) {
    
    // generate random number, for total number, of items (data)
    randomNumber = Math.floor ( Math.random() * data.length );

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
  
  }
  
});