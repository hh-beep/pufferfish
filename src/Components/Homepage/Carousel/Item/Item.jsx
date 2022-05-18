import ItemStyle from "./ItemStyle"



const Item = ({ url, tittle, text }) => {

  const style = ItemStyle()

  return (
    <section className={ style.Container }>
      <figure className={ style.Figure }>
        <img className={ style.FigureImage } src={url} />
      </figure>

      <section className={ style.Section }>
        <h1 className={ style.SectionTittle }>{ tittle }</h1>
        <p className={ style.SectionText }>{ text }</p>
      </section>
    </section>
  )
}

export default Item