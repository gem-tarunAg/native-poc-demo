import { StyleSheet } from 'react-native';
export const StylesHeader = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 70,
    paddingTop: 40,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  button: {
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
