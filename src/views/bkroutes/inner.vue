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
                        <Button @click="handleSearch1" type="ghost" >新增</Button>
                        <Button @click="handleSearch1" type="ghost" >删除</Button>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table :columns="columns1" :data="data1"></Table>
                    </Row>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import * as table from '../options/table_food';

export default {
    name: 'searchable-table',
    data () {
        return {
            searchConName1: '',
            searchConName2: '',
            searchConTel2: '',
            searchConName3: '',
            columns1: table.columns_routes,
            data1: [],
            initTable1: []
        };
    },
    methods: {
        init () {
            this.data1 = this.initTable1 = table.searchTable1 || [];
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
        }
    },
    mounted () {
        this.init();
    }
};
</script>
