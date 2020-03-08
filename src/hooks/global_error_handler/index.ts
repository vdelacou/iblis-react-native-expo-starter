import { Updates } from 'expo';
import { t } from 'i18n-js';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { COLORS } from '../../constants/colors';

/**
 * Catch all the errors which are not catched everywhere else
 * Mostly should never happens as we need to catch all exception and display it correctly
 */
export const useGlobalErrorHandler = (): void => {
  useEffect(() => {
    // manage global Error
    const globalErrorHandler = (error: Error, isFatal?: boolean): void => {
      if (__DEV__) {
        showMessage({
          message: `${error.message}`,
          description: `${error.name} => ${JSON.stringify(error.stack)}`,
          type: 'danger',
          backgroundColor: COLORS.message.error,
        });
      } else {
        showMessage({
          message: t('hooks.useGlobalErrorHandler.error.message'),
          description: t('hooks.useGlobalErrorHandler.error.description'),
          type: 'danger',
          backgroundColor: COLORS.message.error,
        });
        // if fatal we restart
        if (isFatal && isFatal === true) {
          Updates.reload().catch(() => {
            showMessage({
              message: t('hooks.useGlobalErrorHandler.error.message'),
              description: `${JSON.stringify(error.message)} => ${JSON.stringify(error.name)}`,
              type: 'danger',
              backgroundColor: COLORS.message.error,
            });
          });
        }
      }
    };
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      ErrorUtils.setGlobalHandler(globalErrorHandler);
    }
  }, []);
};
