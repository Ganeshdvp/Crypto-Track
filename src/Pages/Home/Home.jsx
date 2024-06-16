import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin)
    }
  }
  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter(
      (item) => {
        return item.name.toLowerCase().includes(input.toLowerCase())
      }
    )
    setDisplayCoin(coins);
  }
  useEffect(
    () => {
      setDisplayCoin(allCoin);
    }, [allCoin]
  )
  return (
    <div className='home'>
      <div className='inside-home'>
        <h1>Largest <br /> Crypto Market </h1>
        <p> Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos..</p>
        <form onSubmit={searchHandler}>
          <input type='text' onChange={inputHandler} list='coinlist' value={input} placeholder='Search crypto...' />
          <datalist id='coinlist'>{allCoin.map(
            (ele, index) =>
              (<option key={index} value={ele.name} />)
          )}</datalist>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: 'center' }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
          {
            displayCoin.slice(0, 10).map(
              (ele, index) => (
                <Link to={`/coin/${ele.id}`} className="table-layout" key={index}>
                  <p>{ele.market_cap_rank}</p>
                  <div>
                    <img src={ele.image} alt="" />
                    <p>{ele.name + " - " + ele.symbol}</p>
                  </div>
                  <p>{currency.symbol} {ele.current_price.toLocaleString()}</p>
                  <p className={ele.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                    {Math.floor(ele.price_change_percentage_24h * 100) / 100}
                  </p>
                  <p className='market-cap'>{currency.symbol} {ele.market_cap.toLocaleString()}</p>
                </Link>
              )
            )
          }
        
      </div>
    </div>
  )
}

export default Home;
