import { NavLink } from "react-router-dom";

const Nav = () => {
    const link=
    <div className="font-bold flex gap-5 text-[1rem]">
        <NavLink to='/statistics' className={({isActive})=> isActive? 'text-blue-700 block': 'font-bold'}>Statistics</NavLink>
        <NavLink to='/appliedJobs' className={({isActive})=> isActive? 'text-blue-700 block': 'font-bold'}>Applied Jobs</NavLink>
        <NavLink to='/blog' className={({isActive})=> isActive? 'text-blue-700 block': 'font-bold'}>Blog</NavLink>
    </div>
    return (
        <div className="navbar bg-base-300 fixed z-50 shadow-2xl">
            <div className="navbar-start">
                <a className="btn btn-ghost text-2xl font-bold">CareerHub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-blue-500 text-white">Star Applying</a>
            </div>
        </div>
    );
};

export default Nav;