import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
    datasets: [
        {
            label: '',
            data: [2, 3.5, 1, 2, 1],
            fill: false,
            borderColor: '#2563EB',
            tension: .1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        title: {
            display: false,
            text: 'Sales Overview',
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
        legend: {
            display: false,
        },
    },
};

const ChartSample = () => {
    return (
        <div>
            <h2>Attendance</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartSample;
