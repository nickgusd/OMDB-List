import React, {useState, useEffect} from "react";

import SearchForm from "../SearchForm/SearchForm"
import List from "../List/List"

import "./style.css"

export default function Container() {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState("")
    let apiKey = "29333113"

useEffect(() => {

}, [search])

const searchTitle = (query) => {

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
    .then(response => response.json())
    .then(data => setSearch(data));
    console.log(search)
}

const handleChange = (event) => {
    const { name, value } = event.target
    setResult(value)
}

const handleFormSubmit = (event) => {
    event.preventDefault()
    searchTitle(result)
    console.log("this ", result)
}

    return (
        <div className="container">
            <SearchForm 
            value={result}
            onChange={handleChange}
            handleSubmit={handleFormSubmit}
            />
            <List items={search} />
        </div>
    )
}