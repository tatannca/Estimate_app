import React, { VFC, memo, useEffect } from "react"

import { BaseButton } from "../components/parts/BaseButton"
import { DefaultSection } from "../components/layout/DefaultSection"
import styles from "./Home.module.css"
import kv from "../image/kv.png"
import preview from "../image/preview.png"
import { Question } from "../components/parts/Question"
import { GuestLayout } from "../components/layout/GuestLayout"

export const Home: VFC = memo(() => {
    
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <GuestLayout>
        <main>
        <DefaultSection>
        <div className={styles.headContainer}>
            <h1 className={styles.headTitle}>
                タイトル。この文章はダミーです。
            </h1>
            <p className={styles.headDescription}>
                この文章はダミーです。文字の大きさ、量、字間、行間等を確認<br />するために入れています。この文章はダミーです。文字の大き<br />さ、量、字間、行間等を確認するために入れています。
            </p>
            <div className={styles.headButton}>
                <BaseButton to="/">無料で始める</BaseButton>
            </div>
            <div className={styles.headImg}><img src={kv} alt=""/></div>
        </div>
        </DefaultSection>

        <DefaultSection bgcolor="#6678D9">
        <div className={styles.introContainer}>
            <div className={styles.introImg}><img src={preview} alt=""/></div>
            <div className={styles.introDescription}>
            <h2>積算を簡単に</h2>
            <p>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</p>
            </div>
        </div>
        <div className={styles.planContainerWrapper}>
        <div className={styles.planContainer}>
            <h3 className={styles.planTitle}>プランと料金</h3>
            <div className={styles.planBalloonWrapper}>
            <div className={styles.planBalloon}>
            <dl>
            <dt className={styles.planName}>スタンダードプラン</dt>
            <dd className={styles.planPriceWrapper}>
                <div className={styles.planPriceLabel}>FREE</div>
                <div className={styles.planPriceValue}>
                    <span className={styles.planPriceMonthly}>月額</span>
                    <span className={styles.planPriceMark}>¥<span>0</span></span>
                </div>
            </dd>
            <dd>
                <dl className={styles.serviceList}>
                <dt className={styles.serviceItem}>機能一覧</dt>
                <dd className={styles.serviceItem}>物件情報入力</dd>
                <dd className={styles.serviceItem}>概算見積表示</dd>
                <dd className={styles.serviceItem}>ハウスメーカー参考価格</dd>
                <dd className={styles.serviceItem}>国単価参考価格</dd>
                <dd className={styles.serviceItem}>過去見積物件検索</dd>
                </dl>
            </dd>
            </dl>
            <div className={styles.planRegisterButton}>
                <BaseButton to="/">スタンダードプランで会員登録</BaseButton>
            </div>
            </div>

            <div className={styles.planBalloon}>
            <dl>
            <dt className={styles.planName}>プレミアムプラン</dt>
            <dd className={styles.planPriceWrapper}>
                <div className={styles.planPriceLabel}>PRO</div>
                <div className={styles.planPriceValue}>
                    <span className={styles.planPriceMonthly}>月額</span>
                    <span className={styles.planPriceMark}>¥<span>500</span></span>
                </div>
            </dd>
            <dd>
                <dl className={styles.serviceList}>
                <dt className={styles.serviceItem}>機能一覧</dt>
                <dd className={styles.serviceItem}>物件情報入力</dd>
                <dd className={styles.serviceItem}>概算見積表示</dd>
                <dd className={styles.serviceItem}>ハウスメーカー参考価格</dd>
                <dd className={styles.serviceItem}>国単価参考価格</dd>
                <dd className={styles.serviceItem}>過去見積物件検索</dd>
                <dd className={styles.serviceItem} style={{color: "#FFAF5F"}}>概算見積内訳書エクスポート</dd>
                <dd className={styles.serviceItem} style={{color: "#FFAF5F"}}>工種別利益率調整機能</dd>
                </dl>
            </dd>
            </dl>
            <div className={styles.planRegisterButton}>
                <BaseButton to="/">プレミアムプランで会員登録</BaseButton>
            </div>
            </div>
            </div>
            </div>
        </div>
        </DefaultSection>

        <DefaultSection>
        <div className={styles.questionWrapper}>
        <Question />
        </div>
        </DefaultSection>
        </main>
        </GuestLayout>
    )
})
