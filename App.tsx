import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './helpers/Screens';
import Home from './Components/Home';
import Header from './Components/Header';
import Shop from './Components/Shop';
import Entertain from './Components/Entertain';
import Dine from './Components/Dine';
import Offers from './Components/Offers';
import Search from './Components/Screens/search';
import Notification from './Components/Screens/notification';
import Profile from './Components/Screens/profile';
import Setting from './Components/Screens/setting';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          header: () => <Header navigation={navigation} />,
          animation: 'slide_from_right'
        })}
      >
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Shop" component={Shop}></Stack.Screen>
        <Stack.Screen name="Entertain" component={Entertain}></Stack.Screen>
        <Stack.Screen name="Dine" component={Dine}></Stack.Screen>
        <Stack.Screen name="Offers" component={Offers}></Stack.Screen>
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
        <Stack.Screen name="Notification" component={Notification}></Stack.Screen>
        <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
        <Stack.Screen name="Setting" component={Setting}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
