import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Card, Title, Paragraph } from 'react-native-paper';
import { ScrollView } from 'react-native-virtualized-view'
const { width } = Dimensions.get('window')

const Details = ({ navigation }) => {
    let productdetails = navigation.state.params.paramKey;
    let details = productdetails.item;

    return (
        <ScrollView>
            <View style={{ backgroundColor: 'pink' }}>
                <Text style={styles.heading}>DETAIL OF PRODUCT</Text>
                <Card style={{ marginTop: 20, backgroundColor: 'light slate blue' }}>
                    <Paragraph style={styles.titleName}>{details.title}</Paragraph>
                    <Card.Cover style={styles.img} source={{ uri: details.image }} />
                    <Card.Content>
                        <Title><Text>Price :- ${details.price} 💵</Text></Title>
                        <View style={{ flexDirection: 'row' }} >
                            <Paragraph style={{ fontSize: 18 }}>Rating:- {details.rating.rate} ⭐⭐⭐⭐⭐ </Paragraph>
                            <Paragraph style={{ margin: 10, fontSize: 18 }}>Count:- {details.rating.count}</Paragraph>
                        </View>
                        <Paragraph style={styles.desc}>{details.description}</Paragraph>

                    </Card.Content>

                </Card>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    img: {
        margin: 2,
        marginTop: 30,
        width: width,
        //maxwidth: 500,
        height: 450,
        //resizeMode:'center',
        //resizeMethod:'auto',

    },
    titleName: {
        textAlign: 'center',
        padding: 10,
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor: 'seashell'
    },
    heading: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
    desc: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lavenderblush',
        marginTop: 10
    }
})
export default Details;


