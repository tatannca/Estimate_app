import React, { VFC, memo, useEffect } from "react"
import { GuestLayout } from "../components/layout/GuestLayout"
import styles from "./Notfound.module.css"

export const NotFound: VFC = memo(() => {

    useEffect(() => {
        document.title = "ガイサン ページが見つかりません"
        return () => {document.title = "ガイサン"}
    })

    return (
        <GuestLayout>
        <main className={styles.notfoundContainer}>
            <div className={styles.notfoundTitle}>Not Found</div>
            <h1 className={styles.notfoundText}>お探しのページは、ページが見つかりません。</h1>
            <p className={styles.notfoundText}>削除されたかURLが変更された可能性があります。</p>
        </main>
        </GuestLayout>
    )
})
