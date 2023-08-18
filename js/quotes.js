const quotes = [
{
    quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma which is living with the results of other people’s thinking",
    author: "Steve Jobs",
},
{
    quote: "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth",
    author: "Attributed to various sources",
},
{
    quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people",
    author: "Leo Burnett",
},
{
    quote: "Don’t settle for what life gives you; make life better and build something",
    author: "Ashton Kutcher",
},
{
    quote: "When we do the best we can, we never know what miracle is wrought in our life or the life of another",
    author: "Helen Keller",
},
{
    quote: "Keep calm and carry on",
    author: "Windston Churchill",
},
{
    quote: "Keep smiling, because life is a beautiful thing and there’s so much to smile about",
    author: "Marilyn Monroe",
},
{
    quote: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship",
    author: "Buddha",
},
{
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
    author: "Dr. Seuss",
},
{
    quote: "The purpose of our lives is to be happy",
    author: "Dalai Lama",
},
];

const quote = document.querySelector("#quote span#quote-span");
const author = document.querySelector("#quote span#author-span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author;