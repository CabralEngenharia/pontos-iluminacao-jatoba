var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_WazeWorld_1 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_JatobdoPiau_2 = new ol.format.GeoJSON();
var features_JatobdoPiau_2 = format_JatobdoPiau_2.readFeatures(json_JatobdoPiau_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JatobdoPiau_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JatobdoPiau_2.addFeatures(features_JatobdoPiau_2);
var lyr_JatobdoPiau_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JatobdoPiau_2, 
                style: style_JatobdoPiau_2,
                interactive: true,
                title: '<img src="styles/legend/JatobdoPiau_2.png" /> Jatobá do Piauí'
            });
var format_Caderneta_UniaoCOPIA_3 = new ol.format.GeoJSON();
var features_Caderneta_UniaoCOPIA_3 = format_Caderneta_UniaoCOPIA_3.readFeatures(json_Caderneta_UniaoCOPIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caderneta_UniaoCOPIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caderneta_UniaoCOPIA_3.addFeatures(features_Caderneta_UniaoCOPIA_3);
var lyr_Caderneta_UniaoCOPIA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caderneta_UniaoCOPIA_3, 
                style: style_Caderneta_UniaoCOPIA_3,
                interactive: true,
                title: '<img src="styles/legend/Caderneta_UniaoCOPIA_3.png" /> Caderneta_Uniao COPIA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WazeWorld_1.setVisible(true);lyr_JatobdoPiau_2.setVisible(true);lyr_Caderneta_UniaoCOPIA_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WazeWorld_1,lyr_JatobdoPiau_2,lyr_Caderneta_UniaoCOPIA_3];
lyr_JatobdoPiau_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_Caderneta_UniaoCOPIA_3.set('fieldAliases', {'ID': 'ID', 'Rua': 'Rua', 'Bairro/Povoado': 'Bairro/Povoado', 'Zona': 'Zona', 'Coordenada X': 'Coordenada X', 'Coordenada Y': 'Coordenada Y', 'Observaçoes': 'Observaçoes', 'Luminárias': 'Luminárias', 'Transformadores': 'Transformadores', });
lyr_JatobdoPiau_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_Caderneta_UniaoCOPIA_3.set('fieldImages', {'ID': 'TextEdit', 'Rua': 'TextEdit', 'Bairro/Povoado': 'TextEdit', 'Zona': 'TextEdit', 'Coordenada X': 'TextEdit', 'Coordenada Y': 'TextEdit', 'Observaçoes': 'TextEdit', 'Luminárias': 'Range', 'Transformadores': 'Range', });
lyr_JatobdoPiau_2.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_Caderneta_UniaoCOPIA_3.set('fieldLabels', {'ID': 'header label', 'Rua': 'header label', 'Bairro/Povoado': 'header label', 'Zona': 'header label', 'Coordenada X': 'header label', 'Coordenada Y': 'header label', 'Observaçoes': 'header label', 'Luminárias': 'header label', 'Transformadores': 'header label', });
lyr_Caderneta_UniaoCOPIA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});