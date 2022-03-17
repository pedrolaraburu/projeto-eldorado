import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';
import topo from '../../../../assets/topo.png';
import Texto from '../../../components/Texto.js';
const width =  Dimensions.get('screen').width;
export default function Topo ({titulo}){
    return  <>
            <Image source={topo} style={styles.topo}/>
            <Texto style={styles.carrinho}>{titulo}</Texto>
            </>
};

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 582/ 772 * width,  
    },
    carrinho: {
        position: 'absolute', 
        padding: 50, 
        textAlign: 'center',
        width: '100%', 
        fontSize: 20,
        fontWeight: 'bold', 
        lineHeight: 40,
        color: 'black', 
    }, 
})