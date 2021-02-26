function todoList(todos) {
    // Write your code here...

    let content = document.getElementById("content");
    let ul = document.createElement("ul");

    todos.forEach((element) => {
        let li = document.createElement("li");
        li.innerHTML = element.todo;
        li.addEventListener("click", (event) => {
            if (event.target.style.textDecoration === "line-through") {
                event.target.style.textDecoration = "none";
            } else {
                event.target.style.textDecoration = "line-through";
            }
        });

        ul.appendChild(li);
    });

    content.appendChild(ul);
}

const todos = [
    { todo: "Water The Plants" },
    { todo: "Wash The Car" },
    { todo: "Code" },
    { todo: "MORE CODING" },
];

todoList(todos);