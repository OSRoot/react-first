// import react from 'react';
import ReactDOM from 'react-dom';

const page = (
    <div>
        <h1>My Awesome website in React</h1>
        <h3>Reasons I Love React</h3>
        <ol>
            <li>it's composable</li>
            <li>it's declarative</li>
            <li>it's hairable skill</li>
            <li>it's actively maintained by skilled people</li>
        </ol>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById('root')
)