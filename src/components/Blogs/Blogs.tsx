import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";
import BlogCard from "./BlogCard";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Realtime analytics",
    description: `“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.`,
    author: "Someone",
    date: "April 22, 2022",
    delay: "0",
  },
  {
    id: 2,
    image: Img2,
    title: "Realtime analytics",
    description: `“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.`,
    author: "Someone",
    date: "April 22, 2022",
    delay: "250",
  },
  {
    id: 3,
    image: Img3,
    title: "Realtime analytics",
    description: `“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us.`,
    author: "Someone",
    date: "April 22, 2022",
    delay: "500",
  },
];

const Blogs = () => {
  return (
    <>
      <section
        id="blogs"
        className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14"
      >
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
          <div className="text-center">
            <button
              data-aos="fade-up"
              data-aos-offset="0"
              className="btn-primary"
            >
              View All Posts
            </button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blogs;
