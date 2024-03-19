let list = [
    {text: 'покормить кота', completed: true},
    {text: 'помыть посуду', completed: false},
];


function renderList(list) {
    const div = document.getElementsByClassName('list')[0];
    div.innerHTML = getHtmlForList(list);
}

function getHtmlForList(list) {
    let listItemsHtml = '';

    for (let i = 0; i < list.length; i++) {
        listItemsHtml = listItemsHtml + getHtmlForListItem(list[i], i);
    }

    return `
        <div class="list-group">
            ${listItemsHtml}
        </div>
    `;
}

function getHtmlForListItem(item, index) {
    let checkmark = '';
    
    if (item.completed) {
        checkmark = 'checked';
    }

    return `
        <div class="input-group mb-3">
            <span class="input-group-text">
                <input class="form-check-input" type="checkbox" ${checkmark}>
            </span>
            <input type="text" class="form-control" value="${item.text}">
            <button class="btn btn-outline-danger" type="button" onclick="deleteItem(${index})">
                Удалить
            </button>
        </div>
    `;
}

function addListItem() {
    const text = document.getElementsByClassName('input')[0].value;
    list.push({text: text, completed: false});
    renderList(list);
}

function onKeyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
        addListItem();
    }
}

function clearList() {
    list = [];
    renderList(list);
}

function deleteItem(index) {
    list.splice(index, 1);
    renderList(list);
}
const input = document.getElementsByClassName('input')[0];
input.addEventListener('keydown', onKeyDown);
renderList(list); 
