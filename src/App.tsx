import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { ProductCard, SearchInput } from "./components";
import products from '../products.json'
function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NS STORE</Text>
      <FlatList
        ListHeaderComponent={
          <SearchInput/>
        }
        keyExtractor={item => item.id.toString()}
        data={products}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
              <ProductCard
                {...item}
              />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    margin:20,
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    marginBottom:30,
    textAlign:'left',
    letterSpacing:3,
    color:'orange',
  },
  cardContainer:{
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'space-between',
    flex:1,
  }
})

export default App;
