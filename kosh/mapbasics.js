ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map('map', {
            center: [44.737633, 40.529658],
            zoom: 10,
			controls:[]
        }, {
			minZoom:9,
            searchControlProvider: 'yandex#search'
        });

ymaps.regions.load('RU', {
	lang: 'ru',
	quality: 3
}).then(function (result) {
	var regions = result.geoObjects; // ссылка на коллекцию GeoObjectCollection
	regions.each(function(region) {
		if (region.properties.get('name') === 'Адыгея') {
			region.options.set({
				fillColor: '#ff0000',
				fillOpacity: 0,
				strokeColor: '#000000',
				strokeWidth: 0.1
			});
		} else {
			region.options.set('visible', false); // скрыть другие регионы
		}
	});
	myMap.geoObjects.add(regions);
}, function () {
	alert('No response');
});
		function checkState () {
        var shownObjects,
		main = myObjects.search('geometry.type = "123"');
        if ($('#neotlozh').prop('checked'))
		{
			fap = myObjects.search('geometry.type = "Point"');
			main = main.add(neotl).add(shovg_neotl1).add(giagneotl1).add(shovg_neotl2).add(shovg_neotl3).add(shovg_neotl4).add(shovg_neotl5).add(shovg_neotl6).add(shovg_neotl7).add(mkpr_neotl1).add(mkpr_neotl2).add(mkpr_neotl3).add(mkpr_neotl4).add(mkpr_neotl5).add(mkpr_neotl6).add(mkpr_neotl7).add(krasnneotl1);
		}

  //       if ($('#ter').prop('checked'))
		// {
		// 	terr = myObjects.search('geometry.type = "Polygon"');
		// 	main = main.add(gran_egeruhay_sel).add(gran_dmitr_sel).add(gran_kosh_sel).add(gran_ignat_sel).add(gran_blech_sel).add(gran_may_sel).add(gran_nat_sel).add(gran_voln_sel).add(gran_hodz_sel);
		// }

        if ($('#grans').prop('checked'))
		{
			grans = myObjects.search('geometry.type = "Point"');
			main = main.add(gran_mkp).add(gran_krasncrb1).add(gran_egeruhay).add(gran_polit).add(gran_chatchemsiy).add(gran_krasnfars).add(gran_komsomol).add(gran_ignat).add(gran_blech).add(gran_may).add(gran_krasn).add(gran_nat).add(gran_kazen).add(gran_voln).add(gran_karmolin).add(gran_shelk).add(gran_hodz).add(gran_drujba).add(gran_kosh).add(gran_giagpol1).add(gran_giagcrb1).add(gran_giagfap1).add(gran_giagfap2).add(gran_giagfap3).add(gran_giagfap4).add(gran_giagfap5).add(gran_giagfap6).add(gran_giagfap7).add(gran_giagfap8).add(gran_giagfap9).add(gran_giagfap10).add(gran_giagfap11).add(gran_shovgmamh1).add(gran_shovgcrb1).add(gran_shovgfap1).add(gran_shovgfap2).add(gran_shovgfap3).add(gran_shovgfap4).add(gran_shovgfap5).add(gran_shovgfap6).add(gran_shovgfap7).add(gran_shovgfap8).add(gran_shovgfap9).add(gran_shovgfap10).add(gran_shovgfap11).add(gran_shovgfap12).add(gran_shovgfap13).add(gran_shovgfap14).add(gran_shovgfap15).add(gran_shovgfap16).add(gran_mkprcrb1);
		}

        if ($('#fap').prop('checked'))
		{
			fap = myObjects.search('geometry.type = "Point"');
			main = main.add(fap1).add(fap2).add(fap3).add(fap4).add(fap5).add(fap6).add(fap7).add(fap8).add(fap9).add(fap10).add(giagfap1).add(giagfap2).add(giagfap3).add(giagfap4).add(giagfap5).add(giagfap6).add(giagfap7).add(giagfap8).add(giagfap9).add(giagfap10).add(giagfap11).add(shovgfap1).add(shovgfap2).add(shovgfap3).add(shovgfap4).add(shovgfap5).add(shovgfap6).add(shovgfap7).add(shovgfap8).add(shovgfap9).add(shovgfap10).add(shovgfap11).add(shovgfap12).add(shovgfap13).add(shovgfap14).add(shovgfap15).add(shovgfap16).add(mkprfap1).add(mkprfap2).add(mkprfap3).add(mkprfap4).add(mkprfap5).add(mkprfap6).add(mkprfap7).add(mkprfap8).add(mkprfap9).add(mkprfap10).add(mkprfap11).add(mkprfap12).add(mkprfap13).add(mkprfap14).add(mkprfap15).add(mkprfap16).add(mkprfap17).add(mkprfap18).add(mkprfap19).add(mkprfap20).add(mkprfap21).add(mkprfap22).add(mkprfap23).add(mkprfap24).add(mkprfap25).add(mkprfap26).add(mkprfap27).add(mkprfap28).add(mkprfap29).add(mkprfap30).add(krasnfap1).add(krasnfap2).add(krasnfap3).add(krasnfap4).add(krasnfap5).add(krasnfap6).add(krasnfap7).add(krasnfap8).add(krasnfap9).add(krasnfap10);
		}

        if ($('#amb').prop('checked'))
		{
			amb = myObjects.search('geometry.type = "Point"');
			main = main.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6).add(giagcrb1).add(giagpol1).add(shovgcrb1).add(mkprcrb1).add(mkpramb1).add(mkpramb2).add(mkpramb3).add(mkpramb4).add(mkpramb5).add(mkprpol1).add(mkprpol2).add(krasnamb1).add(krasnamb2).add(krasnamb3).add(krasnamb4).add(krasnamb5).add(krasnamb6).add(krasncrb1);
		}
        shownObjects = main.addToMap(myMap);
        myObjects.remove(shownObjects).removeFromMap(myMap);
    }
    $('#neotlozh').click(checkState);
	$('#ter').click(checkState);
	$('#grans').click(checkState);
    $('#fap').click(checkState);
    $('#amb').click(checkState);


	var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark_layout_container"><div class="circle_layout">A</div></div>');

	mkprfap1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.468751, 40.169048]
        },
        properties: {
		hintContent: 'ФАП п. Тимирязева<br/>Майкопский район, п. Тимирязева,  ул. Садовая, 13',
		balloonContentBody: [
            '<strong>ФАП п. Тимирязева',
			'<br/>',
			'Майкопский район, п. Тимирязева,  ул. Садовая, 13</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.490862, 40.144255]
        },
        properties: {
		hintContent: 'ФАП п.Цветочный<br/>Майкопский район, п. Цветочный,  ул. Буденного, 13',
		balloonContentBody: [
            '<strong>ФАП п.Цветочный',
			'<br/>',
			'Майкопский район, п. Цветочный,  ул. Буденного, 13</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.458973, 40.179298]
        },
        properties: {
		hintContent: 'ФАП п.Подгорный<br/>Майкопский район, п. Подгорный,  ул. Научная, 2',
		balloonContentBody: [
            '<strong>ФАП п.Подгорный',
			'<br/>',
			'Майкопский район, п. Подгорный,  ул. Научная, 2</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.290796,40.313578]
        },
        properties: {
		hintContent: 'ФАП п.Победа<br/>Майкопский район, п. Победа,  ул. Дружбы, 7',
		balloonContentBody: [
            '<strong>ФАП п.Победа',
			'<br/>',
			'Майкопский район, п. Победа,  ул. Дружбы, 7</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.138456,40.287967]
        },
        properties: {
		hintContent: 'ФАП с.Новопрохладное<br/>Майкопский район, ст.  Новопрохладное, ул. Нагорная, 13',
		balloonContentBody: [
            '<strong>ФАП с.Новопрохладное',
			'<br/>',
			'Майкопский район, ст.  Новопрохладное, ул. Нагорная, 13</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.21055,40.280368]
        },
        properties: {
		hintContent: 'ФАП п.Усть-Сахрай<br/>Майкопский район, п. Усть-Сахрай, ул. Советская, 19',
		balloonContentBody: [
            '<strong>ФАП п.Усть-Сахрай',
			'<br/>',
			'Майкопский район, п. Усть-Сахрай, ул. Советская, 19</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.230157,40.204083]
        },
        properties: {
		hintContent: 'ФАП ст.Даховская<br/>Майкопский район,  ст. Даховская,  ул. Ленина, 18',
		balloonContentBody: [
            '<strong>ФАП ст.Даховская',
			'<br/>',
			'Майкопский район,  ст. Даховская,  ул. Ленина, 18</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [43.996337,40.133906]
        },
        properties: {
		hintContent: 'ФАП п.Гузерипль<br/>Майкопский район, п. Гузерипль',
		balloonContentBody: [
            '<strong>ФАП п.Гузерипль',
			'<br/>',
			'Майкопский район, п. Гузерипль</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.096708,40.130196]
        },
        properties: {
		hintContent: 'ФАП с.Хамышки<br/>Майкопский район, с. Хамышки,  ул. Советская, 11Б',
		balloonContentBody: [
            '<strong>ФАП с.Хамышки',
			'<br/>',
			'Майкопский район, с. Хамышки,  ул. Советская, 11Б</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.661647,40.379955]
        },
        properties: {
		hintContent: 'ФАП п.Трехречный<br/>Майкопский район, п. Трехречный,  ул. Центральная, 1',
		balloonContentBody: [
            '<strong>ФАП п.Трехречный',
			'<br/>',
			'Майкопский район, п. Трехречный,  ул. Центральная, 1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap11 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.351262,40.313578]
        },
        properties: {
		hintContent: 'ФАП ст.Севастопольская<br/>Майкопский район,  ст. Севастопольская,  ул. Школьная, 25Б',
		balloonContentBody: [
            '<strong>ФАП ст.Севастопольская',
			'<br/>',
			'Майкопский район,  ст. Севастопольская,  ул. Школьная, 25Б</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap12 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.351075,40.412159]
        },
        properties: {
		hintContent: 'ФАП ст.Новосвободная<br/>Майкопский район,  ст. Новосвободная,  ул. Калинина, 1',
		balloonContentBody: [
            '<strong>ФАП ст.Новосвободная',
			'<br/>',
			'Майкопский район,  ст. Новосвободная,  ул. Калинина, 1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap13 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.412039,40.177771]
        },
        properties: {
		hintContent: 'ФАП п.Первомайский<br/>Майкопский район, п. Первомайский, п. Северный 1',
		balloonContentBody: [
            '<strong>ФАП п.Первомайский',
			'<br/>',
			'Майкопский район, п. Первомайский, п. Северный 1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap14 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.558732,40.088308]
        },
        properties: {
		hintContent: 'ФАП п.Табачный<br/>Майкопский район, п.Табачный,  ул. Шоссеная 51',
		balloonContentBody: [
            '<strong>ФАП п.Табачный',
			'<br/>',
			'Майкопский район, п.Табачный,  ул. Шоссеная 51</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap15 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.551307,40.107056]
        },
        properties: {
		hintContent: 'ФАП х. Садовый<br/>Майкопский район, х. Садовый,  ул. Садовая, 22А',
		balloonContentBody: [
            '<strong>ФАП х. Садовый',
			'<br/>',
			'Майкопский район, х. Садовый,  ул. Садовая, 22А</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap16 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.456747,40.04738]
        },
        properties: {
		hintContent: 'ФАП ст.Курджипская<br/>Майкопский район,  ст. Курджипская, ул. Первомайская, 86А',
		balloonContentBody: [
            '<strong>ФАП ст.Курджипская',
			'<br/>',
			'Майкопский район,  ст. Курджипская, ул. Первомайская, 86А</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap17 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.36959,40.016056]
        },
        properties: {
		hintContent: 'ФАП ст.Дагестанская<br/>Майкопский район,  ст. Дагестанская,  ул. Почтовая, 4А',
		balloonContentBody: [
            '<strong>ФАП ст.Дагестанская',
			'<br/>',
			'Майкопский район,  ст. Дагестанская,  ул. Почтовая, 4А</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap18 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.376498,39.916918]
        },
        properties: {
		hintContent: 'ФАП ст.Безводная<br/>Майкопский район,  ст. Безводная,  ул. Красных Командиров, 36А',
		balloonContentBody: [
            '<strong>ФАП ст.Безводная',
			'<br/>',
			'Майкопский район,  ст. Безводная,  ул. Красных Командиров, 36А</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap19 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.619125,40.176459]
        },
        properties: {
		hintContent: 'ФАП х.Пролетарский<br/>Майкопский район, х. Пролетарский,  ул. Комсомольская, 43А',
		balloonContentBody: [
            '<strong>ФАП х.Пролетарский',
			'<br/>',
			'Майкопский район, х. Пролетарский,  ул. Комсомольская, 43А</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap20 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.667731,40.093769]
        },
        properties: {
		hintContent: 'ФАП х.Советский<br/>Майкопский район, х. Советский, ул.  Западная, 4',
		balloonContentBody: [
            '<strong>ФАП х.Советский',
			'<br/>',
			'Майкопский район, х. Советский, ул.  Западная, 4</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap21 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.635201,40.183493]
        },
        properties: {
		hintContent: 'ФАП а.Мафэхабль<br/>Майкопский район, а.Мафэхабль, ул. Российская, 2Б',
		balloonContentBody: [
            '<strong>ФАП а.Мафэхабль',
			'<br/>',
			'Майкопский район, а.Мафэхабль, ул. Российская, 2Б</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap22 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.692445,40.146734]
        },
        properties: {
		hintContent: 'ФАП х.Гражданский<br/>Майкопский район, х. Гражданский,  ул. Красная, 149',
		balloonContentBody: [
            '<strong>ФАП х.Гражданский',
			'<br/>',
			'Майкопский район, х. Гражданский,  ул. Красная, 149</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap23 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.699307,40.13219]
        },
        properties: {
		hintContent: 'ФАП х.Калинин<br/>Майкопский район, х. Калинин, ул.  Газовая, 11',
		balloonContentBody: [
            '<strong>ФАП х.Калинин',
			'<br/>',
			'Майкопский район, х. Калинин, ул.  Газовая, 11</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap24 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.722842,40.200543]
        },
        properties: {
		hintContent: 'ФАП х.Ткачев<br/>Майкопский район, х. Ткачев,  ул. Речная, 23',
		balloonContentBody: [
            '<strong>ФАП х.Ткачев',
			'<br/>',
			'Майкопский район, х. Ткачев,  ул. Речная, 23</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap25 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.695822,40.177214]
        },
        properties: {
		hintContent: 'ФАП х.Красная Улька<br/>Майкопский район, х. Красная Улька,  ул. Новая,17 ',
		balloonContentBody: [
            '<strong>ФАП х.Красная Улька',
			'<br/>',
			'Майкопский район, х. Красная Улька,  ул. Новая,17 </strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap26 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.558533,40.133062]
        },
        properties: {
		hintContent: 'ФАП х.Грозный<br/>Майкопский район, х. Грозный (Побединское с/п), ул. Мостовая,1',
		balloonContentBody: [
            '<strong>ФАП х.Грозный',
			'<br/>',
			'Майкопский район, х. Грозный (Побединское с/п), ул. Мостовая,1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap27 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.527709,40.142674]
        },
        properties: {
		hintContent: 'ФАП х.Причтовский<br/>Майкопский район, х. Причтовский,  ул. Ленина, 52',
		balloonContentBody: [
            '<strong>ФАП х.Причтовский',
			'<br/>',
			'Майкопский район, х. Причтовский,  ул. Ленина, 52</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap28 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.551994,40.159661]
        },
        properties: {
		hintContent: 'ФАП п.Удобный<br/>Майкопский район, п. Удобный,  ул. Ленина, 13',
		balloonContentBody: [
            '<strong>ФАП п.Удобный',
			'<br/>',
			'Майкопский район, п. Удобный,  ул. Ленина, 13</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap29 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.542461,40.150839]
        },
        properties: {
		hintContent: 'ФАП п.Совхозный<br/>Майкопский район, п. Совхозный,  ул. Пушкина, 13/1',
		balloonContentBody: [
            '<strong>ФАП п.Совхозный',
			'<br/>',
			'Майкопский район, п. Совхозный,  ул. Пушкина, 13/1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	mkprfap30 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.389911, 40.198625]
        },
        properties: {
		hintContent: 'ФАП х.Шевченко<br/>Майкопский район, х. Шевченко,  ул. Полевая, 1',
		balloonContentBody: [
            '<strong>ФАП х.Шевченко',
			'<br/>',
			'Майкопский район, х. Шевченко,  ул. Полевая, 1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });










	mkprcrb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.530472,40.176756]
        },
        properties: {
		hintContent: 'Тульская ЦРБ<br/>Майкопский район, п. Тульский,  ул. Танюкова, 14 ',
		balloonContentBody: [
            '<strong>Тульская ЦРБ',
			'<br/>',
			'Майкопский район, п. Тульский,  ул. Танюкова, 14 </strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#nightHomeCircleIcon',
    });






	mkprpol1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.310148, 40.195990]
        },
        properties: {
		hintContent: 'Каменномостская поликлиника<br/>улица Гагарина, 32В',
		balloonContentBody: [
            '<strong>Каменномостская поликлиника',
			'<br/>',
			'улица Гагарина, 32В</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkprpol2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.509561, 40.179435]
        },
        properties: {
		hintContent: 'Тульская поликлиника<br/>улица Комсомольская, 14',
		balloonContentBody: [
            '<strong>Тульская поликлиника',
			'<br/>',
			'улица Комсомольская, 14</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });













	mkpramb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.674084,40.303769]
        },
        properties: {
		hintContent: 'Кужорская амбулатория<br/>Майкопский район, ст.Кужорская,  ул. Школьная, 31',
		balloonContentBody: [
            '<strong>НАЗВАНИЕ',
			'<br/>',
			'Майкопский район, ст.Кужорская,  ул. Школьная, 31</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkpramb2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.389569,40.21806]
        },
        properties: {
		hintContent: 'Абадзехская амбулатория<br/>Майкопский район, ст. Абадзехская,  ул. Винника, 58 ',
		balloonContentBody: [
            '<strong>Абадзехская амбулатория',
			'<br/>',
			'Майкопский район, ст. Абадзехская,  ул. Винника, 58 </strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkpramb3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.577111,40.071563]
        },
        properties: {
		hintContent: 'Краснооктябрьская амбулатория<br/>Майкопский район, п.Краснооктябрьский,  ул. Шоссейная, 91',
		balloonContentBody: [
            '<strong>Краснооктябрьская амбулатория',
			'<br/>',
			'Майкопский район, п.Краснооктябрьский,  ул. Шоссейная, 91</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkpramb4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.637825,40.135829]
        },
        properties: {
		hintContent: 'Амбулатория х.Северо-Восточные Сады<br/>Майкопский район, х. Северо-Восточные Сады,  ул. Суворова, 7',
		balloonContentBody: [
            '<strong>Амбулатория х.Северо-Восточные Сады',
			'<br/>',
			'Майкопский район, х. Северо-Восточные Сады,  ул. Суворова, 7</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkpramb5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.561269,40.142566]
        },
        properties: {
		hintContent: 'Побединская амбулатория<br/>Майкопский район, п. Победа,  ул. Шоссейная, 105',
		balloonContentBody: [
            '<strong>Побединская амбулатория',
			'<br/>',
			'Майкопский район, п. Победа,  ул. Шоссейная, 105</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	mkpr_neotl1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.674084,40.303719]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Кужорская амбулатория)<br/>Майкопский район, ст.Кужорская,  ул. Школьная, 31',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Кужорская амбулатория)',
			'<br/>',
			'Майкопский район, ст.Кужорская,  ул. Школьная, 31</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.637825,40.1358]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Амбулатория Северо-Восточные Сады)<br/>Майкопский район, х. Северо-Восточные Сады,  ул. Суворова, 7',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Амбулатория Северо-Восточные Сады)',
			'<br/>',
			'Майкопский район, х. Северо-Восточные Сады,  ул. Суворова, 7</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.561269,40.142516]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Побединская амбулатория)<br/>Майкопский район, п. Победа,  ул. Шоссейная, 105',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Побединская амбулатория)',
			'<br/>',
			'Майкопский район, п. Победа,  ул. Шоссейная, 105</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.530472,40.176706]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Тульская ЦРБ)<br/>Майкопский район, п. Тульский,  ул. Танюкова, 14 ',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Тульская ЦРБ)',
			'<br/>',
			'Майкопский район, п. Тульский,  ул. Танюкова, 14 </strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.509561, 40.1794]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Тульская поликлиника)<br/>улица Комсомольская, 14',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Тульская поликлиника)',
			'<br/>',
			'улица Комсомольская, 14</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.389569,40.21801]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Абадзехская амбулатория)<br/>Майкопский район, ст. Абадзехская,  ул. Винника, 58 ',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Абадзехская амбулатория)',
			'<br/>',
			'Майкопский район, ст. Абадзехская,  ул. Винника, 58 </strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	mkpr_neotl7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.310148, 40.195940]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Каменномостская поликлиника)<br/>улица Гагарина, 32В',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Каменномостская поликлиника)',
			'<br/>',
			'улица Гагарина, 32В</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });








		var gran_mkprcrb1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.148765999999995,39.76181],[44.163508,39.764541],[44.169806,39.776292999999995],[44.176798999999995,39.769028999999996],[44.180324,39.768524],[44.180515,39.822887],[44.184318999999995,39.864895],[44.168042,39.877223],[44.163211,39.875628],[44.158625,39.880324],[44.148073,39.878028],[44.142374,39.885675],[44.124877999999995,39.895373],[44.117017999999995,39.920972],[44.111506999999996,39.929812999999996],[44.105168,39.935134],[44.099463,39.950154999999995],[44.102244999999996,39.963052],[44.104673,39.964662],[44.098039,39.970648],[44.095394999999996,39.970627],[44.091158,39.965219999999995],[44.088094999999996,39.967194],[44.085063999999996,39.972750999999995],[44.084444999999995,39.978888],[44.081970999999996,39.981334],[44.079094,39.980067999999996],[44.075938,39.989467],[44.081911,40.007127],[44.085082,40.010087999999996],[44.084602,40.014015],[44.094114,40.019337],[44.095845999999995,40.016933],[44.106421999999995,40.016096],[44.115280999999996,40.030601999999995],[44.125067,40.038996999999995],[44.136511,40.054629],[44.137530999999996,40.056945999999996],[44.129211999999995,40.062523],[44.122079,40.074432],[44.122071,40.07763],[44.125433,40.078799],[44.126422,40.085215],[44.123694,40.085505],[44.126044,40.091277],[44.132199,40.092841],[44.134997,40.086822999999995],[44.139168999999995,40.087241],[44.138717,40.08048],[44.14076,40.080341],[44.145621999999996,40.068819999999995],[44.154575,40.076547],[44.160951999999995,40.070526],[44.163292999999996,40.072936],[44.16972,40.072399],[44.174717,40.077954999999996],[44.178674,40.087621],[44.193335999999995,40.079164999999996],[44.196059999999996,40.080515999999996],[44.197472999999995,40.078976],[44.194835,40.078188999999995],[44.198676,40.075841],[44.221888,40.077207],[44.224878,40.067792],[44.22963,40.072156],[44.233309,40.071872],[44.251577,40.089554],[44.254095,40.077751],[44.261818,40.068233],[44.266920999999996,40.065306],[44.268682999999996,40.061173],[44.269825999999995,40.04342],[44.267643,40.032627999999995],[44.267069,40.010315],[44.261289999999995,39.989776],[44.273984999999996,39.977969],[44.274899,39.974323],[44.291197,39.974748],[44.293442,39.968408],[44.306452,39.966145999999995],[44.339434999999995,39.975072],[44.344876,39.966538],[44.348088,39.957826999999995],[44.348338999999996,39.946394],[44.340821,39.940534],[44.337402999999995,39.922112],[44.350981999999995,39.907516],[44.351728,39.896454],[44.347111999999996,39.879123],[44.338214,39.869958],[44.35338,39.844311],[44.396522,39.878963],[44.407121,39.863059],[44.414049999999996,39.862617],[44.432212,39.868521],[44.434112999999996,39.879615],[44.445420999999996,39.88075],[44.55504,39.884777],[44.555614999999996,39.872305],[44.591407,39.874041999999996],[44.591153999999996,39.883159],[44.589825999999995,39.883697999999995],[44.590489,39.929193999999995],[44.602871,39.932787],[44.609609999999996,39.926079],[44.615162999999995,39.935352],[44.607412,39.940238],[44.606789,39.944646999999996],[44.608964,39.948665999999996],[44.590286,39.981952],[44.598389,39.991662],[44.618263999999996,40.003208],[44.609992999999996,40.013348],[44.605962999999996,40.022701],[44.604976,40.026849999999996],[44.606539999999995,40.03365],[44.604707999999995,40.040772],[44.586807,40.052223999999995],[44.585172,40.068954999999995],[44.580236,40.074749],[44.582003,40.085071],[44.578889,40.097809],[44.570842,40.106759],[44.572897,40.116651],[44.575581,40.1162],[44.57588,40.118097999999996],[44.568405,40.123526999999996],[44.564411,40.123602],[44.565106,40.133694],[44.562979999999996,40.136288],[44.566461,40.13935],[44.56446,40.143553],[44.560131,40.146187999999995],[44.561824,40.153774],[44.563077,40.153725],[44.564304,40.164511999999995],[44.567333,40.168085999999995],[44.578975,40.149483],[44.606107,40.167640999999996],[44.610313999999995,40.156107],[44.615646,40.161027],[44.614031,40.141096999999995],[44.623695999999995,40.138807],[44.63053,40.1355],[44.629895999999995,40.133674],[44.646383,40.129874],[44.663092999999996,40.114360999999995],[44.673066,40.128699999999995],[44.695229,40.134809],[44.692397,40.123802999999995],[44.690296,40.125009999999996],[44.687097,40.116651999999995],[44.675453999999995,40.124098],[44.67158,40.120525],[44.672719,40.10615],[44.656492,40.089003],[44.666894,40.077877],[44.662966,40.072706],[44.678999,40.050416999999996],[44.68253,40.056076],[44.683994,40.054051],[44.687199,40.059912],[44.694328,40.05164],[44.702233,40.062514],[44.692032,40.076601],[44.683761999999994,40.065196],[44.677264,40.074219],[44.687200999999995,40.091221],[44.693988999999995,40.084931999999995],[44.703624,40.117515],[44.712132,40.112859],[44.7204,40.142268],[44.712284,40.147442],[44.726276999999996,40.197537],[44.731314999999995,40.200629],[44.744530999999995,40.195751],[44.744653,40.242219999999996],[44.746722999999996,40.253447],[44.726941,40.253268999999996],[44.726486,40.34579],[44.724072,40.345597],[44.722809999999996,40.348194],[44.721109999999996,40.346106999999996],[44.720608,40.348616],[44.717909,40.347214],[44.717081,40.343855],[44.714585,40.346967],[44.710598999999995,40.341781],[44.708701999999995,40.343685],[44.708497,40.366538999999996],[44.705377999999996,40.371947999999996],[44.702923999999996,40.372417],[44.701367,40.368359],[44.701266,40.370297],[44.6995,40.369597999999996],[44.700416999999995,40.367939],[44.696625,40.364656],[44.697883999999995,40.370852],[44.692243999999995,40.368314],[44.693062999999995,40.365949],[44.688610999999995,40.366505],[44.686561,40.370343999999996],[44.68795,40.373219999999996],[44.684425999999995,40.376906999999996],[44.680955,40.376346],[44.680454999999995,40.384451],[44.676212,40.382453],[44.678160999999996,40.388543999999996],[44.672533,40.390057],[44.671121,40.392534],[44.673541,40.39662],[44.675294,40.393285999999996],[44.676086,40.397738],[44.673051,40.401407],[44.673513,40.403983],[44.67111,40.404876],[44.668673999999996,40.400656],[44.667214,40.40171],[44.661314999999995,40.397572],[44.658873,40.398939],[44.659510999999995,40.40148],[44.654858999999995,40.401615],[44.653976,40.396401],[44.649795,40.395873],[44.647365,40.386354999999995],[44.642713,40.387406999999996],[44.635145,40.377041],[44.649364,40.350732],[44.645195,40.342326],[44.627536,40.339788999999996],[44.622402,40.343641999999996],[44.620335999999995,40.342863],[44.618356,40.348563],[44.614647,40.348482],[44.613616,40.351416],[44.60946,40.352793999999996],[44.603178,40.348453],[44.597362,40.354681],[44.579871999999995,40.341409],[44.572565999999995,40.340196],[44.573386,40.336326],[44.567564999999995,40.336434],[44.567521,40.34142],[44.557874999999996,40.342149],[44.557925,40.349655999999996],[44.547861999999995,40.349419],[44.548731,40.387442],[44.532277,40.396905],[44.535058,40.404618],[44.534569,40.414905],[44.532019,40.410934],[44.527414,40.410491],[44.523191,40.419461],[44.520500999999996,40.416875999999995],[44.51963,40.418721999999995],[44.51507,40.41786],[44.513282,40.424147],[44.512287,40.419866],[44.510653,40.420449999999995],[44.512083,40.41749],[44.509135,40.417401999999996],[44.508641999999995,40.415290999999996],[44.510489,40.414100999999995],[44.509184999999995,40.412104],[44.505651,40.41249],[44.505675,40.406603],[44.503153,40.410224],[44.499542,40.402653],[44.496111,40.400845],[44.494896,40.402885999999995],[44.492112,40.397220999999995],[44.48757,40.398195],[44.487701,40.393195999999996],[44.48497,40.393043999999996],[44.485552,40.390518],[44.482307,40.383798],[44.481038999999996,40.386103999999996],[44.479444,40.383569],[44.476600999999995,40.383818999999995],[44.478055999999995,40.385639],[44.476945,40.391258],[44.471678,40.388323],[44.471252,40.392691],[44.46734,40.393642],[44.466895,40.396178],[44.460640999999995,40.39693],[44.461917,40.398074],[44.460359,40.400256999999996],[44.458811,40.396924],[44.458652,40.40031],[44.455498,40.400866],[44.455967,40.404489],[44.453406,40.403197999999996],[44.451975,40.408545],[44.446842,40.409586],[44.443897,40.403814],[44.438410999999995,40.411282],[44.437951999999996,40.40891],[44.435204999999996,40.408629999999995],[44.43163,40.413692],[44.4296,40.411761999999996],[44.428546,40.415769999999995],[44.428031999999995,40.413598],[44.426989,40.415773],[44.42331,40.415217999999996],[44.42303,40.411985],[44.421622,40.434796999999996],[44.348579,40.462472],[44.315414999999994,40.483081],[44.305352,40.454629],[44.299175999999996,40.454122999999996],[44.285484,40.442384],[44.282759,40.436479],[44.280986999999996,40.423594],[44.247121,40.360177],[44.190953,40.396252],[44.184219,40.395029],[44.167412,40.406082999999995],[44.164142999999996,40.405788],[44.159686,40.399387999999995],[44.151824999999995,40.40332],[44.149725,40.410446],[44.140280999999995,40.405581999999995],[44.132715999999995,40.405651999999996],[44.128679,40.417021],[44.114083,40.429462],[44.114312999999996,40.432434],[44.10641,40.425072],[44.096484,40.426376],[44.073357,40.420107],[44.063848,40.412963999999995],[44.05208,40.429505],[44.036544,40.430903],[44.029328,40.439321],[44.016223,40.448644],[44.006789999999995,40.450904],[44.003326,40.457194],[43.999300999999996,40.457651999999996],[43.988109,40.467107999999996],[43.970977,40.471035],[43.967831,40.478756],[43.965125,40.480261999999996],[43.958203,40.474208999999995],[43.957485,40.453846],[43.951819,40.453264999999995],[43.947506999999995,40.448428],[43.942836,40.427212999999995],[43.942463,40.415555999999995],[43.937433,40.409092],[43.916615,40.407016999999996],[43.908634,40.402564999999996],[43.895043,40.402743],[43.881226999999996,40.420291],[43.872333,40.415352999999996],[43.869862999999995,40.407345],[43.867666,40.405896],[43.827287,40.39283],[43.820522,40.3807],[43.802001999999995,40.381972],[43.790931,40.372803999999995],[43.776931,40.370498999999995],[43.773235,40.365663],[43.774226,40.35489],[43.772389,40.346788],[43.777699999999996,40.323812],[43.782084,40.31948],[43.782256,40.305724999999995],[43.779216999999996,40.298716999999996],[43.770821999999995,40.294661],[43.762353,40.280190999999995],[43.760355,40.274454],[43.761666,40.264761],[43.759893999999996,40.261724],[43.76139,40.251874],[43.766574999999996,40.244965],[43.766971,40.240586],[43.775315,40.233615],[43.779253,40.217132],[43.792153,40.214369999999995],[43.800892,40.204691],[43.819665,40.207972],[43.820848999999995,40.203465],[43.824000999999996,40.200733],[43.834778,40.200063],[43.845403,40.18934],[43.854257,40.19166],[43.861182,40.197654],[43.867757999999995,40.195561],[43.872909,40.190495999999996],[43.873908,40.1844],[43.872184,40.180921],[43.871704,40.169481],[43.867877,40.162642999999996],[43.861371999999996,40.159749999999995],[43.857653,40.151759],[43.867644999999996,40.113098],[43.866868,40.104935999999995],[43.863966999999995,40.106119],[43.85926,40.102032],[43.856721,40.102861],[43.854683,40.099109],[43.849233999999996,40.099485],[43.845791,40.095462],[43.84614,40.088588],[43.849875,40.087246],[43.856207,40.075876],[43.862297,40.070263],[43.866704999999996,40.070237999999996],[43.867574,40.064982],[43.880199,40.044138],[43.880751,40.035176],[43.878867,40.027257999999996],[43.882526999999996,40.020072],[43.883457,40.013039],[43.885028,40.014252],[43.892087,40.008838],[43.891234,40.005897999999995],[43.897169999999996,40.003471999999995],[43.907795,39.991375999999995],[43.907768,39.987745],[43.912302,39.978598999999996],[43.919311,39.972908],[43.920294,39.968125],[43.923666,39.966318],[43.932804,39.953699],[43.942519999999995,39.949706],[43.947998,39.942827],[43.95021,39.944462],[43.955914,39.942958999999995],[43.958368,39.940605999999995],[43.958847,39.933191],[43.961392,39.92798],[43.964453999999996,39.925678],[43.968615,39.927264],[43.972466999999995,39.923207],[43.973802,39.908798999999995],[43.95361,39.902642],[43.939462999999996,39.912718],[43.933706,39.887862],[43.934998,39.88366],[43.931255,39.879587],[43.929928,39.873954999999995],[43.931114,39.870039999999996],[43.924186,39.851427],[43.924326,39.844159],[43.930934,39.824352],[43.933569,39.807792],[43.938856,39.804787],[43.942851,39.7983],[43.954549,39.790572999999995],[43.961718,39.777846],[43.98365,39.819161],[43.986301,39.817695],[43.987691,39.810406],[43.997245,39.796993],[44.010405,39.798998999999995],[44.017488,39.796786],[44.043060999999994,39.808510999999996],[44.065421,39.828448],[44.082274999999996,39.830476999999995],[44.100195,39.815290999999995],[44.122096,39.801494999999996],[44.127326,39.793847],[44.129562,39.776568],[44.136835999999995,39.773998]
]],},properties:{}},{
        fillColor: 'AD66D5',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });











































































































































































	krasnfap1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.976184,39.708293]
        },
        properties: {
		hintContent: 'ФАП Бжедугхабль<br/>Красногвардейский район, а. Бжедугхабль,  ул. Клубная, 11',
		balloonContentBody: [
            '<strong>ФАП Бжедугхабль',
			'<br/>',
			'Красногвардейский район, а. Бжедугхабль,  ул. Клубная, 11</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.0357,39.839717]
        },
        properties: {
		hintContent: 'ФАП Б-Сидоров<br/>Красногвардейский район, Большесидоровское,  ул. Мира, 1',
		balloonContentBody: [
            '<strong>ФАП Б-Сидоров',
			'<br/>',
			'Красногвардейский район, Большесидоровское,  ул. Мира, 1</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.003385,39.754045]
        },
        properties: {
		hintContent: 'ФАП В-Назаровское<br/>Красногвардейский район, с. Верхненазаровское,  ул. Почтовая, 84',
		balloonContentBody: [
            '<strong>ФАП В-Назаровское',
			'<br/>',
			'Красногвардейский район, с. Верхненазаровское,  ул. Почтовая, 84</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.088631,39.859174]
        },
        properties: {
		hintContent: 'ФАП Джамбичий<br/>Красногвардейский район, Джамбичий, ул. Центральная, 38',
		balloonContentBody: [
            '<strong>ФАП Джамбичий',
			'<br/>',
			'Красногвардейский район, Джамбичий, ул. Центральная, 38</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [000000000000000000]
        },
        properties: {
		hintContent: 'ФАП №1<br/>Красногвардейский район, Еленовское, ул. Клубная, 17',
		balloonContentBody: [
            '<strong>ФАП №1',
			'<br/>',
			'Красногвардейский район, Еленовское, ул. Клубная, 17</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [000000000000000000]
        },
        properties: {
		hintContent: 'ФАП №3<br/>Красногвардейский район, Еленовское, ул. Клубная, 17',
		balloonContentBody: [
            '<strong>ФАП №3',
			'<br/>',
			'Красногвардейский район, Еленовское,  ул. Победы, 15а</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [000000000000000000]
        },
        properties: {
		hintContent: 'ФАП Н-Севастопольское<br/>Красногвардейский район, с. Новосевастопольское,  ул. Чехова, 13',
		balloonContentBody: [
            '<strong>ФАП Н-Севастопольское',
			'<br/>',
			'Красногвардейский район, с. Новосевастопольское,  ул. Чехова, 13</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.083572,39.628505]
        },
        properties: {
		hintContent: 'ФАП Преображенское<br/>Красногвардейский район, Преображенское, ул. Космонавтов, 13а',
		balloonContentBody: [
            '<strong>ФАП Преображенское',
			'<br/>',
			'Красногвардейский район, Преображенское, ул. Космонавтов, 13а</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.100822,39.758078]
        },
        properties: {
		hintContent: 'ФАП Саратовский<br/>Красногвардейский район, х. Саратовский, ул. Красная, 46/2',
		balloonContentBody: [
            '<strong>ФАП Саратовский',
			'<br/>',
			'Красногвардейский район, х. Саратовский, ул. Красная, 46/2</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnfap10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.061859,39.907818]
        },
        properties: {
		hintContent: 'ФАП Штурбино<br/>Красногвардейский район, п. Штурбино,  ул. Красная, 2',
		balloonContentBody: [
            '<strong>ФАП Штурбино',
			'<br/>',
			'Красногвардейский район, п. Штурбино,  ул. Красная, 2</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOOO</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	krasnamb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.187999,39.663692]
        },
        properties: {
		hintContent: 'Хатукайская врачебная амбулатория<br/>Красногвардейский район, а. Хатукай,  ул. Мира, 20в',
		balloonContentBody: [
            '<strong>Хатукайская врачебная амбулатория',
			'<br/>',
			'Красногвардейский район, а. Хатукай,  ул. Мира, 20в</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	krasnamb2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.073585,39.501322]
        },
        properties: {
		hintContent: 'Адамиевская врачебная амбулатория<br/>Красногвардейский район, Адамий,  ул. Шоссейная, 31',
		balloonContentBody: [
            '<strong>Адамиевская врачебная амбулатория',
			'<br/>',
			'Красногвардейский район, Адамий,  ул. Шоссейная, 31</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	krasnamb3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.04824,39.650981]
        },
        properties: {
		hintContent: 'Врачебная амбулатория с.Белое<br/>Красногвардейский район, с. Белое,  ул. О.Кошевого, 52',
		balloonContentBody: [
            '<strong>Врачебная амбулатория с.Белое',
			'<br/>',
			'Красногвардейский район, с. Белое,  ул. О.Кошевого, 52</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	krasnamb4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.109633,39.688548]
        },
        properties: {
		hintContent: 'Еленовская врачебная амбулатория<br/>Красногвардейский район, с. Еленовское,  ул. Советская, 99',
		balloonContentBody: [
            '<strong>Еленовская врачебная амбулатория',
			'<br/>',
			'Красногвардейский район, с. Еленовское,  ул. Советская, 99</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	krasnamb5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.997113,39.699777]
        },
        properties: {
		hintContent: 'Врачебная амбулатория с.Садовое<br/>Красногвардейский район, с. Садовое,  ул. Красная, 9',
		balloonContentBody: [
            '<strong>Врачебная амбулатория с.Садовое',
			'<br/>',
			'Красногвардейский район, с. Садовое,  ул. Красная, 9</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	krasnamb6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.057193,39.944425]
        },
        properties: {
		hintContent: 'Уляпская врачебная амбулатория<br/>Красногвардейский район, а.Уляп,  ул. Им. Братьев Шекультировых, 14',
		balloonContentBody: [
            '<strong>Уляпская врачебная амбулатория',
			'<br/>',
			'Красногвардейский район, а.Уляп,  ул. Им. Братьев Шекультировых, 14</strong>',
			'<br/>',
			'Обслуживаемое население: 0000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });


	krasncrb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.141805,39.578963]
        },
        properties: {
		hintContent: 'Красногвардейская ЦРБ<br/>Красногвардейский район, с. Красногвардейское,  ул. Больничная, 15',
		balloonContentBody: [
            '<strong>Красногвардейская ЦРБ',
			'<br/>',
			'Красногвардейский район, с. Красногвардейское,  ул. Больничная, 15</strong>',
			'<br/>',
			'Обслуживаемое население: 000000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#nightHomeCircleIcon',
    });

	krasnneotl1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.141805,39.578963]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Красногвардейская ЦРБ)<br/>Красногвардейский район, с. Красногвардейское,  ул. Больничная, 15',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи  (Красногвардейская ЦРБ)',
			'<br/>',
			'Красногвардейский район, с. Красногвардейское,  ул. Больничная, 15</strong>',
			'<br/>',
			'Обслуживаемое население: 000000',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });






		var gran_krasncrb1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.029616,39.313234],[45.029277,39.317779],[45.030311999999995,39.322628],[45.033781,39.32692],[45.041053999999995,39.325331999999996],[45.044826,39.326361999999996],[45.042438,39.335288],[45.042224999999995,39.343871],[45.044872,39.352604],[45.056531,39.375886],[45.057983,39.376979999999996],[45.062667,39.376165],[45.075896,39.381991],[45.077802,39.386144],[45.076778999999995,39.398734999999995],[45.079665,39.402873],[45.082155,39.40285],[45.087637,39.399302],[45.091682999999996,39.400907],[45.093911,39.403957999999996],[45.093526,39.409161999999995],[45.089662999999994,39.418344],[45.090208999999994,39.425126],[45.095532999999996,39.428535],[45.104527,39.430398],[45.109347,39.437008],[45.110178,39.440531],[45.109108,39.445685999999995],[45.102149999999995,39.457224],[45.102319,39.4634],[45.10385,39.467318999999996],[45.107389999999995,39.469746],[45.110856999999996,39.468513],[45.113082999999996,39.466794],[45.119327999999996,39.456688],[45.121418,39.455833999999996],[45.122161999999996,39.457547],[45.119721,39.466350999999996],[45.122214,39.472598],[45.128682999999995,39.467887999999995],[45.131782,39.4696],[45.134178,39.474107],[45.13472,39.477232],[45.142541,39.486266],[45.143001999999996,39.489548],[45.140971,39.492717999999996],[45.140620999999996,39.496348],[45.142078999999995,39.499051],[45.157809,39.509394],[45.162571,39.515375],[45.161249,39.523058999999996],[45.161595,39.530649],[45.160472,39.535694],[45.16121,39.53879],[45.164581999999996,39.540842],[45.175714,39.541616],[45.188114,39.546141],[45.190999,39.556053],[45.197387,39.563604],[45.200061,39.570888],[45.200646,39.574343999999996],[45.200109999999995,39.580494],[45.201125999999995,39.583901],[45.210609999999996,39.594307],[45.212689999999995,39.606044],[45.216563,39.616048],[45.217642999999995,39.62331],[45.217493,39.626176],[45.212509999999995,39.638372],[45.207744,39.655752],[45.205594,39.660447],[45.203810999999995,39.670317],[45.194755,39.685840999999996],[45.187472,39.691403],[45.186305999999995,39.690380999999995],[45.185722,39.687371999999996],[45.187542,39.681103],[45.186254999999996,39.677008],[45.184,39.682666],[45.17978,39.685874999999996],[45.173018,39.687425],[45.169185,39.685939999999995],[45.168377,39.684469],[45.168502,39.675453],[45.166592,39.671842999999996],[45.165259999999996,39.671616],[45.164325999999996,39.673818],[45.166713,39.678999],[45.166489999999996,39.680312],[45.163869999999996,39.682307],[45.160176,39.688645],[45.155370999999995,39.687722],[45.15322,39.691275999999995],[45.156574,39.700302],[45.156408,39.702163999999996],[45.154077,39.702324],[45.150048,39.698423999999996],[45.146876,39.700297],[45.147538999999995,39.703734999999995],[45.153157,39.708799],[45.152904,39.71263],[45.149408,39.713659],[45.146163,39.710806999999996],[45.143375999999996,39.713673],[45.144211999999996,39.716674],[45.148446,39.716758999999996],[45.150498,39.718942999999996],[45.150462999999995,39.729856999999996],[45.14389,39.734584],[45.139523,39.730633],[45.137921999999996,39.731080999999996],[45.137097999999995,39.733995],[45.134316,39.733284999999995],[45.130238999999996,39.729864],[45.127856,39.732600999999995],[45.127901,39.735423],[45.13187,39.737024],[45.132473,39.739450999999995],[45.132236,39.747189999999996],[45.129655,39.74727],[45.128602,39.750434],[45.129928,39.754146999999996],[45.132208999999996,39.754199],[45.136534,39.759297],[45.137307,39.76332],[45.134211,39.77021],[45.133067999999994,39.780536],[45.126748,39.779613999999995],[45.124705999999996,39.782514],[45.128341999999996,39.785609],[45.127306999999995,39.790290999999996],[45.130790999999995,39.795322],[45.130320999999995,39.80155],[45.129114,39.802951],[45.125333999999995,39.803776],[45.122031,39.808557],[45.114892999999995,39.80975],[45.113504999999996,39.811831],[45.113682,39.813855],[45.114822,39.815031],[45.119634,39.813103999999996],[45.122175,39.814627],[45.122135,39.817836],[45.120469,39.820149],[45.117294,39.820183],[45.115100999999996,39.822562999999995],[45.116921,39.825182],[45.120992,39.826004],[45.121634,39.828479],[45.12065,39.829482999999996],[45.115407,39.828706],[45.113476,39.831033999999995],[45.113893999999995,39.834247],[45.117658999999996,39.838857],[45.118144,39.841699999999996],[45.117278,39.844207999999995],[45.115381,39.844288],[45.111453,39.840596999999995],[45.108305,39.842219],[45.107420999999995,39.846019999999996],[45.109558,39.849195],[45.116282,39.849515],[45.118041,39.852776999999996],[45.112122,39.858629],[45.113130999999996,39.866513],[45.11231,39.871714],[45.110417999999996,39.873914],[45.108982,39.872256],[45.108334,39.865131999999996],[45.10608,39.860794999999996],[45.10469,39.855075],[45.102422999999995,39.854676999999995],[45.098327,39.857769],[45.097857,39.859635999999995],[45.098585,39.861098],[45.102598,39.86042],[45.104279,39.861668],[45.103761,39.866915],[45.105672999999996,39.870852],[45.103362999999995,39.871010999999996],[45.104583,39.877302],[45.104442999999996,39.882143],[45.1012,39.890566],[45.094166,39.886953999999996],[45.092762,39.887916],[45.093029,39.889873],[45.097426999999996,39.89123],[45.100297999999995,39.894042],[45.098093999999996,39.899194],[45.094988,39.90024],[45.089413,39.894377999999996],[45.086112,39.893007999999995],[45.084674,39.89467],[45.087525,39.900625999999995],[45.0911,39.899844],[45.093379,39.905722],[45.094696,39.911635],[45.094556999999995,39.916163],[45.096146,39.921569999999996],[45.095558,39.930222],[45.096266,39.933223],[45.09553,39.936388],[45.09612,39.940129999999996],[45.094031,39.950871],[45.090137999999996,39.952186],[45.088756,39.94914],[45.08641,39.948871],[45.083431,39.952507],[45.081626,39.957456],[45.084699,39.960001],[45.088082,39.960926],[45.097062,39.970372],[45.097072999999995,39.973940999999996],[45.093284,39.991929999999996],[45.094918,39.992450999999996],[45.095347,39.995042],[45.090956999999996,40.004135],[45.090348,40.009219],[45.087787999999996,40.007953],[45.086082,40.011635],[45.084122,40.010601],[45.081592,40.011927],[45.080684,40.010787],[45.059047,40.017289999999996],[45.057654,40.016478],[45.056822,40.007090999999996],[45.055237999999996,40.005522],[45.019828,40.015144],[45.013126,39.965539],[45.015730999999995,39.964738],[45.012249999999995,39.939969],[45.018330999999996,39.938064],[45.014230999999995,39.908629],[45.018936,39.904686],[45.020879,39.906227],[45.022735999999995,39.905452],[45.02373,39.909285],[45.026103,39.908989],[45.029078,39.903569],[45.026863999999996,39.88399],[45.022982,39.884971],[45.019487999999996,39.861117],[45.016233,39.860445],[45.014334999999996,39.854147],[45.013079,39.849827999999995],[45.014815999999996,39.849204],[44.990773,39.76506],[44.989653999999994,39.764679],[44.973907,39.772985],[44.962575,39.735499999999995],[44.956866,39.712457],[44.950863,39.696574999999996],[44.952031,39.695504],[44.951381,39.691762],[44.953299,39.688956],[44.955106,39.689341999999996],[44.955377,39.692493999999996],[44.957273,39.690452],[44.958822999999995,39.69238],[44.959509999999995,39.688919],[44.957242,39.686786999999995],[44.961265999999995,39.682721],[44.963389,39.683519],[44.961934,39.689282999999996],[44.963013,39.69066],[44.965965,39.688884],[44.971202999999996,39.688846999999996],[44.974939,39.684906999999995],[44.981193,39.684612],[44.981503,39.680203999999996],[44.984111999999996,39.677178],[44.986439999999995,39.677291],[44.988889,39.680307],[44.990528,39.679477999999996],[44.991597999999996,39.676195],[44.993854999999996,39.676711999999995],[44.995816,39.679407],[44.996995999999996,39.678653],[44.996849,39.674412],[44.992188,39.673950999999995],[44.990019,39.670941],[44.989908,39.668952999999995],[44.992385999999996,39.66432],[44.983025999999995,39.644365],[44.975471999999996,39.651339],[44.959624,39.620571],[44.982516,39.599014],[44.994363,39.622783999999996],[45.001008999999996,39.641405],[45.007327,39.638304999999995],[45.008962,39.642005999999995],[45.014416999999995,39.649021],[45.016538999999995,39.645387],[45.014987,39.641363],[45.015175,39.639078],[45.016977,39.637102],[45.019593,39.637755999999996],[45.023806,39.641757999999996],[45.02258,39.65127],[45.024055999999995,39.653146],[45.035094,39.651223],[45.037951,39.642598],[45.041733,39.638698999999995],[45.045981,39.625965],[45.050335,39.622886],[45.049628999999996,39.620142],[45.046777,39.619662],[45.043147999999995,39.613890999999995],[45.042918,39.606834],[45.044967,39.600622],[45.043119999999995,39.592016],[45.046441,39.585589999999996],[45.046897,39.582322999999995],[45.048094999999996,39.582623999999996],[45.048721,39.586493],[45.050154,39.588304],[45.054328,39.587328],[45.055099,39.585409],[45.053464999999996,39.582049999999995],[45.053388999999996,39.578914],[45.051156,39.577867],[45.047993,39.580644],[45.046361,39.578792],[45.046203999999996,39.576325],[45.048573,39.569165999999996],[45.047348,39.564737],[45.044523999999996,39.565435],[45.039894,39.57147],[45.034872,39.570974],[45.032579,39.567631999999996],[45.032291,39.560328999999996],[45.033018,39.558676],[45.030834999999996,39.559022],[45.030158,39.557832],[45.033348,39.550295999999996],[45.032917999999995,39.54597],[45.034157,39.544886999999996],[45.036077,39.546555999999995],[45.040284,39.555344],[45.04118,39.550357],[45.042021999999996,39.549734],[45.043222,39.550714],[45.044222999999995,39.554218],[45.04662,39.554894999999995],[45.043347,39.546707],[45.044827999999995,39.539645],[45.042691999999995,39.537850999999996],[45.042175,39.535264],[45.042735,39.531962],[45.044019999999996,39.530713],[45.046493,39.530131999999995],[45.051465,39.532303999999996],[45.053089,39.535044],[45.051652,39.539103],[45.052403,39.54284],[45.054621999999995,39.544666],[45.056089,39.543592],[45.057142999999996,39.536238],[45.055237999999996,39.531734],[45.056208,39.526726],[45.055077999999995,39.522118999999996],[45.053757,39.52169],[45.049434999999995,39.525977999999995],[45.048531,39.525256999999996],[45.047954,39.521724999999996],[45.05046,39.516338999999995],[45.048640999999996,39.513695],[45.046828,39.514976999999995],[45.044619,39.52037],[45.042367,39.519234],[45.042189,39.514579999999995],[45.045457999999996,39.510135],[45.044778,39.505738],[45.042162999999995,39.506001999999995],[45.038987999999996,39.513348],[45.037926999999996,39.512929],[45.03631,39.508196999999996],[45.036581,39.502812999999996],[45.039195,39.500777],[45.040071999999995,39.49838],[45.035154999999996,39.497729],[45.034214,39.496176999999996],[45.034389,39.494236],[45.036532,39.493446],[45.044686,39.496099],[45.045393999999995,39.494937],[45.044717,39.491648999999995],[45.037724,39.487027999999995],[45.033623999999996,39.488806],[45.032356,39.487848],[45.033505999999996,39.482424],[45.036856,39.480592],[45.036795,39.472311],[45.012930999999995,39.475156999999996],[45.012477999999994,39.476867],[45.002461,39.473391],[45.001689,39.476161999999995],[44.996345999999996,39.476538999999995],[44.994972,39.475287],[44.995163,39.471602],[44.994285,39.470931],[44.992186,39.475463],[44.989885,39.474591],[44.990974,39.466817999999996],[44.998675999999996,39.461791],[45.000948,39.462311],[45.001329,39.461298],[44.999266,39.458444],[44.99133,39.457028],[44.989141,39.451685],[44.989284999999995,39.447919],[44.990915,39.447092999999995],[44.993994,39.448943],[44.997282999999996,39.44742],[44.999932,39.443391],[45.00138,39.438703],[45.003661,39.44066],[45.004439,39.435798],[45.007476,39.432746],[45.00839,39.430369999999996],[45.007574999999996,39.42861],[45.004916,39.429465],[45.003783999999996,39.428273999999995],[45.003308,39.426037],[45.004537,39.423876],[45.004354,39.420587999999995],[45.001287999999995,39.413458],[44.999524,39.41316],[44.997859999999996,39.415952999999995],[44.997049999999994,39.415633],[44.998571,39.40988],[44.997952,39.40649],[45.001141999999994,39.405916],[45.005637,39.408249],[45.008358,39.411381999999996],[45.009851,39.410838],[45.010642999999995,39.408843],[45.009471,39.40571],[45.005728999999995,39.401266],[45.005029,39.397833],[45.006068,39.395212],[45.005533,39.394418],[45.000294,39.393902],[44.995754,39.399663],[44.993162,39.400735999999995],[44.991738999999995,39.398785],[44.990682,39.392072999999996],[44.992377999999995,39.388816],[44.994377,39.387429999999995],[45.004598,39.383613],[45.005995999999996,39.380344],[45.005559999999996,39.370622999999995],[45.006567,39.367909999999995],[45.009927999999995,39.369001],[45.012746,39.375037],[45.014902,39.373819999999995],[45.015944,39.370232],[45.013886,39.365736999999996],[45.008855999999994,39.36479],[45.006229,39.358155],[45.003481,39.356438],[45.001673,39.345954],[45.001869,39.342448999999995],[45.006181,39.336392],[45.009403,39.329426],[45.014768,39.327279],[45.018048,39.320287]
]],},properties:{}},{
        fillColor: 'FFD573',
        strokeColor: '#0000FF',
        opacity: 0.7,
        strokeWidth: 1
    });







































































































































	shovgfap1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.066935, 40.176888]
        },
        properties: {
		hintContent: 'ФАП а. Пшичо<br/>ул. Ленина, 53',
		balloonContentBody: [
            '<strong>ФАП а. Пшичо',
			'<br/>',
			'ул. Ленина, 53</strong>',
			'<br/>',
			'Обслуживаемое население: 5898',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.065570, 40.192760]
        },
        properties: {
		hintContent: 'ФАП а.Хатажукай<br/>ул. Моса Шовгенова, 13',
		balloonContentBody: [
            '<strong>ФАП а.Хатажукай',
			'<br/>',
			'ул. Моса Шовгенова, 13</strong>',
			'<br/>',
			'Обслуживаемое население: 937',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.048746, 40.181509]
        },
        properties: {
		hintContent: 'ФАП а.Кабехабль<br/>ул. Ленина, 37',
		balloonContentBody: [
            '<strong>ФАП а.Кабехабль',
			'<br/>',
			'ул. Ленина, 37</strong>',
			'<br/>',
			'Обслуживаемое население: 854',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.968696, 39.952070]
        },
        properties: {
		hintContent: 'ФАП х. Тихонов<br/>ул. Советская, 104Б',
		balloonContentBody: [
            '<strong>ФАП х. Тихонов',
			'<br/>',
			'ул. Советская, 104Б</strong>',
			'<br/>',
			'Обслуживаемое население: 1105',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.989025, 40.308841]
        },
        properties: {
		hintContent: 'ФАП а.Джерокай<br/>ул. Краснооктябрьская, 34',
		balloonContentBody: [
            '<strong>ФАП а.Джерокай',
			'<br/>',
			'ул. Краснооктябрьская, 34</strong>',
			'<br/>',
			'Обслуживаемое население: 654',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.996591, 40.081346]
        },
        properties: {
		hintContent: 'ФАП п.Зарево<br/>ул. Больничная, 1',
		balloonContentBody: [
            '<strong>ФАП п.Зарево',
			'<br/>',
			'ул. Больничная, 1</strong>',
			'<br/>',
			'Обслуживаемое население: 937',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.048412, 40.037643]
        },
        properties: {
		hintContent: 'ФАП х.Чернышев<br/>ул. Советская, 112',
		balloonContentBody: [
            '<strong>ФАП х.Чернышев',
			'<br/>',
			'ул. Советская, 112</strong>',
			'<br/>',
			'Обслуживаемое население: 728',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.005673, 39.914762]
        },
        properties: {
		hintContent: 'ФАП х.Дукмасов<br/>ул. Ушанева, 17',
		balloonContentBody: [
            '<strong>ФАП х.Дукмасов',
			'<br/>',
			'ул. Ушанева, 17</strong>',
			'<br/>',
			'Обслуживаемое население: 633',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.989141, 40.143891]
        },
        properties: {
		hintContent: 'ФАП х.Михайлов<br/>ул. Заречная, 5/1',
		balloonContentBody: [
            '<strong>ФАП х.Михайлов',
			'<br/>',
			'ул. Заречная, 5/1</strong>',
			'<br/>',
			'Обслуживаемое население: 458',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.943188, 39.990730]
        },
        properties: {
		hintContent: 'ФАП х.Мамацев<br/>ул. Краснооктябрьская, 28',
		balloonContentBody: [
            '<strong>ФАП х.Мамацев',
			'<br/>',
			'ул. Краснооктябрьская, 28</strong>',
			'<br/>',
			'Обслуживаемое население: 468',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap11 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.057147, 40.068592]
        },
        properties: {
		hintContent: 'ФАП х.Веселый<br/>ул. Мира, 80',
		balloonContentBody: [
            '<strong>ФАП х.Веселый',
			'<br/>',
			'ул. Мира, 80</strong>',
			'<br/>',
			'Обслуживаемое население: 252',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap12 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.984151, 40.298654]
        },
        properties: {
		hintContent: 'ФАП х.Свободный Труд<br/>ул. Шоссейная, 3',
		balloonContentBody: [
            '<strong>ФАП х.Свободный Труд',
			'<br/>',
			'ул. Шоссейная, 3</strong>',
			'<br/>',
			'Обслуживаемое население: 311',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap13 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.092273, 40.267197]
        },
        properties: {
		hintContent: 'ФАП х.Киров<br/>ул. Маяковского, 24',
		balloonContentBody: [
            '<strong>ФАП х.Киров',
			'<br/>',
			'ул. Маяковского, 24</strong>',
			'<br/>',
			'Обслуживаемое население: 230',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap14 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.093895, 40.104794]
        },
        properties: {
		hintContent: 'ФАП а.Пшизов<br/>ул. Ленина, 5',
		balloonContentBody: [
            '<strong>ФАП а.Пшизов',
			'<br/>',
			'ул. Ленина, 5</strong>',
			'<br/>',
			'Обслуживаемое население: 875',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap15 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.035158, 40.066434]
        },
        properties: {
		hintContent: 'ФАП п.Ульский<br/>ул. Мира, 5',
		balloonContentBody: [
            '<strong>ФАП п.Ульский',
			'<br/>',
			'ул. Мира, 5</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgfap16 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.918697, 40.246446]
        },
        properties: {
		hintContent: 'ФАП х.Семёно-Макаренский<br/>ул. Кочубея, 5',
		balloonContentBody: [
            '<strong>ФАП х.Семёно-Макаренский',
			'<br/>',
			'ул. Кочубея, 5</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая OOOOOO: OOOOOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: OOO',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	shovgcrb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.027501, 40.222691]
        },
        properties: {
		hintContent: 'Шовгеновская ЦРБ<br/>ул. Гагарина, 52',
		balloonContentBody: [
            '<strong>Шовгеновская ЦРБ',
			'<br/>',
			'ул. Гагарина, 52</strong>',
			'<br/>',
			'Обслуживаемое население: OOOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: OOO</li></ul>',
			'Укладка: OOO',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#nightHomeCircleIcon',
    });

	shovg_neotl1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.027501, 40.22269]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Районная поликлиника - Шовгеновская ЦРБ)<br/>ул. Гагарина, 52',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Районная поликлиника - Шовгеновская ЦРБ)',
			'<br/>',
			'ул. Гагарина, 52</strong>',
			'<br/>',
			'Обслуживаемое население: OOOO',
			'<br/>',
			'Мед.работники:',
			'<ul><li>OOOO</li></ul>',
			'Укладка: OOOO',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.989025, 40.30884]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Джерокай)<br/>ул. Краснооктябрьская, 34',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Джерокай)',
			'<br/>',
			'ул. Краснооктябрьская, 34</strong>',
			'<br/>',
			'Обслуживаемое население: 654',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Коблева Б.М.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.005673, 39.91476]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Дукмасов)<br/>ул. Ушанева 17',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Дукмасов',
			'<br/>',
			'ул. Ушанева, 17</strong>',
			'<br/>',
			'Обслуживаемое население: 633',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Чукалина Э.А.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.065570, 40.1927]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Хатажукай)<br/>ул. Моса Шовгенова, 13',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Хатажукай)',
			'<br/>',
			'ул. Моса Шовгенова, 13</strong>',
			'<br/>',
			'Обслуживаемое население: 937',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Брантова О.В.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.943188, 39.9907]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Мамацев)<br/>ул. Краснооктябрьская, 28',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Мамацев)',
			'<br/>',
			'ул. Краснооктябрьская, 28</strong>',
			'<br/>',
			'Обслуживаемое население: 468',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Аташукова И.И.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.996591, 40.08134]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Зарево)<br/>ул. Больничная, 1',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Зарево)',
			'<br/>',
			'ул. Больничная, 1</strong>',
			'<br/>',
			'Обслуживаемое население: 937',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Уракова А.А.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	shovg_neotl7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [45.093895, 40.10479]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Пшизов)<br/>ул. Ленина, 5',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Пшизов)',
			'<br/>',
			'ул. Ленина, 5</strong>',
			'<br/>',
			'Обслуживаемое население: 875',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Арданова С.Т.</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

		var gran_shovgfap1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.054751118064836,40.175757170938645],[45.05507051334419,40.17970538260857],[45.05802103242785,40.17897582175652],[45.058203533729674,40.18052077414909],[45.057252999708886,40.1807568085424],[45.05833280516903,40.18853521468559],[45.06109801202341,40.18803033496512],[45.06194963360935,40.186657043949495],[45.06324224911397,40.186614128605235],[45.06392656307753,40.18530521060598],[45.06377449402477,40.183781715885516],[45.06518872049875,40.18350276614797],[45.06648126229575,40.18139991428024],[45.0700850175364,40.180842014805116],[45.07189751789304,40.18033691815558],[45.07209517930234,40.17759033612433],[45.07477114296123,40.17634579114142],[45.0765347773543,40.17460771969972],[45.07723413442544,40.174908127109376],[45.078298356913756,40.17430731229007],[45.079757829593675,40.174436058322776],[45.08091321884968,40.17018743924317],[45.08276787347192,40.16791292599856],[45.08237262429021,40.16619631222901],[45.083345540401176,40.16533800534425],[45.08310231303365,40.16224810055896],[45.08419682843164,40.16149708203481],[45.085595345120495,40.162462677280175],[45.08772345660757,40.16546675137684],[45.08957788866292,40.165295089999894],[45.09304338609171,40.164436783115136],[45.09258741170141,40.15902944974112],[45.088118668540325,40.15877195767567],[45.0589872174994,40.16302057675527],[45.053420740809095,40.165338005344104],[45.054751118064836,40.175757170938645]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap2 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.06652968453653,40.181467507938365],[45.06516811421537,40.183688374320674],[45.06383227450651,40.18385032585824],[45.06400072660517,40.185411881003205],[45.06329419115153,40.186707642706544],[45.06196765426184,40.186776166411015],[45.061106675221026,40.188162261606756],[45.05832945907193,40.18856130388503],[45.05903802300215,40.19094780389967],[45.056848000854,40.19296482507887],[45.05678716574842,40.19300774042303],[45.044314583445455,40.20450905267887],[45.05861694932833,40.22470137134274],[45.05894994533765,40.224872607056334],[45.06198833606379,40.228842052862035],[45.077102483815516,40.20407989923659],[45.078896451495865,40.202234539434336],[45.079170102598376,40.20086124841871],[45.088503855686774,40.196998867437266],[45.0955508769287,40.17279862808074],[45.092997485896575,40.16464471267545],[45.087707953147046,40.16563176559294],[45.08554943891885,40.16254186080778],[45.084272532694506,40.16168355392302],[45.08320842222535,40.162284368742355],[45.08354285909432,40.16554593490447],[45.08253954257467,40.16614674972381],[45.082965194173624,40.16816377090301],[45.08098892762796,40.170266622770676],[45.0798335399132,40.174686903227226],[45.07828285101324,40.17447232650602],[45.07727944150194,40.175158972013826],[45.07651927097201,40.17494439529265],[45.07474043220682,40.176596636045765],[45.07219370701782,40.17766951965161],[45.07186680556474,40.18045901702722],[45.06652968453653,40.181467507938365]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap3 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.04340587672247,40.19258638040156],[45.047665183239474,40.20138402597039],[45.0588899685964,40.19078393594354],[45.057127927069345,40.18068682633964],[45.05810127587426,40.18047224961846],[45.05791877424387,40.179227704635544],[45.0550290869504,40.179914350143356],[45.053232470955635,40.16542818696927],[45.03502773586374,40.17277740563864],[45.032593344285864,40.16078256692406],[45.02589489643456,40.1638363992448],[45.01778362187724,40.16439429871988],[45.0064429945803,40.17803807870478],[45.010553106868635,40.194349519250274],[45.01239470874738,40.19996200108207],[45.02257630125778,40.203686207767404],[45.02717167768083,40.211306282515],[45.02693699109202,40.2120912484819],[45.02799081242747,40.21460531798899],[45.02947323939273,40.21285283261354],[45.03338028215715,40.20143055104955],[45.04340587672247,40.19258638040156]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap4 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.009053918794194,40.035993992156385],[44.98774734053173,40.04141205436651],[44.988877954205805,40.05317622310582],[44.98164658813484,40.056483386821185],[44.975389068892845,40.0319814074702],[44.96856536213759,39.984259544677215],[44.95747509542102,39.98769277221628],[44.95089303764973,39.977736412352996],[44.93511589215046,39.982924574993135],[44.92682400026683,39.92421638407517],[44.98106525375262,39.909517878673554],[44.985816521734186,39.949579352520004],[44.99084146994641,39.94743358530805],[44.99115178017176,39.95172511973186],[44.98934925889291,39.9745131675224],[45.013148374308706,39.96623510009715],[45.0199667392086,40.01515859252878],[45.01716643826623,40.016016899413536],[45.02209731065382,40.04837506896917],[45.01116967796069,40.05253785736028],[45.009053918794194,40.035993992156385]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap5 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.973405080060026,40.31949385902254],[44.972399818157854,40.32015904685825],[44.97150877573268,40.321618168562345],[44.96973426513641,40.32265886566013],[44.96928491676853,40.322004406660476],[44.96934584556849,40.32126411697237],[44.96995512998423,40.32082423469393],[44.970160762003914,40.31951531669468],[44.969079281607236,40.31800255081021],[44.96863754428426,40.31555637618865],[44.96786068754659,40.31514868041839],[44.96740370804708,40.31576022407378],[44.96753318594406,40.316908209532144],[44.968271965962465,40.317530482023614],[44.968203419765985,40.31852826377716],[44.967373242636384,40.31920418044889],[44.966878177111205,40.31920418044889],[44.96597181523436,40.31853899261321],[44.96588041659783,40.31711205741727],[44.96516445553942,40.31670436164701],[44.96345068244614,40.316908209532144],[44.96326787693869,40.31723007461393],[44.9630926877771,40.318635552137735],[44.96269660594823,40.31885012885892],[44.9619882219667,40.318324415892],[44.962140563351106,40.31688675186004],[44.96174447490459,40.31692966720427],[44.960792327972804,40.31760558387603],[44.95964973063285,40.31770214340056],[44.95948214776342,40.31829222938384],[44.95966496541474,40.31932219764555],[44.96055619306709,40.32013758918607],[44.96099037584898,40.32092079421843],[44.962018690295764,40.321382134168985],[44.96211791170157,40.32215455883367],[44.96164565189666,40.322283304866374],[44.96066303427622,40.32216528766972],[44.96002318113641,40.32308796757084],[44.95904053556132,40.32364586704595],[44.95890342087557,40.32422522419315],[44.9589262733461,40.32529810779912],[44.958263548000225,40.327186382945555],[44.957814109172006,40.32873133533815],[44.9572351658171,40.3310380350909],[44.95630579705097,40.331402815516924],[44.95592871291657,40.33225039356553],[44.955380222250085,40.33291558140121],[44.95519739085509,40.33418158405625],[44.956172484852,40.33512572162948],[44.963707224099565,40.34584420773356],[44.974110906738616,40.3605002581399],[44.97893890309781,40.35402004115991],[44.98851753285906,40.36803190105362],[44.989324561624485,40.36966268413469],[44.98959864425671,40.370993059806075],[44.98979659200385,40.37013475292132],[44.99148673335992,40.36659423702157],[44.99145628080922,40.365306776694425],[44.99042088439305,40.36462013118661],[44.9909994905939,40.362474363974684],[44.990649282299586,40.3623670756141],[44.990299071811975,40.35264675014412],[44.99713660953223,40.34546435579085],[44.99938982943022,40.342546112382664],[45.0031348489544,40.33666671022201],[45.00691006645477,40.334478027665696],[45.00742761705462,40.33477843507537],[45.00898024060863,40.333748466813645],[45.01031972492449,40.33323348268278],[45.010898128857264,40.33228934510955],[45.01214624362384,40.33207476838837],[45.01318124485667,40.33083022340546],[45.0137900603151,40.331302292192056],[45.0137900603151,40.3324610064865],[45.01488591172083,40.33271849855194],[45.01589042363086,40.334563858354166],[45.01732106148516,40.33464968904264],[45.0176254478756,40.331345207536295],[45.01729062275653,40.327783233964524],[45.01853859727337,40.32756865724334],[45.01710799004266,40.32392085298308],[45.017564570727814,40.32259047731169],[45.01820377752973,40.32229006990203],[45.01966479469303,40.32259047731169],[45.02182581373823,40.32117427095183],[45.02267802402442,40.320444710099785],[45.02328673783864,40.32065928682097],[45.0239563155865,40.32198966249233],[45.02359109238019,40.32271922334438],[45.02894746432238,40.330143577897594],[45.02897789681228,40.33426345094446],[45.032812260211976,40.33203185304408],[45.02505197113173,40.32113135560754],[45.02462588537267,40.31997264131313],[45.02082140674607,40.31387866243128],[44.99721273363251,40.28111279710531],[44.99732691906618,40.280426151597496],[44.99605564164983,40.28227151139974],[44.99674076474318,40.283215648973],[44.99601757901396,40.283784277284155],[44.99544759540332,40.28480564288222],[44.99499844988048,40.285256253996714],[44.995150702997144,40.28601800135694],[44.995866287190566,40.28610383204542],[44.996155563353696,40.28489147357069],[44.9967950107082,40.28499876193127],[44.99680262313343,40.28618966273389],[44.99653618766388,40.28831397227364],[44.997426838557885,40.28868948153572],[44.99741161387335,40.28945122889595],[44.99653618766388,40.29034172228889],[44.995767323974654,40.29012714556771],[44.99572164857721,40.290642129698576],[44.996300200903484,40.29110346964912],[44.99619743220879,40.29199932746007],[44.996288782203486,40.292739617148165],[44.995082189203565,40.29325460127903],[44.99472439332227,40.292262183943535],[44.994073503523225,40.292074429312486],[44.992965831863266,40.29243920973846],[44.99198756094512,40.2916720979602],[44.9919609152181,40.29108737639497],[44.99231492197606,40.290529476919865],[44.99207130467789,40.28801892928193],[44.9916449718634,40.28776143721649],[44.99123386219714,40.2881744974048],[44.99092172139373,40.2895638816745],[44.990560092849975,40.29022906951011],[44.990483960203505,40.29099081687034],[44.99010329544404,40.29107664755881],[44.98912116861029,40.290432917395236],[44.98864913265064,40.29056166342797],[44.98805527537616,40.29157017401757],[44.98798675298436,40.292063700476305],[44.98877094878137,40.29592608145771],[44.9892277568772,40.296956049719434],[44.988108570571306,40.2964732520967],[44.98744618461633,40.298640476980744],[44.98639548764054,40.29871557883316],[44.985289696873366,40.300534109534574],[44.98598256341013,40.30152116245207],[44.987314975381345,40.30148897594388],[44.98862451560354,40.29968653148587],[44.989431542833024,40.30030880397734],[44.98981221208395,40.302604774894085],[44.990725807901704,40.305008034171415],[44.99045173069571,40.30584488338407],[44.98952290368537,40.304621796073285],[44.988426563781346,40.30402098125395],[44.98606631595639,40.30363474315579],[44.98481762914898,40.303033928336454],[44.98353845817334,40.30511532253202],[44.984178047252975,40.30612383312162],[44.98127307207491,40.31094947327173],[44.981775626947694,40.31155028809106],[44.98203451712109,40.31101384628809],[44.983009151924286,40.31101384628809],[44.98319189409289,40.31200089920556],[44.982887323486096,40.31273046005764],[44.98335790063103,40.31359036621386],[44.982556083965065,40.3140713669855],[44.98187079015793,40.313813874920086],[44.98169565821487,40.315680692394444],[44.98083811021532,40.31679980178748],[44.980099493152075,40.314686221083754],[44.97799780871019,40.31424633880531],[44.97779220497881,40.3152870359031],[44.97876691238365,40.31727187057411],[44.97742589878462,40.317773071055434],[44.97666212175223,40.31889230814731],[44.9763613238227,40.320346065433355]
						,[44.975455112805086,40.32018513289246],[44.9752152310244,40.31828612890992],[44.97446131023793,40.317969628246104],[44.973405080060026,40.31949385902254]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap6 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.02626024216551,40.080675956233556],[45.02206020384321,40.048489448054845],[45.01098035365183,40.052866813167164],[45.00887980908246,40.03625857494695],[44.98793100651548,40.041622992976684],[44.98902735596179,40.053253051265266],[44.93579960822294,40.08295046947805],[44.94823503743184,40.12582289837191],[45.02193845934748,40.1024769511063],[45.01938175692899,40.08273589275669],[45.02626024216551,40.080675956233556]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap7 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.034949077544056,40.01133130677343],[45.055226578517164,40.00556992180931],[45.05682352358891,40.00687883980859],[45.05770562637922,40.012028681117165],[45.057918545728704,40.0166635382949],[45.05911300733229,40.01673763327831],[45.08331925974363,40.01081531577338],[45.08650182288253,40.010702446405006],[45.08790028278346,40.00825627178342],[45.09116828838822,40.009436443749934],[45.095598795365035,40.01431806415703],[45.09319359738099,40.02268119186548],[45.09363246812799,40.02729190916207],[45.098168216885135,40.03054140538361],[45.10280665411506,40.04272332817702],[45.058312469794004,40.04288895458372],[45.05746079366864,40.045335129205306],[45.05764329682869,40.05035622448109],[45.054479826720836,40.05499108165883],[45.05247214856059,40.05846722454214],[45.043102045567835,40.076105431024054],[45.034949077544056,40.01133130677343]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap8 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.02681763999884,39.88393442834458],[45.029031157136885,39.90359607812369],[45.02833120640356,39.9042827236315],[45.02872683178987,39.9047547924181],[45.02738778091167,39.906256829466464],[45.02714431372749,39.908230935301425],[45.02607913253926,39.90900341149771],[45.02373566368661,39.90926090356313],[45.02282259772991,39.905527268614414],[45.0208746746913,39.906342660154934],[45.01895712278554,39.90471187707387],[45.01621765078895,39.90608516808947],[45.0158371581487,39.906922017302065],[45.0140564186534,39.90878883477647],[45.01831792456665,39.938100014891134],[45.01226040281693,39.93994537469338],[45.015749290177766,39.96479481573521],[45.013222750456684,39.96552437658726],[44.98956524348183,39.97410744543484],[44.99126516735308,39.95171116010526],[44.990960639927806,39.94707630292753],[44.98596715872473,39.94931155761251],[44.981154987265946,39.909571948847876],[45.002045389501916,39.90373546203141],[45.000312280054146,39.89143058100288],[45.02681763999884,39.88393442834458]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap9 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.948515133214315,40.1258942308815],[44.95760814787687,40.15788469352847],[44.95975231100387,40.160717809830395],[44.9602702903708,40.16483768287726],[44.96334760012837,40.16685470405649],[44.96922754181121,40.16960128608768],[44.969775899236815,40.170856559906625],[44.96990537174307,40.17154320541444],[44.96827552004706,40.17593129936272],[44.99337311370679,40.2111218816381],[45.00489357634756,40.19367931745718],[45.002387612712,40.19022952467975],[45.001073694716,40.19035403784918],[45.000234037456295,40.18800267221586],[45.00654674846481,40.17887708100408],[45.006450391902625,40.17801188956101],[45.008441962727936,40.1758197647257],[45.00898107608316,40.175882416602484],[45.01762185064769,40.164197853563834],[45.02574393349936,40.163370872617456],[45.032581177455945,40.16048177543693],[45.02192948620713,40.1026318914037],[44.948515133214315,40.1258942308815]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap10 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.93533888358992,39.983315407104264],[44.95082192326063,39.97825139648414],[44.957464930747044,39.988036094970475],[44.96843334017367,39.984474121398605],[44.97318566198185,40.02159589416468],[44.92857135352203,40.0335263598629],[44.92445557102909,40.00528806335405],[44.92628484436214,40.002198158568916],[44.93183328140551,40.00056737548785],[44.93671935314002,39.99337897588736],[44.93533888358992,39.983315407104264]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap11 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.01996587650573,40.08319512117902],[45.043074023209186,40.07615355774999],[45.052535390641665,40.05868701264482],[45.057736950265,40.05044726655105],[45.057432778604216,40.04529742524246],[45.058314871932915,40.04302291199784],[45.09944294607271,40.04289761293956],[45.096646560830486,40.048433692346286],[45.100962662836935,40.05238190401621],[45.09853109646806,40.05942002047129],[45.09768002363007,40.06796017397466],[45.09999004883736,40.07182255495606],[45.10439707275448,40.0735391687256],[45.08694933127138,40.090061576257206],[45.07466582141915,40.100017936120516],[45.04942155620498,40.12199059237042],[45.02819285681121,40.13228695935855],[45.022091105230636,40.10275374318988],[45.01996587650573,40.08319512117902]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap12 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.99171497423024,40.272918306700355],[44.99399885995198,40.27542885433831],[44.99383137811233,40.276179872862464],[44.994257694553085,40.27658756863273],[44.99489716322788,40.27609404217399],[44.995582300264985,40.27641590725578],[44.99648057855309,40.275900923124915],[44.996648052598275,40.276480280272146],[44.99634355396778,40.277896486632],[44.995978153461,40.277896486632],[44.99596292838899,40.27684506069817],[44.995582300264985,40.27697380673088],[44.995293021188516,40.277681909910825],[44.994821036381374,40.277917944304114],[44.994166341298836,40.27999933849968],[44.995216894871426,40.28126534115472],[44.995445273517284,40.28107222210564],[44.995627975774255,40.27961310040155],[44.99731794385151,40.28044994961417],[44.99629787903272,40.2818232406298],[44.99602382865263,40.28227385174432],[44.99667850237173,40.28317507397331],[44.995978153461,40.283775888792654],[44.995430048322255,40.28476294171012],[44.99495806465128,40.28527792584099],[44.99514076847202,40.28605040203727],[44.9959020280797,40.28615769039787],[44.99617607904619,40.284977518431326],[44.99667850239125,40.28510626446404],[44.996754626753614,40.28615769039787],[44.996526253380566,40.28834637295399],[44.99739406739772,40.28873261105212],[44.99739406739772,40.289440714232065],[44.996526253380566,40.29027756344472],[44.995765002121175,40.29008444439564],[44.995704101580614,40.29066380154285],[44.99628265408524,40.29111441265734],[44.99619130410019,40.29199417721423],[44.99628265410472,40.29272373806628],[44.99507986730259,40.293238722197145],[44.9947296840897,40.29225166927968],[44.9940749879565,40.2920585502306],[44.99297873571124,40.292423330656625],[44.992324019440346,40.291886888853654],[44.9920042715482,40.29167231213244],[44.99197381927433,40.29109295498524],[44.992324019440346,40.290535055510134],[44.9920804021616,40.288003050200075],[44.99165406941524,40.28774555813465],[44.99122773347615,40.288153253904916],[44.99090797942663,40.28954800259267],[44.9905425440281,40.29019173275624],[44.990451184811974,40.29100712429676],[44.99010097314483,40.291050039641],[44.989126459722804,40.290406309477426],[44.988654423787494,40.29051359783803],[44.988228065385385,40.29117878567371],[44.98806818020052,40.291500650755424],[44.987969203408355,40.29209073673871],[44.98872294551245,40.29588874470371],[44.989179753993426,40.29685433994907],[44.9880834074817,40.296446644178815],[44.987428634912774,40.29861386906283],[44.98637793761314,40.29867824207919],[44.98558609495255,40.299794041029394],[44.98526630921816,40.30054505955355],[44.98595156218376,40.30157502781528],[44.9873524980984,40.30157502781528],[44.988570675223855,40.29972966801303],[44.98933202269215,40.300330482832365],[44.98969746586069,40.30258353840488],[44.99064151652258,40.30500825535434],[44.99041311860439,40.305716358534276],[44.989545198158865,40.30453618656771],[44.98849453991708,40.30393537174837],[44.98601247315764,40.30354913365024],[44.98479424129987,40.302969776503005],[44.983434642081406,40.305113219148154],[44.984104688826235,40.306078814393516],[44.98118079064477,40.31103553665304],[44.98175949074609,40.31163635147238],[44.98203360979424,40.31114282501365],[44.98295494470248,40.31111063850546],[44.98313007285109,40.311840199357505],[44.98284073049921,40.31267704857016],[44.98323667229435,40.31353535545492],[44.98255138667722,40.31394305122518],[44.98180517740438,40.31370701683186],[44.98166811751502,40.31561674965048],[44.9808609802494,40.31673254860066],[44.98012997813746,40.31465115440512],[44.97798260517149,40.31422200096273],[44.97776938641594,40.3153163422408],[44.97872886453025,40.31722607505942],[44.977449556786,40.31771960151816],[44.97665758999259,40.3188783158126],[44.97635298444012,40.32031597984456],[44.97546961912626,40.320165776139746],[44.97522592973227,40.318277500993254],[44.97446439365669,40.31795563591147],[44.97339822618384,40.319479130631834],[44.9391865054953,40.267017804509244],[44.94969940601362,40.25246950281237],[44.940586686665924,40.24641843927478],[44.94995958354865,40.22310599586381],[44.98851233334581,40.27732953330881],[44.99171497423024,40.272918306700355]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap13 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.10894753678601,40.16038639017357],[45.11690906565494,40.16051513620636],[45.1144781830273,40.16420585581086],[45.120676727665,40.16506416269562],[45.11970445176276,40.16922695108673],[45.11675713852677,40.16845447489044],[45.11295882846014,40.17450553842803],[45.11058855402413,40.174977607214664],[45.11043660997535,40.17956954904816],[45.113566575173486,40.17763835855743],[45.116331740455294,40.179869956457814],[45.116574825477656,40.187294311011],[45.116817909495964,40.19205791422137],[45.113991994073,40.19124252268085],[45.113536188069354,40.192787475073416],[45.1136881238111,40.19467575021991],[45.114417409703236,40.1956628031374],[45.11356657526946,40.19742233225113],[45.11450856979926,40.19995433756119],[45.11414392861233,40.200812644445946],[45.11222952389984,40.20158512064223],[45.11222952401515,40.20553333231208],[45.1139312202854,40.20827991434332],[45.113566575384745,40.21231395670172],[45.116422897664904,40.2172063059449],[45.11775985013208,40.225875205481024],[45.1140527680644,40.23617488809822],[45.11538977645213,40.24055225321048],[45.11362734971694,40.24407131143801],[45.107579986318036,40.24407131143796],[45.10493596145775,40.242354697668475],[45.10347713635731,40.249221152746614],[45.098614114983576,40.24776203104251],[45.097033543274534,40.249221152746614],[45.096364826592236,40.250851935827654],[45.10068095007525,40.25703174539793],[45.101288828398495,40.263726539099096],[45.10542222820926,40.272137946569806],[45.10384184620841,40.28003436990965],[45.10068095007525,40.279862708532704],[45.09703354331299,40.286042518103],[45.09131880113538,40.287930793249494],[45.08742758342565,40.29428226419677],[45.083779324449296,40.29256565042723],[45.08608991570212,40.28741580911863],[45.08523865618646,40.28484088846433],[45.08317125848258,40.28569919534911],[45.0821679354124,40.29183608957518],[45.08000921046538,40.289132422888166],[45.079492320472674,40.285098380529774],[45.078184871831745,40.28406841226804],[45.076938206706494,40.28621417947995],[45.078184871831745,40.29166442819823],[45.07514417713331,40.29428226419677],[45.073836628352836,40.28956157633056],[45.072772322211996,40.289990729772924],[45.071555947903754,40.29385311075438],[45.06967051624043,40.29175025888671],[45.06790666860756,40.29059154459227],[45.0649566630985,40.29423934885253],[45.062918940923616,40.296771354162594],[45.063435981831006,40.30089122720946],[45.061610049058885,40.28915189791821],[45.059237628711585,40.282457104217016],[45.04305386217822,40.25971197177069],[45.07725641618053,40.20392202426082],[45.079004770474036,40.20229124117975],[45.07927842105428,40.20104669619684],[45.08856655551009,40.1972486882317],[45.095695571596224,40.17282011984539],[45.093179919697775,40.16477836155801],[45.09267048420432,40.15913986254801],[45.10894753678601,40.16038639017357]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap14 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.02778939130337,40.13258797594389],[45.03503201208503,40.17271382280661],[45.05900519686523,40.1628432936318],[45.088136638740025,40.15855175920788],[45.11786083226068,40.16061169573129],[45.121749962298935,40.155118531668805],[45.120899237906585,40.1364074415809],[45.11251284271477,40.12954098650278],[45.11688850805323,40.120957917655126],[45.11470071760322,40.10791165300669],[45.10910931394248,40.10190350481333],[45.10996021529062,40.077012605155126],[45.10436834408968,40.07392270036996],[45.04914275558793,40.1228725767898],[45.02778939130337,40.13258797594389]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap15 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.04305729424764,40.07610547207163],[45.026442846368475,40.08061158321666],[45.01725108438557,40.01608836315439],[45.03487934125753,40.01123056524335],[45.04305729424764,40.07610547207163]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgfap16 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.91115034709054,40.22805769334605],[44.911302824335095,40.24453718553355],[44.915663500585225,40.25440771470836],[44.91569399373072,40.295563529832826],[44.91700518018612,40.297494720323556],[44.9496226782771,40.252519439561844],[44.94047946684005,40.24655420671272],[44.93191399574427,40.22810060869024],[44.91115034709054,40.22805769334605]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgmamh1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[45.040994,40.192091],[45.041227,40.192375999999996],[45.041118,40.193380999999995],[45.041883,40.193934],[45.042195,40.193766],[45.042336999999996,40.192495],[45.042747,40.193234],[45.043791999999996,40.193194],[45.047607,40.201471999999995],[45.044264999999996,40.204468999999996],[45.053052,40.217177],[45.058575999999995,40.22457],[45.059261,40.224924],[45.063589,40.231223],[45.070425,40.235274],[45.070828999999996,40.23489],[45.071383999999995,40.235385],[45.072340999999994,40.235239],[45.075534999999995,40.236824],[45.07689,40.234179999999995],[45.07684,40.233557999999995],[45.075962,40.232471],[45.076186,40.23119],[45.075635,40.228714],[45.074239,40.228235],[45.073155,40.228412999999996],[45.071861999999996,40.22926],[45.070727,40.228426999999996],[45.071261,40.227835999999996],[45.071405,40.226727],[45.072154,40.226563999999996],[45.072159,40.225300999999995],[45.072860999999996,40.225137],[45.072984,40.223974],[45.073926,40.223669],[45.074132,40.2226],[45.075390999999996,40.223265999999995],[45.076313999999996,40.223333],[45.076499999999996,40.22484],[45.077663,40.225775],[45.078572,40.226032],[45.079313,40.225359999999995],[45.080715,40.225797],[45.081018,40.225201],[45.081699,40.225119],[45.081598,40.224219],[45.082056,40.223303],[45.081935,40.222654999999996],[45.081255999999996,40.22177],[45.081315,40.220788999999996],[45.083006,40.218682],[45.083945,40.218657],[45.084129999999995,40.219069999999995],[45.10004,40.212941],[45.100398,40.211071],[45.102328,40.205149],[45.103248,40.204021999999995],[45.104386999999996,40.203818],[45.105968999999995,40.197646999999996],[45.112238,40.201516],[45.112052,40.202067],[45.112452,40.204895],[45.114225999999995,40.208438],[45.113566999999996,40.210598999999995],[45.113701999999996,40.211804],[45.11595,40.215238],[45.117312,40.221928999999996],[45.117667,40.225429999999996],[45.117475,40.228786],[45.116405,40.232017],[45.114323,40.236495],[45.115435,40.240316],[45.115280999999996,40.24126],[45.114269,40.243077],[45.113034,40.243694],[45.110358,40.2433],[45.108151,40.24435],[45.107214,40.243803],[45.105927,40.242380999999995],[45.105345,40.242348],[45.104838,40.242905],[45.104552,40.243961999999996],[45.104468,40.247133999999996],[45.103598,40.248646],[45.103204999999996,40.248985],[45.101955,40.249049],[45.098504999999996,40.248079],[45.097654,40.248591],[45.096927,40.24984],[45.096833,40.250491],[45.09767,40.252381],[45.099533,40.254773],[45.100254,40.256223999999996],[45.100622,40.257819999999995],[45.100547,40.261331999999996],[45.101101,40.263217],[45.104734,40.270300999999996],[45.105050999999996,40.272241],[45.105025999999995,40.274836],[45.104758,40.277187999999995],[45.104017999999996,40.279776999999996],[45.103124,40.280353999999996],[45.101828999999995,40.280062],[45.100727,40.280457999999996],[45.098431,40.284742],[45.097559,40.285607999999996],[45.092644,40.286792999999996],[45.091077999999996,40.287666],[45.089566999999995,40.289215999999996],[45.088277999999995,40.293012999999995],[45.087475,40.293977999999996],[45.086524999999995,40.293914],[45.084067,40.292843999999995],[45.08433,40.291889999999995],[45.085530999999996,40.289916],[45.086317,40.287389999999995],[45.086121,40.285806],[45.085643999999995,40.285016999999996],[45.084578,40.284832],[45.083078,40.28561],[45.083209,40.286797],[45.082271999999996,40.291872],[45.08032,40.289671],[45.079864,40.288387],[45.079474999999995,40.285347],[45.078747,40.284348],[45.078208,40.284248],[45.077507999999995,40.284825],[45.076968,40.286048],[45.07703,40.287639],[45.078026,40.289946],[45.078122,40.291089],[45.077593,40.292263],[45.076665,40.293123],[45.07513,40.294028999999995],[45.074825,40.293693999999995],[45.074393,40.292967],[45.074165,40.290541],[45.073513999999996,40.28949],[45.072672999999995,40.29025],[45.072219,40.291340999999996],[45.072004,40.293025],[45.071467999999996,40.293689],[45.069224,40.291115],[45.067904999999996,40.290625],[45.066552,40.291903999999995],[45.065611999999994,40.293609],[45.063390999999996,40.29549],[45.062898,40.296774],[45.063401,40.299504],[45.063328999999996,40.301642],[45.062154,40.305391],[45.059867,40.309187],[45.059478999999996,40.310354],[45.060033999999995,40.312323],[45.059996999999996,40.315065],[45.061301,40.317208],[45.061695,40.318396],[45.061665,40.319559],[45.060983,40.321717],[45.059083,40.324389],[45.057213999999995,40.323492],[45.054891999999995,40.320295],[45.053855,40.320119999999996],[45.052965,40.321070999999996],[45.052276,40.322945999999995],[45.052316,40.326172],[45.053267,40.327709999999996],[45.054572,40.328297],[45.056616,40.328223],[45.057348999999995,40.328979],
						[45.057376999999995,40.33011],[45.056822,40.331781],[45.05545,40.333293999999995],[45.051766,40.336110999999995],[45.050891,40.337683],[45.050982,40.338953],[45.051463,40.339977],[45.054925999999995,40.34193],[45.055690999999996,40.342783999999995],[45.056427,40.345233],[45.056277,40.346975],[45.054842,40.348199],[45.054010999999996,40.348434],[45.052816,40.347621],[45.050273,40.344730999999996],[45.049413,40.342438],[45.047695999999995,40.339825999999995],[45.046645,40.337033],[45.045935,40.336622999999996],[45.044891,40.338395],[45.044503999999996,40.339889],[45.044759,40.342698999999996],[45.045708,40.344256],[45.047318,40.345786],[45.048711,40.34849],[45.048179999999995,40.350048],[45.046422,40.350943],[45.034048999999996,40.333728],[45.030653,40.328252],[45.025005,40.321309],[45.024637,40.320071999999996],[45.020621999999996,40.313578],[44.997209999999995,40.281112],[44.997155,40.279959999999996],[44.995495,40.279722],[44.995360999999995,40.280943],[44.995041,40.281088],[44.994293,40.279869],[44.994733,40.279253],[44.994811,40.278079],[44.995764,40.276874],[44.995982,40.277832],[44.996351,40.277811],[44.996629999999996,40.276173],[44.99637,40.275931],[44.995503,40.276396],[44.994915,40.276067999999995],[44.994116999999996,40.276512],[44.993922,40.275684],[44.995053999999996,40.274471999999996],[44.995446,40.273415],[44.993944,40.273641999999995],[44.993542,40.273204],[44.994191,40.272543999999996],[44.995556,40.272484999999996],[44.995939,40.271649],[44.99572,40.269404],[44.995031999999995,40.270022999999995],[44.994284,40.269872],[44.994398,40.268443999999995],[44.994022,40.266884999999995],[44.995325,40.267111],[44.996097999999996,40.266481],[44.997232,40.266515],[44.997665999999995,40.265729],[44.997442,40.265049],[44.996120999999995,40.26537],[44.995799,40.264714],[44.995982,40.263697],[44.996932,40.262437],[44.997192999999996,40.26112],[44.998807,40.258891],[44.998852,40.258209],[44.998146,40.257038],[44.998211999999995,40.256371],[44.998622999999995,40.256267],[44.9998,40.257221],[45.000647,40.257374],[45.001594,40.256929],[45.001495,40.256021],[44.999769,40.25419],[45.001107999999995,40.251117],[45.00157,40.250873999999996],[45.002359999999996,40.251467999999996],[45.002407999999996,40.252148999999996],[45.001968999999995,40.253492],[45.002213,40.254056999999996],[45.002716,40.254185],[45.003481,40.25331],[45.003537,40.25105],[45.004084999999996,40.250135],[45.006620999999996,40.250783999999996],[45.007236,40.250541],[45.007951999999996,40.249451],[45.00792,40.248548],[45.007044,40.247476],[45.0073,40.246537],[45.008033999999995,40.246649999999995],[45.008027,40.247654],[45.008466999999996,40.24816],[45.009657,40.247617999999996],[45.009586999999996,40.246629999999996],[45.0085,40.244602],[45.008418999999996,40.243837],[45.010056,40.242373],[45.009994,40.240293],[45.010677,40.23762],[45.010594999999995,40.235792],[45.010836,40.234445],[45.012504,40.230385],[45.013396,40.229363],[45.013714,40.227435],[45.014767,40.226243],[45.014857,40.224602],[45.016182,40.222283],[45.016875999999996,40.218582999999995],[45.01761,40.21797],[45.018139,40.218094],[45.020292999999995,40.220161],[45.022303,40.221250999999995],[45.022928,40.219764],[45.023021,40.21843],[45.02341,40.217498],[45.024097,40.217209],[45.025203999999995,40.21794],[45.025884999999995,40.216122999999996],[45.026795,40.216234],[45.027592999999996,40.215575],[45.028165,40.214121999999996],[45.030397,40.211276999999995],[45.030812,40.210094999999995],[45.03046,40.209624999999996],[45.030456,40.20804],[45.031515,40.207642],[45.031366999999996,40.206412],[45.030749,40.205993],[45.030882999999996,40.203204],[45.031209,40.202963],[45.032364,40.203216],[45.033066,40.202518999999995],[45.033577,40.202605],[45.033611,40.202196],[45.033001999999996,40.201752],[45.033274,40.201161],[45.035301,40.200624],[45.037228999999996,40.199259],[45.038804,40.197185999999995],[45.039429999999996,40.197244],[45.039708999999995,40.196082],[45.040822999999996,40.195457],[45.04029,40.194142],[45.040523,40.192854]
]],},properties:{}},{
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shovgcrb1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.968236,40.175981],[44.984654,40.199864],[44.993212,40.210871999999995],[45.005068,40.193522],[45.002313,40.190368],[45.001101999999996,40.190197],[45.000817,40.18981],[45.000166,40.187878999999995],[45.006736,40.178976999999996],[45.011798,40.198744],[45.012285,40.199731],[45.012715,40.200123],[45.022568,40.203627999999995],[45.027255,40.2113],[45.027015,40.212153],[45.028048,40.214441],[45.027761999999996,40.215328],[45.026795,40.216234],[45.025884999999995,40.216122999999996],[45.025203999999995,40.21794],[45.024097,40.217209],[45.02341,40.217498],[45.023094,40.218123],[45.022928,40.219764],[45.022386,40.221215],[45.021909,40.221154],[45.020467,40.220288],[45.018971,40.218641999999996],[45.017951,40.218002],[45.017514,40.218016],[45.016875999999996,40.218582999999995],[45.016182,40.222283],[45.014857,40.224602],[45.014767,40.226243],[45.013714,40.227435],[45.013396,40.229363],[45.012504,40.230385],[45.011358,40.232828999999995],[45.010836,40.234445],[45.010594999999995,40.235792],[45.010677,40.23762],[45.009994,40.240293],[45.010158,40.241436],[45.010056,40.242373],[45.008418999999996,40.243837],[45.0085,40.244602],[45.009586999999996,40.246629999999996],[45.009657,40.247617999999996],[45.009115,40.248113],[45.008466999999996,40.24816],[45.008027,40.247654],[45.008033999999995,40.246649999999995],[45.007717,40.246418],[45.0073,40.246537],[45.007045999999995,40.246998],[45.007044,40.247476],[45.007284999999996,40.248034],[45.00792,40.248548],[45.007951999999996,40.249451],[45.007236,40.250541],[45.006620999999996,40.250783999999996],[45.005888,40.250744999999995],[45.004540999999996,40.250077999999995],[45.004084999999996,40.250135],[45.003537,40.25105],[45.003600999999996,40.252809],[45.003481,40.25331],[45.003198999999995,40.253841],[45.002716,40.254185],[45.002213,40.254056999999996],[45.001968999999995,40.253492],[45.002407999999996,40.252148999999996],[45.002359999999996,40.251467999999996],[45.00157,40.250873999999996],[45.001107999999995,40.251117],[45.000443999999995,40.252733],[45.000008,40.253256],[44.999769,40.25419],[45.001495,40.256021],[45.001594,40.256929],[45.000647,40.257374],[44.9998,40.257221],[44.998622999999995,40.256267],[44.998211999999995,40.256371],[44.998146,40.257038],[44.998852,40.258209],[44.998807,40.258891],[44.997309,40.260904],[44.996838,40.262675],[44.995867999999994,40.264019999999995],[44.995793,40.264893],[44.995940999999995,40.265298],[44.996322,40.265336999999995],[44.997188,40.264913],[44.997631999999996,40.265453],[44.997582,40.266006999999995],[44.997232,40.266515],[44.996097999999996,40.266481],[44.995425,40.267087],[44.994256,40.266726],[44.99397,40.267035],[44.994398,40.268443999999995],[44.994284,40.269872],[44.995031999999995,40.270022999999995],[44.99572,40.269404],[44.995943,40.271519],[44.995556,40.272484999999996],[44.994191,40.272543999999996],[44.993598999999996,40.272973],[44.993587,40.273416999999995],[44.993944,40.273641999999995],[44.995315,40.273253],[44.995446,40.273415],[44.995053999999996,40.274471999999996],[44.994336,40.274946],[44.994065,40.275495],[44.991686,40.272971],[44.988524999999996,40.277311],[44.982431999999996,40.269141999999995],[44.957018,40.232886],[44.94988,40.222986999999996],[44.953553,40.213981],[44.958673,40.200398]
]],},properties:{}},{
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });














































































































	giagfap1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.806823, 39.955073]
        },
        properties: {
		hintContent: 'ФАП п. Гончарка<br/>ул. Садовая, 8',
		balloonContentBody: [
            '<strong>ФАП п. Гончарка',
			'<br/>',
			'ул. Садовая, 8</strong>',
			'<br/>',
			'Обслуживаемое население: 1676',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: Тищенко Любовь Константиновна<li>Участковая медсестра: Мосиенко Ольга Александровна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.789359, 40.132256]
        },
        properties: {
		hintContent: 'ФАП cт. Келермесская<br/>ул. Советская, 108А',
		balloonContentBody: [
            '<strong>ФАП ст. Келермесская',
			'<br/>',
			'ул. ул. Советская, 108А</strong>',
			'<br/>',
			'Обслуживаемое население: 2604',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: Бережная Гелена Хасановна<li>Участковая медсестра: Лихобабина Ирина Борисовна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.932306, 40.178461]
        },
        properties: {
		hintContent: 'ФАП п. Новый<br/>пер. Советский, 8',
		balloonContentBody: [
            '<strong>ФАП п. Новый',
			'<br/>',
			'пер. Советский, 8</strong>',
			'<br/>',
			'Обслуживаемое население: 1293',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая мед.сестра: Мотренко Ирина Владимировна<li>Участковая медсестра: Крипакова Галина Викторовна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.903338, 40.180259]
        },
        properties: {
		hintContent: 'ФАП c. Нижний Айрюм<br/>ул. Пролетарская, 38',
		balloonContentBody: [
            '<strong>ФАП c. Нижний Айрюм',
			'<br/>',
			'ул. Пролетарская, 38</strong>',
			'<br/>',
			'Обслуживаемое население: 273',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая мед.сестра: Зайцева Ирина Владимировна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.836355, 40.235406]
        },
        properties: {
		hintContent: 'ФАП х. Садовый<br/>ул. Луговая, 42',
		balloonContentBody: [
            '<strong>ФАП х. Садовый',
			'<br/>',
			'ул. Луговая, 42</strong>',
			'<br/>',
			'Обслуживаемое население: 211',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующfz мед.сестра: Борисова Ирина Викторовна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.875040, 40.196264]
        },
        properties: {
		hintContent: 'ФАП х. Прогресс<br/>ул. Центральная, 27',
		balloonContentBody: [
            '<strong>ФАП х. Прогресс',
			'<br/>',
			'ул. Центральная, 27</strong>',
			'<br/>',
			'Обслуживаемое население: 1350',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: Носкова Галина Николаевна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.909105, 40.260638]
        },
        properties: {
		hintContent: 'ФАП х. Вольно-Веселый,<br/>ул. Центральная, 27А',
		balloonContentBody: [
            '<strong>ФАП х. Вольно-Веселый',
			'<br/>',
			'ул. Центральная, 27А</strong>',
			'<br/>',
			'Обслуживаемое население: 103',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Ростовцева Галина Анатольевна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.802929, 40.347452]
        },
        properties: {
		hintContent: 'ФАП с. Сергиевское<br/>ул. Почтовая, 9',
		balloonContentBody: [
            '<strong>ФАП с. Сергиевское',
			'<br/>',
			'ул. Почтовая, 9</strong>',
			'<br/>',
			'Обслуживаемое население: 1541',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: Назарова Раиса Алексеевна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.759912, 40.366995]
        },
        properties: {
		hintContent: 'ФАП х. Тамбовский<br/>ул. Молодёжная, 16',
		balloonContentBody: [
            '<strong>ФАП х. Тамбовский',
			'<br/>',
			'ул. Молодёжная, 16</strong>',
			'<br/>',
			'Обслуживаемое население: 887',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Надыкто Наталья Владимировна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.765907, 40.409799]
        },
        properties: {
		hintContent: 'ФАП с. Георгиевское<br/>ул. Октябрьская, 2А',
		balloonContentBody: [
            '<strong>ФАП с. Георгиевское',
			'<br/>',
			'ул. Октябрьская, 2А</strong>',
			'<br/>',
			'Обслуживаемое население: 233',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: Орлик Ольга Александровна</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	giagfap11 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.752884,40.299627]
        },
        properties: {
		hintContent: 'ФАП х. Днепровский<br/>Гиагинский район, х. Днепровский, ул. Крестьянская , 44',
		balloonContentBody: [
            '<strong>ФАП х. Днепровский',
			'<br/>',
			'Гиагинский район, х. Днепровский, ул. Крестьянская , 44</strong>',
			'<br/>',
			'Обслуживаемое население: 271',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: 0000</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: ?',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });
	giagneotl1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.871112, 40.076254]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Поликлиника Гиагинской ЦРБ)<br/>ул. Больничная, 18',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Поликлиника Гиагинской ЦРБ)',
			'<br/>',
			'ул. Больничная, 18</strong>',
			'<br/>',
			'Обслуживаемое население: 6550',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });

	giagpol1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.871734, 40.363333]
        },
        properties: {
		hintContent: 'Поликлиника Дондуковская<br/>ул. Больничная, 18',
		balloonContentBody: [
            '<strong>Поликлиника Дондуковская',
			'<br/>',
			'ул. Больничная, 18</strong>',
			'<br/>',
			'Обслуживаемое население: 6550',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#blueHomeCircleIcon',
    });

	giagcrb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.871112, 40.076254]
        },
        properties: {
		hintContent: 'Гиагинская ЦРБ<br/>ул. Братская, 2',
		balloonContentBody: [
            '<strong>Гиагинская ЦРБ',
			'<br/>',
			'ул. Братская 2</strong>',
			'<br/>',
			'Обслуживаемое население: 14338',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медсестра: ???</li></ul>',
			'Укладка: ?',
			'<br/>',
			'Авто: Есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#nightHomeCircleIcon',
    });



		var gran_giagfap1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.79846079703696,39.954806187333965],[44.79354650200287,39.95775511177839],[44.800451372185556,39.98147475530503],[44.784010660298684,39.99083030034895],[44.79363729990001,40.02623545934548],[44.78556936894968,40.030784485834666],[44.792842781492176,40.05722033788541],[44.859101366804914,40.017802594202465],[44.847440286737005,39.97574555684887],[44.830452944263165,39.984683243126106],[44.82245128186151,39.95528623232285],[44.83057509844172,39.95056554445659],[44.827154684596536,39.93906423220074],[44.810461966316545,39.948484150260946],[44.80919415948193,39.943591801017796],[44.80606270912526,39.94556590685276],[44.80520782152535,39.94770456797815],[44.803328841145415,39.94894911296101],[44.80410793803679,39.95199610240199],[44.79846079703696,39.954806187333965]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap2 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.773976,40.023734999999995],[44.777142999999995,40.035402999999995],[44.785601,40.030702],[44.799428999999996,40.078967],[44.799105999999995,40.079903],[44.797899,40.081019],[44.797838,40.081931],[44.804277,40.10385],[44.805595,40.103426],[44.806416,40.102533],[44.808554,40.102464],[44.81008,40.099925999999996],[44.811856999999996,40.098946],[44.812568999999996,40.098895],[44.81518,40.100204999999995],[44.818698,40.113544999999995],[44.836028999999996,40.173421999999995],[44.834112,40.172671],[44.833771,40.174203],[44.833048,40.174186],[44.832681,40.173579],[44.832246,40.174361],[44.831781,40.173733],[44.831886,40.173147],[44.832277999999995,40.173032],[44.831826,40.172198],[44.831964,40.170987],[44.831064999999995,40.170789],[44.830585,40.17244],[44.82872,40.173777],[44.828544,40.176243],[44.827284,40.176559],[44.826813,40.17837],[44.825880999999995,40.17799],[44.825778,40.202746],[44.798351,40.20299],[44.798581,40.265906],[44.771684,40.265867],[44.771637999999996,40.253184999999995],[44.746722999999996,40.253447],[44.745846,40.24717],[44.744653,40.242219999999996],[44.744530999999995,40.195751],[44.741188,40.197731999999995],[44.738425,40.198304],[44.736622999999994,40.199186],[44.735876999999995,40.198142999999995],[44.735433,40.19871],[44.734426,40.19835],[44.733461999999996,40.198623999999995],[44.732299,40.199795],[44.73148,40.199943],[44.731314999999995,40.200629],[44.729279999999996,40.199539],[44.728746,40.198623999999995],[44.727433,40.198575],[44.727229,40.198015],[44.726276999999996,40.197537],[44.726282999999995,40.196549],[44.712284,40.147442],[44.7204,40.142268],[44.71546,40.124632999999996],[44.757110999999995,40.101095],[44.753831999999996,40.089315],[44.774474,40.077933],[44.768083999999995,40.053987],[44.76462,40.042359],[44.768861,40.039961],[44.765451999999996,40.028513]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap3 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.9439399339748,40.10982746901325],[44.957592427947766,40.157806823871596],[44.96175046314785,40.16445857167093],[44.96938335660219,40.169694374225394],[44.96995698171655,40.17157178997831],[44.94060728344144,40.24654907353039],[44.9319427578144,40.22811156876155],[44.91362632902072,40.185915056539145],[44.914145255490446,40.17874822769375],[44.91169814272005,40.17882332954612],[44.91177396126326,40.17450497303215],[44.920870607223264,40.13160572204811],[44.91696771627958,40.1170145050071],[44.92263901683454,40.115212060549084],[44.92593177143146,40.11263713989481],[44.92916336433261,40.1170145050071],[44.93343122539036,40.11486873779519],[44.93532117613812,40.117958642580355],[44.941356406002804,40.11495456848366],[44.942514609398465,40.1092897430442],[44.9439399339748,40.10982746901325]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap4 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.91359330639861,40.18594999541367],[44.914098945150535,40.17879954798955],[44.911660650054735,40.17886235546991],[44.91175969307696,40.174508483450374],[44.92059937042595,40.131568335272206],[44.896032848306234,40.14549619516204],[44.90123032968597,40.164605955233476],[44.895443186476626,40.16703237523234],[44.89523269014131,40.18608727765389],[44.89577868836666,40.19759419911763],[44.90644304403436,40.19762467733628],[44.906513818969756,40.228163455035016],[44.91112670095756,40.22821691846271],[44.93173983780541,40.228210880652576],[44.91359330639861,40.18594999541367]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap5 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.79835232384901,40.20298967257414],[44.79858232117657,40.26591649990541],[44.87948018873791,40.26612571220821],[44.880177766513434,40.20377553949407],[44.86533224105892,40.20273451175325],[44.79835232384901,40.20298967257414]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap6 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.89755198763377,40.266187452990295],[44.897274342321445,40.26376273604084],[44.89634548845294,40.263794922548975],[44.896155676784865,40.26168670626325],[44.89689612713819,40.26149090500518],[44.895654108727875,40.252584629971174],[44.89514343777068,40.251950958091406],[44.89487952617289,40.24976730467712],[44.89527196393244,40.24908317374027],[44.89427701111639,40.24255056986542],[44.893689723725224,40.24271749546703],[44.89252381428455,40.238724000565206],[44.89286096022437,40.238274887715846],[44.89088839884052,40.23227017086401],[44.89262701760174,40.23212436503892],[44.89250755249389,40.228046625553176],[44.90652018782397,40.22817376446794],[44.90643850269104,40.197634291116785],[44.895732952322746,40.1976822239677],[44.89517957129236,40.18613228503825],[44.895427934556935,40.16705383290444],[44.87639796871693,40.15756417740967],[44.86345854979942,40.156105055705574],[44.852347844483255,40.16786386002686],[44.845417822964954,40.174258246318324],[44.8433722376856,40.17086793412345],[44.83596782875331,40.17350722779412],[44.832219458687135,40.174204602137955],[44.83132240909898,40.17077673901693],[44.82855291832242,40.174384310141946],[44.82582433309001,40.17867718567025],[44.82568757280749,40.202700390712096],[44.86533351047871,40.202684297457985],[44.88019247473075,40.20375114528325],[44.87948837417389,40.26592944330375],[44.89755198763377,40.266187452990295]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap7 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.89757773492126,40.266201038366525],[44.897285609571064,40.263742180839984],[44.89636003239778,40.2637733903137],[44.89617953780403,40.26171515896489],[44.89692955747864,40.261499241139184],[44.89568776534665,40.25258417852917],[44.89517879272261,40.25194188936032],[44.894909580499856,40.24983332305173],[44.89532927159442,40.249122362651356],[44.894351328496164,40.24246529834225],[44.89374033167165,40.24260119673399],[44.892641696670054,40.23879648857634],[44.89291601825375,40.23840132370009],[44.89093303122971,40.23231805672313],[44.89267180641923,40.23218059977507],[44.89252502415461,40.22809697224543],[44.91112717746946,40.22821960087998],[44.91127184958511,40.24445619867218],[44.91172165534858,40.24631228731043],[44.91260600873339,40.24837222383387],[44.915640151572305,40.25442328737149],[44.91567630439614,40.30725867584322],[44.9156763044356,40.3233948452768],[44.9156458113595,40.325090001374214],[44.91525702323116,40.32559425666903],[44.90962310957879,40.32981068924035],[44.90838861341504,40.33223873370565],[44.90742795106498,40.33271080249225],[44.906177540938174,40.3344488739339],[44.900268220405806,40.334309399064935],[44.900125516965005,40.29261330591258],[44.89667256187801,40.266178124413955],[44.89757773492126,40.266201038366525]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap8 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.8163780561865,40.34294747953516],[44.81663610299977,40.349061084202475],[44.81666940048712,40.34957317315588],[44.81717259630604,40.349690466558165],[44.8174314241249,40.35008670969805],[44.817330343395085,40.352532160525264],[44.817686924953534,40.35293949439837],[44.81800774966832,40.35288566926948],[44.81873355826638,40.35174832217286],[44.81938698107339,40.350530554042926],[44.81888204498629,40.34908482076531],[44.81998924006017,40.348855480585236],[44.82058533595337,40.34973859224871],[44.82256005971599,40.349064349130245],[44.82296179729372,40.34984302652122],[44.824112821662666,40.35154128321592],[44.825080214183,40.35157502002279],[44.825724693197785,40.35195896348654],[44.82649132777068,40.351935211180106],[44.826898902477815,40.354658040904916],[44.83376533627981,40.354363829830284],[44.834118256644494,40.35541176067131],[44.834489385979126,40.35994240575525],[44.834648230526504,40.39232876646549],[44.82547216345814,40.392262355054065],[44.825264547313786,40.41499771870111],[44.811149688142955,40.42965301966637],[44.789457457292094,40.43064132171277],[44.787962470759425,40.36743068342319],[44.78737835847392,40.359062801263924],[44.785490971932035,40.34917772803564],[44.78604999969894,40.26594612552717],[44.80766001237421,40.265963377222114],[44.80752860444675,40.33922797471203],[44.815883635864374,40.339485466777454],[44.8163780561865,40.34294747953516]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap9 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.78788990639049,40.371053835211825],[44.7872915995365,40.35937013274295],[44.78529979687257,40.34947814589599],[44.785550028100126,40.32920545752617],[44.72652922524238,40.32874794823273],[44.72650204564176,40.34579391497987],[44.72289372606909,40.34816918713984],[44.71928329825101,40.3464525733703],[44.710562261654665,40.34198937756953],[44.70854246448047,40.343920568060234],[44.70845065389269,40.366880277227715],[44.71628463501217,40.36739526135858],[44.71732500531673,40.36911187512813],[44.71725733126668,40.404171750736104],[44.72466256619759,40.40423812514416],[44.72490732521985,40.40355147963635],[44.73530861991309,40.404838939963476],[44.73546156611893,40.406941791831116],[44.74320011041367,40.407328029929296],[44.75439315525172,40.40020408278574],[44.75803195388779,40.38702907210456],[44.76362730323633,40.380033870993685],[44.76326041183859,40.37368240004641],[44.78788990639049,40.371053835211825]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap10 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.81099260268659,40.42984535607182],[44.798221722086474,40.44284870537598],[44.76301068778921,40.46525051506836],[44.762460343838825,40.46456386956055],[44.76215459495935,40.430145763481406],[44.73533407853373,40.42993118676017],[44.73530348928555,40.40697147759269],[44.743103225156624,40.40748646172356],[44.75441860539192,40.400362514579996],[44.75802682519977,40.38727333458729],[44.763622175018234,40.38019230278797],[44.76334700665522,40.37379791649646],[44.787892948058854,40.37122299584216],[44.78944254783334,40.430668411385],[44.81099260268659,40.42984535607182]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagfap11 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						        [44.78593699361393,40.26588566060157],[44.771662623395066,40.26588566060157],[44.77157091362067,40.25313980336281],[44.72695200928424,40.25313980336273],[44.726523695593926,40.328584978533534],[44.78547855747149,40.329014131975924],[44.78593699361393,40.26588566060157]
]],},properties:{}},{
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagpol1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.892503,40.228032999999996],[44.911128,40.228218],[44.911392,40.245191],[44.912172,40.247526],[44.915620999999994,40.254376],[44.915532,40.336828],[44.913554,40.341028],[44.908649,40.349821999999996],[44.91149,40.350061],[44.913694,40.349331],[44.91403,40.349727],[44.91419,40.350904],[44.913055,40.352606],[44.912217,40.355942999999996],[44.911280999999995,40.355612],[44.909689,40.356316],[44.909771,40.357395],[44.910444999999996,40.359187],[44.910326999999995,40.359649],[44.909878,40.359677999999995],[44.908594,40.358537999999996],[44.9079,40.358678999999995],[44.907872999999995,40.359528999999995],[44.908282,40.360555],[44.909186,40.360451],[44.909548,40.36089],[44.909434999999995,40.361836],[44.907773,40.361466],[44.907474,40.362218],[44.908379,40.364069],[44.908027,40.366321],[44.909698,40.369887999999996],[44.907751,40.372946],[44.907469999999996,40.372434],[44.90636,40.372043],[44.905045,40.376017999999995],[44.904379999999996,40.377429],[44.904019999999996,40.377545],[44.90089,40.416733],[44.900124999999996,40.417756],[44.888317,40.418006999999996],[44.876281999999996,40.433999],[44.872304,40.428413],[44.871184,40.430161],[44.870239999999995,40.428725],[44.869932999999996,40.42906],[44.869447,40.428844999999995],[44.869023,40.430012999999995],[44.869115,40.4307],[44.868606,40.431317],[44.868874,40.435333],[44.868379999999995,40.436369],[44.867646,40.436780999999996],[44.867404,40.437684999999995],[44.864857,40.438204999999996],[44.863864,40.437642],[44.862096,40.438016],[44.86112,40.437512999999996],[44.861177999999995,40.436344999999996],[44.860569,40.435739999999996],[44.846444,40.404644],[44.845928,40.394819999999996],[44.845512,40.393409],[44.843627999999995,40.391888],[44.842568,40.389852],[44.841699,40.389647],[44.840793999999995,40.391569],[44.838727,40.399525],[44.836528,40.402564999999996],[44.835302999999996,40.392351999999995],[44.834644,40.392345999999996],[44.834486,40.35998],[44.834223,40.355978],[44.833760999999996,40.354358],[44.826896,40.354634999999995],[44.826491999999995,40.351931],[44.824141999999995,40.351548],[44.823060999999996,40.350508],[44.822596,40.349269],[44.820637999999995,40.349875999999995],[44.819539,40.348741],[44.819054,40.348918],[44.818886,40.349503],[44.819382,40.350297],[44.819314,40.350837999999996],[44.818127,40.352801],[44.817685,40.352931999999996],[44.817302999999995,40.352427],[44.817420999999996,40.350024],[44.816672999999994,40.349557999999995],[44.816344,40.342717],[44.815844,40.339469],[44.80753,40.339228],[44.807656,40.26593],[44.897579,40.266174],[44.897251,40.263753],[44.896398999999995,40.263715999999995],[44.896136,40.261635],[44.896924999999996,40.261393],[44.895691,40.252572],[44.895106,40.25183],[44.894853999999995,40.249765],[44.895289,40.249083999999996],[44.894281,40.242512999999995],[44.89366,40.242663],[44.892517,40.238703],[44.892857,40.238257999999995],[44.890888,40.232259],[44.892627,40.232119999999995]
]],},properties:{}},{
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_giagcrb1 = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.883939,39.933997],[44.892421999999996,39.963260999999996],[44.929666999999995,39.94228],[44.930949,39.951146],[44.930681,39.951718],[44.931349,39.952731],[44.936696,39.993553999999996],[44.932127,40.000240999999995],[44.926496,40.001926],[44.924462999999996,40.005089999999996],[44.928509999999996,40.033442],[44.973228999999996,40.021493],[44.981502,40.056385999999996],[44.936018999999995,40.081987],[44.943948,40.109871999999996],[44.943197,40.109283],[44.942764,40.109894],[44.941337,40.113445999999996],[44.941376999999996,40.115136],[44.935834,40.118117999999996],[44.934101999999996,40.115831],[44.929148999999995,40.116989],[44.926275,40.112794],[44.924113999999996,40.116721],[44.923359999999995,40.116566],[44.921575999999995,40.114703999999996],[44.920379,40.115781999999996],[44.917505999999996,40.116696999999995],[44.917204999999996,40.118708],[44.920773,40.131537],[44.896035,40.145525],[44.901286,40.164570999999995],[44.900081,40.165687],[44.898433999999995,40.165701999999996],[44.897549999999995,40.167983],[44.896618,40.168008],[44.894337,40.165935999999995],[44.889931,40.167936],[44.889210999999996,40.165706],[44.886801999999996,40.163630999999995],[44.887633,40.16156],[44.886879,40.160405],[44.88548,40.160883],[44.882624,40.163573],[44.881049999999995,40.162969],[44.880524,40.161542999999995],[44.877894,40.159541999999995],[44.877624,40.157728],[44.875917,40.154489],[44.874162999999996,40.154454],[44.873661,40.157696],[44.874112,40.159452],[44.872855,40.160595],[44.871589,40.159763],[44.870543999999995,40.160835],[44.867942,40.159019],[44.868016,40.157458],[44.867362,40.156011],[44.866336,40.155173999999995],[44.865704,40.155438],[44.865187,40.15461],[44.864211999999995,40.156684999999996],[44.862035,40.156932],[44.861160999999996,40.158876],[44.859539,40.159380999999996],[44.858042999999995,40.16457],[44.855945999999996,40.165482999999995],[44.855649,40.166954],[44.854428,40.167452],[44.853513,40.166931999999996],[44.852984,40.168614],[44.852564,40.168002],[44.851569999999995,40.168425],[44.850362,40.167767999999995],[44.850474,40.169984],[44.850041,40.170434],[44.848406,40.170111999999996],[44.847099,40.171532],[44.845523,40.174564],[44.84431,40.174413],[44.844679,40.172215],[44.844106,40.171571],[44.842811,40.171473],[44.842645999999995,40.170015],[44.842051999999995,40.169616999999995],[44.839917,40.171014],[44.837103,40.170913999999996],[44.836284,40.171783],[44.836512,40.173210999999995],[44.836028999999996,40.173421999999995],[44.81518,40.100204999999995],[44.811856999999996,40.098946],[44.81008,40.099925999999996],[44.808554,40.102464],[44.806416,40.102533],[44.804277,40.10385],[44.797838,40.081931],[44.797899,40.081019],[44.799428999999996,40.078967],[44.785601,40.030702],[44.793757,40.026168],[44.783974,39.990711],[44.800475999999996,39.981387],[44.793603999999995,39.957710999999996],[44.804092999999995,39.951979],[44.803411999999994,39.948862999999996],[44.804932,39.947994],[44.806016,39.945526],[44.808519,39.943604],[44.809428,39.943936],[44.80994,39.944913],[44.809855999999996,39.946157],[44.810466999999996,39.948420999999996],[44.827062,39.939167999999995],[44.830487,39.950638999999995],[44.822454,39.955349999999996],[44.830428999999995,39.984575],[44.847288999999996,39.975639],[44.842425999999996,39.957820999999996],[44.87063,39.941845],[44.872644,39.942434999999996],[44.874078999999995,39.938744],[44.875505,39.93971],[44.875637999999995,39.938514999999995]
]],},properties:{}},{
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });










































	fap8 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.667005, 40.664935]
        },
        properties: {
		hintContent: 'ФАП х. Казенно-Кужорский<br/>ул. Крупская, 49',
		balloonContentBody: [
            '<strong>ФАП х. Казенно-Кужорский',
			'<br/>',
			'ул. Крупская, 49</strong>',
			'<br/>',
			'Обслуживаемое население: 487',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Ямольская Галина Викторовна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.950829, 40.318267]
        },
        properties: {
		hintContent: 'ФАП а. Хачемзий<br/>ул. Ленина, 4б',
		balloonContentBody: [
            '<strong>ФАП а. Хачемзий',
			'<br/>',
			'ул. Ленина, 4б</strong>',
			'<br/>',
			'Обслуживаемое население: 421 (взрослое: 333, детское: 88)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая мед.сестра: Пашаева Оксана Магамедиминовна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap10 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.574586, 40.718151]
        },
        properties: {
		hintContent: 'ФАП х. Шелковников<br/>ул. Мира, 86',
		balloonContentBody: [
            '<strong>ФАП х. Шелковников',
			'<br/>',
			'ул. Мира, 86</strong>',
			'<br/>',
			'Обслуживаемое население: 241 (взрослое: 175, детское: 66)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Оситлева Дариет Яхьявна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.841873, 40.462289]
        },
        properties: {
		hintContent: 'ФАП х. Игнатьевский<br/>ул. Партизанская, 3',
		balloonContentBody: [
            '<strong>ФАП х. Игнатьевский',
			'<br/>',
			'ул. Партизанская, 3</strong>',
			'<br/>',
			'Обслуживаемое население: 685 (взрослое: 533, детское: 152)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Яковлева Людмила Владимировна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap9 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.573152, 40.682832]
        },
        properties: {
		hintContent: 'ФАП х. Кармалино-Гидройцкий<br/>ул. Свободы Мира, 69В',
		balloonContentBody: [
            '<strong>ФАП х. Кармалино-Гидройцкий',
			'<br/>',
			'ул. Свободы Мира, 69В</strong>',
			'<br/>',
			'Обслуживаемое население: 120 (взрослое: 98, детское: 22)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Агинских Надежда Алексеевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.999933, 40.392491]
        },
        properties: {
		hintContent: 'ФАП а. Егерухай<br/>ул. Шовгенова, 2б',
		balloonContentBody: [
            '<strong>ФАП а. Егерухай',
			'<br/>',
			'ул. Шовгенова, 2б</strong>',
			'<br/>',
			'Обслуживаемое население: 1049 (взрослое: 779, детское: 270)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Ешева Мууминат Заурбиевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.914069, 40.353260]
        },
        properties: {
		hintContent: 'ФАП х. Красный Фарс<br/>ул. Речная, 2',
		balloonContentBody: [
            '<strong>ФАП х. Красный Фарс',
			'<br/>',
			'ул. Речная, 2</strong>',
			'<br/>',
			'Обслуживаемое население: 146 (взрослое: 112, детское: 34)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая медицинская сестра: Кайдаева Фаина Алимурадовна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.950590, 40.347159]
        },
        properties: {
		hintContent: 'ФАП х. Политотдел<br/>ул. Кирова, 27',
		balloonContentBody: [
            '<strong>ФАП х. Политотдел',
			'<br/>',
			'ул. ул. Кирова, 27</strong>',
			'<br/>',
			'Обслуживаемое население: 174 (взрослое: 133, детское: 41)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая акушерка: Вергасова Сания Сафона</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.902494, 40.421731]
        },
        properties: {
		hintContent: 'ФАП пос. Комсомольский<br/>ул. Центральная, 32',
		balloonContentBody: [
            '<strong>ФАП пос. Комсомольский',
			'<br/>',
			'ул. ул. Центральная, 32</strong>',
			'<br/>',
			'Обслуживаемое население: 110 (взрослое: 79, детское: 31)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Бравкова Александра Васильевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	fap7 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.773556, 40.518971]
        },
        properties: {
		hintContent: 'ФАП х. Красный<br/>ул. Красная, 65А',
		balloonContentBody: [
            '<strong>ФАП х. Красный',
			'<br/>',
			'ул. Красная, 65А</strong>',
			'<br/>',
			'Обслуживаемое население: 176 (взрослое: 113, детское: 63)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующий фельдшер: Тлишев Ислам Аликович</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: нет',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redHomeCircleIcon',
    });

	amb1 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.933591, 40.375841]
        },
        properties: {
		hintContent: 'Амбулатория п. Дружба(amb1)<br/>ул.Центральная, 5',
		balloonContentBody: [
            '<strong>Амбулатория п. Дружба',
			'<br/>',
			'ул.Центральная, 5</strong>',
			'<br/>',
			'Обслуживаемое население: 1662 (взрослое: 1300, детское: 362)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Белбус Виктория Алексеевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	amb2 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.783343, 40.547271]
        },
        properties: {
		hintContent: 'Амбулатория п. Майский (amb2)<br/>ул.Заводская, 7',
		balloonContentBody: [
            '<strong>Амбулатория п. Майский',
			'<br/>',
			'ул.Заводская, 7</strong>',
			'<br/>',
			'Обслуживаемое население: 2362 (взрослое: 2029, детское: 333)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Кемечева Марина Амербиевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	amb3 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.820484, 40.490906]
        },
        properties: {
		hintContent: 'Амбулатория а. Блечепсин (amb3)<br/>ул.Ленина, 37',
		balloonContentBody: [
            '<strong>Амбулатория а. Блечепсин',
			'<br/>',
			'ул.Ленина, 37</strong>',
			'<br/>',
			'Обслуживаемое население: 3106 (взрослое: 2542, детское: 564)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Кемечева Марина Амербиевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	amb4 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.731948, 40.621287]
        },
        properties: {
		hintContent: 'Амбулатория с. Натырбово (amb4)<br/>ул.Ямпольского, 48Б',
		balloonContentBody: [
            '<strong>Амбулатория с. Натырбово',
			'<br/>',
			'ул.Ямпольского, 48Б</strong>',
			'<br/>',
			'Обслуживаемое население: 2362 (взрослое: 2029, детское: 333)????',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Афашагова Валентина Васильевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	amb5 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.618827, 40.702721]
        },
        properties: {
		hintContent: 'Амбулатория с. Вольное (amb5)<br/>пер.Почтовый, 2',
		balloonContentBody: [
            '<strong>Амбулатория с. Вольное',
			'<br/>',
			'пер.Почтовый, 2</strong>',
			'<br/>',
			'Обслуживаемое население: 3018 (взрослое: 2415, детское: 603)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Шевченко Галина Анатольевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	amb6 = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.515981, 40.710920]
        },
        properties: {
		hintContent: 'Амбулатория а. Ходзь (amb6)<br/>ул.Краснооктябрьская, 126',
		balloonContentBody: [
            '<strong>Амбулатория а. Ходзь',
			'<br/>',
			'ул.Краснооктябрьская, 126</strong>',
			'<br/>',
			'Обслуживаемое население: 1903 (взрослое: 1509, детское: 394)',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Заведующая: Шевченко Галина Анатольевна</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#darkBlueHomeCircleIcon',
    });

	neotl = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.901672, 40.487281]
        },
        properties: {
		hintContent: 'Кабинет неотложной помощи (Районная поликлиника - Кошехабльская ЦРБ)<br/>ул. Аслана Джаримова, 7',
		balloonContentBody: [
            '<strong>Кабинет неотложной помощи (Районная поликлиника - Кошехабльская ЦРБ)',
			'<br/>',
			'ул. Аслана Джаримова, 7</strong>',
			'<br/>',
			'Обслуживаемое население: 6857',
			'<br/>',
			'Мед.работники:',
			'<ul><li>Фельдшер</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
        ].join('')
        }
    }, {
        preset: 'islands#redMedicalCircleIcon',
    });


	crb = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [44.901809, 40.488416]
        },
        properties: {
		hintContent: 'Кошехабльская ЦРБ - Районная поликлиника<br/>ул. Аслана Джаримова, 7',
		balloonContentBody: [
            '<strong>Кошехабльская ЦРБ - Районная поликлиника',
			'<br/>',
			'ул. Аслана Джаримова, 7</strong>',
			'<br/>',
			'Обслуживаемое население: 7130 (взрослое: 5742, детское: 1388)',
			'<br/>',
			'<ul><li>Заведующий: Фокотлев Нурдин Хамедович</li></ul>',
			'Укладка: есть',
			'<br/>',
			'Авто: есть',
			'<br/>',
			'Неотложный кабинет',
        ].join('')
        }
    }, {
        preset: 'islands#nightHomeCircleIcon',
    });






		var gran_drujba = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.944435179034144,40.349302689755035],[44.967593527171424,40.3787211582304],[44.96375476748355,40.384943883144935],[44.95900165906469,40.384214322292884],[44.94690381941448,40.38442889901407],[44.948701897557555,40.389020840847564],[44.94854952025299,40.39223949166544],[44.94327701470386,40.39232532235391],[44.94120445129942,40.39794723244914],[44.93020031656576,40.39108077737097],[44.92852997301109,40.396162503708155],[44.91008284046789,40.38921021794149],[44.94093650753075,40.33530854557813],[44.947458762647834,40.34419202183547],[44.944435179034144,40.349302689755035]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_krasn = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.76222461427573,40.46986875356453],[44.76569789474871,40.47481436756447],[44.79265398075645,40.51283412581224],[44.78452478520529,40.5239921153142],[44.76000797840094,40.55343204146161],[44.743861517779536,40.56467586165204],[44.74407561047086,40.53090148573652],[44.74227109045056,40.5232625544621],[44.741200585674385,40.51927142744794],[44.75269982123971,40.521932178790664],[44.75714904035148,40.52532249098553],[44.76214826676958,40.527082020099314],[44.76222461427573,40.46986875356453]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_chehrak1 = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.939612,40.386221],[44.939703,40.386269999999996],[44.939851999999995,40.386416],[44.940934,40.388261],[44.940461,40.390691],[44.940137,40.390589],[44.939432,40.392556],[44.937881999999995,40.392067],[44.937965999999996,40.391324999999995],[44.937200999999995,40.391014],[44.937349,40.387929],[44.93834,40.386057]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_chehrak2 = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.938234,40.371015],[44.941719,40.376143],[44.939537,40.379345],[44.940027,40.380145],[44.940124999999995,40.381285999999996],[44.939954,40.381243999999995],[44.939648,40.381405],[44.939527,40.381499],[44.939364999999995,40.381685999999995],[44.939124,40.382244],[44.938946,40.382456999999995],[44.938915,40.382525],[44.938829999999996,40.383083],[44.938749,40.383294],[44.938748,40.38335],[44.938809,40.38353],[44.938804999999995,40.383598],[44.938783,40.383644],[44.938719999999996,40.383686],[44.938629,40.383659],[44.938618,40.383418],[44.938567,40.383171999999995],[44.938075,40.381868],[44.937768,40.380927],[44.937602,40.380494],[44.936375,40.378220999999996],[44.936299,40.378108999999995],[44.936167999999995,40.378021],[44.937639999999995,40.372302],[44.937875,40.371649999999995],[44.938068,40.371268]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_otradn = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.941449999999996,40.335781999999995],[44.944308,40.339504999999996],[44.943656999999995,40.340548],[44.944024999999996,40.340866999999996],[44.943872,40.341383],[44.943911,40.341712],[44.943996999999996,40.341906],[44.944137,40.342048],[44.945713,40.342893],[44.945926,40.343362],[44.946028,40.343481],[44.946335999999995,40.34343],[44.946632,40.343593],[44.946737999999996,40.343737999999995],[44.946815,40.343989],[44.94683,40.344271],[44.946787,40.344581999999996],[44.946508,40.345118],[44.946403,40.345537],[44.946217,40.345723],[44.946110999999995,40.345742],[44.945893999999996,40.345566],[44.94576,40.345119],[44.945392999999996,40.344378],[44.945121,40.344204999999995],[44.944812,40.344269],[44.944567,40.344519999999996],[44.944083,40.345544],[44.943692,40.346070999999995],[44.943442999999995,40.346148],[44.943054,40.345883],[44.942921,40.345861],[44.942445,40.346087999999995],[44.942332,40.346365],[44.942284,40.34701],[44.94216,40.347485],[44.941617,40.348529],[44.94144,40.34878],[44.941204,40.348954],[44.94101,40.349007],[44.940799999999996,40.348969],[44.940523,40.34881],[44.940332,40.348816],[44.939906,40.349466],[44.939879,40.349745],[44.940604,40.351056],[44.941143,40.351102999999995],[44.941767,40.351304],[44.942094999999995,40.351509],[44.942423,40.351822],[44.942795,40.351974999999996],[44.942839,40.352091],[44.942837999999995,40.352531],[44.942972999999995,40.352891],[44.94298,40.353094999999996],[44.942842,40.353305999999996],[44.942661,40.353344],[44.942508,40.353235999999995],[44.941970999999995,40.352595],[44.941674,40.352461999999996],[44.94088,40.353373999999995],[44.940394,40.355188],[44.939423999999995,40.356586],[44.93915,40.357386],[44.938904,40.358563],[44.938644,40.359018],[44.938424,40.359138],[44.938306999999995,40.359414],[44.938286999999995,40.359654],[44.938337999999995,40.360132],[44.938676,40.361546],[44.938714999999995,40.361914],[44.938607999999995,40.362913999999996],[44.938522999999996,40.363231],[44.938325999999996,40.363479],[44.937599,40.363766],[44.937422999999995,40.363973],[44.937242999999995,40.364394999999995],[44.937044,40.365294999999996],[44.936769999999996,40.366102999999995],[44.936544999999995,40.366620999999995],[44.936234999999996,40.367157999999996],[44.936046999999995,40.367964],[44.935856,40.368196999999995],[44.935213,40.368407],[44.934903,40.368635999999995],[44.934691,40.369022],[44.934552,40.369881],[44.932338,40.367688],[44.933347999999995,40.366592],[44.934658999999996,40.365474],[44.934419,40.364686999999996],[44.934204,40.364259],[44.932283999999996,40.362203],[44.936101,40.354645999999995],[44.935894,40.354408],[44.936647,40.352731999999996],[44.934270999999995,40.350477],[44.936462,40.346222999999995],[44.936761,40.345993],[44.937371,40.345859],[44.937508,40.345907],[44.937881999999995,40.346224],[44.939468999999995,40.343098999999995],[44.937999,40.340824999999995]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_novoaleks = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.926209,40.361483],[44.929213999999995,40.364703999999996],[44.929393,40.364534],[44.929601999999996,40.36446],[44.932584999999996,40.363659999999996],[44.931379,40.365986],[44.932007999999996,40.366634999999995],[44.932269,40.366510999999996],[44.932869,40.367098999999996],[44.932338,40.367688],[44.934552,40.369881],[44.934385,40.371055999999996],[44.934297,40.371398],[44.934135,40.371821],[44.933862999999995,40.372181999999995],[44.933651,40.372257],[44.933187,40.372157],[44.933071999999996,40.372082999999996],[44.932873,40.371798],[44.932722,40.371735],[44.93176,40.371767999999996],[44.931712999999995,40.37178],[44.931656,40.371865],[44.931638,40.372006999999996],[44.931666,40.372171],[44.932247,40.373985],[44.932314,40.374342999999996],[44.932306999999994,40.374559999999995],[44.932258,40.374697999999995],[44.931798,40.375381999999995],[44.931695999999995,40.375622],[44.931697,40.375980999999996],[44.93181,40.376225999999996],[44.931841,40.376362],[44.931767,40.37672],[44.931794,40.3771],[44.931753,40.377229],[44.931698999999995,40.377293],[44.931475999999996,40.377369],[44.930962,40.377393],[44.930577,40.377303999999995],[44.930164999999995,40.377074],[44.929898,40.376838],[44.929573999999995,40.376446],[44.929491,40.376303],[44.929479,40.376104],[44.92944,40.376014],[44.928863,40.375349],[44.928754,40.375271999999995],[44.928298,40.375201],[44.928146999999996,40.375130999999996],[44.927813,40.374896],[44.927655,40.374871999999996],[44.927516,40.374914],[44.927037999999996,40.375172],[44.926874999999995,40.375195999999995],[44.926688,40.375164999999996],[44.924983,40.374272999999995],[44.925917999999996,40.372071],[44.925748,40.371251],[44.925746,40.370967],[44.925802,40.370759],[44.927549,40.367585999999996],[44.924692,40.364464999999996]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_dmtr = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.945605,40.350834],[44.948423999999996,40.354793],[44.943428,40.363212],[44.941354,40.366371],[44.938162999999996,40.371113],[44.936778,40.369181999999995],[44.937416,40.366799],[44.938880999999995,40.363974999999996],[44.939378999999995,40.364204],[44.940646,40.362609],[44.940708,40.362352],[44.940701,40.362095],[44.94037,40.361301],[44.940228999999995,40.360821],[44.940180999999995,40.360448999999996],[44.940205,40.360026],[44.940495,40.359276],[44.941978,40.356355],[44.942246,40.356659],[44.944388,40.353018999999996]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_plod = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.933181999999995,40.363167],[44.934042,40.364058],[44.934129,40.36416],[44.934276999999994,40.364368],[44.934374,40.36457],[44.934419,40.364686999999996],[44.934658999999996,40.365474],[44.93372,40.366257],[44.933521999999996,40.366433],[44.933192,40.366748],[44.932869,40.367098999999996],[44.932269,40.366510999999996],[44.932007999999996,40.366634999999995],[44.931379,40.365986],[44.932584999999996,40.363659999999996],[44.932792,40.363597],[44.932896,40.36355],[44.932963,40.363504],[44.93306,40.363394]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });



		var gran_egeruhay = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[45.022622999999996,40.320498],[45.023271,40.320586999999996],[45.023897,40.322027999999996],[45.023669999999996,40.322761],[45.027015999999996,40.326888],[45.028894,40.33023],[45.028977999999995,40.334112],[45.032941,40.332086],[45.043439,40.346534999999996],[45.052437,40.359677],[45.038008,40.382981],[45.034006999999995,40.388753],[45.027349,40.396888],[45.013408999999996,40.411544],[45.003316999999996,40.424462],[45.004039999999996,40.426071],[45.001428999999995,40.428602999999995],[45.002111,40.430085999999996],[45.002140999999995,40.430901999999996],[45.001959,40.431846],[45.001106,40.433444],[45.000443999999995,40.434013],[44.999401,40.433637],[44.997414,40.434194999999995],[44.996165999999995,40.434174],[44.988099,40.441829],[44.985872,40.446267999999996],[44.983245,40.448091],[44.982248,40.447801999999996],[44.980033,40.450461],[44.9636,40.477992],[44.963466,40.477733],[44.959016999999996,40.478314],[44.951215999999995,40.462039],[44.943628,40.450854],[44.943338,40.451215999999995],[44.938507,40.444047],[44.940489,40.443546999999995],[44.941365999999995,40.442747],[44.942101,40.441401],[44.942586,40.442043999999996],[44.942917,40.441860999999996],[44.943363,40.442526],[44.943566999999994,40.442422],[44.943356,40.441843999999996],[44.944463,40.441142],[44.944725,40.437849],[44.943264,40.436329],[44.943222,40.435428],[44.944444999999995,40.433378],[44.945673,40.432876],[44.94725,40.430805],[44.948246,40.431022],[44.948454999999996,40.43188],[44.949431,40.431762],[44.94977,40.430485],[44.949422999999996,40.429777],[44.949574999999996,40.42901],[44.950337,40.427577],[44.951088,40.427116],[44.951308,40.426247],[44.951087,40.425430999999996],[44.950317999999996,40.424659],[44.950233999999995,40.423660999999996],[44.950828,40.423446999999996],[44.951840999999995,40.424541],[44.952149,40.424164],[44.940701,40.407647],[44.943307,40.401323],[44.942558,40.401337],[44.941797,40.400234],[44.942169,40.399403],[44.942093,40.398952],[44.941066,40.3979],[44.941801999999996,40.396936],[44.943414,40.392849],[44.943238,40.392486999999996],[44.948578999999995,40.392238],[44.948676999999996,40.38905],[44.946928,40.384328],[44.947365999999995,40.384364999999995],[44.947671,40.383818],[44.947995,40.383952],[44.948166,40.383185],[44.948564,40.382808999999995],[44.948975,40.383345],[44.951101,40.383485],[44.952124,40.383165999999996],[44.952771,40.383838999999995],[44.953365,40.383151999999995],[44.95455,40.383393999999996],[44.95487,40.382985999999995],[44.955769,40.382776],[44.957460999999995,40.383558],[44.95872,40.383396999999995],[44.959137,40.383823],[44.959399999999995,40.383289],[44.959224,40.382265],[44.959693,40.381302],[44.960333,40.381069],[44.96058,40.382227],[44.961178,40.382472],[44.961959,40.383914999999995],[44.962576,40.384007],[44.963406,40.384763],[44.964476999999995,40.384049999999995],[44.964634,40.382553],[44.963606,40.382264],[44.963643999999995,40.381315],[44.964272,40.380708999999996],[44.964901,40.381031],[44.965182999999996,40.381712],[44.965894999999996,40.381353],[44.965739,40.37984],[44.966279,40.377849999999995],[44.967053,40.379148],[44.967580999999996,40.378937],[44.964237999999995,40.374151999999995],[44.978925,40.354012],[44.988498,40.368002],[44.989303,40.369685],[44.989585999999996,40.371089999999995],[44.989754,40.370062999999995],[44.989519,40.369439],[44.989591,40.368533],[44.990193999999995,40.368099],[44.990634,40.368347],[44.991102999999995,40.367742],[44.990728,40.367263],[44.991355999999996,40.366609],[44.991425,40.365314999999995],[44.990383,40.364571999999995],[44.991032,40.3632],[44.991008,40.362586],[44.990708999999995,40.36231],[44.990190999999996,40.352509],[44.997961,40.344570999999995],[45.003021,40.336717],[45.010253999999996,40.333214999999996],[45.010905,40.33227],[45.011824999999995,40.332215],[45.013293,40.330878999999996],[45.013731,40.331238],[45.013869,40.332296],[45.014604999999996,40.332653],[45.015777,40.334393999999996],[45.017252,40.334685],[45.01752,40.331396999999996],[45.017207,40.327794],[45.018527,40.327615],[45.017106999999996,40.32373],[45.01728,40.323071999999996],[45.018080999999995,40.322189],[45.019532999999996,40.322607999999995],[45.020719,40.32205]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_polit = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.94247182375233,40.332565505799614],[44.956246554792,40.344109733399726],[44.95949019961396,40.339508999317026],[44.974174680190465,40.360537517993784],[44.96445653675172,40.374399174182614],[44.944466681178945,40.349293697803176],[44.94754484418706,40.344186771838785],[44.940870201069956,40.335260380237266],[44.94247182375233,40.332565505799614]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_chatchemsiy = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.93934988737385,40.2665582832466],[44.973599587913306,40.319601648725104],[44.95617259669563,40.34397756425242],[44.91569049924716,40.30994063853709],[44.91569812247226,40.29552309452985],[44.91691783169201,40.2978405231187],[44.927581174536144,40.28294105278516],[44.93934988737385,40.2665582832466]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_krasnfars = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.91569038619338,40.309944192042266],[44.94242367847957,40.33254113244036],[44.91017040875653,40.38907764238848],[44.903216895265814,40.3868460444881],[44.903894399798,40.37762661725026],[44.90465687874188,40.37741204052907],[44.909749976927216,40.370073516664334],[44.90816415076971,40.36586781292896],[44.90871309560477,40.34964581280686],[44.91560495364476,40.337157447633444],[44.91569038619338,40.309944192042266]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_komsomol = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.91837286345112,40.39215587570724],[44.90330124584096,40.38687047780834],[44.89905019517242,40.44019815744232],[44.90798656697242,40.44194159330191],[44.908611755650284,40.44940886319939],[44.91033480120593,40.44975218595328],[44.9126676915804,40.44297156156359],[44.92139145429998,40.45369886044227],[44.93242777227363,40.43533109310828],[44.93847854876549,40.443999992644365],[44.944757265308986,40.44069551113802],[44.94306573740383,40.43571733120639],[44.94725636792673,40.43071769360258],[44.952040929617006,40.4240658152456],[44.94061217102929,40.407757984434994],[44.94329432542635,40.40136359814348],[44.94259331997638,40.40132068279925],[44.94183134775696,40.40033362988176],[44.94225805345414,40.39930366162005],[44.941678952091344,40.39818786266985],[44.93021763127707,40.39110683087053],[44.928571401431654,40.396085010802125],[44.91837286345112,40.39215587570724]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_ignat = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.841888,40.389551999999995],[44.842568,40.389852],[44.843627999999995,40.391888],[44.845171,40.392981],[44.845715,40.393879],[44.845984,40.395516],[44.846444,40.404644],[44.860569,40.435739999999996],[44.861177999999995,40.436344999999996],[44.861140999999996,40.437556],[44.862193,40.438023],[44.863946999999996,40.437649],[44.864857,40.438204999999996],[44.867404,40.437684999999995],[44.867646,40.436780999999996],[44.868379999999995,40.436369],[44.868874,40.435333],[44.868592,40.43371],[44.868777,40.432634],[44.868606,40.431317],[44.869115,40.4307],[44.869012,40.430091],[44.869305999999995,40.429001],[44.869507999999996,40.428837],[44.869979,40.429052],[44.870239999999995,40.428725],[44.871184,40.430161],[44.872304,40.428413],[44.883601999999996,40.444075],[44.864007,40.471311],[44.871961,40.47537],[44.84731,40.509384],[44.839223999999994,40.497651999999995],[44.835015999999996,40.491155],[44.836085,40.489996],[44.827568,40.479046],[44.827481999999996,40.478508],[44.826871999999995,40.478738],[44.823128999999994,40.474101999999995],[44.822700999999995,40.474714],[44.799566999999996,40.441767],[44.82526,40.415003],[44.825466999999996,40.39226],[44.835302999999996,40.392351999999995],[44.836528,40.402564999999996],[44.838727,40.399525],[44.840793999999995,40.391569],[44.841547999999996,40.389828]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_kazen = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.688046042902336,40.655493625774774],[44.686683684495094,40.65898586191215],[44.683545545223375,40.66587913908042],[44.66930695883522,40.672595390453715],[44.66024142173697,40.683796295299906],[44.65654290713037,40.67261452105088],[44.65299774143969,40.67418162694675],[44.65209025388207,40.67099937539613],[44.64958975971243,40.66610051007608],[44.635681465924556,40.638183584080146],[44.63575807166936,40.618721475467915],[44.65365036465457,40.61865710245152],[44.653888725262895,40.56828655825631],[44.66786315553448,40.56822352634439],[44.688046042902336,40.655493625774774]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_karmolin = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.59965290608308,40.643471091508324],[44.59888636516712,40.689776747941366],[44.57746509518569,40.6896158154004],[44.57761079284931,40.69508752179078],[44.53891133428477,40.69507679295468],[44.53532594474052,40.68753560138173],[44.53023025196271,40.68968136859364],[44.53053723411387,40.65706570697254],[44.537290429285655,40.66908200335927],[44.54220134871963,40.66719372821279],[44.54527046158703,40.67268689227528],[44.54883042842352,40.6689961726708],[44.55324939263811,40.6638463313622],[44.55429270991384,40.66436131549307],[44.55791348840985,40.66230137896961],[44.55969310994659,40.658438997988185],[44.56214767041741,40.65869649005361],[44.56699512104941,40.65354664874501],[44.56981749989702,40.65294583392567],[44.57128999064592,40.647881823305546],[44.57448025850676,40.648740130190326],[44.57650476018136,40.648740130190326],[44.57736361826173,40.64668019366684],[44.578835916649844,40.64582188678209],[44.580001459588075,40.643590288881676],[44.58092160844906,40.64341862750473],[44.59965290608308,40.643471091508324]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_shelk = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.59622166318614,40.734715067864386],[44.5906100144273,40.732311808587085],[44.57958444918769,40.730917059899305],[44.568986268311434,40.7255526418694],[44.56066419097155,40.72675912808485],[44.5507030694438,40.731010175452816],[44.542950064636884,40.730283042889255],[44.54321317605523,40.70388628003416],[44.541038513102855,40.705248998762436],[44.53889893020273,40.69514712047655],[44.5776387558439,40.69512834501335],[44.577474416820564,40.68962473972496],[44.598889304980894,40.68978270244684],[44.59622166318614,40.734715067864386]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FF2400',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_blech = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.799566999999996,40.441767],[44.822700999999995,40.474714],[44.823128999999994,40.474101999999995],[44.826871999999995,40.478738],[44.827481999999996,40.478508],[44.827568,40.479046],[44.836085,40.489996],[44.835015999999996,40.491155],[44.839223999999994,40.497651999999995],[44.884248,40.562177999999996],[44.883157,40.563756999999995],[44.882214,40.564561999999995],[44.878961,40.564408],[44.875704,40.567603],[44.873771,40.56758],[44.868573999999995,40.56991],[44.867954,40.571112],[44.86794,40.574478],[44.867428,40.576749],[44.867298999999996,40.579468999999996],[44.866009,40.581224999999996],[44.865003,40.583698],[44.864739,40.584885],[44.865041,40.586425999999996],[44.864976999999996,40.587976],[44.864339,40.589423],[44.863718999999996,40.589662],[44.861306,40.589279999999995],[44.858871,40.586237],[44.85749,40.587103],[44.853598999999996,40.590894999999996],[44.838857,40.569494999999996],[44.803011,40.518674999999995],[44.794971,40.525163],[44.789511999999995,40.517054],[44.789935,40.515963],[44.790403,40.515848999999996],[44.791377999999995,40.514685],[44.791927,40.514955],[44.791971,40.513947],[44.792607,40.512871],[44.76224,40.469865],[44.762451,40.464576],[44.763013,40.465208],[44.796366,40.444385]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_may = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.780286456033494,40.529076030771414],[44.789546457285184,40.51710445554102],[44.79496255060792,40.525146388719804],[44.80292938452753,40.51870439321825],[44.85352610921374,40.5908236292106],[44.85143303629486,40.592403250743104],[44.84503719505366,40.593218642283624],[44.83838109764003,40.58708174805746],[44.832212830093866,40.58594449143512],[44.811321284916346,40.597596007395815],[44.804474133603094,40.60755773167719],[44.798596514201584,40.59801925100518],[44.79205725332014,40.6028257695598],[44.77622548665101,40.58126080908005],[44.779710072998526,40.57568181432906],[44.7649144056443,40.55439580358688],[44.76246847327852,40.558086523191356],[44.75990013208529,40.55345166601362],[44.780286456033494,40.529076030771414]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_nat = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.759999,40.553323],[44.762702999999995,40.557655],[44.765268,40.554361],[44.779722,40.575610999999995],[44.776039,40.581018],[44.7921,40.602818],[44.798386,40.598575],[44.804486999999995,40.607543],[44.804083999999996,40.612105],[44.803301999999995,40.614450999999995],[44.798778,40.619076],[44.796391,40.620703],[44.794801,40.623337],[44.793983999999995,40.624106],[44.791923,40.624309],[44.787262999999996,40.62367],[44.784414,40.625007],[44.779893,40.628533],[44.778613,40.628589999999996],[44.777010999999995,40.627519],[44.775963999999995,40.627311999999996],[44.773866999999996,40.630129],[44.772926999999996,40.63072],[44.768147,40.629515999999995],[44.764587999999996,40.628130999999996],[44.763163,40.628363],[44.760196,40.630224999999996],[44.758327,40.629166999999995],[44.757526999999996,40.62936],[44.754394999999995,40.631713999999995],[44.751200999999995,40.632742],[44.749320999999995,40.634619],[44.747465,40.63489],[44.746038999999996,40.63742],[44.744693999999996,40.638577],[44.741039,40.639384],[44.736581,40.641303],[44.731621999999994,40.64152],[44.72616,40.643249999999995],[44.72325,40.646111999999995],[44.719628,40.646608],[44.718509,40.647901999999995],[44.716995999999995,40.648179],[44.715999,40.648855999999995],[44.713871999999995,40.648184],[44.709309999999995,40.647886],[44.707229999999996,40.651706],[44.704595999999995,40.653846],[44.703520999999995,40.653724],[44.702194,40.65229],[44.698336,40.652725],[44.696897,40.651668],[44.695141,40.651776],[44.69368,40.65294],[44.691818999999995,40.653088],[44.690211999999995,40.654354],[44.688482,40.653388],[44.687855,40.654525],[44.688252,40.657014],[44.687992,40.657894],[44.687013,40.658837999999996],[44.684992,40.659524999999995],[44.684456,40.660126],[44.684149999999995,40.661756],[44.684778,40.664009],[44.684303,40.665124999999996],[44.682803,40.665833],[44.6802,40.664803],[44.679282,40.665017999999996],[44.678608,40.665962],[44.678025999999996,40.667978999999995],[44.676404,40.668279999999996],[44.672689,40.670646],[44.671157,40.670989],[44.668333,40.674257],[44.667612999999996,40.676489],[44.666587,40.676617],[44.665408,40.678484],[44.662593,40.680409999999995],[44.660649,40.683434999999996],[44.660153,40.683727999999995],[44.65667,40.672312999999995],[44.653085,40.67417],[44.651416,40.669626],[44.636114,40.63941],[44.635715999999995,40.638197999999996],[44.635771999999996,40.618672],[44.653652,40.618688],[44.65389,40.568286],[44.738983,40.568532],[44.739216,40.567941999999995],[44.740489,40.567684],[44.741181,40.565017999999995],[44.741858,40.566091],[44.744696999999995,40.563829999999996],[44.748104999999995,40.562940999999995],[44.756383,40.556349],[44.757124999999995,40.554386]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_voln = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.635736827175364,40.72245718938927],[44.66014725341407,40.68380286125302],[44.656528827111366,40.67264752716348],[44.65298441779517,40.67425200856389],[44.65182291675042,40.67118304104133],[44.63572329553275,40.63830554472987],[44.635731664958925,40.643771460882085],[44.63171996585232,40.64353083650754],[44.6237295784782,40.64371760379162],[44.59967073368672,40.64342773368654],[44.59873625402837,40.69497233960625],[44.59745309395346,40.715900829737464],[44.59661499961843,40.72898938236298],[44.59623171021668,40.734718580818864],[44.600524405724535,40.73639227924422],[44.635736827175364,40.72245718938927]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_hodz = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.478198,40.616344],[44.478857999999995,40.617025999999996],[44.478966,40.617796999999996],[44.479575999999994,40.617833],[44.479683,40.617241],[44.480052,40.617143999999996],[44.480395,40.617788],[44.480367,40.618485],[44.481362999999995,40.618137999999995],[44.481663999999995,40.618601],[44.481915,40.618469999999995],[44.482363,40.618842],[44.482752999999995,40.621328],[44.482597999999996,40.661296],[44.510180999999996,40.661654999999996],[44.517916,40.661477999999995],[44.518696,40.662254999999995],[44.519134,40.662335],[44.521741999999996,40.661611],[44.526334999999996,40.659447],[44.527688,40.659678],[44.528299,40.658592],[44.528822,40.658505],[44.529332,40.657692999999995],[44.529568,40.656735999999995],[44.530203,40.656712],[44.530428,40.656971],[44.530276,40.657568999999995],[44.530448,40.657779],[44.530184,40.689799],[44.535302,40.687698],[44.538942999999996,40.69502],[44.541031,40.70532],[44.543285999999995,40.703860999999996],[44.542896,40.72994],[44.540326,40.730577],[44.537377,40.730242],[44.535962,40.73038],[44.534721,40.730872999999995],[44.533563,40.732119999999995],[44.531473,40.733075],[44.530927999999996,40.734249],[44.531368,40.737863999999995],[44.531014,40.739759],[44.530046,40.741112],[44.527905,40.742881],[44.525228999999996,40.742720999999996],[44.52241,40.743528],[44.519798,40.743604999999995],[44.517821,40.745722],[44.513377999999996,40.747403999999996],[44.511361,40.74763],[44.509298,40.748835],[44.508046,40.747752],[44.506695,40.747761],[44.505666999999995,40.748813],[44.504644,40.751677],[44.50391,40.752385],[44.501158,40.753223999999996],[44.49783,40.754858999999996],[44.49576,40.755165999999996],[44.494586,40.755655999999995],[44.493351999999994,40.757014999999996],[44.493317999999995,40.759664],[44.492374999999996,40.763217],[44.490033,40.767423],[44.488529,40.768851],[44.488099,40.770402],[44.486934,40.770933],[44.48565,40.772205],[44.482296,40.773554999999995],[44.480062,40.775703],[44.478868,40.774712],[44.476057999999995,40.773680999999996],[44.473786,40.77392],[44.471588999999994,40.773527],[44.469491999999995,40.773675999999995],[44.46866,40.773058999999996],[44.468025,40.771846],[44.466432999999995,40.770351999999995],[44.466099,40.768018999999995],[44.464014,40.762874],[44.463938,40.757645],[44.46427,40.739014999999995],[44.463766,40.722848],[44.464224,40.721055],[44.464180999999996,40.720189],[44.463626,40.718444999999996],[44.46385,40.717337],[44.464614,40.683281],[44.464541,40.650202],[44.464853,40.638754999999996],[44.464513,40.636539],[44.464875,40.629649],[44.463283999999994,40.628524999999996],[44.464642999999995,40.624519],[44.464468,40.620007],[44.464079999999996,40.618945],[44.464909,40.618984],[44.465796,40.619946],[44.467614,40.620101999999996],[44.467355999999995,40.621216],[44.467768,40.621072999999996],[44.46815,40.620483],[44.468002,40.621227999999995],[44.467571,40.621446],[44.467676999999995,40.621843999999996],[44.46794,40.621660999999996],[44.468920999999995,40.621963],[44.469274999999996,40.621255999999995],[44.468582999999995,40.620121],[44.469102,40.619378],[44.469113,40.618877999999995],[44.470693,40.618504],[44.471118999999995,40.619157],[44.471457,40.619111],[44.471869999999996,40.618263999999996],[44.473133,40.618007999999996],[44.473358,40.61749],[44.473724999999995,40.617491],[44.474044,40.616793],[44.474953,40.617022999999996],[44.475645,40.616671],[44.475839,40.617751],[44.476096999999996,40.617846],[44.476741,40.616485]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_kosh = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.90089,40.416733],[44.899051,40.440197999999995],[44.906498,40.441423],[44.908004,40.441973],[44.908614,40.449428999999995],[44.910314,40.449708],[44.912642999999996,40.442941],[44.913246,40.443304],[44.921282,40.453806],[44.932224,40.435359],[44.943338,40.451215999999995],[44.943628,40.450854],[44.951215999999995,40.462039],[44.959016999999996,40.478314],[44.963466,40.477733],[44.9636,40.477992],[44.942524999999996,40.510681999999996],[44.936479999999996,40.518567999999995],[44.937177999999996,40.523590999999996],[44.935772,40.525608999999996],[44.933673999999996,40.526475],[44.933222,40.529271],[44.932254,40.531856],[44.929019,40.534116],[44.925526999999995,40.535485],[44.914268,40.537484],[44.909794999999995,40.539314],[44.90779,40.540603],[44.905862,40.540109],[44.903574,40.53895],[44.897631,40.538838],[44.897332,40.544675],[44.895505,40.546875],[44.89342,40.551044],[44.892907,40.553833],[44.892357999999994,40.555257],[44.890572,40.5578],[44.888968999999996,40.559508],[44.887890999999996,40.560255],[44.885968,40.560645],[44.884248,40.562177999999996],[44.84731,40.509384],[44.871961,40.47537],[44.864007,40.471311],[44.883601999999996,40.444075],[44.876281999999996,40.433999],[44.888317,40.418006999999996],[44.900124999999996,40.417756]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00B7EB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_rajon = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.939189999999996,40.267012],[44.973425,40.319444999999995],[44.969674,40.322500999999995],[44.97013,40.319451],[44.968305,40.315270999999996],[44.967408999999996,40.315787],[44.968329999999995,40.318093],[44.967439,40.319144],[44.965267999999995,40.316724],[44.963436,40.316966],[44.962862,40.318771],[44.961996,40.316893],[44.959812,40.317613],[44.959647,40.319210999999996],[44.962101,40.321906],[44.958960999999995,40.324352999999995],[44.957203,40.323098],[44.954653,40.324638],[44.953945,40.328162],[44.954589999999996,40.329833],[44.957361999999996,40.330901999999995],[44.955148,40.334143],[44.974126999999996,40.360472],[44.978925,40.354012],[44.989585999999996,40.371089999999995],[44.989591,40.368533],[44.991102999999995,40.367742],[44.991425,40.365314999999995],[44.990383,40.364571999999995],[44.990190999999996,40.352509],[44.997961,40.344570999999995],[45.003021,40.336717],[45.013293,40.330878999999996],[45.017252,40.334685],[45.017207,40.327794],[45.018527,40.327615],[45.01728,40.323071999999996],[45.022622999999996,40.320498],[45.028894,40.33023],[45.028977999999995,40.334112],[45.032941,40.332086],[45.052437,40.359677],[45.034006999999995,40.388753],[45.003316999999996,40.424462],[45.004039999999996,40.426071],[45.001428999999995,40.428602999999995],[45.002140999999995,40.430901999999996],[45.001106,40.433444],[44.996165999999995,40.434174],[44.988099,40.441829],[44.985872,40.446267999999996],[44.980033,40.450461],[44.955906999999996,40.490066],[44.936479999999996,40.518567999999995],[44.937177999999996,40.523590999999996],[44.933673999999996,40.526475],[44.932254,40.531856],[44.925526999999995,40.535485],[44.914268,40.537484],[44.90779,40.540603],[44.897631,40.538838],[44.897332,40.544675],[44.889734,40.558743],[44.882214,40.564561999999995],[44.878961,40.564408],[44.875704,40.567603],[44.868573999999995,40.56991],[44.867298999999996,40.579468999999996],[44.865003,40.583698],[44.864059999999995,40.589583999999995],[44.861306,40.589279999999995],[44.858871,40.586237],[44.852627,40.59206],[44.849154999999996,40.59144],[44.843984,40.594632999999995],[44.842357,40.593775],[44.83909,40.587491],[44.830784,40.585885999999995],[44.823561,40.595313999999995],[44.816502,40.595431],[44.809233,40.606071],[44.804632999999995,40.607262],[44.803301999999995,40.614450999999995],[44.793983999999995,40.624106],[44.787262999999996,40.62367],[44.779893,40.628533],[44.775963999999995,40.627311999999996],[44.772926999999996,40.63072],[44.764587999999996,40.628130999999996],[44.760196,40.630224999999996],[44.757526999999996,40.62936],[44.747465,40.63489],[44.744693999999996,40.638577],[44.72616,40.643249999999995],[44.72325,40.646111999999995],[44.715999,40.648855999999995],[44.709309999999995,40.647886],[44.704595999999995,40.653846],[44.696897,40.651668],[44.690211999999995,40.654354],[44.688482,40.653388],[44.687992,40.657894],[44.684456,40.660126],[44.684303,40.665124999999996],[44.679282,40.665017999999996],[44.678025999999996,40.667978999999995],[44.671157,40.670989],[44.667612999999996,40.676489],[44.660153,40.683727999999995],[44.649589999999996,40.684121999999995],[44.6438,40.688863999999995],[44.63915,40.696645],[44.637747999999995,40.702599],[44.634409999999995,40.702988],[44.6259,40.721759999999996],[44.622988,40.719625],[44.620107,40.724517],[44.616535999999996,40.723831],[44.616153,40.726791999999996],[44.612686,40.730258],[44.608107,40.730765999999996],[44.600179999999995,40.736871],[44.596748999999996,40.737514999999995],[44.59375,40.733199],[44.587452,40.734657],[44.586087,40.731204999999996],[44.583715,40.729351],[44.575689999999994,40.730222999999995],[44.573554,40.726529],[44.567805,40.728356999999995],[44.565324,40.723095],[44.550899,40.730702],[44.535962,40.73038],[44.531222,40.733385999999996],[44.531188,40.739255],[44.528400999999995,40.742577],[44.519798,40.743604999999995],[44.517821,40.745722],[44.509298,40.748835],[44.506695,40.747761],[44.50391,40.752385],[44.493915,40.756172],[44.492374999999996,40.763217],[44.488099,40.770402],[44.480336,40.775633],[44.476057999999995,40.773680999999996],[44.469491999999995,40.773675999999995],[44.466432999999995,40.770351999999995],[44.464014,40.762874],[44.464875,40.629649],[44.463283999999994,40.628524999999996],[44.464642999999995,40.624519],[44.464079999999996,40.618945],[44.467614,40.620101999999996],[44.468582999999995,40.621984999999995],[44.469113,40.618877999999995],[44.471457,40.619111],[44.474044,40.616793],[44.476096999999996,40.617846],[44.478198,40.616344],[44.482363,40.618842],[44.482597999999996,40.661296],[44.519470999999996,40.662302],[44.527688,40.659678],[44.529981,40.65663],[44.536739,40.669222],[44.539237,40.669129],[44.541647999999995,40.666979999999995],[44.545322999999996,40.672323],[44.552119999999995,40.664072999999995],[44.556723,40.66365],
						[44.559362,40.658364],[44.562069,40.658249999999995],[44.566634,40.653490999999995],[44.569103,40.653355999999995],[44.571501999999995,40.647985999999996],[44.576232,40.648863],[44.579865999999996,40.643730999999995],[44.635723999999996,40.643763],[44.635771999999996,40.618672],[44.653652,40.618688],[44.65389,40.568286],[44.740489,40.567684],[44.741181,40.565017999999995],[44.741858,40.566091],[44.743942999999994,40.564578999999995],[44.743953,40.531002],[44.741169,40.518994],[44.745658999999996,40.521184999999996],[44.747516,40.519777],[44.747372,40.521634999999996],[44.748712999999995,40.520120999999996],[44.752387,40.521414],[44.756899999999995,40.526806],[44.757867,40.525545],[44.762122,40.527032],[44.762451,40.464576],[44.797852,40.443323],[44.82526,40.415003],[44.825466999999996,40.39226],[44.835302999999996,40.392351999999995],[44.836528,40.402564999999996],[44.838727,40.399525],[44.841699,40.389647],[44.845171,40.392981],[44.846444,40.404644],[44.862035999999996,40.437998],[44.867404,40.437684999999995],[44.868874,40.435333],[44.869447,40.428844999999995],[44.871184,40.430161],[44.872304,40.428413],[44.876281999999996,40.433999],[44.888317,40.418006999999996],[44.90089,40.416733],[44.904019999999996,40.377545],[44.90636,40.372043],[44.907751,40.372946],[44.909698,40.369887999999996],[44.907474,40.362218],[44.909548,40.36089],[44.908282,40.360555],[44.9079,40.358678999999995],[44.910326999999995,40.359649],[44.909689,40.356316],[44.912217,40.355942999999996],[44.91419,40.350904],[44.913694,40.349331],[44.908649,40.349821999999996],[44.915513,40.337077],[44.915642,40.295491],[44.916984,40.297579]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '#00FF00',
        strokeColor: '#0000FF',
        opacity: 0.3,
        strokeWidth: 1
    });


		var gran_ignat_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.841888,40.389551999999995],[44.842568,40.389852],[44.843627999999995,40.391888],[44.845171,40.392981],[44.845715,40.393879],[44.845984,40.395516],[44.846444,40.404644],[44.860569,40.435739999999996],[44.861177999999995,40.436344999999996],[44.861140999999996,40.437556],[44.862193,40.438023],[44.863946999999996,40.437649],[44.864857,40.438204999999996],[44.867404,40.437684999999995],[44.867646,40.436780999999996],[44.868379999999995,40.436369],[44.868874,40.435333],[44.868592,40.43371],[44.868777,40.432634],[44.868606,40.431317],[44.869115,40.4307],[44.869012,40.430091],[44.869305999999995,40.429001],[44.869507999999996,40.428837],[44.869979,40.429052],[44.870239999999995,40.428725],[44.871184,40.430161],[44.872304,40.428413],[44.883601999999996,40.444075],[44.864007,40.471311],[44.871961,40.47537],[44.84731,40.509384],[44.839223999999994,40.497651999999995],[44.835015999999996,40.491155],[44.836085,40.489996],[44.827568,40.479046],[44.827481999999996,40.478508],[44.826871999999995,40.478738],[44.823128999999994,40.474101999999995],[44.822700999999995,40.474714],[44.799566999999996,40.441767],[44.82526,40.415003],[44.825466999999996,40.39226],[44.835302999999996,40.392351999999995],[44.836528,40.402564999999996],[44.838727,40.399525],[44.840793999999995,40.391569],[44.841547999999996,40.389828]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFFF00',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_kosh_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.90089,40.416733],[44.899051,40.440197999999995],[44.906498,40.441423],[44.908004,40.441973],[44.908614,40.449428999999995],[44.910314,40.449708],[44.912642999999996,40.442941],[44.913246,40.443304],[44.921282,40.453806],[44.932224,40.435359],[44.943338,40.451215999999995],[44.943628,40.450854],[44.951215999999995,40.462039],[44.959016999999996,40.478314],[44.963466,40.477733],[44.9636,40.477992],[44.942524999999996,40.510681999999996],[44.936479999999996,40.518567999999995],[44.937177999999996,40.523590999999996],[44.935772,40.525608999999996],[44.933673999999996,40.526475],[44.933222,40.529271],[44.932254,40.531856],[44.929019,40.534116],[44.925526999999995,40.535485],[44.914268,40.537484],[44.909794999999995,40.539314],[44.90779,40.540603],[44.905862,40.540109],[44.903574,40.53895],[44.897631,40.538838],[44.897332,40.544675],[44.895505,40.546875],[44.89342,40.551044],[44.892907,40.553833],[44.892357999999994,40.555257],[44.890572,40.5578],[44.888968999999996,40.559508],[44.887890999999996,40.560255],[44.885968,40.560645],[44.884248,40.562177999999996],[44.84731,40.509384],[44.871961,40.47537],[44.864007,40.471311],[44.883601999999996,40.444075],[44.876281999999996,40.433999],[44.888317,40.418006999999996],[44.900124999999996,40.417756]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFFF00',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_dmitr_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.939189999999996,40.267012],[44.963744,40.303821],[44.973425,40.319444999999995],[44.972618,40.319958],[44.971534,40.321540999999996],[44.969674,40.322500999999995],[44.969387999999995,40.322283999999996],[44.969322999999996,40.321452],[44.969986999999996,40.320698],[44.97013,40.319451],[44.969013,40.3179],[44.968737,40.315895999999995],[44.968305,40.315270999999996],[44.967693,40.315235],[44.967408999999996,40.315787],[44.967518,40.316801],[44.968202,40.317501],[44.968329999999995,40.318093],[44.968168,40.318573],[44.967439,40.319144],[44.96686,40.319123999999995],[44.966062,40.318552],[44.965868,40.317184999999995],[44.965267999999995,40.316724],[44.963436,40.316966],[44.962862,40.318771],[44.962087,40.31836],[44.961996,40.316893],[44.960966,40.31754],[44.959812,40.317613],[44.959540999999994,40.318159],[44.959647,40.319210999999996],[44.961045,40.321],[44.962033999999996,40.321432],[44.962101,40.321906],[44.960555,40.322224],[44.960014,40.323125999999995],[44.959081999999995,40.323544999999996],[44.958960999999995,40.324352999999995],[44.958242,40.32423],[44.957203,40.323098],[44.956747,40.323335],[44.956092,40.32481],[44.954653,40.324638],[44.954131,40.326198999999995],[44.953945,40.328162],[44.954093,40.329057999999996],[44.954589999999996,40.329833],[44.956306,40.329771],[44.957361999999996,40.330901999999995],[44.956725999999996,40.331046],[44.956106,40.331987999999996],[44.955501,40.332344],[44.955148,40.334143],[44.956184,40.335177],[44.974126999999996,40.360472],[44.964237999999995,40.374151999999995],[44.967580999999996,40.378937],[44.967053,40.379148],[44.966279,40.377849999999995],[44.965739,40.37984],[44.965894999999996,40.381353],[44.965182999999996,40.381712],[44.964901,40.381031],[44.964272,40.380708999999996],[44.963643999999995,40.381315],[44.963606,40.382264],[44.964634,40.382553],[44.964476999999995,40.384049999999995],[44.963406,40.384763],[44.962576,40.384007],[44.961959,40.383914999999995],[44.961178,40.382472],[44.96058,40.382227],[44.960333,40.381069],[44.959693,40.381302],[44.959224,40.382265],[44.959399999999995,40.383289],[44.959137,40.383823],[44.95872,40.383396999999995],[44.957460999999995,40.383558],[44.955769,40.382776],[44.95487,40.382985999999995],[44.95455,40.383393999999996],[44.953365,40.383151999999995],[44.952771,40.383838999999995],[44.952124,40.383165999999996],[44.951101,40.383485],[44.948975,40.383345],[44.948564,40.382808999999995],[44.948166,40.383185],[44.947995,40.383952],[44.947671,40.383818],[44.947365999999995,40.384364999999995],[44.947171999999995,40.384129],[44.946928,40.384328],[44.948676999999996,40.38905],[44.948578999999995,40.392238],[44.943345,40.392362999999996],[44.943414,40.392849],[44.941801999999996,40.396936],[44.941066,40.3979],[44.942093,40.398952],[44.942169,40.399403],[44.941797,40.400234],[44.942558,40.401337],[44.943307,40.401323],[44.940701,40.407647],[44.952149,40.424164],[44.951840999999995,40.424541],[44.950828,40.423446999999996],[44.950233999999995,40.423660999999996],[44.95012,40.424133],[44.950317999999996,40.424659],[44.951087,40.425430999999996],[44.951308,40.426247],[44.951088,40.427116],[44.950337,40.427577],[44.949574999999996,40.42901],[44.949422999999996,40.429777],[44.94977,40.430485],[44.949431,40.431762],[44.948454999999996,40.43188],[44.948246,40.431022],[44.94725,40.430805],[44.945673,40.432876],[44.944444999999995,40.433378],[44.943222,40.435428],[44.943264,40.436329],[44.944725,40.437849],[44.944463,40.441142],[44.943356,40.441843999999996],[44.943566999999994,40.442422],[44.943363,40.442526],[44.942917,40.441860999999996],[44.942586,40.442043999999996],[44.942101,40.441401],[44.941365999999995,40.442747],[44.940489,40.443546999999995],[44.938703,40.44377],[44.938507,40.444047],[44.932224,40.435359],[44.921282,40.453806],[44.913246,40.443304],[44.912642999999996,40.442941],[44.910314,40.449708],[44.908614,40.449428999999995],[44.908004,40.441973],[44.906498,40.441423],[44.899051,40.440197999999995],[44.904019999999996,40.377545],[44.904379999999996,40.377429],[44.905045,40.376017999999995],[44.90587,40.372969],[44.90636,40.372043],[44.907469999999996,40.372434],[44.907751,40.372946],[44.909698,40.369887999999996],[44.908027,40.366321],[44.908379,40.364069],[44.907565999999996,40.362815],[44.907474,40.362218],[44.907773,40.361466],[44.909434999999995,40.361836],[44.909548,40.36089],[44.909186,40.360451],[44.908282,40.360555],[44.907872999999995,40.359528999999995],[44.9079,40.358678999999995],[44.908594,40.358537999999996],[44.909878,40.359677999999995],
                        [44.910326999999995,40.359649],[44.910444999999996,40.359187],[44.909771,40.357395],[44.909689,40.356316],[44.911280999999995,40.355612],[44.912217,40.355942999999996],[44.913055,40.352606],[44.91419,40.350904],[44.91403,40.349727],[44.913694,40.349331],[44.91149,40.350061],[44.909321,40.35012],[44.908649,40.349821999999996],[44.909161999999995,40.349258999999996],[44.915513,40.337077],[44.915726,40.319921],[44.915642,40.295491],[44.916984,40.297579]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFFF00',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_egeruhay_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[45.022622999999996,40.320498],[45.023271,40.320586999999996],[45.023897,40.322027999999996],[45.023669999999996,40.322761],[45.027015999999996,40.326888],[45.028894,40.33023],[45.028977999999995,40.334112],[45.032941,40.332086],[45.043439,40.346534999999996],[45.052437,40.359677],[45.038008,40.382981],[45.034006999999995,40.388753],[45.027349,40.396888],[45.013408999999996,40.411544],[45.003316999999996,40.424462],[45.004039999999996,40.426071],[45.001428999999995,40.428602999999995],[45.002111,40.430085999999996],[45.002140999999995,40.430901999999996],[45.001959,40.431846],[45.001106,40.433444],[45.000443999999995,40.434013],[44.999401,40.433637],[44.997414,40.434194999999995],[44.996165999999995,40.434174],[44.988099,40.441829],[44.985872,40.446267999999996],[44.983245,40.448091],[44.982248,40.447801999999996],[44.980033,40.450461],[44.9636,40.477992],[44.963466,40.477733],[44.959016999999996,40.478314],[44.951215999999995,40.462039],[44.943628,40.450854],[44.943338,40.451215999999995],[44.938507,40.444047],[44.940489,40.443546999999995],[44.941365999999995,40.442747],[44.942101,40.441401],[44.942586,40.442043999999996],[44.942917,40.441860999999996],[44.943363,40.442526],[44.943566999999994,40.442422],[44.943356,40.441843999999996],[44.944463,40.441142],[44.944725,40.437849],[44.943264,40.436329],[44.943222,40.435428],[44.944444999999995,40.433378],[44.945673,40.432876],[44.94725,40.430805],[44.948246,40.431022],[44.948454999999996,40.43188],[44.949431,40.431762],[44.94977,40.430485],[44.949422999999996,40.429777],[44.949574999999996,40.42901],[44.950337,40.427577],[44.951088,40.427116],[44.951308,40.426247],[44.951087,40.425430999999996],[44.950317999999996,40.424659],[44.950233999999995,40.423660999999996],[44.950828,40.423446999999996],[44.951840999999995,40.424541],[44.952149,40.424164],[44.940701,40.407647],[44.943307,40.401323],[44.942558,40.401337],[44.941797,40.400234],[44.942169,40.399403],[44.942093,40.398952],[44.941066,40.3979],[44.941801999999996,40.396936],[44.943414,40.392849],[44.943238,40.392486999999996],[44.948578999999995,40.392238],[44.948676999999996,40.38905],[44.946928,40.384328],[44.947365999999995,40.384364999999995],[44.947671,40.383818],[44.947995,40.383952],[44.948166,40.383185],[44.948564,40.382808999999995],[44.948975,40.383345],[44.951101,40.383485],[44.952124,40.383165999999996],[44.952771,40.383838999999995],[44.953365,40.383151999999995],[44.95455,40.383393999999996],[44.95487,40.382985999999995],[44.955769,40.382776],[44.957460999999995,40.383558],[44.95872,40.383396999999995],[44.959137,40.383823],[44.959399999999995,40.383289],[44.959224,40.382265],[44.959693,40.381302],[44.960333,40.381069],[44.96058,40.382227],[44.961178,40.382472],[44.961959,40.383914999999995],[44.962576,40.384007],[44.963406,40.384763],[44.964476999999995,40.384049999999995],[44.964634,40.382553],[44.963606,40.382264],[44.963643999999995,40.381315],[44.964272,40.380708999999996],[44.964901,40.381031],[44.965182999999996,40.381712],[44.965894999999996,40.381353],[44.965739,40.37984],[44.966279,40.377849999999995],[44.967053,40.379148],[44.967580999999996,40.378937],[44.964237999999995,40.374151999999995],[44.978925,40.354012],[44.988498,40.368002],[44.989303,40.369685],[44.989585999999996,40.371089999999995],[44.989754,40.370062999999995],[44.989519,40.369439],[44.989591,40.368533],[44.990193999999995,40.368099],[44.990634,40.368347],[44.991102999999995,40.367742],[44.990728,40.367263],[44.991355999999996,40.366609],[44.991425,40.365314999999995],[44.990383,40.364571999999995],[44.991032,40.3632],[44.991008,40.362586],[44.990708999999995,40.36231],[44.990190999999996,40.352509],[44.997961,40.344570999999995],[45.003021,40.336717],[45.010253999999996,40.333214999999996],[45.010905,40.33227],[45.011824999999995,40.332215],[45.013293,40.330878999999996],[45.013731,40.331238],[45.013869,40.332296],[45.014604999999996,40.332653],[45.015777,40.334393999999996],[45.017252,40.334685],[45.01752,40.331396999999996],[45.017207,40.327794],[45.018527,40.327615],[45.017106999999996,40.32373],[45.01728,40.323071999999996],[45.018080999999995,40.322189],[45.019532999999996,40.322607999999995],[45.020719,40.32205]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFFF00',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });


		var gran_blech_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.799566999999996,40.441767],[44.822700999999995,40.474714],[44.823128999999994,40.474101999999995],[44.826871999999995,40.478738],[44.827481999999996,40.478508],[44.827568,40.479046],[44.836085,40.489996],[44.835015999999996,40.491155],[44.839223999999994,40.497651999999995],[44.884248,40.562177999999996],[44.883157,40.563756999999995],[44.882214,40.564561999999995],[44.878961,40.564408],[44.875704,40.567603],[44.873771,40.56758],[44.868573999999995,40.56991],[44.867954,40.571112],[44.86794,40.574478],[44.867428,40.576749],[44.867298999999996,40.579468999999996],[44.866009,40.581224999999996],[44.865003,40.583698],[44.864739,40.584885],[44.865041,40.586425999999996],[44.864976999999996,40.587976],[44.864339,40.589423],[44.863718999999996,40.589662],[44.861306,40.589279999999995],[44.858871,40.586237],[44.85749,40.587103],[44.853598999999996,40.590894999999996],[44.838857,40.569494999999996],[44.803011,40.518674999999995],[44.794971,40.525163],[44.789511999999995,40.517054],[44.789935,40.515963],[44.790403,40.515848999999996],[44.791377999999995,40.514685],[44.791927,40.514955],[44.791971,40.513947],[44.792607,40.512871],[44.76224,40.469865],[44.762451,40.464576],[44.763013,40.465208],[44.796366,40.444385]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'BDB76B',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });


		var gran_may_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.76224,40.469865],[44.792607,40.512871],[44.791971,40.513947],[44.791927,40.514955],[44.791377999999995,40.514685],[44.790403,40.515848999999996],[44.789935,40.515963],[44.789834,40.516669],[44.789511999999995,40.517054],[44.794971,40.525163],[44.803011,40.518674999999995],[44.838857,40.569494999999996],[44.853598999999996,40.590894999999996],[44.852627,40.59206],[44.852078999999996,40.592189999999995],[44.850584999999995,40.59146],[44.849154999999996,40.59144],[44.846008,40.593886],[44.843984,40.594632999999995],[44.842357,40.593775],[44.840509999999995,40.59041],[44.839842999999995,40.588536],[44.83909,40.587491],[44.836945,40.586661],[44.834210999999996,40.586953],[44.832189,40.585682],[44.830784,40.585885999999995],[44.829738,40.587061],[44.828635,40.589253],[44.827328,40.590299],[44.826536,40.590391],[44.826071,40.590993999999995],[44.824473,40.594152],[44.823561,40.595313999999995],[44.816502,40.595431],[44.814067,40.599345],[44.811189999999996,40.602123],[44.809233,40.606071],[44.808586,40.606466],[44.80508,40.60682],[44.804486999999995,40.607543],[44.798386,40.598575],[44.7921,40.602818],[44.776039,40.581018],[44.779722,40.575610999999995],[44.765268,40.554361],[44.762702999999995,40.557655],[44.759999,40.553323],[44.757477,40.554139],[44.757124999999995,40.554386],[44.756383,40.556349],[44.748104999999995,40.562940999999995],[44.744696999999995,40.563829999999996],[44.743942999999994,40.564578999999995],[44.743953,40.531002],[44.742781,40.524629999999995],[44.74225,40.523278999999995],[44.742228999999995,40.522296999999995],[44.741628,40.521218],[44.741555,40.519971999999996],[44.741116999999996,40.519179],[44.741639,40.518808],[44.744408,40.519693],[44.744391,40.520624999999995],[44.74516,40.520291],[44.745658999999996,40.521184999999996],[44.746123,40.520677],[44.74623,40.520033999999995],[44.746865,40.520261999999995],[44.747516,40.519777],[44.747158,40.521023],[44.747372,40.521634999999996],[44.748234,40.521544999999996],[44.748712999999995,40.520120999999996],[44.750679999999996,40.521451],[44.751343999999996,40.521218],[44.752387,40.521414],[44.754849,40.524682999999996],[44.756315,40.525276999999996],[44.756544,40.526407999999996],[44.756899999999995,40.526806],[44.757515999999995,40.526464999999995],[44.757867,40.525545],[44.758266,40.525845],[44.758593,40.526679],[44.758914,40.526472999999996],[44.759164,40.526968],[44.759525,40.526226],[44.761205,40.526997],[44.762122,40.527032]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFC0CB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_nat_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.759999,40.553323],[44.762702999999995,40.557655],[44.765268,40.554361],[44.779722,40.575610999999995],[44.776039,40.581018],[44.7921,40.602818],[44.798386,40.598575],[44.804486999999995,40.607543],[44.804083999999996,40.612105],[44.803301999999995,40.614450999999995],[44.798778,40.619076],[44.796391,40.620703],[44.794801,40.623337],[44.793983999999995,40.624106],[44.791923,40.624309],[44.787262999999996,40.62367],[44.784414,40.625007],[44.779893,40.628533],[44.778613,40.628589999999996],[44.777010999999995,40.627519],[44.775963999999995,40.627311999999996],[44.773866999999996,40.630129],[44.772926999999996,40.63072],[44.768147,40.629515999999995],[44.764587999999996,40.628130999999996],[44.763163,40.628363],[44.760196,40.630224999999996],[44.758327,40.629166999999995],[44.757526999999996,40.62936],[44.754394999999995,40.631713999999995],[44.751200999999995,40.632742],[44.749320999999995,40.634619],[44.747465,40.63489],[44.746038999999996,40.63742],[44.744693999999996,40.638577],[44.741039,40.639384],[44.736581,40.641303],[44.731621999999994,40.64152],[44.72616,40.643249999999995],[44.72325,40.646111999999995],[44.719628,40.646608],[44.718509,40.647901999999995],[44.716995999999995,40.648179],[44.715999,40.648855999999995],[44.713871999999995,40.648184],[44.709309999999995,40.647886],[44.707229999999996,40.651706],[44.704595999999995,40.653846],[44.703520999999995,40.653724],[44.702194,40.65229],[44.698336,40.652725],[44.696897,40.651668],[44.695141,40.651776],[44.69368,40.65294],[44.691818999999995,40.653088],[44.690211999999995,40.654354],[44.688482,40.653388],[44.687855,40.654525],[44.688252,40.657014],[44.687992,40.657894],[44.687013,40.658837999999996],[44.684992,40.659524999999995],[44.684456,40.660126],[44.684149999999995,40.661756],[44.684778,40.664009],[44.684303,40.665124999999996],[44.682803,40.665833],[44.6802,40.664803],[44.679282,40.665017999999996],[44.678608,40.665962],[44.678025999999996,40.667978999999995],[44.676404,40.668279999999996],[44.672689,40.670646],[44.671157,40.670989],[44.668333,40.674257],[44.667612999999996,40.676489],[44.666587,40.676617],[44.665408,40.678484],[44.662593,40.680409999999995],[44.660649,40.683434999999996],[44.660153,40.683727999999995],[44.65667,40.672312999999995],[44.653085,40.67417],[44.651416,40.669626],[44.636114,40.63941],[44.635715999999995,40.638197999999996],[44.635771999999996,40.618672],[44.653652,40.618688],[44.65389,40.568286],[44.738983,40.568532],[44.739216,40.567941999999995],[44.740489,40.567684],[44.741181,40.565017999999995],[44.741858,40.566091],[44.744696999999995,40.563829999999996],[44.748104999999995,40.562940999999995],[44.756383,40.556349],[44.757124999999995,40.554386]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '00FF00',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_voln_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.635715999999995,40.638197999999996],[44.636114,40.63941],[44.651416,40.669626],[44.652432999999995,40.671856999999996],[44.653085,40.67417],[44.65667,40.672312999999995],[44.657117,40.674422],[44.660153,40.683727999999995],[44.654982,40.683949999999996],[44.654185,40.683434999999996],[44.653327999999995,40.683327999999996],[44.651565999999995,40.68425],[44.649589999999996,40.684121999999995],[44.647645,40.68528],[44.646204999999995,40.687039999999996],[44.6438,40.688863999999995],[44.642548999999995,40.691672],[44.640986999999996,40.693228],[44.640192,40.695378999999996],[44.63915,40.696645],[44.638881999999995,40.698544],[44.63804,40.699830999999996],[44.637747999999995,40.702599],[44.63663,40.703007],[44.635191999999996,40.702602],[44.634409999999995,40.702988],[44.633675,40.706056],[44.627247,40.718888],[44.626352,40.719978999999995],[44.6259,40.721759999999996],[44.623906999999996,40.720054],[44.622988,40.719625],[44.621885,40.72147],[44.621393999999995,40.723337],[44.620107,40.724517],[44.618911999999995,40.724539],[44.617272,40.723316],[44.616535999999996,40.723831],[44.616167999999995,40.724989],[44.616153,40.726791999999996],[44.614804,40.727821999999996],[44.612686,40.730258],[44.608107,40.730765999999996],[44.605387,40.733647],[44.603828,40.733633],[44.602604,40.735155],[44.601214999999996,40.735627],[44.600179999999995,40.736871],[44.597657999999996,40.737926],[44.596326999999995,40.737218999999996],[44.59532,40.736095],[44.594474,40.735023999999996],[44.59375,40.733199],[44.592617999999995,40.733154],[44.591874,40.733672],[44.587452,40.734657],[44.586675,40.73385],[44.586473,40.731991],[44.586087,40.731204999999996],[44.583715,40.729351],[44.583239,40.729296],[44.5823,40.730214],[44.580439999999996,40.730658999999996],[44.577613,40.729299999999995],[44.576325999999995,40.730294],[44.575689999999994,40.730222999999995],[44.574929,40.729152],[44.574022,40.72691],[44.572975,40.726399],[44.572007,40.726718],[44.570205,40.728079],[44.568948,40.728553],[44.567805,40.728356999999995],[44.566604999999996,40.724844999999995],[44.565729,40.723172999999996],[44.565324,40.723095],[44.564022,40.723732],[44.562833999999995,40.725026],[44.561155,40.7249],[44.560213,40.72524],[44.558347999999995,40.727655999999996],[44.553443,40.729375999999995],[44.550899,40.730702],[44.549703,40.730810999999996],[44.542896,40.72994],[44.543285999999995,40.703860999999996],[44.541031,40.70532],[44.538942999999996,40.69502],[44.535302,40.687698],[44.530184,40.689799],[44.530369,40.659182],[44.530448,40.657779],[44.530718,40.657241],[44.531138999999996,40.657331],[44.532078999999996,40.659456],[44.531898999999996,40.660257],[44.532405999999995,40.660892],[44.53203,40.661614],[44.532139,40.662006],[44.533029,40.662003999999996],[44.533159999999995,40.662541999999995],[44.532827,40.663115999999995],[44.532951999999995,40.663585],[44.533423,40.663447],[44.533752,40.663785],[44.534123,40.663453],[44.534438,40.664108],[44.534873,40.664336],[44.535246,40.665104],[44.535149,40.665693999999995],[44.535579999999996,40.66585],[44.535802,40.666387],[44.535478,40.666964],[44.535748999999996,40.667843],[44.536739,40.669222],[44.537994999999995,40.668833],[44.538516,40.669436999999995],[44.539237,40.669129],[44.540039,40.668383],[44.539963,40.667666],[44.541275999999996,40.66691],[44.541647999999995,40.666979999999995],[44.54217,40.667428],[44.542062,40.668839999999996],[44.54229,40.669042],[44.542496,40.668723],[44.543329,40.668669],[44.543292,40.669897],[44.543994999999995,40.670623],[44.544041,40.671547],[44.545322999999996,40.672323],[44.546037999999996,40.671329],[44.546427,40.671538999999996],[44.547351,40.669629],[44.548421999999995,40.669042],[44.548705,40.669277],[44.548902,40.668034999999996],[44.549129,40.667733],[44.549534,40.667829],[44.550104999999995,40.666416],[44.550384,40.666553],[44.552119999999995,40.664072999999995],[44.552845,40.664182],[44.553027,40.66359],[44.553291,40.663545],[44.553961,40.664460999999996],[44.556723,40.66365],[44.557272999999995,40.662980999999995],[44.557406,40.662082999999996],[44.558614,40.659669],[44.559335999999995,40.658769],[44.559362,40.658364],[44.560673,40.657765],[44.562069,40.658249999999995],[44.564662999999996,40.656048999999996],[44.564918,40.655412999999996],[44.565922,40.65491],[44.566634,40.653490999999995],[44.566894,40.653403999999995],[44.567163,40.653814],[44.568244,40.65356],[44.56843,40.653143],[44.569103,40.653355999999995],[44.56982,40.652645],[44.569576999999995,40.651934],[44.570231,40.651047999999996],[44.570279,40.649409999999996],[44.570836,40.649392],[44.57072,40.648841],[44.571501999999995,40.647985999999996],[44.572356,40.647953]
						,[44.572665,40.647588],[44.573184999999995,40.648534999999995],[44.573825,40.648486],[44.574113,40.648902],[44.574545,40.648392],[44.575007,40.648483],[44.575424999999996,40.649041],[44.576232,40.648863],[44.577180999999996,40.646601],[44.578761,40.645725999999996],[44.579865999999996,40.643730999999995],[44.581685,40.643276],[44.623712999999995,40.643743],[44.631848,40.643484],[44.635723999999996,40.643763]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: 'FFA07A',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });

		var gran_hodz_sel = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: [
				[

						[44.478198,40.616344],[44.478857999999995,40.617025999999996],[44.478966,40.617796999999996],[44.479575999999994,40.617833],[44.479683,40.617241],[44.480052,40.617143999999996],[44.480395,40.617788],[44.480367,40.618485],[44.481362999999995,40.618137999999995],[44.481663999999995,40.618601],[44.481915,40.618469999999995],[44.482363,40.618842],[44.482752999999995,40.621328],[44.482597999999996,40.661296],[44.510180999999996,40.661654999999996],[44.517916,40.661477999999995],[44.518696,40.662254999999995],[44.519134,40.662335],[44.521741999999996,40.661611],[44.526334999999996,40.659447],[44.527688,40.659678],[44.528299,40.658592],[44.528822,40.658505],[44.529332,40.657692999999995],[44.529568,40.656735999999995],[44.530203,40.656712],[44.530428,40.656971],[44.530276,40.657568999999995],[44.530448,40.657779],[44.530184,40.689799],[44.535302,40.687698],[44.538942999999996,40.69502],[44.541031,40.70532],[44.543285999999995,40.703860999999996],[44.542896,40.72994],[44.540326,40.730577],[44.537377,40.730242],[44.535962,40.73038],[44.534721,40.730872999999995],[44.533563,40.732119999999995],[44.531473,40.733075],[44.530927999999996,40.734249],[44.531368,40.737863999999995],[44.531014,40.739759],[44.530046,40.741112],[44.527905,40.742881],[44.525228999999996,40.742720999999996],[44.52241,40.743528],[44.519798,40.743604999999995],[44.517821,40.745722],[44.513377999999996,40.747403999999996],[44.511361,40.74763],[44.509298,40.748835],[44.508046,40.747752],[44.506695,40.747761],[44.505666999999995,40.748813],[44.504644,40.751677],[44.50391,40.752385],[44.501158,40.753223999999996],[44.49783,40.754858999999996],[44.49576,40.755165999999996],[44.494586,40.755655999999995],[44.493351999999994,40.757014999999996],[44.493317999999995,40.759664],[44.492374999999996,40.763217],[44.490033,40.767423],[44.488529,40.768851],[44.488099,40.770402],[44.486934,40.770933],[44.48565,40.772205],[44.482296,40.773554999999995],[44.480062,40.775703],[44.478868,40.774712],[44.476057999999995,40.773680999999996],[44.473786,40.77392],[44.471588999999994,40.773527],[44.469491999999995,40.773675999999995],[44.46866,40.773058999999996],[44.468025,40.771846],[44.466432999999995,40.770351999999995],[44.466099,40.768018999999995],[44.464014,40.762874],[44.463938,40.757645],[44.46427,40.739014999999995],[44.463766,40.722848],[44.464224,40.721055],[44.464180999999996,40.720189],[44.463626,40.718444999999996],[44.46385,40.717337],[44.464614,40.683281],[44.464541,40.650202],[44.464853,40.638754999999996],[44.464513,40.636539],[44.464875,40.629649],[44.463283999999994,40.628524999999996],[44.464642999999995,40.624519],[44.464468,40.620007],[44.464079999999996,40.618945],[44.464909,40.618984],[44.465796,40.619946],[44.467614,40.620101999999996],[44.467355999999995,40.621216],[44.467768,40.621072999999996],[44.46815,40.620483],[44.468002,40.621227999999995],[44.467571,40.621446],[44.467676999999995,40.621843999999996],[44.46794,40.621660999999996],[44.468920999999995,40.621963],[44.469274999999996,40.621255999999995],[44.468582999999995,40.620121],[44.469102,40.619378],[44.469113,40.618877999999995],[44.470693,40.618504],[44.471118999999995,40.619157],[44.471457,40.619111],[44.471869999999996,40.618263999999996],[44.473133,40.618007999999996],[44.473358,40.61749],[44.473724999999995,40.617491],[44.474044,40.616793],[44.474953,40.617022999999996],[44.475645,40.616671],[44.475839,40.617751],[44.476096999999996,40.617846],[44.476741,40.616485]


				]
            ],
        },
        properties:{
        }
    }, {
        fillColor: '9370DB',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });
















// fap1.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_egeruhay);
// });
// fap1.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_egeruhay);
// });
//
// fap2.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_polit);
// });
// fap2.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_polit);
// });
//
// fap3.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_chatchemsiy);
// });
// fap3.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_chatchemsiy);
// });
//
// fap4.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_krasnfars);
// });
// fap4.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_krasnfars);
// });
//
// fap5.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_komsomol);
// });
// fap5.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_komsomol);
// });
//
// fap6.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_ignat);
// });
// fap6.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_ignat);
// });
//
// fap7.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_krasn);
// });
// fap7.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_krasn);
// });
//
// fap8.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_kazen);
// });
// fap8.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_kazen);
// });
//
// fap9.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_karmolin);
// });
// fap9.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_karmolin);
// });
//
// fap10.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_shelk);
// });
// fap10.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_shelk);
// });
//
//
// neotl.events.add('balloonopen', function () {
// myMap.geoObjects.add(gran_kosh);
// });
// neotl.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_kosh);
// });


// crb.events.add('balloonopen', function () {
// removeFaps(faps);
// addObjs(fap1, fap2, fap3, fap4, fap5);
// removeAmbs(ambs);
// addObjs(amb1);
// //addObjs(gran_ignat_sel, gran_egeruhay_sel, gran_dmitr_sel, gran_kosh_sel);
// addObjs(gran_kosh, gran_drujba, gran_drujba, gran_chehrak1, gran_chehrak2, gran_otradn, gran_novoaleks, gran_dmtr, gran_plod)
// addGranF(gran_faps);
// removeObjs(gran_ignat, gran_krasn, gran_kazen, gran_karmolin, gran_shelk);
// });
// crb.events.add('balloonclose', function () {
// removeGranA(gran_ambs);
// removeGranF(gran_faps);
// //removeObjs(gran_ignat_sel, gran_egeruhay_sel, gran_dmitr_sel, gran_kosh_sel);
// if ($('#fap').prop('checked'))
//     addFaps(faps);
// else
// 	removeFaps(faps);
// if ($('#ter').prop('checked'))
//     //myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     addAmbs(ambs);
// });




// amb1.events.add('balloonopen', function () {
// removeFaps(faps);
// removeObjs(crb, amb2, amb3, amb4, amb5, amb6);
// addObjs(fap1, fap2, fap3, fap4, fap5);
// addObjs(gran_drujba);
// addObjs(gran_egeruhay, gran_polit, gran_chatchemsiy, gran_krasnfars, gran_komsomol);
// });
// amb1.events.add('balloonclose', function () {
// removeGranA(gran_ambs);
// removeGranF(gran_faps);
// if ($('#fap').prop('checked'))
//     addObjs(fap6, fap7, fap8, fap9, fap10);
// else
// 	removeFaps(faps);
// if ($('#ter').prop('checked'))
//     //addObjs(gran_rajon);
// if ($('#amb').prop('checked'))
//     addObjs(crb, amb1, amb2, amb3, amb4, amb5, amb6);
// });
//
//
// amb2.events.add('balloonopen', function () {
// myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// myMap.geoObjects.remove(crb).remove(amb1).remove(amb3).remove(amb4).remove(amb5).remove(amb6);
// myMap.geoObjects.add(fap7);
// myMap.geoObjects.add(gran_may);
// myMap.geoObjects.add(gran_krasn);
// });
// amb2.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_may);
// myMap.geoObjects.remove(gran_krasn);
// if ($('#fap').prop('checked'))
//     myMap.geoObjects.add(fap8).add(fap3).add(fap10).add(fap6).add(fap9).add(fap1).add(fap4).add(fap2).add(fap5);
// else
//     myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// if ($('#ter').prop('checked'))
//     //myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     myMap.geoObjects.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6);
// });
//
//
// amb3.events.add('balloonopen', function () {
// myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// myMap.geoObjects.remove(crb).remove(amb1).remove(amb2).remove(amb4).remove(amb5).remove(amb6);
// myMap.geoObjects.add(fap6);
// myMap.geoObjects.add(gran_blech);
// myMap.geoObjects.add(gran_ignat);
// });
// amb3.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_blech);
// myMap.geoObjects.remove(gran_ignat);
// if ($('#fap').prop('checked'))
//     myMap.geoObjects.add(fap8).add(fap3).add(fap10).add(fap9).add(fap1).add(fap4).add(fap2).add(fap5).add(fap7);
// else
//     myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// if ($('#ter').prop('checked'))
//     //myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     myMap.geoObjects.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6);
// });
//
//
// amb4.events.add('balloonopen', function () {
// myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// myMap.geoObjects.remove(crb).remove(amb1).remove(amb2).remove(amb3).remove(amb5).remove(amb6);
// myMap.geoObjects.add(fap8);
// myMap.geoObjects.add(gran_nat);
// myMap.geoObjects.add(gran_kazen);
// });
// amb4.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_nat);
// myMap.geoObjects.remove(gran_kazen);
// if ($('#fap').prop('checked'))
//     myMap.geoObjects.add(fap3).add(fap10).add(fap6).add(fap9).add(fap1).add(fap4).add(fap2).add(fap5).add(fap7);
// else
//     myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// if ($('#ter').prop('checked'))
//     //myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     myMap.geoObjects.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6);
// });
//
//
// amb5.events.add('balloonopen', function () {
// myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// myMap.geoObjects.remove(crb).remove(amb1).remove(amb2).remove(amb3).remove(amb4).remove(amb6);
// myMap.geoObjects.add(fap10).add(fap9);
// myMap.geoObjects.add(gran_voln);
// myMap.geoObjects.add(gran_karmolin).add(gran_shelk);
// });
// amb5.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_voln);
// myMap.geoObjects.remove(gran_karmolin).remove(gran_shelk);
// if ($('#fap').prop('checked'))
//     myMap.geoObjects.add(fap8).add(fap3).add(fap6).add(fap1).add(fap4).add(fap2).add(fap5).add(fap7);
// else
//     myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// if ($('#ter').prop('checked'))
//    // myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     myMap.geoObjects.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6);
// });
//
//
// amb6.events.add('balloonopen', function () {
// myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// myMap.geoObjects.remove(crb).remove(amb1).remove(amb2).remove(amb3).remove(amb4).remove(amb5);
// myMap.geoObjects.add(gran_hodz);
// });
// amb6.events.add('balloonclose', function () {
// myMap.geoObjects.remove(gran_hodz);
// if ($('#fap').prop('checked'))
//     myMap.geoObjects.add(fap8).add(fap3).add(fap10).add(fap6).add(fap9).add(fap1).add(fap4).add(fap2).add(fap5).add(fap7);
// else
//     myMap.geoObjects.remove(fap8).remove(fap3).remove(fap10).remove(fap6).remove(fap9).remove(fap1).remove(fap4).remove(fap2).remove(fap5).remove(fap7);
// if ($('#ter').prop('checked'))
//    // myMap.geoObjects.add(gran_rajon);
// if ($('#amb').prop('checked'))
//     myMap.geoObjects.add(crb).add(amb1).add(amb2).add(amb3).add(amb4).add(amb5).add(amb6);
// });

		var gran_mkp = new ymaps.GeoObject({
        geometry: {type: "Polygon",coordinates: [[
						[44.662219,39.896502],[44.676435,39.912785],[44.67516,39.915138],[44.683451,39.92445],[44.684225,39.926089],[44.68712,39.92734],[44.689609,39.927248999999996],[44.690695,39.9266],[44.691296,39.925366],[44.691143,39.922146999999995],[44.688463999999996,39.91858],[44.689054,39.916708],[44.691379999999995,39.915453],[44.697570999999996,39.918209999999995],[44.700043,39.916826],[44.700655,39.915699],[44.700717,39.913747],[44.698167999999995,39.910131],[44.69914,39.908468],[44.702782,39.908628],[44.706531,39.912039],[44.707741,39.912442],[44.710816,39.912034999999996],[44.712804999999996,39.910028],[44.7363,39.942748],[44.723535,39.960815],[44.730059,39.969612999999995],[44.717408,39.987612999999996],[44.747099999999996,40.02879],[44.752697,40.01887],[44.757735,40.01348],[44.759775999999995,40.008437],[44.784949999999995,39.994377],[44.793757,40.026168],[44.777142999999995,40.035402999999995],[44.773976,40.023734999999995],[44.765451999999996,40.028513],[44.768861,40.039961],[44.76462,40.042359],[44.774474,40.077933],[44.753831999999996,40.089315],[44.757110999999995,40.101095],[44.754528,40.102726],[44.71546,40.124632999999996],[44.712132,40.112859],[44.703624,40.117515],[44.693988999999995,40.084931999999995],[44.691621999999995,40.087275999999996],[44.690563999999995,40.089461],[44.687909999999995,40.091471],[44.687200999999995,40.091221],[44.683357,40.085553999999995],[44.684,40.084679],[44.684796999999996,40.085899],[44.684988999999995,40.085355],[44.677264,40.074219],[44.683761999999994,40.065196],[44.692032,40.076601],[44.702233,40.062514],[44.694328,40.05164],[44.687199,40.059912],[44.683994,40.054051],[44.68253,40.056076],[44.678999,40.050416999999996],[44.662966,40.072706],[44.666894,40.077877],[44.656492,40.089003],[44.672719,40.10615],[44.67158,40.120525],[44.675453999999995,40.124098],[44.687097,40.116651999999995],[44.690296,40.125009999999996],[44.692397,40.123802999999995],[44.695229,40.134809],[44.680949999999996,40.131568],[44.673066,40.128699999999995],[44.667426999999996,40.119054999999996],[44.663092999999996,40.114360999999995],[44.657275999999996,40.119076],[44.653147,40.123841999999996],[44.646383,40.129874],[44.644086,40.129574],[44.642132,40.130674],[44.629895999999995,40.133674],[44.63053,40.1355],[44.628582,40.135822],[44.628676,40.136443],[44.627545999999995,40.136933],[44.627469999999995,40.136202999999995],[44.623681,40.137442],[44.623695999999995,40.138807],[44.619617999999996,40.13924],[44.615108,40.142322],[44.614031,40.141096999999995],[44.614048,40.143384],[44.614792,40.146291],[44.614539,40.156670999999996],[44.615646,40.161027],[44.611518,40.158124],[44.610313999999995,40.156107],[44.606107,40.167640999999996],[44.578975,40.149483],[44.574642,40.156619],[44.574785999999996,40.157354],[44.573375,40.158089],[44.567333,40.168085999999995],[44.564304,40.164511999999995],[44.564948,40.162442],[44.563452999999996,40.159245],[44.563537,40.15697],[44.562801,40.154315],[44.563077,40.153725],[44.562597,40.15329],[44.561824,40.153774],[44.560131,40.146187999999995],[44.56446,40.143553],[44.566461,40.13935],[44.565551,40.138501],[44.565017999999995,40.138776],[44.56489,40.137308],[44.563933999999996,40.137342],[44.562979999999996,40.136288],[44.564439,40.135549],[44.565106,40.133694],[44.564223,40.126461],[44.564459,40.123376],[44.565914,40.122188],[44.568405,40.123526999999996],[44.57588,40.118097999999996],[44.575581,40.1162],[44.572897,40.116651],[44.570842,40.106759],[44.573763,40.102627999999996],[44.578173,40.099002],[44.578889,40.097809],[44.580341999999995,40.08821],[44.582003,40.085071],[44.581244999999996,40.081573],[44.580991999999995,40.076924],[44.580236,40.074749],[44.58226,40.071847],[44.583694,40.072206],[44.585172,40.068954999999995],[44.584951,40.066299],[44.586129,40.061578],[44.586343,40.0586],[44.587331999999996,40.056624],[44.586622,40.053616],[44.587069,40.051573],[44.590095999999996,40.048797],[44.595591,40.047233],[44.604707999999995,40.040772],[44.6046,40.037375999999995],[44.605227,40.035258999999996],[44.606539999999995,40.03365],[44.604976,40.026849999999996],[44.605962999999996,40.022701],[44.609992999999996,40.013348],[44.615203,40.005956],[44.618263999999996,40.003208],[44.613369,39.999226],[44.605908,39.995481999999996],[44.604774,39.994065],[44.600297999999995,39.991898],[44.598389,39.991662],[44.596855999999995,39.988958],[44.590286,39.981952],[44.608964,39.948665999999996],[44.606789,39.944646999999996],[44.606795,39.942285999999996],[44.607412,39.940238],[44.608388,39.939381999999995],[44.608936,39.940166],[44.612539999999996,39.935428],[44.615162999999995,39.935352],[44.609609999999996,39.926079],[44.610913,39.924637],[44.608765,39.915363],[44.612736999999996,39.913292],[44.615314,39.913741],[44.619194,39.911809999999996],[44.620107999999995,39.912115],[44.620522,39.911415],[44.626124999999995,39.920164],[44.6419,39.904441999999996],[44.651317999999996,39.915819]
]],},properties:{}},{
        fillColor: 'C0F56E',
        strokeColor: '#0000FF',
        opacity: 0.2,
        strokeWidth: 1
    });


const faps = [fap1, fap2, fap3, fap4, fap5, fap6, fap7, fap8, fap9, fap10];
const ambs = [amb1, amb2, amb3, amb4, amb5, amb6];
const gran_faps = [gran_egeruhay, gran_polit, gran_chatchemsiy, gran_krasnfars, gran_komsomol, gran_ignat, gran_krasn, gran_kazen, gran_karmolin, gran_shelk];
const gran_ambs = [gran_blech, gran_chehrak1, gran_chehrak2, gran_dmtr, gran_drujba, gran_hodz, gran_kosh, gran_may, gran_nat, gran_novoaleks, gran_otradn, gran_plod, gran_voln];




function removeFaps(objects) {
objects.forEach(fap => myMap.geoObjects.remove(fap));
}
function addFaps(objects) {
objects.forEach(fap => myMap.geoObjects.add(fap));
}


function removeAmbs(objects) {
objects.forEach(amb => myMap.geoObjects.remove(amb));
}
function addAmbs(objects) {
objects.forEach(amb => myMap.geoObjects.add(amb));
}


function removeGranF(objects) {
objects.forEach(gran_ => myMap.geoObjects.remove(gran_));
}
function addGranF(objects) {
objects.forEach(gran_ => myMap.geoObjects.add(gran_));
}


function removeGranA(objects) {
objects.forEach(gran_ => myMap.geoObjects.remove(gran_));
}
function addGranA(objects) {
objects.forEach(gran_ => myMap.geoObjects.add(gran_));
}


function removeObjs(...objs) {
    objs.forEach(obj => myMap.geoObjects.remove(obj));
}
function addObjs(...objs) {
    objs.forEach(obj => myMap.geoObjects.add(obj));
}




	var obj = 
	[
        neotl,
		fap1,
		fap2,
		fap3,
		fap4,
		fap5,
		fap6,
		fap7,
		fap8,
		fap9,
		fap10,
		gran_drujba,
		gran_rajon,
		crb,
		amb1,
		amb2,
		amb3,
		amb4,
		amb5,
		amb6,
        gran_egeruhay_sel,gran_dmitr_sel,gran_kosh_sel,gran_ignat_sel,gran_blech_sel,gran_may_sel,gran_nat_sel,gran_voln_sel,gran_hodz_sel,
        gran_egeruhay,gran_polit,gran_kosh,gran_ignat,gran_blech,gran_may,gran_nat,gran_voln,gran_hodz,gran_chatchemsiy,gran_krasnfars,gran_komsomol,gran_krasn,gran_kazen,gran_karmolin,gran_shelk,

        giagneotl1,
        giagfap1,
		giagfap2,
		giagfap3,
		giagfap4,
		giagfap5,
		giagfap6,
		giagfap7,
		giagfap8,
		giagfap9,
		giagfap10,
        giagfap11,
		giagcrb1,
		giagpol1,
        gran_giagfap1, gran_giagfap2, gran_giagfap3, gran_giagfap4, gran_giagfap5, gran_giagfap6, gran_giagfap7, gran_giagfap8, gran_giagfap9, gran_giagfap10, gran_giagfap11, gran_giagpol1, gran_giagcrb1,




        shovg_neotl1, shovg_neotl2, shovg_neotl3, shovg_neotl4, shovg_neotl5, shovg_neotl6, shovg_neotl7,
        shovgfap1,
		shovgfap2,
		shovgfap3,
		shovgfap4,
		shovgfap5,
		shovgfap6,
		shovgfap7,
		shovgfap8,
		shovgfap9,
		shovgfap10, shovgfap11, shovgfap12, shovgfap13, shovgfap14, shovgfap15, shovgfap16,
		shovgcrb1,
		gran_shovgmamh1, gran_shovgcrb1,
		gran_shovgfap1, gran_shovgfap2, gran_shovgfap3, gran_shovgfap4, gran_shovgfap5, gran_shovgfap6, gran_shovgfap7, gran_shovgfap8, gran_shovgfap9, gran_shovgfap10, gran_shovgfap11, gran_shovgfap12, gran_shovgfap13, gran_shovgfap14, gran_shovgfap15, gran_shovgfap16,

        mkpr_neotl1, mkpr_neotl2, mkpr_neotl3, mkpr_neotl4, mkpr_neotl5, mkpr_neotl6, mkpr_neotl7,
		mkprfap1, mkprfap2, mkprfap3, mkprfap4, mkprfap5, mkprfap6, mkprfap7, mkprfap8, mkprfap9, mkprfap10, mkprfap11, mkprfap12, mkprfap13, mkprfap14, mkprfap15, mkprfap16, mkprfap17, mkprfap18, mkprfap19, mkprfap20, mkprfap21, mkprfap22, mkprfap23, mkprfap24, mkprfap25, mkprfap26, mkprfap27, mkprfap28, mkprfap29, mkprfap30,
        mkpramb1, mkpramb2, mkpramb3, mkpramb4, mkpramb5,
        mkprcrb1, mkprpol1, mkprpol2,
        gran_mkprcrb1,


		krasnneotl1,
        krasnfap1,
		krasnfap2,
		krasnfap3,
		krasnfap4,
		krasnfap5,
		krasnfap6,
		krasnfap7,
		krasnfap8,
		krasnfap9,
		krasnfap10,
		krasncrb1,
		krasnamb1, krasnamb2, krasnamb3, krasnamb4, krasnamb5, krasnamb6,

        gran_krasncrb1,












        gran_mkp,
	]
	window.myObjects = ymaps.geoQuery(obj).addToMap(myMap);
	ymaps.ready(checkState);
}
