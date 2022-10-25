import {StyleSheet} from 'react-native';
import {colors} from '@utils';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },

  input: {
    minHeight: 50,
    flex: 1,
    paddingLeft: 10,
    backgroundColor: colors.white,
    color: colors.black,
    maxHeight: 100,
    borderRadius: 10,
  },
  leftIcon: {
    marginLeft: 5,
  },
  rightIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 5,
  },
  activity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
