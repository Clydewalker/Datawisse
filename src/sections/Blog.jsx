import Thumbnail1 from "../assets/Images/Thumbnail-1.png";
import Thumbnail2 from "../assets/Images/Thumbnail-2.png";
import Thumbnail3 from "../assets/Images/Thumbnail-3.png";
import Thumbnail4 from "../assets/Images/Thumbnail-4.png/";

const Blog = () => {
  return (
    <section id="Blog" className=" w-full max-container">
      <div className="flex flex-col justify-center items-center">
        <p className="font-inter font-medium text-base text-primary">
          BLOGS
        </p>
        <h2 className="font-DMSans text-4xl font-bold text-center text-white-smoke mt-5">
          In the spotlight
        </h2>
        <p className="font-Inter text-base text-center text-slate-gray mt-5 max-w-[700px]">
          Stay updated with the latest trends, tips, and
          insights in business analytics. Explore our
          curated articles designed to empower your
          data-driven journey.
        </p>
      </div>
      {/* Blog */}
      <div className=" grid grid-cols-4 mt-20 gap-8">
        {/* Blog-card */}
        <div className="flex flex-col gap-6">
          <img
            src={Thumbnail1}
            alt="Blog-thumbnail-1"
            className="rounded-3xl"
          />
          <div className="mt-6">
            <p className="font-inter text-sm text-[#A2A89E] ">
              Report
            </p>
            <h3 className="font-DMSans font-bold text-[20px] leading[142%] mt-4 max-w-[245px] text-white-smoke">
              The Rise of AI in Business Analytics: What You
              Need to Know
            </h3>
          </div>
        </div>
        {/* Blog-card */}
        <div className="flex flex-col gap-6">
          <img
            src={Thumbnail2}
            alt="Blog-thumbnail-1"
            className="rounded-3xl"
          />
          <div className="mt-6">
            <p className="font-inter text-sm text-[#A2A89E] ">
              News
            </p>
            <h3 className="font-DMSans font-bold text-[20px] leading[142%] mt-4 max-w-[245px] text-white-smoke">
              Customizing Your DataWise Dashboard: A
              Step-by-Step Guide
            </h3>
          </div>
        </div>
        {/* Blog-card */}
        <div className="flex flex-col gap-6">
          <img
            src={Thumbnail3}
            alt="Blog-thumbnail-1"
            className="rounded-3xl"
          />
          <div className="mt-6">
            <p className="font-inter text-sm text-[#A2A89E] ">
              News
            </p>
            <h3 className="font-DMSans font-bold text-[20px] leading[142%] mt-4 max-w-[245px] text-white-smoke">
              Customizing Your DataWise Dashboard: A
              Step-by-Step Guide
            </h3>
          </div>
        </div>
        {/* Blog-card */}
        <div className="flex flex-col gap-6">
          <img
            src={Thumbnail4}
            alt="Blog-thumbnail-1"
            className="rounded-3xl"
          />
          <div className="mt-6">
            <p className="font-inter text-sm text-[#A2A89E] ">
              Report
            </p>
            <h3 className="font-DMSans font-bold text-[20px] leading[142%] mt-4 max-w-[245px] text-white-smoke">
              Customizing Your DataWise Dashboard: A
              Step-by-Step Guide
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
