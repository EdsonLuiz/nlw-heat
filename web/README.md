# Notes

- No chakra o link com estilo de botão foi substituído por um botão que redireciona o usuário para o oauth go guthub.
```tsx
import { useRouter } from 'next/router'

export function Component() {
  const router = useRouter()
  const oautUrl = 'https://'
  return (
      <Button colorScheme="brandYellow" color="black" size="lg" 
              onClick={() => router.push(oauthUrl)}
              leftIcon={<VscGithubInverted size={24} />}>
        Entrar com Github
      </Button>
  )
}
```