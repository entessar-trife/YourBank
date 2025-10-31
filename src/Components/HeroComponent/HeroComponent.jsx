import React, { useEffect, useState } from 'react'
import './HeroComponent.css'
import tickIcon from '../../assets/imgs/Home_icons/tick-Icon.png'
import { Link } from 'react-router-dom'
import DollarSign from '../../assets/imgs/Home_icons/Shape.png'
import EuroSign from '../../assets/imgs/Home_icons/euro-currency-symbol.png'
import Bitcoin from '../../assets/imgs/Home_icons/Shape2.png'
import ethereum from '../../assets/imgs/Home_icons/Group.png'
import plus from '../../assets/imgs/Home_icons/Vector3.png'
import TitleComponent from '../TitleComponent/TitleComponent'
import CurrencySelect from '../CurrencySelect/CurrencySelect'
import TransactionBox from '../TransactionBox/TransactionBox'

export default function HeroComponent() {
  // Exchange API needed Variables 
  const [amount, setAmount] = useState('5,0000');
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState('12.00');
  const [isLoading, setIsLoading] = useState(false);

  // isLogin: to control the "open account" button visibility
  const [isLogin, setIsLogin] = useState(false);


  // function to fetch the exchange rate and update the result
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY; // Load API key from environment variables
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

    setIsLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Something went wrong!");
      const data = await response.json();
      const numericAmount = parseFloat(amount); // Convert amount to number
      const rate = (data.conversion_rate * numericAmount).toFixed(2); // Calculate exchange result
      setResult(`${rate}`)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  //fetch exchange rate on initial render
  useEffect(() => getExchangeRate, []);

  // Hide the "Open Account" button when signed in and re-display it again upon logging out
  useEffect(() => {

    const StoredUser = JSON.parse(localStorage.getItem('user'));
    setIsLogin(StoredUser);

    const handleLoginStatusChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem('user'));
      setIsLogin(updatedUser);
    };
    // Listen for custom login status change events
    window.addEventListener('loginStatusChanged', handleLoginStatusChange);

    //  Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('loginStatusChanged', handleLoginStatusChange);
    };
  }, []);

  return (
    <>
      <div className='es-heroContainer px-162 pb-150'>
        {/* Left Section */}
        <div className='es-heroLeftContent' data-aos="zoom-in" data-aos-duration="2000">
          <div className='es-subTitle'>
            <img src={tickIcon} alt="tick-icon" />
            <span className='fw-300'>No LLC Required, No Credit Check.</span>
          </div>
          <div className="es-mainTitle">
            <TitleComponent
              title="Welcome to YourBank Empowering Your Financial Journey"
              desc="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
              highlightedWords={["Financial", "Journey"]}
              fw={false}
            />
          </div>
          {!isLogin && ( // Show "Open Account" button only if not logged in
            <div className="es-heroBtn f-18">
              <Link
                to='/signUp'
                onClick={() => {
                  localStorage.setItem("activePath", JSON.stringify("/signUp"))
                  window.dispatchEvent(new Event("activePathChanged"))
                }}>
                Open Account
              </Link>
            </div>
          )}

        </div>

        {/* Right Section: Contains transaction and exchange-related features*/}
        <div className="es-rightSide" data-aos="zoom-in" data-aos-duration="2000">
          {/* Monthly Income Section */}
          <div className="es-monthlyIncome">
            <div className="es-icon">
              <img src={plus} alt="plus Icon" />
            </div>
            <div className="es-plusInfo">
              <span className='fw-400'>+ $5000,00</span>
              <span className='fw-300'>Monthly Income</span>
            </div>
          </div>
          <div className='es-heroRightContent'>
            <div className='bg-img' alt="imgScreen" />
            {/* Transactions Section */}
            <div className="es-yourTrans">
              <h4 className='fw-500'>Your Transactions</h4>
              {[
                { name: "Joel Kenley", amount: "-$68.00", opacityClass: "op-100" },
                { name: "Mark Smith", amount: "-$68.00", opacityClass: "op-50" },
                { name: "Lenen Roy", amount: "-$68.00", opacityClass: "op-20" }
              ].map((box, index) => (
                <TransactionBox
                  key={index}
                  id={index}
                  name={box.name}
                  amount={box.amount}
                  opacityClass={box.opacityClass}
                />
              ))}
            </div>

            {/* Exchange Form */}
            <form className="exchange converterForm" onSubmit={handleFormSubmit}>
              <h4 className='fw-500'>Money Exchange</h4>
              <div className="es-exchangeBox">
                <div className="es-miniBox">
                  <div className='es-upper'>
                    <CurrencySelect
                      selectedCurrency={fromCurrency}
                      handleCurrency={e => setFromCurrency(e.target.value)} // Update selected currency
                    />
                  </div>
                  <div className="es-currencyValue">
                    <input
                      type="text"
                      className="formInput"
                      value={amount}
                      onChange={e => setAmount(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="es-miniBox">
                  <div className='es-upper'>
                    <CurrencySelect
                      selectedCurrency={toCurrency}
                      handleCurrency={e => setToCurrency(e.target.value)}
                    />
                  </div>
                  <div className="es-currencyValue exchange-rate-result">
                    {isLoading ? '0.00' : result} {/* Display result or loading state */}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={`exchangeBtn submit-button fw-400 ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Exchange'}
              </button>
            </form>
          </div>

          {/* Supported Currency Section */}
          <div className="es-supportedCurrency">
            <div className="es-supportedCurrencyContainer">
              <span className='fw-400'>Supported Currency</span>
              <div className="es-currencyIcons">
                {[
                  { src: DollarSign, alt: "Dollar Sign" },
                  { src: EuroSign, alt: "Euro Sign" },
                  { src: Bitcoin, alt: "Bitcoin sign" },
                  { src: ethereum, alt: "ethereum sign" }
                ].map((currency, index) => (
                  <div className="es-currencyImg" key={index}>
                    <img src={currency.src} alt={currency.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}