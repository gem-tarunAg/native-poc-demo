import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Home';
import Footer  from '../Footer/index'

const image = { uri: 'https://img.freepik.com/free-photo/yong-readhead-bearded-hipster-with-backpack-holding-retro-camera-listening-music_171337-7893.jpg?t=st=1713423764~exp=1713427364~hmac=6500b47407173a0c5addadfd4c0c358e5dcda3e4864385c5e763a27c52f384c6&w=360' };
function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      >
      <Footer></Footer>
      </ImageBackground>
    </View>
  );
}

export default Home;
