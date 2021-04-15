import { createSlice } from "@reduxjs/toolkit"
import { RootState } from ".";

type User = {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
    companyName: string;
    jobtype: number;
}

const initialState: User = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    companyName: "",
    jobtype: 1
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserRegister: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export default slice.reducer

export const userSelector = (state: RootState) => state.user

export const { setUserRegister } = slice.actions
