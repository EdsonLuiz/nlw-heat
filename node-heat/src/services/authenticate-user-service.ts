import axios from "axios"
import { prismaClient } from "../prisma"
import {sign} from 'jsonwebtoken'

interface IAccessTokenResponse {
  access_token: string
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

class AuthenticateUserService {
  async execute(code: string) {
    const BASEURL = `https://github.com`
    const URI_GITHUB_ACCESS_TOKEN = `${BASEURL}/login/oauth/access_token`
    const URI_GITHUB_USER = `https://api.github.com/user`

    const client_id = process.env.GITHUB_CLIENT_ID
    const client_secret = process.env.GITHUB_CLIENT_SECRET

    const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(URI_GITHUB_ACCESS_TOKEN, null,  {
      params: {client_id, client_secret, code},
      headers: {'Accept': 'application/json'}
    })

    const response = await axios.get<IUserResponse>(URI_GITHUB_USER, {
      headers: {
        authorization: `Bearer ${accessTokenResponse.access_token}`
      }
    })

    const {login, id, avatar_url, name} = response.data
    

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })

    if(!user) {
      await prismaClient.user.create({
        data: {
          github_id: id,
          login,
          avatar_url,
          name
        }
      })
    }

    const token = sign({
      user: {
        name: user.name,
        avatar_url: user.avatar_url,
        id: user.id
      }
    }, 
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: '1d'
    }
    )

    // return response.data 
    return {token, user}
  }
}

export {AuthenticateUserService}