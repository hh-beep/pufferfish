const xl2 = {
  Section: ' 2xl:w-3/12 2xl:h-4/5 ',
  Container: '',
  ContainerText: '',
  Figure: ' 2xl:w-1/3 2xl:h-1/5 2xl:p-3',
  FigureImage: ''
}
const xl = {
  Section: '  xl:flex-col xl:w-4/12 xl:h-5/6 xl:justify-between ',
  Container: '',
  ContainerText: ' xl:text-left xl:text-4xl ',
  Figure: ' xl:flex xl:w-2/5 xl:h-1/4 xl:p-6 ',
  FigureImage: ''
}
const lg = {
  Section: ' lg:justify-around ',
  Container: '',
  ContainerText: ' lg:text-3xl ',
  Figure: '',
  FigureImage: '',
}
const md = {
  Section: ' md:w-5/6 ',
  Container: '',
  ContainerText: ' md:text-2xl ',
  Figure: '',
  FigureImage: '',
} 
const sm = {
  Section: ' flex-row h-1/6 w-11/12 ',
  Container: '',
  ContainerText: ' text-center text-xl ',
  Figure: ' hidden ',
  FigureImage: ''
}

export default function TextAreaStyle() {
  return {
    Section: 
      ' flex flex-col ' +
        xl2.Section +
        xl.Section +
        lg.Section +
        md.Section +
        sm.Section,
    


    Container: 
      ' w-full ' +
        xl2.Container +
        xl.Container +
        lg.Container + 
        md.Container +
        sm.Container,

    ContainerText: 
      ' font-semibold text-p-white ' +
        xl2.ContainerText +
        xl.ContainerText +
        lg.ContainerText +
        md.ContainerText +
        sm.ContainerText,



    Figure: 
      ' border justify-around items-center rounded-xl border-p-white ' +
        xl2.Figure +
        xl.Figure +
        lg.Figure +
        md.Figure +
        sm.Figure,

    FigureImage: 
      ' randomClass ' +
        xl2.FigureImage +
        xl.FigureImage +
        lg.FigureImage +
        md.FigureImage +
        sm.FigureImage,
  }
}