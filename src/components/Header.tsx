import Logo from './Logo';

interface Header {
  logo: object;
}

const Header: React.FC<Header> = ({ logo }) => {
  const { src, alt, width, height } = logo;
  console.log(src);

  return (
    <header className="p-2 bg-[rgb(46,46,46)] flex justify-between">
      <Logo src={src} alt={alt} width={width} height={height} />
    </header>
  );
};

export default Header;
