import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightpink,
  },
  image_container: {},
  banner_image: {
    width: deviceSize.width / 1,
    height: deviceSize.height / 6,
  },
  profile_image: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 60,
    position: 'absolute',
    marginTop: 70,
    marginLeft: 15,
  },
  info_container: {
    height: deviceSize.height / 6.5,
  },
  user_container: {
    flexDirection: 'row',
    paddingLeft: 30,
    paddingTop: 75,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.brown,
  },
  userage: {
    color: colors.brown,
    fontWeight: 'bold',
    fontSize: 20,
  },
  menu_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    marginHorizontal: 5,
  },
  menu_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brown,
    padding: 2,
  },
  menu_title_selected: {
    borderBottomWidth: 4,
    borderColor: colors.brown,
  },
});
