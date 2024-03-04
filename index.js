const list = ['накормить кота', 'помыть посуду'];


function renderList(list) {
    const div = document.getElementsByClassName('list')[0];
    let result = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        result = result + '<li class="list-group-item">' + '<input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">' + element + '</li>';
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
