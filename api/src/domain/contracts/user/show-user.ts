import { User } from '@/domain/entities'

export interface IShowUser {
  create: (input: IShowUser.Input) => Promise<IShowUser.Output>
}

export namespace IShowUser {
  export type Input = {id: string}
  export type Output = User[] | undefined
}
