# little-Forwarding-agent

## 作用
前端请求转发代理，解决跨域问题

## 使用方式
* 若是静态界面，直接将http请求地址改为`little-Forwarding-agent`的启动地址
* 若是angular/react等框架
    1. 将如下代码中的IP地址改为`little-Forwarding-agent`启动地址，添加到package.json
    ```json
    proxy: "http://127.0.0.1:3001"
    ```
    2. 使用ajax等发送http时，不需要加入ip和端口部分，例如
    ```js
     fetch("/api/del", {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
            credentials: 'include',
            ...
     }
    ```
* 在`little-Forwarding-agent`修改要转发的ip目的地地址，在`router/index`中

## 注意
目前只支持转发GET和POST方法。