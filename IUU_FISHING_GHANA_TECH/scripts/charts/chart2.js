console.log("chart2.js is loaded");

const data = [
    { Region: "Northwest Atlantic", LowEstimate: 0.1, HighEstimate: 0.2 },
    { Region: "Northeast Atlantic", LowEstimate: 0.4, HighEstimate: 0.8 },
    { Region: "Western Central Atlantic", LowEstimate: 0.1, HighEstimate: 0.3 },
    { Region: "Eastern Central Atlantic", LowEstimate: 0.05, HighEstimate: 0.1 },
    { Region: "Southwest Atlantic", LowEstimate: 0.3, HighEstimate: 0.5 },
    { Region: "Southeast Atlantic", LowEstimate: 0.5, HighEstimate: 1 },
    { Region: "Western Indian", LowEstimate: 0.2, HighEstimate: 0.4 },
    { Region: "Eastern Indian", LowEstimate: 0.3, HighEstimate: 0.6 },
    { Region: "Northwest Pacific", LowEstimate: 0.7, HighEstimate: 3 },
    { Region: "Northeast Pacific", LowEstimate: 0.4, HighEstimate: 0.6 },
    { Region: "Western Central Pacific", LowEstimate: 0.6, HighEstimate: 1.5 },
    { Region: "Eastern Central Pacific", LowEstimate: 0.2, HighEstimate: 0.6 },
    { Region: "Southwest Pacific", LowEstimate: 0.1, HighEstimate: 0.2 },
    { Region: "Southeast Pacific", LowEstimate: 0.5, HighEstimate: 1 },
    { Region: "Antarctic", LowEstimate: 0.8, HighEstimate: 2 }
];

const margin = { top: 40, right: 120, bottom: 50, left: 100 };
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

console.log("SVG created");

svg.append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("fill", "#fff")
    .text("Global Estimates Value of Illegal Fishing");

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 20)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("fill", "#fff")
    .text("In $US billion");

const x = d3.scaleBand()
    .domain(data.map(d => d.Region))
    .range([0, width])
    .padding(0.2);

const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.LowEstimate + d.HighEstimate)])
    .nice()
    .range([height, 0]);

const color = d3.scaleOrdinal()
    .domain(['LowEstimate', 'HighEstimate'])
    .range(['#1f77b4', '#aec7e8']);

const stack = d3.stack()
    .keys(['LowEstimate', 'HighEstimate']);

const series = stack(data);

svg.selectAll(".series")
    .data(series)
    .enter().append("g")
    .attr("class", "series")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    .data(d => d)
    .enter().append("rect")
    .attr("x", d => x(d.data.Region))
    .attr("y", d => y(d[1]))
    .attr("height", d => y(d[0]) - y(d[1]))
    .attr("width", x.bandwidth());

console.log("Data bound to SVG");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end")
    .style("fill", "#fff");

svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(y).ticks(7).tickFormat(d => `$${d * 1000}`))
    .selectAll("text")
    .style("fill", "#fff");

const legend = svg.selectAll(".legend")
    .data(color.domain().slice().reverse())
    .enter().append("g")
    .attr("class", "legend")
    .attr("transform", (d, i) => `translate(0,${i * 20})`);

legend.append("rect")
    .attr("x", width + 40)
    .attr("width", 18)
    .attr("height", 18)
    .style("fill", color);

legend.append("text")
    .attr("x", width + 64)
    .attr("y", 9)
    .attr("dy", ".35em")
    .style("text-anchor", "start")
    .style("fill", "#fff")
    .text(d => d);

console.log("Chart rendering complete");

   

