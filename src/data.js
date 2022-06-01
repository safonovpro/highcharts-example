function setColor(series) {
    return series.map(item => {
        const val = item.y
        let color = '#DB3519'

        if(val >= 50 && val < 100) {
            color = '#F0961D'
        } else if(item.y >= 100) {
            color = '#37B34A'
        }

        return { ...item, color }
    })
}

const kpi = [
    {
        name: "Ведущие ученые",
        y: 115.67,
        value: '155/134',
        drilldown: "directions"
    },
    {
        name: "Новые ведущие ученые",
        y: 105.56,
        value: '19/18',
        drilldown: "directions"
    },
    {
        name: "Доля иностранных исследователей",
        y: 92.22,
        value: '8.41/9.12',
        drilldown: "directions"
    },
    {
        name: "Доля исследователей до 39 лет",
        y: 119.07,
        value: '58.57/49.19',
        drilldown: "directions"
    },
    {
        name: "Сотрудники, опубликовавшие статьи Q1 и Q2",
        y: 90.63,
        value: '145/160',
        drilldown: "directions"
    },
    {
        name: "Доля исследований под руководством молодых исследователей",
        y: 150,
        value: '12/8',
        drilldown: "directions"
    },
    {
        name: "Образовательные программы",
        y: 76.47,
        value: '13/17',
        drilldown: "directions"
    },
    {
        name: "Прошедше обучение",
        y: 105.86,
        value: '470/444',
        drilldown: "directions"
    },
    {
        name: "Иностранные аспиранты",
        y: 100,
        value: '11/11',
        drilldown: "directions"
    },
    {
        name: "Аспиранты из субъектов РФ",
        y: 37.50,
        value: '6/16',
        drilldown: "directions"
    },
    {
        name: "Софинансирование",
        y: 7.48,
        value: '12.34/164.87',
        drilldown: "directions"
    },
    {
        name: "Статьи Q1 и Q2",
        y: 78.91,
        value: '101/128',
        drilldown: "directions"
    },
    {
        name: "Заявки на РИД",
        y: 45.45,
        value: '20/44',
        drilldown: "directions"
    },
    {
        name: "Кадровый состав",
        y: 100.44,
        value: '690/687',
        drilldown: "directions"
    },
]
const directions = [
    {
        name: "Иванов А.И.",
        y: 89.23,
        value: '58/65',
        drilldown: "groups"
    },
    {
        name: "Семенов В.В.",
        y: 58.82,
        value: '20/34',
        drilldown: "groups"
    },
    {
        name: "Артёмов Д.Г.",
        y: 92.86,
        value: '13/14',
        drilldown: "groups"
    },
    {
        name: "Портнов А.А.",
        y: 50,
        value: '4/8',
        drilldown: "groups"
    },
    {
        name: "Васильев А.В.",
        y: 28.57,
        value: '2/7',
        drilldown: "groups"
    },
]
const groups = [
    {
        name: "ИЦ ЦКИ",
        y: 133.33,
        value: '4/3',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Жарковский А.А.",
        y: 100,
        value: '0/0',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Зегжда Д.П.",
        y: 0,
        value: '0/1',
        drilldown: "kpi_by_groups"
    },
    {
        name: "ИЦ ЦКИЗ",
        y: 100,
        value: '0/0',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Баденко В.Л.",
        y: 100,
        value: '6/6',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Елистратов В.В.",
        y: 100,
        value: '1/1',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Болсуновская М.В.",
        y: 25,
        value: '1/4',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Дирекция",
        y: 182.35,
        value: '31/17',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Шейнерман А.Г.",
        y: 0,
        value: '0/9',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Одноблюдов М.А.",
        y: 150,
        value: '6/4',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Немов А.С.",
        y: 75,
        value: '6/8',
        drilldown: "kpi_by_groups"
    },
    {
        name: "Альхименко А.А.",
        y: 25,
        value: '3/12',
        drilldown: "kpi_by_groups"
    },
]
const kpiByGroup = [
    {
        name: "Ведущие ученые",
        y: 66.67,
        value: '4/6',
    },
    {
        name: "Новые ведущие ученые",
        y: 100,
        value: '3/0',
    },
    {
        name: "Доля иностранных исследователей",
        y: 25.17,
        value: '2.04/8.11',
    },
    {
        name: "Доля исследователей до 39 лет",
        y: 194.17,
        value: '37.84/37.84',
    },
    {
        name: "Сотрудники, опубликовавшие статьи Q1 и Q2",
        y: 400,
        value: '12/3',
    },
    {
        name: "Доля исследований под руководством молодых исследователей",
        y: 100,
        value: '0/0',
    },
    {
        name: "Образовательные программы",
        y: 71.43,
        value: '5/7',
    },
    {
        name: "Прошедше обучение",
        y: 241.82,
        value: '133/55',
    },
    {
        name: "Иностранные аспиранты",
        y: 100,
        value: '0/0',
    },
    {
        name: "Аспиранты из субъектов РФ",
        y: 0,
        value: '0/1',
    },
    {
        name: "Софинансирование",
        y: 0,
        value: '0/49.94',
    },
    {
        name: "Статьи Q1 и Q2",
        y: 133,
        value: '4/3',
    },
    {
        name: "Заявки на РИД",
        y: 100,
        value: '1/1',
    },
    {
        name: "Кадровый состав",
        y: 73.19,
        value: '172/235',
    },
]

const data = {
    chart: {
        type: "column",
        events: {
            drilldown: function(e) {
                this.setTitle({ text: e.seriesOptions.name });
            },
            drillup: function(e) {
                this.setTitle({ text: e.seriesOptions.name });
            }
        }
    },
    title: {
        text: "Показатели эффективности"
    },
    subtitle: {
        text: "По данным на 01 января 2022 года"
    },
    xAxis: { type: "category" },
    yAxis: {
        title: { text: "% достижения" },
        plotLines: [
            {
                value: 100,
                color: '#F0961D',
                dashStyle: 'LongDash',
                width: 1,
                label: {
                    text: '100% плана'
                },
                zIndex: 5,
            }
        ]
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.value:.1f}'
            }
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<b>{point.name}</b>: <b>{point.y:.2f}%</b><br/>'
    },
    series: [ {
        name: "Показатели эффективности",
        data: setColor(kpi),
    } ],
    drilldown: {
      series: [
        {
          name: "Направления по статьям Q1 и Q2",
          id: "directions",
          data: setColor(directions),
        },
        {
            name: "Группы входящие в направление Иванова А.И. по статьям Q1 и Q2",
            id: "groups",
            data: setColor(groups),
        },
        {
            name: "KPI группы ИЦ ЦКИ",
            id: "kpi_by_groups",
            data: setColor(kpiByGroup),
        },
      ]
    }
  }
