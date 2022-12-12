chart1Data = [];
chart2Data = [];

var width = 500;
var height = 500;

d3.csv('TransportationFatalities_ByYear.csv', function (csv) {
  // console.log(csv);
  for (var i = 0; i < csv.length; i++) {
    //Year
    csv[i].Year = Number(csv[i].Year);
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

    chart1Data.push({ ...general_obj, ...chart1_obj });
    chart2Data.push({ ...general_obj, ...chart2_obj });
  }

  chart1SetData(chart1Data);
  chart2SetData(chart2Data);

  drawChart1(width, height);
  drawChart2(width, height);
});

//Draw chart 1 and chart 2
//Display data for chart 1 and chart 2
//Link data from chart 1 and chart 2
//Create filter (year)
//Chart legend

//add a 3rd chart if necessary
