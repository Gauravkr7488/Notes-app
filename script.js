const create = document.getElementById("create");
const notearea = document.getElementById("notearea")
const newnote = document.createElement("div")

function createnote() {
    const newnote = document.createElement("div")
    newnote.innerHTML = `<textarea name="" id="" class="note" placeholder="Write here..."></textarea>
    <button class="del">delete</button>`;

    notearea.appendChild(newnote)
    newnote.classList.add("clipboard");

    const deleteButton = newnote.querySelector(".del");
    deleteButton.addEventListener("click", function () {
        newnote.remove();
    });
}

create.addEventListener("click", createnote, false)