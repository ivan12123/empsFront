<style lang="less">
    @import '../../styles/common.less';
    @import '../common/components/table.less';
</style>

<template>
    <div>
        <Row :gutter="10">
            <Col span="24">
                <Card>
                    <Row>
                        <Input v-model="searchConName1" icon="search" @on-change="handleSearch1" placeholder="请输入姓名搜索..." style="width: 200px" />
                        <Button v-show="access == 0" @click="goAdd" type="ghost" >新增</Button>
                        <Button v-show="access == 0" @click="goUpdate" type="ghost" >更新</Button>
                        <Button v-show="access == 0" @click="deleteMenu" type="ghost" >删除</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <el-table
                            ref="multipleTable"
                            :data="data1"
                            tooltip-effect="dark"
                            style="width: 100%"
                            highlight-current-row
                            @selection-change="handleSelectionChange">
                            <el-table-column
                              type="selection"
                              width="55">
                            </el-table-column>
                            <el-table-column
                              prop="_id"
                              label="菜品编号"
                              width="120">
                            </el-table-column>
                            <el-table-column
                              prop="name"
                              label="菜品名称"
                              width="120">
                            </el-table-column>
                            <el-table-column
                              prop="price"
                              label="菜品价格">
                            </el-table-column>
                            <el-table-column
                              prop="source"
                              label="菜品源材料">
                            </el-table-column>
                            <el-table-column
                              prop="make"
                              label="菜品制作过程">
                            </el-table-column>
                          </el-table>
                    </Row>
                </Card>
            </Col>
        </Row>
        <tDialog :show="dialogShow">
            <div class="dialog_slot" slot="content">
                <el-form label-position="right" label-width="120px" :model="form">
                  <el-form-item label="菜品名称">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="菜品价格">
                    <el-input v-model="form.price"></el-input>
                  </el-form-item>
                  <el-form-item label="菜品源材料">
                    <el-input v-model="form.source"></el-input>
                  </el-form-item>
                  <el-form-item label="菜品制作过程">
                    <el-input v-model="form.make"></el-input>
                  </el-form-item>
                </el-form>
                <el-button type="primary" @click="addMenuConfirm">确定</el-button>
                <el-button type="info" @click="dialogShow=false">取消</el-button>
            </div>
        </tDialog>
    </div>
</template>

<script>
import * as table from '../options/table_food';
import tDialog from '../common/tinnycom/dialog';
import {
    getAllMenu,
    addMenu,
    delMenu,
    updateMenu
} from '@/api'
import Cookies from 'js-cookie';

export default {
    name: 'searchable-table',
    data () {
        return {
            searchConName1: '',
            searchConName2: '',
            searchConTel2: '',
            searchConName3: '',
            columns1: table.columns1,
            data1: [],
            initTable1: [],
            dialogShow: false,
            form: {
                _id: '',
                name: '',
                price: '',
                source: '',
                make: ''
            },
            selectedRowId: '',
            selectedRow: {},
            access: parseInt(Cookies.get('access')),
            editFlag: ''
        };
    },
    components: {
        tDialog
    },
    methods: {
        init () {
            this.data1 = this.initTable1 = table.searchTable1 || [];
            getAllMenu().then((res) => {
                this.data1 = this.initTable1 = res.result
            })
        },
        search (data, argumentObj) {
            let res = data;
            let dataClone = data;
            for (let argu in argumentObj) {
                if (argumentObj[argu].length > 0) {
                    res = dataClone.filter(d => {
                        return d[argu].indexOf(argumentObj[argu]) > -1;
                    });
                    dataClone = res;
                }
            }
            return res;
        },
        handleSearch1 () {
            this.data1 = this.initTable1;
            this.data1 = this.search(this.data1, {name: this.searchConName1});
        },
        handleSelectionChange(val) {
            this.selectedRowId = val.length ? val[0]._id : ''
            this.selectedRow = val.length ? val[0] : {}
        },
        addMenuConfirm() {
            let {
                name,
                price,
                source,
                make
            } = this.form
            if (!name) {
                alert('菜品名称不可为空')
                return
            }

            if (!price) {
                alert('菜品价格不可为空')
                return
            }

            if (!source) {
                alert('菜品原材料不可为空')
                return
            }

            if (!make) {
                alert('菜品制作过程不可为空')
                return
            }
            if (this.editFlag === 'add') {
                addMenu(this.form).then((res) => {
                    this.dialogShow = false
                    this.init()
                })
            } else {
                this.form._id = this.selectedRowId
                updateMenu(this.form).then((res) => {
                    this.dialogShow = false
                    this.init()
                })
            }            
        },
        deleteMenu() {
            if (!this.selectedRowId) {
                this.$alert('请先选择要删除的一项', '提示', {
                  confirmButtonText: '确定'
                });
                return
            }
            let _this = this
            this.$alert('删除后不可恢复，确定删除么？', '危险提示', {
              confirmButtonText: '确定',
              callback: action => {
                delMenu({
                    _id: _this.selectedRowId
                }).then((res) => {
                    _this.init()
                })
              }
            });
        },
        goAdd() {
            this.editFlag = 'add'
            this.dialogShow = true
        },
        goUpdate() {
            if (!this.selectedRowId) {
                this.$alert('请先选择要编辑的一项', '提示', {
                  confirmButtonText: '确定'
                });
                return
            }
            Object.assign(this.form, this.selectedRow)
            this.dialogShow = true
            this.editFlag = 'edit'
        }
    },
    mounted () {
        this.init()
    }
};
</script>
<style>
    .dialog_slot {

    }
</style>
