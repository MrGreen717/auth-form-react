import { toast } from 'react-toastify'
import { history } from '../redux/store'

export const sendEmail = () => {
	toast('Ссылка для восстановления отправлена на ваш Email. Проверьте почту.', {
		position: toast.POSITION.TOP_CENTER,
		onOpen: history.push('/'),
		onClose: history.push('/')
	})
}

export const successUpdatePassword = () => {
	toast('Пароль успешно изменён.', {
		position: toast.POSITION.TOP_CENTER,
		onOpen: history.push('/'),
		onClose: history.push('/')
	})
}
