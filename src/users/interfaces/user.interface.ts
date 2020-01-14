export enum Roles {
  USER_ROLE,
  ADMIN_ROLE,
}

export interface User {
  readonly userId: string;
  readonly username: string;
  readonly password: string;
  readonly email: string;
  readonly roles: Roles[];
}
