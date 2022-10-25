import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {colors} from '@utils';

const baseContainer: ViewStyle = {
  backgroundColor: colors.black,
  height: 65,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
  borderRadius: 5,
  marginVertical: 10,
};
const baseText: TextStyle = {
  color: colors.white,
  fontSize: 16,
};

export const container = StyleSheet.create({
  primary: {
    ...baseContainer,
    backgroundColor: colors.primary,
  },
  muted: {
    ...baseContainer,
    backgroundColor: colors.textGray,
  },
  cancel: {
    ...baseContainer,
    backgroundColor: colors.danger,
  },
});
export const text = StyleSheet.create({
  primary: {
    ...baseText,
  },
  muted: {
    ...baseText,
  },
  cancel: {
    ...baseText,
  },
});

export type Preset = keyof typeof container;
