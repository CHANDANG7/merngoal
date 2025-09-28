import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import goalService from "./goalService";
const initialState={
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false
}

//create goal
export const creategoal = createAsyncThunk('goal/create',async(goalData,thunkAPI)=>
{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await goalService.createGoal(goalData,token)
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message)||error.message|| error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})
    
export const goalSlice= createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>
    {
        builder
        .addCase(creategoal.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(creategoal.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.goals.push(action.payload)
        })
        .addCase(creategoal.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
        })
    }
})

export const{reset}=goalSlice.actions
export default goalSlice.reducer