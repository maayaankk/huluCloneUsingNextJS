import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'


export default function Home({ results }) {

  return (
    <div >
      <Head>
        <title>hulu 2.0</title>
        <link rel="icon" href="https://play-lh.googleusercontent.com/yaoCLYMiku0a1Clhpm7EF8ARMza8EnmWSa1MYoeXysIo304UvLxRwPpSsO4S_orZYnw" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}