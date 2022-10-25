import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Button, TextInput } from '@components';
import { addUser } from '@actions';
import style from './style';
export const AddUserScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');

  function uid () {
    return Math.random().toString(36).replace(/\./g, '');
  }
  const id = uid();
  const add = () => {
    dispatch(
      addUser({
        id,
        image,
        firstName,
        lastName,
        age,
        company: {
          address: {
            address,
            postalCode,
            state,
          },
        },
      }),
    );
    navigation.goBack();
  };

  return (
    <View style={style.container}>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="first_name"

      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="last_name"

      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="address"

      />
      <TextInput
        value={age}
        onChangeText={setAge}
        placeholder="age"

      />
      <TextInput
        value={postalCode}
        onChangeText={setPostalCode}
        placeholder="postal_code"

      />
      <TextInput
        value={state}
        onChangeText={setState}
        placeholder="state"

      />
      <TextInput
        value={image}
        onChangeText={setImage}
        placeholder="image"

      />

      <View style={style.button}>
        <Button onPress={add} text="add" color="white" />
      </View>
    </View>
  );
};
