import Brand1 from "../../assets/brands/1.svg";
import Brand2 from "../../assets/brands/2.svg";
import Brand3 from "../../assets/brands/3.svg";
import Brand4 from "../../assets/brands/4.svg";
import Brand5 from "../../assets/brands/5.svg";

const Brand = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container py-12">
        <h1 className="text-center">Powering next-gen companies</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src={Brand1} alt="brand-image" />
          <img src={Brand2} alt="brand-image" />
          <img src={Brand3} alt="brand-image" />
          <img src={Brand4} alt="brand-image" />
          <img src={Brand5} alt="brand-image" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
