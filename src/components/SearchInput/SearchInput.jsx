import css from "./SearchInput.module.css"
export const SearchInput = ({ onSubmit}) => {
    return (
        <form className={css.form} onSubmit={onSubmit}>
                <input className = {css.input}
                    type="text"
                    name="query"
                />
            <button className={css.button }type="submit">Search</button>
            </form> 
    ) 


}