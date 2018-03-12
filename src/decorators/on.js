import { client } from '../discord'
import { INSTANCE, listeners } from '../Modules'

export default function on (event) {
    return (target, key, descriptor) => {
        if (!listeners.has(event)) listeners.set(event, [])
        const name = `${target.constructor.name}.${key}`

        const listener = (...args) => {
            descriptor.value.apply(target[INSTANCE], args)
            listeners.get(event).push({ target, key, listener, name })
            client.on(event, listener)
            return descriptor
        }
    }
}
