import { Box, Button, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue } from "@chakra-ui/react";

import Link from "next/link";
import { Header, Sidebar } from "../../components";

export default function BooksList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1">
        <Flex justifyContent="space-between">        
        <Heading size="lg" fontWeight="normal">Livros</Heading>
        <Link href="/users/create" passHref>
          <Button 
            as="a" 
            size="md" 
            fontSize="small" 
            colorScheme="red" 
          >
            ALUGAR
          </Button>
        </Link>
        </Flex>
        <Box borderRadius={8} mt="8">

        <Table>
          <Thead>
            <Tr> 
              <Th color="gray.400">Título</Th>
              { isWideVersion && <Th color="gray.400">Autor</Th>}
              <Th color="gray.400">Emprestado</Th>
              <Th color="gray.400">Devolução</Th>
              <Th color="gray.400">Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr bg="gray.800" borderColor="gray.900" borderWidth="medium">
              <Td>
                  Código limpo
              </Td >
              { isWideVersion && <Td color="gray.200">Guilherme Capitão</Td> }
              <Td color="gray.200">
                  22/06//2021
              </Td>
              <Td color="gray.200">
                  24/07/22021
              </Td>
              <Td color="gray.200">
                  Livre
              </Td>
            </Tr>
            <Tr bg="gray.800" borderColor="gray.900" borderWidth="medium" >
              <Td>
                  Código limpo
              </Td>
              { isWideVersion && <Td color="gray.200">Guilherme Capitão</Td> }
              <Td color="gray.200">
                  22/06//2021
              </Td>
              <Td color="gray.200">
                  24/07/22021
              </Td>
              <Td color="gray.200">
                  Livre
              </Td>
            </Tr>
            <Tr bg="gray.800" borderColor="gray.900" borderWidth="medium" >
              <Td>
                Código limpo
              </Td>
              { isWideVersion && <Td color="gray.200">Guilherme Capitão</Td> }
              <Td color="gray.200">
                  22/06//2021
              </Td>
              <Td color="gray.200">
                  24/07/22021
              </Td>
              <Td color="gray.200">
                  Livre
              </Td>
            </Tr>
          </Tbody>
        </Table>

        </Box>
        </Box>
      </Flex>
    </Box>
  )
}