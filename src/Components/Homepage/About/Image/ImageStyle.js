const xl2 = {
  Figure: ' 2xl:w-2/5 ',
  Image: ' 2xl:h-full ',
}
const xl = {
  Figure: ' xl:w-2/5 ',
  Image: ' xl:h-5/6 '
}
const lg = {
  Figure: ' lg:flex lg:w-2/5 ',
  Image: ' lg:block lg:h-4/6  '
}
const md = {
  Figure: ' md:items-center md:justify-around md:w-2/5 ',
  Image: ' md:w-full md:h-7/12 '
}
const sm = {
  Figure: ' h-full hidden w-0 ',
  Image: ' hidden bg-cover ',
}

export default function ImageStyle() {
  return {
    Figure: 
      '  ' + 
        xl2.Figure + 
        xl.Figure + 
        lg.Figure + 
        md.Figure + 
        sm.Figure,

    Image: 
      ' bg-cover ' +  
        xl2.Image + 
        xl.Image + 
        lg.Image + 
        md.Image + 
        sm.Image,
  }
}
