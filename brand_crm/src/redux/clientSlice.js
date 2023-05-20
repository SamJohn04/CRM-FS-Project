import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    user: {
        uID: null,
        name: null,
        userIcon: null,
        email: null,
        phoneNumber: null,
        clientHistory: {lastMessage: null, messages: {unread:[], read: []}}
    },
    loading: false,
}

export const addClient = createAsyncThunk(
    'client/add',
    async ({name, email, phoneNumber}, thunkAPI) => {
        const header =  new Headers()
        header.append('Content-Type', 'application/json')
        const response = await fetch('http://localhost:8080/addUser', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                name,
                email,
                phoneNumber
            }),
            mode: 'cors',
            cache: 'default',
        })
        console.log(response)
    }
)

export const getClients = createAsyncThunk(
    'client/get',
    async (thunkAPI) => {
        const response = await fetch('http://localhost:8080/getUsers')
        return response.json();
    }
)

export const deleteClient = createAsyncThunk(
    'client/delete',
    async (uID, thunkAPI) => {
        console.log(uID)
        const header =  new Headers()
        header.append('Content-Type', 'application/json')
        const response = await fetch("http://localhost:8080/client/delete", {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                uID
            }),
            mode: 'cors',
            cache: 'default',
        })
        console.log(response)
    }
)

export const updateUser = createAsyncThunk(
    'client/update',
    async(user, thunkAPI) => {
        const header =  new Headers()
        header.append('Content-Type', 'application/json')
        const response = await fetch("http://localhost:8080/client/update", {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                user
            }),
            mode: 'cors',
            cache: 'default',
        })
        console.log(response)
    }
)

export const clientSlice = createSlice({
    name: 'client',
    initialState: initialState,
    reducers: {
        selectCard: (state, action) => {
            for(let i = 0; i < state.users.length; i++)
                if(state.users[i].uID === action.payload) {
                    state.user = state.users[i];
                    break;
                }
        },
        setName: (state, action) => {
            state.user.name = action.payload;
        },
        setPhone: (state, action) => {
            state.user.phoneNumber = action.payload;
        },
        setEmail: (state, action) => {
            state.user.email = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addClient.pending, (state, action) => {
            console.log('waiting...');
            state.loading=true;
        })
        .addCase(addClient.rejected, (state, action) => {
            window.alert('Could not add...')
            console.log(action.error)
            state.loading = false;
        })
        .addCase(addClient.fulfilled, (state, action) => {
            window.alert('Client added!')
            console.log(action.payload);
            state.loading = false;
        })
        .addCase(getClients.pending, (state, action) => {
            window.alert('Loading clients...')
            state.loading = true;
        })
        .addCase(getClients.fulfilled, (state, action) => {
            state.users = action.payload;
            if(state.user.uID === null && state.users[0] != null)
                state.user = state.users[0]
            state.loading = false;
        })
        .addCase(getClients.rejected, (state, action) => {
            state.loading = false;
            console.log('Rejected', action.error)
            window.alert('Something went wrong. Try again..')
        })
        .addCase(deleteClient.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(deleteClient.fulfilled, (state, action) => {
            state.loading = false;
            window.alert('Client deleted')
            getClients()
        })
        .addCase(deleteClient.rejected, (state, action) => {
            state.loading = false;
            window.alert('Could not delete...')
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            console.log(action.error)
        })
        .addCase(updateUser.pending, (state, action) => {
            state.loading = true;
        })
    }
})

export const { selectCard, setEmail, setName, setPhone } = clientSlice.actions

export default clientSlice.reducer