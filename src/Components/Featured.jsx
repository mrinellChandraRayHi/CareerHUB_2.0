import { NavLink } from "react-router-dom";

const Featured = ({fetaturedJob}) => {
    console.log(fetaturedJob);
    const {logo, title, companyName, location, salary, id}=fetaturedJob;
    return (
        <div>
            <div className="bg-gray-300 m-5 p-5 rounded-lg">
                <img className="flex-grow" src={logo} alt="" />
                <div className="mt-5">
                    <p>{title}</p>
                    <p>{companyName}</p>
                    <div className="flex items-center justify-between">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                    <NavLink to={`/Featured/${id}`}><button className="btn-primary btn mt-3">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Featured;