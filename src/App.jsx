import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mxpertztestapi.onrender.com/api/adventure")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setData(data);
      })
  }, [])

  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className='grid grid-cols-4 gap-5 mt-6'>
        {data.map((dataObj) => (
          <Card key={dataObj._id} data={dataObj} />
        ))}
      </main>
    </>
  )
}

export default App