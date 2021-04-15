import React, { VFC, memo, useState, useCallback } from "react"
import { Link, useHistory, useLocation } from "react-router-dom"
import styles from "./Sidemenu.module.css"
import iconUser from "../../image/icon-defaultUser.svg"
import iconButton from "../../image/icon-detailButton.svg"
import iconCreate from "../../image/icon-create.svg"
import iconArchives from "../../image/icon-archives.svg"
import iconQuestion from "../../image/icon-question.svg"
import { Question } from "../parts/Question"
import { logout } from "../../store/auth"
import { useDispatch, useSelector } from "react-redux"
import { userSelector } from "../../store/auth"

type Props = {
    children: React.ReactNode;
}

export const Sidemenu: VFC<Props> = memo((props) => {
    const { children } = props;
    const [openQuestion, setOpenQuestion] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);
    const {last_name, first_name, company_name} = useSelector(userSelector)
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();

    const onLogout = useCallback(async() => {
        try {
            await dispatch(logout());
            history.push('/')
        } catch(err) {
            console.log(err)
        }
    }, [history, dispatch])

    const onModalQuestion = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setOpenQuestion(!openQuestion);
    }, [openQuestion])

    const onModalAccount = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setOpenAccount(!openAccount);
    }, [openAccount])

    const checkLocation = useCallback(() => {
        if(location.pathname === '/dashboard/settings') {
            setOpenAccount(false);
        }
    }, [location])

    const stopEvent = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, [])

    // const divRef: any = useRef();

    // useEffect(() => {
    //     const div = divRef.current;
    //     const script = document.createElement('script');
    //     script.type = "text/javascript";
    //     script.src = "https://checkout.pay.jp/";
    //     script.className = "payjp-button";
    //     script.setAttribute('data-key', 'pk_test_0383a1b8f91e8a6e3ea0e2a9');
    //     script.setAttribute('data-submit-text', 'トークンを作成する')
    //     script.setAttribute('data-partial', 'true')
    //     div.appendChild(script)
    // }, [])

    return (
        <div className={styles.appContainer}>
            <div className={styles.sideMenu}>
                <div className={styles.sideMenuHeader}>
                    <div className={styles.sideMenuUserIcon}><img src={iconUser} alt=""/></div>
                    <div>
                    <p className={styles.sideMenuPlan}>スタンダードプラン</p>
                    <p className={styles.sideMenuUser}>{company_name} / {last_name + first_name}</p>
                    </div>
                    <button
                        className={styles.sideMenuButton}
                        onClick={onModalAccount}
                    ><img src={iconButton} alt=""/></button>
                </div>
                <ul>
                <li className={styles.sideMenuItem}>
                    <Link to="/">新規概算見積を作成<img className={styles.sideMenuItemIcon} src={iconCreate} alt=""/></Link>
                </li>
                <li className={styles.sideMenuItem_secondary}>
                    <Link to="/">過去の概算見積を見る<img className={styles.sideMenuItemIcon} src={iconArchives} alt=""/></Link>
                </li>
                </ul>
                <a href="/">プレミアムプランにアップグレード</a>
                {/* <div ref={divRef}></div> */}
            </div>
            <div className={styles.appInner}>
                <div className={styles.appHeader}>
                    <button
                        className={styles.appHeaderButton}
                        onClick={onModalQuestion}>
                        <img src={iconQuestion} alt="よくある質問"/>
                    </button>
                </div>
                <div>{children}</div>
            </div>

            {/* question modal */}
            {openQuestion ?
            <div className={styles.modalQuestionContainer} onClick={onModalQuestion}>
            <div className={styles.modalInner} onClick={stopEvent}>
                <Question />
            </div>
            </div>
            : null}

            {/* account modal */}
            {openAccount ? 
            <div className={styles.modalAccountContainer} onClick={onModalAccount}>
            <div className={styles.modalAccountInner} onClick={stopEvent}>
            <div className={styles.sideMenuHeader}>
                <div className={styles.sideMenuUserIcon}><img src={iconUser} alt=""/></div>
                <div>
                <p className={styles.sideMenuPlan}>スタンダードプラン</p>
                <p className={styles.sideMenuUser}>{company_name} / {last_name + first_name}</p>
                </div>
                <button
                    className={styles.sideMenuButton}
                    onClick={onModalAccount}
                ><img src={iconButton} alt=""/></button>
            </div>
            <ul className={styles.modalAccountList}>
                <li className={styles.modalAccountItem}><Link to="/dashboard/settings" onClick={checkLocation}>アカウント情報変更</Link></li>
                <li className={styles.modalAccountItem}><button onClick={onLogout}>ログアウト</button></li>
            </ul>
            </div>
            </div>
            : null}
        </div>
    )
})
