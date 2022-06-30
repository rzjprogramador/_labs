import { User } from '@src/entities/User'
import { prisma } from '@src/external/database/prisma_cliente/prisma_client'
import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { compare, hash } from 'bcryptjs'
import { Auth } from '@src/entities/Auth'
import AuthConfig from '@src/config/auth'
import { sign } from 'jsonwebtoken'

@Resolver(Auth)
export class SessionController {
  @Mutation(() => Auth)
  async signIn(@Arg('email') email: string, @Arg('password') password: string) {
    const user = prisma.users.findUnique({
      where: { email },
    })

    if (!user) {
      throw new Error('INCORRETA COMBINCACAO DE EMAIL E SENHA')
    }

    const passwordMatched = await compare(password, user.password)
    if (!passwordMatched) {
      throw new Error('INCORRETA COMBINCACAO DE EMAIL E SENHA')
    }

    const { secret, expiresIn } = AuthConfig.jwt

    const token = sign({}, secret, {
      subject: `"${user.id}"`,
      expiresIn,
    })

    return {
      token,
      user,
    }
  }
}
