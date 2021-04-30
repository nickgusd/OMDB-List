import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm"
import List from "../List/List"

import "./style.css"

export default function Container() {

    const [search, setSearch] = useState("")
    const [result, setResult] = useState("")
    let apiKey = "29333113"

    const searchTitle = (query) => {
        fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`)
            .then(response => response.json())
            .then(data => setSearch(data));
    }

    const handleChange = (event) => {
        const { value } = event.target
        setResult(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        searchTitle(result)
        setSearch("")
    }

    return (
        <div className="container">
            <SearchForm
                value={result}
                onChange={handleChange}
                handleSubmit={handleFormSubmit}
            />
            {search ? <List items={search} /> : null}

        </div>
    )
}