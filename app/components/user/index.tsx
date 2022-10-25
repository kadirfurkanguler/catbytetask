import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Text } from '@components';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import { UserProps } from './props';
export const User = (item: UserProps) => {
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate('user-detail-screen' as never, { item } as never);
  };
  const source = { uri: item.image };
  return (
    <TouchableOpacity
      onPress={goDetail}
      activeOpacity={0.7}
      style={style.container}>
      <Image style={style.image} source={source} />
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={style.title}>{`${item.firstName} ${item.lastName}`}</Text>
      <Text style={style.title}> Age: {item.age}</Text>
    </TouchableOpacity>
  );
};
