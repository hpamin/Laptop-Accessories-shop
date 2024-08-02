import React from 'react'

function FooterLinks() {

    let HPaminBuy = [
        {id:0, title: "لپ تاپ"},
        {id:1, title: "لوازم جانبی موبایل"},
        {id:2, title: "کارت گرافیک"},
        {id:4, title: "کیس"},
    ]
    let HPaminBlog = [
        {id:0, title: "پرسش های متداول"},
        {id:1, title: "خدمات مرجوعی کالا"},
        {id:2, title: "حریم خصوصی"},
        {id:3, title: "شرایط استفاده"},
    ]
    let HPaminContact = [
        {id:1, title: "تماس با ما"},
        {id:2, title: "ادرس ما"},
        {id:3, title: "همکاری با ما"},
    ]

    let links = [
        {id:0 , title: "خرید" , SubLinksfooter: HPaminBuy },
        {id:1 , title: "خدمات مشتریان", SubLinksfooter: HPaminBlog },
        {id:2 , title: "درباره ما", SubLinksfooter: HPaminContact},
    ]

  return (
    <>
        {links.map((item) => (
            <div className="w-36 flex flex-col justify-center items-center max-md:py-4" key={item.id + 10}>
                <p className='text-white text-xl iransansbold pb-2'> {item.title} </p>
                <ul className='flex flex-col justify-center items-center gap-2 py-2'>
                    {item.SubLinksfooter.map((item) => (
                        <li className='text-white cursor-pointer hover:scale-110 duration-150' key={item.id}> {item.title} </li>
                    ))}
                </ul>
            </div>
        ))}
    </>
  )
}

export default FooterLinks