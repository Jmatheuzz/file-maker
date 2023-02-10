export interface IDeleteUser {
  create: (input: IDeleteUser.Input) => Promise<IDeleteUser.Output>
}

export namespace IDeleteUser {
  export type Input = {id: string}
  export type Output = boolean
}
