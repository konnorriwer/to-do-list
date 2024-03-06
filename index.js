const list = ['накормить кота', 'помыть посуду'];


function renderList(list) {
    const div = document.getElementsByClassName('list')[0];
    let result = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        result += `
        <div class="input-group mb-3">
             <span class="input-group-text">
                <input class="form-check-input" type="checkbox" value="">
             </span>
             <input type="text" class="form-control" value="${element}" disabled>
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

const input = document.getElementsByClassName('input')[0];
input.addEventListener('keydown', onKeyDown);
renderList(list); 
