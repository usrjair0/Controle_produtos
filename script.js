class Produto {

    constructor(){ 
        this.id = 1;
        this.arrayprodutos = [];
    }
    Adicionar(){ 
    //Ao adicionar a função adicionar eu adiciono outra função que é a ler dados
        let produto = this.lerDados()
        if(this.Validar(produto) == true){ 
        //se retorna true na validação então eu ativo a função salvar
            this.Salvar(produto)
        }
        this.listar()
        this.Cancelar()
    }

    lerDados() {
        let produto = {} 
        produto.id = this.id; 
        produto.nomeProduto = document.getElementById(`pdnome`).value
        produto.precoProduto = document.getElementById(`pdpreco`).value
        return produto 
    }

    Validar(produto) { 
    

        let msg = ``; 
        if(produto.nomeProduto == ``) { 
            msg += `Por favor, insira corretamente o nome do produto" \n` 
        }
        if(produto.precoProduto == ``) {
            msg += `Por favor, insira corretamente o preço do produto" \n`
        }
        if(msg != ``){ 
            alert(msg);
            return false;
        }
        return true 
    }

    Salvar(produto) {
        this.arrayprodutos.push(produto) 
        this.id++ 
    }
    listar() {
        let tbody = document.getElementById(`tbody`);
        tbody.innerText = ``
        
        for( let i = 0; i < this.arrayprodutos.length; i++ ) {

            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            td_id.innerText = this.arrayprodutos[i].id; 
            td_nome.innerText = this.arrayprodutos[i].nomeProduto;
            td_preco.innerText = this.arrayprodutos[i].precoProduto;

            let imagem = document.createElement(`img`); 
            imagem.src = './assets/del.png' ; 
            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayprodutos[i].id+")")
            td_del.appendChild(imagem) ;  
        }
    }
    
    Cancelar() {
        document.getElementById(`pdnome`).value = ''
        document.getElementById(`pdpreco`).value = ''
    }
    Deletar(id){
        let tbody = document.getElementById(`tbody`);
        for ( let i = 0 ; i < this.arrayprodutos.length ; i++){
            if(this.arrayprodutos[i].id == id) {
                this.arrayprodutos.splice(i, 1);
                tbody.deleteRow(i);
            }
        }
        alert(`O item foi apagado com sucesso`)
    }
}
let produto = new Produto() ; 