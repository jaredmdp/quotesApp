import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments'

const QuoteDetails = () => {
    const params = useParams();
    return (
        <Fragment>
            <h1>Quotes Details Page</h1>
            <p>{params.quoteID}</p>
            <Route path={`/quotes/${params.quoteID}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetails;