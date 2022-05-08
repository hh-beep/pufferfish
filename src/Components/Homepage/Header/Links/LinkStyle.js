const hover = {
  Item: 
    " transition ease-in-out duration-300 md:hover:bg-p-white md:hover:text-p-black ",
}

const mediumScreen = {
  List:
    " md:h-auto md:flex-row md:justify-around md:basis-1/2 ",

  Item: 
    " md:py-3 md:w-1/5 md:text-center md:text-3xl ",
}

export default function LinkStyle() {
  return {
    List:
      " w-full order-last flex flex-col mt-2 items-center justify-around " + mediumScreen.List,
    
    Item: 
      " w-1/3 text-p-lgrey py-3 text-center text-2xl rounded-md " + mediumScreen.Item  + hover.Item,
  }
} 