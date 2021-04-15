import React, { VFC, memo } from "react"
import { Link } from "react-router-dom"

import styles from "./LargeButton.module.css"

type Props = {
    children: React.ReactNode;
    to: string;
}

export const LargeButton: VFC<Props> = memo((props) => {
    const { children, to } = props
    return (
        <Link className={styles.button} to={ to }>{ children }</Link>
    )
})
