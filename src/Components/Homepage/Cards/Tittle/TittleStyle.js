const xl2 = {
  Section: ' 2xl:w-4/6 2xl:h-1/6 ',
  SectionTittle: ''
}
const xl = {
  Section: '',
  SectionTittle: ''
}
const lg = {
  Section: '',
  SectionTittle: ''
}
const md = {
  Section: '',
  SectionTittle: ''
}
const sm = {
  Section: '',
  SectionTittle: ''
}

export default function TittleStyle() {
  return {
    Section: ' flex mx-auto justify-around items-center ' +
    xl2.Section +
    xl.Section +
    lg.Section +
    md.Section +
    sm.Section,

    SectionTittle: ' text-p-white text-bold text-6xl ' +
    xl2.SectionTittle +
    xl.SectionTittle +
    lg.SectionTittle +
    md.SectionTittle +
    sm.SectionTittle,
  }
}
