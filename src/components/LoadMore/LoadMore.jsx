import PropTypes from 'prop-types';

export const LoadMore = ({ disabled, onClick }) => {

    return (
        <>
            <button  disabled={disabled} onClick={onClick}>{disabled? "End of results" : "Load more" }</button>
        </>
    )



};

LoadMore.propTypes = {
    loadMore: PropTypes.func,
    
}