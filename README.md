安装方法:

    npm install react-native-iconaction --save  或者
    react-native install react-native-iconaction  或者
    yarn add react-native-iconaction

使用方法:

    1.在头部引入组件
    import ActionSheet from 'react-native-IconAction';

    2.写入组件,一般写在最外层里面
    <ActionSheet
        bottonList={shareIcon}
        marginV={19}
        marginH={20}
        ref={ref=>this.ActionSheet = ref}
        onPress={this.selectSheet}
    />

    3.弹出调用this.ActionSheet.show();

参数及方法

    1.bottonList 按键数组,数组中每个元素是一个对象,对象中icon表示图标,text表示文字

    2.marginV 按钮在竖直方向距离容器的距离

    3.marginH 按钮在水平方向距离容器的距离

    4.containStyle 整个组件全屏的Style

    5.style 容器的Style

    6.cannelText 取消按钮的文字

    7.cannelRender 自定义取消组件

    方法:

    1.show方法,弹出弹框方法

    2.cannel方法,关闭弹框方法

