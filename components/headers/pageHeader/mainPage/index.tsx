const MainPageHeader = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-3xl font-bold '>Fluid Restriction tracker</h2>
      <div className='flex items-center gap-4 mt-2'>
        <div className='w-20 h-1 bg-gray-300' />
        <p className='text-gray-500 text-base text-left'>
          a portal of SIADH and hypothermia management
        </p>
      </div>
    </div>
  );
};

export default MainPageHeader;
