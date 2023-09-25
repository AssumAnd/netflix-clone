// Tmdb.js
const API_KEY = '5e6d2840ea07beec0658b5a162a00c84';

const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
    try {
        const req = await fetch(`${API_BASE}${endpoint}`);
        const json = await req.json();
        return json;
    } catch (error) {
        console.error("Erro na solicitação da API:", error);
        throw error; // Re-throw para que o erro seja tratado no componente que chama basicFetch.
    }
};

export default {
    getHomeList: async () => {
        try {
            return [
                {
                    slug: 'originals',
                    title: 'Originais do Netflix',
                    items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'trending',
                    title: 'Recomendados para Você',
                    items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'toprated',
                    title: 'Em Alta',
                    items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'action',
                    title: 'Ação',
                    items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'comedy',
                    title: 'Comédia',
                    items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'horror',
                    title: 'Terror',
                    items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'romance',
                    title: 'Romance',
                    items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
                },
                {
                    slug: 'documentary',
                    title: 'Documentário',
                    items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
                },
            ];
        } catch (error) {
            console.error("Erro ao buscar a lista de filmes:", error);
            return []; // Pode retornar uma lista vazia ou lidar com o erro de outra forma.
        }
    }
};
