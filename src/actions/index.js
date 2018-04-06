/*
 * action types
 */

export const USER_LOGGED = 'USER_LOGGED';
export const USER_LOGOUT = 'USER_LOGOUT';


export function setUserDetails(res) {
    return {
        type: USER_LOGGED,
        payload:res
    }
  }

export function logout() {
    return {
        type: USER_LOGOUT,
        payload:''
    }
    }