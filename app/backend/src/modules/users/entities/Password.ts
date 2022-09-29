import AppError from '../../../error/AppError';

export default class Password {
  private _value: string;

  constructor(password: string) {
    this._value = password;
    this.validatePassword();
  }

  private validatePassword() {
    const password = this._value;

    if (password === '') {
      throw new AppError('All fields must be filled');
    }

    if (password.length < 6) {
      throw new AppError('Password must not be at least 6 characters', 400);
    }
  }

  get value(): string {
    return this._value;
  }
}
