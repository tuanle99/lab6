chart1Data = [];
chart2Data = [];

var width = 500;
var height = 500;

filter_initial_year = 0;
filter_end_year = 0;

d3.csv('TransportationFatalities_ByYear.csv', function (csv) {
  filter_initial_year = Number(csv[0].Year);
  filter_end_year = Number(csv[csv.length - 1].Year);

  for (let i = filter_initial_year; i < filter_end_year + 1; i++) {
    d3.select('#Initial_categorySelect')
      .append('option')
      .attr('value', i)
      .text(i);
    d3.select('#End_categorySelect').append('option').attr('value', i).text(i);
  }

  setData(csv, 1975, 2020);

  drawChart1(width, height);
  drawChart2(width, height);

  d3.select('#filter')
    .append('p')
    .append('button')
    .style('border', '1px solid black')
    .text('Filter Data')
    .on('click', function () {
      filter_initial_year = onInitialCategoryChanged();
      filter_end_year = onEndCategoryChanged();

      setData(csv, filter_initial_year, filter_end_year);

      d3.select('#chart1').selectAll('*').remove();
      d3.select('#chart2').selectAll('*').remove();

      drawChart1(width, height);
      drawChart2(width, height);
    });
});

function onInitialCategoryChanged() {
  var select = d3.select('#Initial_categorySelect').node();
  // Get current value of select element
  var category = select.options[select.selectedIndex].value;
  // Update chart with the selected category of cereals
  //updateChart(category);
  return category;
}

function onEndCategoryChanged() {
  var select = d3.select('#End_categorySelect').node();
  // Get current value of select element
  var category = select.options[select.selectedIndex].value;
  // Update chart with the selected category of cereals
  //updateChart(category);
  return category;
}

function setData(csv, init, end) {
  if (end < init) {
    init = 1975;
    end = 2020;
  }
  chart1Data = [];
  chart2Data = [];

  let unfiltered_chart1Data = [];
  let unfiltered_chart2Data = [];

  for (var i = 0; i < csv.length; i++) {
    //Year
    csv[i].Year = csv[i].Year;
    //Population
    csv[i].Population = Number(csv[i].Population);
    //Car_Occupant
    csv[i].Car_Occupant = Number(csv[i].Car_Occupant);
    //Pedestrian
    csv[i].Pedestrian = Number(csv[i].Pedestrian);
    //Motorcycle
    csv[i].Motorcycle = Number(csv[i].Motorcycle);
    //Bicycle
    csv[i].Bicycle = Number(csv[i].Bicycle);
    //Trucks
    csv[i].Trucks = Number(csv[i].Trucks);
    //Total
    csv[i].Total = Number(csv[i].Total);
    //Car_Per_100K
    csv[i].Car_Per_100K = Number(csv[i].Car_Per_100K);
    //Ped_Per_100K
    csv[i].Ped_Per_100K = Number(csv[i].Ped_Per_100K);
    //Motorcycle_Per_100K
    csv[i].Motorcycle_Per_100K = Number(csv[i].Motorcycle_Per_100K);
    //Bicycle_Per_100K
    csv[i].Bicycle_Per_100K = Number(csv[i].Motorcycle_Per_100K);
    //Trucks_Per_100K
    csv[i].Trucks_Per_100K = Number(csv[i].Trucks_Per_100K);
    //Total_Per_100K
    csv[i].Total_Per_100K = Number(csv[i].Total_Per_100K);

    general_obj = { Year: csv[i].Year, Population: csv[i].Population };
    chart1_obj = {
      Car_Occupant: csv[i].Car_Occupant,
      Pedestrian: csv[i].Pedestrian,
      Motorcycle: csv[i].Motorcycle,
      Bicycle: csv[i].Bicycle,
      Trucks: csv[i].Trucks,
      Total: csv[i].Total,
    };
    chart2_obj = {
      Car_Per_100K: csv[i].Car_Per_100K,
      Ped_Per_100K: csv[i].Ped_Per_100K,
      Motorcycle_Per_100K: csv[i].Motorcycle_Per_100K,
      Bicycle_Per_100K: csv[i].Bicycle_Per_100K,
      Trucks_Per_100K: csv[i].Trucks_Per_100K,
      Total_Per_100K: csv[i].Total_Per_100K,
    };
    if (Number(csv[i].Year) >= init && Number(csv[i].Year) <= end) {
      chart1Data.push({ ...general_obj, ...chart1_obj });
      chart2Data.push({ ...general_obj, ...chart2_obj });
    }

    unfiltered_chart1Data.push({ ...general_obj, ...chart1_obj });
    unfiltered_chart2Data.push({ ...general_obj, ...chart2_obj });
  }

  chart1SetData(chart1Data, unfiltered_chart1Data);
  chart2SetData(chart2Data, unfiltered_chart2Data);
}
