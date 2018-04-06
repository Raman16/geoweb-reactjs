import {
    USER_LOGGED,
    USER_LOGOUT
  } from './../actions'
   
 const UserReducer=(state = {}, action) => {
  

    switch (action.type) {
      case USER_LOGGED:
        return  action.payload.data;
     
      case USER_LOGOUT:
        return  '';
      default:
        return '';
    }
  }
  export default UserReducer;