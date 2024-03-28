import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShowJobDetails = () => {
    const jobs=useLoaderData();
    const {id}=useParams();
    //console.log(id, jobs);
    const parsInt=parseInt(id);
    console.log(jobs,parsInt)
    const job=jobs.find(job=>job.id===parsInt);
    console.log(job);
    const handleApplyJob=()=>{
        toast('Your hava applied successfully');
    }
    const {salary, title, phone, email, address,  jobDescription, jobResponsibility, educationalRequirements, experience}=job
    return (
        <div>
            <h1 className="text-center font-bold py-32 text-6xl">Job Details</h1>
            <div className="lg:flex justify-between mb-10">
                {/* left */}
                <div className="card w-2/3 bg-gray-100 shadow-xl">
                    <div className="card-body">
                        <p><span className="font-bold mr-3">Job Description :</span> {jobDescription}</p>
                        <p><span className="font-bold mr-3">Job Responsibility :</span> {jobResponsibility}</p>
                        <p><span className="font-bold mr-3">Educational Requirements:</span> {educationalRequirements}</p>
                        <p><span className="font-bold mr-3">Experience :</span> {experience}</p>
                    </div>
                </div>
                {/* right */}
                <div className="flex flex-col">
                    <div className="card w-96 bg-gray-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title"><span>Salary : </span>{salary}</h2>
                            <p><span className="font-bold mr-3">Job Title :</span>{title}</p>
                            <h1 className="text-xl py-2 font-bold">Contact Information</h1>
                            <p><span className="font-bold">Phone</span>{phone}</p>
                            <p><span className="font-bold">Email : </span>{email}</p>
                            <p><span className="font-bold">Address : </span>{address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="btn-primary btn mt-5">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ShowJobDetails;