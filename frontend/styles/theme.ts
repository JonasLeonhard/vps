interface Breakpoints {
    s: string
    m: string,
    l: string,
}

interface Spacing {
    xxxs: string,
    xxs: string,
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string,
    xxl: string,
    xxxl: string
}

interface Colors {
    [index: string]: Color
}

interface Color {
    [index: number]: string
}

interface Theme {
    breakpoints: Breakpoints,
    colors: Colors,
    spacing: Spacing
}

const theme: Theme = {
    breakpoints: {
        s: '24rem',
        m: '48rem',
        l: '64rem'
    },
    colors: {
        red: {
            100: 'red',
        }
    },
    spacing: {
        xxxs: '5px',
        xxs: '12px',
        xs: '8px',
        s: '20px',
        m: '30px',
        l: '40px',
        xl: '60px',
        xxl: '80px',
        xxxl: '120px'
    }
}

export default theme;