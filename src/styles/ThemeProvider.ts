const Theme={
  
  scroll: 
  
  
  {none: `
  /* Firefox, IE, Edge, Chrome, Safari 모두에서 안 되게*/
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
`}
}
export default Theme;