import {useState} from "react"
import {TextInput, SafeAreaView, StyleSheet} from "react-native"

const SearchInput = () => {
    const [searchingText,setSearchingText] = useState('');
  return (
    <SafeAreaView>
        <TextInput
            style={styles.searchInput}
            placeholder="Ara..."
            value={searchingText}
            onChange={(event)=>setSearchingText(event.nativeEvent.text)}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchInput:{
        backgroundColor: '#dfdfdf',
        padding:10,
        borderRadius:8,
        color: '#000',
    }
})

export {SearchInput}