import logo from '../../assets/logo.png';
import antena2g3g from '../../assets/Itens/antena2g3g.png';
import antenaWifi from '../../assets/Itens/antenaWifi.png';
import modem from '../../assets/Itens/modem.png';
import nodeMcu from '../../assets/Itens/nodeMcu.png';
import FotoIOT from "../../assets/Itens/fotoKitIOT.jpg"
import antena2g3g2 from "../../assets/Itens/antena2g3g2.jpeg"
import antena2 from "../../assets/Itens/antena2.png"
import modem2 from "../../assets/Itens/modem2.jpg"
import nodeMCU2 from "../../assets/Itens/nodeMCU2.jpeg"
const carrinho = {
    topo: {
        titulo: "Detalhes do carrinho"
    }, 
    detalhes: {
        titulo: "Kit IOT", 
        nomeVendedor: "Cloud Shopping", 
        logoVendedor: logo, 
        desc: "Um kit de IOT para alunos iniciantes se aventurarem nas nuvens.", 
        preco: "R$99,90", 
        botao: "Comprar"
    }, 
    itens: {
        titulo: "Itens do carrinho", 
        lista: [ {
            nome: "Antena 2G/3G", 
            imagem: antena2g3g
        }, 
        {
            nome: "Antena WIFI", 
            imagem: antenaWifi
        }, 
        {
            nome: "Modem", 
            imagem: modem
        }, 
        {
            nome: "Node MCU", 
            imagem: nodeMcu
        }, 
        ]
    }, 
    compra: {
        titulo: "Seu carrinho: ", 
        logoIOT: FotoIOT, 
        textoProduto: "Kit IOT", 
        textoEntregue: "Vendido e entregue por Cloud Shopping", 
        botaoMenos: "-", 
        botaoMais: "+", 
        textoReais: "R$", 
        textoResumo: "Resumo do pedido", 
        produtos: "produto(s)",
        frete: "Frete", 
        gratis: "Grátis", 
        total: "Total", 
        boletoJuros: "boleto ou em até 10x sem juros!", 
        textoContinuar: "Continuar", 
        descricao: "Descrição do produto: "
    }, 
    footer: {
        lista : [ {
            nome: "Antena Incorpada", 
            imagem: antena2g3g2
        },{
            nome: "Antena WiFi", 
            imagem: antena2
        }, {
            nome: "Modem SARA-N2", 
            imagem: modem2
        }, {
            nome: "Microcontrolador de Placa Única", 
            imagem: nodeMCU2
        } ]
    }
};

export default carrinho;