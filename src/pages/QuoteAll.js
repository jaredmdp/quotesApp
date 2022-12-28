import QuoteList from '../components/quotes/QuoteList'

const TEST_QUOTES = [
    { id: 'q1', author: 'Brandon Sanderson', text: 'My life to yours. My breath become yours.' },
    { id: 'q2', author: 'Kaladin Stormblessed', text: "Honor is dead. But i'll see what I can do." },
];

const QuoteAll = () => {
    return <QuoteList quotes={TEST_QUOTES} />
};

export default QuoteAll;