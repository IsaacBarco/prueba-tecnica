import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchNews } from '../utils/api'; // Ajusta la ruta de api
import { translations, MAX_REQUESTS } from '../utils/constants'; // Ajusta la ruta de constants
import '../styles/index.css'; // Asegúrate de que esta ruta sea correcta
import '../styles/App.css'; // Asegúrate de que esta ruta sea correcta

const NewsApp = () => {
    const [search, setSearch] = useState("");
    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState("es");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [requestCount, setRequestCount] = useState(0);

    const getData = async () => {
        if (requestCount >= MAX_REQUESTS) {
            setError(translations[language].requestLimitReached);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const data = await fetchNews(search, page);
            setNewsData((prevData) => [...prevData, ...data]);
            setRequestCount(prevCount => prevCount + 1);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (search) {
            setNewsData([]); // Resetea noticias al buscar
            setPage(1); // Resetea la página al buscar
        }
    }, [search]);

    useEffect(() => {
        getData();
    }, [page, search]); // Llama a getData cuando cambie page o search

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1 && !loading) {
                console.log("Cargando más noticias...");
                setPage((prevPage) => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        setPage(1);
        setNewsData([]);
        getData();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(); // Llama a la función de búsqueda al presionar Enter
        }
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
        setNewsData([]); // Resetea los datos al cambiar de idioma
        setPage(1); // Resetea la paginación
        setError(null); // Resetea posibles errores previos
    };

    return (
        <div className="App">
            <header className="header">
                <h1>{translations[language].title}</h1>
            </header>
            <div className="mainContent">
                <main className="centralContent">
                    <p className='head'>{translations[language].header}</p>
                    <div>
                        {loading ? (
                            <p>Cargando noticias...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : newsData.length > 0 ? (
                            <Card data={newsData} />
                        ) : (
                            <p>No hay noticias disponibles.</p>
                        )}
                    </div>
                </main>
                <aside className="sidebar rightSidebar">
                    <div className='searchBar'>
                        <input
                            type='text'
                            placeholder={translations[language].placeholder}
                            value={search}
                            onChange={handleInput}
                            onKeyDown={handleKeyDown} // Añadir el manejador para el evento KeyDown
                        />
                        <button onClick={handleSearch}>{translations[language].searchButton}</button>
                    </div>
                    <div className="buttonContainer">
                        <button className="languageButton" onClick={toggleLanguage}>
                            {translations[language].changeLanguage}
                        </button>
                    </div>
                </aside>
            </div>
            <footer className="footer">
                <p>Isaac Barco</p>
            </footer>
        </div>
    );
};

export default NewsApp;
