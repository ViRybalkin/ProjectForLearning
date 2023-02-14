type ModeType = 'development' | 'production'
type PathTypes = {
    entry:string;
    output: string;
    html: string;
}
export type WebpackBuildOption = {
    mode: ModeType,
    path: PathTypes,
    isDev: boolean,
    port: number,
}

export type BuildEnvType = {
    mode: ModeType,
    port: number
}