interface MainImageInterface {
  url_570xN: string;
}

export default interface ItemInterface {
  listing_id: number;
  url: string;
  MainImage: MainImageInterface;
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
}


