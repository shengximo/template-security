<template>
  <div>
    <div :id="id" :option="option"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  export default {
    name: 'BarChart',
    props: {
      id: {
        type: String
      },
      option: {
        type: Object
      }
    },
    data: function () {
      return {
        target: undefined
      }
    },
    mounted () {
      this.target = Highcharts.chart(this.id, this.option)
    },
    beforeDestroy: function () {
      this.target.destroy()
    }
  }
</script>
