import faker from "faker";

export class UserEntry {
  public email: string | null;
  public password: string | null;

  constructor({
    email = faker.internet.email(),
    password = faker.internet.password(8),
  }) {
    this.email = email;
    this.password = password;
  }
}

export class RegisterUser extends UserEntry {
  public confirmPassword: string | null;

  constructor({
    email = undefined,
    password = undefined,
    confirmPassword = undefined,
  }: {
    email?: any;
    password?: any;
    confirmPassword?: any;
  }) {
    super({ email, password });
    if (confirmPassword) this.confirmPassword = confirmPassword;
    else this.confirmPassword = this.password;
  }
}
