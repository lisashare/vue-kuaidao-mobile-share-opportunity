// state就是一个纯对象，上面有一些状态挂载,而且一个应用应该只有一个数据源：单一状态树、唯一数据源


import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const lisa = {
	state, mutations, actions, getters
}

export default lisa