module.exports = (slice) => {
  const typesName = `${slice}Types`;
  const typeNameImport = `${typesName}.types`;
  const exportSliceName = `${slice}Slice`;
  const serviceName = `get${slice}`;

  return `import {createSlice} from '@reduxjs/toolkit';
import {${serviceName}} from "../service/${serviceName}.service";
import {${typesName}} from "../types/${typeNameImport}";

const initialState: ${typesName} = {
};

export const ${slice}Slice = createSlice({
    name: '${slice}',
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(${serviceName}.pending, (state) => {
    //         })
    //         .addCase(${serviceName}.fulfilled, (state, action) => {
    //         })
    //         .addCase(${serviceName}.rejected, (state, action) => {
    //         })
    // }
});

export const ${slice}Action = ${exportSliceName}.actions;
export const {reducer: ${slice}Reducer} = ${exportSliceName};`;
};
