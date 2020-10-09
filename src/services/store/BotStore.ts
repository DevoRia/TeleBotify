import IStore from "./IStore";
import Bot from "../../models/Bot";

export default class BotStore implements IStore<Bot> {
  get(id: string): Bot {
    return undefined;
  }

  getAll(): Bot[] {
    return [];
  }

  remove(model: Bot): void {
  }

  save(model: Bot): Bot {
    return undefined;
  }

}
