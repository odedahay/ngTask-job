import { createReducer, on } from "@ngrx/store";
import { AuthState } from "./auth.model";
import { AuthActions } from "./auth.actions";

export const initialState: AuthState = {
    uid: null,
    email: null,
    isloading: false,
    error: null
};

export const authReducer = createReducer(
    initialState,

    on(AuthActions.login, AuthActions.register, (state) => ({
        ...state,
        isloading: true,
        error: null
    })),

    on(AuthActions.loginSuccess, AuthActions.registerSuccess, (state, { uid, email }) => ({
        ...state,
        isloading: true,
        uid,
        email,
        error: null
    })),

    on(AuthActions.loginFailure, AuthActions.registerFailure, (state, { error }) => ({
        ...state,
        isloading: true,
        error
    })),

    on(AuthActions.logoutSuccess, () => initialState),
    on(AuthActions.logoutFailure, (state, { error }) => ({
        ...state,
        error
    }))

);

