Highcharts.chart(document.addEventListener('DOMContentLoaded', function () {
    Highcharts.setOptions({
        lang: {
            drillUpText: 'Вернуться к «{series.name}»'
        }
    });
    Highcharts.chart('container', data);
}))
