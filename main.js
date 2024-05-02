fetch("http://localhost:4000/drinks").then((res) => res.json()).then((data) => displayDrinks(data));

function displayDrinks(drinks)
{
    const container = document.querySelector("#container");

    drinks.forEach(
        drink => { const html = `
        <div> 
        <h1> ${drink.name}</h1>
        <p>${drink.type}</p>
        <button id="desc-btn" class="desc-button"> See drink description </button
        </div>`
        container.innerHTML += html; // GÖR EN TOGGLE HÄR
    });

    const descBtn = document.querySelectorAll("#desc-btn");
    descBtn.forEach(button => {
        button.addEventListener("click", () => {
            // ta fram vald drink - åp klick
            const drinkId = button.getAttribute("id");
            const clickedDrink = drinks.find(drinks => drinks.id === drinkId);
            // kalla på vald dricka
            displayDrinkDesc(clickedDrink); // GÖR DENNA HIDDEN MED EN IF STATE
        });
    });
}

const drinkName = document.querySelector("#drink-name")
const drinkType = document.querySelector("#drink-type")
const drinkDesc = document.querySelector("#drink-desc")
const addDrinkBtn = document.querySelector("#add-drink-btn")

// // skapad div
// const descBtn = document.querySelector("#desc-btn")

addDrinkBtn.addEventListener("click", postDrink)
// descBtn.addEventListener("click", displayDrinkDesc)

// function
function postDrink() {
    const newDrink = {name: drinkName.value, type: drinkType.value, description: drinkDesc.value}

    const postDrink = {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newDrink)
    };
    fetch("http://localhost:4000/drinks", postDrink);
}

function displayDrinkDesc(clickedDrink) {
    window.alert(clickedDrink.description)

}