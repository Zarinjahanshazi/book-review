import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";


const WishBook = ({wishBook}) => {
    const {id} = wishBook
    return (
        <div>
            <div>
            <div className='m-4'>
            <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={wishBook.image} alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{wishBook.bookName}</h2>
                        <p>By:{wishBook.author}</p>
                        


                        <div className='lg:flex'>
                        <h1 className='flex gap-4 items-center'><span className="text-base font-bold py-4">Tags:</span>
                        {
                        wishBook?.tags?.map((tag) => <p className='flex'><span><button className="btn rounded-[30px] text-[#23BE0A]  mr-3 radius-[30px]">#{tag}</button></span></p>)
                    }
                        </h1>

                        <div className="flex items-center">
                            <h2><CiLocationOn /></h2>
                            <h2>Year of Publishing:{wishBook.yearOfPublishing}</h2>
                        </div>
                    </div>    



                        <div className="flex gap-4 items-center">
                            <div className="flex items-center">
                                <h1><IoPeopleOutline /></h1>
                                <h1>Publisher: {wishBook.publisher}</h1>
                            </div>

                            <div className="flex items-center">
                                <h1><MdOutlineContactPage /></h1>
                                <h1>page:{wishBook.totalPages}</h1>

                            </div>
                        </div>
                        <p className="border-b-2"></p>

                        <div className="card-actions">
                            <div className="flex gap-2">
                                <h2><button className="btn bg-[#328EFF26] rounded-3xl text-[#328EFF]">Category: {wishBook.category}</button></h2>
                                <h2><button className="btn bg-[#FFAC3326] rounded-3xl text-[#FFAC33]">Rating: {wishBook.rating}</button></h2>
                                <Link to={`/book/${id}`}>
                                <h2><button className="btn bg-[#23BE0A] rounded-3xl text-white">View Details</button></h2>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default WishBook;