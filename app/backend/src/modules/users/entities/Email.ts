import AppError from '../../../error/AppError';

export default class Email {
  private _value: string;

  constructor(email: string) {
    this._value = email;
    this.validateEmail();
  }

  private validateEmail() {
    const email = this._value;
    const emailRegex = /\S+@\S+\.\S/;
    const isEmailValid = emailRegex.test(email);

    if (email === '') {
      throw new AppError('All fields must be filled');
    }

    if (!isEmailValid) {
      throw new AppError(' "Incorrect email or password"');
    }
  }

  get value(): string {
    return this._value;
  }
}
