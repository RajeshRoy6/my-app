import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormData {
  name: string;
  password: string;
  email: string;  
  date: string; 
  select: string;  
  gender: string;
  textarea: string;
  file: File | null; 
  number: number;
  checkbox: boolean;
}

interface FormSliceState {
  formData: FormData;
}

const initialState: FormSliceState = {
  formData: {
    name: '',
    password: '',
    email: '',    
    date: '',
    select: '',    
    gender: '',
    textarea: '',
    file: null,
    number: 0,
    checkbox: false,
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
