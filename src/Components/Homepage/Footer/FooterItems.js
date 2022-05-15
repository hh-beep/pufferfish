import Youtube from "../../../Images/Svg's/youtube.svg"
import Github from "../../../Images/Svg's/github.svg"
import Facebook from "../../../Images/Svg's/facebook.svg"
import Instagram from "../../../Images/Svg's/instagram.svg"


export default function FooterItems() {
  return [
    {
      id: 1,
      image: Youtube,
      url: 'https://www.youtube.com/channel/UCf8ntoig8UMotlDUc6sQFAA'
    },
    {
      id: 2,
      image: Github,
      url: 'https://www.github.com/hh-beep/pufferfish'
    },
    {
      id: 3,
      image: Facebook,
      url: 'https://www.facebook.com/profile.php?id=100081341345593'
    },
    {
      id: 4,
      image: Instagram,
      url: 'https://www.instagram.com/pufferfish_sublimation/'
    }
  ]
}