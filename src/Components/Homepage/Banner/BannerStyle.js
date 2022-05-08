const mediumScreen = " lg:h-3/5 lg:flex-row "
const smallScreen = " w-11/12 h-4/5 lg:mt-40 mt-36 flex-col "

export default function BannerStyle() {
  return {
    Container :
      " h-screen flex bg-p-black w-screen justify-around ",

    Banner:
      " flex justify-around flex-wrap " + mediumScreen + smallScreen,
  }
}