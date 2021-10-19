import { prismaClient } from "../prisma"


class ProfileUserService {
  async execute(user_id: string) {
    const uesr = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    return uesr
  }
}

export {ProfileUserService}