import { Home } from "../contents.js";

const contentDiv = document.getElementById('content');

export default function homePage(){
    console.log("hello mama");

    const restaurantTitle = document.createElement('h1')
    restaurantTitle.textContent = Home.title;

    const restaurantSubTitle = document.createElement('h2')
    restaurantSubTitle.textContent = Home.subtitle;

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cardDivStyle');

    const cardCaption = document.createElement('h2');
    cardCaption.textContent = Home.cardsCaption;
    
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainerStyle');

    const card = () => {
        const card = document.createElement('div');
        card.classList.add('cardStyle');

        return card;
    }

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('infoDivStyle');

    const info1Div = document.createElement('div');
    info1Div.classList.add('infoDiv1Style');

    const info2Div = document.createElement('div');
    info2Div.classList.add('infoDiv2Style');
    
    const info1 = document.createElement('h2');
    info1.textContent = Home.info1;
    
    const info2 = document.createElement('h2');
    info2.textContent = Home.info2;

    const hoursOpen1 = document.createElement('span');
    hoursOpen1.textContent = Home.hoursOpen1;
    const hoursOpen2 = document.createElement('span');
    hoursOpen2.textContent = Home.hoursOpen2;

    const location = document.createElement('span');
    location.textContent = Home.location;

    info1Div.append(info1, hoursOpen1, hoursOpen2)
    info2Div.append(info2, location)
    infoDiv.append(info1Div, info2Div);
    cardDiv.append(card(), card(), card());
    cardContainer.append(cardCaption, cardDiv)
    contentDiv.append(restaurantTitle, restaurantSubTitle, cardContainer, infoDiv)
};