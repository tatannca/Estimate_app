import React, { VFC, memo, useCallback, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

import { ApplySectionBox } from "../components/layout/ApplySectionBox"
import { GuestLayout } from "../components/layout/GuestLayout"
import { setUserRegister } from "../store/user"
import logo from "../image/logo.svg"
import styles from "./Signup.module.css"

export const Signup: VFC = memo(() => {
    const [disabled, setDisabled] = useState(true);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [company, setCompany] = useState('');
    const [jobtype, setJobtype] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const onConfirm = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        if(disabled) return
        try{
            dispatch(setUserRegister({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                companyName: company,
                jobtype: jobtype
            }));
            history.push('/signup/confirm')
        } catch(err) {
            console.log(err)
            alert('登録に失敗しました')
        }
    }, [disabled, dispatch, firstName, lastName, email, password, company, jobtype, history])

    useEffect(() => {
        const input = [lastName, firstName, company, jobtype, email, password];
        input.includes("") ? setDisabled(true) : setDisabled(false);
    }, [lastName, firstName, company, jobtype, email, password])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <GuestLayout>
        <main className={styles.applyContainer}>
            <div className={styles.applyLogo}><img src={logo} alt="ガイサン"/></div>
            <ApplySectionBox>
                <h1 className={styles.applyTitle}>新規会員登録</h1>
                <form>
                <div className={styles.applyFormInner}>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-lastname">氏</label>
                    <input id="register-lastname"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}/>
                    </div>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-firstname">名</label>
                    <input id="register-firstname"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}/>
                    </div>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-company">会社名</label>
                    <input id="register-company"
                        value={company}
                        onChange={e => setCompany(e.target.value)}/>
                    </div>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-jobtype">職種</label>
                    <select id="register-jobtype"
                        value={jobtype}
                        onChange={e => setJobtype(e.target.value)}>
                        <option hidden>選択してください</option>
                        <option value="1">会社員1</option>
                        <option value="2">会社員2</option>
                        <option value="3">会社員3</option>
                    </select>
                    </div>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-email">メールアドレス</label>
                    <input
                        id="register-email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className={styles.applyFormItem}>
                    <label htmlFor="register-password">パスワード</label>
                    <input
                        id="register-password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}/>
                    </div>

                </div>
                    <div className={styles.applyButtonWrapper}>
                    <button
                        className={styles.applyButton}
                        disabled={disabled}
                        onClick={onConfirm}
                    >確認画面へ</button>
                    </div>
                </form>
            </ApplySectionBox>
        </main>
        </GuestLayout>
    )
})
