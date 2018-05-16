import { aide } from './aide'

export const logic = ($message) => {
    return new Promise((resolve, reject) => {
        const response = aide[Math.floor(Math.random() * aide.length)];
    const newMessage = Object.assign($message.message, { content: response })

    resolve(newMessage)
    })
}


