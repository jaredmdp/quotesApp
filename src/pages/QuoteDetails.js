import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote'
import Comments from '../components/comments/Comments'

const TEST_QUOTES = [
    { id: 'q1', author: 'Brandon Sanderson', text: 'My life to yours. My breath become yours.' },
    { id: 'q2', author: 'Kaladin Stormblessed', text: "Honor is dead. But i'll see what I can do." },
];

const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();

    const quote = TEST_QUOTES.find(quote => quote.id === params.quoteID);

    if (!quote) {
        return <p>No Quote Found</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${match.path}`} exact>
                <div className="centered">
                    <Link class='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};

export default QuoteDetails;