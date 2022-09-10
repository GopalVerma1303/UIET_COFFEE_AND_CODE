import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const OrderListItem = ({ order }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.navigate("Order", { id: order.id })}
            style={{ flexDirection: "row", margin: 10, alignItems: "center" }}
        >
            <Image
                source={{ uri: order.Restaurant.image }}
                style={{ width: 75, height: 75, marginRight: 5 }}
            />

            <View>
                <Text style={{ fontWeight: "600", fontSize: 16 }}>
                    {order.Restaurant.name}
                </Text>
                <Text style={{ marginVertical: 5 }}>5 items &#8226; ₹38.45</Text>
            </View>
        </Pressable>
    )
}

export default OrderListItem

const styles = StyleSheet.create({})