import Logo from './Logo';

interface Header {
  logo: object;
}

const Header: React.FC<Header> = ({ logo }) => {
  const { src, alt, width, height } = logo;

  return (
    <header className="p-2 rounded-none bg-[rgb(46,46,46)] flex justify-between h-10">
      <Logo src={src} alt={alt} width={width} height={height} />
      {/* <div>Reactive Kanban</div> */}
    </header>
  );
};

export default Header;
