import './Coins.css'

const CoinItem = ({ coin }) => {
  const {
    market_cap_rank,
    image,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    market_cap,
  } = coin;
  console.log(coin);
  console.log("coinItem")
  return (
    <div className="coin-row">
      <p>{market_cap_rank}</p>
      <div className="img-symbol">
        <img src={image} alt="" />
        <p>{symbol.toUpperCase()}</p>
      </div>
      <p>${current_price.toLocaleString()} </p>
      <p>{price_change_percentage_24h.toFixed(2)}% </p>
      <p className="hide-mobile">${total_volume.toLocaleString()} </p>
      <p className="hide-mobile">${market_cap.toLocaleString()} </p>
    </div>
  );
};

export default CoinItem;
