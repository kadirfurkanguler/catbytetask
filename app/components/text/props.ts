import {TextProps as RNTextProps} from 'react-native';
import {TextType} from './';
import {I18nType} from '@languages';
export interface TextProps extends RNTextProps {
  translate?: I18nType;
  type?: TextType;
}
