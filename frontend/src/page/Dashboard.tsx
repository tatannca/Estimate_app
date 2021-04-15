import React, { VFC, memo, useEffect } from "react"
import { Link } from "react-router-dom"
import { Sidemenu } from "../components/layout/Sidemenu"
import { LargeButton } from "../components/parts/LargeButton"
import styles from "./Dashboard.module.css"
import logo from "../image/logo.svg"
import iconCreate from "../image/icon-create.svg"
import iconButton from "../image/icon-basebutton.svg"
import { useSelector } from "react-redux"
import { userSelector } from "../store/auth"

export const Dashboard: VFC = memo(() => {

    console.log("Storeの情報", useSelector(userSelector))

    useEffect(() => {
        window.scrollTo(0,0);
    }, [])

    return (
        <Sidemenu>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardLogo}><img src={logo} alt="ガイサン"/></div>
                <p className={styles.dashboardStepTitle}>概算見積の作成方法</p>
                <dl className={styles.dashboardStepList}>
                <div className={styles.dashboardStepItem}>
                    <dt className={styles.dashboardStepNum}>Step1</dt>
                    <dd className={styles.dashboardStepContent}>
                        <img className={styles.dashboardStepIcon} src={iconCreate} alt=""/> または <img src={iconButton} alt="新規概算見積を作成"/> からフォームに進む
                    </dd>
                </div>
                <div className={styles.dashboardStepItem}>
                    <dt className={styles.dashboardStepNum}>Step2</dt>
                    <dd className={styles.dashboardStepContent}>
                        <span className={styles.dashboardTextHighlight}>工事計画・建物情報・仕様一覧・間取情報</span>の４つのステップで、必要事項を入力
                    </dd>
                </div>
                <div className={styles.dashboardStepItem}>
                    <dt className={styles.dashboardStepNum}>Step3</dt>
                    <dd className={styles.dashboardStepContent}>
                        <span>
                        概算見積の作成、保存、内訳明細ダウンロード ※ まで管理可能<br/>
                        <span className={styles.dashboardStepNote}>※内訳明細ダウンロードはプレミアムプランの方のみご利用いただけます。</span>
                        <Link to="/" className={styles.dashboardStepUpgrade}>アップグレードはこちら</Link>
                        </span>
                    </dd>
                </div>
                </dl>
                <p className={styles.dashboardCreateTitle}>積算を簡単に</p>
                <LargeButton to="/">新規概算見積を作成</LargeButton>
            </div>
        </Sidemenu>
    )
})
