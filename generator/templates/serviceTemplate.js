module.exports = (slice, serviceName) => {
  const typesName = `${slice}Types`;
  return `import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app";
import {handleError} from "shared";
import {${typesName}} from "../types";

export const ${serviceName} = createAsyncThunk<${typesName}, string, ThunkConfig<string>>(
    '${slice}/${serviceName}',
    async (payload, {extra: {api}, rejectWithValue}) => {
        try {
            const {data} = await api.get<${typesName}>('')


            return data
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message)
            }

            const {data} = handleError(error);

            return rejectWithValue(data.message)
        }
    }
)`;
};
