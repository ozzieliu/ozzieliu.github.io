var euro = [
 {'key': 'Large kangaroo',
  'values': [{'x': 1977, 'y': 2},
   {'x': 1979, 'y': 1},
   {'x': 1980, 'y': 1},
   {'x': 1981, 'y': 1},
   {'x': 1982, 'y': 1},
   {'x': 1983, 'y': 1},
   {'x': 1985, 'y': 1},
   {'x': 1986, 'y': 1},
   {'x': 1987, 'y': 2},
   {'x': 1988, 'y': 1},
   {'x': 1990, 'y': 3},
   {'x': 1993, 'y': 1},
   {'x': 1996, 'y': 0}]},
 {'key': 'Prefix',
  'values': [{'x': 1977, 'y': 1},
   {'x': 1979, 'y': 2},
   {'x': 1980, 'y': 2},
   {'x': 1982, 'y': 1},
   {'x': 1983, 'y': 2},
   {'x': 1984, 'y': 2},
   {'x': 1986, 'y': 3},
   {'x': 1989, 'y': 2},
   {'x': 1990, 'y': 2},
   {'x': 1992, 'y': 1},
   {'x': 1993, 'y': 2},
   {'x': 1994, 'y': 4},
   {'x': 1995, 'y': 3},
   {'x': 1996, 'y': 5},
   {'x': 1997, 'y': 4},
   {'x': 1998, 'y': 6},
   {'x': 1999, 'y': 7},
   {'x': 2000, 'y': 6},
   {'x': 2001, 'y': 5},
   {'x': 2002, 'y': 5},
   {'x': 2003, 'y': 4},
   {'x': 2004, 'y': 2},
   {'x': 2005, 'y': 6},
   {'x': 2006, 'y': 4},
   {'x': 2007, 'y': 3},
   {'x': 2008, 'y': 1},
   {'x': 2009, 'y': 3},
   {'x': 2010, 'y': 3},
   {'x': 2011, 'y': 2},
   {'x': 2012, 'y': 3},
   {'x': 2013, 'y': 2},
   {'x': 2014, 'y': 1},
   {'x': 2015, 'y': 2}]},
 {'key': 'New Currency',
  'values': [
   {'x': 1994, 'y': 2},
   {'x': 1996, 'y': 3},
   {'x': 1997, 'y': 2},
   {'x': 1999, 'y': 4},
   {'x': 2001, 'y': 3},
   {'x': 2003, 'y': 2},
   {'x': 2004, 'y': 2},
   {'x': 2005, 'y': 3},
   {'x': 2006, 'y': 2},
   {'x': 2008, 'y': 1},
   {'x': 2012, 'y': 0},
   {'x': 2014, 'y': 0}]},
   {'key': 'Replacement currency',
     'values': [{'x': 1997, 'y': 1},
      {'x': 2000, 'y': 1},
      {'x': 2001, 'y': 1},
      {'x': 2002, 'y': 1},
      {'x': 2003, 'y': 2},
      {'x': 2005, 'y': 2},
      {'x': 2006, 'y': 1},
      {'x': 2007, 'y': 2},
      {'x': 2008, 'y': 1},
      {'x': 2009, 'y': 2},
      {'x': 2011, 'y': 3},
      {'x': 2012, 'y': 3},
      {'x': 2013, 'y': 4},
      {'x': 2014, 'y': 3},
      {'x': 2015, 'y': 5}]}]

/*These lines are all chart setup.  Pick and choose which chart features you want to utilize. */
nv.addGraph(function() {
  var chart = nv.models.lineChart()
                .margin({left: 100})
                .useInteractiveGuideline(false)
                .showLegend(true)
                .showYAxis(true)
                .showXAxis(true)
                .forceY(0);

  chart.options({height:400})

  chart.xAxis     //Chart x-axis settings
       .axisLabel('Year');

  chart.yAxis     //Chart y-axis settings
       .axisLabel('Occurences')
       .ticks(5);

  chart.interpolate("cardinal");

    /* Done setting the chart up? Time to render it!*/
  d3.select('#chart svg')    //Select the <svg> element you want to render the chart in.
      .datum(euro)
      .transition()         //Populate the <svg> element with chart data...
      .call(chart);          //Finally, render the chart!

  //Update the chart when window resizes.
  nv.utils.windowResize(function() { chart.update() });
  return chart;

});
