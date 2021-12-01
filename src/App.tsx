import React, {useState} from 'react';
import API from './api'; 

function App() {

    /**function getById(){
        const id = document.querySelector('#user').value
        axios.get(`http://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => showResponse(res))
    }/** */

    API.get('/posts')
    .then(etapa6 => console.log(etapa6))
    /**function post(){
        const title= document.querySelector('#post').value
        axios.post("http://jsonplaceholder.typicode.com/posts",{title}).then(res => showResponse(res))
    }/** */
    return <div>Comece aqui!</div>;
}

export default App;
