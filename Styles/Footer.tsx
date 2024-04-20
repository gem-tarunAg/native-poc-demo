import { StyleSheet } from 'react-native';
export const StylesHomePage = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   footer: {
//     flex:1,
//     backgroundColor: 'transparent',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop:765
//   },
//   footerText: {
//     color: '#333',
//   },
footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'transparent',
    // marginTop: 260
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});
