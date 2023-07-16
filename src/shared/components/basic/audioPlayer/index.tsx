import style from './index.module.scss'

interface Props {    
    src: string,
}

export const AudioPlayer = (props: Props) => {
    return (<>
        <audio data-testid={'audioplayer-testid'} className={style.audioPlayer} controls>
            <source src={props.src} />
        </audio>
    </>)
}