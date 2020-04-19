import axios from 'axios';
import { loginSuccessfully, loginFailed } from '../store/actions/auth.action';
import { HOST, LOGIN_URI, USER_EMAIL, USER_TOKEN } from '../constants';
import { setTokenToLocalStorage } from '../utils';

/* After user login BE automatically call api to update all data in all accounts - Costly */

// eslint-disable-next-line import/prefer-default-export
export const login = userData => dispatch => {
  console.log('userData sent to login: ', userData);
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
      console.log('res: ', res);
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_TOKEN, res.data.token).then(() => {
        setTokenToLocalStorage(USER_EMAIL, res.data.email);
        dispatch(loginSuccessfully(res.data));
      });
    })
    .catch(err => {
      console.log('err: ', err.response.data);
      dispatch(loginFailed(err));
    });
};
