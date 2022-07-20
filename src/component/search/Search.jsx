import { SearchInput } from "./Search.styles";


const Search = ({ onChange, onEnter }) => {
  return (
    <div>
      <label>Search</label>
      <SearchInput onChange={(e) => onChange(e)} onKeyDown={(e) => onEnter(e)} placeholder="Search here..." />
    </div>
  );
};

export default Search