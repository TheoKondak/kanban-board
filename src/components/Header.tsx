import { VscColorMode } from 'react-icons/vsc';
import toggleDarkMode from '../helper/toggleDarkMode';
import Logo from './Logo';

interface Header {
  logo: object;
}

const Header: React.FC<Header> = ({ logo }) => {
  const { src, alt, width, height } = logo;

  return (
    <header className="p-2 rounded-none backdrop-blur-md shadow-lg flex justify-between h-10">
      <Logo src={src} alt={alt} width={width} height={height} />
      {/* <div>Reactive Kanban</div> */}
      <button onClick={toggleDarkMode} className="flex items-center justify-center p-1.5 bg-primary-700 dark:bg-primary-200">
        <VscColorMode className="block w-4 h-4 text-primary-200 dark:text-primary-700" />
      </button>
    </header>
  );
};

export default Header;
