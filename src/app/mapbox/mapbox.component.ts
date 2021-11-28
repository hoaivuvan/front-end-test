import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartOptions, ChartType } from 'chart.js';
import * as mapboxgl from 'mapbox-gl';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  constructor() { }

  map!: mapboxgl.Map;
  geolocate!: mapboxgl.GeolocateControl;
  genderChartData: MultiDataSet = [];
  genderChartLabels: Label[] = ["Female", "Male"];
  genderChartOptions: ChartOptions = {
    title: {
      display: true,
      text: "Female/Male"
    },
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      
    }
  };
  agesChartData: MultiDataSet = [];
  agesChartLabels: Label[] = ["20-29", "30-39", "40-49", "50-59", "60-69", "70+"];
  agesChartOptions: ChartOptions = {
    title: {
      display: true,
      text: "Ages"
    },
    responsive: true,
    legend: {
      display: true,
      position: "bottom",
      
    }
  };

  displayChart: boolean = false;

  ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaG9haXZ1dmFuIiwiYSI6ImNrd2dtdGJnOTBxNWkycW5zNTBibG9nNmsifQ.gTs5BS8Ky1n18oWEOz-8XQ';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(e => {
        this.initMap([e.coords.longitude, e.coords.latitude])
      })
    } else {
      this.initMap([-96, 37.8]);
    }
  }

  initMap(lngLat: mapboxgl.LngLatLike) {
    this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-96, 37.8], // starting position
      zoom: 9 // starting zoom
    });

    this.geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserLocation: true,
      showUserHeading: true
    });

    this.map.addControl(this.geolocate);

    this.map.on('load', () => {
      this.geolocate.trigger();
    })

    this.map.on('click', (e: any) => {
      this.setDataForGenderChart();
      this.setDataForAgesChart();
      this.displayChart = true;
      this.geolocate.trigger();
    });
  }

  setDataForGenderChart() {
    this.genderChartData = [];

    var dataSet: number[] = [];
    dataSet.push(Math.round(Math.random() * 100));
    dataSet.push(100 - dataSet[0]);

    this.genderChartData = [dataSet];
  }

  setDataForAgesChart() {
    this.agesChartData = [];

    var dataSet: number[] = [];
    dataSet.push(Math.round(Math.random() * 100));
    dataSet.push(this.randomRangePercentage(1, 100 - dataSet[0]));
    dataSet.push(this.randomRangePercentage(1, 100 - dataSet[0] - dataSet[1]));
    dataSet.push(this.randomRangePercentage(1, 100 - dataSet[0] - dataSet[1] - dataSet[2]));
    dataSet.push(this.randomRangePercentage(1, 100 - dataSet[0] - dataSet[1] - dataSet[2] - dataSet[3]));
    dataSet.push(this.randomRangePercentage(1, 100 - dataSet[0] - dataSet[1] - dataSet[2] - dataSet[3] - dataSet[4]));

    this.agesChartData = [dataSet];
  }

  randomRangePercentage(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
