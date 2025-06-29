import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/CoinContext';
import LineChat from '../../components/LiveChat/LiveChat'

const Coin = () => {
  const { coinid } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {currency} = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-91Na3gF37jLkMimFB9B4FtwP' }
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err))
  }
  const fetchHistoricalData = async ()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-FTnpaxVsW3ZXd6hn9yVLU2su'}
    };
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }

  useEffect(
    ()=>{
      fetchCoinData();
      fetchHistoricalData();
    },[currency]
  )

  // only render when both coinData and historicalData and valid.
  if (
    !coinData ||
    !historicalData ||
    !coinData.image ||
    !coinData.symbol ||
    !coinData.name ||
    !coinData.market_data ||
    !coinData.market_data.current_price ||
    !coinData.market_data.market_cap ||
    !coinData.market_data.high_24h ||
    !coinData.market_data.low_24h
  ) {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
  
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt="coin-graph" />
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
        <div className="coin-chart">
          <LineChat historicalData={historicalData}/>
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Crypto Price</li>
            <li>{currency.symbol} {coinData.market_data.current_price [currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>Market cap</li>
            <li>{currency.symbol} {coinData.market_data.market_cap [currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24H High</li>
            <li>{currency.symbol} {coinData.market_data.high_24h [currency.name].toLocaleString()}</li>
          </ul>
          <ul>
            <li>24H Low</li>
            <li>{currency.symbol} {coinData.market_data.low_24h[currency.name].toLocaleString()}</li>
          </ul>
        </div>
      </div>
    );
}

export default Coin
