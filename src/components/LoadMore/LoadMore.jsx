import PropTypes from 'prop-types';
import css from "./LoadMore.module.css"

export const LoadMore = ({ disabled, onClick }) => {

    return (
        <>
            <button className={css.load}  disabled={disabled} onClick={onClick}>{disabled? "End of results" : "Load more" }</button>
        </>
    )



};

LoadMore.propTypes = {
    loadMore: PropTypes.func,
    
}