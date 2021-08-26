import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="Text">Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter Text"/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/> (negative - expense, positive - income)
                    </label>
                    <input type="number" onChange={e => setAmount(e.target.value)} value={amount} placeholder="Enter amount..."/>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </>
    )
}
