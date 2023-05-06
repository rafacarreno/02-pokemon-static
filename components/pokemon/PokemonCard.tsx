import { FC } from "react"
import { useRouter } from "next/router";

import { Card, Grid, Row, Text } from "@nextui-org/react";

import { SmallPokemon } from "@/interfaces"


interface Props {
    poke: SmallPokemon
}


export const PokemonCard: FC<Props> = ( {poke} ) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/name/${poke.name}`);
    }

    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={poke.id}>
            <Card 
            hoverable 
            clickable
            onClick={onClick}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={poke.img}
                        alt="Avatar"
                        width='100%'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{poke.name}</Text>
                        <Text># {poke.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}