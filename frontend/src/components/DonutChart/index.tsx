import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SAleSum } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}
const DonutChar = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: []});

    //Forma Correta
    useEffect(() => {

        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((response) => {

            const data = response.data as SAleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setChartData({ labels: myLabels, series: mySeries});
                console.log(chartData); 
              //console.log(response.data);
 
        });
    },
    []
    )        


    //  const mockData = {
    //    series: [577138, 499928,444867,220426,473088], 
    //  labels: ['Giovanni', 'Fernando', 'Barry Allen','Logan','Maria']
    //} 

    const options = {
        legend: {
            show: true
        }
    }



    return (
        <Chart
            //options={options}//definir a funcao 
            options={{ ...options, labels: chartData.labels }}//dados do eixo x / Rotulos
            series={chartData.series}//valores
            type="donut"//tipo de grafico barras
            height="240"//altura do grafico
        />
    );
};

export default DonutChar;
