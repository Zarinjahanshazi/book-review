import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { saveDataToLocalStorageRead, saveDataToLocalStorageWishList } from "../utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    console.log(book);



    const handleRead =() =>{
        saveDataToLocalStorageRead(book)
    }

    const handleWishList =() =>{
        saveDataToLocalStorageWishList(book)
    }

    // console.log(id,books)
    return (
        <div className="mt-10">
            <div className="grid lg:grid-cols-2 gap-10">
                <div>
                        <img className="rounded-2xl w-[700px] h-[600px]" src={book.image} alt="" />
                </div>

                <div className="">
                    <h1 className="text-[#131313] font-bold text-4xl">{book.bookName}</h1>
                    <h4 className="text-base font-medium py-4">By:{book.author}</h4>
                    <p className='border-b-2'></p>
                    <h3 className="text-base font-medium py-4">{book.category}</h3>
                    <p className='border-b-2'></p>
                    <h1 className="py-4"><span className="font-bold text-base">Review:</span>{book.review}</h1>

                    <h1 className="text-base font-bold py-4">tags</h1>

                    {
                        book.tags.map((tag,idx) => <p key={idx}></p>)
                    }

                    <p className='border-b-2'></p>

                    <div className="flex gap-10">
                        <div className="text-[#131313B2]">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>

                        </div>

                        <div className="text-[#131313] text-base font-semibold">
                            <p>{book.totalPages}</p>
                            <p>{book.publisher}</p>
                            <p>{book.yearOfPublishing}</p>
                            <p>{book.rating}</p>

                        </div>

                    </div>

                    <div className="py-4">
                    <button onClick={handleRead} className="btn btn-outline mr-5 text-black btn-accent">Read</button>
                    <button onClick={handleWishList} className="btn btn-outline text-white btn-accent">Wishlist</button>
                    <ToastContainer />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default BookDetails;