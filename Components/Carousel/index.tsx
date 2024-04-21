import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StylesCarousel as styles } from '../../Styles/Carousel';
import { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../helpers/Screens';


const { width: screenWidth } = Dimensions.get('window');
interface CarouselItem {
  title: string;
  image: any;
  description: string;
}
type CarouselProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const MyCarousel: React.FC<CarouselProps> = ({navigation}) => {
  const data1: CarouselItem[] = [
    { title: 'Slide1', image: require('../../assets/slide1.jpg'), description: 'Shop Hands Free' },
    { title: 'Slide2', image: require('../../assets/slide2.jpg'), description: 'Shop Hands Free' },
    { title: 'Slide3', image: require('../../assets/slide3.jpg'), description: 'Shop Hands Free' },
  ];

  const data2: CarouselItem[] = [
    { title: 'Slide4', image: require('../../assets/slide4.jpg'), description: 'Shop Hands Free' },
    { title: 'Slide5', image: require('../../assets/slide5.jpg'), description: 'Shop Hands Free' },
    { title: 'Slide6', image: require('../../assets/slide6.jpg'), description: 'Shop Hands Free' },
  ];

  const renderItem = ({ item } : { item: CarouselItem }) => {
    const handleImagePress = (title: any) => {
      console.log('Image pressed:',title);
      navigation.navigate(title);
    };
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.container} onPress={() => handleImagePress(item.title)} >
          <Image source={item.image} style={styles.backgroundImage} />
          <View style={styles.slideContent}>
            <Text style={styles.title}>{item.description}</Text>
          </View>
      </TouchableOpacity> 
    );
    };

  return (
    <View style={styles.container}>
      <Carousel
        data={data1}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 35}
        layout={'default'}
        loop
        autoplay
        autoplayInterval={5000}
      />
      <Carousel
        data={data2}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 35}
        layout={'default'}
        loop
        autoplay
        autoplayInterval={5000}
      />
    </View>
  );
};

export default MyCarousel;