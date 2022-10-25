import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import style from './style';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { deleteUser } from '@actions';
export const UserDetailScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute<any>();
  const { item } = route.params;
  const source = { uri: item.image };
  const del = () => {
    dispatch(deleteUser(item));
    navigation.goBack();
  };
  return (
    <View style={style.container}>
      <Image style={style.image} source={source} />
      <View style={style.content}>
        <TouchableOpacity onPress={del}>
          <Text style={style.title}>Delete X</Text>
        </TouchableOpacity>
        <View style={style.row}>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={style.title}>{`${item.firstName} ${item.lastName}`}</Text>
          <Text style={style.price}>Age: {item.age}</Text>
        </View>
        <ScrollView>
          <Text style={style.description}>Company Details:</Text>
          <Text style={style.description}>
            Address: {item.company.address.address}
          </Text>
          <Text style={style.description}>
            {item.company.address.postalCode}-{item.company.address.state}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};
