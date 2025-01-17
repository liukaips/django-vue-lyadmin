import axios from 'axios';
import {reqExpost,ajaxGet,ajaxPost,ajaxDelete,ajaxPut,ajaxPatch,uploadImg,ajaxGetDetailByID} from './request';
import {url} from './url';

// 获取登录页的信息
export const login = params => ajaxPost({url: `token/`,params})
// 获取验证码
export const getCaptcha = params => ajaxGet({url: `captcha/`,params})
// 获取菜单
export const apiSystemWebRouter = params => ajaxGet({url: `system/menu/web_router/`,params})
//系统监控
export const monitorGetSystemInfo = params => ajaxGet({url: `monitor/getsysteminfo/`,params})

/**
*计划任务
 * */

// 计划任务
export const crontabPeriodictask = params => ajaxGet({url: `crontab/periodictask/`,params})
// 计划任务 -- 新增
export const crontabPeriodictaskAdd = params => ajaxPost({url: `crontab/periodictask/`,params})
// 计划任务 -- 编辑
export const crontabPeriodictaskEdit = params => ajaxPut({url: `crontab/periodictask/`,params})
// 计划任务 -- 删除
export const crontabPeriodictaskDelete = params => ajaxDelete({url: `crontab/periodictask/`,params})
// 计划任务 -- 开始/暂停
export const crontabPeriodictaskEnabled = params => ajaxPut({url: `crontab/periodictask/enabled/`,params})
// 计划任务 获取本地所有tasks文件中的task任务方法
export const crontabPeriodictaskMethodlist = params => ajaxGet({url: `crontab/periodictask/tasklist/`,params})

// 计划任务 获取任务执行结果
export const crontabTaskresult = params => ajaxGet({url: `crontab/taskresult/`,params})


/**
*终端服务
 * */

// 终端服务
export const apiTerminal = params => ajaxGet({url: `terminal/terminal/`,params})
// 终端服务 -- 新增
export const apiTerminalAdd = params => ajaxPost({url: `terminal/terminal/`,params})
// 终端服务 -- 编辑
export const apiTerminalEdit = params => ajaxPut({url: `terminal/terminal/`,params})
// 终端服务 -- 删除
export const apiTerminalDelete = params => ajaxDelete({url: `terminal/terminal/`,params})

/**
*系统管理
 * */
// 部门管理列表
export const apiSystemDept = params => ajaxGet({url: `system/dept/`,params})
// 部门管理列表 -- 新增部门
export const apiSystemDeptAdd = params => ajaxPost({url: `system/dept/`,params})
// 部门管理列表 -- 编辑部门
export const apiSystemDeptEdit = params => ajaxPut({url: `system/dept/`,params})
// 部门管理列表 -- 删除部门
export const apiSystemDeptDelete = params => ajaxDelete({url: `system/dept/`,params})


// 菜单管理列表
export const apiSystemMenu = params => ajaxGet({url: `system/menu/`,params})
// 菜单管理列表 -- 新增菜单
export const apiSystemMenuAdd = params => ajaxPost({url: `system/menu/`,params})
// 菜单管理列表 -- 编辑菜单
export const apiSystemMenuEdit = params => ajaxPut({url: `system/menu/`,params})
// 菜单管理列表 -- 删除菜单
export const apiSystemMenuDelete = params => ajaxDelete({url: `system/menu/`,params})
//获取部门数据,获取菜单树
export const systemMenuTree = params => ajaxGet({url: `system/menu_tree/`,params})
// 菜单管理 》 按钮列表(全部)
export const systemButton = params => ajaxGet({url:`system/button/`,params})
// 菜单管理 》 按钮 编辑
export const systemButtonEdit = params => ajaxPut({url:`system/button/`,params})
// 菜单管理 》 按钮 新增
export const systemButtonAdd = params => ajaxPost({url:`system/button/`,params})
// 菜单管理 》 按钮 删除
export const systemButtonDelete = params => ajaxDelete({url:`system/button/`,params})
// 菜单管理 》 按钮配置列表（针对单个菜单）
export const systemMenuButton = params => ajaxGet({url:`system/menu_button/`,params})
// 菜单管理 》 按钮配置列表（针对单个菜单） 新增
export const systemMenuButtonAdd = params => ajaxPost({url:`system/menu_button/`,params})
// 菜单管理 》 按钮配置列表（针对单个菜单） 编辑
export const systemMenuButtonEdit = params => ajaxPut({url:`system/menu_button/`,params})
// 菜单管理 》 按钮配置列表（针对单个菜单） 删除
export const systemMenuButtonDelete = params => ajaxDelete({url:`system/menu_button/`,params})



// 角色管理列表
export const apiSystemRole = params => ajaxGet({url: `system/role/`,params})
// 角色管理列表-修改
export const apiSystemRoleEdit = params => ajaxPut({url: `system/role/`,params})
// 角色管理列表 -- 新增角色
export const apiSystemRoleAdd = params => ajaxPost({url: `system/role/`,params})
// 角色管理列表 -- 新增角色
export const apiSystemRoleDelete = params => ajaxDelete({url: `system/role/`,params})
//获取部门数据,用于角色授权
export const apiSystemDeptTree = params => ajaxGet({url: `system/dept_tree/`,params})
//通过角色id,获取菜单数据
export const apiSystemRoleIdToMenu = params => ajaxGet({url: `system/role_id_to_menu/`,params})
export const apiSystemRoleIdToMenuid = (id) => ajaxGet({url: `system/role_id_to_menu/`+id+'/'})

//权限管理
// 权限管理 -- 保存
export const apiPermissionSave = params => ajaxPut({url: `system/permission/`,params})

//管理员管理
export const apiSystemUser = params => ajaxGet({url: `system/user/`,params})
//管理员管理-新增
export const apiSystemUserAdd = params => ajaxPost({url: `system/user/`,params})
//管理员管理-修改
export const apiSystemUserEdit = params => ajaxPut({url: `system/user/`,params})
//管理员管理-删除
export const apiSystemUserDelte = params => ajaxDelete({url: `system/user/`,params})

/**
 *日志管理
 * */
// 日志管理 查询
export const systemOperationlog= params => ajaxGet({url: `system/operation_log/`,params})
// 日志管理 删除
export const systemOperationlogDelete= params => ajaxDelete({url: `system/operation_log/`,params})
// 日志管理 清空全部日志
export const systemOperationlogDeletealllogsDelete= params => ajaxDelete({url: `system/operation_log/deletealllogs/`,params})

/**
 *个人中心
 * */
// 获取当前个人用户信息
export const systemUserUserInfo= params => ajaxGet({url: `system/user/user_info/`,params})
// 更新修改当前个人用户信息
export const systemUserUserInfoEdit= params => ajaxPut({url: `system/user/user_info/`,params})
// 用户重置个人密码
export const systemUserChangePassword= params => ajaxPut({url: `system/user/change_password/`,params})


/**
 *消息中心
 * */
//消息模板
export const messagesMessagetemplate = params => ajaxGet({url: `messages/messagetemplate/`,params})
//消息模板-新增
export const messagesMessagetemplateAdd = params => ajaxPost({url: `messages/messagetemplate/`,params})
//消息模板-修改
export const messagesMessagetemplateEdit = params => ajaxPut({url: `messages/messagetemplate/`,params})
//消息模板-删除
export const messagesMessagetemplateDelete = params => ajaxDelete({url: `messages/messagetemplate/`,params})

//消息公告
export const messagesMessagenotice = params => ajaxGet({url: `messages/messagenotice/`,params})
//消息公告-新增
export const messagesMessagenoticeAdd = params => ajaxPost({url: `messages/messagenotice/`,params})
//消息公告-修改
export const messagesMessagenoticeEdit = params => ajaxPut({url: `messages/messagenotice/`,params})
//消息公告-删除
export const messagesMessagenoticeDelete = params => ajaxDelete({url: `messages/messagenotice/`,params})



/**
 *省市区选择
 * */
// 省市区选择  获取省
export const getProvince= params => ajaxGet({url: `areas/`,params})
// 省市区选择  获取市/区
export const getCityDistrictByID= params => ajaxGetDetailByID({url: `areas/`,params})

// 省市区选择  根据详细地址获取经纬度
export const getAddressaccuracy= params => ajaxGet({url: `getaddressaccuracy/`,params})


/**
 *地区管理
 * */

// 地区管理列表
export const addressArea = params => ajaxGet({url: `address/area/`,params})
// 地区管理列表 获取根地区
export const addressAreaRoot = params => ajaxGet({url: `address/area/area_root/`,params})
// 地区管理列表 -- 新增
export const addressAreaAdd = params => ajaxPost({url: `address/area/`,params})
// 地区管理列表 -- 编辑
export const addressAreaEdit = params => ajaxPut({url: `address/area/`,params})
// 地区管理列表 -- 删除
export const addressAreaDelete = params => ajaxDelete({url: `address/area/`,params})

/**
 *用户管理
 * */

// 用户管理 列表
export const UsersUsers= params => ajaxGet({url: `users/users/`,params})
// 用户管理 新增
export const UsersUsersAdd= params => ajaxPost({url: `users/users/`,params})
// 用户管理 编辑
export const UsersUsersEdit= params => ajaxPut({url: `users/users/`,params})
// 用户管理 删除
export const UsersUsersDelete= params => ajaxDelete({url: `users/users/`,params})
// 用户管理 禁用用户
export const UsersUsersdisableEdit= params => ajaxPut({url: `users/users/disableuser/`,params})
// 用户管理 导出
export const UsersUsersExportexecl= params => ajaxGet({url: `users/users/exportexecl/`,params})


//前端访问操作 获取
export const superOerateGet= params => ajaxGet({url: `super/operate/`,params})
//前端访问操作 设置
export const superOerateSet= params => ajaxPost({url: `super/operate/`,params})
