import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import restaurants from '../../assets/data/restaurants.json';
import { Ionicons } from '@expo/vector-icons';
import DishListItems from '../components/DishListItems';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';



const RestaurantDetailsScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    const restaurant = restaurants[id - 1];

    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <Ionicons
                name='arrow-back-circle'
                size={55}
                color='white'
                style={styles.iconcontainer}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>₹{restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
            </View>
            <FlatList
                data={restaurant.dishes}
                renderItem={({ item }) => <DishListItems dish={item} />}
                keyExtractor={(item) => item.name}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}

export default RestaurantDetailsScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
    },
    image: {
        width: '100%',
        aspectRatio: 5 / 3,
    },
    title: {
        fontSize: 36,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        color: 'grey',
    },
    container: {
        margin: 10,
    },
    iconcontainer: {
        position: 'absolute',
        top: 40,
        left: 10,
    }
})