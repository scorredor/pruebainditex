export const dateStringToShortDateString = (date: string) => {
    const datePart = date.split('T')[0]
    const arryaDate = datePart.split('-')
    return `${arryaDate[2]}/${arryaDate[1]}/${arryaDate[0]}`
}

export const milisegundosAMinutosYSegundos = (milisegundos: number) => {
    function addZ(n: number) {
        return (n < 10 ? '0' : '') + n;
    }

    const ms = milisegundos % 1000;
    milisegundos = (milisegundos - ms) / 1000;
    const secs = milisegundos % 60;
    milisegundos = (milisegundos - secs) / 60;
    const mins = milisegundos % 60;
    const hrs = (milisegundos - mins) / 60;

    return (addZ(mins + (hrs * 60))) + ':' + addZ(secs);
};