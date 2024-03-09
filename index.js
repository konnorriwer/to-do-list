let list = [
    {text: 'покормить кота', completed: true},
    {text: 'помыть посуду', completed: false},
];


function renderList(list) {
    const div = document.getElementsByClassName('list')[0];
    let result = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        let checked = '';
        if (element.completed) {
            checked = 'checked';
        }
        result = result + `
        <div class="input-group mb-3">
             <span class="input-group-text">
                <input class="form-check-input" type="checkbox" ${checked}>
             </span>
             <input type="text" class="form-control" value="${element.text}">
             <button class="btn btn-outline-danger" type="button">Удалить</button>
        </div>`;
    }
    result = '<ul class="list-group">' + result + '</ul>';
    div.innerHTML = result;
}

function add() {
    const text = document.getElementsByClassName('input')[0].value;
    list.push(text);
    renderList(list);
}

function onKeyDown(event) {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
        add();
    }
}

function clearList() {
    list = [];
    renderList(list);
}

const input = document.getElementsByClassName('input')[0];
input.addEventListener('keydown', onKeyDown);
renderList(list); 
