import { User } from '@/domain/entities'

export interface IUpdateUser {
  update: (input: IUpdateUser.Input) => Promise<IUpdateUser.Output>
}

export namespace IUpdateUser {
  export type Input = {
    id: string
    name?: string
    email?: string
    password?: string}
  export type Output = User | undefined
}
