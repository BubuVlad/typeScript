import { UserInterface } from "./interfaces";

export class User implements UserInterface {
  public name: string;
  public email: string;
  public password: string;
  public type: string;
  constructor(props:UserInterface) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.type = props.type;
  }
  changePassword(newPassword:string) {
    if(newPassword.match("/^[A-Za-z]\w{7,14}$/")) {
      this.password = newPassword;
    }
  }
}
