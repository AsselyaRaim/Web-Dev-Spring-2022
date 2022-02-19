function onPageLoaded() {
    const input = document.querySelector("input[type='text']");
    const ul = document.querySelector("#to-do-list");
    const addBtn = document.querySelector("#addBtn");

    function createTodo() {
        const li = document.createElement("li");

        const deleteBtn = document.createElement("span");
        deleteBtn.classList.add("todo-trash");
        const icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash-alt");
        deleteBtn.appendChild(icon);


        const checkBtn = document.createElement("div");
        checkBtn.innerHTML = 
        `<input type="checkbox">
        <label>${input.value}</label>`;
        checkBtn.classList.add("todo-text");

        ul.appendChild(li).append(checkBtn, deleteBtn);
        input.value = "";
        listenDeleteTodo(deleteBtn);
    }

    function onClickTodo(event) {
        if (event.target.closest("input[type=checkbox]")) {
            event.target.nextElementSibling.classList.toggle("checked");
        }
    }


    addBtn.addEventListener("click", createTodo);
    ul.addEventListener("click", onClickTodo);
}

function listenDeleteTodo(element) {
    element.addEventListener("click", (event) => {
        element.parentElement.remove();
        event.stopPropagation();
    });
}

document.addEventListener("DOMContentLoaded", onPageLoaded);