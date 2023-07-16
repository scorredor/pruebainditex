import { useState } from 'react';
import { PodcastDetailStoreModel, PodcastDetailStoreModelInitialize } from '../models/store/podcastEpisodiesStoreModel';
import { PodcastModel } from '../models/store/podcastStoreModel';

export const useValidateExistingData = () => {

    const MINUTES_OF_DAY = 1440
    const [search, setSearch] = useState<boolean>(false)
    const [dataSaved, setDataSaved] = useState<PodcastModel[] | PodcastDetailStoreModel>([])

    const validateLocalStorage = (key: string) => {
        const podcast = localStorage.getItem(key)
        console.log('PODCAST', podcast)
        if (podcast) {
            const dateSaved = new Date(Number(podcast!.split('|||')[0]))
            const diffMs = (new Date().getTime() - dateSaved.getTime());
            const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

            if (diffMins > MINUTES_OF_DAY) {
                setSearch(true)
                setDataSaved(Number(key) === 0 ? [] : new PodcastDetailStoreModelInitialize())
            }
            else {
                setDataSaved(JSON.parse(podcast!.split('|||')[1]))
                setSearch(false)
            }
        }
        else
            setSearch(true)
    }

    const saveDataLocalStorage = (key: string, value: string) => {
        localStorage.setItem(key, value);
    }

    return { search, dataSaved, validateLocalStorage, saveDataLocalStorage }
}