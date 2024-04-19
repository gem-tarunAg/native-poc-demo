import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './helpers/Screens';
import Home from './Components/Home';
import Header from './Components/Header';
import Shop from './Components/Shop';
import Entertain from './Components/Entertain';
import Dine from './Components/Dine';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
