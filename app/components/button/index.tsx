import {colors} from '@utils';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {Text} from '@components';
import {ButtonProps} from './props';
import {container, text as textStyle} from './style';
export const Button = (props: ButtonProps) => {
  const {text, leftIcon, rightIcon, preset = 'primary', color, ...rest} = props;
  return (
    <TouchableOpacity {...rest} style={container[preset]}>
      {leftIcon && <Icon name={leftIcon} size={30} color={colors[color]} />}
      <Text
        type="bold"
        style={[textStyle[preset], {color: colors[color]}]}
        translate={text}
      />
      {rightIcon && <Icon name={rightIcon} size={30} color={colors[color]} />}
    </TouchableOpacity>
  );
};
