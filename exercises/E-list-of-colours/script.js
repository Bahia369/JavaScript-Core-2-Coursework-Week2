function listOfColours(colours) {
    let content = document.getElementById("content");

    let colourList = document.createElement("select");
    colourList.id = "colours";

    let paragraph = document.createElement("p");
    paragraph.innerHTML = "This paragraph changes when you select a colour!";

    for (let i = 0; i < colours.length; i++) {
        let chosenColour = document.createElement("option");
        chosenColour.innerHTML = colours[i];
        colourList.appendChild(chosenColour);
    }

    colourList.addEventListener("change", function() {
        paragraph.innerHTML = `You have selected ${this.value}!`;
        paragraph.style.color = this.value;
    });

    content.appendChild(colourList);
    content.appendChild(paragraph);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);