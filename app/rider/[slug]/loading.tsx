import Loader from '../../components/Loader'

export default function Page() {
   return (
      <Loader text="Loading rider data..." variant="circleDots" />
      // <Stack mih={'100vh'} justify='center' align='center'>
      //    <Loader variant='bars' color='lime' />

      //     <Card w='85vw' maw={MAX_WIDTH} mt='md' shadow='xl' radius='lg'>
      //       <Card.Section p='xl'>
      //          <Grid align='center'>
      //             <Grid.Col span={12} md={2}>
      //                <Avatar color='green' size='xl' radius='lg'>
      //                   <Skeleton height={50} w={50} />
      //                </Avatar>
      //                <Skeleton height={8} />
      //             </Grid.Col>

      //             <Grid.Col span={'auto'}>
      //                <Group align='center'>
      //                   <Text w={100}>MMR: </Text>
      //                   <Skeleton height={8} />
      //                </Group>
      //                <Group align='center'>
      //                   <Text w={100}>SR: </Text>
      //                   <Skeleton height={8} />
      //                </Group>
      //                <Group align='center'>
      //                   <Text w={100}>Total Laps: </Text>
      //                   <Skeleton height={8} />
      //                </Group>
      //                <Group align='center'>
      //                   <Text w={100}>Avg Speed: </Text>
      //                   <Skeleton height={8} />
      //                </Group>
      //             </Grid.Col>

      //             <Grid.Col span={6}>
      //                <Text>Favorite Bike:</Text>
      //                <Skeleton height={10} />
      //                <Text>Laps on Bike:</Text>
      //                <Skeleton height={10} />
      //             </Grid.Col>
      //          </Grid>
      //       </Card.Section>

      //       <Title order={3} my='sm'>
      //          World Records Total: <Skeleton height={14} w={20} />
      //       </Title>
      //       <Title order={3} my='sm'>
      //          Rider Name: <Skeleton height={14} w={20} />
      //       </Title>

      //       <Skeleton height={200} />
      //    </Card>

      //    <Skeleton height={500} />
      //  </Stack>
   )
}
