declare module 'fastify' {
  export interface FastifyInstance {
    foo: () => void
  }
}

export interface FastifyPkgPlaceholderOptions {
  foo: string
}
