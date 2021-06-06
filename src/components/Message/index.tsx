import { message } from 'antd'

export const success = (text: string) => {
  message.success(text)
}

export const error = (text: string) => {
  message.error(text)
}

export const warning = (text: string) => {
  message.warning(text)
}
