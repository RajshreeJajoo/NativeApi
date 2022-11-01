import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState } from "react";

const Login = ({ navigation }) => {
    const [uname, setuname] = useState();
    const [password, setpassword] = useState();

    const clicktologin = () => {

        if (uname === 'Rajshree' && password === '1234') {
            navigation.navigate('Shopping');
        }
        else {
            navigation.navigate('Error');
        }
    }
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: 'lightpink', height: 800 }}>
                <Text style={styles.container}>Login to App 🛍️ </Text>
                <TextInput style={styles.inputStyle} placeholder="📧  Enter Username" value={uname} onChangeText={(name) => setuname(name)} />
                <TextInput style={styles.inputStyle} placeholder=" 🔑 Enter Password" value={password} secureTextEntry={true} onChangeText={(pass) => setpassword(pass)} />
                <View style={{ marginTop: 20, margin: 5 }}>
                    <Button color='palevioletred' title='Login' onPress={clicktologin} />
                </View>
                <Image source={{ uri: 'https://i.pinimg.com/originals/a6/d5/d5/a6d5d50e7119a756be7ed0b472401633.jpg' }}
                    style={{ marginTop: 30, width: 400, height: 300, borderRadius: 30, marginRight: 10 }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        marginTop: 100,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold"
    },
    inputStyle: {
        borderWidth: 3,
        margin: 5,
        padding: 10,
        borderRadius: 10
    }
})

export default Login;