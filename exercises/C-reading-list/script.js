function readingList(books) {
    // Write your code here...
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = `Booklist`;
    content.appendChild(h1);

    let ul = document.createElement("ul");
    ul.style.listStyleType = "none";
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    ul.style.padding = "30px";
    ul.style.width = "100%";

    for (let i = 0; i < books.length; i++) {
        let list = document.createElement("li");
        list.style.listStyleType = "none";
        list.style.padding = "10px";
        list.style.margin = "15px";
        list.style.width = "25%";

        if (books[i].alreadyRead === true) list.style.backgroundColor = "green";
        else list.style.backgroundColor = "red";

        let bookP = document.createElement("p");
        bookP.innerHTML = `${books[i].title} - ${books[i].author}`;
        list.appendChild(bookP);

        let coverImage = document.createElement("img");
        coverImage.src = books[i].coverImage;
        coverImage.style.width = "60%";

        list.appendChild(coverImage);
        ul.appendChild(list);
    }
    content.appendChild(ul);
}

const books = [{
        title: "RIch Dad Richer Dad",
        author: "Robert Kiosaki",
        alreadyRead: false,
        coverImage: "https://www.richdad.com/getattachment/8768b4f9-b731-458f-97c8-f461b57d7fd1/Rich-Dad%E2%80%99s-Beginners-Guide-to-Personal-Finance-Par",
    },
    {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        alreadyRead: true,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL._SX331_BO1,204,203,200_.jpg",
    },
    {
        title: "Harry Potter and the Philosophers Stone",
        author: "J.K. Rowling",
        alreadyRead: true,
        coverImage: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
    },
];

readingList(books); // function listOfNames(arrayOfPeople) {
//     let content = Document.querySelector("#content");

//     for (let i = 0; i < people.length; i++) {
//         let h1 = arrayOfPeople.createElement("h1");
//         let h2 = arrayOfPeople.createElement("h2");

//         h1.innerHTML = people[i].name;
//         h2.innerHTML = people[i].job;

//         content.appendChild(h1);
//         content.appendChild(h2);
//     }
// }

// let people = [
//     { name: "Chris", job: "Teacher" },
//     { name: "Joanna", job: "Student" },
//     { name: "Boris", job: "Prime Minister" },
// ];

// listOfNames(people);