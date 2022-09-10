import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'
import restaurants from '../../assets/data/restaurants.json';
import { AntDesign } from "@expo/vector-icons";
import BasketDishItems from '../components/BasketDishItems';

const restaurant = restaurants[0];

const Basket = () => {

    return (
        <View style={styles.page}>
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text>Your items</Text>
            <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
                Your items
            </Text>
            <FlatList
                data={restaurant.dishes}
                renderItem={({ item }) => <BasketDishItems basketDish={item} />}
            />
            <View style={styles.separator} />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>
                    Create Order
                </Text>
            </Pressable>
        </View>
    )
}

export default Basket
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40, // temp fix
        padding: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10,
    },
    description: {
        color: "gray",
    },
    separator: {
        height: 1,
        backgroundColor: "lightgrey",
        marginVertical: 10,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        paddingHorizontal: 10,
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20,
    },
    button: {
        backgroundColor: "black",
        marginTop: "auto",
        padding: 20,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 18,
    },
    quantityContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: 5,
        paddingVertical: 2,
        marginRight: 10,
        borderRadius: 3,
    },
});