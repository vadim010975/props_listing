import { FC } from "react"
import Item from "./Item"
import ItemInterface from "./ItemInterface"

interface ListingProps {
  items: Array<ItemInterface>
}

const Listing: FC<ListingProps> = ({ items = [] }) => {

  return (
    <div className="item-list">
      {items.map((item) => (
        <Item item={item} key={item.listing_id}/>
      ))}
    </div>
  )
}

export default Listing