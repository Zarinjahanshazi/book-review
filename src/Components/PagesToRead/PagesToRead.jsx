import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getDataFromLocalRead } from '../utility/localstorage';
import { useEffect, useState } from 'react';

const PagesToRead = () => {
  const [readBooks, setReadBooks] = useState([]);
  
  useEffect(() => {
    const data = getDataFromLocalRead();
    setReadBooks(data);
  }, []);

  const chartData = readBooks.map(book => ({
    name: book.bookName.slice(0,10), 
    pages: book.totalPages, 
  }));

  return (
    <div className='text-center'>
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pages" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default PagesToRead;