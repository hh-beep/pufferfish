const XL2 = {
  Figure: ' ',
  Image: ' 2xl:h-3/5 2xl:w-4/6 '
} 

const XL = {
  Figure: ' xl:w-2/6 ',
  Image: ' xl:w-3/4 xl:h-3/5 '
}
const Large = {
  Figure: ' lg:w-2/6 lg:h-full ',
  Image: ' lg:w-3/5 lg:h-2/5 '
}
const medium = {
  Figure: ' md:h-2/6 ',
  Image: ' md:h-full md:w-auto  '
}
const small = {
  Figure: '  h-1/5 w-full flex-row items-center ',
  Image: ' h-full w-auto '
}

export default function ImageStyle() {
  return {
    Figure: 
      " flex justify-around " + 
        XL2.Figure + 
        XL.Figure + 
        Large.Figure + 
        medium.Figure + 
        small.Figure,

    Image:
      XL2.Image + 
      XL.Image + 
      Large.Image + 
      medium.Image + 
      small.Image,
  }
}