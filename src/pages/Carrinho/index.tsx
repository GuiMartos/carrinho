import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import logo from '../../../assets/logo.png';

export default function Carrinho(){
    return <>

    <View style={estilos.carrinho}>

        <Text style={estilos.titulocarrinho}>Carrinho de compra</Text>
        <View style={estilos.fazenda}>
            <Image style={estilos.imgFazenda} source={logo}></Image>
            <Text style={estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para sua cozinha 
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
    </View>
    </>
}
const estilos= StyleSheet.create({
    titulocarrinho:{
        fontSize: 26,
        lineHeight: 46,
        color: "#464646",
        fontFamily: "MontserratBold"
    },
    carrinho:{
        paddingVertical:8,
        paddingHorizontal: 16
    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight:26,
        marginLeft: 12,
        fontWeight: "bold"
    },
    imgFazenda:{
        width: 32,
        height: 32
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12
    },
    descricao:{
        color:"#a3a3a3",
        fontStyle: "italic"
    },
    preco:{
        fontSize: 26,
        lineHeight:42,
        color: "#2a9f85",
        marginTop: 8
    }

})