/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        readonly DB_URL: string;
    }
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}
