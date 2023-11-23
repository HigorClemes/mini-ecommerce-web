export interface ProdutoModel{
    id : Number;
    nome : String;
    tipo :  Number;
    valor : Number;
    descricao : String;
    quantidade : Number;
    foto : String;
}

export interface PedidoModel{
    id : Number;
    preco_total : Number;
    tot_itens : Number; 
    dt_inc : String;
    id_usuario : Number;
    status : Number;

}