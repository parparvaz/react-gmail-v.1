import {configureStore} from '@reduxjs/toolkit'
import mailReducer from "./mailReducer";
export default configureStore({
    reducer: {
        mail: mailReducer
    }
})
