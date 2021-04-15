import React, { VFC, memo } from "react"

import styles from "./Question.module.css"

export const Question: VFC = memo(() => {
    return (
        <div className={styles.questionContainer}>
            <h3 className={styles.questionTitle}>よくある質問</h3>
            <dl className={styles.questionList}>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q1</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A1</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q2</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A2</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q3</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A3</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q4</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A4</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q5</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A5</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
                <div className={styles.questionItem}>
                <dt className={styles.questionContents}>
                <div className={styles.questionNum}>Q6</div>
                <div className={styles.questionText}>この文章はダミーです。文字の大きさ、量、字間、<br />行間等を確認するために入れています。</div>
                </dt>
                <dd className={styles.answerContents}>
                <div className={styles.answerNum}>A6</div>
                <div className={styles.answerText}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。</div>
                </dd>
                </div>
            </dl>
        </div>
    )
})
