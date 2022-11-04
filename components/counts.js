import Chart from "./chart";

export default function Counts({ postData }) {
    const counts = postData.counts;
    const res = counts.map(count =>
        <div>
            <h1>{count[0]}</h1>
            <Chart gymData={count[1]}/>
        </div>
    )
    return res;
}

