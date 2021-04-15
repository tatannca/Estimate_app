import React, { VFC, memo } from "react"

import styles from './DefaultSection.module.css'

type Props = {
    children: React.ReactNode;
    bgcolor?: string;
}

export const DefaultSection: VFC<Props> = memo((props) => {
    const { children, bgcolor } = props;
    return (
        <section className={styles.sectionContainer} style={{background: bgcolor}}>
            <div className={styles.sectionInner}>
                { children }
            </div>
        </section>
    )
})
