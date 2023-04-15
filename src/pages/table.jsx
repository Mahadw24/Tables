import React, { useEffect, useState } from 'react'
import OrdersData from '/lib/purchase-history.json'
import { AiFillCaretDown } from 'react-icons/ai'
import { AiFillCaretUp } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const Table = () => {
    const [data, setData] = useState(OrdersData.Orders);
    const [descend, setDescend] = useState(true);
    const [pageNumber, setPageNumber] = useState(1);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const ascendingSort = (property) => {
        const sorted = [...data].sort((a, b) => {
            if (a[property] < b[property]) return -1;
            if (a[property] > b[property]) return 1;
            return 0;
        });
        setData(sorted);
        setDescend(!descend);
    };
    const descendingSort = (property) => {
        const sorted = [...data].sort((a, b) => {
            if (a[property] > b[property]) return -1;
            if (a[property] < b[property]) return 1;
            return 0;
        });
        setData(sorted);
        setDescend(!descend);
    };

    const handlePageChanged = (page) => {
        if (page === 1) {
            setData(OrdersData.Orders);
            setPageNumber(page);
        }
        else {
            setData(data.slice(0, data.length - 15));
            setPageNumber(page);
        }
    };

    return (
        <>
            <div className='m-6'>
                <div className='mb-6'>
                    <h1 className='uppercase text-[#BE9F56] text-3xl'>purchase history</h1>
                    <p className='text-lg'>In the purchase history section, you can review and manage all your ZIMO orders.</p>
                </div>
                <div className='flex flex-col w-full'>
                    <table className='w-fit'>
                        <thead className='border-b-2 border-black'>
                            <tr className='mb-6'>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        order id
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('order_id')} />
                                            :
                                            <AiFillCaretUp size={20}  className='ml-2 text-black' onClick={() => ascendingSort('order_id')} />
                                        }
                                    </div>
                                </th>

                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        type
                                    </div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        listing id
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('listing_id')} />
                                            :
                                            <AiFillCaretUp size={20} className='ml-2 text-black' onClick={() => ascendingSort('listing_id')} />
                                        }</div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        ticket entries
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('ticket_entries')} />
                                            :
                                            <AiFillCaretUp size={20} className='ml-2 text-black' onClick={() => ascendingSort('ticket_entries')} />
                                        }</div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        date
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('date')} />
                                            :
                                            <AiFillCaretUp size={20} className='ml-2 text-black' onClick={() => ascendingSort('date')} />
                                        }</div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        payment method
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('payment_method')} />
                                            :
                                            <AiFillCaretUp size={20} className='ml-2 text-black' onClick={() => ascendingSort('payment_method')} />
                                        }</div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        status
                                    </div>
                                </th>
                                <th>
                                    <div className='text-[#BE9F56] text-md mr-2 w-[180px] uppercase flex items-center justify-center cursor-pointer'>
                                        total amount
                                        {descend ?
                                            <AiFillCaretDown size={20} className='ml-2 text-black' onClick={() => descendingSort('amount')} />
                                            :
                                            <AiFillCaretUp size={20} className='ml-2 text-black' onClick={() => ascendingSort('amount')} />
                                        }</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                const originalDate = item.date;
                                const formattedDate = formatDate(originalDate);

                                let imgSrc;
                                if (item.payment_method === "visa") {
                                    imgSrc = "https://zimopro.com/visa/visa.png";
                                } else if (item.payment_method === "maestro") {
                                    imgSrc = "https://zimopro.com/visa/maestro.png";
                                } else if (item.payment_method === "american express") {
                                    imgSrc = "https://zimopro.com/visa/aex.png";
                                }
                                return (
                                    <tr className=''>
                                        <td className='pb-4 pt-4 '>{item.order_id}</td>
                                        <td className='pb-4 pt-4 text-left'>{item.type}</td>
                                        <td className='pb-4 pt-4 text-left'>ZM{item.listing_id}</td>
                                        <td className='pb-4 pt-4 text-center'>{item.ticket_entries}</td>
                                        <td className='pb-4 pt-4 text-center'>{formattedDate}</td>
                                        <td className='pb-4 pt-4 flex items-center justify-center'>
                                            <img className='w-10  mr-3' src={imgSrc} alt="" /> {item.cvv}</td>
                                        <td className='pb-2 pt-2'>{item.status}</td>
                                        <td className='flex justify-between'>
                                            <div>
                                                Rs {item.amount}
                                            </div>
                                            <div>
                                                {item.currency}
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='flex items-end justify-end'>
                        <div className='flex w-20 text-xl justify-between items-center cursor-pointer'>
                            <h1 onClick={() => handlePageChanged(1)} className={`${pageNumber == 1 ? 'text-[#BE9F56]': ''}`}>1</h1>
                            <h2 onClick={() => handlePageChanged(2)} className={`${pageNumber == 2 ? 'text-[#BE9F56]': ''}`}>2</h2>
                                <AiOutlineRight className={`${pageNumber >= 2 ? 'invisible' : ''}`} onClick={() => handlePageChanged(2)} size={24} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Table;