import React, { VFC, memo } from "react"
import { Link } from "react-router-dom"

import styles from "./BaseButton.module.css"

type Props = {
    children: React.ReactNode;
    to: string;
}

export const BaseButton: VFC<Props> = memo((props) => {
    const { children, to } = props
    return (
        <Link className={styles.button} to={ to }>{ children }</Link>
    )
})
