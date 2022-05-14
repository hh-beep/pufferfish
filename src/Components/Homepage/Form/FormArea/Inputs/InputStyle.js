const md = ' md:h-2/6  '
const sm = ' h-1/4 '

export default function InputStyle() {
  return {
    Container: ' flex flex-col md:justify-between justify-around h-3/6 w-full ',
    ContainerInput: 
      ' rounded-xl border-4 border-p-dgrey px-8 text-p-dgrey bg-p-white ' +
        md +
        sm,
  }
}