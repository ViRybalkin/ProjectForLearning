const capitalizeFirstChar = require('../capitalizeFirstChar');

module.exports = (slice, serviceName) => {
  const typesName = `${slice}Types`;
  return `import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "app/providers/StoreProvider";
import {handleError} from "shared/config/helpers/error";
import {${typesName}} from "../types/${typesName}.types";

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
)
  // import {rtkApi} from "shared/config/api/rtkApi";
  //
  // const ${serviceName} = rtkApi.injectEndpoints({
  //     endpoints: (build) => ({
  //         ${serviceName}: build.query<_, void>({
  //             query: () => ({
  //                 url: '_',
  //             }),
  //         }),
  //     }),
  // })
  //
  // export const {use${capitalizeFirstChar(serviceName)}Query} = ${serviceName};
`;
};
