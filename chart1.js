var data1 = [];
var unfiltered_chart1Data = [];

function chart1SetData(d, u) {
  data1 = d;
  unfiltered_chart1Data = u;
}

function drawChart1(width, height, yearExtent, populationExtent) {
  var yearExtent = d3.extent(unfiltered_chart1Data, function (row) {
    return row.Year;
  });
  var populationExtent = d3.extent(unfiltered_chart1Data, function (row) {
    return row.Total / 1000;
  });

  var xScale = d3.scaleLinear().domain(yearExtent).range([50, 470]);
  var yScale = d3.scaleLinear().domain(populationExtent).range([470, 30]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var chart1 = d3
    .select('#chart1')
    .append('svg:svg')
    .attr('id', 'svg1')
    .attr('width', width)
    .attr('height', height);

  var title1 = d3
    .select('#svg1')
    .append('text')
    .attr('x', width / 2)
    .attr('y', 12)
    .attr('font-size', '12px')
    .text('Year vs Total Fatalities');

  chart1 // or something else that selects the SVG element in your visualizations
    .append('g') // create a group node
    .attr('transform', 'translate(0,' + (width - 30) + ')')
    .call(xAxis) // call the axis generator
    .append('text')
    .attr('class', 'label')
    .attr('x', width - 16)
    .attr('y', -6)
    .style('text-anchor', 'end');

  chart1 // or something else that selects the SVG element in your visualizations
    .append('g') // create a group node
    .attr('transform', 'translate(50, 0)')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end');

  var yearLabel = d3
    .select('#svg1')
    .append('text')
    .attr('x', width / 2)
    .attr('y', height)
    .attr('font-size', '12px')
    .text('Year');

  var totalLabel = d3
    .select('#svg1')
    .append('text')
    .attr('x', -width / 2)
    .attr('y', 20)
    .attr('font-size', '12px')
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-90)')
    .text('Total by 1K');

  let chart1ox = 50;
  let chart1oy = 470;
  let chart1incx = 9.35;
  let chart1incy = -21.6;

  for (let i = 0; i < data1.length; i++) {
    chart1
      .append('circle')
      .attr('r', '4px')
      .attr('name', data1[i].Year)
      .style('fill', 'black')
      .style('stroke', 'black')
      .attr('cx', chart1ox + (data1[i].Year - 1975) * chart1incx)
      .attr('cy', chart1oy + (data1[i].Total / 1000 - 32) * chart1incy);
  }
}
