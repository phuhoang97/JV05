import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk("fetchCars", async () => {
  const response = await axios.get("http://localhost:8000/cars");
  return response.data;
});

export const deleteCars = createAsyncThunk("deleteCars", async (id) => {
  await axios.delete(`http://localhost:8000/cars/${id}`);
  return id;
  // Xóa ở trên db.json
});

export const postCars = createAsyncThunk("postCars", async (car) => {
  const response = await axios.post("http://localhost:8000/cars", car);
  return response.data;
});

export const putCars = createAsyncThunk("putCars", async (car) => {
  const response = await axios.put(
    `http://localhost:8000/cars/${car.id}`,
    car.inputForm
  );
  return response.data;
});

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    status: "idle",
    error: null,
  },

  // reducers => sử dụng để viết action và xử lý logic cho action đó
  reducers: {},
  // extraReducers => xử lý các api
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.status = "success";
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = "Error";
      });
    builder.addCase(deleteCars.fulfilled, (state, action) => {
      // Cập ở phía client
      state.cars = state.cars.filter((car) => car.id !== action.payload);
      state.status = "success";
    });
    builder.addCase(postCars.fulfilled, (state, action) => {
      state.cars.push(action.payload);
    });
    builder.addCase(putCars.fulfilled, (state, action) => {
      state.cars = state.cars.map((car) =>
        car.id === action.payload.id ? action.payload : car
      );
    });
  },
});

export default carsSlice.reducer;

// Redux
// const reducer = (state=initialState, action) => {}
// khai báo action

// RTK
// createSlice => gộp action và reducer
// thay vì createReducer và createAction
