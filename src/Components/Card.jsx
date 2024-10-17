import React from "react";
<<<<<<< HEAD

const Card = ({ data }) => {
    const readMore = (url) => {
        if (url) {
            try {
                window.open(url, "_blank");
            } catch (error) {
                console.error("Failed to open URL: ", error);
            }
=======
import PropTypes from 'prop-types';

const Card = ({ data }) => {
    if (!Array.isArray(data) || data.length === 0) {
        return <p>No hay datos disponibles.</p>;
    }

    const readMore = (url) => {
        if (url) {
            window.open(url, "_blank");
>>>>>>> 5b32fe6 (Updating repo)
        } else {
            console.warn("Invalid URL");
        }
    };

    return (
        <div className="cardContainer">
            {data.map((curItem, index) => (
<<<<<<< HEAD
                <div className="card" key={index}>
=======
                <div className="card" key={curItem.id || index}>
>>>>>>> 5b32fe6 (Updating repo)
                    {curItem.urlToImage && (
                        <img
                            src={curItem.urlToImage}
                            alt={curItem.title || "News Image"}
                            className="card-image"
<<<<<<< HEAD
=======
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.src = 'default-image-url.jpg'; 
                            }}
>>>>>>> 5b32fe6 (Updating repo)
                        />
                    )}
                    <div className="content">
                        <h3 className="title">{curItem.title || "Sin título"}</h3>
                        <p>{curItem.description || "Descripción no disponible."}</p>
                        <button
                            className="read-more-button"
                            onClick={() => readMore(curItem.url || "#")}
<<<<<<< HEAD
=======
                            disabled={!curItem.url}
                            aria-label={curItem.url ? `Read more about ${curItem.title}` : "No link available"}
>>>>>>> 5b32fe6 (Updating repo)
                        >
                            {curItem.url ? "Read More" : "No Link Available"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

<<<<<<< HEAD
=======
// Validación de PropTypes
Card.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        urlToImage: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        url: PropTypes.string,
    })).isRequired,
};

>>>>>>> 5b32fe6 (Updating repo)
export default Card;
