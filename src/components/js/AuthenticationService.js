class AuthenticationService {
  registerLogin(userName, password) {
    sessionStorage.setItem("AuthenticatedUser", userName);
  }

  logout() {
    sessionStorage.removeItem("AuthenticatedUser");
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user == null) {
      return false;
    }
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem("AuthenticatedUser");
    if (user == null) {
      return "";
    }
    return user;
  }
}

export default new AuthenticationService();
