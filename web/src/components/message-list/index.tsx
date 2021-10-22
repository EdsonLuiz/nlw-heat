import { Image, ListItem, VStack, Text, HStack, List, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    api.get<Message[]>('messages/last3').then(response => setMessages(response.data))
  }, [])
  return (
    <VStack align="flex-start" justifyContent="space-between">

      <Image src="/logo.svg" alt="Do While" 
              h="28px" marginY="32px"/>
      
      <List listStyleType="none" spacing={10}
            display="flex" flexDirection="column" justifyContent="center" flex={1}>
        {messages.map(item => (
          <ListItem maxW="440px" key={item.id} _even={{marginLeft:"100px"}} >
            <Text as="p"
                  fontSize="xl" lineHeight="28px">
                    {item.text}
            </Text>
            <HStack marginTop="16px" spacing={3}>
              <Box  p="2px"
                    borderRadius="full"
                    bgGradient="linear(to-r, #ff008e, #ffcd1e)">
                <Image  borderRadius="full" 
                        w="36px" h="36px"
                        border="4px" borderColor="gray.900"
                        src={item.user.avatar_url} alt={item.user.name}/>
              </Box>
              <Text as="span" fontSize={16}>
                {item.user.name}
              </Text>
            </HStack>
          </ListItem>
        ))}

      </List>
    </VStack>
  )
}