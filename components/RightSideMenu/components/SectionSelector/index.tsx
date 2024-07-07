import { useGlobalContext } from '@/context/store';
import Nav from '../sections/Nav';
import Profile from '../sections/Profile';
import Settings from '../sections/Settings';

const getMenuSection = (value: string) => {
  switch (value) {
    case 'context':
      return <Nav />;

    case 'account':
      return <Profile />;
    case 'settings':
      return <Settings />;
    default:
      return <Nav />;
  }
};

const SectionSelector = () => {
  const { rightMenuSection } = useGlobalContext();
  const menuSection = getMenuSection(rightMenuSection);

  return (
    <div>
      <div className='px-5 my-8'>{menuSection}</div>
    </div>
  );
};

export default SectionSelector;
