import React, { VFC, memo } from "react"
import { Link } from "react-router-dom"

import logo from "../../image/logo.svg"
import styles from "./Header.module.css"

export const Header: VFC = memo(() => {
    return (
        <header>
        <div className={styles.headerInner}>
            <div><Link to="/"><img src={logo} alt="ガイサン"/></Link></div>
            <ul className={styles.buttonList}>
                <li><Link className={`${styles.button} ${styles.buttonRegister}`} to="/signup">会員登録</Link></li>
                <li><Link className={`${styles.button} ${styles.buttonLogin}`} to="/login">ログイン</Link></li>
            </ul>
        </div>
        </header>
    )
})
