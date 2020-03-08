import { createStackNavigator } from '@react-navigation/stack';
import { t } from 'i18n-js';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { TYPOGRAPHY } from '../../../constants/typography';
import { DetailsScreen } from '../../../screens/details_screen';
import { HomeScreen } from '../../../screens/home_screen';

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

/**
 * The Navigator stack starting from the home tab
 */
export const HomeTabStack: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: COLORS.text.primary,
          headerTitleStyle: TYPOGRAPHY.pageModalTitle,
          title: t('navigation.main.HomeTabStack.Home.title'),
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: COLORS.text.primary,
          headerTitleStyle: TYPOGRAPHY.pageModalTitle,
          title: t('navigation.main.HomeTabStack.Details.title'),
        }}
      />
    </Stack.Navigator>
  );
};
