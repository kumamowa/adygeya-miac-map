ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [45.030626,40.147336],
            zoom: 10,
			controls:[]
        }, {
			minZoom:8,
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
            coordinates: [45.0275,40.222778]
        },
            // Свойства.
        properties: {
		hintContent: 'Шовгеновская центральная районная больница',
		balloonContentBody: [
            '<strong>Шовгеновская центральная районная больница</strong>',
            '<br/>',
            'Прикреплено населения: 14644',
            '<br/>',
			'Плановая мощность: 250',
            '<br/>',
			'Количество коек: 40',
			'<br/>',
			'Количество врачей: 20',
			'<br/>',
			'Количество мед.персонала: 126',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Панов Р.Г.',
			'<br/>',
			'9-21-96',
			'<br/>',
			'Регистратура',
			'<br/>',
			'887773 9-27-65',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//ФАП х. Дукмасов
	myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.005833, 39.918611]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Дукмасов',
			balloonContent: 'ФАП х. Дукмасов<br/>Прикреплено населения: 513'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Кабехабль
	myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.055556, 40.180833]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Кабехабль',
			balloonContent: 'ФАП а. Кабехабль<br/>Прикреплено населения: 1070'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Свободный Труд
	myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.984167, 40.298056]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Свободный Труд',
			balloonContent: 'ФАП х. Свободный Труд<br/>Прикреплено населения: 339'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Веселый
	myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.058056, 40.065833]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Веселый',
			balloonContent: 'ФАП х. Веселый<br/>Прикреплено населения: 276'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Зарево
	myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.997222, 40.080278]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Зарево',
			balloonContent: 'ФАП п. Зарево<br/>Прикреплено населения: 998'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшизов
	myGeoObject7 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.093333, 40.105556]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Пшизов',
			balloonContent: 'ФАП а. Пшизов<br/>Прикреплено населения: 895'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Семено-Макаренский
	myGeoObject8 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.919167, 40.245278]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Семено-Макаренский',
			balloonContent: 'ФАП х. Семено-Макаренский<br/>Прикреплено населения: 96'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Мамацев
	myGeoObject9 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.942778, 39.991389]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Мамацев',
			balloonContent: 'ФАП х. Мамацев<br/>Прикреплено населения: 433'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Тихонов
	myGeoObject10 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.968611, 39.951944]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Тихонов',
			balloonContent: 'ФАП х. Тихонов<br/>Прикреплено населения: 584'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Чернышев
	myGeoObject11 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.049167, 40.036944]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Чернышев',
			balloonContent: 'ФАП х. Чернышев<br/>Прикреплено населения: 785'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Михайлов
	myGeoObject12 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.976667, 40.150556]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Михайлов',
			balloonContent: 'ФАП х. Михайлов<br/>Прикреплено населения: 489'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Мокроназаров
	myGeoObject13 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.984444, 39.955278]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Мокроназаров',
			balloonContent: 'ФАП х. Мокроназаров<br/>Прикреплено населения: 525'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Ульский
	myGeoObject14 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.035556, 40.067778]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Ульский',
			balloonContent: 'ФАП п. Ульский<br/>Прикреплено населения: 137'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Хатажукай
	myGeoObject15 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.070556, 40.183611]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Хатажукай',
			balloonContent: 'ФАП а. Хатажукай<br/>Прикреплено населения: 933'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшичо
	myGeoObject16 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.066944, 40.1775]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Пшичо',
			balloonContent: 'ФАП а. Пшичо<br/>Прикреплено населения: 1083'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Киров
	myGeoObject17 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.0925, 40.264722]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Киров',
			balloonContent: 'ФАП х. Киров<br/>Прикреплено населения: 107'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
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
					[44.929282,39.940025],
					[44.929769,39.922859],
					[45.002401,39.901573],
					[45.001426,39.891273],
					[45.026753,39.883720],
					//end
					[45.026753,39.908439],
					[45.018961,39.905006],
					[45.014091,39.908439],
					[45.017987,39.937965],
					[45.012630,39.940025],
					[45.016039,39.964058],
					[45.012630,39.964744],
					[45.019935,40.015556],
					[45.055475,40.005943],
					[45.058395,40.017616],
					//
					[45.087587,40.008003],
					[45.095856,40.016929],
					[45.092938,40.025512],
					[45.102664,40.041649],
					[45.096829,40.048515],
					[45.100719,40.052635],
					[45.098044,40.067055],
					[45.109472,40.076668],
					[45.108986,40.101387],
					[45.116279,40.122673],
					[45.113119,40.128853],
					[45.121602,40.143320],
					[45.121116,40.154993],
					[45.114310,40.162546],
					[45.121116,40.166323],
					[45.115525,40.173533],
					[45.110906,40.176279],
					[45.116498,40.180056],
					[45.117227,40.190356],
					[45.113824,40.191386],
					[45.112122,40.202029],
					[45.117642,40.226360],
					[45.115697,40.240092],
					[45.113509,40.242839],
					[45.111564,40.242839],
					[45.103784,40.247302],
					[45.097219,40.250049],
					[45.105000,40.270648],
					[45.103784,40.279231],
					[45.087662,40.293775],
					[45.084014,40.293088],
					[45.085230,40.285535],
					[45.082068,40.291372],
					[45.078663,40.284162],
					[45.078663,40.290342],
					[45.067959,40.291029],
					[45.063579,40.296522],
					[45.059930,40.310598],
					[45.061146,40.318494],
					[45.058713,40.324331],
					[45.052386,40.322958],
					[45.057253,40.329824],
					[45.050926,40.337377],
					[45.056280,40.344244],
					[45.053846,40.347677],
					[45.046545,40.338064],
					[45.045085,40.343557],
					[45.045571,40.351797],
					[45.025123,40.320898],
					[45.019279,40.335317],
					[45.006129,40.336004],
					[45.000770,40.351110],
					[44.989077,40.368276],
					[44.977382,40.353857],
					[44.973970,40.358663],
					[44.956421,40.333257],
					[44.967146,40.316778],
					[44.971046,40.314718],
					[44.939355,40.266653],
					[44.915453,40.296178],
					[44.915941,40.253606],
					[44.911550,40.228200],
					[44.939843,40.245367],
					[44.970071,40.171896],
					[44.968121,40.166402],
					[44.959834,40.161596],
					[44.936429,40.081945],
					[44.981281,40.056539],
					[44.972995,40.020147],
					[44.929113,40.031820],
					[44.924722,40.005727],
					[44.937404,39.992681],
					[44.927649,39.923330],
				]
            ],
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            hintContent: "Шовгеновский район"
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
	gran,
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
