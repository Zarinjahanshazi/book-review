

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {id,image,tags,bookName,author,category,rating} = book;
    return (
        <div>

            <div>
            <Link to={`/book/${id}`}>
            <div className="card w-full h-[481px] rounded-2xl border-[#13131326] bg-base-100 shadow-xl">
                <figure><img className="bg-[#F3F3F3]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    {/* <div>
                    tags.map(tag => <SingleTag tag={tag}></SingleTag>)
                    </div> */}
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