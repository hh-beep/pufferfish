const lg = {
  Container: ' lg:w-1/2 ',
  ContainerTittle: ' lg:text-3xl '
} 
const md = {
  Container: ' md:w-5/6 ',
  ContainerTittle: ' md:text-2xl '
} 
const sm = {
  Container: ' w-11/12 h-1/6 ',
  ContainerTittle: ' text-xl '
} 



export default function FooterStyle() {
  return {
    Footer: 
      ' bg-p-black w-full h-4/5 mt-auto flex flex-col justify-around ' +
        lg.Footer +
        sm.Footer,



    Container: 
      ' mx-auto text-center flex flex-col justify-between ' +
        lg.Container +
        md.Container +
        sm.Container,

    ContainerTittle: 
      ' text-p-white font-semibold ' +
        lg.ContainerTittle +
        md.ContainerTittle +
        sm.ContainerTittle,
  }
}