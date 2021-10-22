import { Button, Text, VStack, StackProps } from "@chakra-ui/react";
import {motion} from 'framer-motion'
import {VscGithubInverted} from 'react-icons/vsc'
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { api } from "../../services/api";

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

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox() {

  const router = useRouter()

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=8db4e584125ee9aa069c`

  async function signIn(githubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })

    const {token, user} = response.data
    localStorage.setItem('@dowhile:token', token)
    console.log(user);
    
  }

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes('?code=')

    if(hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=')
      window.history.pushState({}, '', urlWithoutCode)
      signIn(githubCode)
    }
  }, [])

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
