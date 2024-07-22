import { useGlobalContext } from '@/context/store';
import MenuSectionDivider from '../MenuSectionDevider';

const menuItems = [
  {
    menuSection: 'context',
    data: [
      {
        subName: 'Fluid',
        links: ['Fluid input', 'Fluid Output'],
      },
      {
        subName: 'Protein',
        links: ['Protein input', 'weight input'],
      },
      {
        subName: 'Medicine',
        links: ['New entry', 'view entries'],
      },
    ],
  },
  {
    menuSection: 'account',
    data: [
      {
        subName: 'profile',
        links: ['input', 'output'],
      },
      {
        subName: 'settings',
        links: ['other link', 'other link2'],
      },
    ],
  },
  {
    menuSection: 'settings',
    data: [
      {
        subName: 'acccount settings',
        links: ['input', 'output'],
      },
      {
        subName: 'settings',
        links: ['other link', 'other link2'],
      },
    ],
  },
];

const getSections = (section: string) => {
  switch (section) {
    case 'context':
      return (
        <>
          <MenuSectionDivider menu={menuItems} />
        </>
      );
    case 'account':
      return (
        <>
          <MenuSectionDivider menu={menuItems} />
        </>
      );
    case 'settings':
      return <MenuSectionDivider menu={menuItems} />;
    default:
      return null;
  }
};

const SectionContainer = () => {
  const { rightMenuSection } = useGlobalContext();

  const sections = getSections(rightMenuSection);


  return <>{sections}</>;
};

export default SectionContainer;
