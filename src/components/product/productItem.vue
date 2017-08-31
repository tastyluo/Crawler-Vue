<template>
    <div class="product-item" @click="toProductDetail">
        <div class="p-img">
            <img width="180" height="180" :src="imgUrl" />
        </div>
        <div class="p-name">
            <span>{{name}}</span>
        </div>
        <div class="p-pgr">
            <strong class="p-price">
                <em>¥</em>
                <i>{{price}}</i>
            </strong>
        </div>
        <div class="g-comment">
            <span v-if="isSelfOperated" class="p-jdzy">自营</span>
            <span class="p-goodrate">{{goodRate}}%好评</span>
            <span class="p-goodrate">{{parseCommentsNum}}评价</span>
        </div>
    </div>
</template>

<script>

    const imgUrlHeader = 'http://localhost:1024/'

    export default {
        props: {
            goodsId: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            shopName: {
                type: String,
                default: ''
            },
            price: {
                type: Number,
                default: null
            },
            goodRate: {
                type: Number,
                default: null
            },
            commentsNum: {
                type: Number,
                default: null
            },
            selfOperated: {
                type: String,
                default: '0'
            },
            link: {
                type: String,
                default: ''
            }
        },
        computed: {
            imgUrl () {
                return `${imgUrlHeader}${this.goodsId}.jpg`
            },
            isSelfOperated () {
                if (this.selfOperated === '0') {
                    return false
                } else if (this.selfOperated === '1') {
                    return true
                }
            },
            parseCommentsNum () {
                let parseNum = this.commentsNum
                if (this.commentsNum > 10000) {
                    parseNum = parseInt(this.commentsNum / 10000) + '万+'
                }
                return parseNum
            }
        },
        methods: {
            toProductDetail () {
                window.open(this.link, '_blank')
            }
        }
    }
</script>

<style lang="scss">
    strong {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 500;
    }

    .product-item {
        width: 180px;
        height: 250px;
        margin: 10px 20px;
        padding-left: 5px;
        padding-right: 5px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, .2), 0 2px 2px rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12);
        &:hover {
            cursor: pointer;
        }
        >div {
            margin-bottom: 2px;
        }
    }

    .p-name {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
    }

    .p-goodrate {
        color: #A7A7B6;
        font-size: 12px;
        float: right;
        margin-right: 3px;
        line-height: 20px;
        margin-left: 10px;
    }

    .p-price {
        color: #E4393C;
        font-size: 16px;
    }

    .p-jdzy {
        background-color: #e4393c;
        color: #fff;
        font-size: 13px;
        padding: 1px;
    }
</style>
