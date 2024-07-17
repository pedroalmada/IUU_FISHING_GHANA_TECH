const data = [
    { Year: 1974, Underfished: 40, FullyFished: 50, Overfished: 10 },
    { Year: 1980, Underfished: 32, FullyFished: 55, Overfished: 13 },
    { Year: 1990, Underfished: 28, FullyFished: 60, Overfished: 12 },
    { Year: 2000, Underfished: 20, FullyFished: 65, Overfished: 15 },
    { Year: 2010, Underfished: 12, FullyFished: 55, Overfished: 33 },
    { Year: 2017, Underfished: 7, FullyFished: 50, Overfished: 43 }
];

const margin = { top: 20, right: 50, bottom: 30, left: 50 }; // Increased right margin to make space for vertical text
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

const svg = d3.select("#chart1").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const x = d3.scaleBand()
    .domain(data.map(d => d.Year))
    .range([0, width])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0]);

const color = d3.scaleOrdinal()
    .domain(["Underfished", "FullyFished", "Overfished"])
    .range(["#1f77b4", "#ff7f0e", "#d62728"]);

const stack = d3.stack()
    .keys(["Underfished", "FullyFished", "Overfished"]);

const series = stack(data);

const area = d3.area()
    .x(d => x(d.data.Year))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

svg.selectAll(".area")
    .data(series)
    .enter().append("path")
    .attr("class", "area")
    .attr("d", area)
    .style("fill", d => color(d.key))
    .style("stroke", "white") // Add thin white line
    .style("stroke-width", "1px"); // Set the stroke width

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

svg.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(y));

// Adding text labels for each area
const labelData = [
    { key: "Underfished", text: "Underfished", x: 100, y: y(30) },
    { key: "FullyFished", text: "Maximally sustainably fished", x: 100, y: y(65) },
    { key: "Overfished", text: "Overfished", x: 100, y: y(85) }
];

svg.selectAll(".area-label")
    .data(labelData)
    .enter().append("text")
    .attr("class", "area-label")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .style("fill", "#fff")
    .style("font-size", "14px")
    .style("font-weight", "bold")
    .text(d => d.text);

// Adding vertical labels for Sustainable and Unsustainable
svg.append("text")
    .attr("class", "vertical-label")
    .attr("x", width + margin.right / 2) // Adjusted position to the right of the graph
    .attr("y", y(35))
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("transform", `rotate(90,${width + margin.right / 2},${y(35)})`)
    .style("fill", "#fff")
    .style("font-size", "14px")
    .text("Sustainable");

svg.append("text")
    .attr("class", "vertical-label")
    .attr("x", width + margin.right / 2) // Adjusted position to the right of the graph
    .attr("y", y(85))
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("transform", `rotate(90,${width + margin.right / 2},${y(85)})`)
    .style("fill", "#fff")
    .style("font-size", "14px")
    .text("Unsustainable");








