<template>
    <!-- 表格 -->
  <div style="width: 80%; float:left">
    <a-input-search
          placeholder="请输入搜索实体名称"
          class="header_input"
          @search="onSearch"
          style="width: 200px; margin-bottom: 20px;"          
        />
    <a-table
      :columns="columns1"
      :data-source="dataSource1"
      class="components-table-demo-nested"
    >
      <template #expandedRowRender="{ record }">
        <a-table
          :columns="innerColumns1"
          :data-source="[{name:'alias',value:record.alias},{name:'type',value:record.type}]"
          :showHeader="false"
          :pagination="false"
          size="small"
        >
        </a-table>
        <a-table
          :columns="innerColumns1"
          :data-source="[{name:'data'}]"
          :showHeader="false"
          :pagination="false"
          size="small"
        >
          <template #expandedRowRender>
            <a-table
              :columns="innerColumns"
              :data-source="record.data"
              :pagination="{ pageSize: 5}"
              show-less-items
              size="small"
            >
            </a-table>
          </template>
        </a-table>
      </template>
    </a-table>
  </div>
</template>
<script>
//   import { EditOutlined , DeleteOutlined} from '@ant-design/icons-vue';
  import { defineComponent, ref } from 'vue';
  import axios from 'axios';

  const columns1 = [
    {
      title: "subject",
      dataIndex: "subject",
      key: "subject",
    },
  ];
  const dataSource1 = ref([]);
 
  const innerColumns = [
    {
      title: "predicate",
      dataIndex: "predicate",
      key: "predicate",
    },
    {
      title: "object",
      dataIndex: "object",
      key: "object",
      ellipsis: true,
    },
  ];
  const innerColumns1 = [
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
    },
  ];
  const innerData1 = ref([]);
  const data=ref();

  export default defineComponent({
    components: {
    },
    setup() {
      
    // 搜索
    const onSearch = (searchValue) => {
        axios({
            method: 'post',
            url: 'http://172.20.137.106:33004/test/searchKnowledgeBaseByName',
            data:{
              entityName: searchValue,
            } 
        }).then(value => {
            data.value = value.data.data;
            let i=0;
            for(i=0;i<data.value.length;i++){
              data.value[i].key=i;
              data.value[i].alias="["+data.value[i].alias+"]"
              data.value[i].type="["+data.value[i].type+"]"
            }
            dataSource1.value = data.value;
            console.log(data.value);
        })
        }

      return{
        dataSource1,
        columns1,
        onSearch,
        innerColumns,
        innerData1,
        innerColumns1,
      }
    }
  });
</script>