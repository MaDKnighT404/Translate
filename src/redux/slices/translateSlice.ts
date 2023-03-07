import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { PayloadAction } from '@reduxjs/toolkit';

export type ValueState = {
  outputValue: string;
  isFetching: boolean;
};

const initialState: ValueState = {
  outputValue: '',
  isFetching: false,
};

type Response = {
  data: {
  ok: boolean,
  text_lang: string
    translated_text: string
  }
};

type ResponseData = {
  ok: boolean,
  text_lang: string
  translated_text: string
};


export const translateRequest = createAsyncThunk(
  'translate/requestStatus',
  async (value: string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("from", "ru");
    encodedParams.append("to", "en");
    encodedParams.append("text", value);
    
const options = {
  method: 'POST',
  url: 'https://translo.p.rapidapi.com/api/v3/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'ee77eae60cmshbf83137c7cc8123p110ceejsna65ffcca7f5a',
    'X-RapidAPI-Host': 'translo.p.rapidapi.com'
  },
  data: encodedParams
};


    const request: any = axios
      .request(options)
      .then(function (response: Response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    ;
    return request
  }
);

export const translateSlice = createSlice({
  name: 'transtale',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(translateRequest.fulfilled, (state: ValueState, action: PayloadAction<ResponseData>) => {
      state.isFetching = false;
      state.outputValue = action.payload.translated_text;
    });
    builder.addCase(translateRequest.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(translateRequest.rejected, (state) => {
      state.isFetching = false;
    });
  },
});

export const translateReducer = translateSlice.reducer;
export const translateAction = translateSlice.actions;
