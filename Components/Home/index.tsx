import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Home';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helpers/Screens';
import Footer from '../Footer';

const image = {
  uri: 'https://img.freepik.com/free-photo/yong-readhead-bearded-hipster-with-backpack-holding-retro-camera-listening-music_171337-7893.jpg?t=st=1713423764~exp=1713427364~hmac=6500b47407173a0c5addadfd4c0c358e5dcda3e4864385c5e763a27c52f384c6&w=360',
};

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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
        <Footer></Footer>
      </ImageBackground>
    </View>
  );
};

export default Home;
