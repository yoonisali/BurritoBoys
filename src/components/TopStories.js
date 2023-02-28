import React, { useEffect, useReducer } from "react";
import topStoriesReducer from './../reducers/top-stories-reducer';
import { getTopStoriesFailure, getTopStoriesSuccess } from './../actions/index';


const initialState = {
    isLoaded: false,
    topStories: [],
    error: null
};

function TopStories() {
    const [state, dispatch] = useReducer(topStoriesReducer, initialState);

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`${response.status}: ${response.statusText}`);
                } else {
                    return response.json()
                }
            })
            .then((jsonifiedResponse) => {
                const action = getTopStoriesSuccess(jsonifiedResponse.results)
                dispatch(action);
            })
            .catch((error) => {
                const action = getTopStoriesFailure(error.message)
                dispatch(action);
            });
    }, [])

    const { error, isLoaded, topStories } = state;
    console.log(topStories);

    const topTenStories = topStories.slice(0,10);

    // for(i=0; i < 10; i++) {
    //     topTenStories.push(article);
    // }
    // })
    if (error) {
        return <h1>Error: {error}</h1>;
    } else if (!isLoaded) {
        return <h1>...Loading...</h1>;
    } else {
        return (
            <div className="stories">
                <h1 className="text-4xl font-bold text-center">Top Stories</h1>
                <ul>
                    {topTenStories.map((article, index) =>
                    <div className="single-story hover:bg-yellow-500">
                        <li key={index}>
                            <hr/>
                            <h3 className="underline pt-3 text-xl pl-2">{article.title}</h3>
                            <p className="italic font-bold pl-2">{article.abstract}</p>
                        </li>
                    </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default TopStories;

