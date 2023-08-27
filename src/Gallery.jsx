import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;
const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      console.log(result);
      return result.data
    }
  })

if (response.isLoading) {
  return (
    <section className="image-container">
      <h2>Loading...</h2>
    </section>
  );
}
  
  if (response.isError) {
    return (
      <section className="image-container">
        <h2>There was an error...</h2>
      </section>
    );
  }
  const result = response.data.results;
  if (result.length < 1) {
    return (
      <section className="image-container">
        <h2>No results were found...</h2>
      </section>
    );
  }
  return (
    <section className="image-container">
      {result.map((item) => {
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={ item.alt_description} className="img"/>
      })}
      
    </section>
  )
}
export default Gallery