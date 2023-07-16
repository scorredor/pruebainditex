import styles from './index.module.scss';
import { useState } from 'react';
import { Input } from '../../basic/input';

interface Props {
    totalCount: number,
    onChange: (value: string) => void,
    placeholder?: string
}

export const Filter = (props: Props) => {
    const [filter, setFilter] = useState<string>('')

    const onChangeFilter = (value: string) => {
        setFilter(value)
        props.onChange(value);
    }

    return (<div className={styles.filter}>
        <div className={styles.filter__countContainer}>
            <p className={styles.filter__countNumber}>{props.totalCount}</p>
        </div>
        <Input
            onChange={onChangeFilter}
            placeholder={props.placeholder}
            value={filter}
        />

    </div>)
}