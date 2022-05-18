const xl = {
  Container: ' xl:h-2/3 xl:w-3/4 ',

  Figure: ' xl:w-1/2 ',
  FigureImage: ' xl:h-full  ',

  Section: ' xl:w-2/5 ',
  SectionTittle: ' xl:text-4xl ',
  SectionText: ' xl:text-2xl ',
}
const lg = {
  Container: ' lg:h-2/3 lg:w-5/6 ',

  Figure: ' lg:flex lg:w-1/2 ',
  FigureImage: ' lg:h-full ',

  Section: ' lg:w-3/6 ',
  SectionTittle: ' lg:text-3xl ',
  SectionText: ' lg:text-xl ',
}
const md = {
  Container: ' md:w-4/6 md:h-2/3 ',

  Figure: '  ',
  FigureImage: '',

  Section: ' md:w-3/4 ',
  SectionTittle: ' md:text-2xl ',
  SectionText: ' md:text-lg ',
}
const sm = {
  Container: ' w-full h-3/4 ',

  Figure: ' hidden ',
  FigureImage: '',

  Section: ' w-5/6 ',
  SectionTittle: ' text-xl ',
  SectionText: ' text-base ',
}

const ItemStyle = () => {
  return {
    Container:
      ' mx-auto bg-p-white rounded-xl flex flex-row justify-around ' +
        xl.Container +
        lg.Container +
        md.Container +
        sm.Container,

    Figure: 
      ' justify-around ' + 
        xl.Figure + 
        lg.Figure + 
        md.Figure + 
        sm.Figure,

    FigureImage:
      ' bg-contain ' +
        xl.FigureImage +
        lg.FigureImage +
        md.FigureImage +
        sm.FigureImage,

    Section:
      ' flex flex-col justify-around ' +
        xl.Section +
        lg.Section +
        md.Section +
        sm.Section,

    SectionTittle:
      ' font-bold ' +
        xl.SectionTittle +
        lg.SectionTittle +
        md.SectionTittle +
        sm.SectionTittle,

    SectionText:
      ' xxx ' +
        xl.SectionText +
        lg.SectionText +
        md.SectionText +
        sm.SectionText,
  }
}

export default ItemStyle
