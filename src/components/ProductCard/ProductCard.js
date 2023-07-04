import React from "react";
import {
    View,
    Text,
    Image
} from "react-native";
import styles from './ProductCard.style'

const ProductCard = ({ products }) => {
    return (
        <View style={styles.container}>
            <View style={styles.image_container}>
                <Image
                    style={styles.image}
                    source={{ uri: products.imgURL }}
                />
            </View>
            <View style={styles.inner_container}>
                <Text style={styles.name}> {products.title} </Text>
                <Text style={styles.price}> {products.price} </Text>
                {products.inStock ? <Text></Text> : <Text style={styles.stock}> STOKTA YOK </Text>}
            </View>
        </View>
    );
}

export default ProductCard;