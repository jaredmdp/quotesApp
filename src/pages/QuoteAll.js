import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList'
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

// const TEST_QUOTES = [
//     { id: 'q1', author: 'Lightsong the Brave', text: 'My life to yours. My breath become yours.' },
//     { id: 'q2', author: 'Kaladin Stormblessed', text: "Honor is dead. But i'll see what I can do." },
// ];

const QuoteAll = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    };

    if (error) {
        return <p className='centered focused'>{error}</p>
    };

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />
    };

    return <QuoteList quotes={loadedQuotes} />
};

export default QuoteAll;