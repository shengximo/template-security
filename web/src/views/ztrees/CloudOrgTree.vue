<template>
  <div>
    <ul id='treeDemo' class='ztree'></ul>
  </div>
</template>

<script>
  // import fancytree from 'jquery.fancytree'
  // import $ from 'jquery'
  // import '../../../node_modules/dist/jquery.js'
  // import '../../../node_modules/ztree/js/jquery-1.4.4.min.js'
  // import '../../../node_modules/ztree/js/jquery.ztree.all.js'
  // import '../../../node_modules/ztree/js/jquery.ztree.core.js'
  // import '../../../node_modules/ztree/js/jquery.ztree.excheck.js'
  // import '../../../node_modules/ztree/js/jquery.ztree.excheck.js'
  import $ from 'jquery'
  import 'ztree'

  export default {
    name: 'CloudOrgTree',
    data: function () {
      return {
        target: undefined,
        setting: {
          data: {
            simpleData: {
              enable: true
            }
          }
        },
        zNodes: [
          {
            name: '父节点1 - 展开',
            open: true,
            children: [
              {
                name: '父节点11 - 折叠',
                children: [
                  {
                    name: '叶子节点111'
                  },
                  {
                    name: '叶子节点112'
                  },
                  {
                    name: '叶子节点113'
                  },
                  {
                    name: '叶子节点114'
                  }
                ]
              },
              {
                name: '父节点12 - 折叠',
                children: [
                  {
                    name: '叶子节点121'
                  },
                  {
                    name: '叶子节点122'
                  },
                  {
                    name: '叶子节点123'
                  },
                  {
                    name: '叶子节点124'
                  }
                ]
              },
              {
                name: '父节点13 - 没有子节点',
                isParent: true
              }
            ]
          },
          {
            name: '父节点2 - 折叠',
            children: [
              {
                name: '父节点21 - 展开',
                open: true,
                children: [
                  {
                    name: '叶子节点211'
                  },
                  {
                    name: '叶子节点212'
                  },
                  {
                    name: '叶子节点213'
                  },
                  {
                    name: '叶子节点214'
                  }
                ]},
              {
                name: '父节点22 - 折叠',
                children: [
                  {
                    name: '叶子节点221'
                  },
                  {
                    name: '叶子节点222'
                  },
                  {
                    name: '叶子节点223'
                  },
                  {
                    name: '叶子节点224'
                  }
                ]},
              {
                name: '父节点23 - 折叠',
                children: [
                  {
                    name: '叶子节点231'
                  },
                  {
                    name: '叶子节点232'
                  },
                  {
                    name: '叶子节点233'
                  },
                  {
                    name: '叶子节点234'
                  }
                ]}
            ]},
          {
            name: '父节点3 - 没有子节点',
            isParent: true
          }
        ]
      }
    },
    mounted () {
      this.target = $.fn.zTree.init($('#treeDemo'), this.setting, this.zNodes)
    },
    beforeDestroy: function () {
      $.fn.zTree.destroy('treeDemo')
    }

  }
</script>
