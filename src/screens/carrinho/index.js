import React from 'react';
import {FlatList} from 'react-native';
import Detalhes from './components/detalhes.js'
import Topo from './components/topo.js'
import Item from './components/item.js'
import mock from '../../mocks/carrinho.js'
import Compra from '../Compra/index.js';

export default function Carrinho({navigation}){
    return  <>
                <FlatList 
                    data={mock.itens.lista} 
                    renderItem={Item} 
                    keyExtractor={({nome}) => nome }
                    ListHeaderComponent ={() => {
                        return <>
                                <Topo {...mock.topo}/>
                                <Detalhes {...mock.detalhes} navigation={navigation}/> 
                                </>
                    }} 
                    /> 

            </>
}
