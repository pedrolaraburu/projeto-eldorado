import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import Texto from '../../../components/Texto.js';
export default function ListaNova({item: {nome, imagem}}){
    return  <>
            <View style={style.item}>
                <Image style={style.imagem} source={imagem}/>
                <Texto style={style.nome}>{nome}</Texto>
            </View>
            </>
}; 


const style = StyleSheet.create({
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
    titulo: {
        fontWeight:"bold",
        marginTop: 32,
        color:"#464646",
        lineHeight:32,
        fontSize:20,
        marginBottom:8
    }, 
    item: {
        flexDirection:"row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical:16,
        paddingHorizontal:16,
        alignItems: "center",
    }, 
    imagem: {
        width: 46, 
        height: 46
    }, 
    nome: {
        fontSize:16,
        lineHeight:16,
        marginLeft:11,
        color:"#ffa500"
    }
}) 
