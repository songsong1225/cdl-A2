var config = {
    style: 'mapbox://styles/shijiewu/clshluec6006y01qu51mo9lic',
    accessToken: 'pk.eyJ1Ijoic2hpamlld3UiLCJhIjoiY2xzMTdsNGJ4MDhvYjJqcnE1NmUzOGYyeiJ9.WS3qo_7rV_wqBesk-TA-DA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'GARDEN CITY - SINGAPORE',
    subtitle: 'Access to greenery in Singapore',
    byline: 'By Shijie Wu',
    footer: 'Source: Data.gov.sg. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-container',
            alignment: 'left',
            hidden: false,
            title: 'Garden City',
            description: 'Singapore, known as the <strong>Garden City</strong>, is celebrated for its lush greenery and urban beautification. This city-state seamlessly integrates skyscrapers and modern architecture with parks, gardens, and green spaces. <a href="https://www.nlb.gov.sg/main/article-detail?cmsuuid=a7fac49f-9c96-4030-8709-ce160c58d15c"> <strong>Read more</strong></a>',
            image:'image/Singapur.jpg',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'greenspace',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'greenrate',
                    opacity: 0,
                    duration: 0             
                },
                {
                    layer: 'skyrise',
                    opacity: 0,
                    duration: 0               
                }
            ],
            onChapterExit: [
                {
                    layer: 'greenspace',
                    opacity: 1
                },
                {
                    layer: 'greenrate',
                    opacity: 0                
                },
                {
                    layer: 'skyrise',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'second-container',
            alignment: 'left',
            hidden: false,
            title: 'Green Spaces in Sinapore',
            description: 'With four nature reserves, <strong> more than 350 parks</strong> and more than 300 km of Park Connectors found throughout our island, Singapore is a treasure trove of green spaces. ',
            image:'image/park.jpg',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'greenspace',
                    opacity: 1,
                    duration: 3000
                },
                {
                    layer: 'greenrate',
                    opacity: 0,
                    duration: 0             
                },
                {
                    layer: 'skyrise',
                    opacity: 0,
                    duration: 0               
                }
            ],
            onChapterExit: [
                {
                    layer: 'greenspace',
                    opacity: 0
                },
                {
                    layer: 'greenrate',
                    opacity: 0.5               
                },
                {
                    layer: 'skyrise',
                    opacity: 0                
                }
            ],
        },
        {
            id: 'third-container',
            alignment: 'right',
            hidden: false,
            title: 'Greenest Region-North Region',
            description: 'Through the map displaying green space ratios in each planning areas(with darker shades indicating higher ratios), it is evident that North Region has a higher green sapce ratio compared to other regions in Sinagpore.',
            image:'image/mandai.png',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11,
                pitch: 45,
                bearing: 0,
                speed: 2
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'greenspace',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'greenrate',
                    opacity: 0.5,
                    duration: 3000             
                },
                {
                    layer: 'skyrise',
                    opacity: 0,
                    duration: 0              
                }
            ],
            onChapterExit: [
                {
                    layer: 'greenspace',
                    opacity: 0
                },
                {
                    layer: 'greenrate',
                    opacity: 0               
                },
                {
                    layer: 'skyrise',
                    opacity: 0                
                }
            ]
        },
        {
            id: 'fourth-container',
            alignment: 'right',
            hidden: false,
            title: 'Vertical Greenery',
            description: 'Apart from horizontal greening, Singapore also emphasizes vertical greening, planting vegetation <strong>on the walls and rooftops of high-rise buildings</strong>. The heatmap illustrates the clustering of skyrise greenery in Singapore. From the map, it is evident that buildings with skyrise greenery are clustered in the areas <strong>near the city center</strong>. ',
            image:'image/vertical.png',
            location: {
                center: [103.79304, 1.35969],
                zoom: 11.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'greenspace',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'greenrate',
                    opacity: 0,
                    duration: 0             
                },
                {
                    layer: 'skyrise',
                    opacity: 1,
                    duration: 5000          
                }
            ],
            onChapterExit: [
                {
                    layer: 'greenspace',
                    opacity: 0
                },
                {
                    layer: 'greenrate',
                    opacity: 0              
                },
                {
                    layer: 'skyrise',
                    opacity: 1                
                }
            ]
        }
    ]
};