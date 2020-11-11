import { useEffect, useState } from 'react'
import Axios from 'axios'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // destructure of response.data.data
        const {
          data: { data },
        } = await Axios.get(url)
        setData(data)
        setLoading(false)
      } catch (err) {
        setError(err.response.data.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { loading, error, data }
}
