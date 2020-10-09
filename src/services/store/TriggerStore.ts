import IStore from "./IStore";
import Trigger from "../../models/Trigger";

export default class TriggerStore implements IStore<Trigger>{
  get(id: string): Trigger {
    return undefined;
  }

  getAll(): Trigger[] {
    return [];
  }

  remove(model: Trigger): void {
  }

  save(model: Trigger): Trigger {
    return undefined;
  }

}
