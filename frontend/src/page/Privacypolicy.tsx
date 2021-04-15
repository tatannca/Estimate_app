import React, { VFC, memo } from "react"

import { GuestLayout } from "../components/layout/GuestLayout"
import styles from "./Privacypolicy.module.css"

export const Privacypolicy: VFC = memo(() => {
    return (
        <GuestLayout>
        <main>
            <section>
            <div className={styles.privacyContainer}>
            <h1 className={styles.privacyTitle}>プライバシーポリシー</h1>
            <dl>
                <dt className={styles.privacyListTitle}>1. この文章はダミーです。</dt>
                <dd className={styles.privacyListItem}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</dd>
                <dt className={styles.privacyListTitle}>2. この文章はダミーです。</dt>
                <dd className={styles.privacyListItem}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</dd>
                <dt className={styles.privacyListTitle}>3. この文章はダミーです。</dt>
                <dd className={styles.privacyListItem}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</dd>
                <dt className={styles.privacyListTitle}>4. この文章はダミーです。</dt>
                <dd className={styles.privacyListItem}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</dd>
            </dl>
            <p className={styles.privacyAddress}>
                2021年x月x日<br/>
                〒100-0011東京都千代田区内幸町1-1-1帝国ホテルタワー10階<br/>
                株式会社BRIXIT
            </p>
            </div>
            </section>
        </main>
        </GuestLayout>
    )
})
