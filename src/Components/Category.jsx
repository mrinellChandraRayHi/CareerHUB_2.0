const Category = ({category}) => {
    const {id, image, catagory, jobs}=category;
    return (
        <div className="bg-gray-200 m-5 p-5 rounded-lg">
            <img src={image} alt="" />
            <div className="mt-5">
                <p className="font-bold">{catagory}</p>
                <p className="text-sm text-gray-500">{jobs}</p>
            </div>
        </div>
    );
};

export default Category;