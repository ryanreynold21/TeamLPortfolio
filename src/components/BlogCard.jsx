const BlogCard = ({ blog }) => {
  return (
    <div className=" flex flex-col w-full md:w-[385px] items-center justify-center">
      <div className="">
        <div className=" -z-20 ">
          <img src={blog.image} alt="" className="" />
        </div>
        <div className="p-3 z-30 -mt-[90px] ">
          <span className="px-4 py-2 bg-[#d9832e] text-white">02 Mar 2023</span>
          <div className="p-3 mt-2  z-30 shadow-md bg-white">
            <span className="px-2 py-1 border border-slate-400 mb-3 bg-slate-200">
              Design
            </span>
            <h3 className="text-xl my-3 font-normal capitalize">
              Make your marketing website
            </h3>
            <p className=" text-sm text-slate-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              veritatis omnis dolorum.
            </p>
            <button className=" font-semibold border-b-2 text-[#d9832e] hover:text-slate-800 mt-5 text-md uppercase hover:border-slate-800 border-[#d9832e] ">
              read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
