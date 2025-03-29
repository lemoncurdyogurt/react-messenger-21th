const Theme = {
  scroll: {
    hideScrollbar: `
      scrollbar-width: none;  
      -ms-overflow-style: none;  
      &::-webkit-scrollbar {
        display: none;  
      }
      &::-webkit-scrollbar-track {
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        display: none; 
      }
    `,
  },
};

export default Theme;