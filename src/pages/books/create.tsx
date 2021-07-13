import { Flex, SimpleGrid } from "@chakra-ui/react";
import Head  from 'next/head';
import { Header, Sidebar } from "../../components";

export default function CreateBook() {
  return (
    <Flex direction="column" height="100vh">
      <Head>
        <title>LibManager | Adicionar livro</title>
      </Head>
      <Header />

      <Flex
        width="100%"
        maxWidth={1480}
        marginY="6"
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}