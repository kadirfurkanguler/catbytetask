import * as React from 'react';
import {View} from 'react-native';
import {Button, TextInput} from '@components';
export const Demo = () => {
  return (
    <View>
      <View>
        <Button
          color="white"
          leftIcon="close"
          text="app_name"
          preset="primary"
        />
        <TextInput isPassword />
      </View>
    </View>
  );
};
