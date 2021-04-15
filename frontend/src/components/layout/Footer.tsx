import React, { VFC, memo, useEffect, useState, useCallback } from "react"

import logo from "../../image/logo-white.svg"
import styles from "./Footer.module.css";

export const Footer: VFC = memo(() => {
    const [year, setYear] = useState<number>();

    const getYear = useCallback(() => {
        const thisYear = new Date().getFullYear();
        setYear(thisYear)
    }, [])

    useEffect(() => {
        getYear();
    }, [getYear])

    return (
        <footer className={styles.footerContainer}>
            <div><img src={logo} alt="ガイサン"/></div>
            <p>ALL RIGHT RESERVED {year}</p>
        </footer>
    )
})
