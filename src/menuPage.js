const contentDiv = document.getElementById('content');

export default function menuPage(){
    console.log("hello mama");

    const restaurantDesc = document.createElement('h2')
    restaurantDesc.textContent = "Menu Page";

    contentDiv.append(restaurantDesc)
};