// D3Chart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    // D3.js code goes here
    const svg = d3.select(chartRef.current);

    // Example: Creating a simple circle
    svg
      .append('circle')
      .attr('cx', 50)
      .attr('cy', 50)
      .attr('r', 30)
      .style('fill', 'red');
  }, []);

  return (
    <svg ref={chartRef} width="100%" height="100%">
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default D3Chart;
