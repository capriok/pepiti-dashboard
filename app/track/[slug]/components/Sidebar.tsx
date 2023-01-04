'use client'
import { Button, Flex, Stack, Text } from '@mantine/core'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavButton = ({ text, active, ...rest }: { text: string; active?: boolean }) => {
   return (
      <Button
         radius="lg"
         color="green"
         w="100%"
         h={50}
         styles={(theme) => ({
            root: {
               backgroundColor: active ? theme.colors.dark[5] : theme.colors.dark[7],
               color: theme.colors.lime[5],
               ':hover': { color: '#fff' },
            },
         })}
      >
         {text}
      </Button>
   )
}

export const Sidebar = ({ slug }: { slug: string }) => {
   const pathname = usePathname()

   const linkDetails = [
      {
         href: `/track/${slug}`,
         text: 'Dashboard',
         isActive: `/track/${slug}` === pathname,
      },
      {
         href: `/track/${slug}/races`,
         text: 'Races',
         isActive: `/track/${slug}/races` === pathname,
      },
   ]

   return (
      <Stack h="100%" justify="flex-start">
         <Flex direction="column" gap="xl" style={{ position: 'sticky', top: '20px' }}>
            <Text>Track Navigation</Text>
            {linkDetails.map((detail, idx) => (
               <Link key={idx} href={detail.href} style={{ textDecoration: 'none' }}>
                  <NavButton text={detail.text} active={detail.isActive} />
               </Link>
            ))}
         </Flex>
      </Stack>
   )
}
