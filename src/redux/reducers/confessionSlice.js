import { createSlice ,createAsyncThunk} from '@reduxjs/toolkit'

import { publicRequest } from '../../util/apiCall';

const initialState = {
    posts : [],
    isLoading : false,
    isError :false,
    currentChatUser : {}
};

export const getAllFeeds = createAsyncThunk('confess',async(params,{dispatch})=>{
    const res = await publicRequest.get('/post')
   return res.data.data.data 
})
// export const deleteMyCart = createAsyncThunk('cart',async(params,{dispatch})=>{
   
//      await publicRequest.delete('/cart/me/'+params.id)
//      dispatch(getMyCarts(params.userId))
// })
export const createMyPost = createAsyncThunk('confess',async(params,{dispatch})=>{
    console.log(params)
    await publicRequest.post('/post',{
        userId : params.userId,
        desc : params.desc,
        img : params.img
    })
    dispatch(getAllFeeds())
})
const confessSlice = createSlice({
    name:'confess',
    initialState : initialState,
    reducers :{
        setCurrentChat : (state,{payload})=>{
            state.currentChatUser = payload
        }
    },
    extraReducers :{
       [getAllFeeds.pending]:(state,{payload})=>{
        state.isLoading = true;

       },
       [getAllFeeds.fulfilled]:(state,{payload})=>{
        state.isLoading = false;
        state.posts = payload
        
       }

    }
})
export const {setCurrentChat} = confessSlice.actions
export default confessSlice.reducer