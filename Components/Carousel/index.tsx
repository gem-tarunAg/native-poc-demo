import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { StylesCarousel as styles } from '../../Styles/Carousel';

const { width: screenWidth } = Dimensions.get('window');
interface CarouselItem {
  title: string;
  image: any;
}

function MyCarousel() {
  const data: CarouselItem[] = [
    { title: 'Slide 1', image: require('../../assets/slide1.jpg') },
    { title: 'Slide 2', image: require('../../assets/slide2.jpg') },
    { title: 'Slide 3', image: require('../../assets/slide3.jpg') },
  ];

  const renderItem = ({ item } : { item: CarouselItem }) => {
    return (
      <TouchableOpacity activeOpacity={0.5} style={styles.container}>
          <Image source={item.image} style={styles.backgroundImage} />
          <View style={styles.slideContent}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
      </TouchableOpacity> 
    );
    };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
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