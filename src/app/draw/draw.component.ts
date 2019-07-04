import { Component, OnInit } from '@angular/core';


import * as d3 from 'd3';
@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit {
  // let dataset: Array<number>;
  constructor() { }

  ngOnInit() {
    // set the dimensions and margins of the graph
    const margin = { top: 10, right: 40, bottom: 30, left: 60 };
    const width = 450 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select('#scatter_area')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform',
        'translate(' + margin.left + ',' + margin.top + ')');


    // X scale and Axis
    const x = d3.scaleLinear()
      .domain([0, 30])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([0, width]);       // This is the corresponding value I want in Pixel
    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));

    // X scale and Axis
    const y = d3.scaleLinear()
      .domain([0, 90])         // This is the min and the max of the data: 0 to 100 if percentages
      .range([height, 0]);       // This is the corresponding value I want in Pixel
    svg
      .append('g')
      .call(d3.axisLeft(y));

    var data = [{ x: 0, y: 0 }, { x: 10, y: 10 }, { x: 15, y: 15 }, { x: 450, y: 20 }, { x: 600, y: 130 }]

    // create svg element:
    // var svG = d3.select('#curve').append('svg').attr('width', 800).attr('height', 200)

    // prepare a helper function
    var curveFunc = d3.line()
      .curve(d3.curveBasis)              // This is where you define the type of curve. Try curveStep for instance.
      .x(function (d) { return d.x })
      .y(function (d) { return d.y })

    // Add the path using this helper function
    svg.append('path')
      .attr('d', curveFunc(data))
      .attr('stroke', 'black')
      .attr('fill', 'none');
  }



}
