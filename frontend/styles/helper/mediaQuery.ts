/**
 * @param {string} id - key of breakpoints object in /styles/theme.ts eg. one of ['s', 'm', 'l']
 * @param {string} minMax - set in @media (${minMax}-width: ...
 * @example ${mq('l', 'max')} { ... insert css for query here ... }
 */
const mq = (id: string, minMax: 'min' | 'max' = 'min') => ({ theme }) => {
    if (!theme.breakpoints[id]) {
        throw new Error(`theme.breakpoints[${id}] is undefined`)
    }

    return `@media (${minMax}-width: ${theme.breakpoints[id]})`
}

export default mq;