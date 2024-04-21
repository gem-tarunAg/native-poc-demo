import { StyleSheet } from 'react-native';
export const StylesHomePage = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    zIndex: -1,
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
    alignItems: 'center',
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
});
