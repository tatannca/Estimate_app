import React, { VFC, memo } from "react"
import styles from "./ApplySectionBox.module.css"

type Props = {
    children: React.ReactNode;
}

export const ApplySectionBox: VFC<Props> = memo((props) => {
    const { children } = props
    return (
        <section className={styles.applyBox}>
            <div className={styles.applyBoxInner}>
                { children }
            </div>
        </section>
    )
})
