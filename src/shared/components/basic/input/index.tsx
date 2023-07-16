import styles from './index.module.scss'

interface Props {
    id?: string,
    value?: string,
    onChange: (newValue: string) => void
    placeholder?: string
}

export const Input = (props: Props) => {
    return (
        <input
            id={props.id}
            type="text"
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            className={styles.input}
        />
    )
} 