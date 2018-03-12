import { client } from './src/discord'
import { load } from './src/Modules'

load()

client.login(process.env.DISCORD_TOKEN)
    .catch(console.error)
