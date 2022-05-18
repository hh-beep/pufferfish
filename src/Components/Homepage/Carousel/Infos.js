import Camisa from '../../../Images/Produtos/Camisa.png'
import Moletom from '../../../Images/Produtos/Moletom.png'
import Garrafa from '../../../Images/Produtos/Garrafa.png'


const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'



const Infos = () => {
  return [
    {
      id: 1,
      url: Camisa,
      tittle: 'Camisas',
      text: lorem,
    },
    {
      id: 2,
      url: Moletom,
      tittle: 'Moletons',
      text: lorem,
    },
    {
      id: 3,
      url: Garrafa,
      tittle: 'Garrafas',
      text: lorem,
    }
  ]
}

export default Infos