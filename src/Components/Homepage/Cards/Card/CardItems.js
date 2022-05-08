//Svg's
import Clock from "../../../../Images/Svg's/clock.svg"
import Gift from "../../../../Images/Svg's/gift.svg"
import Package from "../../../../Images/Svg's/package.svg"
import Message from "../../../../Images/Svg's/message.svg"


export default function CardItems() {
  return [
    
    
    //Card 1
    { 
      logo: Clock,
      tittle: "Prazos de entrega curtos",  
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },


    //Card 2
    { 
      logo: Package,
      tittle: "Entregas a qualquer local",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },


    //Card 3
    { 
      logo: Gift,
      tittle: "Melhor sugestão para presentes", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },


    //Card 4
    { 
      logo: Message,
      tittle: "Atendimento via mensagem", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]
}