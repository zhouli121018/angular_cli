import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';
import {Vip} from './vip';
@Component({
	selector:'my-vip',
	styles:[],
	templateUrl:'./my-vip.component.html'
	})
export class MyVipComponent implements OnInit{
	title = "我的会员";
    vips:Vip[];
    constructor(private agentService:AgentService){}
   
    ngOnInit(): void {
	    this.bindpage(1);
	}
	pageIndex = 1;
	pageCount = 1;
	totalNum = 0;
	private bindpage(event:number):void {
		var vipsInfo = this.agentService.getVips();
		this.vips = vipsInfo.slice((event-1)*10,event*10);
		this.pageIndex = event;
		this.totalNum = vipsInfo.length;
        if(vipsInfo.length%10==0){
     	 this.pageCount = Math.floor(vipsInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(vipsInfo.length/10)+1;
	    }
    }

    datas={
    	link_title:"本周新增会员数量",
    	x_data:["周一","周二","周三","周四","周五","周六","周日"],
 		y_data:[212,425,265,586,333,999,888],
 		y_name:"会员数量",
 		s_name:'新增会员数量'
 	};
	bar(event:any){
    console.log(event);
  }

  vipdata = {
    title: {
      text: this.datas.link_title
    },
    color: ['#3398DB'],
    //气泡提示框，常用于展现更详细的数据
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    toolbox: {
      show: true,
      feature: {
        //显示缩放按钮
        dataZoom: {
          show: true
        },
        //显示折线和块状图之间的切换
        magicType: {
          show: true,
          type: ['bar', 'line']
        },
        //显示是否还原
        restore: {
          show: true
        },
        //是否显示图片
        saveAsImage: {
          show: true
        }
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: this.datas.x_data,
      axisTick: {
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        rotate: 20
      },
    }],
    yAxis: [{
      name: this.datas.y_name,
      type: 'value'
    }],
    series: [{
      name: this.datas.s_name,
      type: 'bar',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data:this.datas.y_data
    }]
  }
  
  showChargeForm=false;
  showEditForm=false;
  chargeInfo={uuid:"",mount:""};
  selectedAccount={};
  showCharge():void{
    this.showChargeForm=true;
  }
  showEdit(a):void{
    this.showEditForm=true;
    this.selectedAccount=a;
  }
  hideEdit():void{
    this.showEditForm=false;
  }
  hideCharge():void{
    this.showChargeForm=false;
  }
  charge():void{
    if(this.chargeInfo.uuid==""||this.chargeInfo.mount==""){
      alert('游戏ID或充值钻石数量不能为空！');
      return;
    }
    console.dir(this.chargeInfo);
    this.showChargeForm=false;
    this.chargeInfo={uuid:"",mount:""};
  }
  edit():void{
    console.dir(this.selectedAccount);
  }


}
