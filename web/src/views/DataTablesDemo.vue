<template>
  <div class="animated fadeIn">

    <b-row>
      <b-col sm="12">
        <simple-data-table/>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12">
        <complex-data-table/>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import SimpleDataTable from './datatables/SimpleDataTable'
  import ComplexDataTable from './datatables/ComplexDataTable'

  export default {
    name: 'datatablesdemo',
    components: {
      SimpleDataTable,
      ComplexDataTable
    }
  }
</script>

//for example soure code for tempoary using

