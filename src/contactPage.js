const contentDiv = document.getElementById('content');

export default function contactPage(){
    console.log("hello mama");

    const restaurantDesc = document.createElement('h2')
    restaurantDesc.textContent = "Contact Page";

    contentDiv.append(restaurantDesc)
};