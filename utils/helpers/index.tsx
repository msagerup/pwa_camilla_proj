export const getFullTitleNameAndDesc = (tabName: string) => {
  switch (tabName) {
    case 'historical':
      return {
        title: 'Historical data',
        desc: 'Overview of historical data based on data and time',
      };
    case 'input':
      return {
        title: 'Add amount',
        desc: 'Enter data points for liquid / protein / weight / lab result / medication consumption',
      };
    case 'stats':
      return {
        title: 'Statistical overview',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, similique?',
      };
    default:
      return null;
  }
};
