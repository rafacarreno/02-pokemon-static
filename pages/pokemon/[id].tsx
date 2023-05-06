import { useState } from "react";

import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

import confetti from 'canvas-confetti';

import { Layout } from "@/components/layouts"
import { Pokemon } from "@/interfaces";
import { getPokemonInfo, localFavorites } from "@/utils";

interface Props {
  pokemon: Pokemon

}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id));

  const onToggleFavorite = () => {//seria como una tecla que cambia a true y a folse
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorite(!isInFavorite);

    if (isInFavorite) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }


  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width='100%'
                height={200}

              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text
                h1
                transform="capitalize"
              >
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isInFavorite}
                onClick={onToggleFavorite}
              >
                {isInFavorite ? 'In Favorites' : 'Add To Fav'}
              </Button>

            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>

        </Grid>

      </Grid.Container>
    </Layout>
  )
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemon151.map(id => ({
      params: { id: id } //Esto es igual que poner params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  //ctx{
  //   params: { id: '1' },
  //   locales: undefined,
  //   locale: undefined,
  //   defaultLocale: undefined
  // }es un objeto y lo desestructuro de esta forma {params}

  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}

export default PokemonPage;