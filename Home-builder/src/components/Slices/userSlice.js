import {createSlice}  from "@reduxjs/toolkit";
const userSlice = createSlice({
     name:"user",
     initialState:{
     value:{
           customer:[]
     }
    },
    reducers:{
        setCustomer:(state,action)=>{
            console.log("setcustomer");
            state.value.customer = action.payload;
            console.log(state.value.customer);
                    }     
    }
});
export default userSlice.reducer;
export const { setCustomer } = userSlice.actions;