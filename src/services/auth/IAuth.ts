/**
 * The main authorization interface
 */
export default interface IAuth {
  /**
    * Base auth manipulations.
   */
  login(login: string, password: string);
  logout();

  getCurrentUser();
}
