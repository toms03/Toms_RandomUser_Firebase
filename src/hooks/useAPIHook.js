import React from "react";
import axios from "axios";

export default function useAPi(url) {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true)
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(url)
    setData(response.data.results)
    setIsLoading(false)
  }
  return { data, isLoading }
}
