import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
export type AppStackParamList = {
  Home: undefined;
  TaskDetail: undefined;
  Profile: undefined;
};
const Stack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={() => (
          <View>
            <Text>texthello</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
