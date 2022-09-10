import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React from "react";

const Profile = () => {

    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.title}>Profile</Text>
            <TextInput
                value="Gopal Verma"
                placeholder="Name"
                style={styles.input}
            />
            <TextInput
                value="PEC, Chandigarh"
                placeholder="Address"
                style={styles.input}
            />
            <TextInput
                value="30.733315°"
                placeholder="Latitude"
                style={styles.input}
            />
            <TextInput
                value="76.779419°"
                placeholder="Longitude"
                style={styles.input}
            />
            <Button title="Save" />
            <Text
                style={{ textAlign: "center", color: "red", margin: 10 }}
            >
                Sign out
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    input: {
        margin: 10,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 5,
    },
});

export default Profile;