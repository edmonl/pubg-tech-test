export interface Config {
  limit?: number
}

export default function <T extends (...args: any[]) => any> (
    job: T,
    config: Config = {},
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  // TODO: this is not correctly implemented.

  config.limit
  return async (...args) => job(...args)
}
