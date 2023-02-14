export const classNames = (mainCls: string, mode = {}, additionalCls:Array<string> = []): string => {
    const modeCls = Object.entries(mode).filter(([cls,value]) => value).map(([cls]) => cls);

    return [
        mainCls,
        ...modeCls,
        ...additionalCls
    ].join(' ')
};
