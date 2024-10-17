<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { fetchNews } from '../utils/api'; // Ajusta la ruta de api
import { translations, MAX_REQUESTS } from '../utils/constants'; // Ajusta la ruta de constants
import '../styles/index.css'; // Asegúrate de que esta ruta sea correcta
import '../styles/App.css'; // Asegúrate de que esta ruta sea correcta
=======
import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import { fetchNews } from '../utils/api'; 
import { translations, MAX_REQUESTS } from '../utils/constants'; 
import '../styles/index.css'; 
import '../styles/App.css'; 
import LanguageToggle from './LanguageToggle'; 
import ErrorDisplay from './ErrorDisplay'; 
import Loader from './Loader'; 
>>>>>>> 5b32fe6 (Updating repo)

const NewsApp = () => {
    const [search, setSearch] = useState("");
    const [newsData, setNewsData] = useState([]);
    const [page, setPage] = useState(1);
    const [language, setLanguage] = useState("es");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [requestCount, setRequestCount] = useState(0);
<<<<<<< HEAD

    const getData = async () => {
        if (requestCount >= MAX_REQUESTS) {
            setError(translations[language].requestLimitReached);
=======
    const INITIAL_LIMIT = 10; 
    const [showError, setShowError] = useState(false); 
    const centralContentRef = useRef(null);
    const scrollPositionRef = useRef(0);

    const getData = async (limit = INITIAL_LIMIT) => {
        if (requestCount >= MAX_REQUESTS) {
            setError(translations[language].requestLimitReached);
            setShowError(true);
>>>>>>> 5b32fe6 (Updating repo)
            return;
        }

        setLoading(true);
        setError(null);
<<<<<<< HEAD

        try {
            const data = await fetchNews(search, page);
            setNewsData((prevData) => [...prevData, ...data]);
            setRequestCount(prevCount => prevCount + 1);
        } catch (error) {
            setError(error.message);
=======
        setShowError(false); 

        try {
            const data = await fetchNews(search, page, limit, language);
            if (data.length === 0 && search) {
                setError(translations[language].noResultsMessage);
                setShowError(true);
            } else {
                setNewsData((prevData) => [...prevData, ...data]);
                setRequestCount(prevCount => prevCount + 1);
                setShowError(false);
            }
        } catch (error) {
            console.error("Error al obtener noticias:", error);
            setError(translations[language].noResultsMessage);
            setShowError(true);
>>>>>>> 5b32fe6 (Updating repo)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
<<<<<<< HEAD
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
=======
        getData(); 
    }, [page, search, language]);

    useEffect(() => {
        const handleScroll = () => {
            const centralContent = centralContentRef.current;
            if (centralContent.scrollTop + centralContent.clientHeight >= centralContent.scrollHeight - 1 && !loading) {
                if (requestCount < MAX_REQUESTS) {
                    scrollPositionRef.current = centralContent.scrollTop;
                    setPage((prevPage) => prevPage + 1);
                }
            }
        };

        const centralContent = centralContentRef.current;
        if (centralContent) {
            centralContent.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (centralContent) {
                centralContent.removeEventListener('scroll', handleScroll);
            }
        };
    }, [loading, requestCount]);

    useEffect(() => {
        if (centralContentRef.current) {
            centralContentRef.current.scrollTop = scrollPositionRef.current;
        }
    }, [newsData]);
>>>>>>> 5b32fe6 (Updating repo)

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        setPage(1);
        setNewsData([]);
<<<<<<< HEAD
        getData();
=======
        setRequestCount(0);
        getData(); 
>>>>>>> 5b32fe6 (Updating repo)
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
<<<<<<< HEAD
            handleSearch(); // Llama a la función de búsqueda al presionar Enter
=======
            handleSearch(); 
>>>>>>> 5b32fe6 (Updating repo)
        }
    };

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
<<<<<<< HEAD
        setNewsData([]); // Resetea los datos al cambiar de idioma
        setPage(1); // Resetea la paginación
        setError(null); // Resetea posibles errores previos
=======
        setNewsData([]); 
        setPage(1); 
        setError(null); 
        setRequestCount(0); 
>>>>>>> 5b32fe6 (Updating repo)
    };

    return (
        <div className="App">
            <header className="header">
                <h1>{translations[language].title}</h1>
            </header>
            <div className="mainContent">
<<<<<<< HEAD
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
=======
                <main className="centralContent" ref={centralContentRef}>
                    <p className='head'>{translations[language].header}</p>
                    <div>
                        {loading ? (
                            <Loader />
                        ) : showError && error ? (
                            <ErrorDisplay error={error} />
                        ) : newsData.length > 0 ? (
                            <Card data={newsData} />
                        ) : (
                            <p>{translations[language].noInputMessage}</p>
>>>>>>> 5b32fe6 (Updating repo)
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
<<<<<<< HEAD
                            onKeyDown={handleKeyDown} // Añadir el manejador para el evento KeyDown
=======
                            onKeyDown={handleKeyDown}
>>>>>>> 5b32fe6 (Updating repo)
                        />
                        <button onClick={handleSearch}>{translations[language].searchButton}</button>
                    </div>
                    <div className="buttonContainer">
<<<<<<< HEAD
                        <button className="languageButton" onClick={toggleLanguage}>
                            {translations[language].changeLanguage}
                        </button>
=======
                        <LanguageToggle toggleLanguage={toggleLanguage} currentLanguage={language} />
>>>>>>> 5b32fe6 (Updating repo)
                    </div>
                </aside>
            </div>
            <footer className="footer">
                <p>Isaac Barco</p>
            </footer>
        </div>
    );
};

<<<<<<< HEAD
export default NewsApp;
=======
export default NewsApp;
>>>>>>> 5b32fe6 (Updating repo)
