ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.885836,39.323925],
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
            coordinates: [44.875697, 39.189238]
        },
            // Свойства.
        properties: {
		hintContent: 'Адыгейская межрайонная больница  им. К.М. Батмена',
		balloonContentBody: [
            '<strong>Адыгейская межрайонная больница  им. К.М. Батмена</strong>',
            '<br/>',
            'Численость обслуживаемого населения: 449 171',
            '<br/>',
			'Количество коек: 105',
			'<br/>',
			'Плановая мощность: 300',
			'<br/>',
			'Количество врачей: 96',
			'<br/>',
			'Количество мед.персонала: 271',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Тлехас Ф.М.',
			'<br/>',
			'',
			'<br/>',
			'Регистратура',
			'<br/>',
			'887772 9-14-83',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
		//ФАП а. Ассоколай
	myGeoObject2 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.844717, 39.467581]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Ассоколай',
			balloonContent: 'ФАП а. Ассоколай <br/> Прикреплено населения: 1520'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП с. Красное
	myGeoObject3 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.874203, 39.455229]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП с. Красное',
			balloonContent: 'ФАП с. Красное <br/> Прикреплено населения: 319'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Кунчукохабль
	myGeoObject4 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.981763, 39.475405]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Кунчукохабль',
			balloonContent: 'ФАП а. Кунчукохабль <br/> Прикреплено населения: 543'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Казазов
	myGeoObject5 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.902697, 39.17579]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Казазов',
			balloonContent: 'ФАП х. Казазов <br/> Прикреплено населения: 291'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Городской
	myGeoObject6 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.992919, 39.433068]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Городской',
			balloonContent: 'ФАП х. Городской <br/> Прикреплено населения: 302'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Петров
	myGeoObject7 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.934718, 39.504448]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Казазов',
			balloonContent: 'ФАП х. Казазов <br/> Прикреплено населения: 296'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Гатлукай
	myGeoObject8 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.894444,39.238889]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Гатлукай',
			balloonContent: 'ФАП а. Гатлукай <br/> Прикреплено населения: 1558'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Псекупс
	myGeoObject9 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.831667,39.211111]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Псекупс',
			balloonContent: 'ФАП а. Псекупс <br/> Прикреплено населения: 916'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Джиджихабльская врачебная амбулатория
	myGeoObject10 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.948056,39.403611]
        },
            // Свойства.
        properties: {
			hintContent: 'Джиджихабльская врачебная амбулатория',
			balloonContent: 'Джиджихабльская врачебная амбулатория <br/> Плановая мощность: 916'
		}
    }, {
            // Опции.
        preset: 'islands#blueCircleDotIcon',
    });
	
		//ФАП а. Тугургой
	myGeoObject11 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.9525,39.113056]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Тугургой',
			balloonContent: 'ФАП а. Тугургой <br/> Прикреплено населения: 380'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Тауйхабль
	myGeoObject12 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.964444,39.373889]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Тауйхабль',
			balloonContent: 'ФАП а. Тауйхабль <br/> Прикреплено населения: 212'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пшикуйхабль
	myGeoObject13 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.941944,39.369167]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Пшикуйхабль',
			balloonContent: 'ФАП а. Пшикуйхабль <br/> Прикреплено населения: 279'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Нешукай
	myGeoObject14 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.901944,39.418611]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Нешукай',
			balloonContent: 'ФАП а. Нешукай <br/> Прикреплено населения: 939'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Красный
	myGeoObject15 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.856667,39.163611]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Красный',
			balloonContent: 'ФАП п. Красный <br/> Плановая мощность: 173'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Пчегатлукай
	myGeoObject16 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.885,39.264722]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Пчегатлукай',
			balloonContent: 'ФАП а. Пчегатлукай <br/> Прикреплено населения: 868'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Теучежская больница
	myGeoObject17 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.887283,39.382906]
        },
            // Свойства.
        properties: {
			hintContent: 'Теучежская больница',
			balloonContentBody: [
            '<strong>Теучежская больница</strong>',
            '<br/>',
            'Прикреплено населения: 10456',
            '<br/>',
			'Плановая мощность: 370',
            '<br/>',
			'Количество коек: 33',
			'<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Ачох З.З.',
			'<br/>',
			'9-34-70',
			'<br/>',
			'Регистратура',
			'<br/>',
			'',
        ].join('')
		}
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	//Тлюстенхабльская врачебная амбулатория
	myGeoObject18 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.982222,39.101111]
        },
            // Свойства.
        properties: {
			hintContent: 'Тлюстенхабльская врачебная амбулатория',
			balloonContent: 'Тлюстенхабльская врачебная амбулатория <br/> Прикреплено населения: 6040<br/> Плановая мощность: 50'
		}
    }, {
            // Опции.
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Колос
	myGeoObject19 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.915278,39.390278]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Колос',
			balloonContent: 'ФАП х. Колос <br/> Прикреплено населения: 165'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Начерезий
	myGeoObject20 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.922222,39.383056]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Начерезий',
			balloonContent: 'ФАП а. Начерезий <br/> Прикреплено населения: 335'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП х. Нововочепший
	myGeoObject21 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.904444,39.275278]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Нововочепший',
			balloonContent: 'ФАП х. Нововочепший <br/> Прикреплено населения: 172'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП п. Четук
	myGeoObject22 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.873056,39.152222]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП п. Четук',
			balloonContent: 'ФАП п. Четук <br/> Прикреплено населения: 344'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//ФАП а. Вочепший
	myGeoObject23 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.872778,39.285556]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП а. Вочепший',
			balloonContent: 'ФАП а. Вочепший <br/> Прикреплено населения: 1381'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	//Габукайская врачебная амбулатория
	myGeoObject24 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.929444,39.559444]
        },
            // Свойства.
        properties: {
			hintContent: 'Габукайская врачебная амбулатория',
			balloonContent: 'Габукайская врачебная амбулатория <br/> Прикреплено населения: 2805<br/>Плановая мощность: 96'
		}
    }, {
            // Опции.
        preset: 'islands#blueCircleDotIcon',
    });
	
	//ФАП х. Шевченко
	myGeoObject25 = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [44.899167,39.521944]
        },
            // Свойства.
        properties: {
			hintContent: 'ФАП х. Шевченко',
			balloonContent: 'ФАП х. Шевченко <br/> Прикреплено населения: 671'
		}
    }, {
            // Опции.
        preset: 'islands#darkGreenCircleDotIcon',
    });
	
	var route1 = new ymaps.Polyline([
		[44.873633,39.152296],
		[44.872935,39.152184],
		[44.872235,39.152108],
		[44.871674,39.152012],
		[44.871121,39.151942],
		[44.870144,39.154528],
		[44.869019,39.157537],
		[44.868782,39.158208],
		[44.868153,39.160107],
		[44.868065,39.160788],
		[44.867966,39.164377],
		[44.867916,39.169189],
		[44.868047,39.170520],
		[44.869303,39.175898],
		[44.870043,39.178982],
		[44.871302,39.184236],
		[44.871344,39.184525],
		[44.871321,39.184735],
		[44.871131,39.185014],
		[44.871100,39.185051],
		[44.869990,39.186017],
		[44.869429,39.186591],
		[44.868548,39.187642],
		[44.868335,39.187910],
		[44.868212,39.188146],
		[44.868052,39.188399],
		[44.867976,39.188624],
		[44.868014,39.188844],
		[44.868067,39.188946],
		[44.868148,39.189021],
		[44.868293,39.189064],
		[44.868560,39.189015],
		[44.870183,39.187766],
		[44.870771,39.187316],
		[44.874180,39.184573],
		[44.874733,39.184718],
		[44.875587,39.187710],
		[44.879437,39.186799],
		[44.880471,39.186574],
		[44.881722,39.186268],
		[44.881863,39.186216],
		[44.881920,39.186104],
		[44.881897,39.185814],
		[44.883144,39.185156],
		[44.883323,39.185810],
		[44.884590,39.185494],
		[44.885875,39.185172],
		[44.894818,39.182991],
		[44.895452,39.183071],
		[44.896215,39.183060],
		[44.894436,39.176515],
		[44.894322,39.175888],
		[44.894028,39.174482],
		[44.893967,39.173989],
		[44.893906,39.173356],
		[44.893880,39.171982],
		[44.893891,39.170298],
		[44.894044,39.169499],
		[44.894215,39.168994],
		[44.894475,39.168453],
		[44.894947,39.167814],
		[44.895104,39.167568],
		[44.896495,39.166130],
		[44.897780,39.164736],
		[44.903570,39.158773],
		[44.904409,39.157979],
		[44.906087,39.156686],
		[44.908420,39.154991],
		[44.909906,39.153837],
		[44.911218,39.152807],
		[44.912969,39.151454],
		[44.914166,39.150515],
		[44.915663,39.149348],
		[44.928027,39.139759],
		[44.943354,39.127836],
		[44.943918,39.127390],
		[44.944486,39.126988],
		[44.945024,39.126672],
		[44.945954,39.126184],
		[44.975100,39.112680],
		[44.975710,39.112466],
		[44.976821,39.112337],
		[44.978059,39.112319],
		[44.980267,39.113006],
        ], {
            hintContent: "Маршрут № 171"
        }, {
            strokeColor: "#4979C1",
            strokeWidth: 6,		
			strokeOpacity: 0.4
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
					[44.991620,39.474457],
					[44.986991,39.478577],
					[44.991376,39.484756],
					[44.985042,39.490936],
					[44.975783,39.495056],
					[44.986991,39.519775],
					[44.980169,39.521835],
					[44.969446,39.503983],
					[44.962622,39.535568],
					[44.945557,39.552734],
					[44.943325,39.564804],
					[44.938449,39.561371],
					[44.933571,39.570297],
					[44.939424,39.576477],
					[44.922840,39.578537],
					[44.927230,39.584030],
					[44.903812,39.625915],
					[44.896003,39.630035],
					[44.896491,39.639648],
					[44.887706,39.645141],
					[44.878919,39.635528],
					[44.875013,39.651321],
					[44.870130,39.652008],
					[44.871595,39.643081],
					[44.868666,39.644455],
					[44.851573,39.608749],
					[44.847177,39.607376],
					[44.837406,39.557251],
					[44.829589,39.567550],
					[44.812485,39.566864],
					[44.809063,39.557251],
					[44.820586,39.483383],
					[44.816677,39.477890],
					[44.804946,39.484756],
					[44.812278,39.470337],
					[44.806901,39.459351],
					[44.817654,39.455917],
					[44.812767,39.373520],
					[44.806412,39.372147],
					[44.812278,39.352921],
					[44.817654,39.353607],
					[44.826451,39.303482],
					[44.826451,39.254044],
					[44.822053,39.247864],
					[44.823030,39.239624],
					[44.836711,39.155853],
					[44.834268,39.137314],
					//end
					[44.827917,39.117401],
					[44.843062,39.115341],
					[44.853320,39.101608],
					[44.859181,39.079636],
					[44.873342,39.089249],
					[44.883106,39.096115],
					[44.885547,39.110535],
					[44.873342,39.119461],
					[44.887988,39.120148],
					[44.891892,39.108475],
					[44.908485,39.100235],
					[44.909949,39.120834],
					[44.947995,39.112595],
					[44.950921,39.102982],
					[44.976757,39.097488],
					[44.977732,39.089249],
					[44.972858,39.087189],
					[44.971883,39.079636],
					[44.979681,39.076202],
					[44.988940,39.077576],
					[44.986991,39.084442],
					//
					[44.987966,39.098862],
					[44.998197,39.119461],
					[44.995761,39.124268],
					[44.999172,39.139374],
					[44.994300,39.150360],
					[44.991376,39.180573],
					[45.003088,39.201325],
					[45.002114,39.208878],
					[44.989934,39.221238],
					[45.017214,39.230851],
					[45.015265,39.239091],
					[45.008934,39.234971],
					[45.003575,39.259690],
					[45.030362,39.274796],
					[45.019649,39.272050],
					[45.017214,39.287156],
					[45.029388,39.301576],
					[45.028901,39.311875],
					[45.002601,39.343461],
					[45.003323,39.356646],
					[45.015286,39.367461],
					[44.993365,39.393554],
					[45.013338,39.414840],
					[45.007006,39.416213],
					[44.990312,39.484466],
				]
            ],
        },
        // Описываем свойства геообъекта.
        properties:{
            // Содержимое балуна.
            hintContent: "Теучежский район"
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
	route1,
	gran
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
