const xl2 = ''
const xl = ' xl:flex-row xl:justify-between '
const lg = ''
const md = ''
const sm = ' justify-around h-5/6 my-auto w-11/12 md:w-10/12 flex-col  '



export default function FormStyle() {
  return {
    Container: 'h-screen w-full flex bg-p-black mt-20',
    
    Section: 
      ' flex items-center mx-auto ' +
        xl2 +
        xl +
        lg +
        md +
        sm,
  }
}