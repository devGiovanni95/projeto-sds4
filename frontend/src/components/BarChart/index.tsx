import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { BASE_URL } from 'utils/requests';


type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    };
    series: SeriesData[];
}


const BarChart = () => {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });


    //Forma Correta
    useEffect(() => {

        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then((response) => {

                const data = response.data as SaleSuccess[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => round(100.0 * x.deals / x.visited, 1));//quantidade de casa que quer ver

                setChartData({

                    labels: {
                        categories: myLabels//estava errado com []
                    },
                    series: [
                        {
                            name: "% Success",
                            data: mySeries
                        }
                    ]
                });

            });
    },
        []
    )


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    //   const mockData = {
    //     labels: {
    //       categories: ['Giovanni', 'Fernando', 'Barry Allen', 'Logan', 'Maria']
    //  },
    // series: [
    //    {
    //      name: "% Sucesso",
    //    data: [90.0, 67.1, 47.9, 79.0, 85.4]
    // }
    //       ]
    // };


    return (
        <Chart
            //options={options}//definir a funcao 
            options={{ ...options, xaxis: chartData.labels }}//dados do eixo x / Rotulos
            series={chartData.series}//valores
            type="bar"//tipo de grafico barras
            height="240"//altura do grafico
        />
    );
}

export default BarChart;
