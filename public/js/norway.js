
$(function () {
	
	// define the chart
	var lineChart =  new Highcharts.Chart({
			chart: {
				renderTo: 'lineChart'
			},
			title: {
				text: 'Cervical Test Coverage',
				x: -20
			},
			subtitle: {
	            text: null,
	            x: -20
	        },
			xAxis: {
				categories: []
			},
			yAxis: {
				title: {
					text: 'Test Coverage (%)'
				},
				plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
			},
			
			tooltip: {
	            valueSuffix: '%'
	        },
	        labels: {
	            items: [{
	                style: {
	                    left: '40px',
	                    top: '8px',
	                    color: 'black',
	                    font: 'bold 14px "Trebuchet MS", Verdana, sans-serif'
	                }
	                
	            }]
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
			series: []
		});
	
	
	
	
	// text files according to indicators
	var text_file_1 = "http://localhost:9000/assets/text_files/norway_year/1.txt";
	var text_file_2 = "http://localhost:9000/assets/text_files/norway_year/2.txt";
	var text_file_3 = "http://localhost:9000/assets/text_files/norway_year/3.txt";
	var text_file_4 = "http://localhost:9000/assets/text_files/norway_year/4.txt";
	var text_file_5 = "http://localhost:9000/assets/text_files/norway_year/5.txt";
	var text_file_6 = "http://localhost:9000/assets/text_files/norway_year/6.txt";
	var text_file_7 = "http://localhost:9000/assets/text_files/norway_year/7.txt";
	var text_file_8 = "http://localhost:9000/assets/text_files/norway_year/8.txt";
	var text_file_9 = "http://localhost:9000/assets/text_files/norway_year/9.txt";
	var text_file_10 = "http://localhost:9000/assets/text_files/norway_year/10.txt";
	
	// text files according to years
	var text_file_1991 = "http://localhost:9000/assets/text_files/norway_indicator/1991.txt";
	var text_file_1992 = "http://localhost:9000/assets/text_files/norway_indicator/1992.txt";
	var text_file_1993 = "http://localhost:9000/assets/text_files/norway_indicator/1993.txt";
	var text_file_1994 = "http://localhost:9000/assets/text_files/norway_indicator/1994.txt";
	var text_file_1995 = "http://localhost:9000/assets/text_files/norway_indicator/1995.txt";
	var text_file_1996 = "http://localhost:9000/assets/text_files/norway_indicator/1996.txt";
	var text_file_1997 = "http://localhost:9000/assets/text_files/norway_indicator/1997.txt";
	var text_file_1998 = "http://localhost:9000/assets/text_files/norway_indicator/1998.txt";
	var text_file_1999 = "http://localhost:9000/assets/text_files/norway_indicator/1999.txt";
	var text_file_2000 = "http://localhost:9000/assets/text_files/norway_indicator/2000.txt";
	var text_file_2001 = "http://localhost:9000/assets/text_files/norway_indicator/2001.txt";
	var text_file_2002 = "http://localhost:9000/assets/text_files/norway_indicator/2002.txt";
	var text_file_2003 = "http://localhost:9000/assets/text_files/norway_indicator/2003.txt";
	var text_file_2004 = "http://localhost:9000/assets/text_files/norway_indicator/2004.txt";
	var text_file_2005 = "http://localhost:9000/assets/text_files/norway_indicator/2005.txt";
	var text_file_2006 = "http://localhost:9000/assets/text_files/norway_indicator/2006.txt";
	var text_file_2007 = "http://localhost:9000/assets/text_files/norway_indicator/2007.txt";
	var text_file_2008 = "http://localhost:9000/assets/text_files/norway_indicator/2008.txt";
	var text_file_2009 = "http://localhost:9000/assets/text_files/norway_indicator/2009.txt";
	var text_file_2010 = "http://localhost:9000/assets/text_files/norway_indicator/2010.txt";
	var text_file_2011 = "http://localhost:9000/assets/text_files/norway_indicator/2011.txt";
	var text_file_2012 = "http://localhost:9000/assets/text_files/norway_indicator/2012.txt";
	var text_file_2013 = "http://localhost:9000/assets/text_files/norway_indicator/2013.txt";
	var text_file_2014 = "http://localhost:9000/assets/text_files/norway_indicator/2014.txt";
	
	// text files according for age as X-axis
	var text_age_1991 = "http://localhost:9000/assets/text_files/norway_age/1991.txt";
	var text_age_1992 = "http://localhost:9000/assets/text_files/norway_age/1992.txt";
	var text_age_1993 = "http://localhost:9000/assets/text_files/norway_age/1993.txt";
	var text_age_1994 = "http://localhost:9000/assets/text_files/norway_age/1994.txt";
	var text_age_1995 = "http://localhost:9000/assets/text_files/norway_age/1995.txt";
	var text_age_1996 = "http://localhost:9000/assets/text_files/norway_age/1996.txt";
	var text_age_1997 = "http://localhost:9000/assets/text_files/norway_age/1997.txt";
	var text_age_1998 = "http://localhost:9000/assets/text_files/norway_age/1998.txt";
	var text_age_1999 = "http://localhost:9000/assets/text_files/norway_age/1999.txt";
	var text_age_2000 = "http://localhost:9000/assets/text_files/norway_age/2000.txt";
	var text_age_2001 = "http://localhost:9000/assets/text_files/norway_age/2001.txt";
	var text_age_2002 = "http://localhost:9000/assets/text_files/norway_age/2002.txt";
	var text_age_2003 = "http://localhost:9000/assets/text_files/norway_age/2003.txt";
	var text_age_2004 = "http://localhost:9000/assets/text_files/norway_age/2004.txt";
	var text_age_2005 = "http://localhost:9000/assets/text_files/norway_age/2005.txt";
	var text_age_2006 = "http://localhost:9000/assets/text_files/norway_age/2006.txt";
	var text_age_2007 = "http://localhost:9000/assets/text_files/norway_age/2007.txt";
	var text_age_2008 = "http://localhost:9000/assets/text_files/norway_age/2008.txt";
	var text_age_2009 = "http://localhost:9000/assets/text_files/norway_age/2009.txt";
	var text_age_2010 = "http://localhost:9000/assets/text_files/norway_age/2010.txt";
	var text_age_2011 = "http://localhost:9000/assets/text_files/norway_age/2011.txt";
	var text_age_2012 = "http://localhost:9000/assets/text_files/norway_age/2012.txt";
	var text_age_2013 = "http://localhost:9000/assets/text_files/norway_age/2013.txt";
	var text_age_2014 = "http://localhost:9000/assets/text_files/norway_age/2014.txt";
	
	// define two possible dropdown list
	var indicator_dropdown = ["Follow-up time (years)",1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var year_dropdown = ["Choose calendar year",1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
	
	// function to fill the dropdown
	function fill_dropdown (array) {
		$('#chartType').empty();
		$.each(array, function(i, p) {
		    $('#chartType').append($('<option></option>').val(p).html(p));
		});	
		
	}
	
	// filling the linechart with data from the text files 
	function fill_linechart (text_file, number) {
		
		while (lineChart.series.length > 0) {
        	lineChart.series[0].remove(true);
		}
		
	    $.get(text_file, function(data) {
	    	
			// Split the lines
			
			var lines = data.split('\n');
			$.each(lines, function(lineNo, line) {
				var items = line.split(',');
				// header line contains categories
				if (lineNo == 0) {
					
					var categories = [];
				
					$.each(items, function(itemNo, item) {
						if (itemNo > 0) categories.push(item);
					});
					// define the X-axis 
					lineChart.xAxis[0].setCategories(categories, false);
					// set the subtitle according to a type of text file: if it starts with number more than 1990 then X-axis is Calendar years
					if (categories[0] > 1900) {
						// correct English
						if (number == 1) {
							lineChart.setSubtitle({ text: 'Follow-up time: ' + number + ' year' });
						} else {
							lineChart.setSubtitle({ text: 'Follow-up time: ' + number + ' years' });
						}
					} else {
						lineChart.setSubtitle({ text: 'Calendar year: ' + number });
					}
				}
				// the rest of the lines contain data with their name in the first position
				else {
					var series = { 
						data: []
					};
					$.each(items, function(itemNo, item) {
						if (itemNo == 0) {
							series.name = item;
							if (series.name == 'All ages 30-60 years') {
								series.color = Highcharts.getOptions().colors[7];
							}
							if (series.name == 'All ages 30-60 years' || series.name == 'Follow up time: 1 year') {
								series.visible = true;
							} else {
								series.visible = false;
							}
						} else {
							series.data.push(parseFloat(item));
						}
					}); // each
					lineChart.addSeries(series); // add data and draw the chart
				} // if else
			}); // each 
	
		}); // $.get
	} // function fill_linechart
	
	if (document.getElementById('years').checked) {
		fill_dropdown(indicator_dropdown);
		fill_linechart(text_file_1, 1);
	}
	
	
	// radio button change function
	$(".x-axis").change(function() {
        value = this.getAttribute("value");
        
        if (value == 'indicator') {
        	fill_dropdown(year_dropdown);
    		fill_linechart(text_file_2014, 2014);
    		
        } else if  (value == 'year') {
        	fill_dropdown(indicator_dropdown);
    		fill_linechart(text_file_1, 1);
        }
        
        else if  (value == 'age') {
        	fill_dropdown(year_dropdown);
    		fill_linechart(text_age_2014, 2014);
        }
	});
	
	
	// dropdown change function
	$("#chartType").change(function() {
		var type = this.value;
	        
	    if (type == 1) {
	    	fill_linechart(text_file_1, type);
	    } else if (type == 2) {
	    	fill_linechart(text_file_2, type);
	    } else if (type == 3) {
	    	fill_linechart(text_file_3, type);
	    } else if (type == 4) {
	    	fill_linechart(text_file_3, type);
	    } else if (type == 5) {
	    	fill_linechart(text_file_5, type);
	    } else if (type == 6) {
	    	fill_linechart(text_file_6, type);
	    } else if (type == 7) {
	    	fill_linechart(text_file_7, type);
	    } else if (type == 8) {
	    	fill_linechart(text_file_8, type);
	    } else if (type == 9) {
	    	fill_linechart(text_file_9, type);
	    } else if (type == 10) {
	    	fill_linechart(text_file_10, type);
	    } else if (type == 1991) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1991, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1991, type);
		    }
	    } else if (type == 1992) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1992, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1992, type);
		    }
	    } else if (type == 1993) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1993, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1993, type);
		    }
	    } else if (type == 1994) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1994, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1994, type);
		    }
	    } else if (type == 1995) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1995, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1995, type);
		    }
	    } else if (type == 1996) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1996, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1996, type);
		    }
	    } else if (type == 1997) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1997, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1997, type);
		    }
	    } else if (type == 1998) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1998, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1998, type);
		    }
	    } else if (type == 1999) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_1999, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_1999, type);
		    }
	    } else if (type == 2000) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2000, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2000, type);
		    }
	    } else if (type == 2001) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2001, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2001, type);
		    }
	    } else if (type == 2002) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2002, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2002, type);
		    }
	    } else if (type == 2003) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2003, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2003, type);
		    }
	    } else if (type == 2004) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2004, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2004, type);
		    }
	    } else if (type == 2005) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2005, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2005, type);
		    }
	    } else if (type == 2006) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2006, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2006, type);
		    }
	    } else if (type == 2007) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2007, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2007, type);
		    }
	    } else if (type == 2008) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2008, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2008, type);
		    }
	    } else if (type == 2009) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2009, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2009, type);
		    }
	    } else if (type == 2010) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2010, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2010, type);
		    }
	    } else if (type == 2011) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2011, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2011, type);
		    }
	    } else if (type == 2012) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2011, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2011, type);
		    }
	    }  else if (type == 2013) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2011, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2011, type);
		    }
	    } else if (type == 2014) {
	    	if (document.getElementById('indicators').checked) {
	    		fill_linechart(text_file_2011, type);
	    	} else if (document.getElementById('ages').checked) {
		        fill_linechart(text_age_2011, type);
		    }
	    }
	});       
	        

	var options_comboChart = {
			chart: {
				renderTo: 'comboChart'
			},
			title: {
				text: 'Cervical Test Coverage',
				x: -20
			},
			subtitle: {
	            text: '5 years interval',
	            x: -20
	        },
			xAxis: {
				categories: []
			},
			yAxis: {
				title: {
					text: 'Test Coverage (%)'
				},
				plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
			},
			tooltip: {
	            valueSuffix: '%'
	        },
			
	        plotOptions: {
	            series: {
	                marker: {
	                	lineWidth: 2,
	                	lineColor: 'red',
	                	fillColor: 'black'
	                }
	            }
	        },
	        labels: {
	            items: [{
	                style: {
	                    left: '40px',
	                    top: '8px',
	                    color: 'black',
	                    font: 'bold 14px "Trebuchet MS", Verdana, sans-serif'
	                }
	            }]
	        },
			series: []
		};
	
	$.get('http://localhost:9000/assets/text_filess/test_combo.txt', function(data) {
		// Split the lines
		var lines = data.split('\n');
		
		$.each(lines, function(lineNo, line) {
			var items = line.split(',');
			
			// header line containes categories
			if (lineNo == 0) {
				$.each(items, function(itemNo, item) {
					if (itemNo > 0) options_comboChart.xAxis.categories.push(item);
				});
			}
			// the rest of the lines contain data with their name in the first position
			else {
				var series = { 
					data: []
				};
				$.each(items, function(itemNo, item) {
					if (itemNo == 0) {
					   if (item != 'total') {
						   series.name = item;
						   series.type = 'column';
					   } else {
						   series.name = 'Total';
						   series.type = 'spline';
						   series.color = Highcharts.getOptions().colors[7];
					   }
					   
					} else {
						series.data.push(parseFloat(item));
					}
				});
				options_comboChart.series.push(series);
			}
		});
		var chart = new Highcharts.Chart(options_comboChart);
	});
	
	
	
});