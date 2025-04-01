var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Commune_1 = new ol.format.GeoJSON();
var features_Commune_1 = format_Commune_1.readFeatures(json_Commune_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commune_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_1.addFeatures(features_Commune_1);
var lyr_Commune_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_1, 
                style: style_Commune_1,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_1.png" /> Commune'
            });
var format_Lanterneposer_2 = new ol.format.GeoJSON();
var features_Lanterneposer_2 = format_Lanterneposer_2.readFeatures(json_Lanterneposer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanterneposer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanterneposer_2.addFeatures(features_Lanterneposer_2);
var lyr_Lanterneposer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lanterneposer_2, 
                style: style_Lanterneposer_2,
                popuplayertitle: 'Lanterne à poser',
                interactive: true,
    title: 'Lanterne à poser<br />\
    <img src="styles/legend/Lanterneposer_2_0.png" /> IZILUM 34W 2200k<br />\
    <img src="styles/legend/Lanterneposer_2_1.png" /> IZILUM 65W 2200k<br />\
    <img src="styles/legend/Lanterneposer_2_2.png" /> STYLAGE 38W 2200k<br />\
    <img src="styles/legend/Lanterneposer_2_3.png" /> STYLAGE 50W 2200k<br />\
    <img src="styles/legend/Lanterneposer_2_4.png" /> STYLAGE 60W 2200k<br />\
    <img src="styles/legend/Lanterneposer_2_5.png" /> TECEO 91W 2700k<br />\
    <img src="styles/legend/Lanterneposer_2_6.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Commune_1.setVisible(true);lyr_Lanterneposer_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Commune_1,lyr_Lanterneposer_2];
lyr_Commune_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'NOM_M': 'NOM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'SIREN_EPCI': 'SIREN_EPCI', });
lyr_Lanterneposer_2.set('fieldAliases', {'Libell�': 'Libell�', 'Commune _': 'Commune _', 'Commune _1': 'Commune _1', 'Rue': 'Rue', 'Num�ro d': 'Num�ro d', 'Latitude (': 'Latitude (', 'Longitude': 'Longitude', 'X': 'X', 'Y': 'Y', 'Hauteur': 'Hauteur', 'Saillie': 'Saillie', 'Alimentati': 'Alimentati', 'Lanterne/L': 'Lanterne/L', 'Lanterne/T': 'Lanterne/T', 'Lanterne/R': 'Lanterne/R', 'Lanterne/M': 'Lanterne/M', 'ULOR': 'ULOR', 'Lampe/Libe': 'Lampe/Libe', 'Lampe/R�': 'Lampe/R�', 'A poser': 'A poser', });
lyr_Commune_1.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'NOM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'SIREN_EPCI': 'TextEdit', });
lyr_Lanterneposer_2.set('fieldImages', {'Libell�': 'TextEdit', 'Commune _': 'TextEdit', 'Commune _1': 'TextEdit', 'Rue': 'TextEdit', 'Num�ro d': 'TextEdit', 'Latitude (': 'TextEdit', 'Longitude': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Hauteur': 'TextEdit', 'Saillie': 'TextEdit', 'Alimentati': 'TextEdit', 'Lanterne/L': 'TextEdit', 'Lanterne/T': 'TextEdit', 'Lanterne/R': 'TextEdit', 'Lanterne/M': 'TextEdit', 'ULOR': 'TextEdit', 'Lampe/Libe': 'TextEdit', 'Lampe/R�': 'TextEdit', 'A poser': 'TextEdit', });
lyr_Commune_1.set('fieldLabels', {'ID': 'hidden field', 'NOM': 'hidden field', 'NOM_M': 'hidden field', 'INSEE_COM': 'hidden field', 'STATUT': 'hidden field', 'POPULATION': 'hidden field', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'SIREN_EPCI': 'hidden field', });
lyr_Lanterneposer_2.set('fieldLabels', {'Libell�': 'hidden field', 'Commune _': 'hidden field', 'Commune _1': 'hidden field', 'Rue': 'hidden field', 'Num�ro d': 'hidden field', 'Latitude (': 'hidden field', 'Longitude': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'Hauteur': 'hidden field', 'Saillie': 'hidden field', 'Alimentati': 'hidden field', 'Lanterne/L': 'inline label - visible with data', 'Lanterne/T': 'hidden field', 'Lanterne/R': 'hidden field', 'Lanterne/M': 'hidden field', 'ULOR': 'inline label - visible with data', 'Lampe/Libe': 'inline label - visible with data', 'Lampe/R�': 'hidden field', 'A poser': 'header label - visible with data', });
lyr_Lanterneposer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});