import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto.js';
import { useNavigation } from '@react-navigation/native';
import Compra from '../../Compra/index.js'
export default function Detalhes ({titulo, nomeVendedor, logoVendedor, desc, preco, botao, navigation}){

    return  <>
            <Texto style={styles.titulo}>{titulo}</Texto>
            <View style ={styles.vendedor}>
                <Image source={logoVendedor} style ={styles.logo}/>
                <Texto style={styles.nomeVendedor}>{nomeVendedor}</Texto>
            </View>
            <Texto style={styles.descricao}>{desc}</Texto>
            <Texto style={styles.preco}>{preco}</Texto>
            <TouchableOpacity onPress={() => navigation.navigate('Compra')} style={styles.botao} >
                <Texto style={styles.textoBotao}>{botao}</Texto>
            </TouchableOpacity>
            </>
};

const styles = StyleSheet.create({
    titulo: {
        color: '#ffa500', 
        fontWeight: 'bold', 
        fontSize: 30,
        lineHeight: 42, 

    }, 
    vendedor: {
        flexDirection: "row", 
        paddingVertical: 12, 
    }, 
    nomeVendedor: {
        fontSize: 20, 
        lineHeight: 42,
        marginLeft: 10
    },  
    descricao: {
        color: '#a3a3a3', 
        fontSize: 16, 
        lineHeight: 26, 
    }, 
    preco: {
        color: '#ffa500', 
        fontSize: 30, 
        lineHeight: 42, 
        marginTop: 8, 
        
    }, 
    botao: {
        marginLeft: "2.5%", 
        width: "33%", 
        marginTop: 16, 
        backgroundColor: "#a3a3a3", 
        color: '#ffa500',
        paddingVertical: 16, 
        borderRadius: 5,
    }, 
    textoBotao: {
        textAlign: 'center', 
        color: '#fff', 
        fontSize: 18, 
        lineHeight: 28, 
        fontWeight: 'bold'
    }, 
    logo: {
        width: 32, 
        height: 32,
        marginLeft: 10  
    }
})