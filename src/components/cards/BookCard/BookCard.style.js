import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.brown,
    width: 100,
    height: 180,
    margin: 5,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 7,
    elevation: 7,
  },
  image: {
    width: 80,
    height: 120,
  },
  title: {
    margin: 5,
    flex: 1,
    color: colors.lightpink,
    width: '100%',
    textAlign: 'center',
  },
});
