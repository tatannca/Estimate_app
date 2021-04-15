export const INITIAL_INPUT = "INITIAL_INPUT";
export const INPUT_LAST_NAME = "INPUT_LASTNAME";
export const INPUT_FIRST_NAME = "INPUT_FIRSTNAME";
export const INPUT_CAMPANY_NAME = "INPUT_CAMPANY_NAME";
export const INPUT_JOB_TYPE = "INPUT_JOB_TYPE";
export const INPUT_EMAIL = "INPUT_EMAIL";

type settingState = {
    last_name: string;
    first_name: string;
    company_name: string;
    job_type: number;
    email: string;
}

export const initialState: settingState = {
    last_name: '',
    first_name: '',
    company_name: '',
    job_type: 1,
    email: '',
}

export const reducer = (state: settingState, action: any) => {
    switch (action.type) {
        case INITIAL_INPUT:
            return { ...state, ...action.payload }
        case INPUT_LAST_NAME:
            return {
                ...state,
                last_name: action.payload
            }
        case INPUT_FIRST_NAME:
            return {
                ...state,
                first_name: action.payload
            }
        case INPUT_CAMPANY_NAME:
            return {
                ...state,
                company_name: action.payload
            }
        case INPUT_JOB_TYPE:
            return {
                ...state,
                job_type: action.payload
            }
        case INPUT_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state
    }
}
