const MainPageHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className='fixed'>
      <div className='bg-gradient-to-r from-[#d9f5e7] to-blue-300 drop-shadow-md  '>
        <div className='flex flex-col container px-5 mx-auto py-10 '>
          <h2 className='text-[25px] font-bold text-white drop-shadow-lg tracking-widest'>
            {title}
          </h2>
          <div className='flex items-center gap-4 mt-2'>
            <div className='w-20 h-1 bg-gray-300' />
            <p className='text-muted-foreground text-sm text-left tracking-widest'>
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPageHeader;
