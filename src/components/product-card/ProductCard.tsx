import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ProductsType } from './type'

const ProductCard = ({id,imgURL,inStock,price,title}:ProductsType) => {
  return (
    <View style={[styles.cardContainer,{flex:1,height:Dimensions.get('window').height/2,justifyContent:'space-between',margin:10}]} key={id}>
            <Image
                src={imgURL}
                style={styles.cardImage}
            />
            <Text style={styles.productTitle}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            {!inStock ? <Text style={styles.inStock}>Stok Yok</Text> :null}
    </View>
  )
}

const styles=StyleSheet.create({
    cardContainer:{
        color:'#fff',
        borderRadius:8,
        marginTop:5,
        padding:10,
    },
    cardImage:{
        width:'100%',
        height:300,
        resizeMode:'stretch',
        borderRadius:8,
    },
    productTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    price:{
        color:'#777',
        fontSize:16,
        fontWeight:'bold',
    },
    inStock:{
        color:'red',
        fontSize:16,
        textTransform:'uppercase',
    }
})

export {ProductCard}