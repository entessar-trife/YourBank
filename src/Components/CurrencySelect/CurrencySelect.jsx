import './CurrencySelect.css'
import { currencyNames } from '../../Data/CurrencyData';

// Array of currency codes
const currencyCodes = [
    "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN",
    "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL",
    "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY",
    "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP",
    "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", "GHS",
    "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF",
    "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD",
    "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT",
    "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD",
    "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", "MZN",
    "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK",
    "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR",
    "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD",
    "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY",
    "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VES",
    "VND", "VUV", "WST", "XAF", "XCD", "XOF", "XPF", "YER", "ZAR", "ZMW",
    "ZWL"
];

/**
 * CurrencySelect Component
 * This component renders a dropdown for selecting currencies, along with a flag representing the country.
 * 
 * Props:
 * - selectedCurrency: The currently selected currency code .
 * - handleCurrency: Function to handle the change event when a different currency is selected.
 */
const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
     // Extract the country code from the first two characters of the selected currency code.
    const countryCode = selectedCurrency.substring(0, 2);
    return (
        <>
            <div className="currencySelect">
                 {/* Display the flag image for the selected currency */}
                <div className="flagImg">
                    <img src={`https://flagsapi.com/${countryCode}/flat/64.png`} alt="Flag" />
                </div>
                {/* Dropdown to select a currency */}
                <select
                    onChange={handleCurrency}
                    className="currencyDropdown"
                    value={selectedCurrency}>
                    {currencyCodes.map(currency => (
                        <option key={currency} value={currency}> {currency} </option>
                    ))}
                    {/* Note: <option> tags are rendered by the operating system, not the browser, so we can't style them. */}
                </select>
            </div>
            <div className="ES-currencyName fw-300">{currencyNames[selectedCurrency]}</div> {/* Lookup the name from the imported map */}
        </>
    )
}

export default CurrencySelect
