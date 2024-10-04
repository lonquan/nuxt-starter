export default [
  {
    id: 'home',
    name: '首页',
    url: '',
    icon: 'icon-home',
  },

  {
    id: 'orders',
    name: '订单中心',
    url: '',
    icon: 'icon-bookmark',
  },

  {
    id: 'reports',
    name: '报表中心',
    url: '',
    icon: 'icon-computer',
    children: [
      {name: '食堂报表', url: '', id: 'reports/canteen'},
      {name: '公司报表', url: '', id: 'reports/company'},
      {name: '交易明细', url: '', id: 'reports/order'},
    ],
  },

  {
    id: 'canteens',
    name: '食堂餐点',
    url: '',
    icon: 'icon-save',
    children: [
      {name: '商品管理', url: '', id: 'product'},
      {name: '餐别管理', url: '', id: 'meals'},
      {name: '食堂管理', url: '', id: 'canteen'},
    ],
  },

  {
    id: 'companies',
    name: '公司职工',
    url: '',
    icon: 'icon-user-group',
    children: [
      {name: '职工导入', url: '', id: 'staff-import'},
      {name: '职工管理', url: '', id: 'staffs'},
      {name: '公司管理', url: '', id: 'company-manage'},
    ],
  },

  {
    id: 'users',
    name: '账号管理',
    url: '',
    icon: 'icon-bug',
  },
]