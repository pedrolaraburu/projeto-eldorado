import React from 'react';
import {FlatList} from 'react-native';
import mock from '../../mocks/carrinho.js';
import Compra from '../carrinho/components/comprinhas.js';
import NovaLista from "../carrinho/components/lista.js"

export default function Carrinho({navigation}){
    return  <>
                <FlatList
                    ListHeaderComponent ={() => {
                        return <>
                                <Compra {...mock.compra}/>
                                </>
                    }}
                    data={mock.footer.lista} 
                    renderItem={NovaLista} 
                    keyExtractor={({nome}) => nome }
                    ListFooterComponent = {() => {
                        return  <> 
                                </>
                    }} 
                    /> 

            </>
}
