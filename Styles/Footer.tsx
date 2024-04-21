import { StyleSheet } from 'react-native';
export const StylesHomePage = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 10,
    color: 'white',
    paddingVertical: 10,
    borderRadius: 5,
  },
  icon: {
    fontSize: 25,
    color: 'white',
  },
});
