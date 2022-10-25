import React, {useState} from 'react';
import {
  TextInput as RNTextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {t} from '@languages';
import {colors} from '@utils';
import style from './style';
import {TextInputProps} from './props';
export const TextInput = (props: TextInputProps) => {
  const {icon, isPassword, placeholder, ...rest} = props;
  const [visible, setVisible] = useState(false);
  const [isFocused, setİsFocused] = useState(false);

  const chanceVisible = () => {
    setVisible(!visible);
  };

  return (
    <View
      style={[
        style.container,
        {borderColor: isFocused ? colors.primary : colors.gray},
      ]}>
      {icon && (
        <View style={style.leftIcon}>
          <Icon
            color={!isFocused ? colors.gray : colors.secondary}
            name={icon}
            size={25}
          />
        </View>
      )}
      <RNTextInput
        style={style.input}
        secureTextEntry={isPassword && !visible}
        onFocus={() => setİsFocused(true)}
        onBlur={() => setİsFocused(false)}
        placeholder={placeholder ? t(`${placeholder}`) : undefined}
        placeholderTextColor={colors.black}
        {...rest}
      />
      {isPassword && (
        <TouchableWithoutFeedback onPress={chanceVisible}>
          <View style={style.rightIcon}>
            <Icon
              size={25}
              color={!isFocused ? colors.gray : colors.primary}
              name={!visible ? 'eye' : 'eye-with-line'}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};
