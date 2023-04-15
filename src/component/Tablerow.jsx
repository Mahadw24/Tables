import React from 'react'

const Tablerow = ({ item }) => {
    return (
        <>
            <tr className='border-2'>
                <td className='pb-2 pt-2 '>{item.order_id}</td>
                <td className='pb-2 pt-2 text-center'>{item.type}</td>
                <td className='pb-2 pt-2 text-center'>ZM{item.listing_id}</td>
                <td className='pb-2 pt-2 text-center'>{item.ticket_entries}</td>
                <td className='pb-2 pt-2'>{item.date}</td>
                <td className='pb-2 pt-2 text-center'>{item.payment_method} {item.cvv}</td>
                <td className='pb-2 pt-2'>{item.status}</td>
                <td className='flex justify-between'>
                    <div>
                        Rs{item.amount}
                    </div>
                    <div>
                        {item.currency}
                    </div>
                </td>
            </tr >
        </>
    )
}

export default Tablerow;