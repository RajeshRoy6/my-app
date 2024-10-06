import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  text: string;
  password: string;
  email: string;
  number: number;
  date: string; 
  select: string;
  checkbox: boolean;
  radio: string;
  textarea: string;
  file: File | null; 
}

interface FormSliceState {
  formData: FormData;
}

const initialState: FormSliceState = {
  formData: {
    text: '',
    password: '',
    email: '',
    number: 0,
    date: '',
    select: '',
    checkbox: false,
    radio: '',
    textarea: '',
    file: null,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormData>) {
      state.formData = action.payload; // Update the state with the new form data
    },
  },
});

export const { setFormData } = formSlice.actions;
export default formSlice.reducer;
