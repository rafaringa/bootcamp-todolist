var todolist = document.getElementById('todolist');

function insereTarefa(){
    let valor = document.getElementsByTagName('input')[0].value;
    let htmltarefa = '<span><input type="checkbox" />'+ valor + '</span>';
    todolist.insertAdjacentHTML("afterend", htmltarefa);
}
