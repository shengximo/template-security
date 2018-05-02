<template>
  <div class="animated fadeIn">
    <b-card-group columns class="card-columns cols-2">
      <b-card header="vm tree">
        <div class="chart-wrapper">
          <cloud-v-m-tree/>
        </div>
      </b-card>
      <b-card header="org tree">
        <div class="chart-wrapper">
          <cloud-org-tree/>
        </div>
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
  import CloudVMTree from './ztrees/CloudVMTree'
  import CloudOrgTree from './ztrees/CloudOrgTree'

  export default {
    name: 'fancytreesdemo',
    components: {
      CloudVMTree,
      CloudOrgTree
    },
    data () {
      return {
        orgdata: {
          foo: 'bazbaz',
          children:
            [
              {title: 'node 1'},
              {
                title: 'node 2',
                folder: true
              }
            ]}
      }
    }
  }
</script>


