import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
// import OnBoarding from '../screens/Onboarding';
export type AuthStackParamList = {
  Onboarding: undefined;
};
const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={() => (
          <View>
            <Text>onboarding</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
