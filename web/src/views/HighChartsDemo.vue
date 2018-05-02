<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
      <b-card header="Pie Chart">
        <div class="chart-wrapper">
          <pie-chart :id = "pieid" :option = "pieoption"></pie-chart>
        </div>
      </b-card>
      <b-card header="Bar Chart">
        <div class="chart-wrapper">
          <bar-chart :id = "barid" :option = "baroption"></bar-chart>
        </div>
      </b-card>
      <b-card header="Dynamic Line Chart">
        <div class="chart-wrapper">
          <d-line-chart :id = "dlineid" :option = "dlineoption"></d-line-chart>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
  import Highcharts from 'highcharts'
  import PieChart from './highcharts/PieChart'
  import BarChart from './highcharts/BarChart'
  import DLineChart from './highcharts/DLineChart'
  // import dlineoptions from './highcharts/dlineoptions'
  // import baroptions from './highcharts/baroptions'
  export default {
    name: 'highchartsdemo',
    components: {
      PieChart,
      BarChart,
      DLineChart
    },
    data () {
      const _this = this
      return {
        timer2: '8',
        timer1: '',
        pieid: 'mytestpie1',
        pieoption: {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
          },
          title: {
            text: 'Browser My testing Pie Chart, 2018'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: false
              },
              showInLegend: true
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
              name: 'Chrome',
              y: 61.41,
              sliced: true,
              selected: true
            }, {
              name: 'Internet Explorer',
              y: 11.84
            }, {
              name: 'Firefox',
              y: 10.85
            }, {
              name: 'Edge',
              y: 4.67
            }, {
              name: 'Safari',
              y: 4.18
            }, {
              name: 'Other',
              y: 7.05
            }]
          }]
        },
        barid: 'mybarid',
        baroption: {
          chart: {
            type: 'bar'
          },
          title: {
            text: 'test for bar chart!'
          },
          subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
          },
          xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
            title: {
              text: null
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Population (millions)',
              align: 'high'
            },
            labels: {
              overflow: 'justify'
            }
          },
          tooltip: {
            valueSuffix: ' millions'
          },
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            shadow: true
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'Year 2800',
            data: [107, 31, 635, 203, 2]
          }, {
            name: 'Year 3900',
            data: [133, 156, 947, 408, 6]
          }, {
            name: 'Year 4012',
            data: [1052, 954, 4250, 740, 38]
          }]
        },
        dlineid: 'mydlinechart',
        dlineoption: {
          chart: {
            type: 'spline',
            animation: Highcharts.svg, // don't animate in old IE
            marginRight: 10,
            events: {
              load: function () {
                // for debug the load funtion error
                // console.log('load function...')
                // set up the updating of the chart each second
                var series1 = this.series[0]
                _this.timer1 = setInterval(() => {
                  var x = (new Date()).getTime() // current time
                  var y = Math.random()
                  console.log('starting the series1.addpoint function ....')
                  series1.addPoint([x, y], true, true, true)
                }, 1000)
                console.log('timer1 = ', _this.timer1)
              }
            }
          },
          title: {
            text: 'Test the dynamic line chart!'
          },
          series: [{
            name: 'Random data',
            data: (function () {
              // generate an array of random data
              var data = []
              var time = (new Date()).getTime()
              var i
              for (i = -19; i <= 0; i += 1) {
                data.push({
                  x: time + i * 1000,
                  y: Math.random()
                })
              }
              return data
            }())
          }]
        }
      }
    },
    mounted () {

    },
    beforeDestroy: function () {
      console.log('destroy interval timer...')
      console.log('timer2 id=', this.timer2)
      console.log('timer1 id=', this.timer1)
      // this.timer1 = '8'
      clearInterval(this.timer1)
    }
  }
</script>

//for example soure code for tempoary using

