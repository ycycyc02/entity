/* eslint-disable no-var */
import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import DataImport from '../views/main-view/DataImport.vue'
import TableShow from '../views/main-view/TableShow.vue'
import SearchEntity from '../views/main-view/SearchEntity.vue'
import SetDatasetParams from '../views/main-view/SetDatasetParams.vue'
import SearchDataset from '../views/main-view/SearchDataset.vue'
import SelectDataset from '../views/entity-view/SelectDataset.vue'
import DatasetPartition from '../views/entity-view/DatasetPartition.vue'
import SelectKnowledgeBase from '../views/entity-view/SelectKnowledgeBase.vue'
import SetModel from '../views/entity-view/SetModel.vue'
import ShowResult from '../views/entity-view/ShowResult.vue'
import ConfirmParams from '../views/entity-view/ConfirmParams.vue'
import StartLinking from '../views/linking-view/StartLinking.vue'
import UseModel from '../views/linking-view/UseModel.vue'
import SelectModel from '../views/linking-view/SelectModel.vue'
import ActiveLearning from '../views/study-view/ActiveLearning.vue'
import GetData from '../views/study-view/GetData.vue'
import KBManage from '../views/main-view/KBManage.vue'
import DatasetCharts from '../views/main-view/DatasetCharts.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      redirect: '/data'
    },
    {
      path: '/data',
      name: 'data',
      component: DataImport,
      children: [
        {
          path: '/data/table',
          name: 'table',
          component: TableShow
        },
        {
          path: '/data/search',
          name: 'search',
          component: SearchEntity
        },
        {
          path: '/data/show',
          name: 'setparams',
          component: SetDatasetParams
        },
        {
          path: '/data/chart',
          name: 'chart',
          component: DatasetCharts
        },
      ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: SearchDataset,
    },
    {
      path: '/kbmanage',
      name: 'kbmanage',
      component: KBManage,
    },
    {
      path: '/entity',
      name: 'entity',
      component: SelectDataset,
      redirect: '/entity/dataset',
      children: [
        {
          path: 'dataset',
          name: 'dataset',
          component: DatasetPartition
        },
        {
          path: 'selectkb',
          name: 'selectkb',
          component: SelectKnowledgeBase
        },
        {
          path: 'setmodel',
          name: 'setmodel',
          component: SetModel
        },
        {
          path: 'confirm',
          name: 'confirm',
          component: ConfirmParams
        }
      ]
    },
    {
      path: '/result',
      name: 'result',
      component: ShowResult
    },
    {
      path: '/linking',
      name: 'linking',
      component: StartLinking,
      redirect: '/linking/model',
      children: [
        {
          path: 'start',
          name: 'start',
          component: UseModel
        },
        {
          path: 'model',
          name: 'model',
          component: SelectModel
        }
      ]
    },
    {
      path: '/study',
      name: 'study',
      component: ActiveLearning
    },
    {
      path: '/getdata',
      name: 'getdata',
      component: GetData
    }
  ]
})

// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     console.log(from);
//     next()
//   })

export default router
