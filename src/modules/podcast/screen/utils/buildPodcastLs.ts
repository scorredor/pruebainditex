export const buildPodcastLs = (value : unknown) => {
    return `${new Date().getTime()}|||${JSON.stringify(value)}`
}