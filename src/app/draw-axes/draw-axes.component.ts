import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-draw-axes',
  templateUrl: './draw-axes.component.html',
  styleUrls: ['./draw-axes.component.css']
})
export class DrawAxesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const w = 500;
    const h = 300;
    const padding = 60;

    const dataset = [];
    const numDataPoints = 50;
    const xRange = 10000;
    const yRange = 10000;
    dataset.push([xRange, yRange]);
    // const xRange = Math.random() * 1000;
    // const yRange = Math.random() * 1000;

    for (let i = 0; i < numDataPoints; i++) {
      // const newNumber1 = Math.floor(Math.random() * xRange);
      // const newNumber2 = Math.floor(Math.random() * yRange);
      // dataset.push([newNumber1, newNumber2]);
    }


    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset,  (d) =>  d[0] )])
      .range([padding, w - padding * 2]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset,  (d) =>  d[1] )])
      .range([h - padding, padding]);

    const aScale = d3.scaleSqrt()
      .domain([0, d3.max(dataset,  (d) =>  d[1] )])
      .range([0, 10]);

    // const formatAsPercentage = d3.format('.1%');

    const xAxis = d3.axisBottom()
      .scale(xScale)
      .ticks(5);
      // .tickFormat(formatAsPercentage);

    const yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(5)
      // .tickFormat(formatAsPercentage);

    const svg = d3.select('body')
      .append('svg')
      .attr('width', w)
      .attr('height', h);


    // svg.selectAll('circle')
    //   .data(dataset)
    //   .enter()
    //   .append('circle')
    //   .attr('cx',  (d) => {
    //     return xScale(d[0]);
    //   })
    //   .attr('cy', (d) => {
    //     return yScale(d[1]);
    //   })
    //   .attr('r', (d) => {
    //     return aScale(d[1]);
    //   });

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis);

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', 'translate(' + padding + ',0)')
      .call(yAxis);

  }

}
