const list = document.getElementById("list");
let addButton = document.querySelector(".addButton");


addButton.addEventListener("click", () => {
    let input = document.getElementById("todoİnput").value;
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style");
    list.appendChild(paragraph);
    paragraph.innerHTML = input;
    document.getElementById("todoİnput").value=' ';
    
    paragraph.addEventListener("click", () => { 
        paragraph.style.textDecoration = "line-through";
        paragraph.style.backgroundColor = "lightblue";
    });

    paragraph.addEventListener("dblclick", () => {
       list.removeChild(paragraph);
    });

    clearButton.addEventListener("click", () => {
        let clearButton = document.querySelector(".clearButton")
        list.removeChild(paragraph);
    });
    
});