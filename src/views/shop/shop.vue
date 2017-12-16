<template>
    <div class="shop">
        <div class="selections">
            <router-link  to="/load" class="tab-items diamond-recharge">
            钻石充值
            </router-link>
            <router-link  to="/" class="tab-items gold-recharge">
            金币充值
            </router-link>
            <router-link  to="/" class="tab-items gold-to-diamond">
            币兑钻石
            </router-link>
            <router-link  to="/" class="tab-items diamond-to-gold">
            钻石兑币
            </router-link>
        </div>
        <div class="footer">
            <ul>
                <li>充值比例：1元=信用钻石</li>
                <li>这里是一些注意事项,简单xxxxxxxxxxxxxxxxxx</li>
                <li>摇摇乐：200个游戏币</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {

    }
</script>
<style lang="less">
    .shop{
        position: relative;
        overflow: hidden;
        width: 17.786667rem;
        height:10rem;
        background:url('../../images/shop_beijing@3x.png') no-repeat center center/cover;
        .selections{
            position: absolute;
            top: 1.7rem;
            width: 3.166667rem;
            .tab-items{
                display: block;
                box-sizing: border-box;
                width: 3.053333rem;
                height: 1.346667rem;
                line-height: 1.15rem;
                font-size: .453333rem;
                padding-left: .48rem;
                margin-top:.333333rem;
                color: #aa996a;
                background: url('../../images/shop_anniu2@3x.png') no-repeat center center/cover;
            }
            .active{
                color:#fffad0;
                background-image: url('../../images/shop_anniu1@3x.png');
            }
            
        }
        .footer{
            position: absolute;
            bottom:0;
            width:100%;
            height:1.293333rem;
            background-color: #191812;
            ul{
                display: flex;
                height:1.293333rem;
                text-align: center;
                color: #fffad0;
                font-size: .32rem;
                justify-content: space-around;
                align-items: center;
                li:nth-child(1){
                   flex: 2;
                }
                li:nth-child(2){
                    flex:4;
                    border-left:.013333rem solid #aa996a;
                    border-right: .013333rem solid #aa996a;                    
                }
                li:nth-child(3){
                    flex:2;
                }
            }
        }
    }
</style>
