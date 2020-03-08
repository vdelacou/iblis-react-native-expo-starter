import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const LAYOUT = {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export const spacing = (value: number) => {
  return value * 8;
};

export const CARD_IMAGE_HEIGHT = 150;

export const radius = 8;
