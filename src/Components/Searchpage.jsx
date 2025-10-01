
import { useSearchParams } from 'react-router-dom';

function Searchpage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  return (
    <div>
      <input
        value={query}
         onChange={(e) => setSearchParams({ q: e.target.value })}
      />
      <p>Searching for: {query}</p>
    </div>
  );
}


export default Searchpage;
