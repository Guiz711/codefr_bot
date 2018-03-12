import { client } from './discord'

export const INSTANCE = Symbol();

export let modules = [];
export const commands = new Map();
export const listeners = new Map();

export function load () {
    require('./modules')
}
