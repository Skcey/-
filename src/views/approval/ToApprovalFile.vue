<template>
    <div class="approval">
        <div class="imgContainer">
            <img class="templateImg" src="../../assets/img/example.png" alt="">
            <img class="signImage" v-if="showSignature" src="../../assets/img/signature.jpg" alt="">
        </div>
        <div class="ColContent">
            <div class="StateButton">
                <el-row>
                    <el-button @click="PassFile" type="success" plain>通过</el-button>
                    <el-button @click="ReturnFile" type="danger" plain>退回</el-button>
                    <el-button @click="GoBack" type="primary" plain>退出</el-button>   
                </el-row>
            </div> 
            <div class="signature">
                <p>签名：</p>
                <img @click="ToSignature" class="signatureImg" src="../../assets/img/signature.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ToApproval',
    data() {
        return {
            showSignature: false,
        }
    },
    methods:{
        ToSignature() {
            this.showSignature = !this.showSignature;
        },
        PassFile(){
            this.$prompt('签名口令', '输入签名口令', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(() => {
                this.$router.push('/approval1')
            }).catch(() => {
                
            });
        },
        ReturnFile(){
            this.$prompt('备注', '退回', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(() => {
                this.$router.push('/approval2')
            }).catch(() => {
                
            });
        },
        GoBack(){
            this.$router.push('/approval')
        }
    }
}
</script>

<style scoped>
.approval {
    display: flex;
    height: 100vh;
    flex-direction: row;
    position: relative;
    .imgContainer {
        position: relative;
        .templateImg {
            margin: 40px;
        }
        .signImage {
            width: 150px;
            height: auto;
            position: absolute;
            right: 50px;
            bottom: 50px;
        }
    }
    .ColContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .StateButton {
            width: 100%;
            margin-top: 30px;
            display: flex;
            justify-content: flex-end;
            .el-button {
                margin-right: 50px;
                font-size: 20px;
            }
        }
        .signature {
            position: absolute;
            bottom: 30px;
            .signatureImg {
                width: 600px;
                height: auto;
            }
            p {
                font-size: 28px;
            }
        }
    }
    
}
</style>
