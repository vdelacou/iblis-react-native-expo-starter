import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC, ReactNode } from 'react';
import { TabBarIcon } from '../../../components/tab_bar_icon';
import { COLORS } from '../../../constants/colors';
import { AccountTabStack } from '../account_tab_stack';
import { HomeTabStack } from '../home_tab_stack';

/**
 * The main stack for our app
 * We choose here to do a bottom navigator, also possible to do a drawer
 */
export const MainStack: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: COLORS.primary.main, inactiveTintColor: COLORS.text.secondary, showLabel: false }}>
      <Tab.Screen
        name="Home"
        component={HomeTabStack}
        options={{
          tabBarIcon: (props: { focused: boolean; color: string; size: number }): ReactNode => <TabBarIcon name="home" focused={props.focused} tintColor={props.color} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountTabStack}
        options={{
          tabBarIcon: (props: { focused: boolean; color: string; size: number }): ReactNode => <TabBarIcon name="account" focused={props.focused} tintColor={props.color} />,
        }}
      />
    </Tab.Navigator>
  );
};
