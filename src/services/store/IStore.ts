export default interface IStore<T> {
  save(model: T): T
  remove(model: T): void
  get(id: string): T
  getAll(): T[]
}
