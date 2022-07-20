import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../component/card/Card";
import Banner from "../../component/homeBanner/Banner"
import Search from "../../component/search/Search"
import { 
  CardContainer, 
  Container, 
  ContainerHeader, 
  EmptyContainer, 
  PageWrapper, 
  SearchWrapper 
} from './Home.styles';

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState([]);

  const searchInput = (e) => {
    setSearchTerm(e.target.value);
  }

  const searchSearchTerm = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm.length !== 0) {
        setLoading(true)
        axios
          .get(
            `${process.env.REACT_APP_OMDB_BASE_URL}` +
              `?s=${searchTerm}&apiKey=` +
              `${process.env.REACT_APP_OMDB_API_KEY}`
          )
          .then(response => {
            setMovieData(response?.data?.Search)
            setLoading(false)
          })
          .catch(error => console.log(error));
          }
      }
    }

    console.log(movieData, 'moviedata')

  return (
    <PageWrapper>
      <Banner />
      <SearchWrapper>
        <Search onChange={searchInput} onEnter={searchSearchTerm} />
      </SearchWrapper>
      {loading ? (
        <EmptyContainer>Loading...</EmptyContainer>
      ) : movieData?.length === 0 || movieData === undefined ? (
        <EmptyContainer>
          <h4>
            No Videos to show, Kindly type into the search box above to display
            movies
          </h4>
        </EmptyContainer>
      ) : (
        <Container>
          <ContainerHeader>Category</ContainerHeader>
          <CardContainer>
            {movieData && movieData?.map(detail => (
              <Card key={detail?.imdbID} details={detail} />
            ))}
          </CardContainer>
        </Container>
      )}
    </PageWrapper>
  );
}

export default Home