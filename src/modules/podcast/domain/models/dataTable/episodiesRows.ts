import { EpisodieModel, EpisodieModelLite } from '../store/podcastEpisodiesStoreModel';

export const buildRowsEpisodies = (rows: EpisodieModel[]) : EpisodieModelLite[] => {

    return rows.map(p => {
        const newRow = {
            id: p.id,
            title: p.title,
            date: p.date,
            duration: p.duration
        }
        return newRow
    })
}