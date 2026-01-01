import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addTrader = createAsyncThunk(
  "trader/add",
  async (data, thunkAPI) => {
    const { traderMlian, traderMoney, traderName, traderfadi } =
      data.traderData;

    if (!traderName) {
      return thunkAPI.rejectWithValue({
        m: "برجاء ادخال اسم",
        t: "error",
        isLoading: false,
      });
    }

    if (data.filtredTraders?.length > 0) {
      return thunkAPI.rejectWithValue({
        m: "هاذا التاجر موجود بالفعل",
        t: "error",
        isLoading: false,
      });
    }

    await data.addNewTrader(traderName, traderMlian, traderfadi, traderMoney);
    data.handleClose();
    data.invalidData();

    return { m: "تم اضافه التاجر", t: "sucs", isLoading: false };
  },
  {
    condition: (_, { getState }) => {
      if (getState().trader.isLoading) {
        return false;
      }
      return true;
    },
  }
);

export const addTraderSlice = createSlice({
  name: "addTrader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    addtrad: (s, action) => {},
  },
  extraReducers: (bulder) => {
    console.log(bulder);
    bulder
      .addCase(addTrader.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTrader.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addTrader.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { addtrad } = addTraderSlice.actions;
export default addTraderSlice.reducer;
