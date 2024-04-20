import { View, Text, TouchableOpacity } from 'react-native';
import { StylesHeader as styles } from '../../Styles/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helpers/Screens';

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Header: React.FC<HeaderProps> = ({navigation}) => {
  const onShopPress = () => {
    console.log('Shop Pressed');
    navigation.navigate('Shop');
    
  };
  const onEntertainPress = () => {
    console.log('Entertain Pressed');
    navigation.navigate('Entertain');
  };
  const onDinePress = () => {
    console.log('Dine Pressed');
    navigation.navigate('Dine');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onShopPress}>
        <Text style={styles.buttonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onEntertainPress}>
        <Text style={styles.buttonText}>Entertain</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDinePress}>
        <Text style={styles.buttonText}>Dine</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Header;
