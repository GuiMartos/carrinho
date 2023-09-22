import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Topo from './components/Topo';

export default function Carrinho(){
    return <>

    <View style={estilos.carrinho}>
        <Topo/>

    </View>
    </>
}
const estilos= StyleSheet.create({
    carrinho:{
        paddingVertical:8,
        paddingHorizontal: 16
    }
})