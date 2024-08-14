let id = 0;
let inputTarefa = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById("listas")

function addTarefa(){
    let valorInput = inputTarefa.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        ++id;
        let novoItem = ` <div id=${id} class="item">
                            <div onclick="tarefaFeita(${id})" class="item-icone">
                                <i id="icone_${id}" class="mdi mdi-circle-outline"></i>
                            </div> 
                            <div onclick="tarefaFeita(${id})" class="item-nome">
                                ${valorInput}
                            </div> 
                            <div class="item-botao">
                                <button onclick="deletar(${id})" class="deletar"><i class="mdi mdi-delete-circle">Delete</i></button>
                            </div> 
                        </div>`

        main.innerHTML += novoItem;
        inputTarefa.value = "";
        inputTarefa.focus();

    }
}

inputTarefa.addEventListener("keyup", function(event){
    // 13 significa a tecla enter
    if(event.keyCode === 13){
        event.preventDefault(); //prefine de qualquer erro no enter e ocorra somente que foi pedido
        btnAdd.click();
    }

})

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function tarefaFeita(id){
    var item =  document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);

    if(classe==="item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item); //joga o item para o final da lista quando clicado
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+ id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}