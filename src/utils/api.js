<<<<<<< HEAD
// api.js
const API_KEY = "deafbf7d5bc7485cb8d7761f2e0b379d"; // Asegúrate de mantener esto seguro
=======
const API_KEY = "deafbf7d5bc7485cb8d7761f2e0b379d"; 
>>>>>>> 5b32fe6 (Updating repo)

export const fetchNews = async (searchQuery, page) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=10`);
<<<<<<< HEAD
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || "Error al obtener noticias");
        }
        
        return data.articles; // Devuelve solo los artículos
    } catch (error) {
        throw new Error("Error de red. Intenta más tarde.");
    }
};
=======

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al obtener noticias");
        }

        const data = await response.json();
        return data.articles; 
    } catch (error) {
        console.error("Error de red:", error);
        throw new Error("Error de red. Intenta más tarde.");
    }
};
>>>>>>> 5b32fe6 (Updating repo)
