import { configureStore, combineReducers } from '@reduxjs/toolkit'

// 使用combineReducers函数将多个reducer组合成一个单一的reducer
const reducer = combineReducers({
    
})

// 使用configureStore函数来定义一个Redux Store
const store = configureStore({
    reducer,
})

export default store