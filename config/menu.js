export default {
  top: [
    {name: '嘉宾管理', route: 'guest', show: true, icon: 'icon-at', roles: []},
    {name: '志愿者管理', route: 'volunteer', show: true, icon: 'icon-cloud-download', roles: []},
    {name: '后勤保障', route: 'logistics/room', show: true, icon: 'icon-code-block', roles: []},
    {name: '新闻宣传', route: 'broadcast/news', show: true, icon: 'icon-star', roles: []},
    {name: '系统管理', route: 'system/meeting', show: true, icon: 'icon-settings', roles: []},
  ],

  left: {
    guest: {
      title: '嘉宾管理',
      menus: [
        {name: '嘉宾列表', route: 'guest', icon: 'icon-star'},
        {name: '嘉宾导入', route: 'guest/import', icon: 'icon-star'},
        // {name: '报名列表', route: 'guest/apply', icon: 'icon-star'},
        // {name: '邀请记录', route: 'guest/invite', icon: 'icon-star'},
        {name: '志愿者列表', route: 'guest/volunteer', icon: 'icon-star'},
        // {name: '日程报名', route: 'guest/apply-schedule', icon: 'icon-star'},
        {name: '活动日程', route: 'guest/schedules', icon: 'icon-star'},
        {name: '通知公告', route: 'guest/notice', icon: 'icon-star'},
        {name: '意见反馈', route: 'guest/feedback', icon: 'icon-star'},
      ],
    },
    volunteer: {
      title: '志愿者管理',
      menus: [
        {name: '志愿者列表', route: 'volunteer', icon: 'icon-star'},
        {name: '表格导入', route: 'volunteer/import', icon: 'icon-star'},
        // {name: '服务记录', route: 'volunteer/service', icon: 'icon-star'},
        {name: '账号审核', route: 'volunteer/account', icon: 'icon-star'},
        {name: '嘉宾列表', route: 'volunteer/guest', icon: 'icon-star'},
        {name: '活动日程', route: 'volunteer/schedules', icon: 'icon-star'},
      ],
    },
    logistics: {
      title: '后勤保障管理',
      menus: [
        {name: '酒店房间', route: 'logistics/room', icon: 'icon-star'},
        {name: '表格导入', route: 'logistics/import', icon: 'icon-star'},
        // {name: '服务预约', route: 'logistics/subscribe', icon: 'icon-star'},
        {name: '酒店管理', route: 'logistics/hotel', icon: 'icon-star'},
        {name: '嘉宾列表', route: 'logistics/guest', icon: 'icon-star'},
        {name: '活动日程', route: 'logistics/schedules', icon: 'icon-star'},
      ],
    },

    broadcast: {
      title: '宣传内容',
      menus: [
        {name: '会议资讯', route: 'broadcast/news', icon: 'icon-star'},
        {name: '招商资讯', route: 'broadcast/investment', icon: 'icon-star'},
        {name: '游玩攻略', route: 'broadcast/guide', icon: 'icon-star'},
        {name: '直播视频', route: 'broadcast/studios', icon: 'icon-star'},
        {name: '景点展示', route: 'broadcast/sight', icon: 'icon-star'},
        {name: '合作伙伴', route: 'broadcast/partner', icon: 'icon-star'},
        {name: '友情连接', route: 'broadcast/links', icon: 'icon-star'},
        {name: '首页轮播', route: 'broadcast/banner', icon: 'icon-star'},
      ],
    },
    system: {
      title: '系统参数',
      menus: [
        {name: '会议管理', route: 'system/meeting', icon: 'icon-star'},
        {name: '创建会议', route: 'system/meeting/create', icon: 'icon-star'},
        {name: '嘉宾证', route: 'system/id-card', icon: 'icon-star'},
        {name: '会场管理', route: 'system/venue', icon: 'icon-star'},
        {name: '会场大屏', route: 'system/interact', icon: 'icon-star'},
        {name: '账号管理', route: 'system/account', icon: 'icon-star'},
        {name: '用户列表', route: 'system/user', icon: 'icon-star'},
      ],
    },
  },
}