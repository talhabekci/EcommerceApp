import {
    Dimensions,
    StyleSheet
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        margin: 10,
        borderRadius: 10,
    },

    image: {
        height: Dimensions.get('window').height / 2,
        borderRadius: 10,
        margin: 15
    },

    inner_container: {
        marginLeft: 15,
        marginRight: 15
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#656565'
    },

    stock: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
