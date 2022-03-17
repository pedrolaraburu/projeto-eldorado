import React from 'react';
import {useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto.js';
import Modem from "../../../../assets/Itens/fotoKitIOT.jpg"
export default function Compra({navigation, titulo, logoIOT, textoProduto, textoEntregue, botaoMenos, botaoMais, textoReais, textoResumo, produtos, frete, gratis, total, boletoJuros, textoContinuar, descricao}){
    const [precoA, setPreco] = useState(99.90);
    const [count, setCount] = useState(1);
    let precoAjustado = (precoA * count).toFixed(2)
    
    return  <>
            <Texto style={style.textoCarrinho}>{titulo}</Texto>
            <View style={style.retaProduto}>
                <Image source={logoIOT} style={style.fotoKitIOT}/>
                <Texto style={style.textoProduto}>{textoProduto}</Texto>
                <Texto style={style.textoEntregue}>{textoEntregue}</Texto>
            </View>
            <View style={style.retaQuantidade}>
                <TouchableOpacity onPress={() => setCount(count - 1)} style={style.botaoDiminuir}>
                    <Texto style={style.textoBotao}>{botaoMenos}</Texto>
                </TouchableOpacity>
                <Texto style={style.textoContador}>{count}</Texto>
                <TouchableOpacity onPress={() => setCount(count + 1)} style={style.botaoAumentar}>
                    <Texto style={style.textoBotao}>{botaoMais}</Texto>
                </TouchableOpacity>
                <Texto style={style.preco}>{textoReais}{precoAjustado}</Texto>
            </View>
            <View style={style.resumoTodo}>
                <Texto style={style.resumo}>{textoResumo}</Texto>
                <View style={style.retaProduto}>
                    <Texto>{count} {produtos}</Texto>
                    <Texto style={style.precinho}>{textoReais}{precoAjustado}</Texto>
                </View>
                <View style={style.retaProdutoFrete}>
                    <Texto style={style.frete}>{frete}</Texto>
                    <Texto style={style.freteGratis}>{gratis}</Texto>
                </View>
                <View style={style.retaProdutoPrecoTotal}>
                    <Texto style={style.precoTotal}>{total}</Texto>
                    <Texto style={style.precoTotalAjustado}>{textoReais}{precoAjustado}</Texto>
                </View>
                <Texto>{boletoJuros}</Texto>
                <TouchableOpacity onPress={() => alert("Esse botão ainda não faz nada!")}style={style.botaoContinuar}>
                    <Texto style={style.textoContinuar}>{textoContinuar}</Texto>
                </TouchableOpacity>
            </View>
            <Texto style={style.titulo}>{descricao}</Texto>
            </>
}; 


const style = StyleSheet.create({
    titulo: {
        fontWeight:"bold",
        marginTop: 32,
        color:"#464646",
        lineHeight:32,
        fontSize:20,
        marginBottom:8
    }, 
    textoCarrinho: {
        fontSize: 20, 
        marginTop: 15, 
        fontWeight: "bold"
    }, 
    textoContinuar: {
        textAlign: "center", 
        fontSize: 20, 
        marginTop: 5, 
        marginBottom: 5, 
    }, 
    preco: {
        fontSize: 20, 
        marginLeft: 20
    }, 
    precinho: {
        marginLeft: "48.1%", 
        fontWeight: "bold"
    }, 
    fotoKitIOT: {
        marginTop: 30, 
        marginLeft: 5, 
        width: 60, 
        height: 60, 
    }, 
    retaProduto: {
        flexDirection: "row", 
        marginTop: 7 
    },   
    retaProdutoFrete: {
        flexDirection: "row", 
        marginTop: 7, 
        borderTopWidth: 1, 
        borderTopColor: "#ececec"
    },   
    retaProdutoPrecoTotal: {
        flexDirection: "row", 
        marginTop: 7, 
        borderTopWidth: 1, 
        borderTopColor: "#ececec"
    }, 
    textoProduto: {
        marginTop: 48, 
        marginLeft: 8, 
        fontSize: 18
    }, 
    textoEntregue: {
        position:"absolute", 
        marginTop: 75, 
        marginLeft: 75, 
        color: "#a3a3a3", 
        fontWeight: "bold", 
        fontSize: 13
    }, 
    retaQuantidade: {
        flexDirection: "row", 
        borderTopWidth: 1, 
        borderTopColor: "#ececec", 
        marginTop: 14, 
        marginLeft: 80
    }, 
    textoContador: {
        fontSize: 20
    }, 
    botaoDiminuir: {
        backgroundColor: "white", 
        color: '#ffa500',
        borderRadius: 4,
        borderColor: "#a3a3a3", 
        paddingHorizontal: 10, 
        paddingVertical: 4
    },     
    botaoAumentar: {
        backgroundColor: "white", 
        color: '#ffa500',
        borderRadius: 4,
        borderColor: "#a3a3a3", 
        paddingHorizontal: 10, 
        paddingVertical: 4
    }, 
    textoBotao: {
        color: 'orange', 
        fontSize: 16, 
        fontWeight: "bold"
    }, 
    resumoTodo: {
        marginTop: 20, 
        backgroundColor: "#F8F8F8", 
        borderRadius: 20, 
    }, 
    resumo: {
        marginTop: 12, 
        fontSize: 20, 
    }, 
    frete: {
        color: "#66CE02", 
        fontWeight: "bold", 
    }, 
    freteGratis: {
        color: "#66CE02", 
        fontWeight: "bold", 
        marginLeft: "59%"
    }, 
    precoTotal : {
        color: "#000000", 
        fontWeight: "bold"
    },     
    precoTotalAjustado : {
        color: "#000000", 
        fontWeight: "bold", 
        marginLeft: "60%"
    }, 
    botaoContinuar: {
        marginTop: 8, 
        marginBottom: 25, 
        borderRadius: 3, 
        marginLeft: "34%", 
        width: "33%",
        backgroundColor: "#ffa500",
    }


}) 
