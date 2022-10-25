import {TextInputProps as RNTextInputProps} from 'react-native';
import {I18nType} from '@languages';
export interface TextInputProps extends RNTextInputProps {
  icon?: string;
  placeholder?: I18nType;
  isPassword?: boolean;
}
