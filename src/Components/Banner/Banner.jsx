import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="mt-10">
            <div className="hero  h-[554px]  rounded-3xl bg-base-200">
  <div className="hero-content  flex-col  lg:flex-row-reverse">
    <img  src="https://i.ibb.co/XVWxrgb/pngwing-1.png" className=" rounded-lg shadow-2xl" />
    <div className="">
      <h1 className="text-5xl font-bold mr-10 text-[#131313] ">Books to freshen <br /> up your bookshelf</h1>
      
      <Link to='/listedBooks'>
      <button className="btn lg:my-12 rounded-lg text-white bg-[#23BE0A]">View The List</button>
      </Link>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default Banner;