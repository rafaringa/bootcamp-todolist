var div = document.getElementsByTagName('div')[2];

function insereTarefa(){
    let valor = document.getElementsByTagName('input')[0].value;
    let htmltarefa = '<span><input type="checkbox" />'+ valor + '</span>';
    div.insertAdjacentHTML("afterend", htmltarefa);
}
