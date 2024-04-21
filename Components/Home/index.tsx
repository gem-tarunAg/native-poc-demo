import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Home';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helpers/Screens';
import { LinearGradient } from 'expo-linear-gradient';

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const onViewOffers = () => {
    console.log('Button Clicked');
    navigation.navigate('Offers');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require('../../assets/bg-image.png')}
        style={styles.imageBackground}
      />
      <View style={styles.blackBackground} />
      <View style={styles.shadowLayer}>
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.9)']} // Gradient for shadow
          style={styles.shadowGradient}
        />
      </View>
      <View style={styles.container3}>
        <View style={styles.container2}>
          <Text style={styles.text2}>Bossini</Text>
        </View>
        <Text style={styles.boldText}>20% STUDENT OFFER</Text>
        <Text style={styles.boldText}>AT BOSSINI</Text>
        <Text style={styles.text}>06 JAN - 01 JUN</Text>
        <TouchableOpacity style={styles.button} onPress={onViewOffers}>
          <Text style={styles.buttonText}>View all offers →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
