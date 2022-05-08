const xl2 = {
  Svg: '',
  SvgImage: '',
}
const xl = {
  Svg: '',
  SvgImage: '',
}
const lg = {
  Svg: '',
  SvgImage: '',
}
const md = {
  Svg: '',
  SvgImage: '',
}
const sm = {
  Svg: '',
  SvgImage: '',
}


export default function SvgStyle() {
  return {
    Svg: 
      " w-2/6 flex justify-around items-center bg-p-white rounded-lg py-4 " +
      xl2.Svg +
      xl.Svg +
      lg.Svg +
      md.Svg +
      sm.Svg,

    SvgImage: 
      " w-2/3 h-full " +
      xl2.SvgImage +
      xl.SvgImage +
      lg.SvgImage +
      md.SvgImage +
      sm.SvgImage,
  }
}