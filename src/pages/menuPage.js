import { Home } from "../contents.js";

const contentDiv = document.getElementById('content');

export default function menuPage(){
    console.log("hello mama");

    // const restaurantDesc = document.createElement('h2')
    // restaurantDesc.textContent = "Menu Page";

    const card = () => {
        const card = document.createElement('div');
        card.classList.add('cardStyle');

        return card;
    }

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cardDivStyle');

    const cardCaption = document.createElement('h2');
    cardCaption.textContent = Home.cardsCaption;

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainerStyle');

    const cardContainer2 = document.createElement('div');
    cardContainer2.classList.add('cardContainerStyle');

    const cardDiv2 = document.createElement('div');
    cardDiv2.classList.add('cardDivStyle');

    const h2 = document.createElement('h2');
    h2.textContent = "Others:"

    cardDiv.append(card(), card(), card())
    cardDiv2.append(card(), card())
    cardContainer2.append(h2, cardDiv2)
    cardContainer.append(cardCaption, cardDiv)
    contentDiv.append(cardContainer, cardContainer2)
};