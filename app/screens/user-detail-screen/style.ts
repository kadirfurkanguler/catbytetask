import {StyleSheet} from 'react-native';
import {colors} from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
    paddingTop: 5,
  },
  image: {
    width: '90%',
    height: 200,
    flex: 0.8,
    borderRadius: 10,
    alignSelf: 'center',
  },
  content: {
    padding: 10,
    flex: 1,
    backgroundColor: colors.black,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  description: {
    fontSize: 15,
    color: colors.white,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
});
