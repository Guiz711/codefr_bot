import { client } from './discord'

export const INSTANCE = Symbol();

export let modules = [];
export const commands = new Map();
export const listeners = new Map();

export function load () {
/*    for ([name, Module] of Object.entries(require('./modules/'))) {
        const instance = new Module()
        Module.prototype[INSTANCE] = instance
        instance.name = Module.name

        console.log("coucou")
        modules.push(instance)
    }*/

    require('./modules')
}
