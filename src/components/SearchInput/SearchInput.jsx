
export const SearchInput = ({value, onSubmit}) => {
    return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                value={value}
                name="query"
                />
                <button type="submit">Search</button>
            </form> 
    ) 


}