const xl2 = {
  List: ' 2xl:w-10/12 ',
  ListItem: ' 2xl:h-1/5 ',
  ListItemImage: ''
}
const xl = {
  List: '',
  ListItem: ' xl:w-1/12 ',
  ListItemImage: ' xl:h-1/2 xl:w-1/2 '
}
const lg = {
  List: ' lg:h-5/6 lg:w-11/12  ',
  ListItem: ' lg:w-2/12 lg:h-1/6  ',
  ListItemImage: ' lg:h-1/2 lg:w-1/2 '
}
const md = {
  List: ' md:w-8/12 md:flex-row ',
  ListItem: ' md:w-5/12 md:h-1/6 ',
  ListItemImage: ' md:h-1/2 md:w-1/2 '
}
const sm = {
  List: ' h-4/6 w-6/12 flex-col ',
  ListItem: ' h-1/5 w-4/12 ',
  ListItemImage: ' h-1/2 w-1/2 '
}



export default function ListStyle() {
  return {
    List: 
      ' flex justify-around mx-auto flex-wrap items-center ' +
        xl2.List +
        xl.List +
        lg.List +
        md.List +
        sm.List,


    ListItem: 
      ' flex flex-col justify-around items-center bg-p-white rounded-xl ' +
        xl2.ListItem +
        xl.ListItem +
        lg.ListItem +
        md.ListItem +
        sm.ListItem,
    ListItemImage: 
      '  ' +
        xl2.ListItemImage +
        xl.ListItemImage +
        lg.ListItemImage +
        md.ListItemImage +
        sm.ListItemImage,
  }
}