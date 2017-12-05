Vue.component("my-nav",{
	template:`<ul>
			<li class="n">推荐</li>
			<li><a href="">视频</a></li>
			<li><a href="">热点</a></li>
			<li><a href="">娱乐</a></li>
			<li><a href="">时尚</a></li>
			<li><a href="">+</a></li>
		</ul>`
})
new Vue({
	el:"#top"
})




Vue.component("my-logo",{
	template:`
	<div>
	<img src="./img/logo.jpg"/>
	<input type="text" />
	<button>百度一下</button>
	</div>
	`
})
new Vue({
	el:"#zj"
})




Vue.component("my-tb",{
	template:`<ul>
				<li><img src="img/t1.jpg" alt="" />关注</li>
				<li><img src="img/t2.jpg" alt="" />新闻</li>
				<li><img src="img/t3.jpg" alt="" />小说</li>
				<li><img src="img/t4.jpg" alt="" />视频</li>
				<li><img src="img/t5.jpg" alt="" />糯米</li>
				<li><img src="img/t6.jpg" alt="" />地图</li>
			</ul>
			`
})
Vue.component("my-d",{
	template:`<div class="dian">
				<img src="img/t7.jpg" alt="" />
			</div>`
})
new Vue({
	el:"#xtb"
})
new Vue({
	el:".class"
})



Vue.component(`list-li`,{
    props:["text","url","come","time","hs","wz"],
    template:`<li>
             <h1>{{text}}</h1>
             <img :src="url" :alt="tit">
             <span>{{come}}</span>
              <span>{{time}}</span>
               <span>{{hs}}</span>
                <span>{{wz}}</span>
        </li>`
})
var app=new Vue({
    el:"#app",
    data:{
        lists:[
         	{text:'习近平用这五句话介绍中国“新时代”',come:'央广网',time:'11.19',hs:'置顶'},
         	{text:'农村大集鲫鱼鲤鱼铺满地，鱼的来源让你太生气，最好别吃',url:'img/_03.gif',come:'河北乡土',time:'11.19',hs:'图集',wz:'打开手机百度'},
         	 {text:'女人情到深处时，才会这样称呼你，你可曾被如此称呼过？',come:'宇宙用户精选',time:'11-16',hs:'图集',z:'打开手机百度'},
            {text:'超神学院：曾经的雄兵连终于集合了，真是不容易啊！',url:'img/_06.gif',come:'透明的车玻璃',time:'11-18',wz:'打开手机百度'},
            {text:'烤鱼店生意红火 秘方：用漏斗过滤剩菜后的口水油！',come:'南方都市报',time:'07:27',hs:'热点'},
            {text:'刘鑫称她也不记得当时有没有反锁门，现在时百口莫辩解释不清楚了',url:'img/_08.gif',come:'娱乐杂八话天下',time:'11-19',wz:'打开手机百度'},      
            {text:'结婚70周年！英国女王庆祝白金婚王室发布合影',come:'新浪娱乐',time:'11-19'},
            {text:'女兵在阅兵时想上厕所怎么办，原来还有这种操作',come:'军人魂',time:'11-18'},
            {text:'专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”',come:'只要你愿意等',time:'11-19'},
            {text:'日本女星Shinozaki沙滩游玩，太漂亮了',url:'img/_11.gif',come:'精选影片下',time:'11-17',hs:'图集',wz:'打开手机百度'},
            {text:'农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉',come:'闻舞视界',time:'11-19',hs:'图集',wz:'打开手机百度'},
            {text:'马未都：我为什么不配戴文玩，说车来你们不要觉得恶心',url:'img/_14.jpg.gif',come:'百家人和文',time:'11-18',wz:'打开手机百度'},         
            {text:'红色越野正开走警察突然瞄见副驾门把手上有手铐',come:'网易新闻',time:'11-19',hs:'热点'},
            {text:'泰版《命中注定我爱你》最终帕乌面临死亡，妮子应该不会难受吧',url:'img/_16.gif',come:'军旅中的生涯',time:'11-18',wz:'打开手机百度'},           
            {text:'中国造出“地表最强”两栖战车 多项性能居世界第一',come:'新华网',time:'11-19'},          
            {text:'徐州下雪了，今夜淮北地区有雨夹雪',come:'东方头条',time:'11-19'},
            {text:'成都10岁男孩在家上学：做德语主播 写万字英文小说',come:'凤凰新网',time:'11-19'},
            {text:'潘玮柏访谈现场被逼问感情生活 他是这样回答吴昕知道吗',url:'img/_18.gif',come:'楚秀网综合',time:'11-19',wz:'打开手机百度'},
            {text:'关注席有人挂出“藏独”旗蓄意挑衅 中国球员在德退场抗议',come:'网易新闻',time:'11-19',wz:'00:31'}
        ]
    }
})



Vue.component("my-footer",{
	template:`<div>
	<p><img src="img/111.jpg" alt="" />用户反馈<p>
	<p>使用百度前必读Baidu京ICP证030173号</p>
	<p><img src="img/2.jpg" alt="" />京公网安备11000002000001号</p>
			</div>`
})
new Vue({
	el:"#footer"
})




