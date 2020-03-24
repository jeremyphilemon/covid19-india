import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import {legendColor} from 'd3-svg-legend';
import * as topojson from 'topojson';

function ChoroplethMap(props) {
  const [rendered, setRendered] = useState(false);
  const [states, setStates] = useState(props.states);
  const [state, setState] = useState({});
  const [statistic, setStatistic] = useState({});
  const [index, setIndex] = useState(1);
  const choroplethMap = useRef(null);

  useEffect(()=>{
    if (props.states.length>1 && choroplethMap.current) {
      mapData(choroplethMap.current);
      setState(states[1]);
    }
  }, [statistic]);

  useEffect(()=>{
    if (states.length > 1) {
      let total = 0;
      let maxConfirmed = parseInt(states[1].confirmed);
      let minConfirmed = parseInt(states[1].confirmed);
      for (let i=1; i<states.length; i++) {
        total+=parseInt(states[i].confirmed);
        if (parseInt(states[i].confirmed) > parseInt(maxConfirmed)) maxConfirmed = parseInt(states[i].confirmed);
        if (parseInt(states[i].confirmed) < parseInt(minConfirmed)) minConfirmed = parseInt(states[i].confirmed);
      }
      setStatistic({
        total: total,
        maxConfirmed: maxConfirmed,
        minConfirmed: minConfirmed,
      });
    }
  }, [states.length]);

  useEffect(()=>{
    setStates(props.states);
  }, [props.states]);

  const handleMouseover = (name) => {
    states.map((state, index) => {
      if (state.state.toLowerCase()===name.toLowerCase()) {
        setState(state);
        setIndex(index);
      }
    });
  };

  const mapData = (selector) => {
    const svg = d3.select(selector);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const unemployment = d3.map();

    const projection = d3.geoMercator()
        .center([78.9, 19])
        .scale(1000)
        .translate([width/2, height/2]);

    const path = d3.geoPath(projection);

    /* Scaling Function (n>0)*0.05 + n/statistic.maxConfirmed*0.8 */
    function label({i, genLength, generatedLabels, labelDelimiter}) {
      if (i === 0) {
        const n = generatedLabels[i];
        return `Less than ${n}`;
      } else if (i === genLength - 1) {
        const values = generatedLabels[i];
        const n = values[1];
        return `${20} or more`;
      } else {
        const n1 = generatedLabels[i];
        const n2 = generatedLabels[i+1];
        return `${n1} - ${n2}`;
      }
    }

    const color = d3.scaleLinear()
        .domain([0, 20])
        .range(['rgb(255, 245, 240)', 'rgb(171, 16, 23)']);

    svg.append('g')
        .attr('class', 'legendLinear')
        .attr('transform', 'translate(1, 375)');

    const legendLinear = legendColor()
        .shapeWidth(50)
        .cells(6)
        .titleWidth(3)
        .labels(label)
        .title('Percentage Distribution of Total Confirmed Cases')
        .orient('vertical')
        .scale(color);

    svg.select('.legendLinear')
        .call(legendLinear);


    const promises = [
      d3.json('/india.json'),
    ];

    Promise.all(promises).then(ready);

    function ready([india]) {
      states.map((state, index) => {
        unemployment.set(state.state.toLowerCase(), state.confirmed);
      });

      svg.append('g')
          .attr('class', 'states')
          .selectAll('path')
          .data(topojson.feature(india, india.objects.india).features)
          .enter().append('path')
          .attr('fill', function(d) {
            const n = unemployment.get(d.properties.ST_NM.toLowerCase());
            return d3.interpolateReds(d.confirmed = (n>0)*0.05 + n/statistic.maxConfirmed*0.8);
          })
          .attr('d', path)
          .attr('pointer-events', 'all')
          .on('mouseover', (d) => {
            handleMouseover(d.properties.ST_NM);
            d3.select(d3.event.target).attr('fill', '#424242');
          })
          .on('mouseout', (d) => {
            const n = unemployment.get(d.properties.ST_NM.toLowerCase());
            d3.select(d3.event.target).attr('fill', d3.interpolateReds(d.confirmed = (n>0)*0.05 + n/statistic.maxConfirmed*0.8));
          })
          .style('cursor', 'pointer')
          .append('title')
          .text(function(d) {
            return parseFloat(100*(unemployment.get(d.properties.ST_NM.toLowerCase())/statistic.total)).toFixed(2) + '% from ' + toTitleCase(d.properties.ST_NM);
          });

      svg.append('path')
          .attr('stroke', '#ff073a20')
          .attr('fill', 'none')
          .attr('stroke-width', 2)
          .attr('d', path(topojson.mesh(india, india.objects.india)));
    };
  };

  const toTitleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  };

  return (
    <div className="ChoroplethMap fadeInUp" style={{animationDelay: '1.2s'}}>
      <h1 className="header">Map</h1>
      <h6 className="header">Hover over a state for more details</h6>
      <div className="svg-parent">
        <svg id="chart" width="650" height={window.innerWidth <= 479 ? 650: 750} viewBox={`0 0 650 ${window.innerWidth <= 479 ? 650: 750}`} preserveAspectRatio="xMidYMid meet" ref={choroplethMap}></svg>
      </div>

      <div className="map-stats">
        <h4>{state.state}</h4>

        <div className="stats">
          <h5>Confirmed</h5>
          <div className="stats-bottom">
            <h1>{state.confirmed}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-blue">
          <h5>Active</h5>
          <div className="stats-bottom">
            <h1>{state.active}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-green">
          <h5>Recovered</h5>
          <div className="stats-bottom">
            <h1>{state.recovered}</h1>
            <h6>{}</h6>
          </div>
        </div>

        <div className="stats is-gray">
          <h5>Deceased</h5>
          <div className="stats-bottom">
            <h1>{state.deaths}</h1>
            <h6>{}</h6>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ChoroplethMap;
