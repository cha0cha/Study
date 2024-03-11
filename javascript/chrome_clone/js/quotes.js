const quotes = [
    {
        quote: "The way to get started is to quit talking and begin ~",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other ~",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only ~",
        author: "Saint Augustine",
    },
    {
        quote: "갱",
        author: "산악대장 차영건",
    },
    {
        quote: "느그서장 남천동살제?",
        author: "민식이형",
    },
    {
        quote: "너 납치된거야",
        author: "설석구",
    },
    {
        quote: "돈많으면 뭐해유, 행복혀야지",
        author: "청년농부",
    },
    {
        quote: "볼품없게 뛸바엔 폼나게 걷는다.",
        author: "차영건",
    },
    {
        quote: "여러분들 이거 다 거짓말인거 아시죠?",
        author: "2MB",
    },
    {
        quote: "아 텔가서 바디워시 ㅈㄴ풀어놓고 몸뿔리고싶다",
        author: "조x진",
    },
    {
        quote: "아스날 리그 1위 기원",
        author: "구너 일동",
    },
]

const quote = document.querySelector("#quote1");
const author = document.querySelector("#quote2");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = todaysQuote.author;
