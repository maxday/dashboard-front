
/**
* Theme: Adminto Admin Template
* Author: Coderthemes
* Dashboard
*/

!function($) {
    "use strict";

    var Dashboard1 = function() {
    	this.$realData = []
    };

    //creates Bar chart
    Dashboard1.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#eeeeee',
            barSizeRatio: 0.2,
            barColors: lineColors
        });
    },

    //creates line chart
    Dashboard1.prototype.createLineChart = function(element, data, xkey, ykeys, labels, opacity, Pfillcolor, Pstockcolor, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          fillOpacity: opacity,
          pointFillColors: Pfillcolor,
          pointStrokeColors: Pstockcolor,
          behaveLikeLine: true,
          gridLineColor: '#eef0f2',
          hideHover: 'auto',
          resize: true, //defaulted to true
          pointSize: 0,
          lineColors: lineColors
        });
    },

    //creates Donut chart
    Dashboard1.prototype.createDonutChart = function(element, data, colors) {
        Morris.Donut({
            element: element,
            data: data,
            resize: true, //defaulted to true
            colors: colors
        });
    },


    Dashboard1.prototype.init = function() {

        //creating bar chart
        var $barData  = [
            { y: 'j-7', a: 1250 },
            { y: 'j-6', a: 1075 },
            { y: 'j-5', a: 9033 },
            { y: 'j-4', a: 600 },
            { y: 'j-3', a: 1235 },
            { y: 'j-2', a: 3420 },
            { y: 'j-1', a: 3590 }
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a'], ['Statistics'], ['#188ae2']);

        //create line chart
        var $data  = [
            { y: 1, a: 1250 },
            { y: 2, a: 900 },
            { y: 3, a: 1220 },
            { y: 4, a: 1230 },
            { y: 5, a: 1030 },
            { y: 6, a: 1220 },
            { y: 7, a: 1250 }
          ];
        this.createLineChart('morris-line-example', $data, 'y', 'a', ['Cours de  l\'action'],['0.9'],['#ffffff'],['#999999'], ['#10c469','#188ae2']);

        //creating donut chart
        var $donutData = [
                {label: "Positif", value: 502},
                {label: "Négatif", value: 129},
                {label: "Neutre", value: 59}
            ];
        this.createDonutChart('morris-donut-example', $donutData, ['#18B340', '#C92F33', "#FFB22F"]);
    },
    //init
    $.Dashboard1 = new Dashboard1, $.Dashboard1.Constructor = Dashboard1
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Dashboard1.init();
}(window.jQuery);
