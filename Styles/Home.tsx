import { StyleSheet } from 'react-native';
export const StylesHomePage = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackBackground: {
    flex: 0.2, // Cover bottom 20%
    backgroundColor: 'black',
  },
  imageBackground: {
    flex: 0.8,
    resizeMode:'cover',
  },
  container2: {
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    padding: 5,
  },
  text2: {
    color: 'white',
    fontStyle: 'normal',
    fontWeight: '800',
  },
  boldText: { fontSize: 25, fontWeight: 'bold', marginTop: 10, color: 'white' },
  container3: {
    position: 'absolute',
    top: '50%',
    width:'100%',
    alignItems: 'center',
    marginBottom: 50,
    zIndex: 7,
  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2B2A29',
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    marginTop: 20,
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
  },
  shadowLayer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 6,
  },
  shadowGradient: {
    flex: 1,
    justifyContent: 'flex-end', // Align gradient to bottom
  },
});
