import React from 'react'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { FcProcess } from 'react-icons/fc'
import { FaArrowDown, FaArrowUp, FaCoins } from 'react-icons/fa'

const transactions = [
    { icon: <FcProcess className='text-4xl' />, type: 'Processing', from: 'T13A....vy6Z', amount: 100, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowUp className='text-3xl' color="red" />, type: 'Withdraw', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowDown className='text-3xl' color="green" />, type: 'Deposit', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FcProcess className='text-4xl' />, type: 'Processing', from: 'T13A....vy6Z', amount: 100, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowUp className='text-3xl' color="red" />, type: 'Withdraw', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowDown className='text-3xl' color="green" />, type: 'Deposit', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FcProcess className='text-4xl' />, type: 'Processing', from: 'T13A....vy6Z', amount: 100, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowUp className='text-3xl' color="red" />, type: 'Withdraw', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
    { icon: <FaArrowDown className='text-3xl' color="green" />, type: 'Deposit', from: 'T13A....vy6Z', amount: 50, orderNo: 'Df525546hj24658', date: '20/Feb/2025' },
]

const typeTemplate = (rowData) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span >{rowData.icon}</span>
        <div className='space-y-2'>
            <div style={{ fontWeight: 'bold' }}>{rowData.type}</div>
            <div style={{ fontSize: '1.4rem', color: '#aaa' }}>From: {rowData.from}</div>
        </div>
    </div>
)

const amountTemplate = (rowData) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
        <FaCoins color="#00FFA3" />
        <span>{rowData.amount}</span>
    </div>
)

const HistoryTable = () => {
    return (
        <div style={{ color: '#fff' }}>
            <DataTable value={transactions} className="p-datatable-sm" stripedRows responsiveLayout="scroll">
                <Column header="Transactions" body={typeTemplate} style={{ minWidth: '250px', fontSize: '1.8rem' }} />
                <Column field="amount" header="Amount" body={amountTemplate} />
                <Column field="orderNo" header="Order No." />
                <Column field="date" header="Date" />
            </DataTable>
        </div>
    )
}

export default HistoryTable
