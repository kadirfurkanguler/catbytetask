import { StyleSheet } from 'react-native';
import { colors } from '@utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: colors.black,
    paddingTop: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  content: {
    marginTop: 10,
    backgroundColor: colors.black,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    color: colors.white,
  }
});
