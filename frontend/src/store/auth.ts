import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";
import { loginAPI, logoutAPI, registerAPI } from "../api/auth";
import { changeProfileAPI, getCurrentUserAPI } from "../api/user";

type User = {
    status: boolean;
    message: string;
    access_token: string;
    refresh_token: string;
    user: {
        company_name: string;
        email: string;
        last_login_at: string;
        first_name: string;
        job_type: number;
        last_name: string;
        id: string;
    }
}

const initialState: User = {
    status: false,
    message: "",
    access_token: "",
    refresh_token: "",
    user: {
        company_name: "",
        email: "",
        last_login_at: "",
        first_name: "",
        job_type: 1,
        last_name: "",
        id: ""
    }
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setInitialAuthData: (state, action) => {
            return { ...state, ...action.payload }
        },
        setUser: (state, action) => {
            return {
                ...state, 
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        },
        resetUser: (state) => {
            return { ...state, ...initialState }
        }
    }
})

export default slice.reducer

export const isAuthSelector = (state: RootState) => state.auth.user !== initialState.user;
export const userSelector = (state: RootState) => state.auth.user;
export const { setUser } = slice.actions;

export const userRegistration = (data: any): AppThunk => {
    return async function(dispatch) {
        console.log('dispatch api')
        await registerAPI(data);
        dispatch(setUser(data));
    }
}

export const login = (email: string, password: string): AppThunk => {
    return async function(dispatch) {
        const user = await loginAPI(email, password);
        dispatch(slice.actions.setInitialAuthData(user))
    }
}

export const setCurrentUser = (): AppThunk => {
    return async function(dispatch) {
        try {
            const userData = await getCurrentUserAPI();
            dispatch(slice.actions.setInitialAuthData(userData))
        } catch(err) {
            // No particular error handling.
        }
    }
}

export const changeProfile = (data: any): AppThunk => {
    return async function(dispatch) {
        await changeProfileAPI(data)
        dispatch(setUser(data))
    }
}

export const logout = (): AppThunk => {
    return async function(dispatch) {
        await logoutAPI();
        dispatch(slice.actions.resetUser())
    }
}
