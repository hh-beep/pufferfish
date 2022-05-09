const xl2 = {
  Section: ' 2xl:w-4/6 2xl:h-1/6 ',
  SectionTittle: ''
}
const xl = {
  Section: '',
  SectionTittle: ' xl:text-6xl '
}
const lg = {
  Section: ' ',
  SectionTittle: ' lg:text-5xl '
}
const md = {
  Section: '',
  SectionTittle: ' md:text-4xl '
}
const sm = {
  Section: ' ',
  SectionTittle: ' text-center text-3xl '
}

export default function TittleStyle() {
  return {
    Section: ' h-1/6 flex mx-auto justify-around items-center ' +
    xl2.Section +
    xl.Section +
    lg.Section +
    md.Section +
    sm.Section,

    SectionTittle: ' text-p-white text-bold ' +
    xl2.SectionTittle +
    xl.SectionTittle +
    lg.SectionTittle +
    md.SectionTittle +
    sm.SectionTittle,
  }
}
