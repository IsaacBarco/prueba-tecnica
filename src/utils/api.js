// api.js
const API_KEY = "deafbf7d5bc7485cb8d7761f2e0b379d"; // Asegúrate de mantener esto seguro

export const fetchNews = async (searchQuery, page) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${API_KEY}&page=${page}&pageSize=10`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || "Error al obtener noticias");
        }
        
        return data.articles; // Devuelve solo los artículos
    } catch (error) {
        throw new Error("Error de red. Intenta más tarde.");
    }
};
