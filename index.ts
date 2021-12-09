export interface Config {
  limit?: number
}

export default function <T extends (...args: any[]) => any> (
    job: T,
    config: Config = {},
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  // TODO: not implemented yet
}
