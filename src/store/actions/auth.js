import AsyncStorage from '@react-native-community/async-storage';
import { AUTH_SET_TOKEN } from './actionTypes';

export const authStoreToken = ({ accessToken, expires_in, resfreshToken }) => dispatch => {
  const now = new Date();
  const expiryDate = now.getTime() + expires_in * 1000;
  dispatch(authSetToken(accessToken, expiryDate));

  AsyncStorage.setItem('app:auth:token', accessToken);
  AsyncStorage.setItem('app:auth:expiryDate', `${expiryDate}`);
  AsyncStorage.setItem('app:auth:refreshToken', resfreshToken);
};

export const authSetToken = (token, expiryDate) => ({
  type: AUTH_SET_TOKEN,
  token,
  expiryDate
});
