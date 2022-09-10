import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RestaurantItem = ({ restaurant }) => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("Restaurant", { id: restaurant.id });
    }
    return (
        <Pressable onPress={onPress}>
            <View style={styles.restrauntContainer}>
                <Image source={{ uri: restaurant.image }} style={styles.image} />
                <View style={styles.row}>
                    <View>
                        <Text style={styles.title}>{restaurant.name}</Text>
                        <Text style={styles.subtitle}>₹{restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
                    </View>
                    <View style={styles.rating}>
                        <Text style={{ color: 'black' }}>{restaurant.rating}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default RestaurantItem

const styles = StyleSheet.create({
    restrauntContainer: {
        width: '100%',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    subtitle: {
        color: 'grey',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rating: {
        marginLeft: 'auto',
        backgroundColor: '#dedcdc',
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    }
})