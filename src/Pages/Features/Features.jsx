import React from 'react'
import './Features.css'

const Features = () => {
    return (
        <>
            <div className='features-container'>
                <div className='first'>
                    <h3>Cryptocurrency features</h3>
                    <p>Cryptocurrencies are a digital representation of value considered by their holders as a means of payment. They owe their high popularity to aspects which traditional currencies lack. Learn about their key features.</p>
                </div>
                <div className='second'>
                    <h2>Anonymity</h2>
                    <p>Transactions are tied to a random sequence of characters and not to the owners identity, including personal or company data. The popularity of some virtual currencies indicates the scale of demand and supply. It is practically impossible to link contracts with people or companies.</p>
                </div>
                <div className='third'>
                    <h2>No intermediary or supervisory bodies</h2>
                    <p>The absence of governmental control and regulations eliminate fees and restrictions that could be disadvantageous for users. The flow of cryptocurrency transactions is unregulated by authorities or financial institutions. This limits unfavourable fees and restrictions. However, cryptocurrency owners do not benefit from the protection of financial authorities.</p>
                </div>
                <div className='fourth'>
                    <h2>Security</h2>
                    <p>Cryptocurrencies can be stored in special virtual wallets, secured with a private key. This means that only the holder has access to the accumulated funds. In order to increase security, the virtual currency owner should incorporate encryption technology on their storage devices.</p>
                </div>
                <div className='fifth'>
                    <h2>No centralization</h2>
                    <p>There are no authorities controlling cryptocurrency flow or quotations. Virtual currency trading is not located in one single place. This prevents trading disruptions after hacking attempts. Transaction data is dispersed across the network as it is stored directly by cryptocurrency holders.</p>
                </div>
                <div className='sixth'>
                    <h2>Sending cryptocurrencies</h2>
                    <p>The method of cryptocurrency transmission differs significantly from that of traditional currencies. The institutional model relies on banking systems, e.g. incoming and outgoing sessions in the recipient and sender countries. Virtual currency transfers are independent of the user's location and the process is almost immediate.</p>
                </div>
                <div className='seventh'>
                    <h2>Fast development</h2>
                    <p>Holders can use their cryptocurrencies through the rapidly developing tools and services. Converting and exchanging cryptocurrencies into dollars or euros is now possible. These currencies can be funded directly from the cryptocurrency wallet through solutions that enable conversion and exchange.</p>
                </div>
            </div>
        </>
    )
}

export default Features
