import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './props';
import {t} from '@languages';

export const Text = (props: TextProps) => {
  const {type = 'regular', style, translate, children, ...rest} = props;

  return (
    <RNText
      style={[
        {
          fontFamily: types[type],
        },
        style,
      ]}
      {...rest}>
      {translate ? t(`${translate}`) : children}
    </RNText>
  );
};
const types = {
  light: 'OpenSans-Light',
  regular: 'OpenSans-Regular',
  semiBold: 'OpenSans-SemiBold',
  bold: 'OpenSans-Bold',
  extraBold: 'OpenSans-ExtraBold',
};
export type TextType = keyof typeof types;
