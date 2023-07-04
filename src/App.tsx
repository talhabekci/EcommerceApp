import React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import products_data from './products.json';
import ProductCard from "./components/ProductCard";

const App = () => {

  const renderProducts = ({ item }) => <ProductCard products={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>IBSTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
      />
      <FlatList
        data={products_data}
        renderItem={renderProducts}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  header_text: {
    fontSize: 25,
    color: '#F99A23',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },

  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    height: 50,
    margin: 10,
    padding: 10
  },

});

export default App;