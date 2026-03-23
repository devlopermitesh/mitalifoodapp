import { NavigationContainer } from '@react-navigation/native';
import AuthStack, { AuthStackParamList } from './Authstack';
import AppStack, { AppStackParamList } from './Appstack';
import { navigationRef } from './Navigationutils';

export type StackScreen = AuthStackParamList & AppStackParamList;

const Routes = (): React.JSX.Element => {
  return (
    <NavigationContainer ref={navigationRef}>
      { }
      {true ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default Routes;
