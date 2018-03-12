import { client } from '../discord'
import { INSTANCE, commands } from '../Modules'
import settings from '../../settings.json'

const PREFIX = settings.prefix;

client.on('message', message => {
    Array.from(commands.entries())
        .filter(([_, { options: { allowPrivate = false }}]) => allowPrivate || message.guild)
        .filter(([_, { options: { prefix = true } }]) => !prefix || message.content.startsWith(PREFIX))
        .map(([regex, value]) => {
            const content = value.options.clean ? message.cleanContent : message.content
            return [
                regex.exec(
                    value.options.prefix || true
                        ? content.substring(PREFIX.length)
                        : content
                ),
                value
            ]
        })
        .filter(([res]) => res !== null)
        .forEach(([result, { value, name, target }]) => value.apply(target[INSTANCE], [message].concat(result.slice(1))))

    for (const regex of commands.keys()) {
        regex.lastIndex = 0
    }
})

export default function command (regex, options = {}) {
    return (target, key, descriptor) => {
        commands.set(regex, {
            name: `${target.constructor.name}.${key}`,
            target,
            value: descriptor.value,
            options
        })
        return descriptor
    }
}
