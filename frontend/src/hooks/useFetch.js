import { useEffect, useState } from "react"

const useFetch = (url) => {
 
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("url",url)
        const fetchData = async () => {
            setLoading(true)

            try {
                const response = await fetch(url)
                const data = await response.json()

                setData(data)
                setLoading(false)
            } catch (error) {
                setError('Error : ' + error)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error }
}
export default useFetch