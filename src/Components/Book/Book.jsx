

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {id,image,tags,bookName,author,category,rating} = book;
    return (
        <div>

            <div className=" ">
            <Link to={`/book/${id}`}>
            <div className="card w-full h-[581px] rounded-2xl border-[#13131326] bg-base-100 shadow-xl">
                <figure><img className="bg-[#F3F3F3] h-full rounded-3xl lg:w-full p-2" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                <div className='flex'>
                    {
                        book?.tags?.map((tag) => <button className="btn rounded-[30px] text-[#23BE0A]  mr-3 radius-[30px]">{tag}</button>)
                    }
                    </div>
                    
                    <h2 className="card-title text-[#131313] font-bold text-2xl">{bookName}</h2>
                    <p className="text-[#131313CC] text-base font-medium">By: {author}</p>
                    <p className='border-b-2'></p>
                    <div className="">
                    
                    <div className="flex items-center justify-between">
                        <h2>{category}</h2>
                        <div className="flex gap-1 justify-center ">
                            <h2 className="text-[#131313CC] font-medium text-base">{rating}</h2>
                            <h2 className="text-2xl"><CiStar /></h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </Link>
            </div>
            
            
        </div>
    );
};

export default Book;