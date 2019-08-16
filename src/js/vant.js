import Vue from 'vue'
// import vant from 'vant'
// 第三方组件
// 搜索
import {
    //头部搜索框
    Search,
    //底部导航
    Tabbar,
    TabbarItem,
    //图标引入
    Icon,
    // 标签
    Tab,
    Tabs,
    // 滑块
    Slider,
    Tag,
    // 图片
    Image,
    // 单元格
    Cell,
    CellGroup,
    // 弹出层
    Popup,
    // 事件选择器
    DatetimePicker,
    // 输入框
    Field,
} from 'vant';



export default () => {
    Vue.use(Tabbar)
        .use(TabbarItem)
        .use(Search)
        .use(Icon)
        .use(Tab)
        .use(Tabs)
        .use(Image)
        .use(Cell)
        .use(CellGroup)
        .use(Popup)
        .use(DatetimePicker)
        .use(Field)
        .use(Slider).use(Tag);
}