<template>
  <div>
    <div class="search">
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="文件名"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="发件人"
        :remote-method="remoteMethod"
        :loading="loading">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="部门">
        <el-option
          v-for="item in cities"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="申请日期">
      </el-date-picker>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="审批日期">
      </el-date-picker>
    </div>
  <el-table
    :data="rankingDataFormatted"
    height="250"
    border
    style="width: 100%"
    :default-sort = "{prop: 'state', order: 'descending'}"
  >
    <el-table-column
      prop="state"
      label="状态"
      width="120"
      align="center"
      sortable>
      <template slot-scope="scope">
          <el-tag :type="tagType(scope.row.state)" disable-transitions>{{ scope.row.state }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      prop="approvalName"
      label="文件名"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="senderName"
      label="发件人"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="department"
      label="部门"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="type"
      label="文件类型"
      width="120"
      align="center">
    </el-table-column>
    <el-table-column
      prop="sendTime"
      label="申请时间"
      width="180"
      align="center"
      sortable
    >
    </el-table-column>
    <el-table-column
      prop="approvalTime"
      label="审批时间"
      width="180"
      align="center"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="操作"
      align="center">
      <template slot-scope="scope">
      <el-button v-if="scope.row.state === '未审核'" type="primary" size="mini" @click="approve(scope.row)">审批</el-button>
      <el-button v-if="scope.row.state === '未审核'" type="danger" size="mini" @click="reject(scope.row)">退回</el-button>
      <el-dropdown trigger="click" @command="handleCommand">
        <el-button type="text" size="mini">
          更多操作<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="download" :data-row="scope.row">下载</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="2"
    align="center">
  </el-pagination>
</div>
</template>

<script>
export default {
  name:'ApprovalIndex',
  data() {
    return {
      currentPage4: 1,
      cities: [{
        value: '开发',
        label: '研发部'
      }],
      rankingDataFormatted: [
        {
          state: '未审核',
          approvalName: '7月9号请假',
          senderName: '冯峰',
          department: '研发部-开发',
          type: '请假条',
          sendTime: '2024-07-08 11:30',
          approvalTime: '\\',
          play: '审批  退回 更多操作（下载）',
        },
        {
          state: '未审核',
          approvalName: '8月10号出差申请',
          senderName: '周舟',
          department: '研发部-开发',
          type: '出差申请',
          sendTime: '2024-07-02 20:36',
          approvalTime: '2024-07-02 20:40',
          play: '更多操作（下载）',
        },
      ],
    };
  },
  methods: {
    handleSizeChange() {
      console.log(`每页10条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: 1`);
    },
    tagType(state) {
      switch (state) {
        case '未审核':
          return 'danger';
        case '已审核':
          return 'success';
        default:
          return '';
      }
    },
    approve(row) {
      console.log('审批', row);
      this.$router.push('/ToApproval')
    },
    reject(row) {
      console.log('退回', row);
      this.$router.push('/Approval2')
    },
    handleCommand(command) {
      if (command === 'download') {
        console.log('下载');
        // 添加下载逻辑
      }
    },
  },
  mounted(){
    this.isApproval = this.$route.params.isApproval;
  },
};
</script>

<style>
.search{
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: auto;
}
</style>