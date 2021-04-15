import React, { VFC, memo } from "react"
import { Footer } from "./Footer"
import { Header } from "./Header"
import styles from "./GuestLayout.module.css"

type Props = {
    children: React.ReactNode;
}

export const GuestLayout: VFC<Props> = memo((props) => {
    const { children } = props
    return (
        <>
        <div className={styles.container}>
        <Header />
            { children }
        <Footer />
        </div>
        </>
    )
})
