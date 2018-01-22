// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2018.01.22.001
// @description  Adds GIS layers in WME
// @author       MapOMatic
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require      https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @license      GNU GPLv3
// -- AK --
// @connect      matsugov.us
// @connect      ancgis.com
// @connect      kpb.us
// -- AL --
// @connect      kcsgis.com
// @connect      calhouncounty.org
// @connect      shelbyal.com
// @connect      cityofmobile.org
// @connect      stclairco.com
// -- AZ --
// @connect      yumacountyaz.gov
// -- DC --
// @connect      dc.gov
// -- FL --
// @connect      arcgis.com
// @connect      boca-raton.fl.us
// @connect      brevardcounty.us
// @connect      broward.org
// @connect      bcpa.net
// @connect      charlottecountyfl.gov
// @connect      citruspa.org
// @connect      coj.net
// @connect      escpa.org
// @connect      fl.us
// @connect      fwb.org
// @connect      hcpafl.org
// @connect      hernandocountygis-fl.us
// @connect      hcpao.org
// @connect      ircgov.com
// @connect      lakecountyfl.gov
// @connect      leoncountyfl.gov
// @connect      mymanatee.org
// @connect      marioncountyfl.org
// @connect      martin.fl.us
// @connect      miamidade.gov
// @connect      okaloosafl.com
// @connect      ocpafl.org
// @connect      property-appraiser.org
// @connect      palmcoastgov.com
// @connect      property-appraiser.org
// @connect      pascocountyfl.net
// @connect      paslc.org
// @connect      pinellascounty.org
// @connect      polkpa.org
// @connect      port-orange.org
// @connect      putnam-fl.com
// @connect      scgov.net
// @connect      seminolecountyfl.gov
// @connect      st-johns.fl.us
// @connect      tampagov.net
// @connect      vcgov.org
// -- GA --
// @connect      augustaga.gov
// @connect      thempc.org
// @connect      clayton.ga.us
// @connect      cherokeega.com
// @connect      cobbgis.org
// @connect      dekalbcountyga.gov
// @connect      forsythco.com
// @connect      fultoncountyga.gov
// @connect      thomsonreuters.com
// @connect      arcgis.com
// @connect      roktech.net
// -- IA --
// @connect      gisworkshop.com
// @connect      216.81.174.57
// @connect      cedar-rapids.org
// @connect      dmcwebgis.com
// @connect      dmgov.org
// @connect      dbqco.org
// @connect      iowa.gov
// @connect      linncounty.org
// @connect      polkcountyiowa.gov
// @connect      pottcounty-ia.gov
// @connect      siouxcounty.org
// -- IN --
// @connect      in.gov
// -- KS --
// @connect      kansasgis.org
// @connect      douglascountyks.org
// @connect      bucoks.com
// @connect      cowleycounty.org
// @connect      geodataportal.net
// @connect      finneycountygis.com
// @connect      lawrenceks.org
// @connect      rsdigital.com
// @connect      pottcounty.org
// @connect      renogov.org
// @connect      snco.us
// @connect      wycokck.org
// @connect      wichita.gov
// -- KY --
// @connect      ky.gov
// @connect      kcor.org
// @connect      maps2.bgadd.org
// @connect      boonecountygis.com
// @connect      lojic.org
// @connect      lexingtonky.gov
// @connect      madisoncountyky.us
// @connect      ccgisonline.com
// @connect      linkgis.org
// @connect      bgky.org
// @connect      paducahky.gov
// @connect      gscplanning.com
// @connect      arcgis.com
// @connect      hendersonky.us
// @connect      161.6.109.206
// -- MA --
// @connect      ma.us
// @connect      cityofboston.gov
// -- MD --
// @connect      md.gov
// @connect      baltimorecountymd.gov
// -- MI --
// @connect      kentcountymi.gov
// @connect      emmetcounty.org
// @connect      countyofnewaygo.com
// @connect      oakgov.com
// @connect      ewashtenaw.org
// -- MN --
// @connect       aitkin.mn.us
// @connect       anoka.mn.us
// @connect       becker.mn.us
// @connect       beltrami.mn.us
// @connect       big-stone.mn.us
// @connect       carlton.mn.us
// @connect       carver.mn.us
// @connect       cass.mn.us
// @connect       chippewa.mn.us
// @connect       claycountymn.gov
// @connect       clearwater.mn.us
// @connect       cook.mn.us
// @connect       dakota.mn.us
// @connect       goodhue.mn.us
// @connect       douglas.mn.us
// @connect       fillmore.mn.us
// @connect       136.234.11.196
// @connect       hennepin.us
// @connect       hubbard.mn.us
// @connect       itasca.mn.us
// @connect       kandiyohi.mn.us
// @connect       136.234.13.165
// @connect       lake-of-the-woods.mn.us
// @connect       marshall.mn.us
// @connect       mille-lacs.mn.us
// @connect       norman.mn.us
// @connect       olmsted.mn.us
// @connect       ottertailcounty.net
// @connect       polk.mn.us
// @connect       pope.mn.us
// @connect       ramsey.mn.us
// @connect       renvillecountymn.com
// @connect       roseau.mn.us
// @connect       stlouiscountymn.gov
// @connect       stearns.mn.us
// @connect       steele.mn.us
// @connect       wadena.mn.us
// @connect       waseca.mn.us
// @connect       washington.mn.us
// @connect       wilkin.mn.us
// @connect       ym.mn.gov
// -- MO --
// @connect      gocolumbiamo.com
// @connect      integritygis.com
// @connect      christiancountymo.gov
// @connect      emapsplus.com
// @connect      hornershifrin.com
// @connect      midmogis.org
// @connect      missouri.edu
// @connect      jacksongov.org
// @connect      semogis.com
// @connect      kcmo.org
// @connect      polkcountymo.org
// @connect      sccmo.org
// @connect      stlouisco.com
// -- MT --
// @connect       gisservicemt.gov
// @connect       flathead.mt.gov
// @connect       gallatin.mt.gov
// @connect       helenamontanamaps.org
// @connect       missoulacounty.us
// @connect       parkcounty.org
// @connect       yellowstone.mt.gov
// @connect       gisservicemt.gov
// -- NC --
// @connect      brunswickcountync.gov
// -- ND --
// @connect      nd.gov
// @connect      adamscounty.org
// @connect      burleighco.com
// @connect      casscountynd.gov
// @connect      gfgis.com
// -- NE --
// @connect      adamscounty.org
// @connect      dogis.org
// @connect      lincoln.ne.gov
// @connect      sarpy.com
// -- NV --
// @connect      washoecounty.us
// @connect      perryco.org
// -- OH --
// @connect      hamilton-co.org
// @connect      oh.us
// @connect      butlercountyauditor.org
// @connect      clermontauditor.org
// @connect      mcegisohio.org
// @connect      franklincountyauditor.com
// -- PA --
// @connect      pa.us
// @connect      adamscounty.us
// @connect      alleghenycounty.us
// @connect      bakerprojects.com
// @connect      cambriacountypa.gov
// @connect      carboncounty.com
// @connect      centrecountypa.gov
// @connect      chesco.org
// @connect      clearfieldco.org
// @connect      clintoncountypa.com
// @connect      columbiapa.org
// @connect      crawfordcountypa.net
// @connect      ccpa.net
// @connect      dauphincounty.org
// @connect      mobile311.com
// @connect      franklincountypa.gov
// @connect      huntingdoncounty.net
// @connect      lyco.org
// @connect      monroegis.org
// @connect      montcopa.org
// @connect      northamptoncounty.org
// @connect      norrycopa.net
// @connect      perryco.org
// @connect      phila.gov
// @connect      pikepa.org
// @connect      unionco.org
// @connect      50.120.220.154
// @connect      wcgis.us
// @connect      ycpc.org
// -- SD --
// @connect      206.176.83.74
// @connect      rcgov.org
// @connect      1stdistrict.org
// @connect      siouxfalls.org
// -- VA --
// @connect      worldviewsolutions.com
// @connect      alexandriava.gov
// @connect      timmons.com
// @connect      arlingtonva.us
// @connect      bedfordcountyva.gov
// @connect      virginia.gov
// -- WI --
// @connect      legis.wisconsin.gov
// -- WV --
// @connect      wvu.edu
// ==/UserScript==

/* global OL */
/* global W */
/* global GM_info */
/* global OpenLayers */

(function() {
    'use strict';

    let DEFAULT_STYLE = {
        fillColor: '#000',
        pointRadius: 4,
        label : "${label}",
        strokeColor: '#ffa500',
        strokeOpacity: '0.8',
        fontColor: "#ffc520",
        fontSize: '13',
        labelOutlineColor: "black",
        labelOutlineWidth: 3
    };

    let DEFAULT_PARCEL_STYLE = {
        fillOpacity: 0
    };

    let DEFAULT_STRUCTURE_STYLE = {
        fillOpacity: 0,
        strokeColor: '#f7f',
        fontColor: '#f7f'
    };

    let DEFAULT_PT_STYLE = {
        strokeColor: '#000',
        fontColor: "#0ff",
        fillColor: '#0ff',
        labelYOffset: -15
    };

    let _gisLayers = [

        // Alabama
        // ************************************

        {name: 'Baldwin Co - E911 Address Points',
         id: 'al-baldwin-co-pts',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Baldwin/AL05_BOR/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Baldwin Co - Parcels',
         id: 'al-baldwin-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Baldwin/Public/MapServer/31',
         labelFields: ['PropStreetNumber','PropStreetName'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Blount Co - Parcels (NO DATA)',
         id: 'al-blount-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Blount/Public/MapServer/32',
         labelFields: [''],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Calhoun Co - Parcels',
         id: 'al-calhoun-co-parcels',
         url: 'http://gis.calhouncounty.org/arcgis2/rest/services/ParcelViewerWM/MapServer/68',
         labelFields: ['STREET_ADDRESS'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Colbert Co - Parcels',
         id: 'al-colbert-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Colbert/Public/MapServer/43',
         labelFields: ['Situs_House_No','Situs_Street_Name'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cullman Co - Parcels',
         id: 'al-cullman-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Cullman/Public/MapServer/107',
         labelFields: ['SitusAddNumber','SitusAddName'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Elmore Co - Parcels',
         id: 'al-elmore-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Elmore/Public/MapServer/133',
         labelFields: ['PropertyAddr1'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Etowah Co - Parcels',
         id: 'al-etowah-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Etowah/Public/MapServer/41',
         labelFields: ['SitusStreetNumber','SitusStreetName'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lauderdale Co - Parcels',
         id: 'al-lauderdale-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Lauderdale/Public/MapServer/120',
         labelFields: ['SitusAddNumber','SitusAddName'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lawrence Co - Address Points',
         id: 'al-lawrence-co-points',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Lawrence/LawrenceCounty_GIS_Public/MapServer/32',
         labelFields: ['FULLADDR'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Lawrence Co - Parcels',
         id: 'al-lawrence-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Lawrence/Public/MapServer/49',
         labelFields: ['SitusAddFullAddress'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Limestone Co - Address Points',
         id: 'al-limestone-co-points',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Athens_Limestone/Public/MapServer/0',
         labelFields: ['Address'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Limestone Co - Parcels',
         id: 'al-limestone-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Athens_Limestone/Public/MapServer/38',
         labelFields: ['SITEADDRESS'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marshall Co - Parcels',
         id: 'al-marshall-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Marshall/Public/MapServer/37',
         labelFields: ['SitusAddress'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Parcels',
         id: 'al-montgomery-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Montgomery/Public/MapServer/29',
         labelFields: ['PropertyAddr1'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Morgan Co - Parcels',
         id: 'al-morgan-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Morgan/Public/MapServer/118',
         labelFields: ['PropAddr1'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mobile - City Address Points',
         id: 'al-mobile-city-points',
         url: 'http://maps.cityofmobile.org/arcgis/rest/services/BaseData_FS/MapServer/50',
         labelFields: ['ADDRESS'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Mobile - City Parcels',
         id: 'al-mobile-cityy-parcels',
         url: 'http://maps.cityofmobile.org/arcgis/rest/services/BaseData_FS/MapServer/21',
         labelFields: ['streetno','streetname','streetdir'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Shelby Co - Address Points',
         id: 'al-shelby-co-points',
         url: 'https://maps.shelbyal.com/arcgis/rest/services/ShelbyALBaseMap/MapServer/0',
         labelFields: ['Full_Add_Num','Street_Name','Street_Post_Type'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Shelby Co - Parcels (NO DATA)',
         id: 'al-shelby-co-parcels',
         url: 'https://maps.shelbyal.com/arcgis/rest/services/ShelbyALBaseMap/MapServer/18',
         labelFields: [''],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Clair Co - 911 Address Points',
         id: 'al-stclair-co-points',
         url: 'https://map.stclairco.com/arcgis/rest/services/E911Data/MapServer/3',
         labelFields: ['FullAddres'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Clair Co - Parcels',
         id: 'al-stclair-co-parcels',
         url: 'https://map.stclairco.com/arcgis/rest/services/PublicParcelViewer/MapServer/57',
         labelFields: ['STREET_ADDRESS'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Talladega Co - Parcels',
         id: 'al-talladega-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Talladega/Public/MapServer/50',
         labelFields: ['SitusAddNumber','SitusAddName'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},


        // Alaska
        // ************************************

        {name: 'Anchorage - Address Points',
         id: 'ak-anchorage-pts',
         url: 'https://www.ancgis.com/arcgis/rest/services/Addressing/Address_Points/MapServer/0',
         labelFields: ['STREET_ADDRESS'],
         state: 'AK',
         style: DEFAULT_PT_STYLE},

       {name: 'Anchorage - Parcels',
        id: 'ak-anchorage-ci-parcels',
        url: 'https://www.ancgis.com/arcgis/rest/services/Addressing/Address_Parcels/MapServer/0',
        labelFields: ['STREET_ADDRESS'],
        state: 'AK',
        style: DEFAULT_PARCEL_STYLE},

        {name: 'Kenai Peninsula - Address Points',
         id: 'ak-kenai-pts',
         url: 'http://maps.kpb.us/gis/rest/services/PhysicalAddresses/MapServer/0',
         labelFields: ['ADDRESS'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Kenai Peninsula - Parcels',
         id: 'ak-kenai-parcels',
         url: 'http://maps.kpb.us/gis/rest/services/TaxParcels/MapServer/0',
         labelFields: ['SITUS_ADDRESS'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Matanuska-Susitna - Address Points',
         id: 'ak-matsu-bor-pts',
         url: 'http://maps.matsugov.us/arcgis/rest/services/Open_Data/PublicSafety_Addresses/MapServer/0',
         labelFields: ['ADDRESS'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Matanuska-Susitna - Parcels (NO DATA)',
         id: 'ak-matsu-bor-parcels',
         url: 'http://maps.matsugov.us/arcgis/rest/services/Open_Data/Cadastral_Parcels/MapServer/0',
         labelFields: [],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},


        // Arizona
        // ************************************

        {name: 'Yuma Co - Parcels',
         id: 'az-yuma-co-parcels',
         url: 'http://gis.yumacountyaz.gov/ArcGIS/rest/services/YumaCounty/MapServer/128',
         labelFields: ['SITUS_ADDR'],
         state: 'AZ',
         style: DEFAULT_PARCEL_STYLE},


        // Colorado
        // ***********************************

        {name: 'Archuleta Co - Parcels',
         id: 'co-archuleta-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['SITUS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},


        // Connecticut
        // ***********************************
        {name: 'Winchester - City Parcels',
         id: 'ct-winchester-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Winchester/Winchester_WL_P/MapServer/0',
         labelFields: ['ParcelAddress1'],
         state: 'CT',
         style: DEFAULT_PARCEL_STYLE},

        // District of Columbia
        // ************************************

        {name: 'District Of Columbia - Parcels',
         id: 'dc-parcels',
         url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/newOwnerPly_WebMercator/MapServer/0',
         labelFields: ['PREMISEADD'],
         state: 'DC',
         style: DEFAULT_PARCEL_STYLE},

        // Florida
        // ************************************

        {name: 'Alachua Co - Address Points',
         id: 'fl-alachua-co-pts',
         url: 'https://services.arcgis.com/cNo3jpluyt69V8Ek/ArcGIS/rest/services/AddressPoints/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Alachua Co - Parcels',
         id: 'fl-alachua-co-parcels',
         url: 'https://services.arcgis.com/cNo3jpluyt69V8Ek/ArcGIS/rest/services/CommunityParcels/FeatureServer/0',
         labelFields: ['SITEADRESS'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bay Co - Address Points',
         id: 'fl-bay-co-pts',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/Bay/BayView/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Bay Co - Parcels',
         id: 'fl-bay-co-parcels',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/Bay/BayView/MapServer/2',
         labelFields: ['DSITEADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boca Raton- City Points',
         id: 'fl-boca-raton-city-pts',
         url: 'http://gisweb.ci.boca-raton.fl.us/bocagis/rest/services/Basemap/BOCA_SITUS/MapServer/0',
         labelFields: ['STREET_NO','STREET_PRE','STREET_NAM','STREET_SUF','STREET_POS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Boca Raton- City Parcels',
         id: 'fl-boca-raton-city-parcels',
         url: 'http://gisweb.ci.boca-raton.fl.us/bocagis/rest/services/Basemap/PARCEL_QUERY/MapServer/1',
         labelFields: ['siteaddr'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brevard Co - Parcels',
         id: 'fl-brevard-co-parcels',
         url: 'http://gis.brevardcounty.us/gissrv/rest/services/Base_Map/Parcel_New_WKID102100/MapServer/5',
         labelFields: ['STREET_NUMBER','STREET_DIRECTION_PREFIX','STREET_NAME','STREET_TYPE'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Broward Co - Address Points',
         id: 'fl-broward-co-pts',
         url: 'http://gis.broward.org/arcgis/rest/services/PointAddressLabels/MapServer/0',
         labelFields: ['SITUS_HOUSE_NUMBER'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Broward Co - Parcels',
         id: 'fl-broward-co-parcels',
         url: 'http://bcweb-adapters.bcpa.net/arcgis/rest/services/BCPA_INTERNAL_OCT17/MapServer/30',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Charlotte Co - Address Points',
         id: 'fl-charlotte-co-pts',
         url: 'http://agis.charlottecountyfl.gov/arcgis/rest/services/Essentials/CCGIS_Website_Layers/MapServer/1',
         labelFields: ['NUMBER','PREDIR','PRETYPE','NAME','TYPE','SUFDIR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Charlotte Co - Parcels',
         id: 'fl-charlotte-co-parcels',
         url: 'http://agis.charlottecountyfl.gov/arcgis/rest/services/Essentials/CCGIS_Website_Layers/MapServer/17',
         labelFields: ['FullPropertyAddress'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Citrus Co - Parcels',
         id: 'fl-citrus-co-parcels',
         url: 'http://gis.citruspa.org/arcgisweb/rest/services/Tyler/Parcel_Data_Cache/MapServer/3',
         labelFields: ['TE_PARDAT.ADRNO','TE_PARDAT.ADRDIR','TE_PARDAT.ADRSTR','TE_PARDAT.ADRSUF'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Duval Co - Parcels',
         id: 'fl-duval-co-parcels',
         url: 'http://maps.coj.net/coj/rest/services/CityBiz/ParcelsProd/MapServer/0',
         labelFields: ['LONGNAME'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Escambia Co - Parcels',
         id: 'fl-escambia-co-parcels',
         url: 'https://maps.escpa.org/arcgis1/rest/services/CAMA_PUB_mobile/MapServer/40',
         labelFields: ['ecpaWeb.dbo.ViewPublic.Situs'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Flagler Co - Parcels',
         id: 'fl-flagler-co-parcels',
         url: 'http://maps.palmcoastgov.com/arcgis/rest/services/External/FlaglerCountyParcels/MapServer/1',
         labelFields: ['HOUSE_NO','STREET'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ft. Walton Beach - City Addr Points',
         id: 'fl-ft-walton-beach-co-pts',
         url: 'https://gis.fwb.org/arcgis/rest/services/Maps/Addresses/MapServer/1',
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         labelFields: ['SITE_ADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Ft. Walton Beach - City Parcels',
         id: 'fl-ft-walton-beach-city-parcels',
         url: 'https://gis.fwb.org/arcgis/rest/services/Maps/Parcels/MapServer/0',
         labelFields: ['HOUSE_NO','HSESUF','STREET','ST_MD'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hernando Co - Address Points',
         id: 'fl-hernando-co-pts',
         url: 'https://www.hernandocountygis-fl.us/arcgis10_3/rest/services/PANEW/MapServer/0',
         labelFields: ['HOUSENUM','PREFIX','STREETNAME','STREETTYPE','SUFFIX'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Hernando Co - Parcels',
         id: 'fl-hernando-co-parcels',
         url: 'https://www.hernandocountygis-fl.us/arcgis10_3/rest/services/PANEW/MapServer/6',
         labelFields: ['SITUS_ADDRESS'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hillsborough Co - Address Points',
         id: 'fl-hillsborough-co-pts',
         url: 'http://gis.hcpafl.org/arcgis/rest/services/hillsborough_complete_gis/MapServer/7',
         labelFields: ['USPSADDRES'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Hillsborough Co - Parcels',
         id: 'fl-hillsborough-co-parcels',
         url: 'http://gis.hcpafl.org/arcgis/rest/services/Hillsborough_webparcels_prod/MapServer/0',
         labelFields: ['StreetLabel'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Highlands Co - Parcels NO DATA',
         id: 'fl-highlands-co-parcels',
         url: 'http://gis1.hcpao.org/arcgiscv/rest/services/HighlandsCounty_Parcels/MapServer/0',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Indian River Co - Address Points',
         id: 'fl-indian-river-co-pts',
         url: 'http://gis.ircgov.com/arcgis/rest/services/IRCGIS/IRC_Address_Points_woLabels/MapServer/0',
         labelFields: ['ADDRESS_USPS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Indian River Co - Parcels',
         id: 'fl-indian-river-co-parcels',
         url: 'http://gis.ircgov.com/arcgis/rest/services/IRCPA/IRCPA_Parcels/MapServer/0',
         labelFields: ['SITE_ADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Address Points',
         id: 'fl-lake-co-pts',
         url: 'https://gis.lakecountyfl.gov/lakegis/rest/services/InteractiveMap/MapServer/16',
         labelFields: ['FullAddress'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Lake Co - Parcels',
         id: 'fl-lake-co-parcels',
         url: 'https://gis.lakecountyfl.gov/lakegis/rest/services/InteractiveMap/MapServer/20',
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         labelFields: ['PropertyAddress'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Leon Co - Address Points',
         id: 'fl-leon-co-pts',
         url: 'http://tlcgisinter.leoncountyfl.gov/arcgis/rest/services/Public/TLC_Inter_OverlayAddressPointLabels_WM_D/MapServer/0',
         labelFields: ['SITEADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Leon Co - Parcels',
         id: 'fl-leon-co-parcels',
         url: 'http://tlcgisinter.leoncountyfl.gov/arcgis/rest/services/Public/LCPA_Intra_OverlayParcel_WGS84/MapServer/0',
         labelFields: ['SITEADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Manatee Co - Address Points',
         id: 'fl-manatee-co-pts',
         url: 'https://www.mymanatee.org/arcgis01/rest/services/commonoperational/addresslabels/MapServer/0',
         labelFields: ['FULL_ADDRESS_POSTAL'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Manatee Co - Parcels',
         id: 'fl-manatee-co-parcels',
         url: 'https://www.mymanatee.org/arcgis01/rest/services/commonoperational/parcellines/MapServer/0',
         labelFields: ['PRIMARY_ADDRESS'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marion Co - Address Points',
         id: 'fl-marion-co-pts',
         url: 'https://gis.marioncountyfl.org/arcgis/rest/services/Geocortex/AddressPntsLABELS/MapServer/0',
         labelFields: ['HOUSE_NU','PREFIX','STREET_NA','TYPE','SUFFIX'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Marion Co - Parcels',
         id: 'fl-marion-co-parcels',
         url: 'https://gis.marioncountyfl.org/arcgis/rest/services/Geocortex/Parcels/MapServer/0',
         labelFields: ['SITUS_1'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Martin Co - Address Points',
         id: 'fl-martin-co-pts',
         url: 'http://geoweb.martin.fl.us/arcgis/rest/services/geocoding/address_points/MapServer/0',
         labelFields: ['ST_NO','PREFIX','STREET','STREET_TYP'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Martin Co - Parcels',
         id: 'fl-martin-co-parcels',
         url: 'http://geoweb.martin.fl.us/arcgis/rest/services/Administrative_Areas/base_map/MapServer/10',
         labelFields: ['SITUS_HOUSE_'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Miami-Dade Co - Address Points',
         id: 'fl-miami-dade-co-pts',
         url: 'https://gisweb.miamidade.gov/arcgis/rest/services/CommunityServices/MD_Parcel/MapServer/0',
         labelFields: ['hse_num','Pre_dir','st_name','st_type','suf_dir'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Miami-Dade Co - Parcels',
         id: 'fl-miami-dade-co-parcels',
         url: 'https://gisweb.miamidade.gov/arcgis/rest/services/MD_Emaps/MapServer/72',
         labelFields: ['TRUE_SITE_ADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Nassau Co - Address Points',
         id: 'fl-nassau-co-pts',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/Nassau/Nassau_GoMaps4/MapServer/2',
         labelFields: ['FULLADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Nassau Co - Parcels',
         id: 'fl-nassau-co-parcels',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/Nassau/Nassau_GoMaps4/MapServer/0',
         labelFields: ['HOUSE_NO','HSESUF','STREET','ST_MD'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Oceola Co - Parcels',
         id: 'fl-oceola-co-parcels',
         url: 'http://ira.property-appraiser.org/arcgis/rest/services/GisSite_TaxMap/MapServer/0',
         labelFields: ['StreetNumber','StreetName','StreetSfx','StreetSfxDir'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Okaloosa Co - Address Points',
         id: 'fl-okaloosa-co-pts',
         url: 'http://webgis.okaloosafl.com/webgis/proxy/proxy.ashx?http://204.49.20.72/arcgis/rest/services/internet_webgis/MapServer/24',
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         labelFields: ['SITE_ADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Okaloosa Co - Parcels NO DATA',
         id: 'fl-okaloosa-co-parcels',
         url: 'http://webgis.okaloosafl.com/webgis/proxy/proxy.ashx?http://204.49.20.72/arcgis/rest/services/internet_webgis/MapServer/15',
         labelFields: ['PATPCL_ADDR3'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Orange Co - Address Points',
         id: 'fl-orange-co-pts',
         url: 'https://maps.ocpafl.org/proxy.ashx?https://gisapp2.ocpafl.org/arcgis/rest/services/DYNAMIC/Dynamic_Layers/MapServer/0',
         labelFields: ['ADDR_FULL'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Orange Co - Parcels',
         id: 'fl-orange-co-parcels',
         url: 'https://maps.ocpafl.org/proxy.ashx?https://gisapp2.ocpafl.org/arcgis/rest/services/DYNAMIC/Dynamic_Layers/MapServer/10',
         labelFields: ['STR_NUM','PRE_DIR','STR_NAME','POST_TYPE','POST_DIR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Osceola Co - Address Points',
         id: 'fl-osceola-co-pts',
         url: 'http://ira.property-appraiser.org/arcgis/rest/services/GisSite_ParcelCentroids/MapServer/0',
         labelFields: ['StreetNumber','StreetName','StreetSfx','StreetSfxDir','CondoUnit'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Osceola Co - Parcels',
         id: 'fl-osceola-co-parcels',
         url: 'http://ira.property-appraiser.org/arcgis/rest/services/PAT_GisSite_TaxMap/MapServer/0',
         labelFields: ['StreetNumber','StreetName','StreetSfx','StreetSfxDir'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pasco Co - Address Points',
         id: 'fl-pasco-co-pts',
         url: 'http://pascoview.pascocountyfl.net/gisweb/rest/services/PascoViewBaseMap/MapServer/1',
         labelFields: ['FULL_ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Pasco Co - Parcels',
         id: 'fl-pasco-co-parcels',
         url: 'http://pascoview.pascocountyfl.net/gisweb/rest/services/PascoViewBaseMap/MapServer/2',
         labelFields: ['PHYSADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pensacola - City Parcels',
         id: 'fl-pensacola-city-parcels',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/Pensacola/GoMaps4/MapServer/84',
         labelFields: ['SITEADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pinellas Co - Address Points',
         id: 'fl-pinellas-co-pts',
         url: 'http://egis.pinellascounty.org/arcgis/rest/services/PublicWebGIS/Parcels/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Pinellas Co - Parcels',
         id: 'fl-pinellas-co-parcels',
         url: 'http://egis.pinellascounty.org/arcgis/rest/services/PublicWebGIS/Parcels/MapServer/1',
         labelFields: ['SITE_ADDRESS'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Polk Co - Address Points',
         id: 'fl-polk-co-pts',
         url: 'http://map.polkpa.org/proxy.ashx?http://gisapp/ArcGIS/rest/services/WebSite/E911_Site_Address_Points/MapServer/0',
         labelFields: ['PrimaryAddress'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Polk Co - Parcels NO DATA',
         id: 'fl-polk-co-parcels',
         url: 'http://map.polkpa.org/proxy.ashx?http://gisapp/ArcGIS/rest/services/WebSite/ps911_Addresses_gissde/MapServer/21',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Port Orange - City Parcels',
         id: 'fl-port-orange-city-parcels',
         url: 'http://gisweb.port-orange.org:6080/arcgis/rest/services/Services/PARCEL_POLYGONS/MapServer/0',
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         labelFields: ['SITUS_ADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Putnam Co - Address Points',
         id: 'fl-putnam-co-pts',
         url: 'http://gis.putnam-fl.com/putgis/rest/services/Operational/ParcelsPlus/MapServer/0',
         labelFields: ['FULLADDR'],
         processLabel: function(label) { return label.replace(/,.*/,''); },
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Putnam Co - Parcels',
         id: 'fl-putnam-co-parcels',
         url: 'http://gis.putnam-fl.com/putgis/rest/services/Operational/ParcelsPlus/MapServer/2',
         labelFields: ['SITEADDRESS'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sarasota Co - Address Points',
         id: 'fl-sarasota-co-pts',
         url: 'https://ags2.scgov.net/arcgis/rest/services/SCPA/Cama_Addresses/MapServer/6',
         labelFields: ['Address'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Sarasota Co - Parcels NO DATA',
         id: 'fl-sarasota-co-parcels',
         url: 'https://ags2.scgov.net/arcgis/rest/services/SCPA/WAB_Labels/MapServer/0',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Seminole Co - Address Points',
         id: 'fl-seminole-co-pts',
         url: 'http://seminolearcgis.seminolecountyfl.gov:6080/arcgis/rest/services/CountyBaseMap/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Seminole Co - Parcels',
         id: 'fl-seminole-co-parcels',
         url: 'http://seminolearcgis.seminolecountyfl.gov:6080/arcgis/rest/services/InformationKiosk2/MapServer/1',
         labelFields: ['PropertyAddress'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Johns Co - Address Points',
         id: 'fl-st-johns-co-pts',
         url: 'http://www.gis.bocc.co.st-johns.fl.us/sjcgis/rest/services/address_site/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Johns Co - Parcels',
         id: 'fl-st-johns-co-parcels',
         url: 'http://www.gis.bocc.co.st-johns.fl.us/sjcgis/rest/services/Parcel/MapServer/0',
         labelFields: ['PRP_ADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Lucie Co - Parcels',
         id: 'fl-st-lucie-co-parcels',
         url: 'http://www.paslc.org/arcgis/rest/services/Prod/ParcelBase/MapServer/0',
         labelFields: ['DisplaySiteAddress'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tampa - City Address Points',
         id: 'fl-tampa-city-pts',
         url: 'https://arcgis.tampagov.net/arcgis/rest/services/Address/AddressPoints/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Tampa - City Parcels',
         id: 'fl-tampa-city-parcels',
         url: 'https://arcgis.tampagov.net/arcgis/rest/services/Parcels/TaxParcel/MapServer/0',
         labelFields: ['SITE_ADDR'],
         //processLabel: function(label) { label.replace(/\d{5}$/); },
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Volusia Co - Address Points',
         id: 'fl-volusia-co-pts',
         url: 'http://maps.vcgov.org/arcgis/rest/services/MapIT/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Volusia Co - Parcels',
         id: 'fl-volusia-co-parcels',
         url: 'http://maps.vcgov.org/arcgis/rest/services/MapIT/MapServer/5',
         labelFields: ['SITUS_ADDR'],
         processLabel: function(label) { label.replace(/\d{5}$/); },
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'W Palm Beach Co - Address Points',
         id: 'fl-wpalm-beach-co-pts',
         url: 'https://maps.co.palm-beach.fl.us/arcgis/rest/services/OpenData/open_data_v2/MapServer/0',
         labelFields: ['STREET_NO','STREET_NAME','STREET_SUFFIX'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'W Palm Beach Co - Parcels NO DATA',
         id: 'fl-wpalm-beach-co-parcels',
         url: 'http://maps.co.palm-beach.fl.us/arcgis/rest/services/Parcels/labels/MapServer/0',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},


        // Georgia
        // ************************************

        {name: 'Augusta - City Address Points',
         id: 'ga-augusta-city-points',
         url: 'http://gismap.augustaga.gov/arcgis/rest/services/Map_LayersJS/MapServer/78',
         labelFields: ['SITEADDRESS'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Augusta - City Parcels',
         id: 'ga-augusta-city-parcels',
         url: 'http://gismap.augustaga.gov/arcgis/rest/services/Map_LayersJS/MapServer/100',
         labelFields: ['siteaddress'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chatham Co - Parcels',
         id: 'ga-chatham-co-parcels',
         url: 'http://sagiscloud.thempc.org/arcgis/rest/services/sagis_org/SAGIS1/MapServer/24',
         labelFields: ['PROP_ADDRESS'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clayton Co - Parcels',
         id: 'ga-clayton-co-parcels',
         url: 'http://weba.co.clayton.ga.us/arcgis/rest/services/TaxAssessor/Parcels/MapServer/0',
         labelFields: ['SITEADDRES'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cherokee Co - Address Points',
         id: 'ga-cherokee-co-points',
         url: 'http://gis.cherokeega.com/arcgis/rest/services/Address/MapServer/0',
         labelFields: ['CompleteAddress'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Cherokee Co - Parcels',
         id: 'ga-cherokee-co-parcels',
         url: 'http://gis.cherokeega.com/arcgis/rest/services/TaxParcelsNew/MapServer/6',
         labelFields: ['CompleteAddress'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cobb Co - Parcels',
         id: 'ga-cobb-co-parcels',
         url: 'http://www.cobbgis.org:81/arcgislb1/rest/services/cobbpublic/cobbparcelsmapwm_public/MapServer/3',
         labelFields: ['SITUS_ADDR'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dekalb Co - Address Points',
         id: 'ga-dekalb-co-points',
         url: 'http://maps.dekalbcountyga.gov/arcgis/rest/services/TaxParcels/MapServer/2',
         labelFields: ['ADDRESS_NUMBER'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Dekalb Co - Parcels',
         id: 'ga-dekalb-co-parcels',
         url: 'http://maps.dekalbcountyga.gov/arcgis/rest/services/TaxParcels/MapServer/20',
         labelFields: ['ADDRESS_NUMBER','FULL_STREET_NAME'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Forsyth Co - Address Points',
         id: 'ga-forsyth-co-points',
         url: 'http://gisp2.forsythco.com/arcgis/rest/services/BaseMap/GISWeb_Property/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Forsyth Co - Parcels',
         id: 'ga-forsyth-co-parcels',
         url: 'http://gisp2.forsythco.com/arcgis/rest/services/BaseMap/GISWeb_Property/MapServer/1',
         labelFields: ['GISDB.LGIM.TaxParcel.SITEADDRESS'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fulton Co - Address Points',
         id: 'ga-fulton-co-points',
         url: 'https://gis.fultoncountyga.gov/arcgis/rest/services/MapServices/PropertyMapViewer/MapServer/9',
         labelFields: ['StNumber','PreMod','PreDir','Name','PostType','PostDir','PostMod'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Fulton Co - Parcels',
         id: 'ga-fulton-co-parcels',
         url: 'https://gis.fultoncountyga.gov/arcgis/rest/services/MapServices/PropertyMapViewer/MapServer/10',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Gwinnett Co - Parcels (NO DATA)',
         id: 'ga-gwinnett-co-parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/GwinnettGa/GwinnettGaDynamic2/MapServer/0',
         labelFields: ['PIN'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Newnan - City Parcels',
         id: 'ga-newnan-city-parcels',
         url: 'https://services6.arcgis.com/tjTJgu5ZqqixGP2v/arcgis/rest/services/2017_City_Parcels/FeatureServer/1',
         labelFields: ['HouseNumbe','StreetDire','StreetName','StreetType','Unit'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Paulding Co - Address Points',
         id: 'ga-paulding-co-points',
         url: 'https://arcgis4.roktech.net/arcgis/rest/services/Paulding/GoMaps4/MapServer/6',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Paulding Co - Parcels (NO DATA)',
         id: 'ga-paulding-co-parcels',
         url: 'https://arcgis4.roktech.net/arcgis/rest/services/Paulding/GoMaps4/MapServer/36',
         labelFields: [''],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},


        // Indiana
        // ************************************

        {name: 'State - Address Points',
         id: 'in-state-points',
         url: 'https://gis.in.gov/arcgis/rest/services/DOT/LandRecordsSystem/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'IN',
         style: DEFAULT_PT_STYLE},

        // Iowa
        // ************************************

        {name: 'Adair Co - Parcels (NO DATA)',
         id: 'ia-adair-co-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/Adair/MapServer/3',
         labelFields: ['PID'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Buena Vista Co - Parcels',
         id: 'ia-buena-vista-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/BuenaVistaIAFeatures/FeatureServer/4',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Butler Co - Parcels',
         id: 'ia-butler-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/ButlerIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cedar Rapid - City Parcels',
         id: 'ia-cedar-rapid-city-parcels',
         url: 'http://crgis.cedar-rapids.org/arcgis/rest/services/Maps/Parcel_Lines_Simple/MapServer/1',
         labelFields: ['SITEADDRESS'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clinton - City Parcels',
         id: 'ia-clinton-city-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/CityofClintonIAFeatures/FeatureServer/6',
         labelFields: ['TSC_Parcel_Number'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clay Co - Parcels (NO DATA)',
         id: 'ia-clay-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/ClayIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Parcel_Number'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Crawford Co - Parcels',
         id: 'ia-crawford-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/CrawfordIAFeatures/FeatureServer/6',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(/\s\w\w\s\d{5}$/,''); },
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dallas Co - Parcels (NO DATA)',
         id: 'ia-dallas-co-parcels',
         url: 'http://216.81.174.57/arcgis/rest/services/Live/ParcelPoly931NI_Live/MapServer/46',
         labelFields: ['PIN'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Decatur Co - Parcels',
         id: 'ia-decatur-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/DecaturIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Des Moines - City Address Points',
         id: 'ia-des-moines-city-pts',
         url: 'http://maps.dmgov.org/arcgis/rest/services/External/EXTDynamicAddressLookUp/MapServer/0',
         labelFields: ['FullAddr'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Des Moines - City Parcels (NO DATA)',
         id: 'ia-des-moines-city-parcels',
         url: 'http://maps.dmgov.org/arcgis/rest/services/External/EXTDynamicAddressLookUp/MapServer/25',
         labelFields: [''],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'W Des Moines - City Address Points',
         id: 'ia-w-des-moines-city-pts',
         url: 'http://maps.wdm.iowa.gov/arcgis/rest/services/Geocortex/reader_land/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'W Des Moines - City Parcels (NO DATA)',
         id: 'ia-w-des-moines-city-parcels',
         url: 'http://maps.wdm.iowa.gov/arcgis/rest/services/Geocortex/reader_land/MapServer/1',
         labelFields: [''],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Des Moines Co - Address Points',
         id: 'ia-des-moines-co-pts',
         url: 'https://www.dmcwebgis.com/arcgis/rest/services/Assessor/AddressJan/MapServer/0',
         labelFields: ['FULL_ADDRE'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Des Moines Co - Parcels',
         id: 'ia-des-moines-co-parcels',
         url: 'https://www.dmcwebgis.com/arcgis/rest/services/Assessor/IdentifiableLayersJuly/MapServer/0',
         labelFields: ['SiteAdd'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dubuque Co - Parcels',
         id: 'ia-dubuque-co-parcels',
         url: 'http://gis.dbqco.org/arcgis/rest/services/Maps/LandRecords/MapServer/26',
         labelFields: ['FullSitus'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Greene Co - Parcels (NO DATA)',
         id: 'ia-greene-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/GreeneIAFeatures/FeatureServer/5',
         labelFields: ['TSC_Parcel_Number'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ida Co - Parcels',
         id: 'ia-ida-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/IdaIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Situs_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Iowa Co - Parcels',
         id: 'ia-iowa-co-parcels',
         url: 'https://iowagis.integritygis.com/Geocortex/Essentials/REST/sites/Iowa_County_IA/map/mapservices/1/rest/services/x/MapServer/6',
         labelFields: ['ADDRESS'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        //   same data as above but different layer file.

        //        {name: 'Iowa Co - Parcel 2',
        //         id: 'ia-iowa-co-parcels2',
        //         url: 'https://iowagis.integritygis.com/Geocortex/Essentials/REST/sites/Iowa_County_IA/map/mapservices/1/rest/services/x/MapServer/8',
        //         labelFields: ['ADDRESS'],
        //         state: 'IA',
        //         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Addr Points (limited)',
         id: 'ia-jefferson-co-pts',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/JeffersonIAFeatures/FeatureServer/4',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'ia-jefferson-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/JeffersonIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kossuth Co - Addr Points (limited)',
         id: 'ia-kossuth-co-pts',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/KossuthIAFeatures/FeatureServer/5',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Kossuth Co - Parcels',
         id: 'ia-lossuth-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/KossuthIAFeatures/FeatureServer/6',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Linn Co - Address Points',
         id: 'ia-linn-co-pts',
         url: 'https://gis.linncounty.org/arcgis/rest/services/PublicAuditor/audLandRecords/MapServer/37',
         labelFields: ['HOUSENO','PREDIR','NAME','SUFTYPE','SUFDIR','UNITTYPE','UNITNO'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Linn Co - Parcels',
         id: 'ia-linn-co-parcels',
         url: 'https://gis.linncounty.org/arcgis/rest/services/PublicAuditor/audLandRecords/MapServer/41',
         labelFields: ['SitusAddress'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mitchell Co - Parcels NO DATA',
         id: 'ia-mitchell-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/MitchellIAFeatures/FeatureServer/3',
         labelFields: ['TSC_Parcel_Number'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Monona Co - Parcels',
         id: 'ia-monona-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/MononaIAFeatures/FeatureServer/5',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Polk Co - Address Points',
         id: 'ia-polk-co-pts',
         url: 'https://gis.polkcountyiowa.gov/arcgis/rest/services/Public/basemapJPG/MapServer/0',
         labelFields: ['FullAddr'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Polk Co - Parcels',
         id: 'ia-polk-co-parcels',
         url: 'https://gis.polkcountyiowa.gov/arcgis/rest/services/Public/ParcelLabels/MapServer/1',
         labelFields: ['Gims.dbo.address.house_no','Gims.dbo.address.st_dir_pre','Gims.dbo.address.st_name','Gims.dbo.address.st_type','Gims.dbo.address.st_dir_suf'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pottawattamie Co - Parcels',
         id: 'ia-pottawattamie-co-parcels',
         url: 'http://gis.pottcounty-ia.gov/arcgis/rest/services/Public_Basemap_WGS84/Interactive/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Scott Co - Address Points',
         id: 'ia-scott-co-pts',
         url: 'http://services.arcgis.com/ovln19YRWV44nBqV/ArcGIS/rest/services/ScottIAfeatures/FeatureServer/3',
         //labelFields: ['STRADD'], show full address
         labelFields: ['SAN','PRD','STN','STS','POD'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Scott Co - Parcels',
         id: 'ia-scott-co-parcels',
         url: 'http://services.arcgis.com/ovln19YRWV44nBqV/ArcGIS/rest/services/ScottIAfeatures/FeatureServer/0',
         labelFields: ['PropertyAddress'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sioux Co - Parcels',
         id: 'ia-sioux-co-parcels',
         url: 'http://scgis.siouxcounty.org/arcgis/rest/services/Maps/Cadastral/MapServer/1',
         labelFields: ['FullSitus'],
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Addr Points (Limited)',
         id: 'ia-washington-co-pts',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/WashingtonIAFeatures/FeatureServer/4',
         labelFields: ['TSC_Site_Address'],
         state: 'IA',
         style: DEFAULT_PT_STYLE},

        {name: 'Washington Co - Parcels',
         id: 'ia-washington-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/WashingtonIAFeatures/FeatureServer/5',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(/,\s\w\w$/,''); },
         state: 'IA',
         style: DEFAULT_PARCEL_STYLE},

        // Kansas
        // ************************************

        {name: 'Douglas Co - Address Points',
         id: 'ks-douglas-co-pts',
         url: 'http://gis.douglascountyks.org/ArcGIS/rest/services/PropertyViewerServices/LandRecords/MapServer/7',
         labelFields: ['LABEL'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Douglas Co - Parcels',
         id: 'ks-douglas-co-Parcels',
         url: 'http://gis.douglascountyks.org/ArcGIS/rest/services/PropertyViewerServices/Parcel/MapServer/0',
         labelFields: ['situs'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Butler Co - Address Points',
         id: 'ks-butler-co-pts',
         url: 'http://ww1.bucoks.com/arcgis/rest/services/BuCoKs_NGAddressPoints/MapServer/0',
         labelFields: ['HNO','PRD','RD','STS'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Butler Co - Parcels',
         id: 'ks-butler-co-Parcels',
         url: 'http://ww1.bucoks.com/arcgis/rest/services/BuCoKs_ParcelData/MapServer/0',
         labelFields: ['Situs_No','Situs_Dir','Situs_St','Situs_Type'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cowley Co - Parcels (NO DATA)',
         id: 'ks-cowley-co-Parcels',
         url: 'https://gis.cowleycounty.org/clserver/rest/services/Public_Layers/CL_General/MapServer/0',
         labelFields: [''],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Doniphan Co - Address Points',
         id: 'ks-doniphan-co-pts',
         url: 'https://doniphangis.integritygis.com/Geocortex/Essentials/REST/sites/Doniphan_County_KS/map/mapservices/3/rest/services/x/MapServer/1',
         labelFields: ['HNO','PRD','RD','STS'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Doniphan Co - Parcels',
         id: 'ks-doniphan-co-Parcels',
         url: 'https://doniphangis.integritygis.com/Geocortex/Essentials/REST/sites/Doniphan_County_KS/map/mapservices/3/rest/services/x/MapServer/11',
         labelFields: ['SitusAddress'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ellis Co - Parcels',
         id: 'ks-ellis-co-Parcels',
         url: 'http://geodataportal.net/arcgis/rest/services/CityCountyData/MapServer/54',
         labelFields: ['AddressComplete'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Finney Co - Address Points',
         id: 'ks-finney-co-pts',
         url: 'https://www.finneycountygis.com/arcgis/rest/services/Basemaps/ParcelBasemap/MapServer/3',
         labelFields: ['HNO','PRD','STP','RD','STS','POD'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Finney Co - Parcels',
         id: 'ks-finney-co-Parcels',
         url: 'https://www.finneycountygis.com/arcgis/rest/services/Finney_County_Appraisers/ParcelBoundaries/MapServer/0',
         labelFields: ['SitusAddress'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Parcels (NO DATA)',
         id: 'ks-franklin-co-Parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/FranklinKs/FranklinKsDynamic/MapServer/1',
         labelFields: [],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Harper Co - Address Points',
         id: 'ks-harper-co-pts',
         url: 'http://harpergis.integritygis.com/Geocortex/Essentials/REST/sites/Harper_County_KS/map/mapservices/1/rest/services/x/MapServer/16',
         labelFields: ['HNO','PRD','STP','RD','STS','POD'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Harper Co - Parcels',
         id: 'ks-harper-co-Parcels',
         url: 'http://harpergis.integritygis.com/Geocortex/Essentials/REST/sites/Harper_County_KS/map/mapservices/1/rest/services/x/MapServer/22',
         labelFields: ['SitusAddress'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Harvey Co - Parcels (NO DATA)',
         id: 'ks-harvey-co-Parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/HarveyKs/HarveyKsDynamic/MapServer/0',
         labelFields: [''],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jackson Co - Parcels',
         id: 'ks-jackson-co-Parcels',
         url: 'https://parcels.rsdigital.com/Geocortex/Essentials/REST/sites/JacksonParcels/map/mapservices/0/rest/services/x/MapServer/34',
         labelFields: ['jacksonparcels.sde.JacksonAA.siteaddress'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Parcels (NO DATA)',
         id: 'ks-jefferson-co-Parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/JeffersonKs/JeffersonKsDynamic/MapServer/0',
         labelFields: [''],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Laurence - City Address Points',
         id: 'ks-laurence-city-pts',
         url: 'https://gis2.lawrenceks.org/arcgis/rest/services/AddressPoints/MapServer/0',
         labelFields: ['HNO','PRD','STP','RD','STS','POD'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Laurence - City Parcels',
         id: 'ks-laurence-city-Parcels',
         url: 'https://gis2.lawrenceks.org/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['situs'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pottawatomie Co - Address Points',
         id: 'ks-pottawatomie-co-pts',
         url: 'http://www2.pottcounty.org/arcgis2/rest/services/AddressAll/MapServer/1',
         labelFields: ['NUMBER_','SUB_NUM','PRE_DIR','STR_NAM','STR_TYPE','SUF_DIR'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Pottawatomie Co - Parcels (NO DATA)',
         id: 'ks-pottawatomie-co-Parcels',
         url: 'http://www2.pottcounty.org/arcgis2/rest/services/ParcelsAll/MapServer/0',
         labelFields: [''],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Reno Co - Address Points',
         id: 'ks-reno-co-pts',
         url: 'http://renogis3.renogov.org/arcgis/rest/services/Test/WebLayers/MapServer/6',
         labelFields: ['Appraiser_Data_Export.PROPADD'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Reno Co - Parcels',
         id: 'ks-reno-co-Parcels',
         url: 'http://renogis3.renogov.org/arcgis/rest/services/Test/WebLayers/MapServer/7',
         labelFields: ['Appraiser_Data_Export.PROPADD'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Shawnee Co - Address Points',
         id: 'ks-Shawnee-co-pts',
         url: 'http://gis.snco.us/arcgis2/rest/services/Basemap_Cached/MapServer/55',
         labelFields: ['PADDRESS'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Shawnee Co - Parcels',
         id: 'ks-shawnee-co-Parcels',
         url: 'http://gis.snco.us/arcgis2/rest/services/Parcels/MapServer/0',
         labelFields: ['PADDRESS'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Summer Co - Parcels (NO DATA)',
         id: 'ks-summer-co-Parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/SumnerKs/SumnerKsDynamic/MapServer/0',
         labelFields: [],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wyandotte Co - Parcels (NO DATA)',
         id: 'ks-wyandotte-co-Parcels',
         url: 'https://arcgis.wycokck.org/mapserv/rest/services/parcels/MapServer/0',
         labelFields: [],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wichita Co - Address Points',
         id: 'ks-wichita-co-pts',
         url: 'http://gismaps.wichita.gov/agsweb/rest/services/COWGIS/BaseMap/MapServer/1',
         labelFields: ['S_Fulladd'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Wichita - City Parcels',
         id: 'ks-wichita-city-Parcels',
         url: 'http://gismaps.wichita.gov/agsweb/rest/services/COWGIS/Property_and_Location/MapServer/4/',
         labelFields: ['Prop_Addr'],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},


        // Kentucky
        // ************************************

        {name: 'Anderson Co - Address Points',
         id: 'ky-anderson-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Anderson/AndersonStructureDynamic/MapServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Boone Co - Structures',
         id: 'ky-boone-co-bldgs',
         url: 'https://secure.boonecountygis.com/server/rest/services/BuildingFootprints/MapServer/0',
         labelFields: ['SITEADD1'],
         state: 'KY',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Boone Co - Parcels',
         id: 'ky-boone-co-parcels',
         url: 'https://secure.boonecountygis.com/server/rest/services/ParcelLayers/MapServer/0',
         labelFields: ['SITEADD1'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boyle Co - Address Points',
         id: 'ky-boyle-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Boyle/BoyleBaseStructures/MapServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Campbell Co - Parcels',
         id: 'ky-camppbell-co-parcels',
         url: 'https://linkgis.org/arcgisweb/rest/services/CC_KC_PCTheme/MapServer/7',
         labelFields: ['LOC_ADD'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Campbell Co - Structures',
         id: 'ky-camppbell-co-structures',
         url: 'https://linkgis.org/arcgisweb/rest/services/Buildings/MapServer/3',
         labelFields: ['PROPERTY_L','PROPERTY_1','PROPERTY_2'],
         state: 'KY',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Clark Co - Address Points',
         id: 'ky-clark-co-pts',
         url: 'http://gis.ccgisonline.com:6080/arcgis/rest/services/BASELAYERS/ADDRESSES/MapServer/0',
         labelFields: ['STRADD','PRE_DIR','STR_NAME','STREET_TYP','STREET_DIR'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Fayette Co - Address Points',
         id: 'ky-fayette-co-pts',
         url: 'https://maps.lexingtonky.gov/lfucggis/rest/services/property/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Fayette Co - Parcels',
         id: 'ky-fayette-co-parcels',
         url: 'https://maps.lexingtonky.gov/lfucggis/rest/services/parcels/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'ky-franklin-co-parcels',
         url: 'https://services2.arcgis.com/1Mn98EWnWi3Ezwj3/ArcGIS/rest/services/Parcels101817/FeatureServer/0',
         where: "MAPNUM <> ''",
         labelFields: ['streetNo','strName'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Address Points',
         id: 'ky-franklin-co-pts',
         url: 'https://services2.arcgis.com/1Mn98EWnWi3Ezwj3/ArcGIS/rest/services/Addresses/FeatureServer/0',
         labelFields: ['FULLNAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Garrard Co - Address Points',
         id: 'ky-garrard-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Garrard/GarrardCountyWater/MapServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Co - Address Points',
         id: 'ky-jefferson-co-pts',
         url: 'https://ags1.lojic.org/arcgis/rest/services/Metro/EMA/MapServer/1',
         labelFields: ['HOUSENO','DIR', 'STRNAME', 'TYPE'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Jessamine Co - Address Points',
         id: 'ky-jessamine-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/JessamineKY_Map_Package/MapServer/6',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Hardin Co - Address Points',
         id: 'ky-hardin-co-pts',
         url: 'http://services1.arcgis.com/fYwcHOBzInDTQxh0/ArcGIS/rest/services/Address_PointsJAN2017/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Hardin Co - Parcels',
         id: 'ky-hardin-co-parcels',
         url: 'http://services1.arcgis.com/fYwcHOBzInDTQxh0/ArcGIS/rest/services/Parcels_Jan_2017/FeatureServer/0',
         labelFields: ['PROPERTY_L'],
         where: "MAP<>''",
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Henderson Co - Address Points',
         id: 'ky-henderson-co-pts',
         url: 'http://gis.hendersonky.us/arcgis/rest/services/Public/Addresses/FeatureServer/0',
         labelFields: ['FULL_ADDR'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Kenton Co - Parcels',
         id: 'ky-kenton-co-parcels',
         url: 'http://kcgis.kcor.org/arcgis/rest/services/Parcel_Layer/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        // *** Logan county uses this server, but no address data: http://161.6.109.206/wkugis/rest/services/

        {name: 'Madison Co - Address Points',
         id: 'ky-madison-co-parcels',
         url: 'https://arcserver.madisoncountyky.us/arcgis/rest/services/County_Web_Maps/Structures/MapServer/0',
         labelFields: ['ADDNUMBER', 'STREET'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Magoffin Co - Address Points',
         id: 'ky-magoffin-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Magoffin/PhoneScrub/FeatureServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        // *** NOTE: Marshall county uses ArcGIS, but I wasn't able to find their REST server.

        {name: 'McCracken Co - Address Points',
         id: 'ky-mccracken-co-pts',
         url: 'http://map-gis.paducahky.gov/arcgis/rest/services/BaseLayersPub/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'McCracken Co - Paducah - Address Points',
         id: 'ky-mccracken-co-paducah-pts',
         url: 'http://map-gis.paducahky.gov/arcgis/rest/services/BaseLayersPub/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Mercer Co - Address Points',
         id: 'ky-mercer-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Mercer/MercerStructuresDynamic/MapServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Pendleton Co - Parcels',
         id: 'ky-pendleton-co-parcels',
         url: 'https://linkgis.org/arcgisweb/rest/services/CC_KC_PCTheme/MapServer/18',
         labelFields: ['Location_2'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        // NOTE: I tried to get this to work.  Created a proj4js projection for EPSG:2272.  That worked to transform coordinates, but they were wrong because
        /// 2272 doesn't match up (it's a Pennsyvania coordinate system).  I wasn't sure where to go from there, so just commenting this for now.
        // {name: 'Perry Co - Parcels',
        //  id: 'ky-perry-co-parcels',
        //  url: 'http://gis.perryco.org/ArcGIS/rest/services/PerryBaseMap/MapServer/5',
        //  spatialReference: 2272,
        //  labelFields: ['COMBINED_S'],
        //  state: 'KY',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'Powell Co - Address Points',
         id: 'ky-powell-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Powell/PowellStructureDynamic/MapServer/0',
         labelFields: ['NUMBER_','RD_NAME'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Scott Co - Address Points',
         id: 'ky-scott-co-pts',
         url: 'http://gis.gscplanning.com/arcgis/rest/services/Addresses/MapServer/0',
         labelFields: ['COMPLETE_A'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},

        {name: 'Shelby Co - Parcels',
         id: 'ky-shelby-co-parcels',
         url: 'https://services2.arcgis.com/VqPd1Ybcc46AvijK/ArcGIS/rest/services/Parcels_Service062717/FeatureServer/0',
         labelFields: ['Location'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        // From the Bowling Green GIS site...
        {name: 'Warren Co - Parcels',
         id: 'ky-warren-co-parcels',
         url: 'http://gis.bgky.org/arcgis/rest/services/ParcelsPVA/MapServer/1',
         labelFields: ['LOCATION'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Warren Co - WKU - Structures',
         id: 'ky-warren-co-wku-structures',
         url: 'http://161.6.109.206/wkugis/rest/services/MainCampusBase/MapServer/91',
         labelHeaderFields: ['Bldg_Name'],
         labelFields: ['Address'],
         state: 'KY',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Webster Co - Parcels',
         id: 'ky-webster-co-pts',
         url: 'https://kygisserver.ky.gov/arcgis/rest/services/WGS84WM_Services/Ky_PVA_Webster_Parcels_WGS84WM/MapServer/1',
         where: "PIDN <> 'ROADS'",
         visibleAtZoom: 5,
         labelFields: ['Property_L'],
         state: 'KY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Woodford Co - Address Points',
         id: 'ky-woodford-co-pts',
         url: 'https://maps2.bgadd.org/arcgis/rest/services/Woodford/WebMapDynamic/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'KY',
         style: DEFAULT_PT_STYLE},


        // Maryland
        // ************************************

        {name: 'Maryland - Parcel Address Points',
         id: 'md-state-points',
         url: 'http://geodata.md.gov/imap/rest/services/PlanningCadastre/MD_PropertyData/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Maryland - Parcel Boundaries',
         id: 'md-state-parcels',
         url: 'http://geodata.md.gov/imap/rest/services/PlanningCadastre/MD_ParcelBoundaries/MapServer/0',
         where: "ACCTID<>''",
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Baltimore Co - Parcels',
         id: 'md-baltimore-co-parcels',
         url: 'https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Property/Property/MapServer/1',
         labelFields: ['PREMISE_ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Baltimore Co- Address Points',
         id: 'md-baltimore-county-points',
         url: 'https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Facilities/Address/MapServer/0',
         labelFields: ['ADDRLABEL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},


        // Massachusetts
        // ************************************

        // multiple address points ( like duplex Building ) have multiple data in same label is showing all data at once. not sure if there is anything we can do on this.
        // example: adddress 9 Arthur St, Maynard, MA, 01754, USA & 11 Arthur St, Maynard, MA, 01754, USA share the same point, but in Arcgis viewer you can see
        // in the pop-up window that it has 3 separe data fiels on same label  9 , 11 , 9-11
        {name: 'Massachusetts - State Address Points',
         id: 'ma-massachusetts-state-pts',
         url: 'http://gisprpxy.itd.state.ma.us/arcgisserver/rest/services/AGOL/MassGIS_Master_Address_Points/FeatureServer/0',
         labelFields: ['FULL_NUMBER_STANDARDIZED','STREET_NAME'],
         state: 'MA',
         style: DEFAULT_PT_STYLE},

        {name: 'Massachusetts - State Parcels',
         id: 'ma-massachusetts-state-parcels',
         url: 'http://gisprpxy.itd.state.ma.us/arcgisserver/rest/services/AGOL/L3Parcels_feature_service/FeatureServer/0',
         labelFields: ['SITE_ADDR'],
         state: 'MA',
         style: DEFAULT_PARCEL_STYLE},

        // Boston Point layer for address has the same issue as State layer if using label FULL_ADDRESS . but this layer also had the main Parcel address
        // on individual label fields , state layer does not.
        {name: 'Boston - City Address Points',
         id: 'ma-boston-city-pts',
         url: 'http://gis.cityofboston.gov/arcgis/rest/services/SAM/Live_SAM_Address/MapServer/0',
         visibleAtZoom: 7,
         labelFields: ['STREET_NUMBER','FULL_STREET_NAME'],
         state: 'MA',
         style: DEFAULT_PT_STYLE},

        {name: 'Boston - City Parcels',
         id: 'ma-boston-city-parcels',
         url: 'http://gis.cityofboston.gov/arcgis/rest/services/Parcels/parcels_full_17/MapServer/0',
         visibleAtZoom: 7,
         labelFields: ['FULL_ADDRESS'],
         distinctFields: ['GIS_ID'],
         processLabel: function(label) { return label.replace(/\s*,\s*\d{5}$/,'').replace(/\s+Apt\s+.*$/,''); },
         state: 'MA',
         style: DEFAULT_PARCEL_STYLE},


        // Michigan
        // ************************************

        {name: 'Cheboygan Co - Parcels',
         id: 'mi-cheboygan-co-parcels',
         url: 'https://services6.arcgis.com/j6ueqNZduqQcCpQQ/ArcGIS/rest/services/Quick_Reference/FeatureServer/1',
         labelFields: ['propstrcom'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emmet Co - Parcels',
         id: 'mi-emmet-co-parcels',
         url: 'http://gis.emmetcounty.org/arcgis/rest/services/ParcelOverlay/MapServer/4',
         labelFields: ['PAR_ADDR'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kent Co - Address Points',
         id: 'mi-woodford-co-pts',
         url: 'http://gis.kentcountymi.gov/prodarcgis/rest/services/Copy_of_KC_CAD_Local_331/MapServer/1',
         labelFields: ['Address'],
         state: 'MI',
         style: DEFAULT_PT_STYLE},

        {name: 'Kent Co - Parcels',
         id: 'mi-kent-co-parcels',
         url: 'http://gis.kentcountymi.gov/prodarcgis/rest/services/Copy_of_KC_CAD_Local_331/MapServer/10',
         labelFields: ['PROPERTYADDRESS'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Newaygo Co - Parcels',
         id: 'mi-newaygo-co-parcels',
         url: 'http://arcgisweb.countyofnewaygo.com/gis/rest/services/WebMaps/NewaygoCounty/MapServer/2',
         labelFields: ['P_ADDRESS'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Oakland Co - Parcels',
         id: 'mi-oakland-co-parcels',
         url: 'https://gisservices.oakgov.com/arcgis/rest/services/Enterprise/EnterpriseOpenParcelDataMapService/MapServer/1',
         labelFields: ['SITEADDRESS'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        // THESE APPEAR TO BE SAME AS PARCELS, JUST A POINT AT THE CENTER.
        // {name: 'Oakland Co - Parcel Points',
        //  id: 'mi-oakland-co-pts',
        //  url: 'https://gisservices.oakgov.com/arcgis/rest/services/EagleView/EagleViewParcelDataWFSService/MapServer/5',
        //  labelFields: ['SITESTREETADDRESS'],
        //  state: 'MI',
        //  style: DEFAULT_PT_STYLE},

        {name: 'Washtenaw Co - Ann Arbor - Parcels (Limited)',
         id: 'mi-washtenaw-co-parcels',
         url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/A2ParcelsforItrakIt/MapServer/0',
         labelFields: ['PRPACOM'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washtenaw Co - Ann Arbor - Address Points (Limited)',
         id: 'mi-washtenaw-co-pts',
         url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/A2/A2BaseCacheBasicV2/MapServer/21',
         labelFields: ['SITUS_ADR'],
         state: 'MI',
         style: DEFAULT_PT_STYLE},

        {name: 'Wayne Co - Parcels',
         id: 'mi-wayne-co-parcels',
         url: 'https://services1.arcgis.com/b6rkZNtCd6Mx2gvB/arcgis/rest/services/Wayne_County_Parcels/FeatureServer/0',
         labelFields: ['propstreetcombined'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        // Minnesota
        // ************************************

        {name: 'Aitkin Co - Address Points',
         id: 'mn-aitkin-co-pts',
         url: 'http://gisweb.co.aitkin.mn.us/arcgis/rest/services/MapLayers/MapServer/4',
         labelFields: ['DLVRY_ADD'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Aitkin Co - Parcels',
         id: 'mn-aitkin-co-parcels',
         url: 'http://gisweb.co.aitkin.mn.us/arcgis/rest/services/MapLayers/MapServer/32',
         labelFields: ['AitkinAS400Data_dbo_tblArcIMSData101_Physical_Address'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Anoka Co - Address Points',
         id: 'mn-anoka-co-pts',
         url: 'http://gisservices.co.anoka.mn.us/anoka_gis/rest/services/OpenData_Property/MapServer/0',
         labelFields: ['LOC_ADDR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Anoka Co - Parcels',
         id: 'mn-anoka-co-parcels',
         url: 'http://gisservices.co.anoka.mn.us/anoka_gis/rest/services/Parcels_Mobile/MapServer/6',
         labelFields: ['LOC_ADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Becker Co - Address Points',
         id: 'mn-becker-co-pts',
         url: 'http://gis-server.co.becker.mn.us/arcgis/rest/services/BECKER_INTERNAL_101/MapServer/23',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Becker Co - Parcels',
         id: 'mn-becker-co-parcels',
         url: 'http://gis-server.co.becker.mn.us/arcgis/rest/services/BECKER_INTERNAL_101/MapServer/34',
         labelFields: ['SAAddress'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Beltrami Co - Address Points',
         id: 'mn-beltrami-co-pts',
         url: 'http://arcgis.co.beltrami.mn.us/arcgis/rest/services/BeltramiBasemap/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Beltrami Co - Parcels',
         id: 'mn-beltrami-co-parcels',
         url: 'http://arcgis.co.beltrami.mn.us/arcgis/rest/services/BeltramiBasemap/MapServer/8',
         labelFields: ['PROP_ADD1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Big Stone Co - Parcels',
         id: 'mn-big-stone-co-parcels',
         url: 'http://gis.co.big-stone.mn.us/arcgis/rest/services/BigStone_Parcel/MapServer/0',
         labelFields: ['BigStoneAS400.dbo.tblParcelJoin.PHYSADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carlton Co - Address Points',
         id: 'mn-carlton-co-pts',
         url: 'https://gis.co.carlton.mn.us/arcgis/rest/services/Addressing/Addressing_ActivePoints/MapServer/1',
         labelFields: ['Address'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Carlton Co - Parcels',
         id: 'mn-carlton-co-parcels',
         url: 'https://gis.co.carlton.mn.us/arcgis/rest/services/Other/Clickable_Parcel_Info_Internal____/MapServer/0',
         labelFields: ['PHYSADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carver Co - Address Points',
         id: 'mn-carver-co-pts',
         url: 'https://gis.co.carver.mn.us/arcgis_ea/rest/services/Specialty/CC_Public_Parcel_App_Mobile/MapServer/18',
         labelFields: ['SITEADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Carver Co - Parcels',
         id: 'mn-carver-co-parcels',
         url: 'https://gis.co.carver.mn.us/arcgis_ea/rest/services/Specialty/CC_Public_Parcel_App_Mobile/MapServer/20',
         labelFields: ['SITEADD'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cass Co - Address Points',
         id: 'mn-cass-co-pts',
         url: 'http://cassweb3.co.cass.mn.us/arcgis/rest/services/Basic_Layers2/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Cass Co - Parcels',
         id: 'mn-cass-co-parcels',
         url: 'http://cassweb3.co.cass.mn.us/arcgis/rest/services/Basic_Layers2/MapServer/14',
         labelFields: ['PHYSADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chippewa Co - Parcels',
         id: 'mn-chippewa-co-parcels',
         url: 'http://www.co.chippewa.mn.us/arcgis/rest/services/public_LINK/MapServer/2',
         labelFields: ['ChippewaTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},
        // chisago  Co down

        {name: 'Clay Co - Address Points',
         id: 'mn-clay-co-pts',
         url: 'https://map.claycountymn.gov/arcgis/rest/services/CLAY_LINK/MapServer/7',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Clay Co - Parcels',
         id: 'mn-clay-co-parcels',
         url: 'https://map.claycountymn.gov/arcgis/rest/services/CLAY_LINK/MapServer/3',
         labelFields: ['BLDG_NUM','STREETNAME','STREETTYPE','SUFFIX_DIR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clearwater Co - Address Points',
         id: 'mn-clearwater-co-pts',
         url: 'http://map.co.clearwater.mn.us/arcgis/rest/services/Clearwater/ClearwaterAll_LINK/MapServer/6',
         labelFields: ['DLVRY_ADD'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Clearwater Co - Parcels',
         id: 'mn-clearwater-co-parcels',
         url: 'http://map.co.clearwater.mn.us/arcgis/rest/services/Clearwater/ClearwaterAll_LINK/MapServer/4',
         labelFields: ['ClearwaterTax.dbo.tblManatronParcelInfo.PropAdd'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cook Co - Parcels',
         id: 'mn-cook-co-parcels',
         url: 'http://mapp.co.cook.mn.us/publicgis/rest/services/Public/TaxParcels/MapServer/0',
         labelFields: ['PROPERTYADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        // Crow Wing Co site down

        {name: 'Dakota Co - Address Points',
         id: 'mn-dakota-co-pts',
         url: 'https://gis2.co.dakota.mn.us/arcgis/rest/services/AGOL/DC_OL_DCPIAdvanced/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Dakota Co - Parcels',
         id: 'mn-dakota-co-parcels',
         url: 'https://gis2.co.dakota.mn.us/arcgis/rest/services/AGOL/DC_OL_DCPIAdvanced/MapServer/9',
         labelFields: ['SITEADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        // Dodge Co address point does not cover all county
        //url: 'https://maps.co.goodhue.mn.us/arcgis/rest/services/DodgeCounty/DodgeAssessorFinal/MapServer/10',

        {name: 'Dodge Co - Parcels',
         id: 'mn-dodge-co-parcels',
         url: 'https://maps.co.goodhue.mn.us/arcgis/rest/services/DodgeCounty/Dodge_Parcels/MapServer/0',
         labelFields: ['FULL_ADD'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Address Points',
         id: 'mn-douglas-co-pts',
         url: 'http://dc-web.co.douglas.mn.us/arcgis/rest/services/AGOL/Data_Layers/MapServer/43',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Douglas Co - Parcels (NO DATA)',
         id: 'mn-douglas-co-parcels',
         url: 'http://dc-web.co.douglas.mn.us/arcgis/rest/services/AGOL/Data_Layers/MapServer/48',
         labelFields: [''],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fillmore Co - Parcels',
         id: 'mn-fillmore-co-parcels',
         url: 'http://gis.co.fillmore.mn.us/arcgis/rest/services/FillmoreSubscription/MapServer/1',
         labelFields: ['FillmoreTaxData.dbo.tblParcelJoin.PHYSADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        // Goodhue Co site has 6 city GIS link if we needed to add City parcels

        {name: 'Goodhue Co - Parcels',
         id: 'mn-goodhue-co-parcels',
         url: 'https://maps.co.goodhue.mn.us/arcgis/rest/services/Goodhue_Parcels/LabelsGC2/MapServer/1',
         labelFields: ['HOUSENUM','FULLSTREET'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grant Co - Parcels',
         id: 'mn-grant-co-parcels',
         url: 'http://136.234.11.196/arcgis/rest/services/Grant/Grant_Public_LINK/MapServer/26',
         labelFields: ['GrantCountyTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hennepin Co - Address Points',
         id: 'mn-hennepin-co-pts',
         url: 'https://gis.hennepin.us/arcgis/rest/services/Maps/PROPERTY/MapServer/127',
         labelFields: ['ANUMBER','ST_NAME','ST_POS_TYP','ST_POS_DIR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Hennepin Co - Parcels',
         id: 'mn-hennepin-co-parcels',
         url: 'https://gis.hennepin.us/arcgis/rest/services/Maps/PROPERTY/MapServer/0',
         labelFields: ['HOUSE_NO','FRAC_HOUSE_NO','STREET_NM'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hubbard Co - Address Points',
         id: 'mn-hubbard-co-pts',
         url: 'https://gis.co.hubbard.mn.us/arcgis/rest/services/Dynamic_Layers2/MapServer/8',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Hubbard Co - Parcels',
         id: 'mn-hubbard-co-parcels',
         url: 'https://gis.co.hubbard.mn.us/arcgis/rest/services/Dynamic_Layers2/MapServer/53',
         labelFields: ['PAADRLN1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Itasca Co - Address Points',
         id: 'mn-itasca-co-pts',
         url: 'https://maps.co.itasca.mn.us/arcgis/rest/services/PublicViewerOperationalLayers/MapServer/2',
         labelFields: ['DLVRY_ADD'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Itasca Co - Parcels',
         id: 'mn-itasca-co-parcels',
         url: 'https://maps.co.itasca.mn.us/arcgis/rest/services/PublicViewerOperationalLayers/MapServer/4',
         labelFields: ['ADDR_10001'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kandiyohi Co - Address Points',
         id: 'mn-kandiyohi-co-pts',
         url: 'http://gis.co.kandiyohi.mn.us/arcgis/rest/services/Kandiyohi/Transportation/MapServer/6',
         labelFields: ['FULLADDRES'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Kandiyohi Co - Parcels',
         id: 'mn-kandiyohi-co-parcels',
         url: 'http://gis.co.kandiyohi.mn.us/arcgis/rest/services/Kandiyohi/Boundaries/MapServer/1',
         labelFields: ['PROPHSENUM','PROPDIR','PROPROAD'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kittson Co - Address Points',
         id: 'mn-kittson-co-pts',
         url: 'http://136.234.13.165/arcgis/rest/services/E911_Data/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Kittson Co - Parcels',
         id: 'mn-kittson-co-parcels',
         url: 'http://136.234.13.165/arcgis/rest/services/Kittson_All/MapServer/28',
         labelFields: ['KittsonAS400.dbo.tblParcelJoin.PROPERTY_ADDRESS_1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Koochiching Co - Parcels',
         id: 'mn-koochiching-co-parcels',
         url: 'https://services3.arcgis.com/8mdusDCY0WncdJVw/arcgis/rest/services/Parcels/FeatureServer/0',
         labelFields: ['ADDR_1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake of the Woods Co - Addr Points',
         id: 'mn-lake-woods-co-pts',
         url: 'http://oak.co.lake-of-the-woods.mn.us/arcgis/rest/services/Address/Address_locate_existing/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Lake of the Woods Co - Parcels',
         id: 'mn-lake-woods-co-parcels',
         url: 'http://oak.co.lake-of-the-woods.mn.us/arcgis/rest/services/Parcels_Service/MapServer/0',
         labelFields: ['AS400_Export.dbo.tblParcelJoin.PropAdd'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marshall Co - Parcels',
         id: 'mn-marshall-co-parcels',
         url: 'http://gismap.co.marshall.mn.us/arcgis/rest/services/Marshall/Marshall_ParcelData/MapServer/0',
         labelFields: ['MarshallCountyTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mille Lacs Co - Address Points',
         id: 'mn-mille-lacs-co-pts',
         url: 'http://gis.co.mille-lacs.mn.us/arcgis/rest/services/MilleLacs_E911/MapServer/3',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Mille Lacs Co - Parcels',
         id: 'mn-mille-lacs-co-parcels',
         url: 'http://gis.co.mille-lacs.mn.us/arcgis/rest/services/MilleLacs_Public_101/MapServer/36',
         labelFields: ['MilleLacsTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Norman Co - Parcels',
         id: 'mn-norman-co-parcels',
         url: 'http://gismap.co.norman.mn.us/arcgis/rest/services/Norman/Norman_Internal_LINK/MapServer/26',
         labelFields: ['NormanCountyTax.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Olmsted Co - Address Points',
         id: 'mn-olmsted-co-pts',
         url: 'https://gweb01.co.olmsted.mn.us/arcgis/rest/services/Parcel_Information/MapServer/0',
         labelFields: ['CONDADD1'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Olmsted Co - Parcels',
         id: 'mn-olmsted-co-parcels',
         url: 'https://gweb01.co.olmsted.mn.us/arcgis/rest/services/Parcel_Information/MapServer/3',
         labelFields: ['ADDNO','ADDNOSUF','STNAME','POSTDIR','STTYPE'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Otter Trail Co - Address Points',
         id: 'mn-otter-trail-co-pts',
         url: 'https://www.ottertailcounty.net/arcgis/rest/services/LandInformation/AddressRoadslgim/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Otter Trail Co - Parcels',
         id: 'mn-otter-trail-co-parcels',
         url: 'https://www.ottertailcounty.net/arcgis/rest/services/Land/MapServer/25',
         labelFields: ['PHYADDR1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pennington Co - Parcels',
         id: 'mn-pennington-co-parcels',
         url: 'http://gismap.co.norman.mn.us/arcgis/rest/services/Pennington/Pennington_Internal/MapServer/30',
         labelFields: ['PenningtonTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Polk Co - Address Points',
         id: 'mn-polk-co-pts',
         url: 'http://gis.co.polk.mn.us/arcgis/rest/services/PolkALL/MapServer/14',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Polk Co - Parcels',
         id: 'mn-polk-co-parcels',
         url: 'http://gis.co.polk.mn.us/arcgis/rest/services/PolkALL/MapServer/13',
         labelFields: ['PropAdd'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pope Co - Address Points',
         id: 'mn-pope-co-pts',
         url: 'https://gis.co.pope.mn.us/arcgis/rest/services/OpenData/OpenData/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Pope Co - Parcels',
         id: 'mn-pope-co-parcels',
         url: 'https://gis.co.pope.mn.us/arcgis/rest/services/OpenData/OpenData/MapServer/26',
         labelFields: ['PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ramsey Co - Address Points',
         id: 'mn-ramsey-co-pts',
         url: 'https://maps.co.ramsey.mn.us/arcgis/rest/services/MapRamsey/MapRamseyOperationalLayersAll/MapServer/32',
         labelFields: ['SiteAddress'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Ramsey Co - Parcels',
         id: 'mn-ramsey-co-parcels',
         url: 'https://maps.co.ramsey.mn.us/arcgis/rest/services/MapRamsey/MapRamseyOperationalLayersAll/MapServer/33',
         labelFields: ['SiteAddress'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Red Lake Co - Parcels',
         id: 'mn-red-lake-co-parcels',
         url: 'http://gismap.co.norman.mn.us/arcgis/rest/services/RedLake/RedLake_Public/MapServer/26',
         labelFields: ['RedLakeCountyTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Renville Co - Address Points',
         id: 'mn-renville-co-pts',
         url: 'https://gis.renvillecountymn.com/arcgis/rest/services/RENVILLEPUBLIC/MapServer/3',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Renville Co - Parcels',
         id: 'mn-renville-co-parcels',
         url: 'https://gis.renvillecountymn.com/arcgis/rest/services/RENVILLEPUBLIC/MapServer/34',
         labelFields: ['PHYSICAL_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Roseau Co - Parcels',
         id: 'mn-roseau-co-parcels',
         url: 'http://gis.co.roseau.mn.us/arcgis/rest/services/Roseau_Operational_DataJoin_Web_Merc/MapServer/0',
         labelFields: ['RoseauAS400.dbo.tblParcelJoin.PhysAddr'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sait Louis Co - Address Points',
         id: 'mn-saint-louis-co-pts',
         url: 'https://arcgiswapub.stlouiscountymn.gov/arcgis/rest/services/CountyLandExplorer/CLE_PLSSCadastralParcels/MapServer/30',
         labelFields: ['Address'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Sait Louis Co - Parcels',
         id: 'mn-saint-louis-co-parcels',
         url: 'https://arcgiswapub.stlouiscountymn.gov/arcgis/rest/services/CountyLandExplorer/CLE_Labels/MapServer/3',
         labelFields: ['PHYSADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Scott Co - Parcels',
         id: 'mn-scott-co-parcels',
         url: 'https://services.arcgis.com/DqIh9WAsIZcPlBEF/arcgis/rest/services/Parcels/FeatureServer/0',
         labelFields: ['PropertyAddress1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sibley Co - Address Points',
         id: 'mn-sibley-co-pts',
         url: 'https://services1.arcgis.com/ca9pZxSKQMiPIqAL/ArcGIS/rest/services/AddressPoints/FeatureServer/0',
         labelFields: ['HOUSENBR','STREETNAME','STREETTYPE'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Sibley Co - Parcels',
         id: 'mn-sibley-co-parcels',
         url: 'https://services1.arcgis.com/ca9pZxSKQMiPIqAL/ArcGIS/rest/services/ParcelsMap/FeatureServer/0',
         labelFields: ['PROPERTY_NUMBER','STREET_NUMBER','STREET_TYPE','STREET_SUFFIC','STREET_DIRECTION'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Stearns Co - Address Points',
         id: 'mn-stearns-co-pts',
         url: 'https://gis.co.stearns.mn.us/arcgis/rest/services/Public/AddressCRM/MapServer/0',
         labelFields: ['HouseNum','Pre_Dir','Street','Type','Post_Dir','Unit'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Stearns Co - Parcels',
         id: 'mn-stearns-co-parcels',
         url: 'https://gis.co.stearns.mn.us/arcgis/rest/services/Public/PARCELS/MapServer/0',
         labelFields: ['PROPADDR'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Steele Co - Address Points',
         id: 'mn-steele-co-pts',
         url: 'https://www.co.steele.mn.us/arcgis/rest/services/Steele_LINK_public/MapServer/5',
         labelFields: ['ADPH','ADPSNM','ADPSDR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Steele Co - Parcels',
         id: 'mn-steele-co-parcels',
         url: 'https://www.co.steele.mn.us/arcgis/rest/services/Steele_LINK_public/MapServer/0',
         labelFields: ['SteeleMNTaxData.dbo.tblParcelJoin.QRYADDRESS'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wadena Co - Address Points',
         id: 'mn-wadena-co-pts',
         url: 'http://gis.co.wadena.mn.us/arcgis/rest/services/WADENAPUBLIC/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Wadena Co - Parcels',
         id: 'mn-wadena-co-parcels',
         url: 'http://gis.co.wadena.mn.us/arcgis/rest/services/WADENAPUBLIC/MapServer/0',
         labelFields: ['GISData.dbo.tblParcelJoin.PHYSICAL_ADDRESS'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Waseca Co - Address Points',
         id: 'mn-waseca-co-pts',
         url: 'http://gis.co.waseca.mn.us/arcgis/rest/services/PublicLayers/MapServer/2',
         labelFields: ['ANUMBER','ANUMBERSUF','ST_NAME','ST_POS_TYP','ST_POS_DIR'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Waseca Co - Parcels',
         id: 'mn-waseca-co-parcels',
         url: 'http://gis.co.waseca.mn.us/arcgis/rest/services/PublicLayers/MapServer/6',
         labelFields: ['WasecaAS400.dbo.tblRCFlatTable.PAADRLN1'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Parcels',
         id: 'mn-washington-co-parcels',
         url: 'http://maps.co.washington.mn.us/arcgis/rest/services/GISViewer/Cadastral/MapServer/19',
         labelFields: ['SITUS_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wilkin Co - Address Points',
         id: 'mn-wilkin-co-pts',
         url: 'http://gisweb.co.wilkin.mn.us/arcgis/rest/services/OpenData/OpenData/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MN',
         style: DEFAULT_PT_STYLE},

        {name: 'Wilkin Co - Parcels',
         id: 'mn-wilkin-co-parcels',
         url: 'http://gisweb.co.wilkin.mn.us/arcgis/rest/services/Basemaps/LandRecords/MapServer/8',
         labelFields: ['PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Yellow Medicine Co - Parcels',
         id: 'mn-yellow-medicine-co-parcels',
         url: 'http://gis.co.ym.mn.gov/arcgis/rest/services/YellowMedicine/YellowMedicine_DataLayers/MapServer/40',
         labelFields: ['YellowMedicineTaxData.dbo.tblParcelJoin.PROPERTY_ADDRESS'],
         state: 'MN',
         style: DEFAULT_PARCEL_STYLE},

        // Missouri
        // ************************************

        {name: 'Adair Co - Parcels',
         id: 'mo-adair-co-parcels',
         url: 'https://adairgis.integritygis.com/Geocortex/Essentials/REST/sites/Adair_County_MO/map/mapservices/3/rest/services/x/MapServer/4',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Atchison Co - Parcels',
         id: 'mo-atchison-co-parcels',
         url: 'https://atchisongis.integritygis.com/Geocortex/Essentials/REST/sites/Atchison_County_MO/map/mapservices/5/rest/services/x/MapServer/14',
         labelFields: ['REALDATA_ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Audrain Co - Parcels',
         id: 'mo-audrian-co-parcels',
         url: 'https://audraingis.integritygis.com/Geocortex/Essentials/REST/sites/Audrain_County_MO/map/mapservices/4/rest/services/x/MapServer/12',
         labelFields: ['SITE_ADD'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bates Co - Address Points',
         id: 'mo-bates-co-points',
         url: 'http://batesgis.integritygis.com/Geocortex/Essentials/REST/sites/Bates_County_MO/map/mapservices/0/rest/services/x/MapServer/3',
         labelFields: ['FULLADDR'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Bates Co - Parcels',
         id: 'mo-bates-co-parcels',
         url: 'http://batesgis.integritygis.com/Geocortex/Essentials/REST/sites/Bates_County_MO/map/mapservices/0/rest/services/x/MapServer/9',
         labelFields: ['REALDATA_SITUS_LOCATION'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Benton Co - Address Points',
         id: 'mo-benton-co-points',
         url: 'https://bentongis.integritygis.com/Geocortex/Essentials/REST/sites/Benton_County_MO/map/mapservices/1/rest/services/x/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Benton Co - Parcels',
         id: 'mo-benton-co-parcels',
         url: 'https://bentongis.integritygis.com/Geocortex/Essentials/REST/sites/Benton_County_MO/map/mapservices/1/rest/services/x/MapServer/13',
         labelFields: ['sit_stnm'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boone Co - Columbia - Address Points',
         id: 'mo-boone-co-points',
         url: 'https://gis.gocolumbiamo.com/arcgis/rest/services/View_Services/ADDRESS_LABELS/MapServer/0',
         labelFields: ['HOUSENO','PRE_DIR','STREET','SUFFIX','APT'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Boone Co - Parcels',
         id: 'mo-boone-co-parcels',
         url: 'https://gis.gocolumbiamo.com/arcgis/rest/services/Energov/Energov_View/MapServer/0',
         labelFields: ['ADDNUM','STDIR','STNAME'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Buchanan Co - Address Points',
         id: 'mo-buchanan-co-points',
         url: 'https://buchanangis.integritygis.com/Geocortex/Essentials/REST/sites/Buchanan_Co_MO/map/mapservices/0/rest/services/x/MapServer/16',
         labelFields: ['ADDRNUM','FULLNAME'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Buchanan Co - Parcels',
         id: 'mo-buchanan-co-parcels',
         url: 'https://buchanangis.integritygis.com/Geocortex/Essentials/REST/sites/Buchanan_Co_MO/map/mapservices/0/rest/services/x/MapServer/6',
         labelFields: ['SITUSADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Camden Co - Address Points',
         id: 'mo-camden-co-points',
         url: 'https://camdengis.integritygis.com/Geocortex/Essentials/REST/sites/Camden_County_MO_Desktop/map/mapservices/0/rest/services/x/MapServer/5',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Camden Co - Parcels (NO DATA)',
         id: 'mo-camden-co-parcels',
         url: 'https://camdengis.integritygis.com/Geocortex/Essentials/REST/sites/Camden_County_MO_Desktop/map/mapservices/0/rest/services/x/MapServer/8',
         labelFields: [''],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Christian Co - 911 Address Points',
         id: 'mo-christian-co-points',
         url: 'http://gisserver.christiancountymo.gov/arcgis/rest/services/DataViewer_4Assessor/MapServer/0',
         labelFields: ['FULL_ADDRE'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Christian Co - Parcels',
         id: 'mo-christian-co-parcels',
         url: 'http://gisserver.christiancountymo.gov/arcgis/rest/services/DataViewer_4Assessor/MapServer/72',
         labelFields: ['sit_stnm'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cole Co - Address Points',
         id: 'mo-cole-co-points',
         url: 'https://www.midmogis.org/arcgis/rest/services/VectorData_HTML5/MapServer/35',
         labelFields: ['Number','Direction','StreetName','Suffix'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Cole Co - Parcels',
         id: 'mo-cole-co-parcels',
         url: 'https://www.midmogis.org/arcgis/rest/services/VectorData_HTML5/MapServer/101',
         labelFields: ['Location'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cooper Co - Parcels',
         id: 'mo-cooper-co-parcels',
         url: 'https://coopergis.integritygis.com/Geocortex/Essentials/REST/sites/Cooper_County_MO/map/mapservices/2/rest/services/x/MapServer/17',
         labelFields: ['REALDATA_ADDRESS_2'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Parcels',
         id: 'mo-douglas-co-parcels',
         url: 'https://douglasgis.integritygis.com/Geocortex/Essentials/REST/sites/Douglas_County_MO_Public/map/mapservices/2/rest/services/x/MapServer/16',
         labelFields: ['sit_stnm'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dunklin Co - Parcels NO DATA',
         id: 'mo-dunklin-co-parcels',
         url: 'http://emapsplus.com/arcgis/rest/services/Missouri/DunklinEmaps/MapServer/0',
         labelFields: [''],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Henry Co - Parcels',
         id: 'mo-henry-co-parcels',
         url: 'http://arcserve1.hornershifrin.com/Geocortex/Essentials/REST/sites/HenryCountyMoOverview/map/mapservices/17/rest/services/x/MapServer/1',
         labelFields: ['sit_stnm'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jackson Co - Address Points',
         id: 'mo-jackson-co-points',
         url: 'http://arcgisweb.jacksongov.org/arcgis/rest/services/Cadastral/ParcelsAndAddresses/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Jackson Co - Parcels',
         id: 'mo-jackson-co-parcels',
         url: 'http://arcgisweb.jacksongov.org/arcgis/rest/services/Cadastral/ParcelsAndAddresses/MapServer/4',
         labelFields: ['SitusAddress'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'mo-jefferson-co-parcels',
         url: 'http://www.semogis.com/arcgis/rest/services/JeffersonLayers/MapServer/7',
         labelFields: ['Site_Address'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kansas City - City Address Points',
         id: 'mo-kansascitymo-city-points',
         url: 'http://maps.kcmo.org/kcgis/rest/services/external/EnergovData/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Kansas City - City Parcels',
         id: 'mo-kansascitymo-city-parcels',
         url: 'http://maps.kcmo.org/kcgis/rest/services/external/Platting/MapServer/40',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lafayette Co - Address Points',
         id: 'mo-lafayette-co-points',
         url: 'https://lafayettegis.integritygis.com/Geocortex/Essentials/REST/sites/Lafayette_County_MO/map/mapservices/2/rest/services/x/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Lafayette Co - Parcels',
         id: 'mo-lafayette-co-parcels',
         url: 'https://lafayettegis.integritygis.com/Geocortex/Essentials/REST/sites/Lafayette_County_MO/map/mapservices/2/rest/services/x/MapServer/7',
         labelFields: ['ADDRESS_911'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lawrence Co - Parcels',
         id: 'mo-lawrence-co-parcels',
         url: 'https://lawrencegis.integritygis.com/Geocortex/Essentials/REST/sites/Lawrence_County_MO/map/mapservices/0/rest/services/x/MapServer/6',
         labelFields: ['sit_stnm'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'mo-lincoln-co-points',
         url: 'http://lincolngis.integritygis.com/Geocortex/Essentials/REST/sites/Lincoln_County_MO/map/mapservices/2/rest/services/x/MapServer/4',
         labelFields: ['FULL_ADDRE'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels',
         id: 'mo-lincoln-co-parcels',
         url: 'http://lincolngis.integritygis.com/Geocortex/Essentials/REST/sites/Lincoln_County_MO/map/mapservices/2/rest/services/x/MapServer/5',
         labelFields: ['SITUS_ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Miller Co - Parcels',
         id: 'mo-miller-co-parcels',
         url: 'https://millergis.integritygis.com/Geocortex/Essentials/REST/sites/Miller_County_MO/map/mapservices/0/rest/services/x/MapServer/9',
         labelFields: ['SITUS_ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Morgan Co - Parcels NO DATA',
         id: 'mo-morgan-co-parcels',
         url: 'https://morgangis.integritygis.com/Geocortex/Essentials/REST/sites/Morgan_County_MO/map/mapservices/1/rest/services/x/MapServer/4',
         labelFields: [''],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Phelps Co - Parcels',
         id: 'mo-phelps-co-parcels',
         url: 'https://phelpsgis.integritygis.com/Geocortex/Essentials/REST/sites/Phelps_County_MO_Public/map/mapservices/7/rest/services/x/MapServer/27',
         labelFields: ['PropertyAddress'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        // *** NOTE: this URL doesn't work.  Tried 'http://webgis.polkcountymo.org/ArcGIS/rest/services' and 'http://webgis.polkcountymo.org/WCF/ArcGIS/rest/services'.  No luck.
        // {name: 'Polk Co - Parcels',
        //  id: 'mo-polk-co-parcels',
        //  url: 'http://webgis.polkcountymo.org/WCF/proxy.aspx?session=x6Ffu3cwyRDibsfTSBjSlZK67KPLay+xqB_OCHtO4l_74K0oL6QzH610E0yevliOGQWfw6qJJSqgakmpAXATQQ==&url=http://192.168.0.10/ArcGIS/rest/services/Polk_Assessor_Data/MapServer/9',
        //  labelFields: ['sit_stnm'],
        //  state: 'MO',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'Ralls Co - Parcels',
         id: 'mo-ralls-co-parcels',
         url: 'http://rallsgis.integritygis.com/Geocortex/Essentials/REST/sites/Ralls_County_MO/map/mapservices/4/rest/services/x/MapServer/7',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ray Co - Address Points',
         id: 'mo-ray-co-points',
         url: 'http://raygis.integritygis.com/Geocortex/Essentials/REST/sites/Ray_County_MO/map/mapservices/10/rest/services/x/MapServer/1',
         labelFields: ['NewAddress'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Ray Co - Parcels',
         id: 'mo-ray-co-parcels',
         url: 'http://raygis.integritygis.com/Geocortex/Essentials/REST/sites/Ray_County_MO/map/mapservices/10/rest/services/x/MapServer/21',
         labelFields: ['ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Charles Address Points',
         id: 'mo-stcharles-co-points',
         url: 'http://map.sccmo.org/proxy/proxy.ashx?http://10.10.143.115/scc_gis/rest/services/appservices/addressing/mapserver/0',
         labelFields: ['STR_ADD'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Charles Co - Parcels',
         id: 'mo-stcharles-co-parcels',
         url: 'http://map.sccmo.org/proxy/proxy.ashx?http://10.10.143.115/scc_gis/rest/services/appservices/taxinformation/MapServer/4',
         labelFields: ['SiteAddress'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Louis Co - Address Points',
         id: 'mo-stlouis-co-points',
         url: 'http://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/MapServer/0',
         labelFields: ['PROP_ADD'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Louis Co - Parcels',
         id: 'mo-stlouis-co-parcels',
         url: 'http://maps.stlouisco.com/arcgis/rest/services/Maps/Parcels/MapServer/0',
         labelFields: ['PROP_ADD'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Vernon Co - Parcels NO DATA',
         id: 'mo-vernon-co-parcels',
         url: 'http://vernongis.integritygis.com/Geocortex/Essentials/REST/sites/Vernon_County_MO/map/mapservices/1/rest/services/x/MapServer/6',
         labelFields: ['PARCELPIN'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},


        // Montana
        // ************************************

        {name: 'State - Parcels ',
         id: 'mt-state-parcels1',
         url: 'http://gisservicemt.gov/arcgis/rest/services/DLI/DLI_data/MapServer/4',
         labelFields: ['AddressLine1'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        //        {name: 'State - Parcels 2',
        //         id: 'mt-state-parcels2',
        //         url: 'http://gisservicemt.gov/arcgis/rest/services/GOV/OperationalLayers_MtSiteSelector/MapServer/8',
        //         labelFields: ['ADDRESSLINE1'],
        //         state: 'MT',
        //         style: DEFAULT_PARCEL_STYLE},

        {name: 'Flathead - Address Points',
         id: 'mt-flathead-co-pts',
         url: 'http://maps.flathead.mt.gov/arcgis/rest/services/IMS/map/MapServer/1',
         labelFields: ['Number','PRE','STREET','TYPE','SUF'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Lewis and Clark Co - Address Points',
         id: 'mt-lewisandclark-co-pts',
         url: 'https://helenamontanamaps.org/arcgisadp/rest/services/Addresses/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Lewis and Clark Co - Parcels',
         id: 'mt-lewisandclark-co-parcels',
         url: 'https://helenamontanamaps.org/arcgisadp/rest/services/Parcels/MapServer/0',
         labelFields: ['SiteAddr'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Missoula Co - Address Points',
         id: 'mt-missoula-co-pts',
         url: 'https://gis.missoulacounty.us/arcgis/rest/services/Base/Base/MapServer/10',
         labelFields: ['FULLADDRESS'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Missoula Co - Parcels (NO DATA)',
         id: 'mt-missoula-co-parcels',
         url: 'https://gis.missoulacounty.us/arcgis/rest/services/Base/Base/MapServer/36',
         labelFields: [''],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Park Co - Address Points',
         id: 'mt-park-co-pts',
         url: 'http://gis.parkcounty.org:6080/arcgis/rest/services/Maps/Address/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Park Co - Parcels 2013',
         id: 'mt-park-co-parcels',
         url: 'http://gis.parkcounty.org:6080/arcgis/rest/services/Maps/Parcel_Map_Web/MapServer/3',
         labelFields: ['AddressLin'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sanders Co - Address Points',
         id: 'mt-sanders-co-pts',
         url: 'https://services.arcgis.com/lyaiBovac00Ony4j/ArcGIS/rest/services/sp_mstr_public/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Sanders Co - Parcels',
         id: 'mt-sanders-co-parcels',
         url: 'https://services.arcgis.com/lyaiBovac00Ony4j/arcgis/rest/services/SNDRS_PARCELS/FeatureServer/0',
         labelFields: ['AddressLin'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Teton Co - Address Points',
         id: 'mt-teton-co-pts',
         url: 'https://services2.arcgis.com/CSJxiUjasbdZXxL3/ArcGIS/rest/services/TetonStructuresComplete/FeatureServer/0',
         labelFields: ['FULLADDRES'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Teton Co - Parcels',
         id: 'mt-teton-co-parcels',
         url: 'https://services2.arcgis.com/CSJxiUjasbdZXxL3/ArcGIS/rest/services/MyMapService_parcels_Teton/FeatureServer/0',
         labelFields: ['AddressLine1'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Yellowstone Co - Address Points',
         id: 'mt-yellowstone-co-pts',
         url: 'http://maps.co.yellowstone.mt.gov/arcgis/rest/services/mainnew/MapServer/15',
         labelFields: ['FULLADDR'],
         state: 'MT',
         style: DEFAULT_PT_STYLE},

        {name: 'Yellowstone Co - Parcels',
         id: 'mt-yellowstone-co-parcels',
         url: 'http://maps.co.yellowstone.mt.gov/arcgis/rest/services/yellowstonenew/MapServer/8',
         labelFields: ['ADDR'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Great Falls City - Parcels  SLOW',
         id: 'mt-greatfalls-city-parcels',
         url: 'https://gisservicemt.gov/arcgis/rest/services/MSDI_Framework/ParcelsWebMerc/MapServer/0',
         labelFields: ['AddressLine1'],
         state: 'MT',
         style: DEFAULT_PARCEL_STYLE},

        // Nebraska
        // ************************************

        {name: 'Adams Co - Address Points',
         id: 'ne-adams-co-points',
         url: 'https://gis.adamscounty.org/arcgis/rest/services/land_use/MapServer/21',
         labelFields: ['LONGADD'],
         state: 'NE',
         style: DEFAULT_PT_STYLE},

        {name: 'Adams Co - Parcels',
         id: 'ne-adams-co-parcels',
         url: 'https://gis.adamscounty.org/arcgis/rest/services/land_use/MapServer/4',
         labelFields: ['PropertyAddress'],
         state: 'NE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Parcels',
         id: 'ne-douglas-co-parcels',
         url: 'https://gis.dogis.org/arcgis/rest/services/Basemaps/Gray_Basemap/MapServer/4',
         labelFields: ['PROPERTY_A'],
         state: 'NE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lancaster Co - Parcels',
         id: 'ne-lancaster-co-parcels',
         url: 'http://ags3.lincoln.ne.gov/arcgis/rest/services/Assessor/Pub_Parcels/FeatureServer/0',
         labelFields: ['SIT_ST_NUM','SIT_ST_DIR','SIT_ST_NAME','SIT_ST_TYPE','SIT_APT_NUM'],
         state: 'NE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln - City Address Points',
         id: 'ne-lincoln-city-points',
         url: 'http://ags3.lincoln.ne.gov/arcgis/rest/services/Assessor/Parcel_Info/MapServer/3',
         labelFields: ['HOUSENO'],
         state: 'NE',
         style: DEFAULT_PT_STYLE},

        {name: 'Sarpy Co - Parcels',
         id: 'ne-sarpy-co-parcels',
         url: 'https://geodata.sarpy.com/arcgis/rest/services/Cadastral/DataTables/MapServer/0',
         labelFields: ['SITEADDRESS'],
         state: 'NE',
         style: DEFAULT_PARCEL_STYLE},


        // Nevada
        // ************************************

        {name: 'Washoe Co - Address Points',
         id: 'nv-washoe-co-points',
         url: 'http://wcgisweb.washoecounty.us/arcgis/rest/services/BaseLayersQueryWebMercator/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'NV',
         style: DEFAULT_PT_STYLE},

        {name: 'Washoe Co - Parcels',
         id: 'nv-washoe-co-parcels',
         url: 'http://wcgisweb.washoecounty.us/arcgis/rest/services/BaseLayersQueryWebMercator/MapServer/2',
         labelFields: ['STREETNUM','STREETDIR','STREET'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         state: 'NV',
         style: DEFAULT_PARCEL_STYLE},


        // North Carolina
        // ************************************

        {name: 'Brunswick Co - Address Points',
         id: 'nc-brunswick-co-points',
         url: 'https://geo.brunswickcountync.gov/arcgis/rest/services/Mapping/DataViewer/MapServer/0',
         labelFields: ['ST_ADDR'],
         state: 'NC',
         style: DEFAULT_PT_STYLE},


        // North Dakota
        // ************************************

        {name: 'Bismarck - City Parcels',
         id: 'nd-bismarck-city-parcels',
         url: 'http://gis.burleighco.com/proxy.ashx?https://c08hwygis.co.burleigh.nd.us/server/rest/services/Parcel_Layers/MapServer/4',
         labelFields: ['Property_Address'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Burleigh Co - Address Points',
         id: 'nd-burleigh-co-pts',
         url: 'http://gis.burleighco.com/proxy.ashx?https://c08hwygis.co.burleigh.nd.us/server/rest/services/Address_Points/MapServer/0',
         labelFields: ['STREET_ADD'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'Burleigh Co - Parcels',
         id: 'nd-burleigh-co-parcels',
         url: 'http://gis.burleighco.com/proxy.ashx?https://c08hwygis.co.burleigh.nd.us/server/rest/services/Parcel_Layers/MapServer/0',
         labelFields: ['Property_Address'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cass Co - (no Fargo) Addr Points',
         id: 'nd-cass-co-pts',
         url: 'http://gisweb.casscountynd.gov/arcgis/rest/services/PublicDynamic/MapServer/22',
         labelFields: ['PROPERTY_ADDR'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'Cass Co & Fargo City Parcels',
         id: 'nd-cass-co-parcels',
         url: 'http://gisweb.casscountynd.gov/arcgis/rest/services/PublicDynamic/MapServer/46',
         labelFields: ['PropertyAddress'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fargo - City (Cass) Addr Points',
         id: 'nd-fargo-city-pts',
         url: 'http://gisweb.casscountynd.gov/arcgis/rest/services/PublicDynamic/MapServer/21',
         labelFields: ['ADDRESS'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        // Divice County GIS does not give any more data that what is available on layer. no parcel data at all

        {name: 'Divide Co - Parcels NO DATA',
         id: 'nd-divide-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/DivideNDFeatures/FeatureServer/5',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dunn Co - Parcels NO DATA',
         id: 'nd-dunn-co-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/DunnTaxDirector/MapServer/3',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emmons Co - Parcels NO DATA',
         id: 'nd-emmons-co-parcels',
         url: 'http://services3.arcgis.com/zDNWy26tIMyYaGcC/arcgis/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Golden Valley Co - Address Points',
         id: 'nd-golden Valley-co-pts',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/Goldenvalley/MapServer/0',
         labelFields: ['Address'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'Golden Valley Co - Parcels NO DATA',
         id: 'nd-golden Valley-co-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/Goldenvalley/MapServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // this layer from the City GIS site, but looks like it covers points in County too
        {name: 'Grand Forks co & City - Address Points',
         id: 'nd-grand-forks-co-pts',
         url: 'https://www.gfgis.com/arcgis/rest/services/Public_Layers/Address2/MapServer/0',
         labelFields: ['housenum','st_prefix','st_name','st_type','st_suffix'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        // This layer from City GIS site. only covers Parcel in city limits
        {name: 'Grand Forks - City Parcels',
         id: 'nd-grand-forks-city-parcels',
         url: 'https://www.gfgis.com/arcgis/rest/services/Public_Layers/ParcelInfo/MapServer/0',
         labelFields: ['cadr'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'McHenry Co - Address Points',
         id: 'nd-mchenry-co-pts',
         url: 'http://services6.arcgis.com/zbSH183Elt4hJ5Hl/ArcGIS/rest/services/Emergency_Responders/FeatureServer/0',
         labelFields: ['Address_911'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'McHenry Co - Parcels NO DATA',
         id: 'nd-mchenry-co-parcels',
         url: 'http://services6.arcgis.com/zbSH183Elt4hJ5Hl/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        //{name: 'McHenry Co - Parcels NO DATA',
        // id: 'nd-mchenry-co-parcels2',
        // url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/McHenryNDFeatures/FeatureServer/4',
        // labelFields: [''],
        // state: 'ND',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'McKenzie Co - Parcels NO DATA',
         id: 'nd-mckenzie-co-parcels',
         url: 'https://gis2.gisworkshop.com/arcgis/rest/services/McKenzieTaxDirector/MapServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'McLean Co - Parcels NO DATA',
         id: 'nd-mclean-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/McleanNDFeatures/FeatureServer/3',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Morton Co - Address Points',
         id: 'nd-morton-co-pts',
         url: 'https://services2.arcgis.com/KK9EVAUoqJyQSD0q/ArcGIS/rest/services/AddressNoNames/FeatureServer/0',
         labelFields: ['DLVRY_ADD'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'Morton Co - Parcels',
         id: 'nd-morton-co-parcels',
         url: 'https://services2.arcgis.com/KK9EVAUoqJyQSD0q/ArcGIS/rest/services/Parcels_1/FeatureServer/0',
         labelFields: ['HOUSE','APSNAM','APDRCT'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Mountrail Co - Parcels NO DATA',
         id: 'nd-mountrail-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/MountrailNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rolette Co - Address Points',
         id: 'nd-rolette-co-pts',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/RoletteNDFeatures/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Rolette Co - Parcels NO DATA',
         id: 'nd-rolette-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/RoletteNDFeatures/FeatureServer/3',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Sioux Co - Parcels NO DATA',
         id: 'nd-sioux-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/SiouxNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Steele Co - Parcels NO DATA',
         id: 'nd-steele-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/SteeleNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Traill Co - Parcels NO DATA',
         id: 'nd-traill-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/TraillNDFeatures/FeatureServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Williams Co - Address Points',
         id: 'nd-williams-co-pts',
         url: 'https://services1.arcgis.com/D85sDZoJyameepNh/ArcGIS/rest/services/Master_Addresses/FeatureServer/0',
         labelFields: ['DLVRY_ADD'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        {name: 'Williams Co - Parcels',
         id: 'nd-williams-co-parcels',
         url: 'https://services1.arcgis.com/D85sDZoJyameepNh/ArcGIS/rest/services/ParcelsWeb/FeatureServer/0',
         labelFields: ['ParcelStreet'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},


        // Ohio
        // ************************************

        // NOTE: Query returns results, but not showing anything in arcgis maps.  Maybe no geometry?
        // {name: 'Butler Co - Address Points',
        //  id: 'oh-butler-co-points',
        //  url: 'https://maps.butlercountyauditor.org/arcgis/rest/services/Fiber_Service/MapServer/0',
        //  labelFields: ['BLDG_ADDRE'],
        //  state: 'OH',
        //  style: DEFAULT_PT_STYLE},

        {name: 'Butler Co - Parcels',
         id: 'oh-butler-co-parcels',
         url: 'https://maps.butlercountyauditor.org/arcgis/rest/services/basemap/MapServer/1',
         labelFields: ['LOCATION'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clermont Co - Address Points',
         id: 'oh-clermont-co-points',
         url: 'http://maps.clermontauditor.org/arcgis/rest/services/Parcels/AddressPointsLabeled/MapServer/1',
         labelFields: ['LSN'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Clermont Co - Parcels',
         id: 'oh-clermont-co-parcels',
         url: 'http://maps.clermontauditor.org/arcgis/rest/services/Parcels/ParcelLabelsWithOwner/MapServer/18',
         labelFields: ['ADRNO','ADRDIR','ADRSTR','ADRSUF'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'oh-franklin-co-parcels',
         url: 'http://maps.franklincountyauditor.com/fcaags/rest/services/Services/ParcelFeatures/MapServer/1',
         labelFields: ['SITEADDRESS'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hamilton Co - Parcels',
         id: 'oh-hamilton-co-parcels',
         url: 'http://cagisonline.hamilton-co.org/arcgis/rest/services/Hamilton/HCE_Parcels_With_Auditor_Data/MapServer/0',
         labelFields: ['CAGIS.AUDREAL_VW.ADDRNO','CAGIS.AUDREAL_VW.ADDRST','CAGIS.AUDREAL_VW.ADDRSF'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Address Points',
         id: 'oh-montgomery-co-points',
         url: 'http://www.mcegisohio.org/arcgis/rest/services/PUBLIC/AUDGIS_MVRP/MapServer/2',
         labelFields: ['ADDR_NUM','STR_NAME','STR_TYPE','SUF_DIR'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Warren Co - Parcels',
         id: 'oh-warren-co-parcels',
         url: 'http://webmap1.co.warren.oh.us/ArcGIS/rest/services/Dynamic/ParcelLabelsAddr/MapServer/0',
         labelFields: ['Address_Line_1'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},


        // Pennsylvania
        // **********************************

        {name: 'Adams Co - Address Points',
         id: 'pa-adams-co-pts',
         url: 'https://mapping.adamscounty.us/arcgis/rest/services/Maps/Deeds2/MapServer/10',
         labelFields: ['ST_NUM','PRE_DIR','ST_NAME','ST_TYPE','POST_DIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Adams Co - Parcels NO DATA',
         id: 'pa-adams-co-parcels',
         url: 'https://mapping.adamscounty.us/arcgis/rest/services/Maps/cama_parcel/MapServer/1',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Allegheny Co - Address Points',
         id: 'pa-allegheny-co-pts',
         url: 'http://geodata.alleghenycounty.us/arcgis/rest/services/EGIS/AC_AddressPoints/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Allegheny Co - Parcels',
         id: 'pa-allegheny-co-parcels',
         url: 'http://geodata.alleghenycounty.us/arcgis/rest/services/EGIS/AC_Parcels3/MapServer/0',
         labelFields: ['ALCO_DW.dbo.tbl_IAS4_TEMP_WEB.PROPERTYHOUSENUM','ALCO_DW.dbo.tbl_IAS4_TEMP_WEB.PROPERTYFRACTION','ALCO_DW.dbo.tbl_IAS4_TEMP_WEB.PROPERTYDIRECTION','ALCO_DW.dbo.tbl_IAS4_TEMP_WEB.PROPERTYSTREET','ALCO_DW.dbo.tbl_IAS4_TEMP_WEB.PROPERTYSUFFIX'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Beaver Co - Address Points',
         id: 'pa-beaver-co-pts',
         url: 'http://broadbandgis.bakerprojects.com/arcgis/rest/services/BeaverCounty/AddressPoints/MapServer/0',
         labelFields: ['SAN','PRD','STN','STS','POD'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Beaver Co - Parcels',
         id: 'pa-beaver-co-parcels',
         url: 'http://broadbandgis.bakerprojects.com/arcgis/rest/services/BeaverCounty/ParcelSearch/MapServer/0',
         labelFields: ['beaver_county.BEAVERCOUNTY.Current_Owner_GIS_Portal.Location_Number','beaver_county.BEAVERCOUNTY.Current_Owner_GIS_Portal.Location_Street'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Berks Co - Address Points',
         id: 'pa-berks-co-pts',
         url: 'https://gis.co.berks.pa.us/arcgis/rest/services/Pictometry/PictometryWFS/MapServer/0',
         labelFields: ['FULLSTREETADDRESS'],
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Berks Co - Parcels',
         id: 'pa-berks-co-parcels',
         url: 'https://gis.co.berks.pa.us/arcgis/rest/services/Assess/AssessBase/MapServer/58',
         labelFields: ['FULLSITEADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bucks Co - Parcels',
         id: 'pa-bucks-co-parcels',
         url: 'https://utility.arcgis.com/usrsvcs/servers/7099869aec2049e780795bcc6bfd4bed/rest/services/Java_Viewer/Parcels/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Butler Co - Parcels',
         id: 'pa-butler-co-parcels',
         url: 'http://maps.co.butler.pa.us/arcgis/rest/services/ButlerCounty/ButlerMapService/MapServer/1',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cambria Co - Parcels',
         id: 'pa-cambria-co-parcels',
         url: 'http://gis2.cambriacountypa.gov/georesources/rest/services/Resources/SurfaceParcels/MapServer/28',
         labelFields: ['SITUS_DESC_1'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carbon Co - Parcels',
         id: 'pa-carbon-co-parcels',
         url: 'https://gis.carboncounty.com:6443/arcgis/rest/services/Carbon_County_Parcel_Viewer/MapServer/19',
         labelFields: ['Location'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Centre Co - Address Points',
         id: 'pa-centre-co-pts',
         url: 'https://gissites2.centrecountypa.gov/arcgis/rest/services/CentreGISV911/MapServer/7',
         labelFields: ['NUMBER','PRE_DIR','STR_NAME','STR_TYPE','POST_DIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Centre Co - Parcels',
         id: 'pa-centre-co-parcels',
         url: 'https://gissites2.centrecountypa.gov/arcgis/rest/services/CentreGISV911/MapServer/10',
         labelFields: ['Location'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chester Co - Address Points SLOW',
         id: 'pa-chester-co-pts',
         url: 'https://gisprodops.chesco.org/arcgis/rest/services/EnerGov_Services/EnerGov_Data_D_CL2/MapServer/0',
         labelFields: ['SITUS_ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Chester Co - Parcels',
         id: 'pa-chester-co-parcels',
         url: 'https://gisprodops.chesco.org/arcgis/rest/services/EnerGov_Services/EnerGov_Data_D_CL2/MapServer/2',
         labelFields: ['SITUS_ADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clearfield Co - Address Points',
         id: 'pa-clearfield-co-pts',
         url: 'http://gis.clearfieldco.org/arcgis/rest/services/Web_Map/MapServer/1',
         labelFields: ['SiteAddress'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Clearfield Co - Parcels',
         id: 'pa-clearfield-co-parcels',
         url: 'http://gis.clearfieldco.org/arcgis/rest/services/Web_Map/MapServer/10',
         labelFields: ['situs'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clinton Co - Parcels',
         id: 'pa-clinton-co-parcels',
         url: 'http://maps.clintoncountypa.com/arcgis/rest/services/Testing/PARCELS417/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Columbia Co - Address Points',
         id: 'pa-columbia-co-pts',
         url: 'http://gis.columbiapa.org/ProxyJS/proxy.ashx?http://gismaps.columbiapa.org/arcgis/rest/services/Overlays/ColMonNorAddressing/MapServer/2',
         labelFields: ['FULLADDR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Columbia Co - Parcels',
         id: 'pa-columbia-co-parcels',
         url: 'http://gis.columbiapa.org/ProxyJS/proxy.ashx?http://gismaps.columbiapa.org/arcgis/rest/services/Overlays/Columbia_Parcels/MapServer/1',
         labelFields: ['PropertyLocation'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Crawford Co - Address Points',
         id: 'pa-crawford-co-pts',
         url: 'http://gis.crawfordcountypa.net:6080/arcgis/rest/services/AddressParcelSearch_Advanced/MapServer/2',
         labelFields: ['HSENUMBER','PREFIXDIR','STREETNAME','STREETSUF','POSTDIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Crawford Co - Parcels NO DATA',
         id: 'pa-crawford-co-parcels',
         url: 'http://gis.crawfordcountypa.net:6080/arcgis/rest/services/CrawfordCounty/MapServer/3',
         labelFields: ['SHAPE'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cumberland Co - Address Points',
         id: 'pa-cumberland-co-pts',
         url: 'https://gis.ccpa.net/arcgiswebadaptor/rest/services/SCTF/AddressPoints/MapServer/0',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Cumberland Co - Parcels SLOW',
         id: 'pa-cumberland-co-parcels',
         url: 'https://gis.ccpa.net/arcgiswebadaptor/rest/services/Parcels/MapServer/42',
         labelFields: ['SITUS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dauphin Co - Parcels',
         id: 'pa-dauphin-co-parcels',
         url: 'https://gis.dauphincounty.org/arcgis/rest/services/Parcels/MapServer/1',
         labelFields: ['house_number','prefix_directional','street_name','street_suffix'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Forest Co - Parcels',
         id: 'pa-forest-co-parcels',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Pennsylvania/ForestCountyPa/MapServer/3',
         labelFields: ['situs'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Address Points',
         id: 'pa-franklin-co-pts',
         url: 'https://gis.franklincountypa.gov/esriarcgiswebadapter/rest/services/FranklinHostedGIS/FC_AddressPoints/MapServer/0',
         labelFields: ['ADDRNUM','PREDIRECTIONAL','STREETNAME','STREETTYPE','POSTDIRECTIONAL'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'pa-franklin-co-parcels',
         url: 'https://gis.franklincountypa.gov/esriarcgiswebadapter/rest/services/FranklinHostedGIS/FC_ParcelsCAMA/MapServer/0',
         labelFields: ['SITUSAddress1'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fulton Co - Address Points',
         id: 'pa-fulton-co-pts',
         url: 'http://gis.co.fulton.pa.us/arcgis/rest/services/WebToolMap/MapServer/5',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Fulton Co - Parcels NO DATA',
         id: 'pa-fulton-co-parcels',
         url: 'http://gis.co.fulton.pa.us/arcgis/rest/services/WebToolMap/MapServer/6',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Huntingdon Co - Address Points',
         id: 'pa-huntingdon-co-pts',
         url: 'http://mapping.huntingdoncounty.net/arcgisweb/rest/services/Address_Collector/MapServer/1',
         labelFields: ['HSENUMBER','PREFIXDIR','STREETNAME','STREETSUF','POSTDIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Huntingdon Co - Parcels',
         id: 'pa-huntingdon-co-parcels',
         url: 'http://mapping.huntingdoncounty.net/arcgisweb/rest/services/ParcelMap/MapServer/0',
         labelFields: ['Property_A'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Juniata Co - Parcels',
         id: 'pa-juniata-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Juniata/Public/MapServer/1',
         labelFields: ['Hse_Num','Pre_Dir','Street_Name'],
         processLabel: function(label) { return label.replace(/^0+/,''); },
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lancaster Co - Address Points',
         id: 'pa-lancaster-co-pts',
         url: 'https://gis.co.lancaster.pa.us/arcgis/rest/services/LayerServices/AddressPoints/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Lancaster Co - Parcels',
         id: 'pa-lancaster-co-parcels',
         url: 'https://gis.co.lancaster.pa.us/arcgis/rest/services/ParcelsMOX/MapServer/5',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lebanon Co - Parcels',
         id: 'pa-lebanon-co-parcels',
         url: 'https://utility.arcgis.com/usrsvcs/servers/7072ca11c43c43feb1ab453851e847b9/rest/services/LandRecords/TaxParcels/MapServer/0',
         labelFields: ['SITUS_ADDR'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lehigh Co - Address Points',
         id: 'pa-lehigh-co-pts',
         url: 'https://services1.arcgis.com/XWDNR4PQlDQwrRCL/ArcGIS/rest/services/ATestParcel/FeatureServer/0',
         labelFields: ['LONUM','ADDRES'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Lehigh Co - Parcels',
         id: 'pa-lehigh-co-parcels',
         url: 'https://services1.arcgis.com/XWDNR4PQlDQwrRCL/arcgis/rest/services/ATestParcel/FeatureServer/1',
         labelFields: ['SITUS_ADDR','SITUS_FDPR','SITUS_FNAM','SITUS_FTYP','SITUS_FDSU'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lycoming Co - Address Points',
         id: 'pa-lycoming-co-pts',
         url: 'http://gis.lyco.org/arcgis/rest/services/BuildingAddresses/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Lycoming Co - Parcels',
         id: 'pa-lycoming-co-parcels',
         url: 'http://gis.lyco.org/arcgis/rest/services/Parcels/MapServer/4',
         labelFields: ['SITUS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mifflin Co - Parcels',
         id: 'pa-mifflin-co-parcels',
         url: 'http://gis.co.mifflin.pa.us/arcgis/rest/services/parcel_program/MapServer/5',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Monroe Co - Address Points',
         id: 'pa-monroe-co-pts',
         url: 'http://www.monroegis.org/webadaptor/rest/services/public/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Monroe Co - Parcels',
         id: 'pa-monroe-co-parcels',
         url: 'http://www.monroegis.org/webadaptor/rest/services/public/MapServer/3',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Parcels SLOW',
         id: 'pa-montgomery-co-parcels',
         url: 'http://propertyrecords.montcopa.org/pt/maps/proxy/proxy.ashx?http://198.7.141.155/arcgis/rest/services/ParcelFinderSourceMap/MapServer/2',
         labelFields: ['mcgis.DBO.dbo_GIS_BOA_LAND_old.LOCATION1'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Northampton Co - Address Points',
         id: 'pa-northampton-co-pts',
         url: 'https://gis.northamptoncounty.org/arcgisweb/rest/services/Assessment_Services/Land_Records_LGM/MapServer/3',
         labelFields: ['FULLADDR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Northampton Co - Parcels',
         id: 'pa-northampton-co-parcels',
         url: 'https://gis.northamptoncounty.org/arcgisweb/rest/services/Assessment_Services/Land_Records_LGM/MapServer/1',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Northumberland Co - Address Points',
         id: 'pa-northumberland-co-pts',
         url: 'https://gis.norrycopa.net/arcgis/rest/services/Parcels/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Northumberland Co - Parcels',
         id: 'pa-northumberland-co-parcels',
         url: 'https://gis.norrycopa.net/arcgis/rest/services/Parcels/MapServer/2',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Perry Co - Address Points',
         id: 'pa-perry-co-pts',
         url: 'http://gis.perryco.org/ArcGIS/rest/services/PerryBaseMap/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Perry Co - Parcels NO DATA',
         id: 'pa-perry-co-parcels',
         url: 'http://gis.perryco.org/ArcGIS/rest/services/PerryBaseMap/MapServer/5',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Philadelphia Co - Parcels',
         id: 'pa-philadelphia-co-parcels',
         url: 'https://gis.phila.gov/arcgis/rest/services/PhilaGov/Addresses/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pike Co - Address Points',
         id: 'pa-pike-co-pts',
         url: 'http://gis.pikepa.org/arcgis/rest/services/PikeCo_AddressPoints/MapServer/1',
         labelFields: ['PrimaryAddress'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Pike Co - Parcels NO DATA',
         id: 'pa-pike-co-parcels',
         url: 'http://gis.pikepa.org/arcgis/rest/services/PikeCo_Parcels/MapServer/0',
         labelFields: [],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Potter Co - Address Points',
         id: 'pa-potter-co-pts',
         url: 'https://services3.arcgis.com/vqFmmrJngO1NzsuX/ArcGIS/rest/services/Potter_Data/FeatureServer/0',
         labelFields: ['HSENUMBER','PREFIXDIR','STREETNAME','STREETSUF','POSTDIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Potter Co - Parcels',
         id: 'pa-potter-co-parcels',
         url: 'https://services3.arcgis.com/vqFmmrJngO1NzsuX/ArcGIS/rest/services/TaxParcels/FeatureServer/0',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Schuylkill Co - Parcels NO DATA',
         id: 'pa-schuylkill-co-parcels',
         url: 'https://services1.arcgis.com/5X0VJhfr7n6bBVwH/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Snyder Co - Address Points',
         id: 'pa-snyder-co-pts',
         url: 'http://www.unionco.org/unioncomaps/rest/services/Snyder/Structures/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Snyder Co - Parcels',
         id: 'pa-snyder-co-parcels',
         url: 'http://www.unionco.org/unioncomaps/rest/services/Snyder/Parcels/MapServer/0',
         labelFields: ['SitusDesc'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tioga Co - Address Points',
         id: 'pa-tioga-co-pts',
         url: 'http://50.120.220.154/arcgis/rest/services/ParcelFabricViewer/13_StructureLocationPoints911/MapServer/0',
         labelFields: ['HSENUMBER','PREFIXDIR','STREETNAME','STREETSUF','POSTDIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Tioga Co - Parcels',
         id: 'pa-tioga-co-parcels',
         url: 'http://50.120.220.154/arcgis/rest/services/ParcelFabricViewer/01_ParcelFabricCAMALines/MapServer/0',
         labelFields: ['LOCATION'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Union Co - Address Points',
         id: 'pa-union-co-pts',
         url: 'http://www.unionco.org/unioncomaps/rest/services/Union/UnionLandRecords/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Union Co - Parcels',
         id: 'pa-union-co-parcels',
         url: 'http://www.unionco.org/unioncomaps/rest/services/Union/UnionLandRecords/MapServer/1',
         labelFields: ['LocStreetNumber','LocStreetDirection','LocStreetName','LocStreetSuffix'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        // Washington Co Parcel no address info. Label ['link']  has URL for parcel data request.

        {name: 'Washington Co - Parcels NO DATA',
         id: 'pa-washington-co-parcels',
         url: 'https://wcsvrgis.washcopa.org/arcgis1051/rest/services/AGOL/Parcels/MapServer/0',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wayne Co - Address Points',
         id: 'pa-wayne-co-pts',
         url: 'http://services1.arcgis.com/VMKRr2Ecl6EFwJpm/ArcGIS/rest/services/Addresses/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Wayne Co - Parcels',
         id: 'pa-wayne-co-parcels',
         url: 'http://services1.arcgis.com/VMKRr2Ecl6EFwJpm/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Westmoreland Co - Parcels',
         id: 'pa-westmoreland-co-parcels',
         url: 'https://www.wcgis.us/arcgis/rest/services/TylerTechServices/Parcels/MapServer/0',
         labelFields: ['NUMBER','PRE_DIR','STR_NAME','STR_TYPE','POST_DIR'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wyoming Co - Address Points',
         id: 'pa-wyoming-co-pts',
         url: 'http://services.arcgis.com/0POQ0PQT9pHLMnL2/ArcGIS/rest/services/WyomingCountyAddresses/FeatureServer/0',
         labelFields: ['FULL_ADDRE'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Wyoming Co - Parcels',
         id: 'pa-wyoming-co-parcels',
         url: 'http://services.arcgis.com/0POQ0PQT9pHLMnL2/arcgis/rest/services/WyomingCountyParcels/FeatureServer/0',
         labelFields: ['Situs_Addr'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'York Co - Address Points SLOW X2',
         id: 'pa-york-co-pts',
         url: 'http://arcweb.ycpc.org/arcgis/rest/services/Emergency_Services/Address_Pts/MapServer/0',
         labelFields: ['PROPADR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'York Co - Parcels SLOW X2',
         id: 'pa-york-co-parcels',
         url: 'http://arcweb.ycpc.org/arcgis/rest/services/Projects/Parcel_Tax_Finder_FeatureService/FeatureServer/0',
         labelFields: ['PROPADR'],
         state: 'PA',
         style: DEFAULT_PARCEL_STYLE},


        // South Dakota
        // *********************************

        {name: 'Beadle Co - Parcels',
         id: 'sd-beadle-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Beadle/beadlemapnet/MapServer/1',
         labelFields: ['PROPERTY_A'],
         //processLabel: function(label) { return label.replace(/^\d{5}\s/, ''); }, // Some addresses start with the zip code, but some start with a valid 5-digit HN.  Can't just blindly remove 5-digit values.
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clark Co - Parcels (NO DATA)',
         id: 'sd-clark-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Clark/clarkmapnet_new/MapServer/16',
         labelFields: [],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Codington Co - Parcels',
         id: 'sd-codington-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Codington/codingtonmapnet/MapServer/9',
         labelFields: ['PROP_STREE'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        // THESE ARE HIGHLY INACCURATE
        // {name: 'Deuel Co - Address Points',
        //  id: 'sd-deuel-points',
        //  url: 'http://www.1stdistrict.org/arcgis/rest/services/Deuel/deuelmapnet/MapServer/0',
        //  labelFields: ['ARC_Street'],
        //  state: 'SD',
        //  style: DEFAULT_PT_STYLE},

        {name: 'Deuel Co - Parcels',
         id: 'sd-deuel-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Deuel/deuelmapnet/MapServer/2',
         labelFields: ['PROPERTY_A'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Parcels',
         id: 'sd-douglas-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Douglas/douglasmapnet/MapServer/1',
         labelFields: ['PROPERTY_A'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grant Co - Address Points (SPARSE)',
         id: 'sd-grant-points',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Grant/grantmapnet_new/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Grant Co - Parcels',
         id: 'sd-grant-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Grant/grantmapnet_new/MapServer/18',
         labelFields: ['INQ_STREET_NAME'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grant Co - Milbank - City Parcels',
         id: 'sd-milbank-city-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Milbank/milbankmapnet/MapServer/40',
         labelFields: ['INQ_HOUSE_','INQ_STREET'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hamlin Co - Parcels',
         id: 'sd-hamlin-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Hamlin/hamlinmapnet/MapServer/4',
         labelFields: ['PROPERTY_A'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kingsbury Co - Parcels',
         id: 'sd-kingsbury-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/kingsbury/kingsburymapnet_new/MapServer/4',
         labelFields: ['PROP_STREE'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Parcels',
         id: 'sd-lake-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Lake/lakemapnet/MapServer/3',
         labelFields: ['PropertyAddress'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Miner Co - Parcels',
         id: 'sd-miner-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Miner/minermapnet_new/MapServer/1',
         labelFields: ['PROP_STREE'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Minnehaha Co - Parcels',
         id: 'sd-minnehaha-co-parcels',
         url: 'http://206.176.83.74/minnemap/rest/services/Picto_Parcels/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sioux Falls - City Address Points',
         id: 'sd-Sioux-Fall-city-pts',
         url: 'https://gis2.siouxfalls.org/arcgis/rest/services/Data/Property/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Sioux Falls - Parcels (city)',
         id: 'sd-Sioux-Fall-city-parcels',
         url: 'https://gis2.siouxfalls.org/arcgis/rest/services/Data/Property/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sioux Falls - Parcels (county)',
         id: 'sd-minnehaha-co-sioux-falls-parcels',
         url: 'http://206.176.83.74/minnemap/rest/services/Picto_Parcels/MapServer/12',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pennington Co - Rapid City - Parcels',
         id: 'sd-rapid-city-parcels',
         url: 'http://gis.rcgov.org/arcgiswebadaptor/rest/services/PublicRapidMap/MapServer/40',
         labelFields: ['PropAddress'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tripp Co - Parcels',
         id: 'sd-tripp-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Tripp/trippmapnet/MapServer/1',
         labelFields: ['PROP_ADD'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        // Texas
        // ****************************

        {name: 'Kingsville - City Parcels',
         id: 'tx-kingsville-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Kingsville/Kingsville_WL_P/MapServer/1',
         labelFields: ['Full_Addr'],
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        // Utah
        // *****************************

        {name: 'Utah - State Address Points',
         id: 'utah-state-address-points',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahAddressPoints/FeatureServer/0',
         labelFields: ['FullAdd'],
         state: 'UT',
         style: DEFAULT_PT_STYLE},

        {name: 'Utah - State Parcels',
         id: 'ut-state-parcels',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahCountyParcelsLIR/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'UT',
         style: DEFAULT_PARCEL_STYLE},

        // Virginia
        // ****************************
        {name: 'Virginia - State Address Points',
         id: 'va-address-points',
         url: 'http://gismaps.vita.virginia.gov/arcgis/rest/services/VA_Base_layers/VA_Address_Points/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        // NO ADDRESS DATA
        // {name: 'Accomack Co - Parcels',
        //  id: 'va-accomack-co-parcels',
        //  url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/accomack/Accomack_BasemapCache_parcels_web_mercator/MapServer/1',
        //  labelFields: [''],
        //  state: 'VA',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'Accomack Co - Address Points',
         id: 'va-accomack-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/accomack/public/MapServer/6',
         labelFields: ['Full_Address'],
         processLabel: function(label) {
             return label.replace(/[A-Z]{4}\s\d{5}$/,'');
         },
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Alexandria - City Address Points',
         id: 'va-alexandria-city-points',
         url: 'https://maps.alexandriava.gov/arcgis/rest/services/alxAddressWm/MapServer/0',
         labelFields: ['FULL_ADDS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Alexandria - City Parcels',
         id: 'va-alexandria-city-parcels',
         url: 'https://maps.alexandriava.gov/arcgis/rest/services/alxParcelsWm/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Alleghany Co - Address Points',
         id: 'va-alleghany-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/alleghany/Public/MapServer/4',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Amelia Co - Address Points',
         id: 'va-amelia-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Amelia/Amelia_WL_P/MapServer/8',
         labelFields: ['FULLADDRES'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Amelia Co - Parcels',
         id: 'va-amelia-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Amelia/Amelia_WL_P/MapServer/30',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Amherst Co - Address Points',
         id: 'va-amherst-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Amherst/Amherst_WL_P/MapServer/17',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Appomattox Co - Address Points',
         id: 'va-appomattox-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Appomattox/Appomattox_WL_P/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Appomattox Co - Parcels',
         id: 'va-appomattox-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Appomattox/Appomattox_WL_P/MapServer/12',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Arlington Co - Address Points',
         id: 'va-arlington-co-pts',
         url: 'https://gis.arlingtonva.us/arlgis/rest/services/public/Addresses/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Bedford - City Parcels',
         id: 'va-bedford-city-parcels',
         url: 'http://webgis.bedfordcountyva.gov/arcgis/rest/services/OpenData/OpenDataTownofBedford/MapServer/11',
         labelFields: ['LocAddr'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bedford Co - Address Points',
         id: 'va-bedford-co-pts',
         url: 'http://webgis.bedfordcountyva.gov/arcgis/rest/services/OpenData/OpenDataReference/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Bedford Co - Parcels',
         id: 'va-bedford-co-parcels',
         url: 'http://webgis.bedfordcountyva.gov/arcgis/rest/services/OpenData/OpenDataProperty/MapServer/0',
         labelFields: ['LocAddr'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Campbell Co - Address Points',
         id: 'va-campbell-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/campbell/Public/MapServer/2',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Campbell Co - Parcels',
         id: 'va-campbell-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/campbell/Public/MapServer/8',
         labelFields: ['LocAddr'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Caroline Co - Address Points',
         id: 'va-caroline-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/caroline/Public/MapServer/19',
         labelFields: ['ADDR_NUM','PREDIR','STNAME','STSFFX','POSDIR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        // *** NO ADDRESS DATA
        // {name: 'Charlotte Co - Parcels',
        //  id: 'va-charlotte-co-parcels',
        //  url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Charlotte/Public/MapServer/7',
        //  labelFields: [],
        //  state: 'VA',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'Dinwiddie Co - Address Points',
         id: 'va-dinwiddie-co-pts',
         areaToPoint: true,
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/dinwiddie/Public/MapServer/3',
         labelFields: ['FULL_ADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Dinwiddie Co - Parcels',
         id: 'va-dinwiddie-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/dinwiddie/Public/MapServer/15',
         labelFields: ['MHSE_','MDIRCT','MSTRT','MSTTYP','MSDIRS'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emporia - City Parcels',
         id: 'va-emporia-city-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/emporia/main_public/MapServer/5',
         labelFields: ['HseNum','StreetName'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emporia - City Address Points',
         id: 'va-emporia-city-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/emporia/main_public/MapServer/8',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Farmville - City Parcels',
         id: 'va-farmville-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Farmville/Farmville_WL_P/MapServer/9',
         labelFields: ['ParcelAddress'],
         processLabel: function(label) { return label.replace(/^0+/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Address Points',
         id: 'va-franklin-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Franklin/Public/MapServer/16',
         labelFields: ['PrimaryAdd'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'va-franklin-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Franklin/Public/MapServer/2',
         labelFields: ['MHSE_','MDIRCT','MSTRT','MSTTYP','MSDIRS'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Highland Co - Address Points',
         id: 'va-highland-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Highland/Highland_WL_P/MapServer/1',
         labelFields: ['ADDR','PREFIX','ROAD_NAME','SUFFIX','POSTDIR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Highland Co - Parcels',
         id: 'va-highland-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Highland/Highland_WL_P/MapServer/9',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'King and Queen Co - Address Points',
         id: 'va-king-and-queen-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_KingAndQueen/KingAndQueen_WL_P/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'King and Queen Co - Parcels',
         id: 'va-king-and-queen-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_KingAndQueen/KingAndQueen_WL_P/MapServer/7',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lexington - City Parcels',
         id: 'va-lexington-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Lexington/Lexington_WL_P/MapServer/2',
         labelFields: ['ParcelAddress1'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lexington - City Structures',
         id: 'va-lexington-city-structures',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Lexington/Lexington_WL_P/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Louisa Co - Address Points',
         id: 'va-louisa-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Louisa/Louisa_WL_P/MapServer/13',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Louisa Co - Parcels',
         id: 'va-louisa-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Louisa/Louisa_WL_P/MapServer/25',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lunenburg Co - Parcels',
         id: 'va-lunenburg-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Lunenburg/Lunenburg_WL_P/MapServer/1',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Nelson Co - Address Points',
         id: 'va-nelson-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Nelson/Nelson_WL_P/MapServer/3',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Nelson Co - Parcels',
         id: 'va-nelson-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Nelson/Nelson_WL_P/MapServer/1',
         labelFields: ['PhysicalAddress'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Nottoway Co - Address Points',
         id: 'va-nottoway-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Nottoway/Nottoway_WL_P/MapServer/5',
         labelFields: ['ADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Nottoway Co - Parcels',
         id: 'va-nottoway-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Nottoway/Nottoway_WL_P/MapServer/12',
         labelFields: ['Short_Address'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Kent Co - Parcels',
         id: 'va-new-kent-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/NewKent/Public/MapServer/18',
         labelFields: ['REM_PRCL_LOCN'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Kent Co - Address Points',
         id: 'va-new-kent-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/NewKent/Public/MapServer/30',
         labelFields: ['FullAddr'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Northampton Co - Address Points',
         id: 'va-northampton-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Northampton/NH_ESVA911_AGO/MapServer/5',
         labelFields: ['HOUSE_NUM','V_STNAME'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Norton - City Address Points',
         id: 'va-norton-city-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/norton/NortonAddressAG_OnLineAnno/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Orange Co - Address Points',
         id: 'va-orange-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Orange/Orange_WL_P/MapServer/5',
         labelFields: ['ADDRNUM','FULLNAME'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Orange Co - Parcels',
         id: 'va-orange-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Orange/Orange_WL_P/MapServer/42',
         labelFields: ['ParcelAddress'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Page Co - Address Points',
         id: 'va-page-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Page/Page/MapServer/0',
         labelFields: ['HouseNum','Street'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Page Co - Parcels',
         id: 'va-page-co-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Page/Page/MapServer/13',
         labelFields: ['GIS_FULL_ADDR'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Petersburg - City Parcels',
         id: 'va-petersburg-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Petersburg/Petersburg_WL_P/MapServer/18',
         labelFields: ['ParcelAddress1'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Poquoson - City Address Points',
         id: 'va-poquoson-city-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/poquoson/Public/MapServer/15',
         labelFields: ['FULL_ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Shenandoah Co - Address Points',
         id: 'va-shenandoah-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Shenandoah/Shenandoah_WL_P/MapServer/9',
         labelFields: ['FULL_ADDRESS2'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Shenandoah Co - Parcels',
         id: 'va-shenandoah-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Shenandoah/Shenandoah_WL_P/MapServer/29',
         labelFields: ['FULL_ADDRESS'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Surry Co - Address Points',
         id: 'va-surry-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Surry/Public/MapServer/3',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Sussex Co - Address Points',
         id: 'va-sussex-co-pts',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Sussex/Public/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Warren Co - Address Points',
         id: 'va-warren-co-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Warren/Warren_WL_P/MapServer/3',
         labelFields: ['full_address'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Warren Co - Parcels',
         id: 'va-warren-co-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Warren/Warren_WL_P/MapServer/1',
         labelFields: ['PARCELADDRESS'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Waynesboro - City Parcels',
         id: 'va-waynesboro-city-parcels',
         url: 'http://gis.worldviewsolutions.com/arcgis/rest/services/Waynesboro/Public/MapServer/12',
         labelFields: ['FULLADDRESS'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Williamsburg - City Address Points',
         id: 'va-williamsburg-city-pts',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Williamsburg/Williamsburg_WL_P/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'VA',
         style: DEFAULT_PT_STYLE},

        {name: 'Williamsburg - City Parcels',
         id: 'va-williamsburg-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Williamsburg/Williamsburg_WL_P/MapServer/12',
         labelFields: ['StreetName'],
         state: 'VA',
         style: DEFAULT_PARCEL_STYLE},

        // {name: 'Williamsburg - City Structures',
        //  id: 'va-williamsburg-city-structures',
        //  url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Williamsburg/Williamsburg_WL_P/MapServer/2',
        //  labelHeaderFields: ['StrNumUnit'],
        //  labelFields: ['BusinessName'],
        //  //processLabel: function(label) { return label.replace(/^0\s/,''); },
        //  state: 'VA',
        //  style: DEFAULT_STRUCTURE_STYLE},


        // West Virginia
        // ****************************

        {name: 'State - Address Points',
         id: 'wv-state-pts',
         url: 'https://services.wvgis.wvu.edu/arcgis/rest/services/Location/wv_address_labels_WVDHSEM_wm/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'State - Parcels',
         id: 'wv-state-parcels',
         url: 'https://services.wvgis.wvu.edu/arcgis/rest/services/PlanningCadastre/WV_Parcels/MapServer/5',
         labelFields: ['PhyNum','PhyDir','PhyStreet','PhySufx'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        // Wisconsin
        // ****************************

        {name: 'State - Parcels',
         id: 'wi-state-parcels',
         url: 'https://mapservices.legis.wisconsin.gov/arcgis/rest/services/WLIP/PARCELS/FeatureServer/0',
         labelFields: ['SITEADRESS'],
         state: 'WI',
         style: DEFAULT_PARCEL_STYLE}

    ];

    let STATES = {
        _states:[
            ['Alabama','AL'],['Alaska','AK'],['American Samoa','AS'],['Arizona','AZ'],['Arkansas','AR'],['California','CA'],['Colorado','CO'],['Connecticut','CT'],['Delaware','DE'],['District of Columbia','DC'],
            ['Federated States Of Micronesia','FM'],['Florida','FL'],['Georgia','GA'],['Guam','GU'],['Hawaii','HI'],['Idaho','ID'],['Illinois','IL'],['Indiana','IN'],['Iowa','IA'],['Kansas','KS'],
            ['Kentucky','KY'],['Louisiana','LA'],['Maine','ME'],['Marshall Islands','MH'],['Maryland','MD'],['Massachusetts','MA'],['Michigan','MI'],['Minnesota','MN'],['Mississippi','MS'],['Missouri','MO'],
            ['Montana','MT'],['Nebraska','NE'],['Nevada','NV'],['New Hampshire','NH'],['New Jersey','NJ'],['New Mexico','NM'],['New York','NY'],['North Carolina','NC'],['North Dakota','ND'],
            ['Northern Mariana Islands','MP'],['Ohio','OH'],['Oklahoma','OK'],['Oregon','OR'],['Palau','PW'],['Pennsylvania','PA'],['Puerto Rico','PR'],['Rhode Island','RI'],['South Carolina','SC'],
            ['South Dakota','SD'],['Tennessee','TN'],['Texas','TX'],['Utah','UT'],['Vermont','VT'],['Virgin Islands','VI'],['Virginia','VA'],['Washington','WA'],['West Virginia','WV'],['Wisconsin','WI'],['Wyoming','WY']
        ],
        toAbbr: function(fullName) { return this._states.find(a => a[0] === fullName)[1]; },
        toFullName: function(abbr) { return this._states.find(a => a[1] === abbr)[0]; },
        toFullNameArray: function() { return this._states.map(a => a[0]); },
        toAbbrArray: function() { return this._states.map(a => a[1]); }
    };
    let DEFAULT_VISIBLE_AT_ZOOM = 6;

    let SETTINGS_STORE_NAME = 'wme_gis_layers_fl';
    let _alertUpdate = false;
    let _dev_mode;
    let _debugLevel = 0;
    let _scriptVersion = GM_info.script.version;
    let _scriptVersionChanges = [
        GM_info.script.name + '\nv' + _scriptVersion + '\n\nWhat\'s New\n------------------------------\n',
        '\n- Update for new WME layers menu.'
    ].join('');
    let _mapLayer = null;
    let _settings = {};

    function log(message, level) {
        if (message && (!level || (level <= _debugLevel))) {
            console.log('GIS Layers: ', message);
        }
    }

    function loadSettingsFromStorage() {
        let loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        let defaultSettings = {
            lastVersion: null,
            visibleLayers: [],
            selectedStates: [],
            enabled: true
        };
        _settings = loadedSettings ? loadedSettings : defaultSettings;
        for (let prop in defaultSettings) {
            if (!_settings.hasOwnProperty(prop)) {
                _settings[prop] = defaultSettings[prop];
            }
        }
    }

    function saveSettingsToStorage() {
        if (localStorage) {
            _settings.lastVersion = _scriptVersion;
            localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(_settings));
            log('Settings saved', 1);
        }
    }

    function getUrl(extent, gisLayer) {
        if (gisLayer.spatialReference) {
            let proj = new OL.Projection('EPSG:' + gisLayer.spatialReference);
            extent.transform(W.map.getProjection(), proj);
        }
        let geometry = { xmin:extent.left, ymin:extent.bottom, xmax:extent.right, ymax:extent.top, spatialReference: {wkid: gisLayer.spatialReference ? gisLayer.spatialReference : 102100, latestWkid: gisLayer.spatialReference ? gisLayer.spatialReference : 3857} };
        let geometryStr = JSON.stringify(geometry);
        let url = gisLayer.url + '/query?geometry=' + encodeURIComponent(geometryStr);
        let fields = gisLayer.labelFields;
        if (gisLayer.labelHeaderFields) {
            fields = fields.concat(gisLayer.labelHeaderFields);
        }
        if (gisLayer.distinctFields) {
            fields = fields.concat(gisLayer.distinctFields);
        }
        url += '&outFields=' + encodeURIComponent(fields.join(','));
        url += '&returnGeometry=true';
        url += '&spatialRel=esriSpatialRelIntersects&geometryType=esriGeometryEnvelope&inSR=' + (gisLayer.spatialReference ? gisLayer.spatialReference : '102100') + '&outSR=3857&f=json';
        if (gisLayer.where) {
            url += '&where=' + encodeURIComponent(gisLayer.where);
        }
        return url;
    }

    function processFeatures(data, token, gisLayer) {
        let features = [];
        if (data.skipIt) {
            // do nothing
        } else if (data.error) {
            log('Error in layer "' + gisLayer.name + '": ' + data.error.message);
        } else {
            let items = data.features;
            if (!token.cancel) {
                let error = false;
                if (gisLayer.debug) debugger;
                let distinctValues = [];
                items.forEach(function(item) {
                    let skipIt = false;
                    if (!token.cancel && !error) {
                        let feature;
                        let featureGeometry;
                        let area;
                        if (gisLayer.distinctFields) {
                            if (distinctValues.some( v => gisLayer.distinctFields.every(fld => v[fld] === item.attributes[fld]) )) {
                                skipIt = true;
                            } else {
                                let dist = {};
                                gisLayer.distinctFields.forEach(fld => dist[fld] = item.attributes[fld]);
                                distinctValues.push(dist);
                            }
                        }
                        if (!skipIt) {
                            if (item.geometry.x) {
                                featureGeometry = new OpenLayers.Geometry.Point(item.geometry.x, item.geometry.y);
                            } else if (item.geometry.rings) {
                                let rings = [];
                                item.geometry.rings.forEach(function(ringIn) {
                                    let pnts= [];
                                    for(let i=0;i<ringIn.length;i++){
                                        pnts.push(new OpenLayers.Geometry.Point(ringIn[i][0], ringIn[i][1]));
                                    }
                                    rings.push(new OpenLayers.Geometry.LinearRing(pnts));
                                });
                                featureGeometry = new OpenLayers.Geometry.Polygon(rings);
                                if (gisLayer.areaToPoint) {
                                    featureGeometry = featureGeometry.getCentroid();
                                } else {
                                    area = featureGeometry.getArea();
                                }
                            } else if (data.geometryType === 'esriGeometryPolyline') {
                                let pointList = [];
                                item.geometry.paths.forEach(function(path){
                                    path.forEach(point => pointList.push(new OpenLayers.Geometry.Point(point[0],point[1])));
                                });
                                featureGeometry = new OpenLayers.Geometry.LineString(pointList);
                            } else {
                                log('Error: Unexpected feature type in layer "' + gisLayer.name + '"');
                                error = true;
                            }
                            if (!error) {
                                let displayLabelsAtZoom = (gisLayer.visibleAtZoom ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM) + 1;
                                let label = '';
                                if (gisLayer.labelHeaderFields) {
                                    label = gisLayer.labelHeaderFields.map(fieldName => item.attributes[fieldName]).join(' ').trim() + '\n';
                                }
                                if (W.map.getZoom() >= displayLabelsAtZoom || area >= 5000) {
                                    label += gisLayer.labelFields.map(fieldName => item.attributes[fieldName]).join(' ').trim();
                                    if (gisLayer.processLabel) label = gisLayer.processLabel(label);
                                }
                                let attributes = {
                                    layerID: gisLayer.id,
                                    label: label
                                };
                                feature = new OpenLayers.Feature.Vector(featureGeometry,attributes);
                                features.push(feature);
                            }
                        }
                    }
                });
            }
        }
        if (!token.cancel) {
            _mapLayer.removeFeatures(_mapLayer.getFeaturesByAttribute('layerID', gisLayer.id));
            _mapLayer.addFeatures(features);

            if (features.length) {
                $('label[for="gis-layer_' + gisLayer.id + '"]').css({color:'#00a009'});
            }
        }
    }  // END ProcessFeatures()

    let _lastToken = {};
    function fetchFeatures() {
        _lastToken.cancel = true;
        _lastToken = {cancel: false, features: [], layersProcessed: 0};
        let states = W.model.states.getObjectArray().map(state => state.name);
        $('.gis-state-layer-label').css({'color':'#777'});
        if (states.length) {
            _gisLayers.forEach(gisLayer => {
                let isValidUrl = gisLayer.url && gisLayer.url.trim().length > 0;
                let isVisible = _settings.visibleLayers.indexOf(gisLayer.id) > -1 && _settings.selectedStates.indexOf(gisLayer.state) > -1;
                let isInState = !gisLayer.state || states.indexOf(STATES.toFullName(gisLayer.state)) > -1;
                let isValidZoom = W.map.getZoom() >= (gisLayer.visibleAtZoom ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM);
                if (isValidUrl && isInState && isVisible && isValidZoom) {
                    let url = getUrl(W.map.getExtent(), gisLayer);
                    GM_xmlhttpRequest({
                        url: url,
                        context: _lastToken,
                        method: 'GET',
                        onload: function(res) { processFeatures($.parseJSON(res.responseText), res.context, gisLayer); },
                        onerror: function(res) { log('ERROR: ' + res.statusText); }
                    });
                } else {
                    processFeatures({skipIt: true}, _lastToken, gisLayer);
                }
            });
        }
    }

    function onModeChanged(model, modeId, context) {
        if(!modeId || modeId === 1) {
            initUserPanel();
        }
    }

    function showScriptInfoAlert() {
        /* Check version and alert on update */
        if (_alertUpdate && _scriptVersion !== _settings.lastVersion) {
            alert(_scriptVersionChanges);
        }
    }

    function initLayer(){
        let rules = _gisLayers.map(gisLayer => {
            return new OpenLayers.Rule({
                filter: new OpenLayers.Filter.Comparison({
                    type: OpenLayers.Filter.Comparison.EQUAL_TO,
                    property: "layerID",
                    value: gisLayer.id
                }),
                symbolizer: gisLayer.style
            });
        });

        let style = new OpenLayers.Style(DEFAULT_STYLE, { rules: rules } );

        _mapLayer = new OpenLayers.Layer.Vector("GIS Layers", {
            uniqueName: "__wmeGISLayers",
            styleMap: new OpenLayers.StyleMap(style)
        });
        _mapLayer.setVisibility(_settings.enabled);
        W.map.addLayer(_mapLayer);

    } // END InitLayer


    function onLayerToggleChanged(checked, layerID) {
        let idx = _settings.visibleLayers.indexOf(layerID);
        if (checked) {
            if (idx === -1) _settings.visibleLayers.push(layerID);
        } else {
            if (idx > -1) _settings.visibleLayers.splice(idx, 1);
        }
        saveSettingsToStorage();
        fetchFeatures();
    }

    function initLayersTab() {
        let states = _gisLayers.map(l => l.state).unique().filter(st => _settings.selectedStates.indexOf(st) > -1);
        $('#panel-gis-state-layers').empty();
        $('#panel-gis-state-layers').append(
            $('.gis-layers-state-checkbox:checked').length === 0 ? $('<div>').text('Turn on states in the Settings tab.') : states.map(st => {
                return $('<fieldset>', {style:'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;'}).append(
                    $('<legend>', {style:'margin-bottom:0px;border-bottom-style:none;width:auto;'}).append($('<span>', {style:'font-size:14px;font-weight:600;text-transform: uppercase;'}).text(STATES.toFullName(st))),
                    $('<div>', {class:'controls-container', style:'padding-top:0px;'}).append(
                        _gisLayers.filter(l => l.state === st).map(gisLayer => {
                            let id = 'gis-layer_' + gisLayer.id;
                            return $('<div>', {class: 'controls-container'}).css({'padding-top':'2px'}).append(
                                $('<input>', {type:'checkbox', id:id}).change(function() { onLayerToggleChanged($(this).is(':checked'), gisLayer.id); }).prop('checked', _settings.visibleLayers.indexOf(gisLayer.id) > -1),
                                $('<label>', {for:id, class:'gis-state-layer-label'}).css({'white-space':'pre-line'}).text(gisLayer.name)
                            );
                        })
                    )
                );
            })
        );
    }

    function onStateCheckChanged(checked, st) {
        let idx = _settings.selectedStates.indexOf(st);
        if (checked) {
            if (idx === -1) _settings.selectedStates.push(st);
        } else {
            if (idx > -1) _settings.selectedStates.splice(idx, 1);
        }
        saveSettingsToStorage();
        initLayersTab();
        fetchFeatures();
    }

    function initSettingsTab() {
        let states = _gisLayers.map(l => l.state).unique();
        $('#panel-gis-layers-settings').append(
            $('<fieldset>', {style:'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;'}).append(
                $('<legend>', {style:'margin-bottom:0px;border-bottom-style:none;width:auto;'}).append($('<span>', {style:'font-size:14px;font-weight:600;text-transform: uppercase;'}).text('States')),
                $('<div>', {class:'controls-container', style:'padding-top:0px;'}).append(
                    states.map(st => {
                        let fullName = STATES.toFullName(st);
                        let id = 'gis-layer-enable-state-' + st;
                        return $('<div>', {class: 'controls-container'}).css({'padding-top':'2px'}).append(
                            $('<input>', {type:'checkbox', id:id, class:'gis-layers-state-checkbox'}).change(function() { onStateCheckChanged($(this).is(':checked'), st); }).prop('checked', _settings.selectedStates.indexOf(st) > -1),
                            $('<label>', {for:id}).css({'white-space':'pre-line'}).text(fullName)
                        );
                    })
                )
            )
        );
    }

    function initTab() {
        initSettingsTab();
        initLayersTab();
        let color = _settings.enabled ? '#00bd00' : '#777';
        $('a[href="#sidepanel-gis-l"]').prepend(
            $('<span>', {class:'fa fa-power-off', id:'gis-layers-power-btn', style:'margin-right: 5px;cursor: pointer;color: ' + color + ';font-size: 13px;', title:'Toggle GIS Layers'}).click(function(evt) {
                evt.stopPropagation();
                _settings.enabled = !_settings.enabled;
                saveSettingsToStorage();
                _mapLayer.setVisibility(_settings.enabled);
                let color = _settings.enabled ? '#00bd00' : '#777';
                $('span#gis-layers-power-btn').css({color:color});
                if (_settings.enabled) fetchFeatures();
            })
        );
    }

    function onMapMove() {
        if (_settings.enabled) fetchFeatures();
    }

    function initGui() {
        if (_dev_mode) {
            DEFAULT_PARCEL_STYLE.fillOpacity = 0.2;
            DEFAULT_PARCEL_STYLE.fillColor = DEFAULT_STYLE.strokeColor;
        }

        initLayer();

        let content = $('<div>').append(
            $('<span>', {style:'font-size:14px;font-weight:600'}).text('GIS Layers'),
            $('<span>', {style:'font-size:11px;margin-left:10px;color:#aaa;'}).text(GM_info.script.version),
            '<ul class="nav nav-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-gis-state-layers" aria-expanded="true">State Layers</a></li>' +
            '<li><a data-toggle="tab" href="#panel-gis-layers-settings" aria-expanded="true">Settings</a></li>' +
            '</ul>',
            $('<div>', {class:'tab-content',style:'padding:8px;padding-top:2px'}).append(
                $('<div>', {class:'tab-pane active', id:'panel-gis-state-layers'}),
                $('<div>', {class:'tab-pane', id:'panel-gis-layers-settings'})
            )
        ).html();

        let tab = new Tab('GIS-L', content, initTab, null);
        W.map.events.register("moveend",null,onMapMove);
        showScriptInfoAlert();
    }

    function init() {
        // *** NOTE: This may be needed to add projections for non-standard coordinate systems.
        // *** It's a wrapper around proj4js 2.x to simulate proj4js 1.1 (used in OpenLayers 2)
        // unsafeWindow.Proj4js = {
        //     Proj: function(code) {
        //         return proj4(Proj4js.defs[code]);
        //     },
        //     defs: proj4.defs,
        //     transform: proj4
        // };

        // *** NOTE: This was added for Perry County, KY.  The transform worked, but the coordinate system Perry county seems to be using doesn't match up with EPSG:2272.
        // proj4.defs('EPSG:2272','+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs');

        loadSettingsFromStorage();
        initGui();
        fetchFeatures();
        log('Initialized.', 1);
    }

    function bootstrap() {
        if (W && W.loginManager && W.map && W.loginManager.isLoggedIn()) {
            log('Initializing...', 1);
            _dev_mode = W.loginManager.user.userName === 'MapOMatic';
            init();
        } else {
            log('Bootstrap failed. Trying again...', 1);
            setTimeout(function () {
                bootstrap();
            }, 1000);
        }
    }

    // Modified from WazeWrap
    class Tab {
        constructor(name, content, callback, context) {
            this.TAB_SELECTOR = '#user-tabs ul.nav-tabs';
            this.CONTENT_SELECTOR = '#user-info div.tab-content';
            this.callback = null;
            this.$content = null;
            this.context = null;
            this.$tab = null;

            let idName, i = 0;

            if (name && 'string' === typeof name &&
                content && 'string' === typeof content) {
                if (callback && 'function' === typeof callback) {
                    this.callback = callback;
                    this.context = context || callback;
                }
                /* Sanitize name for html id attribute */
                idName = name.toLowerCase().replace(/[^a-z-_]/g, '');
                /* Make sure id will be unique on page */
                while (
                    $('#sidepanel-' + (i ? idName + i : idName)).length > 0) {
                    i++;
                }
                if (i) {
                    idName = idName + i;
                }
                /* Create tab and content */
                this.$tab = $('<li/>')
                    .append($('<a/>')
                            .attr({
                    'href': '#sidepanel-' + idName,
                    'data-toggle': 'tab'
                })
                            .text(name));
                this.$content = $('<div/>')
                    .addClass('tab-pane')
                    .attr('id', 'sidepanel-' + idName)
                    .html(content);

                this.appendTab();
                let that = this;
                if (Waze.prefs) {
                    Waze.prefs.on('change:isImperial', function(){that.appendTab();});
                }
                Waze.app.modeController.model.bind('change:mode', function(){that.appendTab();});
            }
        }

        append(content) {
            this.$content.append(content);
        }

        appendTab() {
            $(this.TAB_SELECTOR).append(this.$tab);
            $(this.CONTENT_SELECTOR).first().append(this.$content);
            if (this.callback) {
                this.callback.call(this.context);
            }
        }

        clearContent() {
            this.$content.empty();
        }

        destroy() {
            this.$tab.remove();
            this.$content.remove();
        }
    } // END Tab

    log('Bootstrap...', 1);
    bootstrap();
})();