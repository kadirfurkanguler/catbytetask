import {Alert} from 'react-native';
import {t, I18nType} from '@languages';
export const useAlertDialog = () => {
  const showInfoDialog = (message: I18nType) => {
    Alert.alert(t('info'), t(message));
  };

  const showErrorDialog = (message: I18nType) => {
    Alert.alert(t('error'), t(message));
  };

  const showWarningDialog = (message: I18nType) => {
    Alert.alert(t('warning'), t(message));
  };

  const showDialogWithButton = (
    title: I18nType,
    message: I18nType,
    buttonArray: Array<AlertButton>,
  ) => {
    Alert.alert(t(title), t(message), buttonArray);
  };

  const showCustomDialog = (
    title: string,
    message: string,
    buttonArray?: Array<AlertButton>,
  ) => {
    Alert.alert(title, message, buttonArray);
  };

  return {
    showInfoDialog,
    showErrorDialog,
    showWarningDialog,
    showDialogWithButton,
    showCustomDialog,
  };
};
interface AlertButton {
  text: I18nType;
  onPress: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}
