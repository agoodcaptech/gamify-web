import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  barChartLabels: Label[] = ['Mark', 'Gin', 'Andrew', 'Rahul', 'Stefan', 'Tim'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    {data: [12, 3, 7, 11, 4, 8], label: 'Number of Activities'}
  ];

  lineChartData: ChartDataSets[] = [
    { data: [2, 0, 7, 2, 1, 5, 4], label: 'Number of Activities' },
  ];
  lineChartLabels: Label[] = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Yesterday', 'Today'];
  lineChartOptions: ChartOptions = {
    responsive: true
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#ffdc7a',
    },
  ];
  lineChartLegend = true;
  lineChartType: ChartType = 'line';
  lineChartPlugins = [];


  constructor() { }

  ngOnInit(): void {
  }

}
