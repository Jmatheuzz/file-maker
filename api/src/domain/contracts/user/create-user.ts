import { User } from '@/domain/entities'

export interface ICreateUser {
  create: (input: ICreateUser.Input) => Promise<ICreateUser.Output>
}

export namespace ICreateUser {
  export type Input = {
    name: string
    email: string
    password: string}
  export type Output = User | undefined
}
