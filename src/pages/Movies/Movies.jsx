import { useState, useEffect } from "react";
import { searchMovie } from "components/API";
import { useSearchParams } from "react-router-dom";
import { SearchInput } from "components/SearchInput/SearchInput";
import { SearchResults } from "components/SearchResults/SearchResults";
import { LoadMore } from "components/LoadMore/LoadMore";
//import { Loader } from "components/Loader/Loader";

const Movies = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query")

    const [queryResults, setQueryResults] = useState([]);
    console.log(queryResults)
    const [page, setPage] = useState(1);
    const [disabledButton, setDisabledButton] = useState(true);
    const [totalPage, setTotalPage] = useState(0);
    // const [isLoading, setIsLoading] = useState(false);
    

    useEffect(() => {

        if (!query) return;
        //setIsLoading(true);

        searchMovie(query, page)
            .then(data => {
                //if less than 20 results, turn off the more button
                if (data.results.length < 20) {
                    setQueryResults(data.results);
                    setDisabledButton(true);
                } else if (page === 1) {
                    setDisabledButton(false);
                    setQueryResults(data.results);
                    setTotalPage(() => data.total_pages)

                } else {
                    setQueryResults(data.results)
                }
            
            })
            .catch(error => console.error(error));
        
        //setTimeout(() => { setIsLoading(false) }, 1000);

    }, [query, page]
    );

    
    //load more images
        const loadMore = () => {
        setPage(page => page + 1);
        setTotalPage(totalPage => totalPage - 1);
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ query: form.elements.query.value });
        setPage(1);
        form.reset()
    }

    return (
        <>
            <SearchInput onSubmit={handleSubmit} />
            {<SearchResults queryResults={queryResults} />}
            {totalPage !== 0 && <LoadMore disabled={disabledButton} onClick={loadMore} />}
        </>
    )
}

export default Movies;