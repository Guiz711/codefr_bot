import * as bot from '../decorators'

export default class Help {
    @bot.command(/^help$/i)
    help ({ channel }) {
        channel.send('This is the help command')
    }
}
