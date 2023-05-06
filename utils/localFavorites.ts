

const toggleFavorites = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favorites.includes(id)) {
        favorites = favorites.filter(pokeId => pokeId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))//JSON.stringify(favorites)

}

const existInFavorites = (id: number): boolean => {

    const favorites: number[] = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('favorites') || '[]') : '[]';

    return favorites.includes(id);//true o false

}

const pokemons = (): number[] => {
    if (typeof window === 'undefined') return [];
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
    existInFavorites,
    toggleFavorites,
    pokemons,
}