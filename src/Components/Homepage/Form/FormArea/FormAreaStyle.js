const xl2 = {
  Form: ' 2xl:w-6/12 2xl:h-4/5 ',
  FormContainer: ''
}
const xl = {
  Form: ' xl:h-5/6 xl:w-7/12 ',
  FormContainer: ' xl:h-5/6 xl:w-5/6 ',
}
const lg = {
  Form: ' lg:h-4/6 lg:w-5/6 ',
  FormContainer: ' lg:w-10/12 ',
}
const md = {
  Form: ' md:h-4/6 md:w-11/12 ',
  FormContainer: ' md:h-5/6 md:w-11/12 ',
}
const sm = {
  Form: ' h-4/6 w-11/12 ',
  FormContainer: ' h-5/6 w-11/12 ',
}



export default function FormAreaStyle() {
  return {
    Form: 
      ' bg-p-white rounded-xl flex justify-around items-center' +
        xl2.Form +
        xl.Form +
        lg.Form +
        md.Form +
        sm.Form,

    FormContainer: 
      ' flex flex-col justify-around  ' +
        xl2.FormContainer +
        xl.FormContainer +
        lg.FormContainer +
        md.FormContainer +
        sm.FormContainer,
  }
}