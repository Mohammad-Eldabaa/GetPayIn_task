export interface userState {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
}

export interface AuthState {
  token: string | null;
  user: userState | null;
  loading: boolean;
}

export const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
};
