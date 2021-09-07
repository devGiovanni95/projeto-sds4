import Chart from 'react-apexcharts'

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Giovanni', 'Fernando', 'Barry Allen','Logan','Maria']
        },
        series: [
            {
                name: "% Sucesso",
                data: [90.0,67.1,47.9,79.0,85.4]
            }
        ]
    };


  return(
    <Chart 
        //options={options}//definir a funcao 
        options={{...options, xaxis: mockData.labels}}//dados do eixo x / Rotulos
        series={mockData.series}//valores
        type="bar"//tipo de grafico barras
        height="240"//altura do grafico
    />
);
}

export default BarChart;
