# vxeTable表格
组件名`MeVxeTable`，对[vxe table](hhttps://vxetable.cn/)组件的封装，在保留原有功能的情况下，扩展了顶部工具栏功能，并且保留`VxeTable`的 `props` 和 `emit` `type`提示。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meVxeTable`。
- 组件对应的全局语言包文件为`src/locales/lang/en/meVxeTable.ts` `src/locales/lang/zh-cn/meVxeTable.ts`。
- 所有的非`props` `attr`不会设置到根元素,都会透传到 `VxeTable`上。
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| name | string | 名称默认值为meVxeTable,会做为打印的表头和导出的文件名 | 否|
| meClass|string \| string[]| 根元素上的class | 否 |
| exportMenu | `{label: string;filename?: string;handle: (vxeTable: VxeTableInstance, filename: string) => void \| 'csv' \| 'html' \| 'xml' \| 'txt'}[]` | 导出菜单默认值为 `[{ label: 'csv', handle: 'csv' },{ label: 'html', handle: 'html' },{ label: 'xml', handle: 'xml' },{ label: 'txt', handle: 'txt' }]` | 否|
| print | boolean\|VxeTablePropTypes.PrintConfig | 打印配置，默认为{}，如果不想展示传入false | 否 |
| customColumn | boolean |自定义列，默认为true | 否 |
| defaultShowSearch | boolean | 默认是否展示 [筛选]() 默认值为false | 否 | 
| toolbar | boolean | 是否展示工具栏 默认为true,这里的工具栏是自行封装的工具栏非vxeToolbar | 否 |
| vxeTable的属性 | - | 支持vxeTable的所有属性，请参考[vxeTable文档](https://vxetable.cn/#/table/api)| - | 

| props.exportMenu      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| label | string | 导出选项名称| 是 |
| filename | string | 导出文件名，为空时使用`props.name` | 否 |
| handle | (vxeTable: VxeTableInstance, filename: string) => void \| 'csv' \| 'html' \| 'xml' \| 'txt' | 导出执行函数/受支持的导出code | 是 |

## 组件事件

| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| quickSearch | (searchText:string) => void | 快捷搜索|
| refresh | () => void | 刷新按钮被点击时触发 |
| add | () => void | 新增按钮被点击时触发 |
| vxeTable的事件 | - | 支持vxeTable的所有事件，请参考[vxeTable文档](https://vxetable.cn/#/table/api)| - |

## 组件插槽

| 插槽名  |	说明  |	子标签 |
| ----------- | ----------- | ----------- |
| - | 和[vxeTable](https://vxetable.cn/#/table/base/basic)对应插槽功能一致。自定义默认内容 | vxe-column |
| empty	| 和[vxeTable](https://vxetable.cn/#/table/api)对应插槽功能一致。当数据为空时自定义的内容|	— |
| search | 筛选项，当点击工具栏筛选按钮时会控制其显隐 | — |
| buttons | 工具栏左侧扩展操作按钮 | — |
| tools | 工具栏右侧扩展菜单 | — |
| toolsButton|  工具栏右侧扩展按钮 | — |

## 组件属性/方法
| 名称  |	类型  |	说明 |
| ----------- | ----------- | ----------- |
| vxeTableRef | VxeTableInstance | vxeTable的ref对象 |
|searchText |string | 快捷搜索关键字 |

## 示例

```vue
<template>
  <div class="vxe-table-demo">
    <me-vxe-table
      ref="meVxeTableRef"
      :loading="demo1.loading"
      :data="demo1.tableData"
      :footer-method="footerMethod"
      :edit-config="{ trigger: 'click', mode: 'row', showStatus: true }"
      :print="print"
      stripe
      height="600px"
      me-class="table"
      border
      show-overflow
      show-footer
      keep-source
      class="my-xtable-element"
      @refresh="getData()"
      @quick-search="getData()"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" inline label-width="100px" class="search">
          <el-form-item label="名称" prop="name">
            <el-input v-model="searchForm.name" />
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-select v-model="searchForm.type" clearable>
              <el-option label="类型1" value="1" />
              <el-option label="类型2" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item label="日期" prop="date">
            <el-date-picker v-model="searchForm.date" type="date" />
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="searchForm.address" />
          </el-form-item>
          <el-form-item label="邮政编码" prop="zip">
            <el-input v-model="searchForm.zip" />
          </el-form-item>
          <el-form-item label=" ">
            <el-button type="primary" @click="getData()">查询</el-button>
            <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">重置</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="() => (print = print ? false : {})">打印显/隐</el-button>
        <el-button @click="demo1.tableData = []">清空</el-button>
        <el-button @click="xTable!.clearCheckboxRow()">全选清空</el-button>
      </template>
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" width="80">
        <template #header>
          <span>序号</span>
          <i class="el-icon-question"></i>
        </template>
      </vxe-column>
      <vxe-colgroup title="Group1">
        <vxe-column field="name" title="ElInput" min-width="140" :edit-render="{}">
          <template #edit="scope">
            <el-input v-model="scope.row.name" @input="xTable.updateStatus(scope)"></el-input>
          </template>
        </vxe-column>
        <vxe-column field="role" title="ElAutocomplete" min-width="160" :edit-render="{}">
          <template #edit="{ row }">
            <el-autocomplete v-model="row.role" :fetch-suggestions="roleSearchEvent"></el-autocomplete>
          </template>
        </vxe-column>
        <vxe-column field="age" title="ElInputNumber" width="160" :edit-render="{}">
          <template #header="{ column }">
            <span>{{ column.title }}</span>
            <i class="el-icon-warning"></i>
          </template>
          <template #edit="{ row }">
            <el-input-number v-model="row.age" :max="99" :min="18"></el-input-number>
          </template>
        </vxe-column>
        <vxe-colgroup title="Group2">
          <vxe-column field="sex" title="ElSelect" width="140" :edit-render="{}">
            <template #edit="scope">
              <el-select v-model="scope.row.sex" @change="xTable!.updateStatus(scope)">
                <el-option
                  v-for="item in demo1.sexList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <template #default="{ row }">{{ getSelectLabel(row.sex, demo1.sexList) }}</template>
          </vxe-column>
          <vxe-column field="sex1" title="ElSelect" width="180" :edit-render="{}">
            <template #edit="scope">
              <el-select v-model="scope.row.sex1" multiple>
                <el-option
                  v-for="item in demo1.sexList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </template>
            <template #default="{ row }">{{ getSelectMultipleLabel(row.sex1, demo1.sexList) }}</template>
          </vxe-column>
          <vxe-column field="region" title="ElCascader" width="200" :edit-render="{}">
            <template #edit="{ row }">
              <el-cascader v-model="row.region" :options="demo1.regionList"></el-cascader>
            </template>
            <template #default="{ row }">{{ getCascaderLabel(row.region, demo1.regionList) }}</template>
          </vxe-column>
        </vxe-colgroup>
      </vxe-colgroup>
      <vxe-colgroup title="Group1">
        <vxe-column field="date" title="ElDatePicker" width="200" :edit-render="{}">
          <template #edit="{ row }">
            <el-date-picker v-model="row.date" type="date" format="YYYY/MM/DD"></el-date-picker>
          </template>
          <template #default="{ row }">{{ formatDate(row.date, 'YYYY/MM/DD') }}</template>
        </vxe-column>
        <vxe-column field="date1" title="ElDatePicker" width="220" :edit-render="{}">
          <template #edit="{ row }">
            <el-date-picker v-model="row.date1" type="datetime" format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
          </template>
          <template #default="{ row }">{{ formatDate(row.date1, 'YYYY-MM-DD HH:mm:ss') }}</template>
        </vxe-column>
        <vxe-column field="date2" title="ElTimePicker" width="200" :edit-render="{}">
          <template #edit="{ row }">
            <el-time-select
              v-model="row.date2"
              :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
            ></el-time-select>
          </template>
        </vxe-column>
        <vxe-column field="color1" title="ElColorPicker" width="140" :edit-render="{}">
          <template #edit="{ row }">
            <el-color-picker v-model="row.color1"></el-color-picker>
          </template>
        </vxe-column>
        <vxe-column field="rate" title="ElRate" width="200">
          <template #default="{ row }">
            <el-rate v-model="row.rate"></el-rate>
          </template>
        </vxe-column>
        <vxe-column field="flag" title="ElSwitch" width="100">
          <template #default="{ row }">
            <el-switch v-model="row.flag"></el-switch>
          </template>
        </vxe-column>
      </vxe-colgroup>
    </me-vxe-table>
  </div>
</template>
<script setup lang="ts" name="VxeTableDemo">
import { VxeTableInstance, VxeTablePropTypes } from 'vxe-table';
import XEUtils from 'xe-utils';
import { FormInstance } from 'element-plus';
const meVxeTableRef = ref<MeVxeTableInstance>();
const xTable = computed(() => meVxeTableRef.value?.vxeTableRef);
const restaurants = [
  { value: 'Designer', name: 'Designer' },
  { value: 'Develop', name: 'Develop' },
  { value: 'Test', name: 'Test' },
  { value: 'PM', name: 'PM' },
];

const demo1 = reactive({
  loading: false,
  tableData: [] as any[],
  sexList: [
    { value: '1', label: '男' },
    { value: '0', label: '女' },
  ],
  regionList: [
    {
      label: '北京',
      value: 1,
      children: [
        { value: 3, label: '东城区' },
        { value: 4, label: '西城区' },
      ],
    },
    {
      label: '上海',
      value: 21,
      children: [
        { value: 23, label: '黄浦区' },
        { value: 24, label: '卢湾区' },
      ],
    },
    {
      label: '广东',
      value: 42,
      children: [
        { value: 43, label: '广州市' },
        { value: 67, label: '深圳市' },
      ],
    },
  ],
});

const formatDate = (value: any, format: string) => {
  return XEUtils.toDateString(value, format);
};

const getSelectLabel = (value: any, list: any[], valueProp = 'value', labelField = 'label') => {
  const item = list.find((item) => item[valueProp] === value);
  return item ? item[labelField] : null;
};

const getSelectMultipleLabel = (value: any[], list: any[], valueProp = 'value', labelField = 'label') => {
  return value
    .map((val) => {
      const item = list.find((item) => item[valueProp] === val);
      return item ? item[labelField] : null;
    })
    .join(', ');
};

const getCascaderLabel = (value: any, list: any[]) => {
  const values: any[] = value || [];
  const labels: any[] = [];
  const matchCascaderData = function (index: any, list: any[]) {
    const val = values[index];
    if (list && values.length > index) {
      list.forEach((item) => {
        if (item.value === val) {
          labels.push(item.label);
          matchCascaderData(++index, item.children);
        }
      });
    }
  };
  matchCascaderData(0, list);
  return labels.join(' / ');
};

const roleSearchEvent = (queryString: string, cb: (params: any) => void) => {
  const results = queryString
    ? restaurants.filter((item) => item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
    : restaurants;
  setTimeout(() => {
    cb(results);
  }, 500 * Math.random());
};

const meanNum = (list: any[], field: string) => {
  let count = 0;
  list.forEach((item) => {
    count += Number(item[field]);
  });
  return count / list.length;
};

const sumNum = (list: any[], field: string) => {
  let count = 0;
  list.forEach((item) => {
    count += Number(item[field]);
  });
  return count;
};

const footerMethod: VxeTablePropTypes.FooterMethod = ({ columns, data }) => {
  return [
    columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return '平均';
      }
      if (['age', 'rate'].includes(column.property)) {
        return meanNum(data, column.property);
      }
      return null;
    }),
    columns.map((column: any, columnIndex: number) => {
      if (columnIndex === 0) {
        return '和值';
      }
      if (['age', 'rate'].includes(column.property)) {
        return sumNum(data, column.property);
      }
      return null;
    }),
  ];
};

const getData = () => {
  demo1.loading = true;
  setTimeout(() => {
    demo1.tableData = [
      {
        id: 10001,
        name: 'Test1',
        nickname: 'T1',
        role: 'Develop',
        sex: '0',
        sex1: [],
        state: '',
        region: [],
        age: 28,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 5,
        rate1: 59,
        flag: false,
        address: 'Shenzhen',
      },
      {
        id: 10002,
        name: 'Test2',
        nickname: 'T2',
        role: 'Test',
        sex: '1',
        sex1: [],
        state: '',
        region: [],
        age: 22,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 2,
        rate1: 22,
        flag: false,
        address: 'Guangzhou',
      },
      {
        id: 10003,
        name: 'Test3',
        nickname: 'T3',
        role: 'PM',
        sex: '0',
        sex1: [],
        state: '',
        region: [],
        age: 32,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 3,
        rate1: 12,
        flag: false,
        address: 'Shanghai',
      },
      {
        id: 10004,
        name: 'Test4',
        nickname: 'T4',
        role: 'Designer',
        sex: '0',
        sex1: ['1', '0'],
        state: '',
        region: [],
        age: 23,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        color1: '',
        tree1: '',
        tree2: [],
        date7: '',
        rate: 33,
        rate1: 4,
        flag: true,
        address: 'Shenzhen',
      },
      {
        id: 10005,
        name: 'Test5',
        nickname: 'T5',
        role: 'Develop',
        sex: '0',
        sex1: ['1', '0'],
        state: '',
        region: [],
        age: 30,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        color1: '',
        tree1: '',
        tree2: [],
        date7: '',
        rate: 0,
        rate1: 15,
        flag: true,
        address: 'Shanghai',
      },
      {
        id: 10006,
        name: 'Test6',
        nickname: 'T6',
        role: 'Designer',
        sex: '0',
        sex1: [],
        state: '',
        region: [],
        age: 21,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 3,
        rate1: 73,
        flag: false,
        address: 'Shenzhen',
      },
      {
        id: 10007,
        name: 'Test7',
        nickname: 'T7',
        role: 'Test',
        sex: '1',
        sex1: ['1'],
        state: '',
        region: [],
        age: 29,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 0,
        rate1: 0,
        flag: true,
        address: 'Guangzhou',
      },
      {
        id: 10008,
        name: 'Test8',
        nickname: 'T8',
        role: 'Develop',
        sex: '1',
        sex1: [],
        state: '',
        region: [],
        age: 35,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 2,
        rate1: 14,
        flag: false,
        address: 'Shenzhen',
      },
      {
        id: 10009,
        name: 'Test9',
        nickname: 'T9',
        role: 'Test',
        sex: '1',
        sex1: ['0'],
        state: '',
        region: [],
        age: 24,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 3,
        rate1: 52,
        flag: false,
        address: 'Shenzhen',
      },
      {
        id: 100010,
        name: 'Test10',
        nickname: 'T10',
        role: 'Develop',
        sex: '1',
        sex1: [],
        state: '',
        region: [],
        age: 20,
        date: '',
        date1: '',
        date2: '',
        date3: '',
        date4: [],
        date5: '',
        date7: '',
        color1: '',
        tree1: '',
        tree2: [],
        rate: 4,
        rate1: 83,
        flag: false,
        address: 'Guangzhou',
      },
    ];
    demo1.loading = false;
  }, 500);
};
getData();

const searchForm = reactive({
  name: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
});
const print = ref({} as object | boolean);
</script>
<style lang="scss" scoped>
.vxe-table-demo {
  .search {
    :deep(.el-form-item) {
      width: 319px;
    }
  }
}
</style>

```