import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './helpers/Screens';
import Home from './Components/Home';
import Header from './Components/Header';
import Shop from './Components/Screens/Shop';
import Entertain from './Components/Screens/Entertain';
import Dine from './Components/Screens/Dine';
import Offers from './Components/Offers';
import Search from './Components/Screens/Search';
import Notification from './Components/Screens/Notification';
import Profile from './Components/Screens/Profile';
import Settings from './Components/Screens/Settings';
import Footer from './Components/Footer';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
          animation: 'slide_from_right',
        })}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Shop" component={Shop}></Stack.Screen>
        <Stack.Screen name="Entertain" component={Entertain}></Stack.Screen>
        <Stack.Screen name="Dine" component={Dine}></Stack.Screen>
        <Stack.Screen name="Offers" component={Offers}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen
          name="Notification"
          component={Notification}
        ></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
      </Stack.Navigator>
      <Footer></Footer>
    </NavigationContainer>
  );
}
