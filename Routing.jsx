import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Details from './components/Details';
import { Button } from 'react-native';


const Routing =({navigation})=>
{
    <AppNavigator/>


const AppNavigator = createStackNavigator({
    LoginPage: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  
    Shopping: {
      screen: Dashboard,
      navigationOptions: {
        title:"E-Shopping",
        headerRight: () => (
          <Button title="Logout"
           // onPress={() => alert("Logout")}
            onPress={() => navigation.navigate('LoginPage')}
            color='palevioletred'
          />
        ),
        headerLeft:()=>{
         }
      },
    },
    Error: {
      screen: Error
    },
    ProductDetails: {
      screen: Details,
      navigationOptions: {
        title:"Product Detail",
      }
    }
  }, {
    initialRouteName: "LoginPage"
  });
}

export default Routing;

