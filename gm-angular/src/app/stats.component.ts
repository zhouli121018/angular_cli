import {Component,OnInit} from '@angular/core';
import {AgentService} from './agent.service';

@Component({
	selector:'stats',
	templateUrl:'./stats.component.html'
	})

export class StatsComponent implements OnInit{
	title="投注统计";
	stats=[];
	statsInfo=[];
	constructor(private agentService:AgentService){};
    ngOnInit(): void {
    	this.getStats();
	}
	getStats(){
		this.agentService.getStats().then(
      	data=>{
      		console.log(data);
      		this.statsInfo=data;
      		this.bindpage(1);
      	})
	}

	  pageIndex = 1;
	  pageCount = 1;
	  totalNum = 0;
	  private bindpage(event:number):void {
	    this.stats = this.statsInfo.slice((event-1)*10,event*10);
	    this.pageIndex = event;
	    this.totalNum = this.statsInfo.length;
	    if(this.statsInfo.length%10==0){
	      this.pageCount = Math.floor(this.statsInfo.length/10);
	    }else{
	      this.pageCount = Math.floor(this.statsInfo.length/10)+1;
	    }
	  }

	  datas={
    link_title:"本周投注统计",
    x_data:['周一','周二','周三','周四','周五','周六','周日'],
    y_data:[444,666,555,333,777,666,553],
    y_name:"投注金额",
    s_name:'投注金额'};
	bar(event:any){
    console.log(event);
  }

  statsdata = {
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
      type: 'line',
      barWidth: '60%',
      label: {
        normal: {
          show: true
        }
      },
      data:this.datas.y_data
    }]
  }
}