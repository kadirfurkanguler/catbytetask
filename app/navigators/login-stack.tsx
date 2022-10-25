import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserListScreen, AddUserScreen, UserDetailScreen } from '@screens';
const Stack = createNativeStackNavigator();

export const LoginStack = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="user-list-screen" component={UserListScreen} />
        <Stack.Screen name="add-user-screen" component={AddUserScreen} />
        <Stack.Screen
          name="user-detail-screen"
          component={UserDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
