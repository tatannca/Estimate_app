import React, { VFC, memo, useEffect, useReducer, useCallback, useState } from "react"
import { Sidemenu } from "../components/layout/Sidemenu"
import { ApplySectionBoxSmall } from "../components/layout/ApplySectionBoxSmall"
import styles from "./Settings.module.css"
import logo from "../image/logo.svg"
import { useDispatch, useSelector } from "react-redux"
import { changeProfile, userSelector } from "../store/auth"
import { 
    initialState,
    INITIAL_INPUT,
    INPUT_CAMPANY_NAME,
    INPUT_EMAIL,
    INPUT_FIRST_NAME,
    INPUT_JOB_TYPE,
    INPUT_LAST_NAME,
    reducer
} from "../reducer/settingReducer"

export const Settings: VFC = memo(() => {
    const dispatch = useDispatch();
    const [localSettingsState, localDispatch] = useReducer(reducer, initialState);
    const [disabled, setDisabled] = useState(true);
    const [localPassword, setLocalPassword] = useState('');
    const {
        last_name,
        first_name,
        company_name,
        job_type,
        email
    } = useSelector(userSelector);

    useEffect(() => {
        localDispatch({
            type: INITIAL_INPUT,
            payload: {
                last_name,
                first_name,
                company_name,
                job_type,
                email
            }
        })
    }, [last_name, first_name, company_name, job_type, email])

    useEffect(() => {
        const input = [last_name, first_name, company_name, job_type, email, localPassword];
        input.includes('') ? setDisabled(true) : setDisabled(false);
    }, [last_name, first_name, company_name, job_type, email, localPassword])
    
    const onSetting = useCallback(async(e: React.MouseEvent) => {
        e.preventDefault();
        if(disabled) return
        try {
            await dispatch(changeProfile({...localSettingsState, password: localPassword}));
            console.log({...localSettingsState, password: localPassword});
            alert('アカウント情報を変更しました')
        } catch(err) {
            console.log(err)
            alert('アカウント情報の変更に失敗しました')
        }
    }, [dispatch, localSettingsState, localPassword, disabled])
    
    return (
        <Sidemenu>
            <div className={styles.logo}><img src={logo} alt=""/></div>
            <div className={styles.mb100}>
            <ApplySectionBoxSmall>
                <h1 className={styles.settingTitle}>アカウント情報</h1>
                <form className={styles.settingForm}>
                <div className={styles.settingFormInner}>
                    <div className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_last_name"
                            className={styles.settingFormLabel}>氏</label>
                        <input
                            className={styles.settingFromInput}
                            id="setting_last_name"
                            value={localSettingsState.last_name}
                            onChange={e => localDispatch({type: INPUT_LAST_NAME, payload: e.target.value})} />
                    </div>
                    <div  className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_first_name"
                            className={styles.settingFormLabel}>名</label>
                        <input
                            className={styles.settingFromInput}
                            id="setting_first_name"
                            value={localSettingsState.first_name}
                            onChange={e => localDispatch({type: INPUT_FIRST_NAME, payload: e.target.value})}/>
                    </div>
                    <div  className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_company_name"
                            className={styles.settingFormLabel}>会社名</label>
                        <input
                            className={styles.settingFromInput}
                            id="setting_company_name"
                            value={localSettingsState.company_name}
                            onChange={e => localDispatch({type: INPUT_CAMPANY_NAME, payload: e.target.value})}/>
                    </div>
                    <div  className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_job_type"
                            className={styles.settingFormLabel}>職業</label>
                        <select
                            className={styles.settingFromInput}
                            id="setting_job_type"
                            value={localSettingsState.job_type}
                            onChange={e => localDispatch({type: INPUT_JOB_TYPE, payload: e.target.value})}>
                            <option value="1">会社員1</option>
                            <option value="2">会社員2</option>
                            <option value="3">会社員3</option>
                        </select>
                    </div>
                    <div  className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_email"
                            className={styles.settingFormLabel}>メールアドレス</label>
                        <input
                            className={styles.settingFromInput}
                            id="setting_email"
                            type="email"
                            value={localSettingsState.email}
                            onChange={e => localDispatch({type: INPUT_EMAIL, payload: e.target.value})} />
                    </div>
                    <div  className={styles.settingFormItem}>
                        <label
                            htmlFor="setting_password"
                            className={styles.settingFormLabel}>パスワード</label>
                        <input
                            className={styles.settingFromInput}
                            id="setting_password"
                            type="password"
                            value={localPassword}
                            onChange={e => setLocalPassword(e.target.value)} />
                    </div>
                    <div className={styles.settingFormItem}>
                        <div className={styles.settingFormLabel}>プラン</div>
                        <div className={styles.settingPlan}>スタンダード<a href="/">プレミアムプランにアップグレード</a></div>
                    </div>
                    <div className={styles.buttonWrapper}>
                    <button
                        className={styles.button}
                        disabled={disabled}
                        onClick={onSetting}>確定</button>
                    </div>
                </div>
                </form>
            </ApplySectionBoxSmall>
            </div>
        </Sidemenu>
    )
})