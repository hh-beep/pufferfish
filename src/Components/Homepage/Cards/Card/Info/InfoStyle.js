const xl2 = {
  Info: '',
  InfoTittle: '',
  InfoText: ''
}
const xl = {
  Info: '',
  InfoTittle: '',
  InfoText: ''
}
const lg = {
  Info: '',
  InfoTittle: '',
  InfoText: ''
}
const md = {
  Info: '',
  InfoTittle: '',
  InfoText: ''
}
const sm = {
  Info: '',
  InfoTittle: '',
  InfoText: ''
}

export default function InfoStyle() {
  return {
    Info: 
      ' w-3/6 flex flex-col justify-around h-full w-full ' +
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