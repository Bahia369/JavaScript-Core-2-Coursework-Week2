function shoppingList(list) {
    let content = document.querySelector("#content");

    let ul = document.createElement("ul");

    for (let i = 0; i < list.length; i++) {
        let liList = document.createElement("li");
        liList.innerHTML = list[i];
        ul.appendChild(liList);
    }

    content.appendChild(ul);
}
let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);

// let content = document.querySelector("#content");

// let ul = document.createElement("ul");

// for (let i = 0; i < list.length; i++) {
//     let liList = document.createElement("li");
//     liList.innerHTML = list[i];
//     ul.appendChild(liList);
// }

// content.appendChild(ul);

// let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

// shoppingList(shopping);