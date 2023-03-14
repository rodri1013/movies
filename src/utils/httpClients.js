const API = 'https://api.themoviedb.org/3'

function get(path){
    return fetch(API + path, {
            headers: {
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjZiMmI5NzA1YmU4YTgwYzY3ZjNlNjdhNjI5MzQ3MSIsInN1YiI6IjYzMGZkZWJjMGQyOTQ0MDA3OTU5MmNlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f2QMc53zdhYSN5gVWZtghw_2SU1Lj27BhSlYyUFkmrY',
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
        .then(result => result.json())
}

export default get;