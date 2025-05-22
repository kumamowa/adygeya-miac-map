ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.842575,40.190324],
            zoom: 10,
			controls:[]
        }, {
			//minZoom:8,
            searchControlProvider: 'yandex#search'
        });
	
	function checkState () {
        var shownObjects,
            terr = new ymaps.GeoQueryResult(),
			track = new ymaps.GeoQueryResult(),
			main = new ymaps.GeoQueryResult();
			
		main = terr = myObjects.search('geometry.type = "Point"');
			
		 if ($('#track').prop('checked'))
		 {
			track = myObjects.search('geometry.type = "LineString"');
		 }
		 main = main.add(track);
        // Отберем объекты по форме.
        if ($('#ter').prop('checked'))
		{
			terr = myObjects.search('geometry.type = "Polygon"');
		}
		main = main.add(terr);
        
        // Мы отобрали объекты по цвету и по форме. Покажем на карте объекты,
        // которые совмещают нужные признаки.
        shownObjects = main.addToMap(myMap);
        // Объекты, которые не попали в выборку, нужно убрать с карты.
        myObjects.remove(shownObjects).removeFromMap(myMap);
    }
	
	$('#ter').click(checkState);
	$('#track').click(checkState);
    
	myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.871456, 40.076558]
        },
            // Свойства.
        properties: {
		hintContent: 'Гиагинская ЦРБ',
		balloonContentBody: [
            '<strong>Гиагинская ЦРБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения:',
            '<br/>',
			'Прикреплено населения: 31213',
			'<br/>',
			'Количество коек: 104',
			'<br/>',
			'Количество врачей: 56',
			'<br/>',
			'Количество мед.персонала: 202',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Бурмистрова Н.И.',
			'<br/>',
			'9-70-70',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП п.Новый
	myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.931917, 40.177133]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п.Новый',
			balloonContent: 'ФАП п.Новый <br/> Прикреплено населения: 1291'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Садовый
	myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.836667, 40.236389]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Садовый',
			balloonContent: 'ФАП х. Садовый <br/> Прикреплено населения: 196'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Гиагинское поликлиническое отделение 
	myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.873289, 40.065401]
        },
            // Свойства.
        properties: {
			hintContent: 'Гиагинское поликлиническое отделение ',
			balloonContent: 'Гиагинское поликлиническое отделение  <br/> Плановая мощность: 500<br/> Прикреплено населения: 13759'
		}
    }, {
            // Опции.
        preset: 'islands#nightCircleDotIcon',
    });
	
	//ДХ п. Черемушкин
	myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.793611, 40.050278]
        },
            // Свойства.
        properties: {
			hintContent: 'ДХ п. Черемушкин ',
			balloonContent: 'ДХ п. Черемушкин'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ДХ х. Карцев
	myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.748056,40.358611]
        },
            // Свойства.
        properties: {
			hintContent: 'ДХ х. Карцев',
			balloonContent: 'ДХ х. Карцев'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ФАП х.Вольно-Веселый
	myGeoObject7 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.9061,40.26321]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х.Вольно-Веселый',
			balloonContent: 'ФАП х.Вольно-Веселый<br/> Прикреплено населения: 74'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Тамбовский
	myGeoObject8 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.75915,40.367414]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Тамбовский',
			balloonContent: 'ФАП х. Тамбовский<br/> Прикреплено населения: 591'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Нижний Айрюм
	myGeoObject9 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.903056,40.184444]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Нижний Айрюм',
			balloonContent: 'ФАП х. Нижний Айрюм<br/> Прикреплено населения: 278'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Прогресс
	myGeoObject10 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.869757,40.191021]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Прогресс',
			balloonContent: 'ФАП х. Прогресс<br/> Прикреплено населения: 940'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Смолич-Малиновский
	myGeoObject11 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.867521,40.42655]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Смолич-Малиновский',
			balloonContent: 'ФАП х. Смолич-Малиновский<br/> Прикреплено населения: 100'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП ст.Келермесская
	myGeoObject12 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.791706,40.132002]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП ст.Келермесская',
			balloonContent: 'ФАП ст.Келермесская<br/> Прикреплено населения: 2771'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП с. Сергиевское
	myGeoObject13 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.803333,40.346111]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП с. Сергиевское',
			balloonContent: 'ФАП с. Сергиевское<br/> Прикреплено населения: 1344'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Михельсон
	myGeoObject14 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.765595,40.306068]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Михельсон',
			balloonContent: 'ФАП х. Михельсон<br/> Прикреплено населения: 21'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ДХ х. Красный Пахарь
	myGeoObject15 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.738889,40.298611]
        },
            // Свойства.
        properties: {
			hintContent: 'ДХ х. Красный Пахарь',
			balloonContent: 'ДХ х. Красный Пахарь'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//ФАП п.Гончарка
	myGeoObject16 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.806832,39.955043]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п.Гончарка',
			balloonContent: 'ФАП п.Гончарка<br/> Прикреплено населения: 1514'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Дондуковская УБ
	myGeoObject17 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.871475,40.3633]
        },
            // Свойства.
        properties: {
			hintContent: 'Дондуковская УБ',
			balloonContentBody: [
            '<strong>Дондуковская УБ</strong>',
            '<br/>',
            'Численость обслуживаемого населения:',
            '<br/>',
			'Прикреплено населения: 6771',
			'<br/>',
			'Прикреплено населения: 6771',
			'<br/>',
			'Плановая мощность: 100',
			'<br/>',
			'Количество коек: 10',
			'<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Сазонов О.М.',
			'<br/>',
			'9-31-14',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
			'<br/>',
        ].join('')
		}
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП п. Лесной
	myGeoObject18 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.797778,40.186389]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Лесной',
			balloonContent: 'ФАП п. Лесной<br/> Прикреплено населения: 183'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ДХ с. Владимировское
	myGeoObject19 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.7475,40.196111]
        },
            // Свойства.
        properties: {
			hintContent: 'ДХ с. Владимировское',
			balloonContent: 'ДХ с. Владимировское'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });
	
	var gran = new ymaps.GeoObject({
        // Описываем геометрию геообъекта.
        geometry: {
            // Тип геометрии - "Многоугольник".
            type: "Polygon",
            // Указываем координаты вершин многоугольника.
            coordinates: [
				[
										//
					[44.785041,39.993881],
					[44.784308,39.990448],
					[44.800931,39.981521],
					[44.793842,39.957832],
					[44.810464,39.946159],
					[44.811441,39.949249],
					[44.827324,39.939636],
					[44.831478,39.951309],
					[44.822926,39.956116],
					[44.829523,39.987701],
					[44.846622,39.977402],
					[44.840272,39.954056],
					[44.855659,39.952682],
					[44.859322,39.943413],
					[44.865182,39.947189],
					[44.867379,39.940666],
					[44.883491,39.937576],
					[44.891057,39.964699],
					[44.929604,39.941868],
					//end
					[44.936676,39.993538],
					[44.932042,40.000233],
					[44.924360,40.005039],
					[44.928872,40.033192],
					[44.973242,40.021519],
					[44.981284,40.056881],
					[44.935944,40.082287],
					[44.957400,40.158161],
					[44.962762,40.166401],
					[44.967150,40.167602],
					[44.969343,40.171894],
					[44.940455,40.246395],
					[44.931921,40.227856],
					[44.911187,40.227169],
					[44.910943,40.245708],
					[44.915822,40.254635],
					[44.915335,40.296177],
					[44.917164,40.297722],
					[44.911797,40.355400],
					[44.907406,40.362266],
					[44.908364,40.366119],
					[44.903972,40.377105],
					[44.900800,40.416244],
					[44.885669,40.418304],
					[44.882741,40.414184],
					[44.874929,40.422080],
					[44.867117,40.436500],
					[44.856862,40.443366],
					[44.851978,40.438560],
					[44.861257,40.434440],
					[44.848070,40.404228],
					[44.848558,40.399421],
					[44.844651,40.389121],
					[44.838300,40.403541],
					[44.835857,40.389808],
					[44.827551,40.392555],
					[44.827062,40.414527],
					[44.764970,40.466026],
					[44.762035,40.463966],
					[44.762035,40.429633],
					[44.735123,40.429633],
					[44.734633,40.404228],
					[44.730228,40.404914],
					[44.730228,40.387748],
					[44.717990,40.387061],
					[44.716522,40.366462],
					[44.711136,40.367149],
					[44.710157,40.341743],
					[44.730228,40.348609],
					[44.730718,40.251792],
					[44.743216,40.250000],
					[44.745173,40.195755],
					[44.726086,40.199188],
					[44.712378,40.148376],
					[44.720211,40.142196],
					[44.716295,40.124344],
					[44.757895,40.100311],
					[44.753492,40.090011],
					[44.774526,40.077652],
					[44.765722,40.043320],
					[44.769146,40.041260],
					[44.765722,40.028213],
					[44.773548,40.024780],
					[44.777461,40.037140],
					[44.794087,40.026153],
					[44.786264,39.997314],
				]
            ],
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            hintContent: "Гиагинский район"
        }
    }, {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.2,
        // Ширина обводки.
        strokeWidth: 1
    });
	
	var obj = 
	[	
		myGeoObject,
	myGeoObject2,
	myGeoObject3,
	myGeoObject4,
	myGeoObject5,
	myGeoObject6,
	myGeoObject7,
	myGeoObject8,
	myGeoObject9,
	myGeoObject10,
	myGeoObject11,
	myGeoObject12,
	myGeoObject13,
	myGeoObject14,
	myGeoObject15,
	myGeoObject16,
	myGeoObject17,
	myGeoObject18,
	myGeoObject19,
	gran
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
