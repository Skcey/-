<template>
    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%"
      :default-sort="{prop:'state',order:'descending'}"
    >
      <el-table-column
        prop="state"
        label="状态"
        width="120"
        align="center">
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
        align="center">
      </el-table-column>
      <el-table-column
        prop="approvalTime"
        label="审批时间"
        width="180"
        align="center">
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
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          state: '已审核',
          approvalName: '7月9号请假',
          senderName: 'tj',
          department: '研发部-开发',
          type: '请假条',
          sendTime: '2024-07-08 11:30',
          approvalTime: '2024-07-08 13:20',
          play: '审批  退回 更多操作（下载）',
        },
      ],
    };
  },
  methods: {
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
      this.$router.push('/approvalFile')
    },
    reject(row) {
      console.log('退回', row);
      // 添加退回逻辑
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

</style>