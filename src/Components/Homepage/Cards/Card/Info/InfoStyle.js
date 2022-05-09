const xl2 = {
  Info: '',
  InfoTittle: ' 2xl:text-2xl ',
  InfoText: ' 2xl:text-xl '
}
const xl = {
  Info: '',
  InfoTittle: ' xl:text-xl ',
  InfoText: ' xl:text-lg '
}
const lg = {
  Info: ' lg:w-3/6 ',
  InfoTittle: ' lg:text-xl ',
  InfoText: ' text-base '
}
const md = {
  Info: ' md:w-4/6 ',
  InfoTittle: ' md:text-left ',
  InfoText: ' md:text-left'
}
const sm = {
  Info: ' w-5/6 ',
  InfoTittle: ' text-center text-base',
  InfoText: ' text-center text-md '
}

export default function InfoStyle() {
  return {
    Info: 
      ' flex flex-col justify-around h-full ' +
        xl2.Info +
        xl.Info +
        lg.Info +
        md.Info +
        sm.Info,
    
    InfoTittle:
      ' text-p-white text-lg ' +
        xl2.InfoTittle +
        xl.InfoTittle +
        lg.InfoTittle +
        md.InfoTittle +
        sm.InfoTittle,

    InfoText:
      ' text-p-lgrey text-base ' + 
      xl2.InfoText +
      xl.InfoText +
      lg.InfoText +
      md.InfoText +
      sm.InfoText,
  }
}