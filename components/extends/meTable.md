# 表格
组件名`MeTable`，对[elment-plus table](https://element-plus.org/zh-CN/component/table.html)组件的封装，在保留原有功能的情况下，扩展了自定义列、导出、打印、顶部工具栏、分页功能，并且保留`elment-plus table`的 `props` 和 `emit` `type`提示。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meTable`。
- 组件对应的全局语言包文件为`src/locales/lang/en/meTable.json`。
- 所有的非`props` `attr`不会设置到根元素,都会透传到 `ElTable`上。
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| name | string | 名称默认值为meTable,会做为打印的表头和导出的文件名 | 否|
| meClass|string \| string[]| 根元素上的class | 否 |
| loading | boolean | 加载状态，默认值为false |否|
| exportMenu | `{label: string;filename?: string;handle: (elTable: ELTable, filename: string) => void \| 'xlsx' \| 'csv' \| 'txt';}[]` | 导出菜单默认值为`[{ label: 'xlsx', handle: 'xlsx' },{ label: 'csv', handle: 'csv' },{ label: 'txt', handle: 'txt' },]` | 否|
| print | boolean | 打印，默认为true | 否 |
| customColumn | boolean |自定义列，默认为true | 否 |
| defaultShowSearch | boolean | 默认是否展示 [筛选]() 默认值为false | 否 | 
| toolbar | boolean | 是否展示工具栏 默认为true | 否 |
| quickSearch | string | 快捷搜索关键词 需要v-model绑定 | 否 |
| quickSearchPlaceholder | string | 快捷搜索框placeholder,默认为快捷搜索 | 否 |
| paginationOptions | object  | 分页配置,详情见下文`props.paginationOptions` | 否 |
| elTable的属性 | - | 支持element-plus  Table组件 的所有属性，请参考[elTable文档](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)| - | 


| props.exportMenu      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| label | string | 导出选项名称| 是 |
| filename | string | 导出文件名，为空时使用`props.name` | 否 |
| handle | (elTable: ELTable, filename: string) => void \| 'xlsx' \| 'csv' \| 'txt' | 导出执行函数/受支持的导出code | 是 |

|props.paginationOptions| 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| noAutoLayout | boolean | 默认为手机模式时使用最小layout,设置为true关闭此配置 | 否 |
| change | (page: number, size: number) => void | page或size改变时触发 | 是 |
| pagination的属性 | - | 支持element-plus  Pagination组件 的所有属性，请参考[pagination文档](https://element-plus.gitee.io/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7) | - |
| pagination的事件 | function |  支持element-plus  Pagination组件 的所有事件，请参考[pagination文档](https://element-plus.gitee.io/zh-CN/component/pagination.html#%E4%BA%8B%E4%BB%B6)(需要在事件名前面加上on前缀并使用驼峰写法如`prev-click`事件属性名为`onPrevClick`)  | - | 

## 组件事件

| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| quickSearch | (searchText:string) => void | 快捷搜索|
| refresh | () => void | 刷新按钮被点击时触发 |
| add | () => void | 新增按钮被点击时触发 |
| elTable的事件 | - | 支持element-plus  Table组件 的所有事件，请参考[elTable文档](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)| - |

## 组件插槽

| 插槽名  |	说明  |	子标签 |
| ----------- | ----------- | ----------- |
| - | 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。自定义默认内容 | el-table-column |
| append | 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。|	— |
| empty	| 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。当数据为空时自定义的内容|	— |
| search | 筛选项，当点击工具栏筛选按钮时会控制其显隐 | — |
| buttons | 工具栏左侧扩展操作按钮 | — |
| tools | 工具栏右侧扩展菜单 | — |
| toolsButton |  工具栏右侧扩展按钮 | — |

## 组件属性/方法
| 名称  |	类型  |	说明 |
| ----------- | ----------- | ----------- |
| elTableRef | `InstanceType<typeof ElTable>` | elTable的ref对象 |
|customColumnProps | - | 动态队列的对象，可通过里面的checkedLabels属性控制列的显/隐 |
|searchText |string | 快捷搜索关键字 |

## 示例

```vue
<template>
  <el-card shadow="never" class="table">
    <me-table
      ref="meTableRef"
      v-model:quick-search="searchForm.search"
      :data="data?.list"
      :pagination-options="paginationOptions"
      :custom-column="customColumn"
      :loading="loading"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
      @quick-search="getData(1)"
      @refresh="refresh"
      @add="() => {}"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" inline label-width="100px" class="search">
          <el-form-item :label="t('名称')" prop="name">
            <el-input v-model="searchForm.name" />
          </el-form-item>
          <el-form-item :label="t('类型')" prop="type">
            <el-select v-model="searchForm.type" clearable>
              <el-option :label="t('类型') + '1'" value="1" />
              <el-option :label="t('类型') + '2'" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item :label="t('日期')" prop="date">
            <el-date-picker v-model="searchForm.date" type="date" />
          </el-form-item>
          <el-form-item :label="t('地址')" prop="address">
            <el-input v-model="searchForm.address" />
          </el-form-item>
          <el-form-item :label="t('邮政编码')" prop="zip">
            <el-input v-model="searchForm.zip" />
          </el-form-item>
          <el-form-item label=" ">
            <el-button type="primary" @click="getData(1)">{{ t('查询') }}</el-button>
            <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">{{ t('重置') }}</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="canDel = !canDel">{{ t('删除切换') }}</el-button>
        <el-button @click="customColumn = !customColumn">{{ t('自定义列') }}</el-button>
        <el-button @click="meTableRef!.elTableRef!.toggleAllSelection()">{{ t('全选') }}</el-button>
        <el-button @click="getData(searchForm.page - 1)">{{ t('上一页') }}</el-button>
        <el-button @click="getData(searchForm.page + 1)">{{ t('下一页') }}</el-button>
      </template>
      <el-table-column type="selection" label="选择" width="55" />
      <el-table-column prop="date" :label="t('日期')"> </el-table-column>
      <el-table-column :label="t('快递') + t(' ') + t('详情')">
        <el-table-column prop="name" :label="t('名称')" />
        <el-table-column :label="t('地址') + t(' ') + t('详情')">
          <el-table-column prop="province" :label="t('省')" />
          <el-table-column prop="city" :label="t('市')" />
          <el-table-column prop="address" :label="t('地址')" />
          <el-table-column prop="zip" :label="t('邮政编码')"> </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column :label="t('操作')" min-width="162px">
        <el-button>
          <mel-icon-edit />
        </el-button>
        <el-button v-if="canDel" type="danger">
          <mel-icon-delete />
        </el-button>
      </el-table-column>
      <template #empty>
        {{ t('空空如也') }}
      </template>
    </me-table>
  </el-card>
</template>
<script setup lang="ts" name="Table">
import { listApi } from '@/api/table';
import { useLocalesI18n } from '@/locales/i18n';
import { FormInstance } from 'element-plus';
const meTableRef = ref<MeTableInstance>();
const customColumn = ref(true);
const { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'tableLang']);
const canDel = ref(true);
const searchForm = reactive({
  search: '',
  name: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
  page: 1,
  size: 10,
});
const { loading, run, data, refresh } = listApi({ defaultParams: [searchForm], manual: false });
const getData = (page = searchForm.page, size = searchForm.size) => {
  run(Object.assign(searchForm, { page, size }));
};
const paginationOptions = reactive({
  currentPage: computed(() => searchForm.page),
  pageSize: computed(() => searchForm.size),
  total: computed(() => data.value?.count ?? 0),
  layout: 'sizes, prev, pager, next, jumper, ->, total',
  change: getData,
});
</script>
<style lang="scss" scoped>
.table {
  .search {
    margin-bottom: -18px;

    :deep(.el-input) {
      width: 319px;
    }
  }
}
</style>

```

![](/meTable.png)