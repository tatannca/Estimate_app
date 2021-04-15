import React, { VFC, memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"

import { ApplySectionBox } from "../components/layout/ApplySectionBox"
import { GuestLayout } from "../components/layout/GuestLayout"
import { userSelector } from "../store/user"
import logo from "../image/logo.svg"
import styles from "./SignupConfirm.module.css"
// import { userRegistration } from "../store/auth"
import { registerAPI } from "../api/auth"

export const SignupConfirm: VFC = memo(() => {
    const history = useHistory();
    const userData = useSelector(userSelector);
    const {
        lastName,
        firstName,
        companyName,
        jobtype,
        email,
        password
    } = useSelector(userSelector);

    const onRegister = useCallback(async(e: React.MouseEvent) => {
        e.preventDefault();
        try {
            await registerAPI({...userData});
            alert(`登録完了 ${{...userData}}`)
            history.push('/signup/complete')
        } catch(err) {
            console.error(err)
            alert(`登録できませんでした。`)
        }
    }, [history, userData])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <GuestLayout>
            <main className={styles.applyContainer}>
                <div className={styles.applyLogo}><img src={logo} alt="ガイサン"/></div>
                <ApplySectionBox>
                <h1 className={styles.applyTitle}>新規会員登録</h1>

                <div className={styles.confirmListWrapper}>
                <dl className={styles.confirmList}>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>氏</dt>
                    <dd className={styles.confirmItemBody}>{lastName}</dd>
                </div>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>名</dt>
                    <dd className={styles.confirmItemBody}>{firstName}</dd>
                </div>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>会社名</dt>
                    <dd className={styles.confirmItemBody}>{companyName}</dd>
                </div>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>職種</dt>
                    <dd className={styles.confirmItemBody}>{
                        (() => {
                            switch(jobtype){
                                case 1:
                                    return <span>会社員1</span>
                                case 2:
                                    return <span>会社員2</span>
                                case 3:
                                    return <span>会社員3</span>
                            }
                        })()
                    }</dd>
                </div>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>メールアドレス</dt>
                    <dd className={styles.confirmItemBody}>{email}</dd>
                </div>
                <div className={styles.confirmItem}>
                    <dt className={styles.confirmItemTitle}>パスワード</dt>
                    <dd className={styles.confirmItemBody}>{password.replace(/./g, '*')}</dd>
                </div>
                </dl>
                </div>

                <div className={styles.applyButtonWrapper}>
                <button
                    className={styles.applyButton}
                    onClick={onRegister}
                    >登録する</button>
                </div>
                <p className={styles.applyAgreement}>アカウントを作成することにより、ガイサンの<Link to="/" target="_blank" rel="noopener noreferrer">利用規約</Link>と<Link to="/privacypolicy" target="_blank" rel="noopener noreferrer">プライバシーポリシー</Link>に同意するものとします。</p>
                </ApplySectionBox>
            </main>
        </GuestLayout>
    )
})
