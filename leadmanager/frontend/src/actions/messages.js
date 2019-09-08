import {CREATE_MESSAGE} from './types'

// create message

export const createMessage = msg => ({
  type: CREATE_MESSAGE,
  payload: msg
})