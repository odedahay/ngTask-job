export interface AuthState {
    uid: string | null;
    email: string | null;
    isloading: boolean;
    error: string | null;
}