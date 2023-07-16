import { render, screen } from '@testing-library/react'
import { AudioPlayer } from './index.tsx'

describe('AudioPlayer testing', () => {

    const dataTestidAudioTag = 'audioplayer-testid';

    test('Recibe el audio', () => {
        render(<AudioPlayer            />)        

        expect(screen.getByTestId(dataTestidAudioTag))

    })
})