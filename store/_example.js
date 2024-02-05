import { API } from '@/api/index'

export const state = () => ({
	fruits: [{
        name: 'Orange Lady',
        type: 'Orange',
        id: 1,
    }],
})

export const mutations = {
	addFruit(state, fruit) {
		state.fruits.push(fruit)
	},
	removeFruit(state, fruitId) {
		state.fruits = state.fruits.filter((fruit) => fruit.id !== fruitId)
	},
}

export const actions = {
	async addFruitAction(context, fruit) {
        // const { getListPretest } = API();
        // await getListPretest(this.id_job_post).then((result)=>{
        //     console.log('getListPretest', result);
        // })

        console.log('context', context);
		// const slicedFruit = addFruit(fruit);
        // console.log('slicedFruit', slicedFruit);
        
		context.commit('addFruit', fruit)
	},
    async actionA ({ commit }) {
        commit('gotData', await getData())
      },
      async actionB ({ dispatch, commit }) {
        await dispatch('actionA') // wait for `actionA` to finish
        commit('gotOtherData', await getOtherData())
      }
}

export const getters = {
	getApples: (state) => {
		return state.fruits.filter((fruit) => fruit.type === 'Apple')
	},
}


// example
// import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

// export default {
//     name: "jobPost",
//     middleware: "jobProvider",
//     components: { 
//         TextEditor,
//         Multiselect,
//     },
//     data: () => ({
//         step: 1,
//         pretests: [],
//     }),
//     watch: {},
//     computed: {
// 		...mapState('fruits', ['fruits']),
// 		...mapGetters('fruits', ['getApples']),
//     },
//     setup() {
//         const { getListPretest } = API()
//         return { getListPretest };
//     },
//     async mounted() {
//         const storageStep = localStorage.getItem('step_job_post');
//         if(storageStep){ this.step = storageStep;}
//         this.getData();

//         this.handleFruits();
//     },
//     methods: {
// 		...mapActions('fruits', ['addFruitAction']),
// 		// ...mapMutations('fruits', ['removeFruit', 'addFruit']),

//         handleFruits() {
// 			const newFruit = {
// 				name: 'Pink Lady',
// 				type: 'Apple',
// 				id: 2,
// 			}
// 			const otherFruit = {
// 				name: 'Manggo Lady',
// 				type: 'Manggo',
// 				id: 3,
// 			}

// 			// Call action to add fruit
// 			this.addFruitAction(newFruit)
// 			// this.addFruit(otherFruit)

//             console.log('this.getApples()', this.getApples);
// 			// Call mutation to remove fruit
// 			// this.removeFruit(newFruit.id)
// 		},
        
//         async getData(){
//             await this.getListPretest(this.id_job_post).then((result)=>{
//                 console.log('getListPretest', result);
//                 this.pretests = result;
//             })
//         },
//     }

// };

{/* <ul>
    <li v-for="fruit in fruits" :key="fruit.id">
        {{ fruit.name }} - {{ fruit.type }}
    </li>
</ul> */}