import { StyleSheet, FlatList } from 'react-native';
import RestaurantItem from '../components/RestaurantItem';
import restaurants from '../../assets/data/restaurants.json';


const HomeScreen = () => {
    return (
        <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantItem restaurant={item} />}
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    flatlist: {
        width: '100%',
        padding: 10,
    }
})