ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.961931,38.916867],
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
            coordinates: [44.927778,38.983611]
        },
            // Свойства.
        properties: {
		hintContent: 'Тахтамукайская ЦРБ',
		balloonContentBody: [
            '<strong>Тахтамукайская ЦРБ</strong>',
            '<br/>',
            'Прикреплено населения: 73762',
            '<br/>',
			'Плановая мощность: 110',
            '<br/>',
			'Количество коек: 70',
			'<br/>',
			'Количество врачей: 42',
			'<br/>',
			'Количество мед.персонала: 100',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Нехай С.Д.',
			'<br/>',
			'9-63-56',
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
	
	//Тахтамукайская поликлиника
	myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.919211,38.986261]
        },
            // Свойства.
        properties: {
		hintContent: 'Тахтамукайская поликлиника',
		balloonContentBody: [
            '<strong>Тахтамукайская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 0',
            '<br/>',
			'Плановая мощность: 0',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Яблоновская поликлиника
	myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.99,38.931667]
        },
            // Свойства.
        properties: {
		hintContent: 'Яблоновская поликлиника',
		balloonContentBody: [
            '<strong>Яблоновская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 32765',
            '<br/>',
			'Плановая мощность: 500',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#nightCircleDotIcon',
    });
	
	//Энемская районная больница
	myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.919444,38.902778]
        },
            // Свойства.
        properties: {
		hintContent: 'Энемская районная больница',
		balloonContentBody: [
            '<strong>Энемская районная больница</strong>',
            '<br/>',
            'Прикреплено населения: 21463',
            '<br/>',
			'Количество коек: 107',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Энемская поликлиника
	myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.924167,38.908333]
        },
            // Свойства.
        properties: {
		hintContent: 'Энемская поликлиника',
		balloonContentBody: [
            '<strong>Энемская поликлиника</strong>',
            '<br/>',
            'Прикреплено населения: 21463',
            '<br/>',
			'Плановая мощность: -',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#nightCircleDotIcon',
    });
	
	//ФАП х. Новый сад
	myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.904444, 38.907778]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Новый сад',
			balloonContent: 'ФАП х. Новый сад<br/>Прикреплено населения: 1309'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Дружный
	myGeoObject7 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.955556, 38.892222]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Дружный',
			balloonContent: 'ФАП п. Дружный<br/>Прикреплено населения: 445'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Панахес
	myGeoObject8 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.986667, 38.718333]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Панахес',
			balloonContent: 'ФАП а. Панахес<br/>Прикреплено населения: 1509'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Хаштук
	myGeoObject9 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.042222, 38.751667]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Хаштук',
			balloonContent: 'ФАП а. Хаштук<br/>Прикреплено населения: 274'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Старобжегокай
	myGeoObject10 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.033611, 38.895556]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Старобжегокай',
			balloonContent: 'ФАП а. Старобжегокай<br/>Прикреплено населения: 2275'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Новая Адыгея
	myGeoObject11 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.024722, 38.936111]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Новая Адыгея',
			balloonContent: 'ФАП а. Новая Адыгея<br/>Прикреплено населения: 2609'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Натухай
	myGeoObject12 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.864722, 38.988333]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Натухай',
			balloonContent: 'ФАП а. Натухай<br/>Прикреплено населения: 328'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п Прикубанский
	myGeoObject13 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.956944, 39.026944]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п Прикубанский',
			balloonContent: 'ФАП п Прикубанский<br/>Прикреплено населения: 1080'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а.Новообжегокай
	myGeoObject14 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.933056, 38.835833]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а.Новообжегокай',
			balloonContent: 'ФАП а.Новообжегокай<br/>Прикреплено населения: 369'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п.Кубаньстрой
	myGeoObject15 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.997222, 38.792222]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п.Кубаньстрой',
			balloonContent: 'ФАП п.Кубаньстрой<br/>Прикреплено населения: 396'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Псейтук
	myGeoObject16 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.051944, 38.708333]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Псейтук',
			balloonContent: 'ФАП а. Псейтук<br/>Прикреплено населения: 614'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Шенджий
	myGeoObject17 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.883611, 39.068889]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Шенджий',
			balloonContent: 'ФАП а. Шенджий<br/>Прикреплено населения: 1934'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х.Суповский
	myGeoObject18 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.904444, 38.946944]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х.Суповский',
			balloonContent: 'ФАП х.Суповский<br/>Прикреплено населения: 553'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Новый
	myGeoObject19 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.008056, 38.981667]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Новый',
			balloonContent: 'ФАП п. Новый<br/>Прикреплено населения: 2003'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Хомуты
	myGeoObject20 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.998889, 38.869167]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Хомуты',
			balloonContent: 'ФАП х. Хомуты<br/>Прикреплено населения: 586'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Отрадный
	myGeoObject21 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.875833, 38.955]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Отрадный',
			balloonContent: 'ФАП п. Отрадный<br/>Прикреплено населения: 677'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Домовое хозяйство х. Старомогилевский
	myGeoObject22 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.831667, 39.114167]
        },
            // Свойства.
        properties: {
			hintContent: 'Домовое хозяйство х. Старомогилевский',
			balloonContent: 'Домовое хозяйство х. Старомогилевский<br/>Прикреплено населения: 42'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });
	
	//Домовое хозяйство п. Супс
	myGeoObject23 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.930162, 38.946127]
        },
            // Свойства.
        properties: {
			hintContent: 'Домовое хозяйство п. Супс',
			balloonContent: 'Домовое хозяйство п. Супс<br/>Прикреплено населения: 72'
		}
    }, {
            // Опции.
        preset: 'islands#yellowCircleDotIcon',
    });

	//Афипсипская врачебная амбулатория
	myGeoObject24 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.001944,38.776667]
        },
            // Свойства.
        properties: {
		hintContent: 'Афипсипская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Афипсипская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 4953',
            '<br/>',
			'Плановая мощность: 27',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#blueCircleDotIcon',
    });
	
	//Козетская врачебная амбулатория
	myGeoObject25 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.9925,39.003611]
        },
            // Свойства.
        properties: {
		hintContent: 'Козетская врачебная амбулатория',
		balloonContentBody: [
            '<strong>Козетская врачебная амбулатория</strong>',
            '<br/>',
            'Прикреплено населения: 1917',
            '<br/>',
			'Плановая мощность: 10',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#blueCircleDotIcon',
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
					[44.827314,39.118036],
					[44.819007,39.092630],
					[44.823894,39.087823],
					[44.841972,39.026025],
					[44.845880,38.990320],
					[44.856625,38.991006],
					[44.861998,38.980707],
					[44.862486,38.960794],
					[44.876646,38.934015],
					[44.895684,38.855051],
					[44.899588,38.861917],
					[44.911299,38.850931],
					[44.932764,38.835825],
					[44.944469,38.814539],
					[44.940080,38.807672],
					[44.953246,38.786386],
					[44.965434,38.788446],
					[44.965434,38.776086],
					[44.960071,38.776086],
					[44.949833,38.752740],
					[44.952271,38.686136],
					[45.039480,38.685449],
					[45.040454,38.688882],
					[45.060486,38.690256],
					[45.066326,38.699182],
					[45.060973,38.714975],
					[45.043938,38.719095],
					[45.041504,38.725275],
					[45.046372,38.736948],
					[45.060973,38.752740],
					[45.055620,38.768533],
					[45.049292,38.767847],
					[45.037609,38.755487],
					[45.029332,38.767847],
					[45.004981,38.785699],
					[44.997187,38.804239],
					[45.000110,38.813165],
					[45.012105,38.817972],
					[45.006260,38.833765],
					[45.008208,38.846811],
					[45.002363,38.861230],
					[45.006747,38.866724],
					[45.025254,38.853677],
					[45.034505,38.859857],
					[45.038887,38.877710],
					[45.051019,38.901484],
					[45.050045,38.908351],
					[45.040797,38.908351],
					[45.028625,38.899424],
					[45.023269,38.900797],
					[45.022660,38.906977],
					[45.035685,38.938906],
					[45.035746,38.951609],
					[45.031364,38.957703],
					[45.026311,38.956975],
					[45.017971,38.947105],
					[44.998731,38.952855],
					[44.993128,38.960838],
					[44.991362,38.967790],
					[44.992093,38.969850],
					[45.002263,38.971395],
					[45.008473,38.974399],
					[45.010483,38.980922],
					[45.010099,38.983619],
					[45.003462,38.997953],
					[45.002853,39.009884],
					[45.004132,39.013660],
					[45.001392,39.018038],
					[44.997373,39.018209],
					[44.994815,39.015720],
					[44.994742,39.015619],
					[44.977200,39.019396],
					[44.970254,39.019053],
					[44.969279,39.027636],
					[44.984509,39.041197],
					//end
					[44.979389,39.076154],
					[44.975835,39.077871],
					[44.975591,39.079416],
					[44.971692,39.080102],
					[44.971022,39.083707],
					[44.972180,39.088686],
					[44.977628,39.089991],
					[44.976653,39.098145],
					[44.957651,39.107660],
					[44.951557,39.104570],
					[44.947656,39.108003],
					[44.948144,39.113153],
					[44.909609,39.120706],
					[44.908877,39.101137],
					[44.895945,39.108003],
					[44.891553,39.108690],
					[44.888868,39.119676],
					[44.883987,39.119676],
					[44.882278,39.113496],
					[44.873490,39.122766],
					[44.870317,39.121050],
					[44.877640,39.115213],
					[44.878861,39.109377],
					[44.884719,39.112123],
					[44.883010,39.097704],
					[44.877152,39.095644],
					[44.859329,39.080194],
					[44.852736,39.102510],
					[44.844676,39.113840],
					[44.827332,39.117273],
				]
            ],
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            hintContent: "Тахтамукайский район"
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
	myGeoObject20,
	myGeoObject21,
	myGeoObject22,
	myGeoObject23,
	myGeoObject24,
	myGeoObject25,
	gran
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
	
}
