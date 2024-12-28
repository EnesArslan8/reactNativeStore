import { SafeAreaView, StyleSheet, Text } from "react-native";

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  }
})

export default App;
