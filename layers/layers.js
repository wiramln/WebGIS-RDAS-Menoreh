var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_AnakPetak_RDAS_Menoreh_1 = new ol.format.GeoJSON();
var features_AnakPetak_RDAS_Menoreh_1 = format_AnakPetak_RDAS_Menoreh_1.readFeatures(json_AnakPetak_RDAS_Menoreh_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnakPetak_RDAS_Menoreh_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnakPetak_RDAS_Menoreh_1.addFeatures(features_AnakPetak_RDAS_Menoreh_1);
var lyr_AnakPetak_RDAS_Menoreh_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnakPetak_RDAS_Menoreh_1, 
                style: style_AnakPetak_RDAS_Menoreh_1,
                interactive: true,
                title: '<img src="styles/legend/AnakPetak_RDAS_Menoreh_1.png" /> AnakPetak_RDAS_Menoreh'
            });
var format_Batas_Desa_2 = new ol.format.GeoJSON();
var features_Batas_Desa_2 = format_Batas_Desa_2.readFeatures(json_Batas_Desa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa_2.addFeatures(features_Batas_Desa_2);
var lyr_Batas_Desa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Desa_2, 
                style: style_Batas_Desa_2,
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa_2.png" /> Batas_Desa'
            });
var format_Batas_Kecamatan_3 = new ol.format.GeoJSON();
var features_Batas_Kecamatan_3 = format_Batas_Kecamatan_3.readFeatures(json_Batas_Kecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Kecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Kecamatan_3.addFeatures(features_Batas_Kecamatan_3);
var lyr_Batas_Kecamatan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Kecamatan_3, 
                style: style_Batas_Kecamatan_3,
                interactive: true,
                title: '<img src="styles/legend/Batas_Kecamatan_3.png" /> Batas_Kecamatan'
            });
var format_Jalan_4 = new ol.format.GeoJSON();
var features_Jalan_4 = format_Jalan_4.readFeatures(json_Jalan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_4.addFeatures(features_Jalan_4);
var lyr_Jalan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_4, 
                style: style_Jalan_4,
                interactive: true,
                title: '<img src="styles/legend/Jalan_4.png" /> Jalan'
            });

lyr_GooglecnSatellite_0.setVisible(true);lyr_AnakPetak_RDAS_Menoreh_1.setVisible(true);lyr_Batas_Desa_2.setVisible(true);lyr_Batas_Kecamatan_3.setVisible(true);lyr_Jalan_4.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_AnakPetak_RDAS_Menoreh_1,lyr_Batas_Desa_2,lyr_Batas_Kecamatan_3,lyr_Jalan_4];
lyr_AnakPetak_RDAS_Menoreh_1.set('fieldAliases', {'CPCL': 'CPCL', 'Dusun': 'Dusun', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Zona': 'Zona', });
lyr_Batas_Desa_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'fid_1': 'fid_1', 'OBJECTID': 'OBJECTID', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Klasifikas': 'Klasifikas', 'SUMBER': 'SUMBER', 'luas': 'luas', 'Kabupaten': 'Kabupaten', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Batas_Kecamatan_3.set('fieldAliases', {'id': 'id', });
lyr_Jalan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fid_1': 'fid_1', 'OBJECTID_1': 'OBJECTID_1', 'Kl_Dat_Das': 'Kl_Dat_Das', 'Nm_Ruas': 'Nm_Ruas', 'Thn_Data': 'Thn_Data', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Mendukung': 'Mendukung', 'Ura_Dukung': 'Ura_Dukung', 'Kd_Bd_PU': 'Kd_Bd_PU', 'Kd_Jns_Inf': 'Kd_Jns_Inf', 'Kd_Inf': 'Kd_Inf', 'Propinsi': 'Propinsi', 'Kab_Kot': 'Kab_Kot', 'Kecamatan': 'Kecamatan', 'Desa_Kel': 'Desa_Kel', 'Tk_Ruas_Aw': 'Tk_Ruas_Aw', 'Tk_Ruas_Ak': 'Tk_Ruas_Ak', 'Kd_Patok': 'Kd_Patok', 'Km_Awal': 'Km_Awal', 'Km_Akhir': 'Km_Akhir', 'Nm_Lintas': 'Nm_Lintas', 'Kon_Baik': 'Kon_Baik', 'Kon_Sdg': 'Kon_Sdg', 'Kon_Rgn': 'Kon_Rgn', 'Kon_Rusak': 'Kon_Rusak', 'Kon_Mntp': 'Kon_Mntp', 'Kon_T_Mntp': 'Kon_T_Mntp', 'Panjang': 'Panjang', 'Lbr_Keras': 'Lbr_Keras', 'LHRT': 'LHRT', 'VCR': 'VCR', 'Tipe_Jln': 'Tipe_Jln', 'MST': 'MST', 'Tanah_Kri': 'Tanah_Kri', 'Macadam': 'Macadam', 'Aspal': 'Aspal', 'Rigid': 'Rigid', 'Thn_Pen_Ak': 'Thn_Pen_Ak', 'Jns_Pen': 'Jns_Pen', 'Koord_X_Aw': 'Koord_X_Aw', 'Koord_Y_Aw': 'Koord_Y_Aw', 'Koord_X_Ak': 'Koord_X_Ak', 'Koord_Y_Ak': 'Koord_Y_Ak', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_AnakPetak_RDAS_Menoreh_1.set('fieldImages', {'CPCL': '', 'Dusun': '', 'Desa': '', 'Kecamatan': '', 'Zona': '', });
lyr_Batas_Desa_2.set('fieldImages', {'OBJECTID_1': '', 'fid_1': '', 'OBJECTID': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WADMKC': '', 'WADMKK': '', 'WADMPR': '', 'Klasifikas': '', 'SUMBER': '', 'luas': '', 'Kabupaten': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Batas_Kecamatan_3.set('fieldImages', {'id': '', });
lyr_Jalan_4.set('fieldImages', {'OBJECTID': '', 'fid_1': '', 'OBJECTID_1': '', 'Kl_Dat_Das': '', 'Nm_Ruas': '', 'Thn_Data': '', 'Status': '', 'Fungsi': '', 'Mendukung': '', 'Ura_Dukung': '', 'Kd_Bd_PU': '', 'Kd_Jns_Inf': '', 'Kd_Inf': '', 'Propinsi': '', 'Kab_Kot': '', 'Kecamatan': '', 'Desa_Kel': '', 'Tk_Ruas_Aw': '', 'Tk_Ruas_Ak': '', 'Kd_Patok': '', 'Km_Awal': '', 'Km_Akhir': '', 'Nm_Lintas': '', 'Kon_Baik': '', 'Kon_Sdg': '', 'Kon_Rgn': '', 'Kon_Rusak': '', 'Kon_Mntp': '', 'Kon_T_Mntp': '', 'Panjang': '', 'Lbr_Keras': '', 'LHRT': '', 'VCR': '', 'Tipe_Jln': '', 'MST': '', 'Tanah_Kri': '', 'Macadam': '', 'Aspal': '', 'Rigid': '', 'Thn_Pen_Ak': '', 'Jns_Pen': '', 'Koord_X_Aw': '', 'Koord_Y_Aw': '', 'Koord_X_Ak': '', 'Koord_Y_Ak': '', 'Shape_Leng': '', 'Shape_Le_1': '', });
lyr_AnakPetak_RDAS_Menoreh_1.set('fieldLabels', {'CPCL': 'no label', 'Dusun': 'no label', 'Desa': 'no label', 'Kecamatan': 'no label', 'Zona': 'no label', });
lyr_Batas_Desa_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'fid_1': 'header label', 'OBJECTID': 'no label', 'KDEBPS': 'inline label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Klasifikas': 'no label', 'SUMBER': 'no label', 'luas': 'no label', 'Kabupaten': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Batas_Kecamatan_3.set('fieldLabels', {'id': 'no label', });
lyr_Jalan_4.set('fieldLabels', {'OBJECTID': 'no label', 'fid_1': 'no label', 'OBJECTID_1': 'no label', 'Kl_Dat_Das': 'header label', 'Nm_Ruas': 'no label', 'Thn_Data': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Mendukung': 'no label', 'Ura_Dukung': 'no label', 'Kd_Bd_PU': 'no label', 'Kd_Jns_Inf': 'no label', 'Kd_Inf': 'no label', 'Propinsi': 'no label', 'Kab_Kot': 'no label', 'Kecamatan': 'no label', 'Desa_Kel': 'no label', 'Tk_Ruas_Aw': 'no label', 'Tk_Ruas_Ak': 'no label', 'Kd_Patok': 'no label', 'Km_Awal': 'no label', 'Km_Akhir': 'no label', 'Nm_Lintas': 'no label', 'Kon_Baik': 'no label', 'Kon_Sdg': 'no label', 'Kon_Rgn': 'no label', 'Kon_Rusak': 'no label', 'Kon_Mntp': 'no label', 'Kon_T_Mntp': 'no label', 'Panjang': 'no label', 'Lbr_Keras': 'no label', 'LHRT': 'no label', 'VCR': 'no label', 'Tipe_Jln': 'no label', 'MST': 'no label', 'Tanah_Kri': 'no label', 'Macadam': 'no label', 'Aspal': 'no label', 'Rigid': 'no label', 'Thn_Pen_Ak': 'no label', 'Jns_Pen': 'no label', 'Koord_X_Aw': 'no label', 'Koord_Y_Aw': 'no label', 'Koord_X_Ak': 'no label', 'Koord_Y_Ak': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr_Jalan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});