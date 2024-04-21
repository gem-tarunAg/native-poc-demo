import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StylesHomePage as styles } from '../../Styles/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  console.log('Footer is rendering');

  const navigation: any = useNavigation();

  const handleIconClick = (iconName: any) => {
    console.log(`Clicked on ${iconName}`);
    navigation.navigate(iconName);
  };
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIconClick('Home')}
      >
        <Icon name="home" style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIconClick('Search')}
      >
        <Icon name="search" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIconClick('Notification')}
      >
        <Icon name="bell" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIconClick('Profile')}
      >
        <Icon name="user" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleIconClick('Settings')}
      >
        <Icon name="cog" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
