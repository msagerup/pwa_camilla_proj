import { Separator } from '@/components/ui/separator';
import { useGlobalContext } from '@/context/store';
import { MenuSection } from '@/utils/types';

const renderMenu = (menu: MenuSection[], menuSection: any) => {
  const selectedMenu = menu.filter((item) => {
    return item.menuSection === menuSection;
  });

  return (
    <>
      {selectedMenu[0].data.map((item, index: any) => {
        return (
          <div key={index}>
            <Separator className='my-4 bg-gray-400' />
            <div className='flex gap-12'>
              <div className='flex gap-3'>
                <div className='self-center text-sm uppercase'>
                  {item.subName}
                </div>
                <Separator
                  orientation='vertical'
                  className=' bg-gray-400 h-full'
                />
              </div>
              <div className='flex-grow text-right text-md gap-3 underline uppercase flex flex-col'>
                {item.links.map((link, index) => {
                  return <div key={index}>{link}</div>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const MenuSectionDivider = ({ menu }: { menu: any }) => {
  const { rightMenuSection } = useGlobalContext();

  return <>{renderMenu(menu, rightMenuSection)}</>;
};

export default MenuSectionDivider;
