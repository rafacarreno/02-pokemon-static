import { useEffect, useState } from 'react'

import { Layout } from '@/components/layouts'
import { FavoritePokemons, NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils';


const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, [])

    return (
        <Layout title='Favorites - Pokemons'>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<FavoritePokemons pokemons={favoritePokemons} />)
            }
        </Layout>
    )
}

export default FavoritesPage