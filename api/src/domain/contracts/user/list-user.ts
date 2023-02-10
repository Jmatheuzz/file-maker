import { User } from '@/domain/entities'

export interface IListUser {
  create: (input: IListUser.Input) => Promise<IListUser.Output>
}

export namespace IListUser {
  export type Input = {filter?: Omit<User, 'password'>}
  export type Output = User | undefined
}
