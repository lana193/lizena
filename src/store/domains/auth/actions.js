import {setAuthToken} from './setAuthToken';
import jwt_decode from 'jwt-decode';
import { postService } from '../../services';
import actionTypes from './actionTypes';

// export const registerUser = (userData, history) => async (dispatch) =>
// {
//    try {
//     const newUser = await postService("api/auth/register", userData);
//     dispatch({
//       type: CREATE_USER,
//       payload: newUser
//     })

//     // Redirect to login on successful register
//     history.push("/login");
//    }
//    catch(error) {
//      dispatch({ type: GET_ERRORS,
//       payload: error})
//    }
// };

export const logInAsAdmin = (userData) => dispatch => {
  console.log(555555, userData)
  postService('lizena/auth/admin', userData)
    .then(res => {
      // Set token to localStorage
      const { token } = res.data;
      console.log(8888, res.data.role)
      if (res.data.success === true && res.data.role === 'Admin') {
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(`Bearer ${token}`);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        window.location.reload();
      }
      else {
        console.log('У вас немає доступу для роботи в режимі адміністратора!')
      }
    })
  // .catch(error =>
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: error
  //   })
  // );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: actionTypes.SET_CURRENT_USER_FULFILLED,
    payload: decoded
  };
};

// // User loading
// export const setUserLoading = () => {
//   return {
//     type: USER_LOADING
//   };
// };

// Log user out
export const logOutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {}
  dispatch(setCurrentUser({}));
  window.location.reload();
};