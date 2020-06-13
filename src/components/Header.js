import React from 'react'
import logo from './logo.jpg';
export const Header = () => {
    return (
        <div>
        <h1>
            EXPENSE TRACKER APP BOOTCAMP PROJECT 1
        </h1>
        <h4>Github<a href="www.github.com/alifya53/Expense-Tracking-app/">Repo</a></h4>
        <div className="logo"><img src={logo} alt="Logo" /></div>
        </div>
    )
}
