import React, { createContext, useState } from 'react'

const UserContext = createContext(null)

function UserProvider({children}) {

    const [menuShow, setmenuShow] = useState(false)
    const [currentPage ,setCurrentPage] = useState(1);

    // filter Amazing
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [SortedMaxPrice, setSortedMaxPrice] = useState(false)
    const [SortedMinPrice, setSortedMinPrice] = useState(false)
    const [SortedMaxPercent, setSortedMaxPercent] = useState(false)
    const [Available, setAvailable] = useState(false)
    const [todayPost, setTodayPost] = useState(false)
    const [rangePrice, setRangePrice] = useState(false)
    const [BrandsList, setBrandsList] = useState([])
   

    /** loader the Body(Home page) */
    const [GetAmazingOffer, setGetAmazingOffer] = useState(true)
    // const [todayPost, setTodayPost] = useState(false)
    // const [rangePrice, setRangePrice] = useState(false)

  return (
    <UserContext.Provider value={{menuShow, setmenuShow, currentPage, setCurrentPage, minPrice, setMinPrice, maxPrice, setMaxPrice, SortedMaxPrice, setSortedMaxPrice, SortedMinPrice, setSortedMinPrice, SortedMaxPercent, setSortedMaxPercent, BrandsList, setBrandsList, Available, setAvailable, todayPost, setTodayPost, rangePrice, setRangePrice, setGetAmazingOffer, GetAmazingOffer,}}>
        {children}
    </UserContext.Provider>
  )
}

export {UserProvider, UserContext}