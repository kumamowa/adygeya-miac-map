ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [45.000278,38.7775],
            zoom: 12,
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
			
		 if ($('#track').prop('checked'))
		 {
			track = myObjects.search('geometry.type = "LineString"');
		 }
		 main = main.add(track);
        // Отберем объекты по форме.
        if ($('#ter').prop('checked'))
		{
			terr = myObjects.search('geometry.type = "Point"');
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
	
	//выделение границ регионов	
	ymaps.regions.load('RU', {
		lang: 'ru',
		quality: 3
	}).then(function (result) {
		var regions = result.geoObjects; // ссылка на коллекцию GeoObjectCollection
		regions.options.set('fillOpacity', '0');
		myMap.geoObjects.add(regions);
	}, function () {
		alert('No response');
	});
    
	myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
        geometry: {
            type: "Point",
            coordinates: [45.000278,38.7775]
        },
            // Свойства.
        properties: {
		hintContent: 'Современный медицинский центр им. Х.М. Совмена - клиника XXI века',
		balloonContentBody: [
            '<strong>Современный медицинский центр им. Х.М. Совмена - клиника XXI века</strong>',
            '<br/>',
            'Прикреплено населения: 356434',
            '<br/>',
			'Плановая мощность: -',
            '<br/>',
			'Количество врачей:',
			'<br/>',
			'Количество мед.персонала:',
			'<br/>',
			'График работы:',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач -',
			'<br/>',
			'',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#redDotIcon',
    });
	
	var obj = 
	[	
	myGeoObject
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
