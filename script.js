// An array of quotes, 20 total.
const quotesArr = [
  `You are the antibodies kicking in as the planet fights its fever. — Bill Mckibben`,
  `Keep your face to the sunshine and you cannot see a shadow. — Helen Keller`,
  `If you feel happy, smile with all your heart. If you're down, smile with all your might. — Paul Ian Guillermo `,
  `I believe in karma, and I believe if you put out positive vibes to everybody, that's all you're going to get back. — Kesha`,
  `My mother said to me, "If you are a soldier, you will become a general. If you are a monk, you will become the Pope." Instead, I was a painter, and became Picasso. — Pablo Picasso`,
  `Once you replace negative thoughts with positive ones, you'll start having positive results. — Willie Nelson`,
  `I say looking on the bright side of life never killed anybody. — Jenny Han`,
  `I don't fake relationships, vibes, or anything with people. I just keep it real, and some people think I have a cold heart for that. — Lil Skies`,
  `Life is a matter of perception. Everything is a riddle. You can simplify if you diversify your thoughts. — XXXTENTACION`,
  `You just get the vibes of your surroundings and it rubs off on you. — Gordon Lightfoot`,
  `Whether you think you can, or think you can't, you're probably right. — Henry Ford`,
  `In order to carry a positive action, we must develop here a positive vision. — Dalai Lama`,
  `I always like to look on the optimistic side of life, but I am realistic enough to know that life is a complex matter. — Walt Disney`,
  `If you believe in yourself and with a tiny pinch of magic, all your dreams can come true. — SpongeBob SquarePants`,
  `The only thing that I have done that is not mitigated by luck, diminished by good fortune, is that I persisted, and other people gave up. — Harrison Ford`,
  `Many of life's failures are people who did not realize how close they were to success when they gave up. — Thomas Edison`,
  `Nearly all men can stand adversity, but if you want to test a man's character, give him power. — Abraham Lincoln`,
  `Attitude is a little thing that makes a big difference. — Winston Churchill`,
  `When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down "happy." They told me I didn't understand the assignment, and I told them they didn't understand life. — John Lennon`,
  `The old believe everything, the middle-aged suspect everything, the young know everything. — Oscar Wilde`,
];
let num = quotesArr.length - 1; // Num is used for randomQuotes
// randomQuotes will pick a random index in the array
const randomQuotes = () => { 
  let index = Math.floor(Math.random() * num)
  return quotesArr[index];
};
const todayDate = new Date().toISOString().slice(0, 10);
//console.log(todayDate);

/*function greetWithQuote() {
  console.log(`Hello, Todays Date is ${todayDate}`);
  console.log("Your Quote for the day is:");
  console.log(randomQuotes());
}
greetWithQuote();*/

//DOM
let date = document.getElementById('date');
let quote = document.getElementById('quote');
let view = document.getElementById('bttn-view');
let quoteContainer = document.getElementById('container-quote');
let reset = document.getElementById('bttn-reset');

const viewQuote = () => {
  date.innerHTML = todayDate;
  date.style.visibility = 'visible';
  quote.innerHTML = randomQuotes();
  quoteContainer.style.visibility = 'visible';
}

const resetQuote = () => {
  date.style.visibility = 'hidden';
  quoteContainer.style.visibility = 'hidden';
}

view.addEventListener('click', viewQuote);
reset.addEventListener('click', resetQuote);
