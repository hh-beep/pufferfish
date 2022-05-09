const xl2 = ''
const xl = ''
const lg = ' lg:w-2/5 lg:h-2/5 '
const md = ' md:justify-between '
const sm = '  justify-around w-5/6 h-1/4 '

export default function CardStyle() {
  return {
    List:
      " h-5/6 flex flex-row justify-around items-center flex-wrap ",
    
    Item:
      " flex justify-between items-center flex-wrap " +
        xl2 +
        xl +
        lg + 
        md +
        sm,
  }
}