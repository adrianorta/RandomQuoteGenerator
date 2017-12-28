// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

 var quotes = [
   {
     quote : "Don't cry because it\'s over, smile because it happened.",
     source : "Dr. Seuss",
     citation : null,
     year : null,
     tags : ["happiness", "joy", "life"]
   },
   {
     quote : "If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.",
     source : "J.K. Rowling",
     citation : 'Harry Potter and the Goblet of Fire',
     year : 2000,
     tags : null
   },
   {
     quote : "Without music, life would be a mistake.",
     source : "Friedrich Nietzsche",
     citation : "Twilight of the Idols",
     year : 1889,
     tags : ["philosophy", "inspirational", "music"]
   },
   {
     quote : "To live is the rarest thing in the world. Most people exist, that is all.",
     source : "Oscar Wilde",
     citation : null,
     year : null,
     tags : null
   },
   {
     quote : "If you tell the truth, you don't have to remember anything.",
     source : "Mark Twain",
     citation : null,
     year : null,
     tags : ["lies", "memory", "truth"]
   }
 ];
 var refreshTime = 30000;
 var timer = setTimeout(printQuote, refreshTime);
 var colors = ['navy', 'olive', 'maroon', 'purple', 'orange'];

//getter functions
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

//refresh the page with a new quote after period of inactivity
function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(printQuote, refreshTime);
}

function displayTags(quote) {
  return quote.tags.join(', ');
}

//display a new quote and related info to the screen
function printQuote() {
  var quoteToPrint = getRandomQuote();
  var message = "<p class=\"quote\">" + quoteToPrint.quote + "</p>";
  message += "<p class=\"source\">" + quoteToPrint.source;
  if(quoteToPrint.citation !== null){
    message += "<span class=\"citation\">" + quoteToPrint.citation + "</span>";
  }
  if(quoteToPrint.year !== null){
    message += "<span class=\"year\">" + quoteToPrint.year + "</span>";
  }
  if(quoteToPrint.tags !== null){
    message += "<p> tags: " + displayTags(quoteToPrint) + "</p>";
  }
  message += "</p>";
  message += "<style>body{background-color : " + getRandomColor() + ";}</style>";
  document.getElementById('quote-box').innerHTML = message;
  resetTimer();
}
