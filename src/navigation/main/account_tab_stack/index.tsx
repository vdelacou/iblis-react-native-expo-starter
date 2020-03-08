import { createStackNavigator } from '@react-navigation/stack';
import { t } from 'i18n-js';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';
import { TYPOGRAPHY } from '../../../constants/typography';
import { AccountScreen } from '../../../screens/account_screen';

const styles = StyleSheet.create({
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
});

/**
 * The Navigator stack starting from the account tab
 */
export const AccountTabStack: FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerStyle: styles.headerStyle,
          headerTintColor: COLORS.text.primary,
          headerTitleStyle: TYPOGRAPHY.pageModalTitle,
          title: t('navigation.main.AccountTabStack.Account.title'),
        }}
      />
    </Stack.Navigator>
  );
};
