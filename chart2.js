var data2 = [];

function chart2SetData(d) {
  data2 = d;
}

function drawChart2(width, height) {
  var yearExtent = d3.extent(data2, function (row) {
    return row.Year;
  });
  var populationExtent = d3.extent(data2, function (row) {
    return row.Total_Per_100K;
  });

  var xScale = d3.scaleLinear().domain(yearExtent).range([50, 470]);
  var yScale = d3.scaleLinear().domain(populationExtent).range([470, 30]);

  var xAxis = d3.axisBottom().scale(xScale);
  var yAxis = d3.axisLeft().scale(yScale);

  var chart2 = d3
    .select('#chart2')
    .append('svg:svg')
    .attr('id', 'svg2')
    .attr('width', width)
    .attr('height', height);

  var title2 = d3
    .select('#svg2')
    .append('text')
    .attr('x', width / 2)
    .attr('y', 12)
    .attr('font-size', '12px')
    .text('Year vs Fatalities Per 100k');

  chart2 // or something else that selects the SVG element in your visualizations
    .append('g') // create a group node
    .attr('transform', 'translate(0,' + (width - 30) + ')')
    .call(xAxis) // call the axis generator
    .append('text')
    .attr('class', 'label')
    .attr('x', width - 16)
    .attr('y', -6)
    .style('text-anchor', 'end');

  chart2 // or something else that selects the SVG element in your visualizations
    .append('g') // create a group node
    .attr('transform', 'translate(50, 0)')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .style('text-anchor', 'end');

  var yearLabel = d3
    .select('#svg2')
    .append('text')
    .attr('x', width / 2)
    .attr('y', height)
    .attr('font-size', '12px')
    .text('Year');

  var popLabel = d3
    .select('#svg2')
    .append('text')
    .attr('x', -width / 2)
    .attr('y', 20)
    .attr('font-size', '12px')
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-90)')
    .text('Total Per 100K');
}
