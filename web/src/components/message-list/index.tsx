import { Image, ListItem, VStack, Text, HStack, List, Box } from "@chakra-ui/react";

export function MessageList() {
  const arr = [1, 2, 3]
  return (
    <VStack align="flex-start" justifyContent="space-between">

      <Image src="/logo.svg" alt="Do While" 
              h="28px" marginY="32px"/>
      
      <List listStyleType="none" spacing={10}
            display="flex" flexDirection="column" justifyContent="center" flex={1}>
        {arr.map(item => (
          <ListItem maxW="440px" key={item} _even={{marginLeft:"100px"}} >
            <Text as="p"
                  fontSize="xl" lineHeight="28px">
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
            </Text>
            <HStack marginTop="16px" spacing={3}>
              <Box  p="2px"
                    borderRadius="full"
                    bgGradient="linear(to-r, #ff008e, #ffcd1e)">
                <Image  borderRadius="full" 
                        w="36px" h="36px"
                        border="4px" borderColor="gray.900"
                        src="https://github.com/edsonluiz.png" alt="user"/>
              </Box>
              <Text as="span" fontSize={16}>
                Edson Luiz
              </Text>
            </HStack>
          </ListItem>
        ))}

      </List>
    </VStack>
  )
}