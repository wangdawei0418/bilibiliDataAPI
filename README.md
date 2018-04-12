# steamDataAPI
STEAM数据接口

## 首页轮播图接口

#### 接口地址：内网：<span>http://192.168.1.100:81</span> 公网：http://ie19852360.51mypc.cn
#### 返回格式：<span>json</span>
#### 请求方式：<span>get http</span>
#### 请求示例：<span>http://192.168.1.100:81?callback=xxxxfn</span>


### 请求参数说明：无


#### 返回参数说明：

<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>游戏名</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>游戏详情页的URL</td>
        </tr>
        <tr>
            <td>gameId</td>
            <td>int</td>
            <td>游戏ID,唯一</td>
        </tr>
        <tr>
            <td>isSale</td>
            <td>Boolean</td>
            <td>当前是否在打折</td>
        </tr>
        <tr>
            <td>discount</td>
            <td>Float</td>
            <td>折扣率；如0.2则为折扣百分之二十</td>
        </tr>
        <tr>
            <td>originPrice</td>
            <td>Int</td>
            <td>游戏原价</td>
        </tr>
        <tr>
            <td>price</td>
            <td>Int</td>
            <td>在售价；`在售价 = 游戏原价 * (1 - 折扣率)`; 如isSale为false则在售价等于原价</td>
        </tr>
        <tr>
            <td>imgUrl</td>
            <td>Array</td>
            <td>游戏截图URL列表</td>
        </tr>
        <tr>
            <td>platform</td>
            <td>Array</td>
            <td>可兼容平台</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Date</td>
            <td>发售日期</td>
        </tr>
        <tr>
            <td>evaluate</td>
            <td>Int</td>
            <td>口碑；1为“好评如潮”；2为"特别好评"；3为"多半好评"；4为"褒贬不一"；5为"多半差评"；6为"差评如潮"；7为"无评论</td>
        </tr>
        <tr>
            <td>evaluatingCount</td>
            <td>Int</td>
            <td>评测数</td>
        </tr>
        <tr>
            <td>label</td>
            <td>Array</td>
            <td>游戏特征标签</td>
        </tr>
    </tbody>
</table>

### 返回参数示例：
```
[
    {
        "name": "Human: Fall Flat",	/* 游戏名 */
        "url": "http://store.steampowered.com/app/477160/", /* 游戏详情页链接地址 */
        "gameId": 477160,	/* 游戏ID */
        "isSale": false,	/* 当前是否在打折 */
        "discount ": 0,		/* 折扣率 浮点类型 如0.2则为折扣百分之二十 */ 
        "originPrice": 48,	/* 原价 */
        "price": 48,		/* 促销价 */
        "imgUrl": [
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_bc87677b5a5d9f9041feb22e9a0a2e98051c4b6b.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_44e55c053b762e8424b9f846c203ad39e791dfb2.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_b30c777c1967bf1f627951ff1c5431e7ee82e619.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_50d34bf8e2fbc4aafca961f2468bdc95e616b04a.600x338.jpg"
        ],	/* 四张图片url*/ 
        "platform": [
            "Windows",
            "Mac OS",
            "Steam"
        ], /* 该游戏可运行的平台 */
        "date": "2016-7-22-", /* 游戏发行日期 */
        "evaluate": 1,	/* 口碑:1为“好评如潮”；2为"特别好评"；3为"多半好评"；4为"褒贬不一"；5为"多半差评"；6为"差评如潮"；7为"无评论 "*/ 
        "evaluatingCount": 11853, /* 评测数 */
        "label": [
            "搞笑",
            "多人",
            "物理",
            "合作",
            "解谜",
            "独立",
            "单机合作",
            "冒险",
            "平台解谜",
            "单机多人",
            "沙盒",
            "开放世界",
            "跑酷",
            "欢乐",
            "单人",
            "休闲",
            "分屏",
            "3D",
            "模拟",
            "生存"
        ]
    }
]
```



## 历史记录接口


#### 接口地址：内网：<span>http://192.168.1.100:81</span> 公网：http://ie19852360.51mypc.cn
#### 返回格式：<span>json</span>
#### 请求方式：<span>get http</span>
#### 请求示例：<span>http://192.168.1.100:81?callback=xxxxxx&gameId=552500,477160,466560</span>


#### 请求参数说明：

<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>是否必须</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>gameId</td>
            <td>int</td>
            <td>是</td>
            <td>游戏ID；如果查询多条以英文半角,进行分割</td>
        </tr>
    </tbody>
</table>


#### 返回参数说明：

<table cellspacing="0" cellpadding="5" borderColor="#eee" width="50%">
    <thead>
        <tr>
            <th>名称</th>
            <th>类型</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>name</td>
            <td>String</td>
            <td>游戏名</td>
        </tr>
        <tr>
            <td>url</td>
            <td>String</td>
            <td>游戏详情页的URL</td>
        </tr>
        <tr>
            <td>gameId</td>
            <td>int</td>
            <td>游戏ID,唯一</td>
        </tr>
        <tr>
            <td>isSale</td>
            <td>Boolean</td>
            <td>当前是否在打折</td>
        </tr>
        <tr>
            <td>discount</td>
            <td>Float</td>
            <td>折扣率；如0.2则为折扣百分之二十</td>
        </tr>
        <tr>
            <td>originPrice</td>
            <td>Int</td>
            <td>游戏原价</td>
        </tr>
        <tr>
            <td>price</td>
            <td>Int</td>
            <td>在售价；`在售价 = 游戏原价 * (1 - 折扣率)`;如isSale为false则在售价等于原价</td>
        </tr>
        <tr>
            <td>imgUrl</td>
            <td>Array</td>
            <td>游戏截图URL列表</td>
        </tr>
        <tr>
            <td>platform</td>
            <td>Array</td>
            <td>可兼容平台</td>
        </tr>
        <tr>
            <td>date</td>
            <td>Date</td>
            <td>发售日期</td>
        </tr>
        <tr>
            <td>evaluate</td>
            <td>Int</td>
            <td>口碑；1为“好评如潮”；2为"特别好评"；3为"多半好评"；4为"褒贬不一"；5为"多半差评"；6为"差评如潮"；7为"无评论</td>
        </tr>
        <tr>
            <td>evaluatingCount</td>
            <td>Int</td>
            <td>评测数</td>
        </tr>
        <tr>
            <td>label</td>
            <td>Array</td>
            <td>游戏特征标签</td>
        </tr>
    </tbody>
</table>

### 返回参数示例：
```
[
    {
        "name": "Human: Fall Flat", /* 游戏名 */
        "url": "http://store.steampowered.com/app/477160/", /* 游戏详情页链接地址 */
        "gameId": 477160,   /* 游戏ID */
        "isSale": false,    /* 当前是否在打折 */
        "discount ": 0,     /* 折扣率 浮点类型 如0.2则为折扣百分之二十 */ 
        "originPrice": 48,  /* 原价 */
        "price": 48,        /* 在售价 */
        "imgUrl": [
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_bc87677b5a5d9f9041feb22e9a0a2e98051c4b6b.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_44e55c053b762e8424b9f846c203ad39e791dfb2.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_b30c777c1967bf1f627951ff1c5431e7ee82e619.600x338.jpg",
            "http://cdn.akamai.steamstatic.com/steam/apps/477160/ss_50d34bf8e2fbc4aafca961f2468bdc95e616b04a.600x338.jpg"
        ],  /* 四张图片url*/ 
        "platform": [
            "Windows",
            "Mac OS",
            "Steam"
        ], /* 该游戏可运行的平台 */
        "date": "2016-7-22-", /* 游戏发行日期 */
        "evaluate": 1,  /* 口碑:1为“好评如潮”；2为"特别好评"；3为"多半好评"；4为"褒贬不一"；5为"多半差评"；6为"差评如潮"；7为"无评论 "*/ 
        "evaluatingCount": 11853, /* 评测数 */
        "label": [
            "搞笑",
            "多人",
            "物理",
            "合作",
            "解谜",
            "独立",
            "单机合作",
            "冒险",
            "平台解谜",
            "单机多人",
            "沙盒",
            "开放世界",
            "跑酷",
            "欢乐",
            "单人",
            "休闲",
            "分屏",
            "3D",
            "模拟",
            "生存"
        ]
    }
]
```