const xl2 = {
  Section: '  ',
  SectionTittle: '',
  SectionText: ' 2xl:text-3xl '
}
const xl = {
  Section: ' xl:w-2/5 ',
  SectionTittle: ' ',
  SectionText: ' xl:text-2xl '
}
const lg = {
  Section: ' lg:w-3/6 ',
  SectionTittle: ' lg:text-left lg:text-6xl ',
  SectionText: ' lg:text-left lg:text-xl '
}
const md = {
  Section: ' md:w-5/6 ',
  SectionTittle: ' md:text-5xl md:justify-between ',
  SectionText: ' md:text-lg '
}
const sm = {
  Section: ' h-full w-4/5 justify-around ',
  SectionTittle: ' text-center text-4xl ',
  SectionText: ' text-center text-xl',
}

export default function SectionStyle() {
  return {
    Section:
      ' flex flex-col ' +
        xl2.Section +
        xl.Section +
        lg.Section +
        md.Section +
        sm.Section,

    SectionTittle:
      ' font-bold text-p-white ' +
        xl2.SectionTittle +
        xl.SectionTittle +
        lg.SectionTittle +
        md.SectionTittle +
        sm.SectionTittle,

    SectionText: 
      ' text-p-lgrey ' +
        xl2.SectionText +
        xl.SectionText +
        lg.SectionText +
        md.SectionText +
        sm.SectionText,
  }
}