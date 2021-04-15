import React, { VFC, memo, useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router"
import { LargeButton } from "../components/parts/LargeButton"
import { GuestLayout } from "../components/layout/GuestLayout"
import logo from "../image/logo.svg"
import styles from "./Login.module.css"
import { login } from "../store/auth"
import { useDispatch } from "react-redux"

export const Login: VFC = memo(() => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();

    const onLogin = useCallback(async(e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await dispatch(login(email, password));
            history.push('/dashboard')
        } catch(err) {
            switch(err.message){
                case '404':
                    alert('入力されたメールアドレスが一致しません。ご確認ください。');
                    break;
                default:
                    alert('ログインに失敗しました。')
            }
        }
    }, [history, dispatch, email, password])

    useEffect(() => {
        email === "" || password === "" ? setDisabled(true) : setDisabled(false)
    }, [email, password])

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <GuestLayout>
        <main className={styles.loginContainer}>
            <section className={styles.loginBox}>
            <div className={styles.loginBoxInner}>
            <div><img src={logo} alt="ガイサン"/></div>

            <form className={styles.loginForm}>
            <div className={styles.loginFormGroup}>
                <div className={styles.loginFormField}>
                <label htmlFor="login-email">メールアドレス</label>
                <input
                    id="login-email"
                    autoComplete="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.loginFormField}>
                <label htmlFor="login-password">パスワード</label>
                <input 
                    id="login-password"
                    autoComplete="current-password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.applyButtonWrapper}>
            <button
                className={styles.applyButton}
                onClick={onLogin}
                disabled={disabled}
            >ログインする</button>
            </div>
            </form>

            <div className={styles.registerWrapper}>
                <p className={styles.registerTitle}>新規会員登録はこちら</p>
                <LargeButton to="/signup">登録画面に移動する</LargeButton>
            </div>
            </div>
            </section>
        </main>
        </GuestLayout>
    )
})
