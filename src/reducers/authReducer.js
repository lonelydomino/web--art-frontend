import { AUTHENTICATED, NOT_AUTHENTICATED } from "../actions";

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {},
  showMessage: false,
  message: ""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      console.log("4 - reducer")
      if (action.payload["data"]){
        return {
          ...state,
          authChecked: true,
          loggedIn: true,
          currentUser: action.payload.data,
        };
      } else {
        return {
          ...state,
          authChecked: true,
          loggedIn: true,
          currentUser: action.payload,
        };

      }
      
    case NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {},
        showMessage: false

      };
    case 'CLOSE_MESSAGE':
      return {
        ...state,
        showMessage: false
      }
      case 'OPEN_LOGIN_SUCCESS_MESSAGE':
      return {
        ...state,
        message: "Logged in successfully!",
        showMessage: true
      }
      case 'OPEN_ITEM_ADD_SUCCESS_MESSAGE':
      return {
        ...state,
        message: "Added item!",
        showMessage: true
      }
    default:
      return state;
  }
}