import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button,Navigator } from '@tarojs/components'
import NavBar from '@components/navbar/index';



export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    navigationStyle: 'custom'

  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <NavBar title='自定义导航演示'></NavBar>
        <Navigator url='/pages/navbar/index'>
        <Button>自定义导航--常用方式</Button>
        </Navigator>
        <Navigator url='/pages/navbar/scorll'>
        <Button>自定义导航--滚动渐变</Button>
        </Navigator>
      </View>
    )
  }
}
