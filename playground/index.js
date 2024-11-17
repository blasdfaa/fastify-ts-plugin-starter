import { fastifyPkgPlaceholder } from 'pkg-placeholder'

export default async function (fastify, _opts) {
  await fastify.register(fastifyPkgPlaceholder)

  fastify.foo()
}
