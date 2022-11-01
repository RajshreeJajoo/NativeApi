import { createAppContainer } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Details from './components/Details';
import { Button } from 'react-native';

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
const AppNavigator = createStackNavigator({
  LoginPage: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },

  Shopping: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: "E-Shopping",
      headerRight: () => (
        <Button title="Logout"
          onPress={() => navigation.navigate('LoginPage')}
          color='palevioletred'
        />
      ),
      headerLeft: () => {
      }
    }),
  },
  Error: {
    screen: Error
  },
  ProductDetails: {
    screen: Details,
    navigationOptions: {
      title: "Product Detail",
    }
  }
}, {
  initialRouteName: "LoginPage"
});


const AppContainer = createAppContainer(AppNavigator);
export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer />
    </SafeAreaProvider>
  )
}

