type ModeType = Record<string, boolean>

export const classNames = (mainCls: string, mode: ModeType, additionalCls?: Array<string>): string => {
    const modeCls = Object.entries(mode).filter(([cls,value]) => value).map(([cls]) => cls);

    return [
        mainCls,
        ...modeCls,
        ...additionalCls
    ].join(' ')
};
