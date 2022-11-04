import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function getElement(counts, hour){
    var list = [];
    for (const [key, value] of Object.entries(counts)) {
        if (hour){
            var time = Number(key);
            //it is pm if hours from 12 onwards
            const suffix = time >= 12 && time != 24 ? "pm":"am";

            time = ((time + 11) % 12 + 1);
            list.push(time + ' ' + suffix)
        } else {
            list.push(value)
        }
    }
    return list;
}

const data = (gymData) => ({
    labels: getElement(gymData, true),
    datasets: [{
        label: '# of People',
        data: getElement(gymData, false),
        borderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
});

export default function Chart({ gymData }) {
    return (
        <div>
            <Bar
                data={data(gymData)}
                width={400}
                height={200}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                          title: {
                            display: true,
                            text: 'Time'
                          }
                        }
                      }  
                }}
            />
        </div>
    );
};