const xl2 = {
  Svg: '',
  SvgImage: '',
}
const xl = {
  Svg: '',
  SvgImage: '',
}
const lg = {
  Svg: ' lg:w-2/6 ',
  SvgImage: ' lg:w-2/3 lg:h-full ',
}
const md = {
  Svg: ' md:w-1/6 md:flex ',
  SvgImage: ' md:w-3/4 md:h-3/5 ',
}
const sm = {
  Svg: ' hidden ',
  SvgImage: '',
}


export default function SvgStyle() {
  return {
    Svg: 
      " justify-around items-center bg-p-white rounded-xl py-4 " +
      xl2.Svg +
      xl.Svg +
      lg.Svg +
      md.Svg +
      sm.Svg,

    SvgImage: 
      "  " +
      xl2.SvgImage +
      xl.SvgImage +
      lg.SvgImage +
      md.SvgImage +
      sm.SvgImage,
  }
}