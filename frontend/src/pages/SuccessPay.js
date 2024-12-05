import React from 'react';
import Header from './Header';
import HistoryItem from './HistoryItem';
import { Link } from 'react-router-dom';
import SuccessImage from '../img/success.png';
import styles from '../css/Payment.module.css';
export default function SuccesssPay(){

    return(
        <>
            <Header />
            <main className={styles.SuccessPay}>
                <div className={styles.success}>
                    {/* img of success */}
                    <img alt="success" src={SuccessImage} className={styles.successPic} />
                    <h1>Success! </h1>
                    <p>Confirmation email has been sent!</p>
                    <button className={styles.checkbtn}>
                        <Link to="/userprofile">
                        Go to check order
                        </Link>
                        
                    </button>
                </div>
                
            </main>
        </>
    );

}