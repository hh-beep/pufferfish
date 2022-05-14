const xl2 = ''
const xl = ' xl:flex-row xl:justify-between '
const lg = ''
const md = ' md:mt-40 '
const sm = ' justify-around h-5/6 mt-44 w-10/12 flex-col  '



export default function FormStyle() {
  return {
    Container: 'h-screen w-full flex bg-p-black',
    
    Section: 
      ' flex items-center mx-auto ' +
        xl2 +
        xl +
        lg +
        md +
        sm,
  }
}