import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-20 mx-auto">
            <h2 className="text-4xl p-2">oops</h2>
            <p className="text-2xl p-4 text-red-600"> Page Not Found</p>
            <Link to='/'><button className="btn btn-outline btn-error">Go Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;