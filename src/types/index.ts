export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Auth {
  user: User | null;
}

export interface SharedData {
  auth: Auth;
}