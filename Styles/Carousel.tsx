import { StyleSheet } from 'react-native';
export const StylesCarousel = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    marginVertical: 5
  },
  backgroundImage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold', 
    marginBottom: 20,
  },
});