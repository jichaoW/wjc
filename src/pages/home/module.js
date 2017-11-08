import axios from 'axios'
import { SET_DATA, AJAX_GET_DATA } from './types.js'

export default {
	state: {
		iconSwiperInfo: []
	},
	mutations: {
		[SET_DATA](state, payload) {
			state.iconSwiperInfo = payload.swiperInfo;
		}
	},
	actions: {
		[AJAX_GET_DATA](context) {
			axios.get('/static/index.json?city=北京')
			.then((res) => {
				context.commit(SET_DATA, res.data.data)
			}) 
			.catch();
		}
	}
}