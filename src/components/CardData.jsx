import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const CardData = () => {
    const [data, setData] = useState([]);
    const { cardId } = useParams();

    useEffect(() => {
        fetch(`https://mxpertztestapi.onrender.com/api/adventure/${cardId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data);
            })
    }, [])

    return (
        <div className='h-svh w-full flex justify-center items-center'>
            <div className='h-64 bg-neutral-600 p-2 rounded-md'>
                <div className='h-1/2'>{data.Image}
                    <img src={`https://ik.imagekit.io/dev24/$%7B${data?.Image}%7D`} alt="image" />
                </div>
                <div className='flex flex-col justify-between h-1/2 p-2 '>
                    <div className='text-wrap overflow-hidden'>{data.Title}</div>
                    <div className={`bg-slate-100 flex justify-center px-4 p-2 rounded-full border mt-2 ${data.Status === "In Progress" ? "text-orange-400" : "text-blue-400"}`}>{data.Status}</div>
                </div>
            </div>
        </div>
    )
}

export default CardData