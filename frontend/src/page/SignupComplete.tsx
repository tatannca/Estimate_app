import React, { VFC, memo, useCallback } from "react"
import { useHistory } from "react-router"
import { GuestLayout } from "../components/layout/GuestLayout"
import logo from "../image/logo.svg"
import styles from "./SignupComplete.module.css"

export const SignupComplete: VFC = memo(() => {

    const history = useHistory();

    const onLogin = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        history.push('/dashboard')
    }, [history])

    return (
        <GuestLayout>
            <main className={styles.applyContainer}>
            <section className={styles.applyInner}>
            <div className={styles.applyLogo}><img src={logo} alt="ガイサン"/></div>
            <p className={styles.applyTitle}>会員登録が完了しました</p>

            <div className={styles.applyButtonWrapper}>
                <button className={styles.applyButton}
                    onClick={onLogin}
                >ログインする</button>
            </div>
            </section>
            </main>
        </GuestLayout>
    )
})
