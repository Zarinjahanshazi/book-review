import Banner from "../Banner/Banner";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-4xl font-bold mt-20">Books</h2>
            <FeaturedBooks></FeaturedBooks>

        </div>
    );
};

export default Home;