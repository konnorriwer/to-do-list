const list = ['накормить кота', 'помыть посуду'];


function renderList(list) {
    const div = document.getElementsByClassName('list')[0];
    let result = '';
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        result = result + '<li>' + element + '</li>';
    }
    result = '<ul>' + result + '</ul>';
    div.innerHTML = result;
}

function add() {
    const text = document.getElementsByClassName('input')[0].value;
    list.push(text);
    renderList(list);
}

renderList(list);