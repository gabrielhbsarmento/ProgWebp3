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
        <select value="B">
    <option value="A">Post1</option>
    <option value="B">Post2</option>
    <option value="C">Post3</option>
    <option value="D">Post4</option>
    <option value="E">Post5</option>
    </select>
        <div>Etapa 6 Postagens </div>
        <button onClick={() => setPosts({posts: getRep()})}>
            Obter Postagen
        </button>
        </>
    );

}
export default App;
