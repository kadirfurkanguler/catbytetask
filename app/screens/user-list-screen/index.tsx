import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import { getUsers } from '@services';
import { useDispatch, useSelector } from 'react-redux';
import { Button, User } from '@components';
import { useNavigation } from '@react-navigation/native';
import { colors } from '@utils';
import { UserProps } from 'app/components/user/props';
export const UserListScreen = () => {
  const dispatch = useDispatch<any>();
  const navigation = useNavigation();
  //!TODO: Add state type
  const { users, isLoading } = useSelector((state: any) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);


  const addUser = () => {
    navigation.navigate('add-user-screen' as never);
  };

  const renderUser = ({ item }: { item: UserProps }) => {
    return <User {...item} />;
  };
  return isLoading?.user ? (
    <View style={style.loading_container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  ) : (
    <View style={style.container}>
      <View style={style.content}>
        <FlatList
          numColumns={2}
          data={users}
          renderItem={renderUser}
          keyExtractor={(item, index) => `index${index}`}
        />
      </View>
      <Button color="white" text="add" onPress={addUser} />
    </View>
  );
};
