import React from 'react';

import Articles from '../Articles.json'

import Article from './Article';


const getArticles = () => {
    return new Promise(resolve => resolve({ data: { articles: Articles } }))
}

const Main = props => {

    const [articles, setArticles] = React.useState([])

    React.useEffect(() => {
        getArticles().then(res => {
            setArticles(res.data.articles)
        }).catch(() => {
            console.log("Error Fetching Data")
        })
    }, [])

    return (
        <main>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <section id='articles'>
                <Article list={articles} />
            </section>

        </main>
    )
}

export default Main;