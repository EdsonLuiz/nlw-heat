import { Button, Text, VStack, StackProps } from "@chakra-ui/react";
import {motion} from 'framer-motion'
import {VscGithubInverted} from 'react-icons/vsc'
import { useRouter } from 'next/router'
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const vstackVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4
    }
  }
}


export function LoginBox() {

  const {signInUrl, user} = useContext(AuthContext)
  const router = useRouter()

  console.log(user);
  

  const MotionVStack = motion<StackProps>(VStack)
  return (
    <MotionVStack h="100vh" w="full" p="440px 80px 0"
            justify="center" align="center"
            backgroundImage="/banner-girl.png"
            backgroundRepeat="no-repeat"
            backgroundPosition="center top"
            backgroundColor="gray.800"
            variants={vstackVariant}
            initial="initial"
            animate="animate"
            >
      <Text as="strong" textAlign="center" fontSize="3xl" fontWeight="700" lineHeight="xl">
        Entre e compartilhe sua mensagem
      </Text>
      <Button colorScheme="brandYellow" color="black" size="lg" 
              onClick={() => router.push(signInUrl)}
              leftIcon={<VscGithubInverted size={24} />}>
      Entrar com Github
      </Button>
    </MotionVStack>
  )
}
