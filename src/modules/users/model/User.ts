import { v4 as uuidV4 } from "uuid";

class User {
  public admin = false;
  public name: string;
  public email: string;
  public created_at: Date;
  public updated_at: Date;
  public id: string;

  constructor() {
    this.id = uuidV4();
  }
}
export { User };
