import React, { useState } from 'react';
import API from './api'

async function getRep(){
    const resp = await API.get('/posts');
    return resp.data
}
function App() { 
    const [posts, setPosts] = useState({});
    console.log('Obter Postagen')
    console.log(posts)
    return (
        <>
        <div>Etapa 6 Postagens </div>
        <button onClick={() => setPosts({posts: getRep()})}>
            Obter Postagen
        </button>
        </>
    );

}
export default App;
