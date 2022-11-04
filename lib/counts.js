export async function getAllCounts() {
    const res = await fetch(`https://marinoscraper.herokuapp.com/getNames`);
    const names = await res.json()
    var paths = [];
    for (const [key, value] of Object.entries(names)) {
        paths.push(
            {
                params: { 
                    id: key,
                    gym: value
                },
            }
        )
    }
    return paths;
}

export async function getAverageCounts(id) {
    var counts = [];
    const names = await (await fetch(`https://marinoscraper.herokuapp.com/getNames`)).json();
    const name = names[id];
    for (let i = 0; i <= 6; i++){
        const res = await fetch(`https://marinoscraper.herokuapp.com/getAverage/${id}/${i}`);
        const count = await res.json();
        counts.push(count);
    }
    return {id, counts, name};
}