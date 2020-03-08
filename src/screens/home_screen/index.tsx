import { useNavigation } from '@react-navigation/native';
import { t } from 'i18n-js';
import React, { FC } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { OfflineWrapperView } from '../../wrapper/offline_wrapper_view';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeScreen: FC = () => {
  const navigation = useNavigation();

  const onPress = (): void => {
    navigation.navigate('Details');
  };

  return (
    <OfflineWrapperView>
      <View style={styles.root}>
        <Button onPress={onPress} title={t('screens.HomeScreen.title')} />
      </View>
    </OfflineWrapperView>
  );
};
