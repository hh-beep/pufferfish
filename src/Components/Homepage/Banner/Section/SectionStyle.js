const XL = {
  Section: ' xl:w-2/5 ',
  SectionTittle: ' xl:text-7xl xl:w-3/4 ',
  SectionText: ' xl:text-3xl xl:w-3/4  ',
}
const Large = {
  Section: ' lg:w-3/6 lg:h-full lg:mx-0 ',
  SectionTittle: ' lg:text-left lg:mx-0 ',
  SectionText: ' lg:mx-0 lg:text-left '
}
const medium = {
  Section: ' ',
  SectionTittle: ' md:text-6xl md:w-full ',
  SectionText: ' md:text-xl '
}
const small = {
  Section: ' h-3/6 w-4/5 mx-auto ',
  SectionTittle: ' w-5/6 text-4xl text-center  ',
  SectionText: ' text-center text-base mx-auto w-full '
}

export default function SectionStyle() {
  return {
    Section:
      " flex flex-col justify-around " + 
        XL.Section + 
        medium.Section + 
        Large.Section + 
        small.Section,

    SectionTittle:
      " mx-auto text-p-white font-extrabold leading-snug " + 
        XL.SectionTittle + 
        Large.SectionTittle +
        medium.SectionTittle + 
        small.SectionTittle,

    SectionText:
      " w-4/5 text-lg text-p-lgrey font-medium text-xl " + 
        XL.SectionText + 
        Large.SectionText +
        medium.SectionText + 
        small.SectionText,
  }
}