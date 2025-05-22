ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.601742, 40.10808],
            zoom: 8,
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
            coordinates: [44.68,39.959722]
        },
            // Свойства.
        properties: {
		hintContent: 'Ханская  участковая  больница',
		balloonContentBody: [
            '<strong>Кошехабльская ЦРБ</strong>',
            '<br/>',
            'Прикреплено населения: 11145',
            '<br/>',
			'Плановая мощность: 150',
            '<br/>',
			'Количество коек: 13',
			'<br/>',
			'Количество врачей: 22',
			'<br/>',
			'Количество мед.персонала: 39',
			'<br/>',
			'График работы:Пн-Пт 8-18 часов',
			'<br/>',
			'Контактные телефоны:',
			'<br/>',
			'Главный врач Нартокова Л.В.',
			'<br/>',
			'56-51-73',
			'<br/>',
			'Регистратура',
			'<br/>',
			'56-64-61',
			'<br/>',
        ].join('')
        }
    }, {
            // Опции.
        preset: 'islands#darkOrangeCircleDotIcon',
    });
	
	var obj = 
	[	
	myGeoObject,
	]
	
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
}
