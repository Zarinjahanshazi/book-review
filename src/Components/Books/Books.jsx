import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";

import './Books.css'
const Books = ({books}) => {
    // const {image} = books
    return (
        <div>
            

            <div className='m-4'>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={books.image} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{books.bookName}</h2>
                        <p>By:{books.author}</p>
                        <p className='text-4xl'>Tags:</p>
                        <div className="flex gap-4 items-center">
                            <div className="flex items-center">
                                <h1><IoPeopleOutline /></h1>
                                <h1>Publisher: {books.publisher}</h1>
                            </div>

                            <div className="flex items-center">
                                <h1><MdOutlineContactPage /></h1>
                                <h1>page:{books.totalPages}</h1>

                            </div>
                        </div>
                        <p className="border-b-2"></p>

                        <div className="card-actions">
                            <div className="flex gap-2">
                                <h2><button className="btn bg-[#328EFF26] rounded-3xl text-[#328EFF]">Category: {books.category}</button></h2>
                                <h2><button className="btn bg-[#FFAC3326] rounded-3xl text-[#FFAC33]">Rating: {books.rating}</button></h2>
                                <h2><button className="btn bg-[#23BE0A] rounded-3xl text-white">View Details</button></h2>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            
        </div>
    );
};

export default Books;