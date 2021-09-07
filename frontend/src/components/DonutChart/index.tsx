import Chart from 'react-apexcharts'

const DonutChar = () => {
 
    const mockData = {
        series: [577138, 499928,444867,220426,473088], 
        labels: ['Giovanni', 'Fernando', 'Barry Allen','Logan','Maria']
    } 

    const options = {
        legend: {
           show: true
        }
    }



  return(
    <Chart 
        //options={options}//definir a funcao 
        options={{...options, labels: mockData.labels}}//dados do eixo x / Rotulos
        series={mockData.series}//valores
        type="donut"//tipo de grafico barras
        height="240"//altura do grafico
    />
);
};

export default DonutChar;
