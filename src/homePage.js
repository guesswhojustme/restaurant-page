const contentDiv = document.getElementById('content');

export default function homePage(){
    console.log("hello mama");

    const restaurantDesc = document.createElement('h2')
    restaurantDesc.textContent = "Welcome to my Nonsense Restaurant! Where we cook absolute garbage food!"

    contentDiv.append(restaurantDesc)

};