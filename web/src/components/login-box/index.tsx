import { Button, Text, VStack } from "@chakra-ui/react";
import {VscGithubInverted} from 'react-icons/vsc'

export function LoginBox() {
  return (
    <VStack h="100vh" w="full" p="440px 80px 0"
            justify="center" align="center"
            backgroundImage="/banner-girl.png"
            backgroundRepeat="no-repeat"
            backgroundPosition="center top"
            backgroundColor="gray.800">
      <Text as="strong" textAlign="center" fontSize="3xl" fontWeight="700" lineHeight="xl">
        Entre e compartilhe sua mensagem
      </Text>
      <Button colorScheme="brandButton" size="lg" 
              leftIcon={<VscGithubInverted size={24} />}>
      Entrar com Github
      </Button>
    </VStack>
  )
}