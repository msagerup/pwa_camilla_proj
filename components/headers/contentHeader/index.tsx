const ContentHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <>
      <div className='flex flex-col items-start mb-4'>
        <h2 className='text-xl '>{title}</h2>
        <div className='flex items-center gap-4 mt-2'>
          <div className='w-20 h-1 bg-gray-300' />
          <p className='text-gray-500 text-base text-left'>{subTitle}</p>
        </div>
      </div>
      <hr className='h-px  bg-gray-400 border-0 dark:bg-gray-700' />
    </>
  );
};

export default ContentHeader;
