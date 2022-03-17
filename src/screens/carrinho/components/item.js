import React from 'react';
import Texto from '../../../components/Texto.js';
import {View, StyleSheet, Image, FlatList} from 'react-native';
export default function Item ({item: {nome, imagem}}) {
    return  <>
            <View style={styles.item}> 
            <Image style={styles.imagem} source={imagem}/>
            <Texto style={styles.nome}>{nome}</Texto>
            </View> 
            </>
};
const styles = StyleSheet.create({
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
});
