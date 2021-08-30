let listaProdutos = [];

function inserir(produto) {
    listaProdutos.push(produto);
}

function listar() {
    return listaProdutos;
}

function buscarPorId(id) {
    for (let prod of listaProdutos) {
        if (prod.id == id) {
            return prod;
        }
    }
}

function atualizar(id, produto, preco) {
    for (let prod of listaProdutos) {
        if (prod.id === id) {
            let i = listaProdutos.indexOf(prod);
            listaProdutos[i].nome = produto;
            listaProdutos[i].preco = preco;
            return listaProdutos
        }
    }
}

function deletar(id) {
    for (let prod of listaProdutos) {
        if (prod.id === id) {
            let i = listaProdutos.indexOf(prod);
            listaProdutos.splice(i, 1)
            return listaProdutos
        }
    }
}


inserir({id: 1, nome: 'Produto 1', preco: 10})
inserir({id: 2, nome: 'Produto 2', preco: 20})
inserir({id: 3, nome: 'Produto 3', preco: 30})
inserir({id: 4, nome: 'Produto 4', preco: 40})
inserir({id: 5, nome: 'Produto 5', preco: 50})
inserir({id: 6, nome: 'Produto 6', preco: 60})
inserir({id: 7, nome: 'Produto 7', preco: 70})
inserir({id: 8, nome: 'Produto 8', preco: 80})

buscarPorId(1);
console.log(listaProdutos)
console.log(buscarPorId(4))
console.log(buscarPorId(5))
// console.log(deletar(8))
inserir({id: 9, nome: 'Produto 9', preco: 90})
console.log(atualizar(1,'Novo Produto 1',100))
console.log(listaProdutos)