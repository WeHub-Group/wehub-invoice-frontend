/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

const Currencies = {
    NGN: {
        format: 'NGN',
        name: 'Nigerian Naira (NGN)'
    },
    USD: {
        format: 'USD',
        name: 'United States Dollar (USD)'
    },
    EUR: {
        format: 'EUR',
        name: 'European Euro (EUR)'
    },
    JPY: {
        format: 'JPY',
        name: 'Japanese Yen (JPY)'
    },
    GBP: {
        format: 'GBP',
        name: 'British Pound (GBP)'
    },
    AUD: {
        format: 'AUD',
        name: 'Australian Dollar (AUD)'
    },
    CAD: {
        format: 'CAD',
        name: 'Canadian Dollar (CAD)'
    },
    CHF: {
        format: 'CHF',
        name: 'Swiss Franc (CHF)'
    },
    CNY: {
        format: 'CNY',
        name: 'Chinese Yuan Renminbi (CNY)'
    },
    HKD: {
        format: 'HKD',
        name: 'Hong Kong Dollar (HKD)'
    },
    NZD: {
        format: 'NZD',
        name: 'New Zealand Dollar (NZD)'
    },
    SEK: {
        format: 'SEK',
        name: 'Swedish Krona (SEK)'
    },
    KRW: {
        format: 'KRW',
        name: 'South Korean Won (KRW)'
    },
    SGD: {
        format: 'SGD',
        name: 'Singapore Dollar (SGD)'
    },
    NOK: {
        format: 'NOK',
        name: 'Norwegian Krone (NOK)'
    },
    INR: {
        format: 'INR',
        name: 'Indian Rupee (INR)'
    },
    RUB: {
        format: 'RUB',
        name: 'Russian Ruble (RUB)'
    },
    ZAR: {
        format: 'ZAR',
        name: 'South African Rand (ZAR)'
    },
    BRL: {
        format: 'BRL',
        name: 'Brazilian Real (BRL)'
    },
    MXN: {
        format: 'MXN',
        name: 'Mexican Peso (MXN)'
    },
    IDR: {
        format: 'IDR',
        name: 'Indonesian Rupiah (IDR)'
    },
    TRY: {
        format: 'TRY',
        name: 'Turkish Lira (TRY)'
    },
    SAR: {
        format: 'SAR',
        name: 'Saudi Riyal (SAR)'
    },
    PLN: {
        format: 'PLN',
        name: 'Polish Zloty (PLN)'
    },
    ARS: {
        format: 'ARS',
        name: 'Argentine Peso (ARS)'
    },
    VND: {
        format: 'VND',
        name: 'Vietnamese Dong (VND)'
    },
    THB: {
        format: 'THB',
        name: 'Thai Baht (THB)'
    },
    MYR: {
        format: 'MYR',
        name: 'Malaysian Ringgit (MYR)'
    },
    PKR: {
        format: 'PKR',
        name: 'Pakistani Rupee (PKR)'
    },
    ILS: {
        format: 'ILS',
        name: 'Israeli New Shekel (ILS)'
    },
    DKK: {
        format: 'DKK',
        name: 'Danish Krone (DKK)'
    },
    EGP: {
        format: 'EGP',
        name: 'Egyptian Pound (EGP)'
    },
    COP: {
        format: 'COP',
        name: 'Colombian Peso (COP)'
    },
    CLP: {
        format: 'CLP',
        name: 'Chilean Peso (CLP)'
    },
    CZK: {
        format: 'CZK',
        name: 'Czech Koruna (CZK)'
    },
    HUF: {
        format: 'HUF',
        name: 'Hungarian Forint (HUF)'
    },
    AED: {
        format: 'AED',
        name: 'United Arab Emirates Dirham (AED)'
    },
    QAR: {
        format: 'QAR',
        name: 'Qatari Riyal (QAR)'
    },
    KWD: {
        format: 'KWD',
        name: 'Kuwaiti Dinar (KWD)'
    },
    BDT: {
        format: 'BDT',
        name: 'Bangladeshi Taka (BDT)'
    },
    PHP: {
        format: 'PHP',
        name: 'Philippine Peso (PHP)'
    },
    LKR: {
        format: 'LKR',
        name: 'Sri Lankan Rupee (LKR)'
    },
    UAH: {
        format: 'UAH',
        name: 'Ukrainian Hryvnia (UAH)'
    },
    KES: {
        format: 'KES',
        name: 'Kenyan Shilling (KES)'
    },
    GHS: {
        format: 'GHS',
        name: 'Ghanaian Cedi (GHS)'
    },
};



// Converts the provided number to a currency format
export const toCurrencyFormat = (number, selectedCurrency) =>
    number.toLocaleString('en-US', {
        style: 'currency',
        currency: selectedCurrency,
    });


// Currency dropdown UI component
const CurrencyDropdown = ({ onCurrencyChange }) => {
    const handleChange = (event) => {
        const selectedCurrency = event.target.value;
        onCurrencyChange(selectedCurrency);
    };

    return (
        <div>
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                Select Currency
            </label>
            <select
                id="currency"
                onChange={handleChange}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                {Object.values(Currencies).map((currency, index) => (
                    <option key={index} value={currency.format}>
                        {currency.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyDropdown;