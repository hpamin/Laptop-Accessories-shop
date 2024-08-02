import React from 'react'
import HeaderAmazing from './HeaderAmazing/HeaderAmazing';
import LastProductAmazing from './LastAmazing/LastProductAmazing';
import FirstMiddleAmazing from './FirstMiddleAmazing/FirstMiddleAmazing';
import AmazingCustom from './AmazingCustom/AmazingCustom';
import OtherProductAmazing from './otherProductAmazing/OtherProductAmazing';
function Amazing() {
    
  return (
    <section className='w-full h-full px-10 max-lg:px-5'>
        <HeaderAmazing />
        <LastProductAmazing />
        <FirstMiddleAmazing />
        <AmazingCustom />
        <OtherProductAmazing />
    </section>
  )
}

export default Amazing