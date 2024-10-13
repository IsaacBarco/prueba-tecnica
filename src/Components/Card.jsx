import React from "react";

const Card = ({ data }) => {
    const readMore = (url) => {
        if (url) {
            try {
                window.open(url, "_blank");
            } catch (error) {
                console.error("Failed to open URL: ", error);
            }
        } else {
            console.warn("Invalid URL");
        }
    };

    return (
        <div className="cardContainer">
            {data.map((curItem, index) => (
                <div className="card" key={index}>
                    {curItem.urlToImage && (
                        <img
                            src={curItem.urlToImage}
                            alt={curItem.title || "News Image"}
                            className="card-image"
                        />
                    )}
                    <div className="content">
                        <h3 className="title">{curItem.title || "Sin título"}</h3>
                        <p>{curItem.description || "Descripción no disponible."}</p>
                        <button
                            className="read-more-button"
                            onClick={() => readMore(curItem.url || "#")}
                        >
                            {curItem.url ? "Read More" : "No Link Available"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
