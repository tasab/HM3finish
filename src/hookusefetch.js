import { useState, useEffect } from "react"
import { getData } from "./fetchdata"

export const useFetch = (url) => {
    let [fetchData, setfetchData] = useState([])
    let [isLoading, setIsLoading] = useState(true)
  
    const fetchDataByUrl = async url => {
      const data = await getData(url)
      setfetchData(data)
      setIsLoading(false)
    }
  
    useEffect(() => {
      fetchDataByUrl(url)
    }, [url])
    return [fetchData, isLoading]
}