/**
 * Created by xyhr on 2017/6/1.
 */

import React,{Component} from 'react';
import {
    View,
    Text,
    Navigator,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    Animated,
} from 'react-native';

import {SCREEN_WIDTH,SCREEN_HEIGHT,GlobalColors,GlobalFontSize} from "../../globalStyles";

const icon = [
    require('../../images/share/share_wx_friend.png')
];

let tempHeight = 85;

export default class ActionSheet extends Component{

    // 构造
      constructor(props) {
        super(props);

        // 初始状态
        this.state = {
            bottom:new Animated.Value(0),
            show:false
        };
      }

    componentWillMount = ()=> {
        const {bottonList} = this.props;
        // tempHeight = Math.floor(bottonList.length/4)*85;
    };

    cannel = ()=>{
        Animated.timing(
            this.state.bottom,
            {
                toValue:-tempHeight-80,
                duration: 200
            }
        ).start(()=>{
            this.setState({show:false});
        });
    };

    show = async ()=>{
        await this.setState({bottom:new Animated.Value(-tempHeight-80),show:true});
        Animated.timing(
            this.state.bottom,
            {
                toValue:0,
                duration: 200,
            }
        ).start();

    };

    componentWillReceiveProps = async (nextProps) => {
        console.warn('更新的参数:',nextProps);
        if(nextProps.showControl)
        {
            this.show();
        }
    };

    clickBotton = (index)=>{
        this.cannel();
        this.props.onPress&&this.props.onPress(index);
    };

    render(){

        const {bottom,show} = this.state;
        const {bottonList,marginV,marginH} = this.props;

        if(!show)
        {
            return (
                <View/>
            )
        }

        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.cannel}
                style={styles.BgContain}
            >
                <Animated.View style={[styles.contain,{bottom:bottom,height:80+tempHeight}]}>
                    <View style={[styles.share,{paddingHorizontal:marginH,marginVertical:marginV}]}>
                        {
                            bottonList&&bottonList.length>0?bottonList.map((el,index)=>{
                                return (
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={{justifyContent:'center',alignItems:'center'}}
                                        onPress={()=>{this.clickBotton(index+1)}}
                                    >
                                        <Image
                                            style={{width:50,height:50}}
                                            source={el.icon?el.icon:icon[0]}
                                        />
                                        <Text style={styles.textStyles}>{el.text?el.text:''}</Text>
                                    </TouchableOpacity>
                                );
                            }):null
                        }
                    </View>
                    <TouchableOpacity
                        style={styles.cancelStyle}
                        activeOpacity={1}
                        onPress={this.cannel}
                    >
                        <Text>取消</Text>
                    </TouchableOpacity>
                </Animated.View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    BgContain:{
        position:'absolute',
        top:0,
        left:0,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT
    },
    contain:{
        width:SCREEN_WIDTH,
        position:'absolute',
        left:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    share:{
        width:SCREEN_WIDTH,
        height:tempHeight,
        flexDirection:'row',
        // flexWrap:'wrap',
        // justifyContent:'space-between',
        alignItems:'center',
        justifyContent:'space-around'
    },
    cancelStyle:{
        width:SCREEN_WIDTH,
        height:50,
        borderTopWidth:0.5,
        borderTopColor:'#dbdbdb',
        justifyContent:'center',
        alignItems:'center',
    },
    textStyles:{
        color:'#999',
        marginTop:10,
        fontSize:12
    },
});
