import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "David Calathan - Director of Design Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Smith - Director of Operations, New York",
    text: "The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonials section  */}
          <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
            <Slider {...settings}>
              {testimonialData.map((testimoni) => (
                <div key={testimoni.id} className="my-6">
                  {/* card */}
                  <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                    <img
                      src={testimoni.img}
                      alt="testimoni image"
                      className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                    />
                    <div className="space-y-4">
                      <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                        "{testimoni.text}"
                      </p>
                      <h1 className="text-xl font-bold">{testimoni.name}</h1>
                    </div>
                    <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                      ,,
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
