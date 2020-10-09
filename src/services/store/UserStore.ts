import IStore from "./IStore";
import User from "../../models/User";

export default class UserStore implements IStore<User> {
  get(id: string): User {
    return undefined;
  }

  getAll(): User[] {
    return [];
  }

  remove(model: User): void {
  }

  save(model: User): User {
    return undefined;
  }

}
