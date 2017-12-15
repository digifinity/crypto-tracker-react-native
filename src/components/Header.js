import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Header = () => {
    return (
        <View style={headerContainer}>
            <Text style={header}>
                Cryptocurrency App
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#FFF",
        display: "flex",
        marginTop: 55,
        alignItems: "center",
    },
    header: {
        backgroundColor: "#FFF",
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",        
        fontSize: 20,
    },
    image: {
    }
})

const { headerContainer, header, image } = styles;


export default Header;