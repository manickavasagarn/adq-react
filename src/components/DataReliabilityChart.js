import React, { useEffect, useRef, useState } from 'react'
import EChartsReact from 'echarts-for-react';

function DataReliabilityChart() {
    const names = [
        'Orange',
        'Tomato',
        'Apple',
        'Sakana',
        'Banana',
        'Iwashi',
        'Snappy Fish',
        'Lemon',
        'Pasta'
    ];
    const years = ['2001', '2002', '2003', '2004', '2005', '2006'];

    const shuffle = (array) => {
        let currentIndex = array.length;
        let randomIndex = 0;
        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex]
            ];
        }
        return array;
    };

    const generateRankingData = () => {
        const map = new Map();
        const defaultRanking = Array.from({ length: names.length }, (_, i) => i + 1);
        for (const _ of years) {
            const shuffleArray = shuffle(defaultRanking);
            names.forEach((name, i) => {
                var _a;
                map.set(name, [
                    ...((_a = map.get(name)) !== null && _a !== void 0 ? _a : []),
                    shuffleArray[i]
                ]);
            });
        }
        return map;
    };

    const generateSeriesList = () => {
        const seriesList = [];
        const rankingMap = generateRankingData();
        for (const key of Array.from(rankingMap.keys())) {
            const series = {
                name: key,
                symbolSize: 20,
                type: 'line',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                endLabel: {
                    show: true,
                    formatter: '{a}',
                    distance: 20
                },
                lineStyle: {
                    width: 4
                },
                data: rankingMap.get(key)
            };
            seriesList.push(series);
        }
        return seriesList;
    };

    const option = {
        title: {
            text: 'Bump Chart (Ranking)'
        },
        tooltip: {
            trigger: 'item'
        },
        grid: {
            left: 30,
            right: 110,
            bottom: 30,
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        yAxis: {
            type: 'category',
            splitLine: {
                show: true
            },
            axisLabel: {
                margin: 30,
                fontSize: 16
            },
            boundaryGap: false,
            data: years
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                margin: 30,
                fontSize: 16,
                formatter: '#{value}'
            },
            inverse: true,
            interval: 1,
            min: 1,
            max: names.length
        },
        series: generateSeriesList()
    };
    return (
        <div>
            <EChartsReact option={option} style={{ height: '400px' }} />
        </div>
    )
}

export default DataReliabilityChart