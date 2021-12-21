var listaTarefas = document.getElementById('tarefaspendentes');
var idTarefa = 0;

function insereTarefa(){
    let tarefadigitada = document.getElementById('inputnovatarefa');
    let htmltarefa = '<span class="w-100 py-2 mb-2 btn btn-outline-dark rounded-4 text-left" type="submit" id="t'+ idTarefa +'" onClick="tarefaConcluida(this.id)"><p>Feito</p>'+ tarefadigitada.value + '</span>';
    listaTarefas.insertAdjacentHTML("afterend", htmltarefa);
    tarefadigitada.value = '';
    idTarefa++;
}

function tarefaConcluida(pegaId){
    let spanTarefa = document.getElementById(pegaId);
    if(!spanTarefa.classList.contains('tarefaConcluida')){
        spanTarefa.classList.add("tarefaConcluida");
        console.log("Done!");
    } else {
        spanTarefa.classList.remove("tarefaConcluida");
        console.log('Desdone');
    }
}
