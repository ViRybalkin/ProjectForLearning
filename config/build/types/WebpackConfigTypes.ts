type ModeType = 'development' | 'production'
type PathTypes = {
    entry: string;
    output: string;
    html: string;
    src: string;
    fromLocale: string;
    toLocale: string;
}
export type WebpackBuildOption = {
    mode: ModeType;
    path: PathTypes;
    isDev: boolean;
    port: number;
    isReport: boolean;
    baseUrl: string;
    project: 'frontend' | 'storybook' | 'jest'
}

export type BuildEnvType = {
    mode: ModeType;
    port: number;
    report: true;
    baseUrl: string;
}
