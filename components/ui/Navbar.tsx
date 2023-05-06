import Image from "next/image";
import NextLink from "next/link";

import { Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const Navbar = () => {

    const { theme } = useTheme()

    // NextLink from 'next/link' y Link from '@nextui-org/react'
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.accents2.value
        }}>

            <Image
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt='icono de la app'
                width={70}
                height={70}
                priority={true}
            />
            <NextLink href='/' passHref>
                <div style={{ display:'flex', alignItems:'center', justifyContent: 'space-between' }}>
                    <Text color="white" h2>P</Text>
                    <Text color="white" h3>okemon</Text>
                </div>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Text color="white" h3>Favorites</Text>
            </NextLink>
        </div>
    )
}
