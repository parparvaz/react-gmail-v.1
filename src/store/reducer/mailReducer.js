import {createSlice} from '@reduxjs/toolkit'

let id = 0
const mail = createSlice({
    name: 'mail', initialState: {
        sendMessageIsOpen: false, mailId: null, mails: [],
    }, reducers: {
        openSendMessage: state => {
            state.sendMessageIsOpen = true
        }, closeSendMessage: state => {
            state.sendMessageIsOpen = false
        }, setMailId: (state, action) => {
            state.mailId = action.payload.id
        }, addMail: (state, action) => {
            state.mails.push({
                ...action.payload,
                id: ++id,
                time: getTime()
            })
        }
    }
})


export const {openSendMessage, closeSendMessage, setMailId, addMail} = mail.actions

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen

export const selectMails = state => state.mail.mails

export const getMailById = state => {
    const id = state.mail.mailId
    return state.mail.mails.find(mail => mail.id === id)
}

export default mail.reducer

const getTime = () => {
    let time = new Date()
    return `${time.getUTCFullYear()}/${time.getUTCMonth()}/${time.getUTCDay()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`
}