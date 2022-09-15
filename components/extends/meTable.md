# 表格
组件名`MeTable`，对[elment-plus table](https://element-plus.org/zh-CN/component/table.html)组件的封装，在保留原有功能的情况下，扩展了自定义列、导出、打印、顶部工具栏功能，并且保留`elment-plus table`的 `props` 和 `emit` `type`提示。

::: warning 注意
- 扩展组件只存在`完整版`中，`基础模板`中不含有，如果想在基础模板中使用，请将对应文件粘贴到代码中使用。
- 当前组件位置`@/components/meTable`
- 所有的非`props` `attr`不会设置到根元素,都会透传到 `ElTable`上。
:::

## 组件props

| props      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| name | string | 名称默认值为meTable,会做为打印的表头和导出的文件名 | 否|
| loading | boolean | 加载状态，默认值为false |否|
| exportMenu | `{label: string;filename?: string;handle: (elTable: ELTable, filename: string) => void \| 'xlsx' \| 'csv' \| 'txt';}[]` | 导出菜单默认值为`[{ label: 'xlsx', handle: 'xlsx' },{ label: 'csv', handle: 'csv' },{ label: 'txt', handle: 'txt' },]` | 否|
| print | boolean | 打印，默认为true | 否 |
| customColumn | boolean |自定义列，默认为true | 否 |
| defaultShowSearch | boolean | 默认是否展示 [筛选]() 默认值为false | 否 | 
| toolbar | boolean | 是否展示工具栏 默认为true | 否 |
| elTable的属性 | | 支持element-plus 的 Table 所有属性，请参考[elTable文档](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)| | 


| props.exportMenu      | 类型 |说明|必填|
| ----------- | ----------- | ----------- | ----------- |
| label | string | 导出选项名称| 是 |
| filename | string | 导出文件名，为空时使用`props.name` | 否 |
| handle | (elTable: ELTable, filename: string) => void \| 'xlsx' \| 'csv' \| 'txt' | 导出执行函数/受支持的导出code | 是 |

## 组件事件

| emit      | 格式 |说明|
| ----------- | ----------- | ----------- |
| quickSearch | (searchText:string) => void | 快捷搜索|
| refresh | () => void | 刷新按钮被点击时触发 |
| add | () => void | 新增按钮被点击时触发 |
| elTable的事件 | | 支持element-plus 的 Table 所有事件，请参考[elTable文档](https://element-plus.org/zh-CN/component/table.html#table-%E4%BA%8B%E4%BB%B6)| |

## 组件插槽

| 插槽名  |	说明  |	子标签 |
| ----------- | ----------- | ----------- |
| - | 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。自定义默认内容 | Table-column |
| append | 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。|	— |
| empty	| 和[elTable](https://element-plus.org/zh-CN/component/table.html#table-%E6%8F%92%E6%A7%BD)对应插槽功能一致。当数据为空时自定义的内容|	— |
| search | 筛选项，当点击工具栏筛选按钮时会控制其显隐 | — |
| buttons | 工具栏左侧扩展操作按钮 | — |
| tools | 工具栏右侧扩展工具按钮 | — |

## 示例

```vue
<template>
  <div class="table">
    <me-table
      ref="meTableRef"
      :data="data"
      :custom-column="customColumn"
      :loading="loading"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
      @quick-search="run"
      @refresh="refresh"
      @add="() => {}"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" label-width="100px" class="search">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('名称')" prop="name">
                <el-input v-model="searchForm.name" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('类型')" prop="type">
                <el-select v-model="searchForm.type" clearable>
                  <el-option :label="t('类型') + '1'" value="1" />
                  <el-option :label="t('类型') + '2'" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('日期')" prop="date">
                <el-date-picker v-model="searchForm.date" type="date" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('地址')" prop="address">
                <el-input v-model="searchForm.address" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('邮政编码')" prop="zip">
                <el-input v-model="searchForm.zip" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item>
                <el-button type="primary" @click="run()">{{ t('查询') }}</el-button>
                <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">{{ t('重置') }}</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="canDel = !canDel">{{ t('删除切换') }}</el-button>
        <el-button @click="customColumn = !customColumn">{{ t('自定义列') }}</el-button>
        <el-button @click="data = []">{{ t('清空') }}</el-button>
        <el-button @click="meTableRef!.elTable.toggleAllSelection()">{{ t('全选') }}</el-button>
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
        <el-button><mel-icon-edit /></el-button>
        <el-button v-if="canDel" type="danger"><mel-icon-delete /></el-button>
      </el-table-column>
      <template #empty>
        {{ t('空空如也') }}
      </template>
    </me-table>
  </div>
</template>
<script setup lang="ts" name="Table">
import { listApi } from '@/api/table';
import { useLocalesI18n } from '@/locales/i18n';
import { FormInstance } from 'element-plus';
import meTable from '@/components/meTable/index.vue';
const meTableRef = ref<InstanceType<typeof meTable>>();
const customColumn = ref(true);
const { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'tableLang']);
const canDel = ref(true);
const { loading, run, data, refresh } = listApi();
run();
const searchForm = reactive({
  name: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
});
</script>
<style lang="scss" scoped>
.table {
  .search {
    margin-bottom: -8px;
    :deep(.el-input) {
      width: 220px;
    }
  }
}
</style>
```

![](/meTable.png)