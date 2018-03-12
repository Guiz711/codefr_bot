import * as bot from '../decorators'

export default class Test {
    @bot.command(/^test$/i)
    test ({ channel }) {
        channel.send('Hello world')
    }
}
