import ItemInterface from "./ItemInterface"

interface ItemProps {
  item: ItemInterface
}

const Item = ({ item }: ItemProps) => {

  if (item.state != "active") return;

  const title: string = item.title.length <= 50 ? item.title : item.title.substring(0, 50) + "..."

  const renderPrice = (currency: string, price: string) => {
    let str: string
    if (currency === "USD") {
      str = "$" + price
    } else if (currency === "EUR") {
      str = "\u20AC" + price
    } else {
      str = price + " " + currency
    }
    return (
      <>
        <p className="item-price">{str}</p>
      </>
    )
  }

  const level: string = item.quantity <= 10 ? "level-low" : item.quantity <= 20 ? "level-medium" : "level-high"

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        {renderPrice(item.currency_code, item.price)}
        <p className={"item-quantity " + level}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default Item