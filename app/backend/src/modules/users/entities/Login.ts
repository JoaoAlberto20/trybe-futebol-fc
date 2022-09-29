import Email from './Email';
import Password from './Password';

export default class Login {
  private _email: Email;
  private _password: Password;

  constructor(email: string, password: string) {
    this._email = new Email(email);
    this._password = new Password(password);
  }

  get email(): string { return this._email.value; }
  get password(): string { return this._password.value; }
}
