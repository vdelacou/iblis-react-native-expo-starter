import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { FC } from 'react';

/**
 * The icon to display in bottom tab bar
 */
export const TabBarIcon: FC<TabBarIconProps> = props => {
  const iconName = props.focused ? `${props.name}` : `${props.name}-outline`;
  return <MaterialCommunityIcons name={iconName} size={28} color={props.tintColor} />;
};

export interface TabBarIconProps {
  /**
   * The icon name
   */
  name: string;
  /**
   * The icon is focused
   */
  focused: boolean;
  /**
   * The icon tint color
   */
  tintColor: string;
}
