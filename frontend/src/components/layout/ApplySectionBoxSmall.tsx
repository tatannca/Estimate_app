import React, { VFC, memo } from "react"
import styles from "./ApplySectionBoxSmall.module.css"

type Props = {
    children: React.ReactNode;
}

export const ApplySectionBoxSmall: VFC<Props> = memo((props) => {
    const { children } = props
    return (
        <section className={styles.applyBox}>
            <div className={styles.applyBoxInner}>
                { children }
            </div>
        </section>
    )
})
