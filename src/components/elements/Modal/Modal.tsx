import React, { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

export const modalRoot = typeof window !== 'undefined' ? document.querySelector('#__next') : null
const Modal: FC<{
	show: boolean
	toggleModal: () => void
}> = (props) => {
	const { children, show = false, toggleModal } = props

	const onOverlay = (e) => {
		if (e.currentTarget === e.target) {
			toggleModal()
		}
	}

	useEffect(() => {
		const $body = document.querySelector('body')
		$body.classList.add('modal-open')

		return () => {
			$body.classList.remove('modal-open')
		}
	}, [show])

	return createPortal(
		<div className={styles.modal__overlay} onMouseUp={onOverlay}>
			<div className={styles.modal__dialog}>
				<div className={styles.modal__content} data-cy="modal">
					<button type="button" className={styles.close} onClick={toggleModal}>
						&times;
					</button>
					{children}
				</div>
			</div>
		</div>,
		modalRoot
	)
}

export default Modal
