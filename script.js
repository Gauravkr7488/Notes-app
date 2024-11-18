const create = document.getElementById("create");
const remove = document.getElementsByClassName("del");
const notearea = document.getElementById("notearea")
const newnote = document.createElement("div")



function createnote() {
    const newnote = document.createElement("div")
    newnote.innerHTML = `<textarea name="" id="" class="note" placeholder="Write here..."></textarea>
    <button class="del">delete</button>`;
    
    notearea.appendChild(newnote)
    newnote.classList.add("clipboard");
}

create.addEventListener("click", createnote, false)

for (let index = 0; index < remove.length; index++) {
    remove[index].addEventListener("click", function (e) {
        e.target.parentelement.remove();
    }, false)
}