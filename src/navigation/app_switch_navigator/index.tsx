import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { MainStack } from '../main/main_stack';
import { useCreateLinking } from './hooks';

/**
 * The main switch navigator app
 * Here we can switch according to authentication
 */
export const AppSwitchNavigator: FC = () => {
  const Stack = createStackNavigator();
  const containerRef = React.useRef();
  const [initialNavigationState] = useCreateLinking(containerRef);

  return (
    <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
