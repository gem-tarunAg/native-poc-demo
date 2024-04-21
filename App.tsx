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
import Slide1 from './Components/Carousel Slides/slide1';
import Slide2 from './Components/Carousel Slides/slide2';
import Slide3 from './Components/Carousel Slides/slide3';
import Slide4 from './Components/Carousel Slides/slide4';
import Slide5 from './Components/Carousel Slides/slide5';
import Slide6 from './Components/Carousel Slides/slide6';
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
        <Stack.Screen name="Slide1" component={Slide1}></Stack.Screen>
        <Stack.Screen name="Slide2" component={Slide2}></Stack.Screen>
        <Stack.Screen name="Slide3" component={Slide3}></Stack.Screen>
        <Stack.Screen name="Slide4" component={Slide4}></Stack.Screen>
        <Stack.Screen name="Slide5" component={Slide5}></Stack.Screen>
        <Stack.Screen name="Slide6" component={Slide6}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
