type Data = {
  title: string;
  link: string;
};

type Props = {
  data: Data[];
};

const FooterLinks = ({ data }: Props) => {
  return (
    <div className="py-8 px-4">
      <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
        Company
      </h1>
      <ul className={`flex flex-col gap-3`}>
        {data.map((link) => (
          <li
            key={link.title}
            className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
          >
            <span>{link.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
