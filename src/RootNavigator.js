import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import DishDetailsScreen from "./screens/DishDetailsScreen";
import Basket from './screens/Basket';
import OrderScreen from "./screens/OrderScreen";
import OrderDetails from './screens/OrderDetails';
import Profile from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='HomeTab' component={HomeTab} />
            <Stack.Screen
                name='Restaurant'
                component={RestaurantDetailsScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
const HomeTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Foundation name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrderStackNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="list-alt" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="user-alt" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Restaurants" component={HomeScreen} />
            <HomeStack.Screen
                name="Restaurant"
                component={RestaurantDetailsScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen name="Dish" component={DishDetailsScreen} />
            <HomeStack.Screen name="Basket" component={Basket} />
        </HomeStack.Navigator>
    );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Orders" component={OrderScreen} />
            <OrdersStack.Screen
                name="Order"
                component={OrderDetails}
                screenOptions={{ headerShown: false }}
            />
        </OrdersStack.Navigator>
    );
};

export default RootNavigator;