import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
@Component({
  selector: 'app-draw-path',
  templateUrl: './draw-path.component.html',
  styleUrls: ['./draw-path.component.css']
})
export class DrawPathComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // create data
    var data = [{ x: 0, y: 20 }, { x: 150, y: 150 }, { x: 300, y: 100 }, { x: 450, y: 20 }, { x: 600, y: 130 }]

    // create svg element:
    var svg = d3.select('#curve').append('svg').attr('width', 800).attr('height', 200)

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
