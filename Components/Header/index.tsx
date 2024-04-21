import { View, Text, TouchableOpacity } from 'react-native';
import { StylesHeader as styles } from '../../Styles/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helpers/Screens';

type HeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Header: React.FC<HeaderProps> = ({ navigation }) => {
  const handleClick = (screenName: any) => {
    console.log(`Clicked on ${screenName}`);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick('Shop')}
      >
        <Text style={styles.buttonText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick('Entertain')}
      >
        <Text style={styles.buttonText}>Entertain</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleClick('Dine')}
      >
        <Text style={styles.buttonText}>Dine</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
