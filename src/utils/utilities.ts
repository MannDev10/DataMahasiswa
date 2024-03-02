import {Dimensions} from 'react-native';

export const Constant = {
  WINDOW_WIDTH: Dimensions.get('window').width,
  WINDOW_HEIGTH: Dimensions.get('window').height,
  SCREEN_WIDTH: Dimensions.get('screen').width,
  SCREEN_HEIGTH: Dimensions.get('screen').height,
};

export const Colors = {
  PRIMARY: '#1e3557',
  SECONDARY: '#e63a46',
  SUCCESS: '#86fa47',
  ERROR: '#cd2a08',
  WARNING: '#ffc008',
  INFO: '#14a2b8',
};
