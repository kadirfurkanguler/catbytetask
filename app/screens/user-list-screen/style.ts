import {StyleSheet} from 'react-native';
import {colors} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  loading_container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    fontStyle: 'italic',
  },
  content: {flex: 1},
  add_container: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderRadius: 25,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    fontSize: 30,
    color: colors.black,
  },
});
