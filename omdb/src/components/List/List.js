import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "./style.css"

export default function List({ items }) {
    let arr = []
    const [state, setState] = useState({});

    if (items.Search) {
       
        const reorder = (list, startIndex, endIndex) => {
            const result = Array.from(list);
            const [removed] = result.splice(startIndex, 1);
            result.splice(endIndex, 0, removed);

            return result;
        };

        function Movie({ movie, index }) {
            return (
                <Draggable draggableId={movie.imdbID} index={index}>
                    {provided => (
                        <div className="list-items"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <img src={movie.Poster} style={{ width: "150px", height: "200px", margin: "0 auto" }} />
                            <h2>{movie.Title}</h2>
                            <p>Type: {movie.Type}</p>
                            <p>Year: {movie.Year}</p>
                            {movie.content}
                        </div>
                    )}
                </Draggable>
            );
        }

        const MovieList = React.memo(function QuoteList({ movies }) {

            console.log(movies)

            return movies.map((movie, index) => (
                <Movie movie={movie} index={index} key={movie.imdbID} />
            ));
        });

        function onDragEnd(result) {
            if (!result.destination) {
                return;
            }

            if (result.destination.index === result.source.index) {
                return;
            }

            const movies = reorder(
                items.Search,
                result.source.index,
                result.destination.index
            );

            setState({ movies });
        }

        return (
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="list">
                    {provided => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            <MovieList movies={items.Search} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    
    } else {
        return <div>No Results Found</div>
    }
}