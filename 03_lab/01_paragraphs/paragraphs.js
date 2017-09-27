
// **** Your JavaScript code goes here ****
d3.csv("./baseball_hr_leaders_2017.csv", function(error, dataSet) {
    var p = d3.select('body')
            .selectAll('p')
            .data(dataSet)
            .enter()
            .append("p")
            .text(function(d, i) { return d["rank"] + "\t" + d["name"] + "\t" + d["homeruns"]; })
            .style("font-weight", function(d, i) {
                if (d["rank"] == 1) { return "bold"; }
                return "normal";
            });

})
