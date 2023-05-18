import {PluginItem} from "@babel/core";

export default (): PluginItem => {
    return {
        visitor: {
            JSXAttribute(path, state) {
                const {attribute} = state.opts;

                if (attribute.includes(path.node.name.name)) {
                    path.remove();
                }
            }
        }
    };
}