import { useEffect, useState } from 'react';
import userImage from '../assets/images/user.png'
import Category from '../Components/Category';
import Featured from '../Components/Featured';
const Statistics = () => {
    const [categorys, setCategorys]=useState([]);
    const [featuredJobs, setFeaturedJobs]=useState([]);
    const [dataLength, setDataLength]=useState(4);
    useEffect(()=>{
        const fetchData=async()=>{
            const res=await fetch('JobCatagory.json')
            const data = await res.json();
            setCategorys(data);
            //console.log(categorys);
        }
        fetchData();
    },[])
    useEffect(()=>{
        const fetchData = async()=>{
            const res= await fetch('featuredJob.json')
            const data= await res.json();
            setFeaturedJobs(data);
            console.log(featuredJobs);
        }
        fetchData();
    },[])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={userImage} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> <span className='text-primary'>Dream Job</span></h1>
                    <p className="py-6 max-w-[570px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mt-10'>Job Category List</h1>
                <p>Explore Thousands of job opportunities with all the information you need. Its your feture</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mb-[170px] mt-[32px]'>
                {categorys.map((category, idx)=><Category key={idx} category={category}/>)}
            </div>
            <div className='text-center'>
                <h1 className='text-4xl font-bold mt-10'>Job Category List</h1>
                <p>Explore Thousands of job opportunities with all the information you need. Its your feture</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10'>
                {featuredJobs.slice(0, dataLength).map((fetaturedJob, idx)=><Featured key={idx} fetaturedJob={fetaturedJob}/>)}
            </div>
            <div className={dataLength === featuredJobs.length && 'hidden'}>
                <div className='text-center mb-10'>
                    <button onClick={()=> setDataLength(featuredJobs.length)} className="btn-primary btn">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Statistics;