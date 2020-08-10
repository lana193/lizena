import actionTypes from './actionTypes';
 
import isEmpty from 'is-empty';
  
  const initialStateAuth = {
    isAuthenticated: false,
    user: {}
  };

  export const authReducer =  (state = initialStateAuth, action={}) => {
    switch (action.type) {
      case actionTypes.SET_CURRENT_USER_FULFILLED:
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      default:
        return state;
    }
  }

//   export const projectsReducer = (state=initialStateProjects, action={}) => {
//     switch(action.type) {
//         case actionTypes.GET_PROJECTS_FULFILLED:
//             return  {...state, projects: action.payload.data };
//         case actionTypes.GET_PROJECT_FULFILLED: {
//             return {...state, openedProject: action.payload.data};
//         }
//         default: 
//             return state;
//     }
// }
