import { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Paragraph, Appbar } from 'react-native-paper';
import axios from 'axios';
import { ScrollView } from 'react-native-virtualized-view'

const Dashboard = ({ navigation }) => {

  const [list, setList] = useState([]);
  const [category, setCategory] = useState();
  const [totalProducts, setTotalProducts] = useState()
  const [product, setproduct] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setTotalProducts(res.data);
      let data = [];
      for (let i = 0; i < totalProducts.length; i++) {
        if (res.data[i]?.category === category) {
          data.push(res.data[i])
        }
      }
      setproduct(data)
    })
  }, [category])


  useEffect(() => {
    let mounted = true;
    axios.get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        setCategory(res.data[0]);
        if (mounted) {
          setList(res.data)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <SafeAreaView>
      <ScrollView >
        <View>
          <FlatList
            horizontal={true}
            data={list}
            renderItem={({ item }) =>
              <Appbar.Header style={styles.colorchange}>
                <Appbar.Content title={item} onPress={() => setCategory(item)} />
              </Appbar.Header>} />

          <Text style={styles.categoryName}>{category}</Text>
          {!category ? <ActivityIndicator size="large" /> : ''}
          <FlatList
            data={product}
            renderItem={({ item }) => {
              return (
                <View key={item.id}>
                  <Card style={styles.card} onPress={() => navigation.navigate('ProductDetails',
                    { paramKey: { totalProducts, item } })}>
                    <Card.Content>
                      <Paragraph style={{ fontSize: 16, fontWeight: "bold", marginBottom: 15 }}>{item.title}</Paragraph>
                      <Card.Cover style={{ height: 300, marginBottom: 10 }} source={{ uri: item.image }} />
                      <Text style={styles.text}>Price :- ${item.price} 💵</Text>
                      <Text style={styles.text}>Rating:- {item.rating.rate} ⭐⭐⭐⭐⭐</Text>
                    </Card.Content>
                  </Card>
                </View>
              )
            }}
            keyExtractor={item => item.id} />
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#eec4dc',

  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    margin: 8,
  },
  categoryName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  colorchange: {
    backgroundColor: 'pink', height: 30
  },
  withoutchange: {
    backgroundColor: 'yellow'
  }
})
export default Dashboard;




2