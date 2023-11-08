type HeaderTypes = {
  title: string;
};
const PageHeader = ({ title }: HeaderTypes) => {
  return (
    <header className="w-full text-center bg-primary-color">
      <h1 className="uppercase text-white font-semibold py-[6rem] text-[2.5rem] tracking-wider">
        {title}
      </h1>
    </header>
  );
};

export default PageHeader;
