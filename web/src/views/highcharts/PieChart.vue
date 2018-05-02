<template>
  <div>
    <div :id="id" :option="option"></div>
  </div>
</template>

<script>
  import Highcharts from 'highcharts'
  export default {
    name: 'PieChart',
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
