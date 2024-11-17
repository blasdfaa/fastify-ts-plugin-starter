import type { FastifyPluginAsync } from 'fastify'
import type { FastifyPkgPlaceholderOptions } from './types'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync<FastifyPkgPlaceholderOptions> = async (
  fastify,
  options,
) => {
  fastify.decorate('foo', () => {
    // eslint-disable-next-line no-console
    console.log('👍', options)
  })
}

export const fastifyPkgPlaceholder = fp(plugin, {
  fastify: '5.x',
  name: 'pkg-placeholder',
})
