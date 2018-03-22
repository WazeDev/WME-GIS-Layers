// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2018.03.21.001
// @description  Adds GIS layers in WME
// @author       MapOMatic
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require      https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @license      GNU GPLv3
// -- AK --
// @connect      matsugov.us
// @connect      ancgis.com
// @connect      kpb.us
// @connect      fnsb.us
// @connect      ak.us
// @connect      mobile311.com
// -- AL --
// @connect      kcsgis.com
// @connect      calhouncounty.org
// @connect      shelbyal.com
// @connect      cityofmobile.org
// @connect      stclairco.com
// @connect      emapsplus.com
// @connect      jccal.org
// @connect      tuscaloosa-al.gov
// -- AR --
// @connect      arkansas.gov
// @connect      efsedge.com
// -- AZ --
// @connect      yumacountyaz.gov
// -- CA --
// @connect      geopowered.com
// @connect      acgov.org
// -- CO --
// @connect      fremontgis.com
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
// @connect      claycountygov.com
// @connect      colliergov.net
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
// @connect      plantation.org
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
// @connect      bryan-county.org
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
// @connect      ga.us
// @connect      atlantaregional.com
// @connect      brookhavenga.gov
// @connect      columbiacountyga.gov
// @connect      interdev.com
// @connect      dunwoodyga.gov
// @connect      romega.us
// @connect      sandyspringsga.gov
// @connect      sagiscloud.thempc.org
// @connect      whitfieldcountyga.com
// -- HI --
// @connect      hawaii.gov
// @connect      honolulugis.org
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
// -- ID --
// @connect      adacountyassessor.org
// @connect      idaho.gov
// @connect      id.us
// @connect      cityofboise.org
// @connect      bonnercounty.us
// @connect      canyonco.org
// @connect      clearwatercounty.org
// @connect      rexburg.org
// @connect      kcgov.us
// -- IL --
// @connect      cookcountyil.gov
// @connect      dupageco.org
// @connect      lakecountyil.gov
// @connect      il.us
// @connect      willcogis.org
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
// @connect      rileycountyks.gov
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
// -- LA --
// @connect      efsedge.com
// @connect      geoportalmaps.com
// @connect      jeffparish.net
// @connect      nola.gov
// -- MA --
// @connect      ma.us
// @connect      cityofboston.gov
// -- MD --
// @connect      md.gov
// @connect      baltimorecountymd.gov
// @connect      allconet.org
// @connect      aacounty.org
// @connect      arcgis.com
// @connect      ccgov.org
// @connect      frederickcountymd.gov
// @connect      garrettcounty.org
// @connect      montgomerycountymd.gov
// @connect      pgatlas.com
// @connect      qac.org
// @connect      saint-marys.md.us
// @connect      talbgov.org
// @connect      washco-md.net
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
// @connect      mo.us
// @connect      polkcountymo.org
// @connect      sccmo.org
// @connect      showmeboone.com
// @connect      stlouisco.com
// -- MS --
// @connect      ms.gov
// @connect      agdmaps.com
// @connect      desotocountyms.gov
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
// @connect      nd.us
// @connect      54.213.14.253
// -- NE --
// @connect      adamscounty.org
// @connect      dogis.org
// @connect      lincoln.ne.gov
// @connect      sarpy.com
// -- NJ --
// @connect      nj.us
// -- NV --
// @connect      washoecounty.us
// @connect      perryco.org
// -- NY --
// @connect      ny.gov
// @connect      ny.us
// @connect      bcgis.com
// @connect      cattco.org
// @connect      cayugacounty.us
// @connect      chautauquacounty.com
// @connect      dancgis.org
// @connect      23.96.59.134
// @connect      dutchessny.gov
// @connect      erie.gov
// @connect      gishost.com
// @connect      greenegovernment.com
// @connect      latisviewer.com
// @connect      livingstoncounty.us
// @connect      monroecounty.gov
// @connect      nassaucountyny.gov
// @connect      niagaracounty.com
// @connect      orangecountygov.com
// @connect      oswegocounty.com
// @connect      mapxpress.net
// @connect      pcnygis.com
// @connect      72.10.206.73
// @connect      suffolkcountyny.gov
// @connect      ulstercountyny.gov
// @connect      warrencountyny.gov
// @connect      westchestergov.com
// -- OH --
// @connect      hamilton-co.org
// @connect      oh.us
// @connect      butlercountyauditor.org
// @connect      clermontauditor.org
// @connect      mcegisohio.org
// @connect      franklincountyauditor.com
// @connect      allencountyohio.com
// @connect      ashtabulacounty.us
// @connect      auglaizecounty.org
// @connect      fultoncountyoh.com
// @connect      lakecountyohio.gov
// @connect      lcounty.com
// @connect      loraincountyauditor.com
// @connect      mahoningcountyoh.gov
// @connect      mercercountyohio.org
// @connect      sanduskycountygis.org
// @connect      sciotocountyengineer.org
// @connect      starkcountyohio.gov
// @connect      summitoh.net
// @connect      tgisites.com
// -- OK --
// @connect      incog.org
// @connect      geocortex.com
// @connect      normanok.gov
// @connect      roktech.net
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
// @connect      districtiii.org
// @connect      206.176.83.74
// @connect      mobile311.com
// @connect      lincolncountysd.org
// @connect      rcgov.org
// @connect      1stdistrict.org
// @connect      siouxfalls.org
// -- TN --
// @connect      204.63.176.116
// @connect      clevelandtn.gov
// @connect      johnsoncitytn.org
// @connect      nashville.gov
// @connect      hamiltontn.gov
// @connect      maurycounty-tn.gov
// @connect      mcgtn.org
// @connect      putnamco.org
// @connect      rutherfordcountytn.gov
// @connect      tn.us
// @connect      williamsoncounty-tn.gov
// @connect      wilsontngis.com
// -- TX --
// @connect      gis.abilenetx.com
// @connect      gis.co.collin.tx.us
// @connect      maps.dcad.org
// @connect      gis.dentoncounty.com
// @connect      gis.elpasotexas.gov
// @connect      arcgisweb.co.fort-bend.tx.us
// @connect      friscotexas.gov
// @connect      maps.planogis.org
// @connect      gis.wilco.org
// @connect      webmap.trueautomation.com
// @connect      bcad.org
// @connect      wadtx.com
// @connect      smithcountymapsite.org
// @connect      arcweb.hcad.org
// @connect      gis.bisconsultants.com
// @connect      maps.co.grayson.tx.us
// @connect      maps.cstx.gov
// @connect      maps.mckinneytexas.org
// @connect      temple.tx.us
// @connect      gismaps.flower-mound.com
// @connect      maps.garlandtx.gov
// @connect      newedgeservices.com
// @connect      arcgis.waxahachie.com
// @connect      maps.ci.sherman.tx.us
// @connect      gis.weatherfordtx.gov
// @connect      propaccess.traviscad.org
// @connect      maps.bryantx.gov
// @connect      fortworthtexas.gov
// @connect      ewebmap.ci.lubbock.tx.us
// @connect      copgisweb.ci.pearland.tx.us
// @connect      sanantonio.gov
// @connect      odessa-tx.gov
// @connect      map.coppelltx.gov
// @connect      maps.highlandvillage.org
// @connect      dfwmaps.com
// @connect      maps.cityofcarrollton.com
// @connect      emap.rowlett.com
// @connect      cloud.longviewtexas.gov
// @connect      gis.pandai.com
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
// @connect      184.12.255.122
// @connect      agdmaps.com
// @connect      berkeleywv.org
// @connect      cabellassessor.com
// @connect      harrisoncountywv.com
// @connect      kanawhacountyassessor.com
// @connect      landmarkgeospatial.com
// -- WY --
// @connect      wyo.gov
// @connect      wy.gov
// @connect      wy.us
// @connect      goshencounty.org
// @connect      laramiecounty.com
// @connect      lcwy.org
// @connect      casperwy.gov
// ==/UserScript==

/* global OL */
/* global W */
/* global GM_info */
/* global WazeWrap */

(function() {
    'use strict';

    let _dev_mode = false;

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

    let DEFAULT_STATE_PARCEL_STYLE = {
        fillOpacity: 0,
        strokeColor: '#f51',
        fontColor: '#f62'
    };

    let DEFAULT_CITY_STYLE = {
        fillOpacity: 0.3,
        fillColor: '#f65',
        strokeColor: '#f65',
        fontColor: '#f62'
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

    let DEFAULT_STATE_PT_STYLE = {
        strokeColor: '#000',
        fontColor: "#0af",
        fillColor: '#0af',
        labelYOffset: -15
    };

    let DEFAULT_MM_STYLE = {
        strokeColor: '#fff',
        fontColor: '#fff',
        fillOpacity: 0,
        labelYOffset: 10,
        pointRadius: 2,
        fontSize: 10
    };

    let _gisLayers = [

        // US
        // ************************************

        {name: 'Post Offices',
         id: 'us-post-offices',
         url: 'https://services5.arcgis.com/TBEibzxOE0dzXUyc/ArcGIS/rest/services/USPS_Plants_DUs_CD/FeatureServer/1',
         where: "FACILITY_TYPE='POST_OFF' AND Status<>'CLOSED'",
         labelHeaderFields: ['LOCALE_NAME'],
         labelFields: ['ADDRESS','CITY','STATE','ZIP_CODE'],
         labelsVisibleAtZoom: 5,
         visibleAtZoom: 2,
         state: 'US',
         style: {
             strokeColor: '#000',
             fontColor: "#f84",
             fillColor: '#f84',
             fontSize: '13',
             fontWeight: 'bold',
             labelYOffset: -20
         }},


        // Alabama
        // ************************************

        {name: 'Autauga Co - Parcels (no labels)',
         id: 'al-autauga-co-parcels',
         url: 'http://emapsplus.com/arcgis/rest/services/Alabama/AutaugaEmaps/MapServer/0',
         labelFields: [''],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Blount Co - Parcels (no labels)',
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

        {name: 'Jefferson Co - Parcels',
         id: 'al-jefferson-co-parcels',
         url: 'http://jeffcogis.jccal.org/jccarcgis/rest/services/Public/BasemapJC/MapServer/0',
         labelFields: ['ADDR_PSPR'],
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

        {name: 'Madison Co - Parcels (no labels)',
         id: 'al-madison-co-parcels',
         url: 'http://emapsplus.com/arcgis/rest/services/Alabama/MadisonEmapsDMO/MapServer/0',
         labelFields: [''],
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

        {name: 'Morgan Co - Address Points',
         id: 'al-Morgan-co-pts',
         url: 'http://al.decatur.geopowered.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/DecaturAL/DecaturAL_Layers/mapserver/3',
         labelFields: ['ST_NUMBER','ST_PREFIX','ST_NAME','ST_TYPE','ST_SUFFIX'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Morgan Co - Parcels',
         id: 'al-morgan-co-parcels',
         url: 'http://web3.kcsgis.com/kcsgis/rest/services/Morgan/Public/MapServer/118',
         labelFields: ['PropAddr1'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        // THIS SEEMS TO MATCH THE LAYER ABOVE, WITH A SLIGHT OFFSET.
        // {name: 'Morgan Co - Parcels 2',
        //  id: 'al-morgan-co-parcels-2',
        //  url: 'http://al.decatur.geopowered.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/DecaturAL/DecaturAL_PSACadastral/MapServer/1',
        //  labelFields: ['PropAddr1'],
        //  state: 'AL',
        //  style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Northport - City Parcels',
         id: 'al-northport-city-parcels',
         url: 'https://services2.arcgis.com/3u10F1chkeawsUZY/arcgis/rest/services/20170808_NorthportBoundary/FeatureServer/3',
         labelFields: ['pcliLocati'],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Shelby Co - Address Points',
         id: 'al-shelby-co-points',
         url: 'https://maps.shelbyal.com/arcgis/rest/services/ShelbyALBaseMap/MapServer/0',
         labelFields: ['Full_Add_Num','Street_Name','Street_Post_Type'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Shelby Co - Parcels (no labels)',
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

        {name: 'Tuscaloosa - City Address Points',
         id: 'al-tuscaloosa-city-pts',
         url: 'http://tuscgis.tuscaloosa-al.gov/arcgis/rest/services/ADDRESSES_WGS/MapServer/0',
         labelFields: ['PROPADDR'],
         state: 'AL',
         style: DEFAULT_PT_STYLE},

        {name: 'Tuscaloosa - City Parcels (no labels)',
         id: 'al-tuscaloosa-city-parcels',
         url: 'http://tuscgis.tuscaloosa-al.gov/arcgis/rest/services/Parcels_WGS/MapServer/0',
         labelFields: [],
         state: 'AL',
         style: DEFAULT_PARCEL_STYLE},

        // Alaska
        // ************************************

        {name: 'Highway Mile Markers',
         id: 'ak-mm',
         url: 'http://www.dot.state.ak.us/ArcGIS/rest/services/AKDOT_Mileposts/MapServer/4',
         labelFields: ['MP'],
         visibleAtZoom: 0,
         labelsVisibleAtZoom: 0,
         state: 'AK',
         style: DEFAULT_MM_STYLE},

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

        {name: 'Dillingham - City Address Points',
         id: 'ak-Dillingham-city-pts',
         url: 'https://services3.arcgis.com/gdLTz4xpy5IxwbSz/ArcGIS/rest/services/AddressesOnline20170623/FeatureServer/0',
         labelFields: ['FullStreetAddress'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Dillingham - City Parcels',
         id: 'ak-Dillingham-city-parcels',
         url: 'https://services3.arcgis.com/gdLTz4xpy5IxwbSz/ArcGIS/rest/services/ParcelsOnline20170623/FeatureServer/0',
         labelFields: ['StreetAddress'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fairbanks North Star - Address Points',
         id: 'ak-Fairbanks-North-Star-bor-pts',
         url: 'https://gis.fnsb.us/arcgis/rest/services/FNSB_PUBLIC/Valid_Address_Points_FNSB/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Fairbanks North Star - Parcels (no labels)',
         id: 'ak-Fairbanks-North-Star-bor-parcels',
         url: 'https://gis.fnsb.us/arcgis/rest/services/FNSB_PUBLIC/Parcels_FNSB/MapServer/0',
         labelFields: [],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Haines - Parcels (no labels)',
         id: 'ak-Haines-bor-parcels',
         url: 'https://services3.arcgis.com/pMlUMMROURtJLUZt/ArcGIS/rest/services/Haines_Parcels_01212018/FeatureServer/0',
         labelFields: [''],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Juneau - Parcels',
         id: 'ak-juneau-bor-parcels',
         url: 'http://epv.ci.juneau.ak.us/arcgis/rest/services/prod/unc_property_layers_2b/MapServer/6',
         labelFields: ['site_addrs'],
         visibleAtZoom: 5,
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

        {name: 'Ketchikan Gateway - Address Points',
         id: 'ak-Ketchikan-Gateway-bor-pts',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Alaska/Ketchikan/MapServer/20',
         labelFields: ['TEXT_'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Ketchikan Gateway - Parcels',
         id: 'ak-Ketchikan-Gateway-bor-parcels',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Alaska/Ketchikan/MapServer/17',
         labelFields: ['LOC_STNO','LOC_STNAME','LOC_SUFFIX','LOC_POSTDI'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kodiak Island - Address Points',
         id: 'ak-Kodiak-Island-bor-pts',
         url: 'https://services1.arcgis.com/R5BNizttyFKxRSMm/ArcGIS/rest/services/AddressPoints/FeatureServer/0',
         labelFields: ['ADDRESS'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        {name: 'Kodiak Island - Parcels',
         id: 'ak-Kodiak-Island-bor-parcels',
         url: 'https://services1.arcgis.com/R5BNizttyFKxRSMm/arcgis/rest/services/KIB_Parcels/FeatureServer/0',
         labelFields: ['STREET_NUMBER', 'STREET_NAME', 'STREET_DIRECTION'],
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

        {name: 'Matanuska-Susitna - Parcels (no labels)',
         id: 'ak-matsu-bor-parcels',
         url: 'http://maps.matsugov.us/arcgis/rest/services/Open_Data/Cadastral_Parcels/MapServer/0',
         labelFields: [],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wrangell - Parcels (no labels)',
         id: 'ak-Wrangell-bor-parcels',
         url: 'https://services7.arcgis.com/7cBSaoaaRaH5ojZy/arcgis/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Yakutat - Parcels (no labels)',
         id: 'ak-Yakutat-bor-parcels',
         url: 'https://services2.arcgis.com/gRKiTtxkoTx0gERB/ArcGIS/rest/services/ParcelsOnline20170915/FeatureServer/0',
         labelFields: [''],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Yakutat - Address Points',
         id: 'ak-Yakutat-bor-pts',
         url: 'https://services2.arcgis.com/gRKiTtxkoTx0gERB/ArcGIS/rest/services/AddressingOnline/FeatureServer/2',
         labelFields: ['AddressNumber', 'FullStreetName'],
         visibleAtZoom: 5,
         state: 'AK',
         style: DEFAULT_PT_STYLE},

        // Arizona
        // ************************************

        {name: 'Yuma Co - Parcels',
         id: 'az-yuma-co-parcels',
         url: 'http://gis.yumacountyaz.gov/ArcGIS/rest/services/YumaCounty/MapServer/128',
         labelFields: ['SITUS_ADDR'],
         state: 'AZ',
         style: DEFAULT_PARCEL_STYLE},

        // Arkansas
        // ***********************************

        {name: 'State - Address Points',
         id: 'ar-state-points',
         url: 'http://gis.arkansas.gov/arcgis/rest/services/FEATURESERVICES/Planning_Cadastre/MapServer/0',
         labelFields: ['ph_add'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'State - Parcels',
         id: 'ar-state-parcels',
         url: 'http://gis.arkansas.gov/arcgis/rest/services/FEATURESERVICES/Planning_Cadastre/MapServer/6',
         labelFields: ['ph_rd_num','ph_pre_dir','ph_rd_nam','ph_rd_typ','ph_suf_dir'],
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ashley Co - Address Points',
         id: 'ar-ashley-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Ashley_County/Vector/MapServer/38',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Ashley Co - Parcels',
         id: 'ar-ashley-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Ashley_County/Vector/MapServer/16',
         labelFields: ['Ashley.DBO.Ashley_CAMA_PRMF.Street_Number','Ashley.DBO.Ashley_CAMA_PRMF.Street_Dir','Ashley.DBO.Ashley_CAMA_PRMF.Street_Name','Ashley.DBO.Ashley_CAMA_PRMF.Street_Type','Ashley.DBO.Ashley_CAMA_PRMF.Street_Type_Suffix'],
         processLabel: function(label) { return label.replace(/^\D.*/,''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bryant - City Address Points',
         id: 'ar-bryant-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/BryantCity/Bryant_Master_Map1/MapServer/13',
         labelFields: ['ADR_NUM','ADR_NUM_SUF','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Bryant - City Parcels',
         id: 'ar-bryant-city-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/BryantCity/Bryant_Master_Map1/MapServer/69',
         labelFields: ['Saline2.DBO.SalineCo_CAMA.PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chicot Co - Address Points',
         id: 'ar-chicot-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Chicot_County/Vector/MapServer/7',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Chicot Co - Parcels',
         id: 'ar-chicot-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Chicot_County/Vector/MapServer/14',
         labelFields: ['Chicot.DBO.Chicot_CAMA.PH_ADD'],
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clarksville- City Address Points',
         id: 'ar-clarksville-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Johnson_County/Johnson_County_Vector/MapServer/8',
         labelFields: ['NewAddNum','Street_Nam'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Columbia Co - Address Points',
         id: 'ar-columbia-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Columbia_County/Vector/MapServer/9',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Columbia Co - Parcels',
         id: 'ar-columbia-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Columbia_County/Vector/MapServer/15',
         labelFields: ['PH_ADD'],
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Craighead Co - Address Points',
         id: 'ar-craighead-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Craighead/Vector/MapServer/9',
         labelFields: ['Craighead.DBO.Craighead_CAMA.PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Craighead Co - Parcels',
         id: 'ar-craighead-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Craighead/Vector/MapServer/16',
         labelFields: ['Craighead.DBO.Craighead_CAMA.PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Desha Co - Address Points',
         id: 'ar-desha-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Desha_County/Vector/MapServer/8',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Desha Co - Parcels',
         id: 'ar-desha-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Desha_County/Vector/MapServer/14',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Drew Co - Address Points',
         id: 'ar-drew-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Drew_County/Vector/MapServer/7',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Drew Co - Parcels',
         id: 'ar-drew-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Drew_County/Vector/MapServer/13',
         labelFields: ['drew.DBO.DREW_PRMF.Street_Number','drew.DBO.DREW_PRMF.Street_Dir','drew.DBO.DREW_PRMF.Street_Name','drew.DBO.DREW_PRMF.Street_Type','drew.DBO.DREW_PRMF.Street_Type_Suffix'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Faulkner Co - Address Points',
         id: 'ar-faulkner-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Faulkner_County/Vector/MapServer/0',
         labelFields: ['FULL_ADD'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Faulkner Co - Parcels',
         id: 'ar-faulkner-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Faulkner_County/Vector/MapServer/6',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grant Co - Address Points',
         id: 'ar-grant-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Grant Co - Parcels',
         id: 'ar-grant-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/23',
         labelFields: ['Grant2.DBO.PADM2.SNUM','Grant2.DBO.PADM2.SNUMS','Grant2.DBO.PADM2.SDIR','Grant2.DBO.PADM2.SSTR','Grant2.DBO.PADM2.SSTP'],
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Howard Co - Address Points',
         id: 'ar-howard-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Howard_County/Howard_Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Howard Co - Parcels',
         id: 'ar-howard-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Howard_County/Howard_Vector/MapServer/22',
         labelFields: ['Howard.DBO.HowardCama_GISOut.PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Hot Springs Village - City Address Points',
         id: 'ar-hot-springs-village-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/HSV/Vector2/MapServer/65',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Hot Springs Village - City Parcels',
         id: 'ar-hot-springs-village-city-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/HSV/Vector2/MapServer/62',
         labelFields: ['PhyAddress'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Johnson Co - Address Points',
         id: 'ar-johnson-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Johnson_County/Johnson_County_Vector/MapServer/7',
         labelFields: ['HNUM','STREET'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Johnson Co - Parcels',
         id: 'ar-johnson-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Johnson_County/Johnson_County_Vector/MapServer/14',
         labelFields: ['Johnson.DBO.Johnson_CAMA_GISOut.PH_ADD'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'ar-lincoln-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lincoln_County/VectorAssessor/MapServer/6',
         labelFields: ['ADR_NUM','NUM_SUF','FULNAM'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels',
         id: 'ar-lincoln-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lincoln_County/VectorAssessor/MapServer/13',
         labelFields: ['Street_Num','Street_Dir','Street_Nam','Street_Typ'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lonoke Co - Address Points',
         id: 'ar-lonoke-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lonoke/Lonoke_Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Lonoke Co - Parcels',
         id: 'ar-lonoke-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lonoke/Lonoke_Vector/MapServer/12',
         labelFields: ['Lonoke.DBO.PADM.SNUM','Lonoke.DBO.PADM.SDIR','Lonoke.DBO.PADM.SSTR','Lonoke.DBO.PADM.SSTP'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ouachita Co - Address Points',
         id: 'ar-ouachita-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Ouachita_County/Ouachita_Vector/MapServer/5',
         labelFields: ['adr_num','ADDR_SN','ADDR_ST'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Ouachita Co - Parcels',
         id: 'ar-ouachita-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Ouachita_County/Ouachita_Vector/MapServer/18',
         labelFields: ['Ouachita.DBO.OUACHITA_CAMA_PRMF.Street_Number','Ouachita.DBO.OUACHITA_CAMA_PRMF.Street_Dir','Ouachita.DBO.OUACHITA_CAMA_PRMF.Street_Name','Ouachita.DBO.OUACHITA_CAMA_PRMF.Street_Type','Ouachita.DBO.OUACHITA_CAMA_PRMF.Street_Type_Suffix'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pike Co - Address Points',
         id: 'ar-pike-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Pike_County/Pike_Vector/MapServer/6',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Pike Co - Parcels',
         id: 'ar-pike-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Pike_County/Pike_Vector/MapServer/15',
         labelFields: ['Pike.DBO.Pike_PADM.SNUM','Pike.DBO.Pike_PADM.SDIR','Pike.DBO.Pike_PADM.SSTR','Pike.DBO.Pike_PADM.SSTP'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Poinsett Co - Address Points',
         id: 'ar-poinsett-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Poinsett_County/Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAM','PSTR_TYPE'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Poinsett Co - Parcels',
         id: 'ar-poinsett-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Poinsett_County/Vector/MapServer/18',
         labelFields: ['Poinsett.DBO.PADM.SNUM','Poinsett.DBO.PADM.SDIR','Poinsett.DBO.PADM.SSTR','Poinsett.DBO.PADM.SSTP'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Saline Co - Address Points',
         id: 'ar-saline-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Saline_County/Vector2/MapServer/11',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Saline Co - Parcels',
         id: 'ar-saline-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Saline_County/Vector2/MapServer/23',
         labelFields: ['Saline2.DBO.SalineCo_CAMA.PH_RD_NUM','Saline2.DBO.SalineCo_CAMA.PH_PRE_DIR','Saline2.DBO.SalineCo_CAMA.PH_RD_NAM','Saline2.DBO.SalineCo_CAMA.PH_RD_TYP'],
         processLabel: function(label) { return label.replace(/^(0+\s?|\D).*/, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sheridan - City Address Points',
         id: 'ar-sheridan-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/1',
         labelFields: ['ADR_NUM','PPRE_DIR','PSTR_NAM','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Tull - City Address Points',
         id: 'ar-tull-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/2',
         labelFields: ['ADR_NUM','PSTR_FULNAM'],
         processLabel: function(label) { return label.replace(/^\D.*/, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        // California
        // ***********************************

        {name: 'Alameda Co (partial) - House #s',
         id: 'ca-Alameda-co-pts-1',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/51',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Alameda Co (partial) - House #s',
         id: 'ca-Alameda-co-pts-2',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/16',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Alameda - City House #s',
         id: 'ca-Alameda-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/1',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Albany - City House #s',
         id: 'ca-Albany-city-pts',
         url: ' http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/3',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Berkeley - City House #s',
         id: 'ca-Berkeley-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/5',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dublin - City House #s',
         id: 'ca-dublin-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/9',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emeryville - City House #s',
         id: 'ca-Emeryville-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/23',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fremont (#1) - City House #s',
         id: 'ca-Fremont-city-pts-1',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/25',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fremont (#2) - City House #s',
         id: 'ca-Fremont-city-pts-2',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/30',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Livermore - City House #s',
         id: 'ca-Livermore-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/34',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Newark / Union City - City House #s',
         id: 'ca-newark-union-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/41',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Oakland - City House #s',
         id: 'ca-oakland-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/43',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Piedmont - City House #s',
         id: 'ca-piedmont-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/45',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pleasanton - City House #s',
         id: 'ca-Pleasanton-city-pts',
         url: 'http://gis.acgov.org/arcgis/rest/services/SitStat/AddressAnnotation/MapServer/47',
         labelFields: ['TextString'],
         state: 'CA',
         style: DEFAULT_PARCEL_STYLE},

        // THIS IS AN ODD LAYER.  IT IS CLIPPED TO A RECTANGULAR REGION WITHIN THE COUNTY, SO NOT SURE YET IF IT IS "OFFICIAL".
        // {name: 'San Bernardino Co - Parcels',
        //  id: 'ca-san-bernardino-co-parcels',
        //  url: 'http://services3.geopowered.com/arcgis/rest/services/CNO/CNO_SBCOParcel/MapServer/0',
        //  labelFields: ['NUMBER','PREDIR','STREETNAME','STREETTYPE'],
        //  state: 'CA',
        //  style: DEFAULT_PARCEL_STYLE},


        // Colorado
        // ***********************************

        {name: 'Archuleta Co - Parcels',
         id: 'co-archuleta-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['SITUS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fremont Co - Address Points',
         id: 'co-fremont-co-pts',
         url: 'http://fremontgis.com/arcgis_102/rest/services/FremontCO_GIS_Layers/MapServer/160',
         labelFields: ['GL_ADR_FUL'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Fremont Co - Parcels',
         id: 'co-fremont-co-parcels',
         url: 'http://fremontgis.com/arcgis_102/rest/services/parcels/MapServer/0',
         labelFields: ['SITE_ADDR'],
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

        {name: 'District Of Columbia - Address Points',
         id: 'dc-pts',
         url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Location_WebMercator/MapServer/0',
         labelFields: ['FULLADDRESS'],
         state: 'DC',
         style: DEFAULT_PT_STYLE},

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
         url: 'https://bcgis.broward.org/arcgismaps/rest/services/PointAddresstLabels/MapServer/0',
         labelFields: ['FULL_SITE_ADDRESS'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Broward Co - Parcels',
         id: 'fl-broward-co-parcels',
         url: 'http://bcweb-adapters.bcpa.net/arcgis/rest/services/BCPA_INTERNAL_JAN18/MapServer/30',
         labelFields: ['BCPADATA.BCPA_INFO.SITUS_STREET_NUMBER'],
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

        {name: 'Clay Co - Address Points',
         id: 'fl-clay-co-pts',
         url: 'https://maps.claycountygov.com:6443/arcgis/rest/services/SiteAddresses/MapServer/0',
         labelFields: ['WholeAddress'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Clay Co - Parcels',
         id: 'fl-clay-co-parcels',
         url: 'https://maps.claycountygov.com:6443/arcgis/rest/services/Parcel/MapServer/0',
         labelFields: ['House_Number','House_Suffix','StreetName','StreetType','StreetDir'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Collier co - Address Points',
         id: 'fl-collier-co-pts',
         url: 'https://ags.colliergov.net/arcgis/rest/services/Base/Addresses/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Highlands Co - Parcels (no labels)',
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

        {name: 'Okaloosa Co - Address Points',
         id: 'fl-okaloosa-co-pts',
         url: 'http://webgis.okaloosafl.com/webgis/proxy/proxy.ashx?http://204.49.20.72/arcgis/rest/services/internet_webgis/MapServer/24',
         processLabel: function(label) { return label.replace(/\s\d{5}$/,''); },
         labelFields: ['SITE_ADDR'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Okaloosa Co - Parcels (no labels)',
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

        {name: 'Plantation - City Parcels',
         id: 'fl-plantation-city-parcels',
         url: 'http://gis.plantation.org/arcgis/rest/services/Maps/PGISv101/MapServer/7',
         labelFields: ['SiteAddress'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Polk Co - Address Points',
         id: 'fl-polk-co-pts',
         url: 'http://map.polkpa.org/proxy.ashx?http://gisapp/ArcGIS/rest/services/WebSite/E911_Site_Address_Points/MapServer/0',
         labelFields: ['PrimaryAddress'],
         state: 'FL',
         style: DEFAULT_PT_STYLE},

        {name: 'Polk Co - Parcels (no labels)',
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

        {name: 'Sarasota Co - Parcels (no labels)',
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
         where: "USE_CODE NOT IN('0900','8600','8700','8800','8900','9400') AND USE_CODE IS NOT NULL",
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

        {name: 'W Palm Beach Co - Parcels (no labels)',
         id: 'fl-wpalm-beach-co-parcels',
         url: 'http://maps.co.palm-beach.fl.us/arcgis/rest/services/Parcels/labels/MapServer/0',
         labelFields: [''],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},


        // Georgia
        // ************************************

        {name: 'Alpharetta - City Parcels',
         id: 'ga-alpharetta-city-parcels',
         url: 'http://alphagis.alpharetta.ga.us/arcgis/rest/services/ParcelsWM/MapServer/0',
         labelFields: ['AddrNumber','AddrPreDir','AddrStreet','AddrSuffix','AddrPosDir'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Brookhaven - City Address Points',
         id: 'ga-brookhaven-city-points',
         url: 'https://gis.brookhavenga.gov/arcgis/rest/services/addresses/MapServer/0',
         labelFields: ['FULL_ADDR'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Brookhaven - City Parcels (no labels)',
         id: 'ga-brookhaven-city-parcels',
         url: 'https://gis.brookhavenga.gov/arcgis/rest/services/basemap/MapServer/1',
         labelFields: ['SITEADDRESS'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        // layer not showing much of points. will try to research more.
        //{name: 'Bryan Co - Address Points',
        // id: 'ga-bryan-co-points',
        // url: 'http://bryangis.bryan-county.org/arcgis/rest/services/AddressPoints/MapServer/0',
        // labelFields: ['FULLADDR'],
        // state: 'GA',
        // style: DEFAULT_PT_STYLE},

        {name: 'Bryan Co - Parcels',
         id: 'ga-bryan-co-parcels',
         url: 'http://bryangis.bryan-county.org/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['HOUSE_NO','STDIRECT','STREET_NAM','STTYPE'],
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

        {name: 'Columbia Co - Address Points',
         id: 'ga-columbia-co-points',
         url: 'https://mapsonline.columbiacountyga.gov/arcgis/rest/services/StatePlane/MapLayers/MapServer/54',
         labelFields: ['Loc_No','Pre_Dir','Name','Street_Type','Post_Dir'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Columbia Co - Parcels',
         id: 'ga-columbia-co-parcels',
         url: 'https://mapsonline.columbiacountyga.gov/arcgis/rest/services/StatePlane/MapLayers/MapServer/65',
         labelFields: ['PhysicalAddress'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Decatur - City Address Points',
         id: 'ga-decatur-city-points',
         url: 'http://gis.interdev.com/arcgis/rest/services/DecaturServices/AddressPoints_Published/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Dunwoody - City Address Points',
         id: 'ga-dunwoody-city-points',
         url: 'https://dungis.dunwoodyga.gov/arcgis/rest/services/Parcel/MapServer/1',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Dunwoody - City Parcels',
         id: 'ga-dunwoody-city-parcels',
         url: 'https://dungis.dunwoodyga.gov/arcgis/rest/services/Parcel/MapServer/0',
         labelFields: ['StNumber','PreDir','StName','StType','PostDir'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        // multiple parcels layers available. this one has most recent date but some did not have any dates on them.
        {name: 'Effingham Co - Parcels',
         id: 'ga-effingham-co-parcels',
         url: 'https://services.arcgis.com/9scQWTgPOi3GxJRr/ArcGIS/rest/services/2016Parcels/FeatureServer/0',
         labelFields: ['StreetAdd'],
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
         url: 'https://gis.fultoncountyga.gov/arcgis/rest/services/MapServices/PropertyMapViewer/MapServer/12',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Gwinnett Co - Parcels (no labels)',
         id: 'ga-gwinnett-co-parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/GwinnettGa/GwinnettGaDynamic2/MapServer/0',
         labelFields: ['PIN'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lithonia - City Address Points',
         id: 'ga-lithonia-city-points',
         url: 'https://arcgis.atlantaregional.com/arcgis/rest/services/CityofLithonia/MapServer/0',
         labelFields: ['SitusAddress'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Paulding Co - Parcels (no labels)',
         id: 'ga-paulding-co-parcels',
         url: 'https://arcgis4.roktech.net/arcgis/rest/services/Paulding/GoMaps4/MapServer/36',
         labelFields: [''],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rome - City Parcels',
         id: 'ga-rome-city-parcels',
         url: 'https://gis01.romega.us/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['LOCATION'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sandy Springs - City Address Points',
         id: 'ga-sandy-springs-city-points',
         url: 'https://gis.sandyspringsga.gov/arcgis/rest/services/Basemap/CityMap/MapServer/1',
         labelFields: ['Full_Add'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Sandy Springs - City Parcels',
         id: 'ga-sandy-springs-city-parcels',
         url: 'https://gis.sandyspringsga.gov/arcgis/rest/services/Basemap/CityMap/MapServer/107',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Savannah - City Parcels',
         id: 'ga-savannah-city-parcels',
         url: 'http://sagiscloud.thempc.org/arcgis/rest/services/sagis_org/SAGIS1/MapServer/24',
         labelFields: ['PROP_ADDRESS'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Union - City Parcels',
         id: 'ga-union-city-parcels',
         url: 'https://arcgis.atlantaregional.com/arcgis/rest/services/CityOfUnionCity/MapServer/1',
         labelFields: ['Address'],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Whitfield Co - Address Points',
         id: 'ga-whitfield-co-points',
         url: 'http://gis.whitfieldcountyga.com/arcgis/rest/services/Addressing/MapServer/0',
         labelFields: ['FULL_ADDRE'],
         state: 'GA',
         style: DEFAULT_PT_STYLE},

        {name: 'Whitfield Co - Parcels (no labels)',
         id: 'ga-whitfield-co-parcels',
         url: 'http://gis.whitfieldcountyga.com/arcgis/rest/services/Addressing/MapServer/9',
         labelFields: [''],
         state: 'GA',
         style: DEFAULT_PARCEL_STYLE},


        // Hawaii
        // ************************************

        // County GIS's are Qpublic.net GIS system, layers data not available. found statewide parcel layer, but no address label. Label qpub_link does have a direct
        // link to Qpublic data to open parcel information on new window ( for future option if possible ).
        {name: 'State - Parcels (no labels)',
         id: 'hi-hawaii-parcels',
         url: 'http://geodata.hawaii.gov/arcgis/rest/services/EnerGIS/EnerGIS_table/MapServer/0',
         labelFields: [''],
         state: 'HI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Honolulu Co - Address Points',
         id: 'hi-honolulu-co-pts',
         url: 'http://webserverholis.honolulugis.org/arcgis/rest/services/Public/Cadastral/MapServer/3',
         labelFields: ['HOUSENUMBER','HOUSESUFFX','STREETNAME','SUITE'],
         state: 'HI',
         style: DEFAULT_PT_STYLE},

        {name: 'Honolulu Co - Parcels (no labels)',
         id: 'hi-honolulu-co-parcels',
         url: 'http://webserverholis.honolulugis.org/arcgis/rest/services/Public/Cadastral/MapServer/1',
         labelFields: [''],
         state: 'HI',
         style: DEFAULT_PARCEL_STYLE},


        // Idaho
        // ************************************

        {name: 'Ada Co - Address Points',
         id: 'id-ada-co-pts',
         url: 'http://www.adacountyassessor.org/arcgis/rest/services/External/ExternalMap/MapServer/16',
         labelFields: ['AddNum','StPreDir','StName','StSuffix','StPostDir'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Ada Co - Parcels',
         id: 'id-ada-co-parcels',
         url: 'http://www.adacountyassessor.org/arcgis/rest/services/External/ExternalMap/MapServer/24',
         labelFields: ['PROP_ADD'],
         processLabel: function(label) { return label.replace(/,.*/,''); },
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bannock Co - Parcels',
         id: 'id-bannock-co-parcels',
         url: 'https://services6.arcgis.com/jEWFLsriO24ArCMH/ArcGIS/rest/services/parcels/FeatureServer/0',
         labelFields: ['HOUSE_NO','STREET','DIRECTION'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bingham Co - Address Points',
         id: 'id-bingham-co-pts',
         url: 'https://www.co.bingham.id.us/arcgis/rest/services/Basemaps/Address_Points/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Bingham Co - Parcels',
         id: 'id-bingham-co-parcels',
         url: 'https://www.co.bingham.id.us/arcgis/rest/services/Public/Bingham_County_Parcel_Map_Public/MapServer/2',
         labelFields: ['St_Num','St_Prefix','St_Name','St_Suffx','St_Post_Di'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Blaine Co - Address Points',
         id: 'id-blaine-co-pts',
         url: 'http://maps.co.blaine.id.us/bcgis/rest/services/ParcelInfo/MapServer/3',
         labelFields: ['pm_prop_ad'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Blaine Co - Parcels',
         id: 'id-blaine-co-parcels',
         url: 'http://maps.co.blaine.id.us/bcgis/rest/services/ParcelInfo/MapServer/5',
         labelFields: ['prop_adrs1'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        // Parcel Layer not showing, but not console errors.. ArcGIS map shows Can't add layer. (Shape field missing.) if I add layer ID10 but loads and show if adding
        // all the layers in the MapServer folder ID 0 to 17.
        //{name: 'Ketchum - City Parcels TEST',
        // id: 'id-ketchum-city-parcels',
        // url: 'http://maps.co.blaine.id.us/bcgis/rest/services/AGSKetchum/MapServer/1',
        // labelFields: ['prop_adrs1'],
        // state: 'ID',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'Boise - City Address Points',
         id: 'id-boise-city-pts',
         url: 'http://gismaps.cityofboise.org/arcgis/rest/services/BoiseMaps/PublicProperty/MapServer/6',
         labelFields: ['AddNum','StPreDir','StName','StSuffix','StPostDir'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Boise - City Parcels',
         id: 'id-boise-city-parcels',
         url: 'http://gismaps.cityofboise.org/arcgis/rest/services/BoiseMaps/PublicProperty/MapServer/9',
         labelFields: ['ADDRESS'],
         layerOffset: {x: -3, y: 0},
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bonner Co - Address Points',
         id: 'id-booner-co-pts',
         url: 'http://maps.bonnercounty.us/bcgis/rest/services/External/STRUC_PTS_LN/MapServer/0',
         labelFields: ['FINAL_ADD','PRE_DIR','ST_NAME','ST_TYPE','POST_DIR'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Bonner Co - Parcels',
         id: 'id-booner-co-parcels',
         url: 'http://maps.bonnercounty.us/bcgis/rest/services/External/CADAS_POLY/MapServer/1',
         labelFields: ['PropStr'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        // Layer not showing , console error.  Arcgis map showing layer
        {name: 'Bonneville Co - Address Points',
         id: 'id-booneville-co-pts',
         url: 'http://maps.co.bonneville.id.us/arcgis/rest/services/Address_Points/MapServer/0',
         labelFields: ['Address'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Bonneville Co - Parcels',
         id: 'id-booneville-co-parcels',
         url: 'http://maps.co.bonneville.id.us/arcgis/rest/services/WebMapApp/MapServer/0',
         labelFields: ['prop_street'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boundary Co - Address Points',
         id: 'id-boundary-co-pts',
         url: 'https://services5.arcgis.com/ZopoLvPkBp5W7W8U/ArcGIS/rest/services/1_publishToArcGisOnline_author_roads/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Camas Co - Address Points',
         id: 'id-camas-co-pts',
         url: 'https://gis2.idaho.gov/arcgis/rest/services/ADM/Structures/MapServer/0',
         labelFields: ['ADDNUM'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Camas Co - Parcels (no labels)',
         id: 'id-camas-co-parcels',
         url: 'https://gis2.idaho.gov/arcgis/rest/services/ADM/Parcels/MapServer/5',
         labelFields: [''],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Canyon Co - Address Points',
         id: 'id-canyon-co-pts',
         url: 'http://gis.canyonco.org:6080/arcgis/rest/services/cc/Address_Points/MapServer/0',
         labelFields: ['SiteNum','Predir','SiteStreet','StreetType','Postdir'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Canyon Co - Parcels',
         id: 'id-canyon-co-parcels',
         url: 'http://gis.canyonco.org:6080/arcgis/rest/services/cc/Taxparcels/MapServer/0',
         labelFields: ['SiteNum','Predir','SiteStreet','StreetType','Postdir'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Caribou Co - Addr Points 2014',
         id: 'id-caribou-co-pts',
         url: 'https://services2.arcgis.com/zPp6uY3zIswPu2kP/arcgis/rest/services/Address_2014/FeatureServer/0',
         labelFields: ['Address'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Caribou Co - Parcels (no labels)',
         id: 'id-caribou-co-parcels',
         url: 'https://services2.arcgis.com/zPp6uY3zIswPu2kP/arcgis/rest/services/Parcel/FeatureServer/0',
         labelFields: [''],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clearwater Co - Address Points',
         id: 'id-clearwater-co-pts',
         url: 'http://gis.clearwatercounty.org/arcgis/rest/services/County/MapServer/1',
         labelFields: ['HOUSE_NUMB','ADDRESS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Clearwater Co - Parcels',
         id: 'id-clearwater-co-parcels',
         url: 'http://gis.clearwatercounty.org/arcgis/rest/services/Operational/MapServer/0',
         labelFields: [''],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Address Points',
         id: 'id-jefferson-co-pts',
         url: 'http://maps.co.jefferson.id.us/arcgis/rest/services/Transportation/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'id-jefferson-co-parcels',
         url: 'http://maps.co.jefferson.id.us/arcgis/rest/services/Cadastre/MapServer/12',
         labelFields: ['PS_PROP_AD'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kootenai Co - Address Points',
         id: 'id-kootenai-co-pts',
         url: 'http://kcearth.kcgov.us/ws/rest/services/KC_Dynamic_Layers_KE/MapServer/0',
         labelFields: ['HOUSE_NUM','PRE_DIR','ST_NAME','ST_TYPE'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Kootenai Co - Parcels',
         id: 'id-kootenai-co-parcels',
         url: 'http://kcearth.kcgov.us/ws/rest/services/KC_Dynamic_Layers_KE/MapServer/11',
         labelFields: ['Loc_Addr'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Latah Co - Address Points',
         id: 'id-latah-co-pts',
         url: 'http://gis.latah.id.us/arcgis/rest/services/General/MapServer/11',
         labelFields: ['FULLADDRSS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Latah Co - Parcels',
         id: 'id-latah-co-parcels',
         url: 'http://gis.latah.id.us/arcgis/rest/services/Appraiser_Data/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Madidon Co - Addr Points',
         id: 'id-madison-co-pts',
         url: 'http://jessie.rexburg.org/mrgis/rest/services/Data/Addresses/MapServer/0',
         labelFields: ['AddressLabel'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Madison Co - Proposed Addr Points',
         id: 'id-madison-co-pts2',
         url: 'http://jessie.rexburg.org/mrgis/rest/services/Data/Addresses/MapServer/1',
         labelFields: ['AddressLabel'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Madison Co - Parcels',
         id: 'id-madison-co-parcels',
         url: 'http://jessie.rexburg.org/mrgis/rest/services/Data/Parcels/MapServer/0',
         labelFields: ['SITE_ADD'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Nez Perce Co - Address Points',
         id: 'id-nez-perce-co-pts',
         url: 'http://gis.co.nezperce.id.us/gis/rest/services/Public/PropertyMap/MapServer/0',
         labelFields: ['FULLADDRESS'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Nez Perce Co - Parcels',
         id: 'id-nez-perce-co-parcels',
         url: 'http://gis.co.nezperce.id.us/gis/rest/services/NPCGIS/npc_cadastral/MapServer/0',
         labelFields: ['NPC_CADASTRAL.DBO.PARCEL_BASEMAP.PM_PROP_AD'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Teton Co - Address Points',
         id: 'id-teton-co-pts',
         url: 'http://gisserver1.co.teton.id.us/arcgis/rest/services/PARCEL_ADDRESS_SEARCH/MapServer/0',
         labelFields: ['LABELNAME'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Teton Co - Parcels',
         id: 'id-teton-co-parcels',
         url: 'http://gisserver1.co.teton.id.us/arcgis/rest/services/PARCEL_ADDRESS_SEARCH/MapServer/5',
         labelFields: ['Physical_Address'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Valley Co - Address Points',
         id: 'id-valley-co-pts',
         url: 'https://services6.arcgis.com/ikurHvtarxfN6u3u/ArcGIS/rest/services/Address_Collector/FeatureServer/0',
         labelFields: ['DLVRY_ADD'],
         state: 'ID',
         style: DEFAULT_PT_STYLE},

        {name: 'Valley Co - Parcels',
         id: 'id-valley-co-parcels',
         url: 'https://services6.arcgis.com/ikurHvtarxfN6u3u/ArcGIS/rest/services/Parcel_Master2/FeatureServer/0',
         labelFields: ['SitusAddre'],
         state: 'ID',
         style: DEFAULT_PARCEL_STYLE},


        // Illinois
        // ************************************

        {name: 'Cook Co - Parcels',
         id: 'il-cook-co-parcels',
         url: 'https://gis1.cookcountyil.gov/arcgis/rest/services/cookVwrDynmc/MapServer/44',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cook Co - Address Points',
         id: 'il-cook-co-pts',
         url: 'https://gis1.cookcountyil.gov/arcgis/rest/services/cookVwrDynmc/MapServer/62',
         labelFields: ['CMPADDABRV'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'DuPage Co - Parcels',
         id: 'il-dupage-co-parcels',
         url: 'http://gis.dupageco.org/arcgis/rest/services/DuPage_County_IL/ParcelsWithRealEstateCC/MapServer/0',
         labelFields: ['PROPADDRL1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Address Points',
         id: 'il-lake-co-pts',
         url: 'https://maps.lakecountyil.gov/arcgis/rest/services/GISMapping/WABAddress/MapServer/0',
         labelFields: ['FRG_PREDIR','FRG_HOUSE','FRG_STREET','FRG_SUFFIX'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Peoria Co - Address Points',
         id: 'il-peoria-co-pts',
         url: 'https://services.arcgis.com/iPiPjILCMYxPZWTc/arcgis/rest/services/Addresses/FeatureServer/0',
         labelFields: ['CombinedAddress'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Peoria Co - Parcels (no labels)',
         id: 'il-peoria-co-parcels-2',
         url: 'https://services.arcgis.com/iPiPjILCMYxPZWTc/ArcGIS/rest/services/Tax_Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        // 2018-03-15 (mapomatic) This service seems to have stopped working for some reason.
        // {name: 'Peoria Co - Parcels',
        //  id: 'il-peoria-co-parcels',
        //  url: 'https://gis.peoriacounty.org/arcgis/rest/services/DP/LandRecords/MapServer/27',
        //  labelFields: ['prop_street'],
        //  state: 'IL',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Clair Co - Parcels',
         id: 'il-stclair-co-parcels',
         url: 'http://publicmap.co.st-clair.il.us/gissvr7/rest/services/parcel_map_data/MapServer/29',
         labelFields: ['SITEADR1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Will Co - Parcels',
         id: 'il-will-co-parcels',
         url: 'http://apps.willcogis.org/arcgis/rest/services/BasemapLayers/ParcelsLY_Dynamic/MapServer/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Will Co - Address Points',
         id: 'il-will-co-pts',
         url: 'http://apps.willcogis.org/arcgis/rest/services/BasemapLayers/AddressPoints/MapServer/0',
         labelFields: ['gisedit.DBO.Address_Points.HOUSENUMBE','gisedit.DBO.Address_Points.PREFIXDIRE','gisedit.DBO.Address_Points.STREETNAME','gisedit.DBO.Address_Points.SUFFIXTYPE'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},


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

        {name: 'Adair Co - Parcels (no labels)',
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

        {name: 'Clay Co - Parcels (no labels)',
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

        {name: 'Dallas Co - Parcels (no labels)',
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

        {name: 'Des Moines - City Parcels (no labels)',
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

        {name: 'W Des Moines - City Parcels (no labels)',
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

        {name: 'Greene Co - Parcels (no labels)',
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

        {name: 'Mitchell Co - Parcels (no labels)',
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

        {name: 'Cowley Co - Parcels (no labels)',
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

        {name: 'Franklin Co- Address Points',
         id: 'ks-franklin-co-Pts',
         url: 'https://services2.integritygis.com/arcgis/rest/services/Public/Ottawa_TylerTech/MapServer/0',
         labelFields: ['HouseNum','Street'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'ks-franklin-co-Parcels',
         url: 'https://services2.integritygis.com/arcgis/rest/services/Public/Ottawa_TylerTech/MapServer/1',
         labelFields: ['PropertyAd'],
         processLabel: function(label) { return label.replace(/,.*/,'').replace(/^0+\s/,''); },
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

        {name: 'Harvey Co - Parcels (no labels)',
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

        {name: 'Jefferson Co - Parcels (no labels)',
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

        {name: 'Pottawatomie Co - Parcels (no labels)',
         id: 'ks-pottawatomie-co-Parcels',
         url: 'http://www2.pottcounty.org/arcgis2/rest/services/ParcelsAll/MapServer/0',
         labelFields: [''],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Riley Co - Address Points',
         id: 'ks-riley-co-pts',
         url: 'https://gis.rileycountyks.gov/arcgis/rest/services/GISWebsiteDataV2_3_2/MapServer/77',
         labelFields: ['FULLADDR'],
         state: 'KS',
         style: DEFAULT_PT_STYLE},

        {name: 'Riley Co - Parcels',
         id: 'ks-riley-co-Parcels',
         url: 'https://gis.rileycountyks.gov/arcgis/rest/services/BasemapV2_1/MapServer/17',
         labelFields: ['Property_A'],
         processLabel: function(label) { return label.replace(/,.*/,''); },
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

        {name: 'Summer Co - Parcels (no labels)',
         id: 'ks-summer-co-Parcels',
         url: 'https://gis.thomsonreuters.com/arcgis/rest/services/SumnerKs/SumnerKsDynamic/MapServer/0',
         labelFields: [],
         state: 'KS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wyandotte Co - Parcels (no labels)',
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

        {name: 'State Road - Mile Markers',
         id: 'ky-state-road-mm',
         url: 'http://maps.kytc.ky.gov/arcgis/rest/services/BaseMap/PointReference/MapServer/7',
         where: "MP_LABEL NOT LIKE '%.%'",
         labelFields: ['MP_LABEL'],
         visibleAtZoom: 1,
         labelsVisibleAtZoom: 1,
         state: 'KY',
         style: DEFAULT_MM_STYLE},

        {name: 'Local Road - Mile Markers',
         id: 'ky-local-road-mm',
         url: 'http://maps.kytc.ky.gov/arcgis/rest/services/BaseMap/PointReference/MapServer/8',
         where: "MP_LABEL NOT LIKE '%.%'",
         labelFields: ['MP_LABEL'],
         visibleAtZoom: 1,
         labelsVisibleAtZoom: 1,
         state: 'KY',
         style: DEFAULT_MM_STYLE},

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


        // Louisiana
        // ************************************

        {name: 'Assumption Parish - Address points',
         id: 'la-assumption-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Assumption_Services/MapServer/27',
         labelFields: ['ADNUMCOMP','STCOMP'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Assumption Parish - Parcels',
         id: 'la-assumption-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Assumption_Services/MapServer/26',
         labelFields: ['Address_Number','Street_Name'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Avoyelles Parish - Address Points',
         id: 'la-avoyelles-parish-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Avoyelles_Parish/Vector/MapServer/1',
         labelFields: ['Address'],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Avoyelles Parish - Parcels',
         id: 'la-avoyelles-parish-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Avoyelles_Parish/Vector/MapServer/6',
         labelFields: ['Avoyelles.DBO.Parcel_CAMA_01182018.Address_Number','Avoyelles.DBO.Parcel_CAMA_01182018.Street_Name'],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Avoyelles Parish - Parcels 2',
         id: 'la-avoyelles-parish-parcels-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Avoyelles_Services/MapServer/10',
         labelFields: ['Address'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Beauregard Parish - Parcels',
         id: 'la-beauregard-parish-parcels-and-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Beauregard_Services/MapServer/12',
         labelFields: ['Address_Nu','Street_Dir', 'Street_Nam'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Catahoula Parish - Address Points',
         id: 'la-catahoula-parish-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Catahoula_Parish/Vector/MapServer/5',
         labelFields: ['New_Num_1','Apt_Lot_Ste','New_St_Rd_Name'],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Catahoula Parish - Parcels',
         id: 'la-catahoula-parish-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Catahoula_Parish/Vector/MapServer/14',
         labelFields: ['Catahoula.DBO.Parcels_09012016.Phy_Address'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Catahoula Parish - Parcels 2',
         id: 'la-catahoula-parish-parcels-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Catahoula_Services/MapServer/1',
         labelFields: ['par_address'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Claiborne Parish - Address Points',
         id: 'la-claiborne-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Claiborne_Services/MapServer/0',
         labelFields: ['FULL_ADD'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Claiborne Parish - Parcels',
         id: 'la-claiborne-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Claiborne_Services/MapServer/2',
         labelFields: ['ADDRESS_NU','STREET_DIR','STREET_NAM'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Concordia Parish - Address Points',
         id: 'la-concordia-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Concordia_Service/MapServer/0',
         labelFields: ['ADDRESS'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Concordia Parish - Parcels',
         id: 'la-concordia-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Concordia_Service/MapServer/4',
         labelFields: ['Address_Number','Street_Direction','Street_Name'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Covington - City Parcels 1',
         id: 'la-covington-city-parcels-1',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Covington_Services/MapServer/2',
         labelFields: ['prop_number','prop_street'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Covington - City Parcels 2',
         id: 'la-covington-city-parcels-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Covington_Services/MapServer/3',
         labelFields: ['COMP_ADD'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'DeSoto Parish - Address Points',
         id: 'la-desoto-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/DeSoto_Services/MapServer/1',
         labelFields: ['ADD_NUM','STREET'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'DeSoto Parish - Parcels',
         id: 'la-desoto-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/DeSoto_Services/MapServer/8',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'East BR Parish - Address Points',
         id: 'la-east-br-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/EBR_Assessor/MapServer/1',
         labelFields: ['ADDRESS_NU','FULL_ADDRESS'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'East BR Parish - Parcels',
         id: 'la-east-br-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/EBR_Assessor/MapServer/10',
         labelFields: ['PHYSADD'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Parish - Address Points',
         id: 'la-franklin-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Franklin_Services/MapServer/0',
         labelFields: ['Address','Street_Nam','Type'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Franklin Parish - Parcels',
         id: 'la-franklin-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Franklin_Services/MapServer/8',
         labelFields: ['Address_Nu','Street_Nam'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Gretna - City Address Points',
         id: 'la-gretna-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Gretna_Services_Private/MapServer/1',
         labelFields: ['ADDRESS','STREET'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Gretna - City Parcels',
         id: 'la-gretna-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Gretna_Services_Private/MapServer/9',
         labelFields: ['ParcelAddr'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Iberia Parish - Parcels',
         id: 'la-iberia-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Iberia_Parcels/MapServer/3',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Iberville Parish - Address Points',
         id: 'la-iberville-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Iberville_Services/MapServer/10',
         labelFields: ['STRNUM','STREET','STR_TYPE'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Iberville Parish - Parcels',
         id: 'la-iberville-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Iberville_Services/MapServer/3',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Parish - Address Points',
         id: 'la-jefferson-parish-pts',
         url: 'http://webmap.jeffparish.net/arcgis/rest/services/CODE/Code_Enforcement/MapServer/5',
         labelFields: ['ADDRESS', 'STREET', 'SUITE'],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Parish - Address Points 2',
         id: 'la-jefferson-parish-points-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Jefferson_Assessor/MapServer/4',
         labelFields: ['ADDRESS','STREET'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Parish - Parcels (no labels)',
         id: 'la-jefferson-parish-parcels',
         url: 'http://webmap.jeffparish.net/arcgis/rest/services/CODE/Code_Enforcement/MapServer/12',
         labelFields: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Parish - Parcels 2',
         id: 'la-jefferson-parish-parcels-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Jefferson_Assessor/MapServer/12',
         labelFields: ['par_address'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kenner - City Address Points',
         id: 'la-kenner-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Kenner_Services/MapServer/1',
         labelFields: ['ADDRESS','STREET'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Kenner - City Parcels',
         id: 'la-kenner-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Kenner_Services/MapServer/9',
         labelFields: ['PAR_ADDRES'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lafourche Parish - Address Points',
         id: 'la-lafourche-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LaFourche_Services/MapServer/5',
         labelFields: ['ADD_COMP'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Lafourche Parish - Parcels',
         id: 'la-lafourche-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LaFourche_Services/MapServer/3',
         labelFields: ['par_addres'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'LaSalle Parish - Address Points',
         id: 'la-lasalle-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LaSalle_Services/MapServer/1',
         labelFields: ['NEWADDRESS'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'LaSalle Parish - Parcels',
         id: 'la-lasalle-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LaSalle_Services/MapServer/7',
         labelFields: ['Address_Number','Street_Direction','Street_Name'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Livingston Parish - Parcels',
         id: 'la-livingston-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Livingston_Services/MapServer/8',
         labelFields: ['Par_Address'],
         processLabel: function(label) { return label.replace(/^~/,''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mandeville - City Address Points',
         id: 'la-mandeville-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Mandeville_Services/MapServer/0',
         labelFields: ['FULL_ADD'],
         where: [],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Mandeville - City Parcels',
         id: 'la-mandeville-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Mandeville_Services/MapServer/4',
         labelFields: ['NUM_ER','DIRECTION','STR_NAME','STR_TYPE','STR_SFFX'],
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Minden - City Address Points',
         id: 'la-minden-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Minden_Parcels/MapServer/0',
         labelFields: ['FULLADD'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Minden - City Parcels',
         id: 'la-minden-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Minden_Parcels/MapServer/8',
         labelFields: ['Address_Nu','Street_Nam'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Natchitoches Parish - Parcels',
         id: 'la-natchitoches-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Natchitoches_Services/MapServer/15',
         labelFields: ['Address_Number','Street_Direction','Street_Name'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Iberia - City Address Points',
         id: 'la-new-iberia-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/NewIberia_Services/MapServer/14',
         labelFields: ['Address'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'New Iberia - City Parcels',
         id: 'la-new-iberia-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/NewIberia_Services/MapServer/17',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Orleans - City Parcels',
         id: 'la-new-orleans-city-parcels',
         url: 'https://gis.nola.gov/arcgis/rest/services/GovernmentServices/PlanningServices/MapServer/1',
         labelFields: ['SITUS_NUM','SITUS_DIR','SITUS_STREET','SITUS_TYPE'],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Red River Parish - Address Points',
         id: 'la-red-river-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/RedRiver_Services/MapServer/1',
         labelFields: ['ADDRESS'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Red River Parish - Parcels',
         id: 'la-red-river-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/RedRiver_Services/MapServer/11',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St Charles Parish - Address Points',
         id: 'la-st-charles-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StCharles_Services/MapServer/0',
         labelFields: ['Address'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'St Charles Parish - Parcels',
         id: 'la-st-charles-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StCharles_Services/MapServer/5',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St John the Baptist Parish - Address Points',
         id: 'la-st-john-the-baptist-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StJohn_Services/MapServer/3',
         labelFields: ['STR_NUM','PRE_DIR','STR_NAME','STR_TYPE','POST_DIR'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'St John the Baptist Parish - Parcels',
         id: 'la-st-john-the-baptist-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StJohn_Services/MapServer/19',
         labelFields: ['PAR_ADDR','PAR_STNM'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St Martin Parish - Parcels',
         id: 'la-st-martin-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StMartin_Services/MapServer/15',
         labelFields: ['HOUSE_NO','ST_DIR','STREET_NAM','ST_SUFFIX'],
         processLabel: function(label) { return label.replace(/^0+\s?/,''); },
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St Mary Parish - Parcels',
         id: 'la-st-mary-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StMary_Services/MapServer/9',
         labelFields: ['ADDRESS_NUMBER','STREET_DIRECTION','STREET_NAME'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Terrebonne Parish - Address Points',
         id: 'la-terrebonne-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Terrebonne_Service/MapServer/0',
         labelFields: ['MUN_NO','DIR','STREET','DESIGNATIO'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Terrebonne Parish - Parcels',
         id: 'la-terrebonne-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Terrebonne_Service/MapServer/10',
         labelFields: ['Address_Nu','Street_Nam'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Vernon Parish - Parcels',
         id: 'la-vernon-parish-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Vernon_Parish/Vernon_Vector/MapServer/19',
         labelFields: ['Vernon.DBO.Vernon_CAMA.Address_Number','Vernon.DBO.Vernon_CAMA.Street_Name'],
   //      processLabel: function(label) { return label.replace(/^(0+\s.*|\D+)/,''); },
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Parish - Parcels',
         id: 'la-washington-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Washington_Services/MapServer/14',
         labelFields: ['PHYSICAL_A','PHYSICAL_S'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Webster Parish - Address Points',
         id: 'la-webster-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Webster_Parcels/MapServer/0',
         labelFields: ['FULLADD'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'Webster Parish - Parcels',
         id: 'la-webster-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Webster_Parcels/MapServer/10',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'West Feliciana Parish - Address Points',
         id: 'la-west-feliciana-parish-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/WestFeliciana_Services/MapServer/0',
         labelFields: ['FULLADDRES'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PT_STYLE},

        {name: 'West Feliciana Parish - Parcels',
         id: 'la-west-feliciana-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/WestFeliciana_Services/MapServer/6',
         labelFields: ['Address_Nu','Street_Dir','Street_Nam'],
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Allegany Co - Parcels',
         id: 'md-allegany-county-parcels',
         url: 'http://alleganygis.allconet.org/allcogis/rest/services/Parcels/MapServer/0',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Allegany Co - Address Points',
         id: 'md-allegany-county-points',
         url: 'http://alleganygis.allconet.org/allcogis/rest/services/AddressPoints/MapServer/0',
         labelFields: ['addrnum','fullname'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Anne Arundel Co - Parcels',
         id: 'md-anne-arundel-county-parcels',
         url: 'http://gis-world3.aacounty.org/arcgis/rest/services/Public/MyAA/MapServer/7',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Anne Arundel Co - Address Points',
         id: 'md-anne-arundel-county-points',
         url: 'http://gis-world3.aacounty.org/arcgis/rest/services/Public/MyAA/MapServer/0',
         labelFields: ['ST_NUMBER','ST_NUMSUFF','ST_PREFIXD','ST_NAME','ST_TYPE','ST_SUFFIXD'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Carroll Co - Parcels',
         id: 'md-carroll-county-parcels',
         url: 'https://services.arcgis.com/Uf0DiYpD9NOFO5YH/ArcGIS/rest/services/Parcels_CarrollCounty/FeatureServer/0',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carroll Co - Address Points',
         id: 'md-carroll-county-points',
         url: 'https://services.arcgis.com/Uf0DiYpD9NOFO5YH/arcgis/rest/services/AddressPoints_CarrollCounty/FeatureServer/0',
         labelFields: ['Full_Addre'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Cecil Co - Parcels',
         id: 'md-cecil-county-parcels',
         url: 'https://cecilmaps.ccgov.org/arcgis/rest/services/ConsolidatedWebService/MapServer/60',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cecil Co - Address Points',
         id: 'md-cecil-county-points',
         url: 'https://cecilmaps.ccgov.org/arcgis/rest/services/ConsolidatedWebService/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Frederick Co - Parcels',
         id: 'md-frederick-county-parcels',
         url: 'https://maps.frederickcountymd.gov/arcgis/rest/services/Planning/Parcels/MapServer/0',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Frederick Co - Address Points',
         id: 'md-frederick-county-points',
         url: 'https://maps.frederickcountymd.gov/arcgis/rest/services/Planning/AddressLabels/MapServer/1',
         labelFields: ['NUM_FULL','ST_FULL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Garrett Co - Address Points',
         id: 'md-garrett-county-points',
         url: 'https://maps.garrettcounty.org/arcweb/rest/services/P_and_Z/Parcels_and_Zoning/MapServer/2',
         labelFields: ['STRUCTURE_NUMBER','STRUCTURE_NUMBER_SUFFIX','PREFIX_DIRECTIONAL','STREET_NAME','STREET_TYPE','SUFFIX_DIRECTIONAL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Montgomery Co - Parcels',
         id: 'md-montgomery-county-parcels',
         url: 'http://gis4.montgomerycountymd.gov/arcgis/rest/services/general/property/MapServer/0',
         labelFields: [''],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Structures',
         id: 'md-montgomery-county-structures',
         url: 'https://gis3.montgomerycountymd.gov/arcgis/rest/services/GDX/buildings/MapServer/0',
         labelFields: ['ADDRNUM','PRE_DIR','STREET_NAME','STREET_TYPE'],
         state: 'MD',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Prince George\'s Co - Parcels',
         id: 'md-prince-george-county-parcels',
         url: 'http://gis.pgatlas.com/pgatlas/rest/services/Administrative/MapServer/69',
         labelFields: [''],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Prince George\'s Co - Address Points',
         id: 'md-prince-george-county-points',
         url: 'http://gis.pgatlas.com/pgatlas/rest/services/Administrative/MapServer/0',
         labelFields: ['COMPLETE_ADDRESS_NUMBER','COMPLETE_STREET_NAME'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Queene Anne\'s Co - Parcels',
         id: 'md-queen-anne-county-parcels',
         url: 'https://gis.qac.org/arcgis/rest/services/QAC_PUBLIC/QAC_Basemap/MapServer/3',
         labelFields: [''],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Queene Anne\'s Co - Address Points',
         id: 'md-queen-anne-county-points',
         url: 'https://gis.qac.org/arcgis/rest/services/QAC_PUBLIC/QAC_Basemap/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Mary\'s Co - Parcels',
         id: 'md-stmary-county-parcels',
         url: 'http://gtg.smcg.co.saint-marys.md.us/arcgis/rest/services/NewMaps/ZoningMap/MapServer/1',
         labelFields: [],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Mary\'s Co - Address Points',
         id: 'md-stmary-county-points',
         url: 'http://gtg.smcg.co.saint-marys.md.us/arcgis/rest/services/NewMaps/ZoningMap/MapServer/0',
         labelFields: ['STREET_ADD','STREET_APA'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Talbot Co - Parcels',
         id: 'md-talbot-county-parcels',
         url: 'http://maps.talbgov.org/arcgis/rest/services/TalbotWebMaps/PublicLandUse/MapServer/0',
         labelFields: [''],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Talbot Co - Address Points',
         id: 'md-talbot-county-points',
         url: 'http://maps.talbgov.org/arcgis/rest/services/TalbotWebMaps/PublicLandUse/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Washington Co - Parcels',
         id: 'md-washington-county-parcels',
         url: 'https://maps.washco-md.net/arcgis/rest/services/Parcel/Parcels/MapServer/0',
         labelFields: [''],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Address Points',
         id: 'md-washington-county-points',
         url: 'https://maps.washco-md.net/arcgis/rest/services/General/AddressPoints/MapServer/0',
         labelFields: ['ADDRESS'],
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

        {name: 'Ann Arbor - City Parcels',
         id: 'mi-washtenaw-co-parcels',
         url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/A2ParcelsforItrakIt/MapServer/0',
         labelFields: ['PRPACOM'],
         state: 'MI',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ann Arbor - City Address Points',
         id: 'mi-washtenaw-co-pts',
         url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/A2/A2BaseCacheBasicV2/MapServer/21',
         labelFields: ['SITUS_ADR'],
         state: 'MI',
         style: DEFAULT_PT_STYLE},

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

        // 2018-2-26 (mapomatic) These Kent Co layers used to work, but they've since disabled the external
        // services on this server, so we can't see anything on it.  I've left these active for now, but
        // will disable if the services don't return soon.

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

        {name: 'Montcalm Co - Parcels',
         id: 'mi-Montcalm-co-parcels',
         url: 'https://services6.arcgis.com/GJ2uZAPsEvtmqpe1/ArcGIS/rest/services/Tax_Parcels/FeatureServer/0',
         where: "BSAEXPORT_ONERNAME1 <> 'MICH STATE HWY COMMISSION'",
         labelFields: ['BSAEXPORT_PCOMBINED'],
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

        // WASHTENAW DATA IS PROTECTED BY A URL TOKEN.  ANN ARBOR (ON THE SAME SERVER) IS ACCESSIBLE, THOUGH.
        //         {name: 'Washtenaw Co - Parcels Labels',
        //          id: 'mi-washtenaw-co-parcels-2',
        //          url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/WashCo_Dynamic2/MapServer/43',
        //          token: 'lNDfngvIvPq9PBwf4mOeHij3pYtxf2WbP1QRaNlyNkQ.',
        //          labelFields: ['ADDRESSTEXT'],
        //          state: 'MI',
        //          style: DEFAULT_PARCEL_STYLE},

        //         {name: 'Washtenaw Co - Parcels Boundaries',
        //          id: 'mi-washtenaw-co-parcels-3',
        //          url: 'https://webmapssecure.ewashtenaw.org/arcgisshared/rest/services/WashCo_Dynamic2/MapServer/53',
        //          token: 'lNDfngvIvPq9PBwf4mOeHij3pYtxf2WbP1QRaNlyNkQ.',
        //          labelFields: [''],
        //          state: 'MI',
        //          style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Douglas Co - Parcels (no labels)',
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


        // Mississippi
        // ************************************

        // For these counties: HANCOCK, HARRISON, JACKSON, PEARL RIVER, STONE
        {name: 'State - Parcels (MDEM)',
         id: 'ms-state-parcels1',
         url: 'http://www.gisonline.ms.gov/arcgis/rest/services/MDEQ/Basemap/MapServer/104',
         labelFields: ['SITEADD'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         where: "PARNO NOT IN ('1','2','3')",
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'State - Parcels (non-MDEM, LIMITED DATA)',
         id: 'ms-state-parcels2',
         url: 'http://www.gisonline.ms.gov/arcgis/rest/services/MDEQ/Basemap/MapServer/105',
         labelFields: ['ADDR2'],
         processLabel: function(label) { return label.replace(/^0\s?/,'').replace(/"/g,''); },
         //where: "PARNO NOT IN ('1','2','3')",
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Adams Co - Parcels',
         id: 'ms-adams-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/AdamsCo_Services/MapServer/25',
         labelFields: ['StreetNumber','StreetName'],
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bay Saint Louis - City Address Points',
         id: 'ms-bay-saint-louis-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/BaySaintLouis_Services/MapServer/0',
         labelFields: ['FULLADD'],
         where: [''],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Bay Saint Louis - City Parcels (NO LABELS)',
         id: 'ms-bay-saint-louis-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/BaySaintLouis_Services/MapServer/25',
         labelFields: [''],
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Biloxi - City Parcels',
         id: 'ms-biloxi-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Biloxi_Services/MapServer/6',
         labelFields: ['STNUM','DIR','ST_NAME'],
         processLabel: function(label) { return label.replace(/^0\s?/,''); },
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Coahoma Co - Address Points',
         id: 'ms-coahoma-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Coahoma_County/Vector/MapServer/7',
         labelFields: ['NUMBER','PREFIX_DIR','ST_NAME','STREET_TYP','SUFFIX_DIR'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Coahoma Co - Parcels',
         id: 'ms-coahoma-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Coahoma_County/Vector/MapServer/3',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Copiah Co - Address Points',
         id: 'ms-Copiah-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/CopiahLabelTest/FeatureServer/1',
         labelFields: ['NUMERICS','ROAD_NAME'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'De Soto Co - Address Points',
         id: 'ms-de-soto-co-pts',
         url: 'http://maps.desotocountyms.gov/arcgis/rest/services/Layers/MapServer/87',
         labelFields: ['FULL_ADDR'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'De Soto Co - Parcels',
         id: 'ms-de-soto-co-parcel',
         url: 'http://maps.desotocountyms.gov/arcgis/rest/services/Layers/MapServer/25',
         labelFields: ['FULL_ADDR'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Diamondhead - City Address Points',
         id: 'ms-diamondhead-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diamondhead_Services/MapServer/0',
         labelFields: ['ADDNUM','STREETNAME'],
         where: [],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Diamondhead - City Parcels',
         id: 'ms-diamondhead-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diamondhead_Services/MapServer/13',
         labelFields: ['ADDRESS'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'D\'Iberville - City Address Points',
         id: 'ms-diberville-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diberville_Services/MapServer/2',
         labelFields: ['SIT_NO','SIT_NAME'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'D\'Iberville - City Parcels',
         id: 'ms-diberville-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diberville_Services/MapServer/17',
         labelFields: ['STREET_NUM','STREET_NAM'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hancock Co - Parcels',
         id: 'ms-hancock-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Hancock_Parcels/MapServer/0',
         labelFields: ['ADDRESS'],
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lamar Co - Parcels',
         id: 'ms-lamar-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LamarCounty_Services/MapServer/59',
         labelFields: ['StreetNumber','StreetName'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'ms-lincoln-co-pts',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/LincolnMS/MapServer/109',
         labelFields: ['SITUS'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels',
         id: 'ms-lincoln-co-parcel',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/LincolnMS/MapServer/103',
         labelFields: ['STREET_NUMBER','STREET_NAME'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marion Co - Address Points',
         id: 'ms-marion-co-pts',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/MarionMS/MapServer/41',
         labelFields: ['SITUS'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Marion Co - Parcels',
         id: 'ms-marion-co-parcel',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/MarionMS/MapServer/48',
         labelFields: ['PROP_ADD_NUM','PROP_STREET'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ocean Springs - City Address Points',
         id: 'ms-ocean-springs-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/OS_Services/MapServer/20',
         labelFields: ['ADDRESS','STREET_NAM'],
         where: [],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Ocean Springs - City Parcels',
         id: 'ms-ocean-springs-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/OS_Services/MapServer/23',
         labelFields: ['LOCATION'],
         processLabel: function(label) { return label.replace(/OCEAN SPR.*/,''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pontotoc Co - Parcels',
         id: 'ms-pontotoc-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Pontotoc_Services/MapServer/5',
         labelFields: ['StreetNumber','StreetName'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pike Co - Parcels',
         id: 'ms-pike-co-parcel',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/PikeMS/MapServer/22',
         labelFields: ['PROP_ADD_NUM','PROP_STREET'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Quitman Co - Address Points',
         id: 'ms-quitman-co-pts',
         url: 'http://www.efsedge.com/arcgis/rest/services/Quitman_County/Vector/MapServer/0',
         labelFields: ['FULL_ADDR'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Quitman Co - Parcels',
         id: 'ms-quitman-co-parcel',
         url: 'http://www.efsedge.com/arcgis/rest/services/Quitman_County/Vector/MapServer/4',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(/^0+\s?.*/,''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Warren Co - Address Points',
         id: 'ms-warren-co-pts',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/WarrenMS/MapServer/161',
         labelFields: ['SITUS'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Warren Co - Parcels',
         id: 'ms-warren-co-parcel',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/WarrenMS/MapServer/166',
         labelFields: ['STREET_NUM','STREET'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Winston Co - Address Points',
         id: 'ms-winston-co-pts',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Mississippi/LouisvilleMS/MapServer/1',
         labelFields: ['ADDR'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Winston Co - Parcels (no labels)',
         id: 'ms-winston-co-parcel',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Mississippi/LouisvilleMS/MapServer/10',
         labelFields: [],
         state: 'MS',
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

        {name: 'Boone Co - Address Points',
         id: 'mo-boone-co-pts',
         url: 'https://maps.showmeboone.com/ArcGIS/rest/services/BC_Basemap_Address/MapServer/0',
         labelFields: ['HOUSENO','PRE_DIR','STREET','SUFFIX','APT'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Boone Co - Parcels (no labels)',
         id: 'mo-boone-co-parcels',
         url: 'https://maps.showmeboone.com/ArcGIS/rest/services/BC_Basemap_MSD_V2/MapServer/7',
         labelFields: [],
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

        {name: 'Camden Co - Parcels (no labels)',
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

        {name: 'Columbia - City Address Points',
         id: 'mo-boone-city-pts',
         url: 'https://gis.gocolumbiamo.com/arcgis/rest/services/View_Services/ADDRESS_LABELS/MapServer/0',
         labelFields: ['HOUSENO','PRE_DIR','STREET','SUFFIX','APT'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Columbia - City Parcels',
         id: 'mo-boone-city-parcels',
         url: 'https://gis.gocolumbiamo.com/arcgis/rest/services/Energov/Energov_View/MapServer/0',
         labelFields: ['ADDNUM','STDIR','STNAME'],
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

        {name: 'Dunklin Co - Parcels (no labels)',
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

        {name: 'Holts Summit - City Addr Points',
         id: 'mo-holts-summit-city-pts',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Missouri/CityofHoltsSummit/MapServer/7',
         labelFields: ['HouseNum','Direction','StreetName','Suffix','PostDirect'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Holts Summit - City Parcels (no labels)',
         id: 'mo-holts-summit-city-parcels',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/Missouri/CityofHoltsSummit/MapServer/10',
         labelFields: [],
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
         url: 'https://services1.arcgis.com/Sfc8glAOQGBwsYa4/ArcGIS/rest/services/Property/FeatureServer/2',
         labelFields: ['site_street_number','site_street_name','site_pst_direction'],
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

        {name: 'Liberty - City Address Points',
         id: 'mo-liberty-city-points',
         url: 'http://maps.ci.liberty.mo.us/arcgis/rest/services/BaseMap/LibertyMainMap/MapServer/64',
         labelFields: ['FULLADDR'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

        {name: 'Liberty - City Parcels',
         id: 'mo-liberty-city-parcels',
         url: 'http://maps.ci.liberty.mo.us/arcgis/rest/services/BaseMap/LibertyMainMap/MapServer/70',
         labelFields: ['SITEADDRESS'],
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

        {name: 'Morgan Co - Parcels (no labels)',
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

        {name: 'Vernon Co - Parcels (no labels)',
         id: 'mo-vernon-co-parcels',
         url: 'http://vernongis.integritygis.com/Geocortex/Essentials/REST/sites/Vernon_County_MO/map/mapservices/1/rest/services/x/MapServer/6',
         labelFields: ['PARCELPIN'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'West Plains - City Address Points',
         id: 'mo-west-plains-city-points',
         url: 'https://services5.arcgis.com/vlbfeUFWgxfykYSC/ArcGIS/rest/services/City_Addresses/FeatureServer/0',
         labelFields: ['COMB_ADDR'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},


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

        {name: 'Missoula Co - Parcels (no labels)',
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


        // New Jersey
        // ************************************

        {name: 'State - Address Points',
         id: 'nj-state-points',
         url: 'http://geodata.state.nj.us/arcgis/rest/services/Features/Addresses_and_Names/MapServer/0',
         labelFields: ['STREET_ADDR'],
         state: 'NJ',
         style: DEFAULT_PT_STYLE},

        {name: 'State - Parcels',
         id: 'nj-state-parcels',
         url: 'http://geodata.state.nj.us/arcgis/rest/services/Applications/NJ_TaxListSearch/MapServer/2',
         labelFields: ['PROP_LOC'],
         state: 'NJ',
         style: DEFAULT_PARCEL_STYLE},


        // New York
        // ************************************

        {name: 'State - Address Points',
         id: 'ny-state-pts',
         url: 'https://gisservices.its.ny.gov/arcgis/rest/services/SAM_Address_Points/MapServer/1',
         labelFields: ['AddressLabel'],
         state: 'NY',
         style: DEFAULT_STATE_PT_STYLE},

        // includes : Cayuga, Chautauqua, Cortland, Erie, Genesee, Greene, Lewis, NYC- Bronx, NYC- Kings (Brooklyn), NYC- New York (Manhattan), NYC- Queens,
        // NYC- Richmond (Staten Island), Ontario, Orange, Rensselaer, Sullivan, Tompkins, Ulster, Warren, and Westchester
        {name: 'State - Parcels (20 Counties)',
         id: 'ny-state-parcels',
         url: 'https://gisservices.its.ny.gov/arcgis/rest/services/NYS_Tax_Parcels_Public/MapServer/0',
         labelFields: ['PARCEL_ADDR'],
         state: 'NY',
         style: DEFAULT_STATE_PARCEL_STYLE},

        {name: 'Allegany Co - Parcels',
         id: 'ny-allegany-co-parcels',
         url: 'https://services5.arcgis.com/WcotYUBrYwlGLzUr/ArcGIS/rest/services/Allegany_Parcel_Export_RPS/FeatureServer/0',
         labelFields: ['STREET_ADD'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Broome Co - Address Point',
         id: 'ny-broome-co-pts',
         url: 'http://www.bcgis.com/arcgis/rest/services/parcels/br_parcels/MapServer/3',
         labelFields: ['HSNO','FSTN'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Broome Co - Parcels',
         id: 'ny-broome-co-parcels',
         url: 'http://www.bcgis.com/arcgis/rest/services/parcels/br_parcels/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cattaraugus Co - Parcels',
         id: 'ny-cattaraugus-co-parcels',
         url: 'https://maps2.cattco.org/arcgiswebadaptor/rest/services/ParcelandSales_Viewer/MapServer/3',
         labelFields: ['LOC_NO','PROP_LOC'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cayuga Co - Address Point',
         id: 'ny-cayuga-co-pts',
         url: 'http://gis.cayugacounty.us/arcgis/rest/services/Flexviewer/MapContents/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Cayuga Co - Parcels',
         id: 'ny-cayuga-co-parcels',
         url: 'http://gis.cayugacounty.us/arcgis/rest/services/Flexviewer/MapContents/MapServer/31',
         labelFields: ['RPSdata.LOCATION'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chautauqua Co - Address Point',
         id: 'ny-chautauqua-co-pts',
         url: 'https://maps.chautauquacounty.com/server/rest/services/Public/AddressToolBasemap/MapServer/0',
         labelFields: ['FullAddress'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Chautauqua Co - Parcels',
         id: 'ny-chautauqua-co-parcels',
         url: 'https://maps.chautauquacounty.com/server/rest/services/ParcelViewer/ViewerOperational/MapServer/151',
         labelFields: ['Loc_Address'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Chemung Co - Address Point',
         id: 'ny-chemung-co-pts',
         url: 'https://services5.arcgis.com/Zuw6weNBpZX2wFbS/ArcGIS/rest/services/Chemungaddress_pts/FeatureServer/0',
         labelFields: ['GEO_ADDR'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Chemung Co - Parcels',
         id: 'ny-chemung-co-parcels',
         url: 'https://services5.arcgis.com/Zuw6weNBpZX2wFbS/ArcGIS/rest/services/Public_Parcels/FeatureServer/0',
         labelFields: ['RPS_ADDRESS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Colonie - Town Parcels',
         id: 'ny-colonie-town-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_Town_Colonie/MapServer/3',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cortland Co - Parcels',
         id: 'ny-cortland-co-parcels',
         url: 'https://services5.arcgis.com/WcotYUBrYwlGLzUr/ArcGIS/rest/services/Cortland/FeatureServer/0',
         labelFields: ['LOC_ST_NBR','LOC_ST_NAM'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Delaware Co - Address Point',
         id: 'ny-delaware-co-pts',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Delaware_Internal/MapServer/0',
         labelFields: ['ADDR1'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Delaware Co - Parcels',
         id: 'ny-delaware-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Delaware_Internal/MapServer/18',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dutchess Co - Address Point',
         id: 'ny-dutchess-co-pts',
         url: 'https://gis.dutchessny.gov/wa/rest/services/parcelaccess/MapServer/12',
         labelFields: ['FULLADDRESS'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Dutchess Co - Parcels (no labels)',
         id: 'ny-dutchess-co-parcels',
         url: 'https://gis.dutchessny.gov/wa/rest/services/parcelaccess/MapServer/0',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Erie Co - Parcels',
         id: 'ny-erie-co-parcels',
         url: 'http://gis2.erie.gov/arcgis/rest/services/ErieCountyNY/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Essex Co - Parcels',
         id: 'ny-essex-co-parcels',
         url: 'http://essex-gis.co.essex.ny.us/arcgis/rest/services/NY_County_Essex/MapServer/7',
         labelFields: ['LOCATION'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'ny-franklin-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Franklin/MapServer/2',
         labelFields: ['STREET_ADD'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Genesee Co - Address Point',
         id: 'ny-genesee-co-pts',
         url: 'http://gisp.co.genesee.ny.us/arcgis/rest/services/GC_Public/BaseMap_Public/MapServer/0',
         labelFields: ['HOUSENUMBER','HOUSENUMBEREXTRA','STREETNAME','STREETTYPE','SUFFIXDIRECTION'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Genesee Co - Parcels',
         id: 'ny-genesee-co-parcels',
         url: 'http://gisp.co.genesee.ny.us/arcgis/rest/services/GC_Public/BaseMap_Public/MapServer/32',
         labelFields: ['PrclNumb','PrclStreet'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Greene Co - Parcels',
         id: 'ny-greene-co-parcels',
         url: 'http://gis.greenegovernment.com/ArcGIS/rest/services/GreeneCounty/MapServer/6',
         labelFields: ['LOC_ST_NBR','LOC_PREFIX','LOC_ST_NAM','LOC_MAIL_S','LOC_POST_D'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hamilton Co - Parcels',
         id: 'ny-hamilton-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Hamilton/MapServer/28',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'ny-jefferson-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Jefferson/MapServer/19',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Livingston Co - Parcels',
         id: 'ny-livingston-co-parcels',
         url: 'http://map.livingstoncounty.us/arcgis/rest/services/Public/Operational_Map_Public/MapServer/4',
         labelFields: ['PARCEL_ADD'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Monroe Co - Parcels',
         id: 'ny-monroe-co-parcels',
         url: 'https://mappingmonroe.monroecounty.gov/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['ST_NBR','LOCPREDIR','LOCSTNAME','LOCSTTYPE','LOCPOSTDIR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Nassau Co - Parcels (no labels)',
         id: 'ny-nassau-co-parcels',
         url: 'https://gis.nassaucountyny.gov/arcgis/rest/services/Akanda/MapServer/1',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Niagara Co - Parcels',
         id: 'ny-niagara-co-parcels',
         url: 'https://gis.niagaracounty.com/arcgis/rest/services/NC_GIS/NC_GIS/FeatureServer/5',
         labelFields: ['PrclNumb','PrclStreet'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Onondaga Co - Address Point',
         id: 'ny-onondaga-co-pts',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Onondaga/MapServer/5',
         labelFields: ['PROP_ADD'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Onondaga Co - Parcels',
         id: 'ny-onondaga-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Onondaga/MapServer/7',
         labelFields: ['PROP_ADD'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ontario Co - Address Point',
         id: 'ny-ontario-co-pts',
         url: 'http://oncorng.co.ontario.ny.us/arcgis/rest/services/OnCOR/Basemap/MapServer/0',
         labelFields: ['FULL_ADDR'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Ontario Co - Parcels1',
         id: 'ny-ontario-co-parcels1',
         url: 'http://oncorng.co.ontario.ny.us/arcgis/rest/services/OnCOR/Basemap/MapServer/3',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ontario Co - Parcels2',
         id: 'ny-ontario-co-parcels2',
         url: 'https://services5.arcgis.com/WcotYUBrYwlGLzUr/ArcGIS/rest/services/Ontario/FeatureServer/0',
         labelFields: ['LOC_NUMBER','LOC_STREET'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Orange Co - Address Point',
         id: 'ny-orange-co-pts',
         url: 'http://ocgis.orangecountygov.com/ArcGIS/rest/services/Dynamic/LandBase/MapServer//0',
         labelFields: ['StreetAddress'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Orange Co - Parcels (no labels)',
         id: 'ny-orange-co-parcels',
         url: 'http://ocgis.orangecountygov.com/ArcGIS/rest/services/Dynamic/LandBase/MapServer//4',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Orleans Co - Parcels HN only',
         id: 'ny-orleans-co-parcels',
         url: 'https://services6.arcgis.com/AGRzZ0TKgr5syAM6/ArcGIS/rest/services/MapOrleansUpdate/FeatureServer/0',
         labelFields: ['LOC_ST_NBR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Oswego Co - Parcels',
         id: 'ny-oswego-co-parcels',
         url: 'http://rptsgisweb.oswegocounty.com/arcgis/rest/services/GIS_webmap/GIS_web_basemap/MapServer/1',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Otsego Co - Parcels',
         id: 'ny-otsego-co-parcels',
         url: 'http://server2.mapxpress.net:6080/arcgis/rest/services/Otsego/Basemap/MapServer/5',
         labelFields: ['HOUSE_NO','STREET'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Putnam Co - Address Points',
         id: 'ny-putnam-co-pts',
         url: 'http://www.pcnygis.com/arcgiswa/rest/services/ArcGIS_Online/E911_Sites/MapServer/1',
         labelFields: ['ADDRESS','STREET'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Putnam Co - Parcels',
         id: 'ny-putnam-co-parcels',
         url: 'http://www.pcnygis.com/arcgiswa/rest/services/Public/Parcels/MapServer/0',
         labelFields: ['GIS_Public.DBO.RPS.PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        // Layer works but requires token that expires
        //{name: 'Rockland Co - Address Points TK',
        // id: 'ny-rockland-co-pts',
        // url: 'https://www.latisviewer.com/arcgis/rest/services/Rockland/District_Address_Point/MapServer/0',
        // token: '6omRWcYSSIwuqArN2-Qq2M1dz8WBZijUsfV13vuzgZ4.',
        // labelFields: ['ADDRESS'],
        // state: 'NY',
        // style: DEFAULT_PT_STYLE},

        // Layer works but requires token that expires
        //{name: 'Rockland Co - Parcels TK',
        // id: 'ny-rockland-co-parcels',
        // url: 'https://www.latisviewer.com/arcgis/rest/services/Rockland/Tax_Map/MapServer/3',
        // token: '6omRWcYSSIwuqArN2-Qq2M1dz8WBZijUsfV13vuzgZ4.',
        // labelFields: ['ADDRESS'],
        // state: 'NY',
        // style: DEFAULT_PARCEL_STYLE},

        // Layer works but requires token that expires
        //{name: 'St. Lawrence Co - Parcels HN only TK',
        // id: 'ny-st-lawrence-co-parcels',
        // url: 'http://dancgis.org/arcgis/rest/services/Common_StLawrence/MapServer/3',
        // token: 'w9aXRtLf3nGvsMtkSR1CxBCF6rwF61EOtwfenEqIR20.',
        // labelFields: ['LOC_ST_NBR'],
        // state: 'NY',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'Saratoga Co - Parcels',
         id: 'ny-saratoga-co-parcels',
         url: 'http://23.96.59.134/arcgis/rest/services/LocalGovt/NY_County_Saratoga_V2/MapServer/57',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Schenectady Co - Parcels',
         id: 'ny-schenectady-co-parcels',
         url: 'http://spatial.gishost.com/arcgis/rest/services/SIMS/SIMS/MapServer/6',
         labelFields: ['PROP_ADDRS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Schoharie Co - Address Points',
         id: 'ny-schoharie-co-pts',
         url: 'http://72.10.206.73/arcgis/rest/services/NY_County_Schoharie/MapServer/0',
         labelFields: ['Address'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Schoharie Co - Parcels',
         id: 'ny-schoharie-co-parcels',
         url: 'http://72.10.206.73/arcgis/rest/services/NY_County_Schoharie/MapServer/4',
         labelFields: ['LOC_NUMBER','LOC_STREET'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Steuben Co - Address Points',
         id: 'ny-steuben-co-pts',
         url: 'https://services2.arcgis.com/NZkLeERo9XICXiuy/ArcGIS/rest/services/911_Address/FeatureServer/0',
         labelFields: ['XNUMBER','XNUM_SUF','RD_NAME_F'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Steuben Co - Parcels',
         id: 'ny-steuben-co-parcels',
         url: 'https://services2.arcgis.com/NZkLeERo9XICXiuy/ArcGIS/rest/services/Real_Property_Parcel_Viewer/FeatureServer/1',
         labelFields: ['FIRE_NBR','TM_RDSTRT'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Suffolk Co - Address Points',
         id: 'ny-suffolk-co-pts',
         url: 'https://gisservices2.suffolkcountyny.gov/arcgis/rest/services/Live_Layers_External/MapServer/2',
         labelFields: ['FullStreet'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Suffolk Co - Parcels (no labels)',
         id: 'ny-suffolk-co-parcels',
         url: 'https://gisservices2.suffolkcountyny.gov/arcgis/rest/services/Live_Layers_External/MapServer/57',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sullivan Co - Address Points',
         id: 'ny-sulivan-co-pts',
         url: 'https://services7.arcgis.com/bx3OlIPqiDclwaja/ArcGIS/rest/services/SCGISO_911_Data_Update/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Sullivan Co - Parcels (no labels)',
         id: 'ny-sulivan-co-parcels',
         url: 'https://services7.arcgis.com/bx3OlIPqiDclwaja/ArcGIS/rest/services/Tax_Map_Data/FeatureServer/12',
         labelFields: [''],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tioga Co - Address Points',
         id: 'ny-tioga-co-pts',
         url: 'http://git.co.tioga.ny.us/arcgis/rest/services/Address_Points/MapServer/0',
         labelFields: ['PARCEL_L_1','PARCEL_LOC'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Tioga Co - Parcels',
         id: 'ny-tioga-co-parcels',
         url: 'http://git.co.tioga.ny.us/arcgis/rest/services/GIT_New/MapServer/3',
         labelFields: ['PARCEL_LOCATION_NUMBER','PARCEL_LOCATION'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ulster Co - Parcels',
         id: 'ny-ulster-co-parcels',
         url: 'https://gis.ulstercountyny.gov/arcgis/rest/services/Tax_Parcels/Tax_Parcels/MapServer/0',
         labelFields: ['PARCEL_ADDRESS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Warren Co - Address Points',
         id: 'ny-warren-co-pts',
         url: 'http://gis-2.warrencountyny.gov/arcgis/rest/services/warren_new/MapServer/1',
         labelFields: ['AddressNumber','SuffixAddressNumber','PreDirectional','PreType','StreetName','PostType','PostDirectional'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Warren Co - Parcels',
         id: 'ny-warren-co-parcels',
         url: 'http://gis-2.warrencountyny.gov/arcgis/rest/services/warren_basemap/MapServer/2',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Parcels',
         id: 'ny-washington-co-parcels',
         url: 'http://gis.co.washington.ny.us/arcgis/rest/services/WashingtonCounty/MapServer/4',
         labelFields: ['PROP_ADDR'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Westchester Co - Address Points',
         id: 'ny-westchester-co-pts',
         url: 'https://giswww.westchestergov.com/arcgis/rest/services/MappingWestchesterCounty_AdditionalLayers/MapServer/78',
         labelFields: ['PROPADDRESS'],
         state: 'NY',
         style: DEFAULT_PT_STYLE},

        {name: 'Westchester Co - Parcels',
         id: 'ny-westchester-co-parcels',
         url: 'https://giswww.westchestergov.com/arcgis/rest/services/MappingWestchesterCounty_AdditionalLayers/MapServer/79',
         labelFields: ['PROPADDRESS'],
         state: 'NY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wyoming Co - Parcels',
         id: 'ny-wyoming-co-parcels',
         url: 'https://services5.arcgis.com/WcotYUBrYwlGLzUr/ArcGIS/rest/services/Wyoming/FeatureServer/0',
         labelFields: ['LOC_ST_NBR','LOC_ST_NAM'],
         state: 'NY',
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

        {name: 'Divide Co - Parcels (no labels)',
         id: 'nd-divide-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/DivideNDFeatures/FeatureServer/5',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dunn Co - Parcels (no labels)',
         id: 'nd-dunn-co-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/DunnTaxDirector/MapServer/3',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Emmons Co - Parcels (no labels)',
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

        {name: 'Golden Valley Co - Parcels (no labels)',
         id: 'nd-golden Valley-co-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/Goldenvalley/MapServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // this layer from the City GIS site, but looks like it covers points in County too
        {name: 'Grand Forks co & City - Addr Points',
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

        {name: 'McHenry Co - Parcels (no labels)',
         id: 'nd-mchenry-co-parcels',
         url: 'http://services6.arcgis.com/zbSH183Elt4hJ5Hl/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        //{name: 'McHenry Co - Parcels (no labels)',
        // id: 'nd-mchenry-co-parcels2',
        // url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/McHenryNDFeatures/FeatureServer/4',
        // labelFields: [''],
        // state: 'ND',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'McKenzie Co - Parcels (no labels)',
         id: 'nd-mckenzie-co-parcels',
         url: 'https://gis2.gisworkshop.com/arcgis/rest/services/McKenzieTaxDirector/MapServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'McLean Co - Parcels (no labels)',
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
        {name: 'Mountrail Co - Parcels (no labels)',
         id: 'nd-mountrail-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/MountrailNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // point layer seems to be shifted to the south about 270ft from actual location for point. in Devils Lake, North Dakota. need to check other areas
        // can be seen at 1313 Janna Pl NE, Devils Lake, ND 58301
        //{name: 'Ramsey Co - Address Points',
        // id: 'nd-ramsey-co-pts',
        // url: 'https://gis.co.ramsey.nd.us/arcgis/rest/services/EM/911_Points/MapServer/0',
        // labelFields: ['SUBADDRESS'],
        // state: 'ND',
        //style: DEFAULT_PT_STYLE},

        //{name: 'Ramsey Co - Parcels (no labels)',
        // id: 'nd-ramsey-co-parcels',
        // url: 'https://gis.co.ramsey.nd.us/arcgis/rest/services/Basemap/Parcels/MapServer/0',
        // labelFields: [''],
        // state: 'ND',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'Richland Co - Parcels',
         id: 'nd-richland-co-parcels',
         url: 'https://c39gisserver.co.richland.nd.us/arcgis/rest/services/Cadastre/Parcel_Layer/MapServer/0',
         labelFields: ['RICHLAND.dbo.ALL_PARCEL_DATA.Street_Address'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rolette Co - Address Points',
         id: 'nd-rolette-co-pts',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/RoletteNDFeatures/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'ND',
         style: DEFAULT_PT_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Rolette Co - Parcels (no labels)',
         id: 'nd-rolette-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/RoletteNDFeatures/FeatureServer/3',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Sioux Co - Parcels (no labels)',
         id: 'nd-sioux-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/SiouxNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Stark Co - Parcels (no labels)',
         id: 'nd-stark-co-parcels',
         url: 'https://gis2.gisworkshop.com/arcgis/rest/services/StarkTaxDirector/MapServer/0',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dickinson - City Parcels (no labels)',
         id: 'nd-dickinson-city-parcels',
         url: 'https://gis3.gisworkshop.com/arcgis/rest/services/Dickinson/MapServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Steele Co - Parcels (no labels)',
         id: 'nd-steele-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/SteeleNDFeatures/FeatureServer/4',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        // County GIS only provides Onwers address not parcel address, layer has same data
        {name: 'Traill Co - Parcels (no labels)',
         id: 'nd-traill-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/TraillNDFeatures/FeatureServer/2',
         labelFields: [''],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Walsh Co - Parcels',
         id: 'nd-walsh-co-parcels',
         url: 'https://services1.arcgis.com/djH7pAaRQuB6LGY0/ArcGIS/rest/services/P/FeatureServer/2',
         labelFields: ['Address2'],
         state: 'ND',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ward Co - Parcels',
         id: 'nd-ward-co-parcels',
         url: 'http://54.213.14.253/arcgis/rest/services/Parcels/WCParcels/FeatureServer/0',
         labelFields: ['ADDRESS'],
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

        {name: 'Allen Co - Parcels',
         id: 'oh-allen-co-parcels',
         url: 'http://gis.allencountyohio.com/arcgis/rest/services/test/MapServer/0',
         labelFields: ['HOUSENO','ST_DIR','STREET','ST_DESC'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Ashtabula Co - Parcels',
         id: 'oh-Ashtabula-co-parcels',
         url: 'http://gis2.ashtabulacounty.us/arcgis/rest/services/MyMapService/MapServer/1',
         labelFields: ['Location_Address'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Auglaize Co - Parcels',
         id: 'oh-Auglaize-co-parcels',
         url: 'http://gis.auglaizecounty.org/arcgis/rest/services/AuglaizeCounty/MapServer/24',
         labelFields: ['NO_','STREET'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Franklin Co - Address Points',
         id: 'oh-franklin-co-pts',
         url: 'http://maps.franklincountyauditor.com/fcaags/rest/services/BaseMap/SiteAddressesWGS84/MapServer/0',
         labelFields: ['SITEADDRESS_1'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Franklin Co - Parcels',
         id: 'oh-franklin-co-parcels',
         url: 'http://maps.franklincountyauditor.com/fcaags/rest/services/Services/ParcelFeatures/MapServer/1',
         labelFields: ['SITEADDRESS'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fulton Co - Address Points',
         id: 'oh-Fulton-co-pts',
         url: 'http://gis.fultoncountyoh.com/arcgis/rest/services/LocalGov/Site_Address_Points/MapServer/0',
         labelFields: ['LSN'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Fulton Co - Parcels',
         id: 'oh-Fulton-co-parcels',
         url: 'http://gis.fultoncountyoh.com/arcgis/rest/services/LocalGov/Base/MapServer/5',
         labelFields: ['mlocStrNo','mlocStrDir','mlocStrNam','mlocStrSuf'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hamilton Co - Parcels',
         id: 'oh-hamilton-co-parcels',
         url: 'http://cagisonline.hamilton-co.org/arcgis/rest/services/Hamilton/HCE_Parcels_With_Auditor_Data/MapServer/0',
         labelFields: ['CAGIS.AUDREAL_VW.ADDRNO','CAGIS.AUDREAL_VW.ADDRST','CAGIS.AUDREAL_VW.ADDRSF'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Parcels',
         id: 'oh-Lake-co-parcels',
         url: 'http://arcgis.lakecountyohio.gov/arcgis/rest/services/POL_Parcels/MapServer/1',
         labelFields: ['GIS_LocationAddress'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Licking Co - Parcels',
         id: 'oh-Licking-co-parcels',
         url: 'https://apps.lcounty.com/arcgis/rest/services/TaxMapWeb/TAXMAPWEB/MapServer/3',
         labelFields: ['STREET1'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lorain Co - Address Points',
         id: 'oh-Lorain-co-pts',
         url: 'http://www.loraincountyauditor.com/arcgis/rest/services/Site_Address/MapServer/0',
         labelFields: ['ST_NUM','ST_NUM_SUF','PRE_DIR','ST_NAME','ST_TYPE','POST_DIR'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Mahoning Co - Parcels',
         id: 'oh-Mahoning-co-parcels',
         url: 'http://gisapp.mahoningcountyoh.gov/arcgis/rest/services/AddressPortal/AddressPoints/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marion Co - Parcels',
         id: 'oh-Marion-co-parcels',
         url: 'http://mcogis.co.marion.oh.us/arcgis/rest/services/WEB_APP_PARCELS/MapServer/1',
         labelFields: ['OWNER3'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mercer Co - Parcels',
         id: 'oh-Mercer-co-parcels',
         url: 'http://www.mercercountyohio.org/arcgis/rest/services/ParcelTextB/MapServer/0',
         labelFields: ['BasicInfo.Address'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Address Points',
         id: 'oh-montgomery-co-points',
         url: 'http://www.mcegisohio.org/arcgis/rest/services/PUBLIC/AUDGIS_MVRP/MapServer/2',
         labelFields: ['ADDR_NUM','STR_NAME','STR_TYPE','SUF_DIR'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Sandusky Co - Address Points',
         id: 'oh-Sandusky-co-points',
         url: 'http://www.sanduskycountygis.org/arcgis/rest/services/SandGISViewer_2015/MapServer/26',
         labelFields: ['LSN'],
         state: 'OH',
         style: DEFAULT_PT_STYLE},

        {name: 'Scioto Co - Parcels',
         id: 'oh-Scioto-co-parcels',
         url: 'https://www.sciotocountyengineer.org/arcgis/rest/services/OneView/ParcelsSearch/MapServer/0',
         labelFields: ['StreetAddressFull'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Stark Co - Parcels',
         id: 'oh-Stark-co-parcels',
         url: 'https://webdmz.starkcountyohio.gov/arcgis/rest/services/ParcelTaxMapCache/MapServer/25',
         labelFields: ['HOUSE_NUMBER','PREDIRECTIONAL','STREET_NAME','STREET_TYPE','POST_DIRECTIONAL'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Summit Co - Parcels',
         id: 'oh-Summit-co-parcels',
         url: 'http://summitmaps.summitoh.net/arcgis/rest/services/DynamicParcels/MapServer/0',
         labelFields: ['ADDR'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Van Wert Co - Parcels',
         id: 'oh-Van-Wert-co-parcels',
         url: 'http://www.tgisites.com/arcgis/rest/services/VanWert/Parcels/MapServer/0',
         labelFields: ['STNUM','STNAM','STTYPE'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Warren Co - Parcels',
         id: 'oh-warren-co-parcels',
         url: 'http://webmap1.co.warren.oh.us/ArcGIS/rest/services/Dynamic/ParcelLabelsAddr/MapServer/0',
         labelFields: ['Address_Line_1'],
         state: 'OH',
         style: DEFAULT_PARCEL_STYLE},


        // Oklahoma
        // **********************************

        {name: 'ACOG Counties (OKC Area) - Parcels',
         id: 'ok-acog-cos-okc-area-parcels',
         url: 'http://arcgis4.roktech.net/arcgis/rest/services/ACOG/acog_query/MapServer/16',
         labelFields: ['PARCEL_ADDRESS'],
         processLabel: function(label) { return label.replace(/^0+/, ''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Creek Co - Parcels',
         id: 'ok-Creek-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsCREEK_all/MapServer/0',
         labelFields: ['ADDRESS'],
         processLabel: function(label) { return label.replace(/^(.*?) ([EWNS] )?(\d+)$/,'$3 $2$1').replace(/^0+/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Delaware Co - Parcels',
         id: 'ok-delaware-co-parcels',
         url: 'https://services.arcgis.com/bmlPdrfZm3kfidAc/ArcGIS/rest/services/ParcelS/FeatureServer/0',
         where: "Nbhd <> ''",
         labelFields: ['Situs'],
         processLabel: function(label) { return label.replace(/^0+/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

/*        {name: 'Norman - City Parcels',
         id: 'ok-norman-city-parcels',
         url: 'http://maps.normanok.gov/arcgis/rest/services/GeneralBaseMap/MapServer/42',
//         labelFields: ['F_ADD','T_ADD','PRE_DIR','STREET_NAME','STREET_TYPE','SUF_DIR'],
         labelFields: [],
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},
Doesn't have a Shape field.
*/
        {name: 'Oklahoma Co - Parcels (Alt Source)',
         id: 'ok-oklahoma-co-parcels',
         url: 'https://oklahomacounty.geocortex.com/arcgis/rest/services/ParcelData/OklahomaCountyAllParcelsDataNEW/MapServer/4',
         labelFields: ['location'],
         processLabel: function(label) { return label.replace(/^(.*?) ([EWNS]+ )?(.*(Ave|Dr|St|Ct|Cir|Blvd|Pl|Ln|Fwy|Rd|Ter(r)?|Way)).*/gi, '$1 $2$3').replace(/^0+.*/, ''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Osage Co - Parcels',
         id: 'ok-Osage-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsOSAGE/MapServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(/^0+/,'').replace(/\\/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rogers Co - Parcels',
         id: 'ok-Rogers-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsROGERS/MapServer/0',
         where: "CAMA<>''",
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(/^0+/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tulsa Co - Parcels',
         id: 'ok-Tulsa-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsTULSA_all/MapServer/0',
         where: "PAR_TYPE = 'PARCEL'",
         labelFields: ['PROP_ADD'],
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wagoner Co - Parcels',
         id: 'ok-Wagoner-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsWAGONER/FeatureServer/0',
         labelFields: ['Situs'],
         processLabel: function(label) { return label.replace(/^0+/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        // Pennsylvania
        // **********************************

        {name: 'Adams Co - Address Points',
         id: 'pa-adams-co-pts',
         url: 'https://mapping.adamscounty.us/arcgis/rest/services/Maps/Deeds2/MapServer/10',
         labelFields: ['ST_NUM','PRE_DIR','ST_NAME','ST_TYPE','POST_DIR'],
         state: 'PA',
         style: DEFAULT_PT_STYLE},

        {name: 'Adams Co - Parcels (no labels)',
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

        {name: 'Crawford Co - Parcels (no labels)',
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

        {name: 'Delaware Co - Parcels',
         id: 'pa-delaware-co-parcels',
         url: 'http://w04.co.delaware.pa.us/arcgis/rest/services/Parcels_Jan2018/MapServer/0',
         labelFields: ['SiteLocati'],
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

        {name: 'Fulton Co - Parcels (no labels)',
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

        {name: 'Perry Co - Parcels (no labels)',
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

        {name: 'Pike Co - Parcels (no labels)',
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

        {name: 'Schuylkill Co - Parcels (no labels)',
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

        {name: 'Washington Co - Parcels (no labels)',
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

        {name: 'Aurora Co - Parcels',
         id: 'sd-aurora-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/AURORA/MapServer/21',
         labelFields: ['CAMA_2017.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Beadle Co - Parcels',
         id: 'sd-beadle-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Beadle/beadlemapnet/MapServer/1',
         labelFields: ['PROPERTY_A'],
         //processLabel: function(label) { return label.replace(/^\d{5}\s/, ''); }, // Some addresses start with the zip code, but some start with a valid 5-digit HN.  Can't just blindly remove 5-digit values.
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bon Homme Co - Parcels',
         id: 'sd-Bon-homme-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/BON_HOMME/MapServer/1',
         labelFields: ['CAMA_2017.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brule Co - Parcels',
         id: 'sd-brule-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/BRULE/MapServer/16',
         labelFields: ['CAMA.HOUSENUM','CAMA.ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        // layer working, but seems to be very limited in polygon and address info not to usefull
        //{name: 'Buffalo Co - Parcels',
        // id: 'sd-buffalo-co-parcels',
        // url: 'http://ims.districtiii.org/arcgis/rest/services/BUFFALO/MapServer/1',
        // labelFields: ['cama2016.SITEADDRES'],
        // state: 'SD',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'Clark Co - Parcels (no labels)',
         id: 'sd-clark-co-parcels1',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Clark/clarkmapnet_new/MapServer/16',
         labelFields: [''],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clark Co - Parcels (NO City)',
         id: 'sd-clark-co-parcels2',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Clark/clarkmapnet/MapServer/8',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Codington Co - Parcels',
         id: 'sd-codington-co-parcels',
         url: 'http://www.1stdistrict.org/arcgis/rest/services/Codington/codingtonmapnet/MapServer/9',
         labelFields: ['PROP_STREE'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Davison Co - Parcels',
         id: 'sd-davison-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/DAVISON/MapServer/4',
         labelFields: ['CAMA_2016.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Day Co - Parcels',
         id: 'sd-day-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/DAY/MapServer/14',
         labelFields: ['cama2017.SITE_ADDRESS'],
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

        // Layer working, but not very usefull. no address info and parcel looks more like square division not actual ownership parcel.
        //{name: 'Edmunds Co - Parcels',
        // id: 'sd-edmunds-co-parcels',
        // url: 'http://ims.districtiii.org/arcgis/rest/services/EDMUNDS/MapServer/3',
        // labelFields: ['CAMA.Property_Address'],
        // visibleAtZoom: 4,
        // state: 'SD',
        // style: DEFAULT_PARCEL_STYLE},

        {name: 'Fall River Co - County Addr Points',
         id: 'sd-fall-river-points1',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/FallRiver/MapServer/1',
         labelFields: ['DLVRY_ADD'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Fall River Co - Towns Addr Points',
         id: 'sd-fall-river-points2',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/FallRiver/MapServer/2',
         labelFields: ['DLVRY_ADD'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Fall River Co - Building Addr Points',
         id: 'sd-fall-river-points3',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/FallRiver/MapServer/0',
         labelFields: ['Address','PreDir','Str_Name','Designation','PostDir'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Fall River Co - Parcels',
         id: 'sd-fall-river-co-parcels',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/FallRiver/MapServer/24',
         labelFields: ['House_Number','Address'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Faulk Co - Parcels (no labels)',
         id: 'sd-faulk-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/FAULK/MapServer/1',
         labelFields: [],
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

        {name: 'Hanson Co - Parcels',
         id: 'sd-hanson-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/HANSON/MapServer/9',
         labelFields: ['CAMA_2017.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hutchinson Co - Parcels',
         id: 'sd-hutchinson-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/HUTCHINSON/MapServer/0',
         labelFields: ['CAMA.SITE_HOUSE','CAMA.SITE_STREET'],
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

        {name: 'Lawrence Co - Parcels',
         id: 'sd-lawrence-co-parcels',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/LawrenceCounty/MapServer/19',
         labelFields: ['E911'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lawrence Co - Address Points',
         id: 'sd-lawrence-co-pts',
         url: 'https://arcgis.mobile311.com/arcgis/rest/services/SouthDakota/LawrenceCounty/MapServer/3',
         labelFields: ['ADDRESS'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'sd-lincoln-co-pts',
         url: 'https://maps.lincolncountysd.org/webmapadaptor/rest/services/Groups/Labels/MapServer/2',
         labelFields: ['ADDRESS','STREET','SUFFIX'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels',
         id: 'sd-lincoln-co-parcels',
         url: 'https://maps.lincolncountysd.org/webmapadaptor/rest/services/Groups/Labels/MapServer/0',
         labelFields: ['CountyService.DBO.Parcel.Address'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lyman Co - Parcels',
         id: 'sd-lyman-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/LYMAN/MapServer/0',
         labelFields: ['CAMA.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Marshall Co - Parcels',
         id: 'sd-marshall-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/MARSHALL/MapServer/6',
         labelFields: ['CAMA_2017.SITE_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mellette Co - Address Points',
         id: 'sd-mellette-co-pts',
         url: 'http://ims.districtiii.org/arcgis/rest/services/MELLETTE/MapServer/0',
         labelFields: ['PHYSICAL_ADDRESS'],
         state: 'SD',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Sanborn Co - Parcels',
         id: 'sd-sanborn-co-parcels',
         url: 'http://ims.districtiii.org/arcgis/rest/services/SANBORN/MapServer/0',
         labelFields: ['CAMA_2016.SITE_HOUSE','CAMA_2016.SITE_ADDRESS'],
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


        // Tennessee
        // ****************************
        {name: 'Blount Co - Address Points',
         id: 'tn-blount-county-pts',
         url: 'http://204.63.176.116/arcgis/rest/services/AddressPoints/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Blount Co - Parcels',
         id: 'tn-Blount-co-parcels',
         url: 'http://204.63.176.116/arcgis/rest/services/BlountParcels/MapServer/0',
         where: "PARID <> ''",
         labelFields: ['ST_NUM','STREET'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bradley Co - Address Points',
         id: 'tn-Bradley-county-pts',
         url: 'http://bradleytn.geopowered.com/PropertySearch/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/BradleyTN_Assessor/BradleyTN_Basemap/mapserver/0',
         labelFields: ['FULLADDR'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Bradley Co - Parcels (no labels)',
         id: 'tn-Bradley-co-parcels',
         url: 'http://bradleytn.geopowered.com/PropertySearch/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/BradleyTN_Assessor/BradleyTN_PSACadastral/mapserver/0',
         where: "PARCEL<>''",
         labelFields: [''],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cleveland - City Points',
         id: 'tn-Cleveland-City-pts',
         url: 'https://gis.clevelandtn.gov/arcgis/rest/services/Operational/OperationalLayers/MapServer/1',
         labelFields: ['FULLADDR'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Cleveland - City Parcels',
         id: 'tn-Cleveland-city-parcels',
         url: 'https://gis.clevelandtn.gov/arcgis/rest/services/Operational/OperationalLayers/MapServer/3',
         where: "ParcelID<>''",
         labelFields: ['StreetNumber','StreetName'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carter / Johnson / Sullivan / Washington / Unicoi - Address Points',
         id: 'tn-multi-county-pts-1',
         url: 'https://gis.johnsoncitytn.org/arcgis/rest/services/Address/SiteAddressPoint/MapServer/0',
         labelFields: ['FULLADDR'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        // CARTER, JOHNSON, SULLIVAN, WASHINGTON, UNICOI
        {name: 'Carter / Johnson / Sullivan / Washington / Unicoi - Parcels',
         id: 'tn-multi-co-parcels-1',
         url: 'https://gis.johnsoncitytn.org/arcgis/rest/services/ParcelPublishing/TaxParcels/MapServer/0',
         labelFields: ['SITEADDRESS'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Davidson Co - Address Points',
         id: 'tn-Davidson-county-pts',
         url: 'http://maps.nashville.gov/arcgis/rest/services/Addressing/AddressPoints/MapServer/0',
         labelFields: ['FullAddress'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Davidson Co - Parcels',
         id: 'tn-Davidson-co-parcels',
         url: 'http://maps.nashville.gov/arcgis/rest/services/Cadastral/Parcels/MapServer/0',
         labelFields: ['PropHouse','PropStreet'],
         processLabel: function(label) { return label.replace(/^0\s+/,''); },
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hamilton Co - Address Points',
         id: 'tn-Hamilton-county-pts',
         url: 'https://mapsdev.hamiltontn.gov/hcwa03/rest/services/Live_Addressing/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Hamilton Co - Parcels',
         id: 'tn-Hamilton-co-parcels',
         url: 'https://mapsdev.hamiltontn.gov/hcwa03/rest/services/Live_Parcels/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hardeman Co - Parcels (no labels)',
         id: 'tn-Hardeman-co-parcels',
         url: 'http://tn.hardeman.geopowered.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/HardemanTN/HardemanTN_Cadastral/mapserver/46',
         where: "GISLINK <> ''",
         labelFields: [''],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Address Points',
         id: 'tn-Jefferson-county-pts',
         url: 'https://services7.arcgis.com/in9ruKxwZKI20efQ/ArcGIS/rest/services/JeffersonAddresses/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        // I'M NOT SURE WHICH OF THE FOLLOWING PARCEL LAYERS IS THE BEST.  THE FIRST IS REFERENCED BY THE WEBSITE, BUT THE SECOND HAS SOME MINOR
        // DIFFERENCES I NOTICED WHILE SPOT CHECKING.
        {name: 'Jefferson Co - Parcels',
         id: 'tn-Jefferson-co-parcels',
         url: 'https://services7.arcgis.com/in9ruKxwZKI20efQ/ArcGIS/rest/services/Parcel_Upload/FeatureServer/2',
         where: "PARID <> ''",
         labelFields: ['ST_NUM','STREET'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Parcels 2',
         id: 'tn-Jefferson-co-parcels-2',
         url: 'https://services7.arcgis.com/in9ruKxwZKI20efQ/ArcGIS/rest/services/JeffersonParcels/FeatureServer/0',
         where: "PARCELID <> ''",
         labelFields: ['ST_NUM','STREET'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Maury Co - Parcels',
         id: 'tn-Maury-co-parcels',
         url: 'http://maps.maurycounty-tn.gov/arcgis/rest/services/TaxParcelQuery/MapServer/0',
         where: "PARCELID <> ''",
         labelFields: ['SITEADDRESS'],
         processLabel: function(label) { return label.replace(/^(.*)\s(\d+)$/,'$2 $1'); },
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'McMinn Co - Parcels (no labels)',
         id: 'tn-McMinn-co-parcels',
         url: 'http://tn.mcminn.geopowered.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/McMinnTN/McMinnTN_PSACadastral/MapServer/46',
         where: "GISLINK <> ''",
         labelFields: [''],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'McMinn Co - Structures',
         id: 'tn-McMinn-co-structures',
         url: 'http://tn.mcminn.geopowered.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/McMinnTN/McMinnTN_Layers/mapserver/3',
         labelFields: ['HouseNum','PreDirect','StName','StType'],
         state: 'TN',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Montgomery Co - Parcels',
         id: 'tn-Montgomery-co-parcels',
         url: 'https://mcggis.mcgtn.org/mcggis/rest/services/Parcels/MapServer/0',
         labelFields: ['PropertyAddress'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Putnam Co - Address Points',
         id: 'tn-Putnam-county-pts',
         url: 'http://services.putnamco.org/arcgis/rest/services/Basemaps/ParcelPublicAccess/MapServer/2',
         labelFields: ['FULLADDR'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Putnam Co - Parcels',
         id: 'tn-Putnam-co-parcels',
         url: 'http://services.putnamco.org/arcgis/rest/services/TaxParcelQuery/MapServer/0',
         where: "PARCELID<>''",
         labelFields: ['SITEADDRESS'],
         processLabel: function(label) { return label.replace(/^(.*)\s(\d+)$/,'$2 $1'); },
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rutherford Co - Address Points',
         id: 'tn-Rutherford-county-pts',
         url: 'http://map3.rutherfordcountytn.gov/arcgis/rest/services/Basemaps/Basemap/MapServer/21',
         labelFields: ['FULLADDR'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Rutherford Co - Parcels',
         id: 'tn-Rutherford-co-parcels',
         url: 'http://map3.rutherfordcountytn.gov/arcgis/rest/services/Basemaps/Basemap/MapServer/16',
         where: "MAP<>''",
         labelFields: ['STREETNO','STREETDIR','STREETNAME','STREETSUF'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sevier Co - Address Points',
         id: 'tn-Sevier-county-pts',
         url: 'https://services1.arcgis.com/Qu4yM4JJvNoC2GKw/ArcGIS/rest/services/Address/FeatureServer/0',
         labelFields: ['LSN'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Sevier Co - Parcels',
         id: 'tn-Sevier-co-parcels',
         url: 'https://services1.arcgis.com/Qu4yM4JJvNoC2GKw/ArcGIS/rest/services/Parcel_Sevier_County/FeatureServer/0',
         labelFields: ['ADDRESS'],
         processLabel: function(label) { return label.replace(/^(.*)\s(\d+)$/,'$2 $1'); },
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        // THERE IS SOMETHING ABOUT THE QUERY THAT THIS SITE DOESN'T LIKE, BUT I HAVEN'T FIGURED IT OUT.  MAYBE DOESN'T SUPPORT GEOMETRY IN QUERIES???
        // {name: 'Shelby Co - Parcels',
        //  id: 'tn-Shelby-co-parcels',
        //  url: 'http://gis.assessor.shelby.tn.us/proxy.ashx?http://services4.geopowered.com/arcgis/rest/services/ShelbyTN/ShelbyTN_Cadastral2017/MapServer/2',
        //  labelFields: [''],
        //  state: 'TN',
        //  style: DEFAULT_PARCEL_STYLE},

        {name: 'Sumner Co - Address Points',
         id: 'tn-Sumner-county-pts',
         url: 'http://tn.sumner.geopowered.com/proxy.ashx?http://services1.geopowered.com/arcgis/rest/services/SumnerTN/SumnerTN_PSALayers/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Sumner Co - Parcels (no labels)',
         id: 'tn-Sumner-co-parcels',
         url: 'http://tn.sumner.geopowered.com/proxy.ashx?http://services1.geopowered.com/arcgis/rest/services/SumnerTN/SumnerTN_Cadastral/MapServer/46',
         where: "GISLINK <> ''",
         labelFields: [''],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tipton Co - Address Points',
         id: 'tn-Tipton-county-pts',
         url: 'http://tiptontn.geopowered.com/PropertySearch/proxy.ashx?http://services2.geopowered.com/arcgis/rest/services/TiptonTN/Tipton_E911/mapserver/0',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Tipton Co - Parcels',
         id: 'tn-Tipton-co-parcels',
         url: 'http://tiptontn.geopowered.com/PropertySearch/proxy.ashx?http://services2.geopowered.com/arcgis/rest/services/TiptonTN/TiptonTN_PSACadastral/MapServer/13',
         where: "GISLINK <> ''",
         labelFields: ['ST_NUM','STREET'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Williamson Co - Parcels',
         id: 'tn-Williamson-co-parcels',
         url: 'http://arcgis2.williamsoncounty-tn.gov/arcgis/rest/services/Williamson/MapServer/3',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wilson Co - Address Points',
         id: 'tn-Wilson-county-pts',
         url: 'http://geopowered.wilson.wilsontngis.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/WilsonTN_PSA/WilsonTN_PSALayers/mapserver/2',
         labelFields: ['ADDRESS'],
         state: 'TN',
         style: DEFAULT_PT_STYLE},

        {name: 'Wilson Co - Parcels (no labels)',
         id: 'tn-Wilson-co-parcels',
         url: 'http://geopowered.wilson.wilsontngis.com/Proxy.ashx?http://services3.geopowered.com/arcgis/rest/services/WilsonTN_PSA/WilsonTN_Assessor_PSACadastral/MapServer/45',
         where: "GISLINK <> ''",
         labelFields: [''],
         state: 'TN',
         style: DEFAULT_PARCEL_STYLE},


        // Texas
        // ****************************

        {name: 'Abilene - City Address Points',
         id: 'tx-abilene-city-address',
         url: 'https://gis.abilenetx.com/arcgis/rest/services/Address_Points/MapServer/0',
         labelFields: ['FULLADDR'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Amarillo City - Parcels',
         id: 'tx-amarillo-city-parcels',
         url: 'https://services6.arcgis.com/Vdk8uHgdgYx8ZqS6/ArcGIS/rest/services/TaxAccountParcelsArcGISOnline/FeatureServer/0',
         labelFields: ['Address','STREET_PFX','STREET','STREET_SFX'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Andrews Co - Parcels',
         id: 'tx-andrews-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/AndrewsMapSearch/MapServer/1',
         labelFields: ['Andrews.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Angelina Co - Parcels',
         id: 'tx-angelina-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/AngelinaMapSearch/MapServer/7',
         labelFields: ['Angelina.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Anna City - Parcels',
         id: 'tx-anna-city-parcels',
         url: 'https://services5.arcgis.com/DvFgDXTY4DS4ZXFx/ArcGIS/rest/services/ClippedParcels/FeatureServer/0',
         labelFields: ['situs_num','situs_stre','situs_st_1','situs_st_2'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Aransas Co - Parcels',
         id: 'tx-aransas-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/AransasMapSearch/MapServer/1',
         labelFields: ['Aransas.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Atascosa Co - Parcels',
         id: 'tx-Atascosa-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/AtascosaMapSearch/MapServer/7',
         labelFields: ['Atascosa.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Austin Co - Parcels',
         id: 'tx-austin-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/AustinWeb/MapServer/0',
         labelFields: ['AustinCad.DBO.Accounts.situs_num','AustinCad.DBO.Accounts.situs_street_prefx','AustinCad.DBO.Accounts.situs_street','AustinCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bandera Co - Parcels',
         id: 'tx-bandera-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/BanderaMapSearch/MapServer/6',
         labelFields: ['Bandera.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bastrop Co - Parcels',
         id: 'tx-bastrop-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/BastropWeb/MapServer/0',
         labelFields: ['BastropCad.DBO.Accounts.situs_num','BastropCad.DBO.Accounts.situs_street_prefx','BastropCad.DBO.Accounts.situs_street','BastropCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bee Co - Parcels',
         id: 'tx-bee-co-parcels',
         url: 'https://services7.arcgis.com/cPZChP7n2kRoyp30/ArcGIS/rest/services/Bee_CAD/FeatureServer/3',
         labelFields: ['Prop_Street_Number','Prop_Street','Prop_Street_Dir'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bell Co - Parcels',
         id: 'tx-bell-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/BellMapSearch/MapServer/1',
         labelFields: ['Bell.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bexar Co - Parcels',
         id: 'tx-bexar-co-parcels',
         url: 'http://www.bcad.org/arcgis/rest/services/PAMapSearch/MapServer/6',
         labelFields: ['PAMaps.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brazoria Co - Parcels',
         id: 'tx-brazoria-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/BrazoriaMapSearch/MapServer/8',
         labelFields: ['Brazoria.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brazos Co - Parcels',
         id: 'tx-brazos-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/BrazosWeb/MapServer/0',
         labelFields: ['BrazosCad.DBO.Accounts.situs_num','BrazosCad.DBO.Accounts.situs_street_prefx','BrazosCad.DBO.Accounts.situs_street','BrazosCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brown Co - Parcels',
         id: 'tx-brown-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/BrownMapSearch/MapServer/1',
         labelFields: ['Brown.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Bryan City - Parcels',
         id: 'tx-bryan-co-parcels',
         url: 'https://maps.bryantx.gov/arcgis/rest/services/Address/AddressManagement/MapServer/2',
         labelFields: ['situs_num','situs_stre','situs_st_1','situs_st_2'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Burleson Co - Parcels',
         id: 'tx-burleson-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/BurlesonWeb/MapServer/0',
         labelFields: ['BurlesonCad.dbo.Accounts.situs_num','BurlesonCad.dbo.Accounts.situs_street_prefx','BurlesonCad.dbo.Accounts.situs_street','BurlesonCad.dbo.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Burnet Co - Parcels',
         id: 'tx-burnet-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/BurnetMapSearch/MapServer/7',
         labelFields: ['Burnet.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Calhoun Co - Parcels',
         id: 'tx-calhoun-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/CalhounMapSearch/MapServer/7',
         labelFields: ['Calhoun.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Camp Co - Parcels',
         id: 'tx-camp-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/CampWeb/MapServer/0',
         labelFields: ['CampCad.DBO.Accounts.situs_num','CampCad.DBO.Accounts.situs_street_prefx','CampCad.DBO.Accounts.situs_street','CampCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carson Co - Parcels',
         id: 'tx-carson-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/CarsonWeb/MapServer/0',
         labelFields: ['CarsonCad.DBO.Accounts.situs_num','CarsonCad.DBO.Accounts.situs_street_prefx','CarsonCad.DBO.Accounts.situs_street','CarsonCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

//        {name: 'Carrollton City - Parcels',
//         id: 'tx-carrollton-city-parcels',
//         url: 'http://maps.cityofcarrollton.com/arcgis/rest/services/Webclstr1/BaseMap/MapServer/6',
//         labelFields: ['STR_NUM','STR_DIR','STR_NAME','STR_SUF'],
//         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
//         state: 'TX',
//         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cass Co - Parcels',
         id: 'tx-cass-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/CassMapSearch/MapServer/1',
         labelFields: ['Cass.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cherokee Co - Parcels',
         id: 'tx-cherokee-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/CherokeeMapSearch/MapServer/7',
         labelFields: ['Cherokee.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cochran Co - Parcels',
         id: 'tx-cochran-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/CochranMapSearch/MapServer/6',
         labelFields: ['Cochran.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'College Station City - Buildings',
         id: 'tx-college-station-city-buildings',
         url: 'https://maps.cstx.gov/cstx/rest/services/College_Station_Basemap/MapServer/13',
         labelFields: ['FULL_ADDRESS'],
         processLabel: function(label) { return label.replace(/^(\d+)(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Collin co - Address Points',
         id: 'tx-collin-co-address-points',
         url: 'http://gis.co.collin.tx.us/arcgis/rest/services/basemap/basemap14/MapServer/181',
         labelFields: ['situs_num','situs_stre','situs_st_1','situs_st_2'],
         processLabel: function(label) { return label.replace(/^(\d+)(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Colorado Co - Parcels',
         id: 'tx-colorado-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ColoradoMapSearch/MapServer/7',
         labelFields: ['Colorado.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Comal Co - Parcels',
         id: 'tx-comal-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ComalMapSearch/MapServer/7',
         labelFields: ['Comal.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Comanche Co - Parcels',
         id: 'tx-comanche-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/ComancheWeb/MapServer/0',
         labelFields: ['ComancheCad.DBO.Accounts.situs_num','ComancheCad.DBO.Accounts.situs_street_prefx','ComancheCad.DBO.Accounts.situs_street','ComancheCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Coppell City - Parcels',
         id:  'tx-coppell-city-parcels',
         url:  'https://map.coppelltx.gov/gis/rest/services/External/MapLayers/MapServer/11',
         labelFields:  ['STREET_NUM','FULL_STREET_NAME' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Coryell Co - Parcels',
         id:  'tx-coryell-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/CoryellWeb/MapServer/0',
         labelFields:  ['CoryellCad.DBO.Accounts.situs_num', 'CoryellCad.DBO.Accounts.situs_street_prefx', 'CoryellCad.DBO.Accounts.situs_street', 'CoryellCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Crane Co - Parcels',
         id:  'tx-crane-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/CraneWeb/MapServer/0',
         labelFields:  ['CraneCad.DBO.TempAccounts.situs_num', 'CraneCad.DBO.TempAccounts.situs_street_prefx', 'CraneCad.DBO.TempAccounts.situs_street', 'CraneCad.DBO.TempAccounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Dallam Co - Parcels',
         id:  'tx-dallam-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/DallamWeb/MapServer/0',
         labelFields:  ['DallamCad.DBO.Accounts.situs_num', 'DallamCad.DBO.Accounts.situs_street_prefx', 'DallamCad.DBO.Accounts.situs_street', 'DallamCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

		 {name: 'Dallas - City Parcels',
         id: 'tx-dallas-city-parcels',
         url: 'https://maps.dcad.org/prdwa/rest/services/Property/ParcelQuery/MapServer/4',
         labelFields: ['SITEADDRESS'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Dallas Co - Parcels',
         id: 'tx-dallas-co-parcels',
         url: 'https://maps.dcad.org/prdwa/rest/services/Property/ParcelQuery/MapServer/4',
         labelFields: ['SITEADDRESS'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Deaf Smith Co - Parcels',
         id: 'tx-deafsmith-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/DeafSmithMapSearch/MapServer/7',
         labelFields: ['DeafSmith.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Decatur City - Parcels',
         id:  'tx-decatur-city-parcels',
         url:  'https://services1.arcgis.com/PLOR6Lqgjdua9pO5/arcgis/rest/services/Layers/FeatureServer/0/',
         labelFields:  ['HOUSENUM', 'PREDIR', 'STREETNAME', 'STTYPE' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Delta Co - Parcels',
         id:  'tx-delta-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/DeltaWeb/MapServer/0',
         labelFields:  ['DeltaCad.DBO.Accounts.situs_num', 'DeltaCad.DBO.Accounts.situs_street_prefx', 'DeltaCad.DBO.Accounts.situs_street', 'DeltaCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Denton Co - Parcels',
         id: 'tx-denton-co-parcels',
         url: 'http://gis.dentoncounty.com/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Dimmit Co - Parcels',
         id:  'tx-dimmit-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/DimmitWeb/MapServer/0',
         labelFields:  ['DimmitCad.DBO.Accounts.situs_num', 'DimmitCad.DBO.Accounts.situs_street_prefx', 'DimmitCad.DBO.Accounts.situs_street', 'DimmitCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Duval Co - Parcels',
         id:  'tx-duval-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/DuvalWeb/MapServer/0',
         labelFields:  ['DuvalCad.DBO.Accounts.situs_num', 'DuvalCad.DBO.Accounts.situs_street_prefx', 'DuvalCad.DBO.Accounts.situs_street', 'DuvalCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Ellis Co - Parcels',
         id:  'tx-ellis-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/EllisWeb/MapServer/0',
         labelFields:  ['EllisCad.DBO.Accounts.situs_num', 'EllisCad.DBO.Accounts.situs_street_prefx', 'EllisCad.DBO.Accounts.situs_street', 'EllisCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'El Paso Co - Parcels',
         id: 'tx-el-paso-co-parcels',
         url: 'http://gis.elpasotexas.gov/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['CAD_2018.DBO.ParcelAttribute.SITUS_NUM','CAD_2018.DBO.ParcelAttribute.SITUS_STRE'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Falls Co - Parcels',
         id: 'tx-falls-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/FallsMapSearch/MapServer/7',
         labelFields: ['Falls.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Fannin Co - Parcels',
         id:  'tx-fannin-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/FanninWeb/MapServer/0',
         labelFields:  ['FanninCad.DBO.Accounts.situs_num', 'FanninCad.DBO.Accounts.situs_street_prefx', 'FanninCad.DBO.Accounts.situs_street', 'FanninCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Fayette Co - Parcels',
         id:  'tx-fayette-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/FayetteWeb/MapServer/0',
         labelFields:  ['FayetteCad.DBO.Accounts.situs_num', 'FayetteCad.DBO.Accounts.situs_street_prefx', 'FayetteCad.DBO.Accounts.situs_street', 'FayetteCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Fort Bend Co - Address Points',
         id: 'tx-fort-bend-address',
         url: 'https://arcgisweb.co.fort-bend.tx.us/arcgis/rest/services/General/Address_Points/MapServer/0',
         labelFields: ['STREET_NUM','STREET_NAM','STREET_SUF'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Fort Worth City - Parcels',
         id: 'tx-fort-worth-parcels',
         url: 'https://mapitwest.fortworthtexas.gov/ags/rest/services/FWGISData/FW_GIS_DATA/MapServer/13',
         labelFields: ['ADDR_NO','PREFIX','STREET_NAME','STREET_TYPE','SUFFIX'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Flower Mound City - Parcels',
         id: 'tx-flower-mound-city-parcels',
         url: 'https://gismaps.flower-mound.com/wafmp/rest/services/Basemap/Parcels_MS/MapServer/0',
         labelFields: ['ADDRESS_1'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Freestone Co - Parcels',
         id:  'tx-freestone-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/FreestoneWeb/MapServer/0',
         labelFields:  ['FreestoneCad.DBO.Accounts.situs_num', 'FreestoneCad.DBO.Accounts.situs_street_prefx', 'FreestoneCad.DBO.Accounts.situs_street', 'FreestoneCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Frisco - City Parcels',
         id: 'tx-frisco-city-parcels',
         url: 'http://mapcache.friscotexas.gov/arcgis/rest/services/Resident/MapServer/10',
         labelFields: ['Address'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Gaines Co - Parcels',
         id:  'tx-gaines-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/GainesWeb/MapServer/0',
         labelFields:  ['GainesCad.DBO.Accounts.situs_num', 'GainesCad.DBO.Accounts.situs_street_prefx', 'GainesCad.DBO.Accounts.situs_street', 'GainesCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Galveston Co - Parcels',
         id: 'tx-galveston-co-parcels',
         url: 'https://services2.arcgis.com/7Zo7vX4Yxo9Z7Vw3/ArcGIS/rest/services/MyMapService/FeatureServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)\s+.*,.*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Garland City - Address Points',
         id: 'tx-garland-city-address',
         url: 'https://maps.garlandtx.gov/arcgis/rest/services/OpenData/OPENDATA_BaseLayers/MapServer/5',
         labelFields: ['STREETNUM','STREETPREFIX','STREETNAME','STREETTYPE','STREETSUFFIX'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Gillespie Co - Parcels',
         id: 'tx-gillespie-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/GillespieMapSearch/MapServer/7',
         labelFields: ['Gillespie.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

//        {name:  'Glasscock Co - Parcels',
//         id:  'tx-glasscock-co-parcels',
//         url:  'https://gis.bisconsultants.com/bisgis/rest/services/GlasscockWeb/MapServer/0',
//         labelFields:  ['GlasscockCad.DBO.Accounts.situs_num', 'GlasscockCad.DBO.Accounts.situs_street_prefx', 'GlasscockCad.DBO.Accounts.situs_street', 'GlasscockCad.DBO.Accounts.situs_street_sufix' ],
//         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
//         state:  'TX',
//         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Goliad Co - Parcels',
         id: 'tx-goliad-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/GoliadMapSearch/MapServer/7',
         labelFields: ['Goliad.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Granbury City - Parcels',
         id:  'tx-granbury-city-parcels',
         url:  'https://gis.newedgeservices.com/arcgis/rest/services/Granbury/GranburyWebMap_PublicSite/MapServer/4',
         labelFields:  ['GranburyGIS.SDE.Parcels.vm_situs' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Gray Co - Parcels',
         id:  'tx-gray-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/GrayWeb/MapServer/0',
         labelFields:  ['GrayCad.DBO.Accounts.situs_num', 'GrayCad.DBO.Accounts.situs_street_prefx', 'GrayCad.DBO.Accounts.situs_street', 'GrayCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Grayson Co - Parcels',
         id:  'tx-grayson-co-parcels',
         url:  'http://maps.co.grayson.tx.us/gcgis/rest/services/Grayson/Addresses/MapServer/5',
         labelFields:  ['SitusNumbe', 'SitusStree', 'SitusStr_1', 'SitusStr_2' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Gregg Co - Parcels',
         id: 'tx-gregg-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/GreggWeb/MapServer/0/',
         labelFields: ['GreggCad.dbo.Accounts.situs_num','GreggCad.dbo.Accounts.situs_street_prefx','GreggCad.dbo.Accounts.situs_street','GreggCad.dbo.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Grimes Co - Parcels',
         id:  'tx-grimes-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/GrimesWeb/MapServer/0',
         labelFields:  ['GrimesCad.DBO.Accounts.situs_num', 'GrimesCad.DBO.Accounts.situs_street_prefx', 'GrimesCad.DBO.Accounts.situs_street', 'GrimesCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Guadalupe Co - Parcels',
         id: 'tx-guadalupe-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/GuadalupeMapSearch/MapServer/7',
         labelFields: ['Guadalupe.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Hansford Co - Parcels',
         id:  'tx-hansford-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HansfordWeb/MapServer/0',
         labelFields:  ['HansfordCad.DBO.Accounts.situs_num', 'HansfordCad.DBO.Accounts.situs_street_prefx', 'HansfordCad.DBO.Accounts.situs_street', 'HansfordCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Harris Co - Parcels',
         id: 'tx-harris-co-parcels',
         url: 'https://arcweb.hcad.org/server/rest/services/public/public_query/MapServer/0',
         labelFields: ['address'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Hartley Co - Parcels',
         id:  'tx-hartley-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HartleyWeb/MapServer/0',
         labelFields:  ['HartleyCad.DBO.Accounts.situs_num', 'HartleyCad.DBO.Accounts.situs_street_prefx', 'HartleyCad.DBO.Accounts.situs_street', 'HartleyCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Hays Co - Parcels',
         id:  'tx-hays-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HaysWeb/MapServer/0',
         labelFields:  ['HaysCad.dbo.Accounts.situs_num', 'HaysCad.dbo.Accounts.situs_street_prefx', 'HaysCad.dbo.Accounts.situs_street', 'HaysCad.dbo.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Highland Village City - Parcels',
         id:  'tx-highland-village-city-parcels',
         url:  'https://maps.highlandvillage.org/arcgis/rest/services/Maps/Basemap/MapServer/6',
         labelFields:  ['SITUS' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

//        {name:  'Hockley Co - Parcels',
//         id:  'tx-hockley-co-parcels',
//         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HockleyWeb/MapServer/0',
//         labelFields:  ['HockleyCad.DBO.Accounts.situs_num', 'HockleyCad.DBO.Accounts.situs_street_prefx', 'HockleyCad.DBO.Accounts.situs_street', 'HockleyCad.DBO.Accounts.situs_street_sufix' ],
//         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
//         state:  'TX',
//         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Howard Co - Parcels',
         id:  'tx-howard-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HowardWeb/MapServer/0',
         labelFields:  ['HowardCad.DBO.Accounts.situs_num', 'HowardCad.DBO.Accounts.situs_street_prefx', 'HowardCad.DBO.Accounts.situs_street', 'HowardCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Hunt Co - Parcels',
         id:  'tx-hunt-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/HuntWeb/MapServer/0',
         labelFields:  ['HuntCad.DBO.Accounts.situs_num', 'HuntCad.DBO.Accounts.situs_street_prefx', 'HuntCad.DBO.Accounts.situs_street', 'HuntCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Irving City - Parcels',
         id:  'tx-irving-city-parcels',
         url:  'https://services3.arcgis.com/OfsJXUlu8pSkbl7B/ArcGIS/rest/services/CertifiedTax/FeatureServer/0',
         labelFields:  ['STREET_NUM', 'STREET_NAM', 'STREET_SUF' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Jefferson Co - Parcels',
         id: 'tx-jefferson-co-parcels',
         url: 'http://services.arcgis.com/ZXAF35aJr7XcgDMv/ArcGIS/rest/services/JeffersonTXFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Johnson Co - Parcels',
         id:  'tx-johnson-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/JohnsonWeb/MapServer/0',
         labelFields:  ['SITUS' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Kaufman Co - Parcels',
         id: 'tx-kaufman-co-parcels',
         url: 'https://gis.bisconsultants.com/bisgis/rest/services/KaufmanWeb/MapServer/0',
         labelFields: ['KaufmanCad.DBO.Accounts.situs_num','KaufmanCad.DBO.Accounts.situs_street_prefx','KaufmanCad.DBO.Accounts.situs_street','KaufmanCad.DBO.Accounts.situs_street_sufix'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kendall Co - Parcels',
         id: 'tx-kendall-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/KendallMapSearch/MapServer/7',
         labelFields: ['Kendall.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kerr Co - Parcels',
         id: 'tx-kerr-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/KerrMapSearch/MapServer/4',
         labelFields: ['Kerr.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kimble Co - Parcels',
         id: 'tx-kimble-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/KimbleMapSearch/MapServer/7',
         labelFields: ['Kimble.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kingsville - City Parcels',
         id: 'tx-kingsville-city-parcels',
         url: 'https://maps2.timmons.com/arcgis/rest/services/WL_Kingsville/Kingsville_WL_P/MapServer/1',
         labelFields: ['Full_Addr'],
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kinney Co - Parcels',
         id: 'tx-kinney-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/KinneyMapSearch/MapServer/1',
         labelFields: ['Kinney.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kleberg Co - Parcels',
         id: 'tx-kleberg-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/KlebergMapSearch/MapServer/1',
         labelFields: ['Kleberg.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'La Salle Co - Parcels',
         id:  'tx-la salle-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/LaSalleWeb/MapServer/0',
         labelFields:  ['LasalleCad.DBO.Accounts.situs_num', 'LasalleCad.DBO.Accounts.situs_street_prefx', 'LasalleCad.DBO.Accounts.situs_street', 'LasalleCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Lamar Co - Parcels',
         id:  'tx-lamar-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/LamarWeb/MapServer/0',
         labelFields:  ['LamarCad.DBO.Accounts.situs_num', 'LamarCad.DBO.Accounts.situs_street_prefx', 'LamarCad.DBO.Accounts.situs_street', 'LamarCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Lancaster City - Parcels',
         id:  'tx-lancaster-city-parcels',
         url:  'https://services1.arcgis.com/hUry7JDhk1zQOJdo/ArcGIS/rest/services/Zoning_Webmap/FeatureServer/3',
         labelFields:  ['SiteNum', 'SiteDir', 'SiteStreet', 'SiteSuffix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Lavaca Co - Parcels',
         id: 'tx-lavaca-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/LavacaMapSearch/MapServer/7',
         labelFields: ['Lavaca.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Lee Co - Parcels',
         id:  'tx-lee-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/LeeWeb/MapServer/0',
         labelFields:  ['LeeCad.DBO.Accounts.situs_num', 'LeeCad.DBO.Accounts.situs_street_prefx', 'LeeCad.DBO.Accounts.situs_street', 'LeeCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Liberty Co - Parcels',
         id:  'tx-liberty-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/LibertyWeb/MapServer/0',
         labelFields:  ['LibertyCad.DBO.Accounts.situs_num', 'LibertyCad.DBO.Accounts.situs_street_prefx', 'LibertyCad.DBO.Accounts.situs_street', 'LibertyCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Live Oak Co - Parcels',
         id:  'tx-live oak-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/LiveOakWeb/MapServer/0',
         labelFields:  ['LiveOakCad.dbo.Accounts.situs_num', 'LiveOakCad.dbo.Accounts.situs_street_prefx', 'LiveOakCad.dbo.Accounts.situs_street', 'LiveOakCad.dbo.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Longview City - Address Points',
         id:  'tx-longview-city-address',
         url:  'https://cloud.longviewtexas.gov/arcgis/rest/services/WebMaps/WebMapServices/MapServer/3',
         labelFields:  ['STREET_NUM','DIR','STREET','TYPE' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Loving Co - Parcels',
         id: 'tx-loving-co-parcels',
         url: 'https://services7.arcgis.com/cPZChP7n2kRoyp30/ArcGIS/rest/services/Loving_CAD/FeatureServer/2',
         labelFields: ['Prop_Street_Num','Prop_Street'],
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lubbock City - Address Points',
         id: 'tx-lubbock-city-address',
         url: 'http://ewebmap.ci.lubbock.tx.us/arcgis/rest/services/Layers/Default/MapServer/1',
         labelFields: ['ADDR','PREFIX','STREET','STREET_TYPE'],
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Madison Co - Parcels',
         id:  'tx-madison-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/MadisonWeb/MapServer/0',
         labelFields:  ['MadisonCad.DBO.Accounts.situs_num', 'MadisonCad.DBO.Accounts.situs_street_prefx', 'MadisonCad.DBO.Accounts.situs_street', 'MadisonCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Mansfield City - Parcels',
         id:  'tx-mansfield-city-parcels',
         url:  'http://gis4.dfwmaps.com/arcgis/rest/services/ICMansfield/Mansfield_Baselayers/MapServer/4',
         labelFields:  ['ADDRESS' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Marion Co - Parcels',
         id:  'tx-marion-co-parcels',
         url:  'http://gis.pandai.com/arcgis/rest/services/Marion/Marion_Parcel_Cama_JOIN/MapServer/0',
         labelFields:  ['MarionCADGIS.DBO.MapDATA.Prop_Street_Number', 'MarionCADGIS.DBO.MapDATA.Prop_Street', 'MarionCADGIS.DBO.MapDATA.Prop_Street_Dir' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Maverick Co - Parcels',
         id: 'tx-maverick-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/MaverickMapSearch/MapServer/1',
         labelFields: [ 'Maverick.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'McCulloch Co - Parcels',
         id:  'tx-mcculloch-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/McCullochWeb/MapServer/0',
         labelFields:  ['McCullochCad.DBO.Accounts.situs_num', 'McCullochCad.DBO.Accounts.situs_street_prefx', 'McCullochCad.DBO.Accounts.situs_street', 'McCullochCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'McKinney Co - Parcels',
         id:  'tx-mckinney-co-parcels',
         url:  'http://maps.mckinneytexas.org/mckinney/rest/services/MapServices/BaseLayers/MapServer/1',
         labelFields:  ['SitusAdd' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'McLennan Co - Parcels',
         id: 'tx-mclennan-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/MclennanMapSearch/MapServer/7',
         labelFields: [ 'Mclennan.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'McMullen Co - Parcels',
         id:  'tx-mcmullen-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/McMullenWeb/MapServer/0',
         labelFields:  ['McMullenCad.DBO.Accounts.situs_num', 'McMullenCad.DBO.Accounts.situs_street_prefx', 'McMullenCad.DBO.Accounts.situs_street', 'McMullenCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Medina Co - Parcels',
         id:  'tx-medina-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/MedinaWeb/MapServer/0',
         labelFields:  ['MedinaCad.DBO.Accounts.situs_num', 'MedinaCad.DBO.Accounts.situs_street_prefx', 'MedinaCad.DBO.Accounts.situs_street', 'MedinaCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

//  Missing data in parcel information
//        {name:  'Menard Co - Parcels',
//         id:  'tx-menard-co-parcels',
//         url:  'https://gis.bisconsultants.com/bisgis/rest/services/MenardWeb/MapServer/0',
//         labelFields:  ['MenardCad.DBO.Accounts.situs_num', 'MenardCad.DBO.Accounts.situs_street_prefx', 'MenardCad.DBO.Accounts.situs_street', 'MenardCad.DBO.Accounts.situs_street_sufix' ],
//         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
//         state:  'TX',
//         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Midland City - Parcels',
         id:  'tx-midland-city-parcels',
         url:  'https://midland.newedgeservices.com/arcgis/rest/services/Cityworks/BaseMap_and_Trans/MapServer/2',
         labelFields:  ['MidlandGIS.SDE.BM_Parcel.SITENUM', 'MidlandGIS.SDE.BM_Parcel.ADDRESS' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Mills Co - Parcels',
         id:  'tx-mills-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/MillsWeb/MapServer/0',
         labelFields:  ['MillsCad.DBO.Accounts.situs_num', 'MillsCad.DBO.Accounts.situs_street_prefx', 'MillsCad.DBO.Accounts.situs_street', 'MillsCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Montgomery Co - Parcels',
         id: 'tx-montgomery-co-parcels',
         url: 'https://services1.arcgis.com/PRoAPGnMSUqvTrzq/ArcGIS/rest/services/Tax_Parcel_Public_View/FeatureServer/0',
         labelFields: ['PropertyAd'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Moore Co - Parcels',
         id:  'tx-moore-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/MooreWeb/MapServer/0',
         labelFields:  ['MooreCad.DBO.Accounts.situs_num', 'MooreCad.DBO.Accounts.situs_street_prefx', 'MooreCad.DBO.Accounts.situs_street', 'MooreCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Newton Co - Parcels',
         id: 'tx-newton-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/NewtonMapSearch/MapServer/7',
         labelFields: [ 'Newton.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Nolan Co - Parcels',
         id:  'tx-nolan-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/NolanWeb/MapServer/0',
         labelFields:  ['NolanCad.DBO.Accounts.situs_num', 'NolanCad.DBO.Accounts.situs_street_prefx', 'NolanCad.DBO.Accounts.situs_street', 'NolanCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'North Richland Hills - Parcels',
         id:  'tx-north-richland-hills-parcels',
         url:  'http://gis4.dfwmaps.com/arcgis/rest/services/ICNRH/NRH_Baselayers_VE/MapServer/1',
         labelFields:  ['Situs_Addr' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Nueces Co - Parcels',
         id: 'tx-nueces-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/NuecesMapSearch/MapServer/8',
         labelFields: [ 'Nueces.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Ochiltree Co - Parcels',
         id:  'tx-ochiltree-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/OchiltreeWeb/MapServer/0',
         labelFields:  ['OchiltreeCad.DBO.Accounts.situs_num', 'OchiltreeCad.DBO.Accounts.situs_street_prefx', 'OchiltreeCad.DBO.Accounts.situs_street', 'OchiltreeCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Odessa City - Address Points',
         id:  'tx-odessa-city-address',
         url:  'https://gis2.odessa-tx.gov/arcgis/rest/services/Basemaps/GeneralPurposeDefaultBasemap/MapServer/3',
         labelFields:  ['FULLADDR' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Orange Co - Parcels',
         id:  'tx-orange-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/OrangeWeb/MapServer/0',
         labelFields:  ['OrangeCad.DBO.Accounts.situs_num', 'OrangeCad.DBO.Accounts.situs_street_prefx', 'OrangeCad.DBO.Accounts.situs_street', 'OrangeCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Parmer Co - Parcels',
         id:  'tx-parmer-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/ParmerWeb/MapServer/0',
         labelFields:  ['ParmerCad.DBO.Accounts.situs_num', 'ParmerCad.DBO.Accounts.situs_street_prefx', 'ParmerCad.DBO.Accounts.situs_street', 'ParmerCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Pearland City - Parcels',
         id:  'tx-pearland-city-parcels',
         url:  'https://copgisweb.ci.pearland.tx.us/arcgis/rest/services/InteractiveMap/Parcels2017Nov/MapServer/0',
         labelFields:  ['situs_num','situs_street_prefx','situs_street','situs_street_suffix'],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Plano - City Parcels',
         id: 'tx-plano-city-parcels',
         url: 'http://maps.planogis.org/arcgiswad/rest/services/BaseLayers/Parcels/MapServer/0',
         labelFields: ['SITUS_NUM','SITUS_STREET_PREFX','SITUS_STREET','SITUS_STREET_SUFIX'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+(.*)/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Polk Co - Parcels',
         id: 'tx-polk-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/PolkMapSearch/MapServer/8',
         labelFields: [ 'Polk.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Porter City - Parcels',
         id: 'tx-porter-city-parcels',
         url: 'https://services1.arcgis.com/PRoAPGnMSUqvTrzq/ArcGIS/rest/services/Tax_Parcel_Public_View/FeatureServer/0',
         labelFields: [ 'PropertyAd' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Prosper City - address',
         id: 'tx-prosper-city-address',
         url: 'https://gis.newedgeservices.com/arcgis/rest/services/Prosper/ProsperMap/MapServer/40',
         labelFields: [ 'STR_NUMBER' , 'STR_DIRECTION', 'STR_NAME', 'STR_SUFFIX'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Rains Co - Parcels',
         id:  'tx-rains-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/RainsWeb/MapServer/0',
         labelFields:  ['RainsCad.DBO.Accounts.situs_num', 'RainsCad.DBO.Accounts.situs_street_prefx', 'RainsCad.DBO.Accounts.situs_street', 'RainsCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Real Co - Parcels',
         id: 'tx-real-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/RealMapSearch/MapServer/1',
         labelFields: [ 'Real.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Red River Co - Parcels',
         id:  'tx-red river-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/RedRiverWeb/MapServer/0',
         labelFields:  ['RedRiverCad.DBO.Accounts.situs_num', 'RedRiverCad.DBO.Accounts.situs_street_prefx', 'RedRiverCad.DBO.Accounts.situs_street', 'RedRiverCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Reeves Co - Parcels',
         id:  'tx-reeves-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/ReevesWeb/MapServer/0',
         labelFields:  ['ReevesCad.DBO.Accounts.situs_num', 'ReevesCad.DBO.Accounts.situs_street_prefx','ReevesCad.DBO.Accounts.situs_street','ReevesCad.DBO.Accounts.situs_street_sufix'],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Rockwall Co - Parcels',
         id: 'tx-rockwall-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/RockwallMapSearch/MapServer/1',
         labelFields: ['Rockwall.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

// Rowlett has no shape data in the GIS Parcels
//        {name: 'Rowlett City - Parcels',
//         id: 'tx-rowlett-city-parcels',
//         url: 'http://emap.rowlett.com/arcgis/rest/services/BaseMap/Basemap/MapServer/8',
//         labelFields: ['STR_NUM','STR_NAME','STR_TYPE'],
//         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
//         state: 'TX',
//         style: DEFAULT_PARCEL_STYLE},

        {name: 'San Antonio City - Parcels',
         id: 'tx-sanantonio-city-parcels',
         url: 'https://qagis1.sanantonio.gov/ArcGIS/rest/services/BrowseSAOperationalLayers/MapServer/1',
         labelFields: [ 'Address' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'San Jacinto Co - Parcels',
         id: 'tx-sanjacinto-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/SanJacintoMapSearch/MapServer/7',
         labelFields: [ 'SanJacinto.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Schleicher Co - Parcels',
         id:  'tx-schleicher-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/SchleicherWeb/MapServer/0',
         labelFields:  ['SchleicherCad.DBO.Accounts.situs_num', 'SchleicherCad.DBO.Accounts.situs_street_prefx', 'SchleicherCad.DBO.Accounts.situs_street', 'SchleicherCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Scurry Co - Parcels',
         id: 'tx-scurry-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ScurryMapSearch/MapServer/7',
         labelFields: [ 'Scurry.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Shackelford Co - Parcels',
         id:  'tx-shackelford-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/ShackelfordWeb/MapServer/0',
         labelFields:  ['ShackelfordCad.DBO.Accounts.situs_num', 'ShackelfordCad.DBO.Accounts.situs_street_prefx', 'ShackelfordCad.DBO.Accounts.situs_street', 'ShackelfordCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Shelby Co - Parcels',
         id: 'tx-shelby-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ShelbyMapSearch/MapServer/7',
         labelFields: [ 'Shelby.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sherman City - Parcels',
         id: 'tx-sherman-city-parcels',
         url: 'http://maps.ci.sherman.tx.us/arcgis/rest/services/ParcelPublishing/MapServer/8',
         labelFields: [ 'SitusNumbe', 'SitusStree', 'SitusStr_1', 'SitusStr_2' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Smith Co - Address Points',
         id: 'tx-smith-co-address',
         url: 'https://www.smithcountymapsite.org/publicgis/rest/services/Maps/AddressPoints/MapServer/0',
         labelFields: ['ADDRNUM','FULLNAME'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Stevens Co - Parcels',
         id: 'tx-stevens-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/StevensMapSearch/MapServer/6',
         labelFields: [ 'Stevens.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sutton Co - Parcels',
         id: 'tx-sutton-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/SuttonMapSearch/MapServer/6',
         labelFields: [ 'Sutton.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Swisher Co - Parcels',
         id: 'tx-swisher-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/SwisherMapSearch/MapServer/7',
         labelFields: [ 'Swisher.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tarrant Co - Parcels',
         id: 'tx-tarrant-co-parcels',
         url: 'https://services2.arcgis.com/5S5T6XdxjqI5BK2Y/ArcGIS/rest/services/TADMap/FeatureServer/0',
         labelFields: ['SitusAddress'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Temple City - Parcels',
         id:  'tx-temple-city-parcels',
         url:  'https://arcgiswap01.ci.temple.tx.us/arcgis/rest/services/Services/Parcels/FeatureServer/0',
         labelFields:  ['PRIMARY_ADD' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Terrell Co - Parcels',
         id:  'tx-terrell-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/TerrellWeb/MapServer/0',
         labelFields:  ['TerrellCad.DBO.TempAccounts.situs_num', 'TerrellCad.DBO.TempAccounts.situs_street_prefx', 'TerrellCad.DBO.TempAccounts.situs_street', 'TerrellCad.DBO.TempAccounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Titus Co - Parcels',
         id:  'tx-titus-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/TitusWeb/MapServer/0',
         labelFields:  ['TitusCad.DBO.Accounts.situs_num', 'TitusCad.DBO.Accounts.situs_street_prefx', 'TitusCad.DBO.Accounts.situs_street', 'TitusCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Travis Co - Parcels',
         id:  'tx-travis-co-parcels',
         url:  'http://propaccess.traviscad.org/arcgis/rest/services/TravisMapSearch/MapServer/8',
         labelFields:  ['GIS_Data.dbo.web_map_property.situs' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Tyler Co - Parcels',
         id: 'tx-tyler-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/TylerMapSearch/MapServer/1',
         labelFields: [ 'Tyler.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Trinity Co - Parcels',
         id:  'tx-trinity-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/TrinityWeb/MapServer/0',
         labelFields:  ['TrinityCad.DBO.Accounts.situs_num', 'TrinityCad.DBO.Accounts.situs_street_prefx', 'TrinityCad.DBO.Accounts.situs_street', 'TrinityCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Upshur Co - Parcels',
         id: 'tx-upshur-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/UpshurMapSearch/MapServer/7',
         labelFields: [ 'Upshur.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Upton Co - Parcels',
         id: 'tx-upton-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/UptonMapSearch/MapServer/6',
         labelFields: [ 'Upton.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Uvalde Co - Parcels',
         id:  'tx-uvalde-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/UvaldeWeb/MapServer/0',
         labelFields:  ['UvaldeCad.DBO.Accounts.situs_num', 'UvaldeCad.DBO.Accounts.situs_street_prefx', 'UvaldeCad.DBO.Accounts.situs_street', 'UvaldeCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Val Verde Co - Parcels',
         id: 'tx-valverde-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ValVerdeMapSearch/MapServer/7',
         labelFields: [ 'ValVerde.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Van Zandt Co - Parcels',
         id:  'tx-van zandt-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/VanZandtWeb/MapServer/0',
         labelFields:  ['VanZandtCad.DBO.Accounts.situs_num', 'VanZandtCad.DBO.Accounts.situs_street_prefx', 'VanZandtCad.DBO.Accounts.situs_street', 'VanZandtCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name:  'Walker Co - Parcels',
         id:  'tx-walker-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/WalkerWeb/MapServer/0',
         labelFields:  ['WalkerCad.DBO.Accounts.situs_num', 'WalkerCad.DBO.Accounts.situs_street_prefx', 'WalkerCad.DBO.Accounts.situs_street', 'WalkerCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Walla Co - Parcels',
         id: 'tx-walla-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/WallaMapSearch/MapServer/6',
         labelFields: [ 'Walla.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Waller Co - Parcels',
         id: 'tx-waller-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/WallerMapSearch/MapServer/1',
         labelFields: [ 'Waller.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Washington Co - Parcels',
         id:  'tx-washington-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/WashingtonWeb/MapServer/0',
         labelFields:  ['WashingtonCad.DBO.OriginalAccounts.Situs_Address' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Waxahachie City - Parcels',
         id: 'tx-waxahachie-city-parcels',
         url: 'http://arcgis.waxahachie.com/arcgis/rest/services/CityofWaxahachieMainInteractiveMap/MapServer/21',
         labelFields: [ 'situs_num' ,'situs_stre', 'situs_st_1', 'situs_st_2'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Weatherford City - Address Points',
         id: 'tx-weatherford-city-address',
         url: 'https://gis.weatherfordtx.gov/arcgis/rest/services/Public_Basemap/MapServer/0',
         labelFields: [ 'ADD_FULLNAME'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Webb Co - Parcels',
         id: 'tx-webb-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/WebbMapSearch/MapServer/7',
         labelFields: [ 'Webb.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Wharton Co - Parcels',
         id:  'tx-wharton-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/WhartonWeb/MapServer/0',
         labelFields:  ['WhartonCad.DBO.Accounts.situs_num', 'WhartonCad.DBO.Accounts.situs_street_prefx', 'WhartonCad.DBO.Accounts.situs_street', 'WhartonCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Wichita Co - Parcels',
         id: 'tx-wichita-co-parcels',
         url: 'https://propaccess.wadtx.com/arcgis/rest/services/WichitaMapSearch/MapServer/7',
         labelFields: ['GISData.dbo.web_map_property.situs'],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Williamson Co - Address Points',
         id: 'tx-williamson-co-address',
         url: 'https://gis.wilco.org/arcgis/rest/services/public/county_address/MapServer/0',
         labelFields: ['ADDR_NUMBER','RD_FULLNAME'],
         processLabel: function(label) { return label.replace(/^(\d+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wilson Co - Parcels',
         id: 'tx-wilson-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/WilsonMapSearch/MapServer/1',
         labelFields: [ 'Wilson.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Winkler Co - Parcels',
         id: 'tx-winkler-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/WinklerMapSearch/MapServer/7',
         labelFields: [ 'Winkler.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Wood Co - Parcels',
         id:  'tx-wood-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/WoodWeb/MapServer/0',
         labelFields:  ['WoodCad.DBO.Accounts.situs_num', 'WoodCad.DBO.Accounts.situs_street_prefx', 'WoodCad.DBO.Accounts.situs_street', 'WoodCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Yoakum Co - Parcels',
         id: 'tx-yoakum-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/YoakumMapSearch/MapServer/7',
         labelFields: [ 'Yoakum.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

        {name:  'Young Co - Parcels',
         id:  'tx-young-co-parcels',
         url:  'https://gis.bisconsultants.com/bisgis/rest/services/YoungWeb/MapServer/0',
         labelFields:  ['YoungCad.DBO.Accounts.situs_num', 'YoungCad.DBO.Accounts.situs_street_prefx', 'YoungCad.DBO.Accounts.situs_street', 'YoungCad.DBO.Accounts.situs_street_sufix' ],
         processLabel:  function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state:  'TX',
         style:  DEFAULT_PARCEL_STYLE },

        {name: 'Zapata Co - Parcels',
         id: 'tx-zapata-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ZapataMapSearch/MapServer/1',
         labelFields: [ 'Zapata.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},

	{name: 'Zavala Co - Parcels',
         id: 'tx-zavala-co-parcels',
         url: 'https://webmap.trueautomation.com/arcgis/rest/services/ZavalaMapSearch/MapServer/6',
         labelFields: [ 'Zavala.dbo.web_map_property.situs' ],
         processLabel: function(label) { return label.replace(/^([-\d]+)\s+([^,]+).*/,'$1\n$2'); },
         state: 'TX',
         style: DEFAULT_PARCEL_STYLE},


        // Utah
        // *****************************
        {name: 'Cities',
         id: 'ut-cities',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahMunicipalBoundaries/FeatureServer/0',
         labelFields: ['NAME'],
         state: 'UT',
         visibleAtZoom: '0',
         style: DEFAULT_CITY_STYLE},

        {name: 'State Address Points',
         id: 'utah-state-address-points',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahAddressPoints/FeatureServer/0',
         labelFields: ['FullAdd'],
         state: 'UT',
         style: DEFAULT_PT_STYLE},

        {name: 'State Parcels',
         id: 'ut-state-parcels',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahStatewideParcels/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'UT',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Utah Co - Parcels',
         id: 'ut-utah-co-parcels',
         url: 'https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services/UtahCountyParcelsLIR/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'UT',
         style: DEFAULT_PARCEL_STYLE},

        // Virginia
        // ****************************
        {name: 'State Address Points',
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

        // Washington
        // ****************************
        {name: 'Washington - State Parcels',
         id: 'wa-state-parcels',
         url: 'https://services.arcgis.com/jsIt88o09Q0r1j8h/ArcGIS/rest/services/Parcels2017gdb/FeatureServer/0',
         labelFields: ['SITUS_ADDRESS'],
         processLabel: function(label) { return label.replace(/\n.*/,'').replace(/,.*/,''); },
         state: 'WA',
         style: DEFAULT_PARCEL_STYLE},


        // West Virginia
        // ****************************

        {name: 'State - Address Points',
         id: 'wv-state-pts',
         url: 'https://services.wvgis.wvu.edu/arcgis/rest/services/Location/wv_address_labels_WVDHSEM_wm/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'WV',
         style: DEFAULT_STATE_PT_STYLE},

        {name: 'State - Parcels',
         id: 'wv-state-parcels',
         url: 'https://services.wvgis.wvu.edu/arcgis/rest/services/PlanningCadastre/WV_Parcels/MapServer/5',
         labelFields: ['PhyNum','PhyDir','PhyStreet','PhySufx'],
         state: 'WV',
         style: DEFAULT_STATE_PARCEL_STYLE},

        {name: 'Berkeley Co - Address Points',
         id: 'wv-Berkeley-co-pts',
         url: 'http://maps.berkeleywv.org/speedo/rest/services/BC_Layers/Addresses/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Berkeley Co - Parcels (no labels)',
         id: 'wv-Berkeley-co-parcels',
         url: 'http://maps.berkeleywv.org/speedo/rest/services/BC_Layers/Parcels/MapServer/0',
         labelFields: [''],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Brooke Co - Address Points',
         id: 'wv-Brooke-co-pts',
         url: 'https://services2.arcgis.com/R294F7hIrPFzPZNg/ArcGIS/rest/services/2017address2/FeatureServer/0',
         labelFields: ['ADDRESS'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Brooke Co - Parcels',
         id: 'wv-Brooke-co-parcels',
         url: 'https://services2.arcgis.com/R294F7hIrPFzPZNg/ArcGIS/rest/services/2017_public_parcels/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        // This layer was discovered on the same server as Cabell parcel layer #2, but not sure if it's "official".
        {name: 'Cabell Co - Address Points',
         id: 'wv-Cabell-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/CabellWV_Service/FeatureServer/0',
         labelFields: ['ADDR_LABEL','SA_STREET'],
         processLabel: function(label) { return label.replace(/^0\s/,''); },
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        // This layer is used by the Cabell assessor website.
        {name: 'Cabell Co - Parcels #1',
         id: 'wv-Cabell-co-parcels-1',
         url: 'https://mapping.cabellassessor.com/arcgis/rest/services/Parcels17/MapServer/0',
         labelFields: ['IAS_DATA_location'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        // This layer was discovered, but doesn't appear to be used on the county website.
        {name: 'Cabell Co - Parcels #2',
         id: 'wv-Cabell-co-parcels-2',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/CabellWV_Service/FeatureServer/6',
         labelFields: ['situsaddr'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Doddridge Co - Parcels (LIMITED DATA)',
         id: 'wv-Doddridge-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Doddridge/DoddridgeOperational/MapServer/78',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Gilmer Co - Parcels',
         id: 'wv-Gilmer-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Gilmer/GilmerOperational/MapServer/57',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Greenbrier Co - Address Points',
         id: 'wv-Greenbrier-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/GreenbrierService/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Greenbrier Co - Parcels',
         id: 'wv-Greenbrier-co-parcels',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/GreenbrierService/FeatureServer/6',
         labelFields: ['situsaddr'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hampshire Co - Address Points',
         id: 'wv-Hampshire-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/HampshireMapService/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Hampshire Co - Parcels',
         id: 'wv-Hampshire-co-parcels',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/HampshireMapService/FeatureServer/4',
         labelFields: ['situsaddr'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hancock Co - Address Points',
         id: 'wv-Hancock-co-pts',
         url: 'https://services2.arcgis.com/tvHADotIheMdYJmO/ArcGIS/rest/services/AddressPoints/FeatureServer/0',
         labelFields: ['FULL_ADDRE'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Hancock Co - Parcels',
         id: 'wv-hancock-co-parcels',
         url: 'https://services2.arcgis.com/tvHADotIheMdYJmO/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hardy Co - Address Points',
         id: 'wv-Hardy-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/HardyMapService/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        // 2018-03-07 (mapomatic) Hardy Co has a parcel layer, but no address fields

        {name: 'Harrison Co - Address Points',
         id: 'wv-Harrison-co-pts',
         url: 'https://psportal.harrisoncountywv.com/server/rest/services/ftrAddress/MapServer/2',
         labelFields: ['ADDRNUM','FULLNAME'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Harrison Co - Parcels',
         id: 'wv-Harrison-co-parcels',
         url: 'https://psportal.harrisoncountywv.com/server/rest/services/Assessor/Parcels/MapServer/0',
         labelFields: ['LOC2'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jefferson Co - Address Points',
         id: 'wv-Jefferson-co-pts',
         url: 'http://184.12.255.122:6080/arcgis/rest/services/MyGov/Addressing/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'wv-Jefferson-co-parcels',
         url: 'http://184.12.255.122:6080/arcgis/rest/services/Parcels/2018parcels1/MapServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kanawha Co - Parcels',
         id: 'wv-Kanawha-co-parcels',
         url: 'https://gis.kanawhacountyassessor.com:6443/arcgis/rest/services/Parcel_Viewer/Parcels_4_Jan_2018/MapServer/1',
         labelFields: ['Prop_Location'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lewis Co - Parcels',
         id: 'wv-Lewis-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Lewis/LewisOperational/MapServer/54',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'wv-Lincoln-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/Lincoln_WV_Service/FeatureServer/8',
         labelFields: ['ADDR'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        // 2018-03-07 (mapomatic) Lincoln Co has a parcel layer, but no address fields

        {name: 'Mercer Co - Address Points',
         id: 'wv-Mercer-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/MercerWV_Service/FeatureServer/8',
         labelFields: ['FULL_ADD'],
         processLabel: function(label) { return label.replace(/^0 /, ''); },
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Monongalia Co - Address Points',
         id: 'wv-Monongalia-co-pts',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/MonongaliaWV/MapServer/138',
         labelFields: ['FULL_ADDRESS'],
         processLabel: function(label) { return label.replace(/^0 /, ''); },
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Monroe Co - Address Points',
         id: 'wv-Monroe-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/MonroeFieldService/FeatureServer/2',
         labelFields: ['ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Ohio Co - Address Points',
         id: 'wv-Ohio-co-pts',
         url: 'https://services3.arcgis.com/jVFk4Vk9E5P2ulzi/ArcGIS/rest/services/ptad/FeatureServer/0',
         labelFields: ['ADDR'],
         processLabel: function(label) { return label.replace(/((\w+ )+)(\d+)$/,'$3 $1').trim(); },
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Ohio Co - Parcels',
         id: 'wv-Ohio-co-parcels',
         url: 'https://services3.arcgis.com/jVFk4Vk9E5P2ulzi/ArcGIS/rest/services/dpl/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pendleton Co - Address Points',
         id: 'wv-Pendleton-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/PendletonWV_911Service/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Pocahontas Co - Address Points',
         id: 'wv-Pocahontas-co-pts',
         url: 'https://services5.arcgis.com/BS7xAap9C8CqR5BC/ArcGIS/rest/services/Address_Labels/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        // 2018-03-08 (mapomatic) Also found this for Preston Co, which has parcels and address points.
        // Not sure which is the "correct" one.  https://ags.agdmaps.com/arcgis/rest/services/PrestonWV/MapServer

        {name: 'Preston Co - Address Points',
         id: 'wv-Preston-co-pts',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Preston/PrestonOperational/MapServer/46',
         labelFields: ['Number','Street'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Preston Co - NEW Address Points',
         id: 'wv-Preston-co-NEW-pts',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/PrestonNew/PrestonOperational/MapServer/46',
         labelFields: ['ADDR_NUM','Street'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Preston Co - Parcels',
         id: 'wv-Preston-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Preston/PrestonOperational/MapServer/98',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Putnam Co - Parcels',
         id: 'wv-Putnam-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Putnam/PutnamOperational/MapServer/33',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Randolph Co - Address Points',
         id: 'wv-Randolph-co-pts',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Randolph/RandolphOperational/MapServer/74',
         labelFields: ['ADDRESS_NUMBER','STREET_NAME'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Randolph Co - Parcels',
         id: 'wv-Randolph-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Randolph/RandolphOperational/MapServer/79',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        // This is the parcel layer from the Taylor county website
        {name: 'Taylor Co - Parcels #1',
         id: 'wv-Taylor-co-parcels-1',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/TaylorWV_Service/FeatureServer/3',
         labelFields: ['situsaddr'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        // This parcel layer was discovered on the landmarkgeospatial server, but doesn't appear to be used on the Taylor co website?
        {name: 'Taylor Co - Parcels #2',
         id: 'wv-Taylor-co-parcels-2',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Taylor/TaylorOperational2/MapServer/80',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tyler Co - Address Points',
         id: 'wv-Tyler-co-pts',
         url: 'https://services5.arcgis.com/iFLcr1FkuXKlFoEe/ArcGIS/rest/services/Tyler_Site/FeatureServer/0',
         labelFields: ['ADDR_LABEL'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Upshur Co - Address Points',
         id: 'wv-Upshur-co-pts',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Upshur/UpshurOperational/MapServer/1',
         labelFields: ['ADDRESS_NUMBER','STREET_NAME'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Upshur Co - Parcels #1',
         id: 'wv-Upshur-co-parcels-1',
         url: 'https://services5.arcgis.com/iFLcr1FkuXKlFoEe/ArcGIS/rest/services/UpshurTaxParcelsCAMA/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Upshur Co - Parcels #2',
         id: 'wv-Upshur-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Upshur/UpshurOperational/MapServer/2',
         labelFields: ['PARCELADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Webster Co - Address Points',
         id: 'wv-Webster-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/WebsterWV_Service/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Wetzel Co - Address Points',
         id: 'wv-Wetzel-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/WetzelWV/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Wetzel Co - Parcels',
         id: 'wv-Wetzel-co-parcels',
         url: 'https://services5.arcgis.com/iFLcr1FkuXKlFoEe/ArcGIS/rest/services/WC_TM/FeatureServer/0',
         labelFields: ['PARCEL_ADD'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Wood Co - Address Points',
         id: 'wv-Wood-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/WoodWV/FeatureServer/6',
         labelFields: ['FullAddr'],
         state: 'WV',
         style: DEFAULT_PT_STYLE},

        {name: 'Wyoming Co - Parcels',
         id: 'wv-Wyoming-co-parcels',
         url: 'http://www.landmarkgeospatial.com/ArcGIS/rest/services/Wyoming/WyomingOperational/MapServer/17',
         labelFields: ['ADDRESS'],
         state: 'WV',
         style: DEFAULT_PARCEL_STYLE},


        // Wisconsin
        // ****************************

        {name: 'State - Parcels',
         id: 'wi-state-parcels',
         url: 'https://mapservices.legis.wisconsin.gov/arcgis/rest/services/WLIP/PARCELS/FeatureServer/0',
         labelFields: ['SITEADRESS'],
         state: 'WI',
         style: DEFAULT_PARCEL_STYLE},


        // Wyoming
        // ****************************

        {name: 'State - Parcels',
         id: 'wy-state-co-parcels',
         url: 'http://gis.wyo.gov/arcgis/rest/services/ets/Parcels2017/MapServer/0',
         labelFields: ['LOCATIONAD'],
         state: 'WY',
         style: DEFAULT_STATE_PARCEL_STYLE},

        {name: 'Albany Co - Parcels',
         id: 'wy-albany-co-parcels',
         url: 'http://arcmobile.co.albany.wy.us/arcgis/rest/services/AlbanyCounty/Ownership/MapServer/0',
         labelFields: ['LOCATIONAD'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Campbell Co - Address Points',
         id: 'wy-campbell-co-pts',
         url: 'https://services3.arcgis.com/4bXlKnUVV4OdWWbc/ArcGIS/rest/services/SiteAddresses/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Campbell Co - Parcels',
         id: 'wy-campbell-co-parcels',
         url: 'https://services3.arcgis.com/4bXlKnUVV4OdWWbc/arcgis/rest/services/TaxParcels_50d4a788a5ca4c03806c8566c5f15d03/FeatureServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Carbon Co - Parcels',
         id: 'wy-carbon-co-parcels',
         url: 'http://arcmobile.co.albany.wy.us/arcgis/rest/services/CarbonCounty/CarbonCntyWebMap/MapServer/4',
         labelFields: ['SiteAddres'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        // Parcel polygon layer is shifted SE of actual position. ( Sundance WY ) need to check other areas of county.
        {name: 'Crook Co - Parcels',
         id: 'wy-crook-co-parcels',
         url: 'http://gis.crookcounty.wy.gov/arcgis/rest/services/Assessor_Data/MapServer/4',
         labelFields: ['STREET_NAME'],
         //layerOffset: {x: -30, y: +20},
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Goshen Co - Parcels',
         id: 'wy-goshen-co-parcels',
         url: 'http://gis.goshencounty.org/webadaptor/rest/services/GoshenWAB/MapServer/4',
         labelFields: ['StreetNo','StreetDire','StreetName','StreetSuff'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Laramie Co - Address Points',
         id: 'wy-laramie-co-pts',
         url: 'https://maps.laramiecounty.com/arcgis/rest/services/CountyBaseMap/MapServer/134',
         labelFields: ['address'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Laramie Co - Parcels SLOW',
         id: 'wy-laramie-co-parcels',
         url: 'https://maps.laramiecounty.com/arcgis/rest/services/CountyBaseMap/MapServer/136',
         labelFields: ['streetno','streetdir','streetname','streetsuf'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cheyenne / Laramie Co - Address Points',
         id: 'wy-cheyenne-laramie-co-pts',
         url: 'https://maps.laramiecounty.com/arcgis/rest/services/features/CountyBaseMapFeatures/MapServer/0',
         labelFields: ['address'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Cheyenne / Laramie Co - Parcels SLOW',
         id: 'wy-cheyenne-laramie-co-parcels',
         url: 'https://maps.laramiecounty.com/arcgis/rest/services/features/CountyBaseMapFeatures/MapServer/2',
         labelFields: ['streetno','streetdir','streetname','streetsuf'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'wy-lincoln-co-pts',
         url: 'https://maps.lcwy.org/arcgis/rest/services/PUBLIC/RuralAdd/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels (no labels)',
         id: 'wy-lincoln-co-parcels',
         url: 'https://maps.lcwy.org/arcgis/rest/services/PUBLIC/Parcels_arcgis/MapServer/8',
         labelFields: [''],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Natrona Co - Address Points',
         id: 'wy-natrona-co-pts',
         url: 'https://maps.casperwy.gov/nrgisc/rest/services/Addressing/Addressing/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Natrona Co - Parcels (no labels)',
         id: 'wy-natrona-co-parcels',
         url: 'https://maps.casperwy.gov/nrgisc/rest/services/Parcel_Ownership/Parcel/MapServer/0',
         labelFields: [''],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Niobrara Co - Parcels',
         id: 'wy-niobrara-co-parcels',
         url: 'https://services2.arcgis.com/3vf4sgqBAWcEpmNB/ArcGIS/rest/services/Niobrara_Assessor/FeatureServer/4',
         labelFields: ['HouseNumber','StDirection','StreetName','StreetType'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sundance - City Address Points',
         id: 'wy-sundance-city-pts',
         url: 'https://services2.arcgis.com/3vf4sgqBAWcEpmNB/ArcGIS/rest/services/SundanceBaseMap/FeatureServer/0',
         labelFields: ['ADDRESS'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Sundance - City Parcels (no labels)',
         id: 'wy-sundance-city-parcels',
         url: 'https://services2.arcgis.com/3vf4sgqBAWcEpmNB/ArcGIS/rest/services/SundanceBaseMap/FeatureServer/3',
         labelFields: [''],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Unita Co - Parcels',
         id: 'wy-unita-co-parcels',
         url: 'https://services.arcgis.com/3lhSvleboHW33hAj/arcgis/rest/services/UintaCounty/FeatureServer/0',
         labelFields: ['ADDNO','RDNAME'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Evanston - City Parcels',
         id: 'wy-evanston-city-parcels',
         url: 'https://services.arcgis.com/3lhSvleboHW33hAj/ArcGIS/rest/services/MyMapService/FeatureServer/0',
         labelFields: ['ADDNO','RDNAME'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washakie Co - Parcels',
         id: 'wy-washakie-co-parcels',
         url: 'https://services.arcgis.com/VXqKERHDPaVIWXWc/arcgis/rest/services/2017_WashCoParcelData/FeatureServer/0',
         labelFields: ['ADDRESSLOC'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Weston Co - Address Points',
         id: 'wy-weston-co-pts',
         url: 'https://services2.arcgis.com/3vf4sgqBAWcEpmNB/ArcGIS/rest/services/WestonViewer/FeatureServer/1',
         labelFields: ['ADDRESS'],
         state: 'WY',
         style: DEFAULT_PT_STYLE},

        {name: 'Weston Co - Parcels',
         id: 'wy-weston-co-parcels',
         url: 'https://services2.arcgis.com/3vf4sgqBAWcEpmNB/ArcGIS/rest/services/WestonViewer/FeatureServer/7',
         labelFields: ['LOCATION_A'],
         state: 'WY',
         style: DEFAULT_PARCEL_STYLE}

    ];

    let STATES = {
        _states:[
            ['US (Country)','US'],['Alabama','AL'],['Alaska','AK'],['American Samoa','AS'],['Arizona','AZ'],['Arkansas','AR'],['California','CA'],['Colorado','CO'],['Connecticut','CT'],['Delaware','DE'],['District of Columbia','DC'],
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
        url += gisLayer.token ? '&token=' + gisLayer.token : '';
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
                            let layerOffset = gisLayer.layerOffset ? gisLayer.layerOffset : {x: 0, y: 0};
                            if (item.geometry.x) {
                                featureGeometry = new OL.Geometry.Point(item.geometry.x + layerOffset.x, item.geometry.y + layerOffset.y);
                            } else if (item.geometry.rings) {
                                let rings = [];
                                item.geometry.rings.forEach(function(ringIn) {
                                    let pnts= [];
                                    for(let i=0;i<ringIn.length;i++){
                                        pnts.push(new OL.Geometry.Point(ringIn[i][0] + layerOffset.x, ringIn[i][1] + layerOffset.y));
                                    }
                                    rings.push(new OL.Geometry.LinearRing(pnts));
                                });
                                featureGeometry = new OL.Geometry.Polygon(rings);
                                if (gisLayer.areaToPoint) {
                                    featureGeometry = featureGeometry.getCentroid();
                                } else {
                                    area = featureGeometry.getArea();
                                }
                            } else if (data.geometryType === 'esriGeometryPolyline') {
                                let pointList = [];
                                item.geometry.paths.forEach(function(path){
                                    path.forEach(point => pointList.push(new OL.Geometry.Point(point[0] + layerOffset.x, point[1] + layerOffset.y)));
                                });
                                featureGeometry = new OL.Geometry.LineString(pointList);
                            } else {
                                log('Error: Unexpected feature type in layer "' + gisLayer.name + '"');
                                error = true;
                            }
                            if (!error) {
                                let hasVisibleAtZoom = gisLayer.hasOwnProperty('visibleAtZoom');
                                let hasLabelsVisibleAtZoom = gisLayer.hasOwnProperty('labelsVisibleAtZoom');
                                let displayLabelsAtZoom = hasLabelsVisibleAtZoom ? gisLayer.labelsVisibleAtZoom : (hasVisibleAtZoom ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM) + 1;
                                let label = '';
                                if (gisLayer.labelHeaderFields) {
                                    label = gisLayer.labelHeaderFields.map(fieldName => item.attributes[fieldName]).join(' ').trim() + '\n';
                                }
                                if (W.map.getZoom() >= displayLabelsAtZoom || area >= 5000) {
                                    label += gisLayer.labelFields.map(fieldName => item.attributes[fieldName]).join(' ').trim();
                                    if (gisLayer.processLabel) label = gisLayer.processLabel(label).trim();
                                }
                                let attributes = {
                                    layerID: gisLayer.id,
                                    label: label
                                };
                                feature = new OL.Feature.Vector(featureGeometry,attributes);
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
    }  // END processFeatures()

    let _ignoreFetch = false;
    let _lastToken = {};
    function fetchFeatures() {
        if (_ignoreFetch) return;
        _lastToken.cancel = true;
        _lastToken = {cancel: false, features: [], layersProcessed: 0};
        let states = W.model.states.getObjectArray().map(state => state.name);
        $('.gis-state-layer-label').css({'color':'#777'});
        _gisLayers.forEach(gisLayer => {
            let isValidUrl = gisLayer.url && gisLayer.url.trim().length > 0;
            let isVisible = _settings.visibleLayers.indexOf(gisLayer.id) > -1 && _settings.selectedStates.indexOf(gisLayer.state) > -1;
            let isInState = gisLayer.state === 'US' || states.indexOf(STATES.toFullName(gisLayer.state)) > -1;
            // Be sure to use hasOwnProperty when checking this, since 0 is a valid value.
            let isValidZoom = W.map.getZoom() >= (gisLayer.hasOwnProperty('visibleAtZoom') ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM);
            if (isValidUrl && isInState && isVisible && isValidZoom) {
                let url = getUrl(W.map.getExtent(), gisLayer);
                GM_xmlhttpRequest({
                    url: url,
                    context: _lastToken,
                    method: 'GET',
                    onload: function(res) { processFeatures($.parseJSON(res.responseText), res.context, gisLayer); },
                    onerror: function(res) { log('HTTP request error:',JSON.stringify(res)); }
                });
            } else {
                processFeatures({skipIt: true}, _lastToken, gisLayer);
            }
        });
    }

    function showScriptInfoAlert() {
        /* Check version and alert on update */
        if (_alertUpdate && _scriptVersion !== _settings.lastVersion) {
            alert(_scriptVersionChanges);
        }
    }

    function setEnabled(value) {
        _settings.enabled = value;
        saveSettingsToStorage();
        _mapLayer.setVisibility(value);
        let color = value ? '#00bd00' : '#777';
        $('span#gis-layers-power-btn').css({color:color});
        if (value) fetchFeatures();
        $('#layer-switcher-item_gis_layers').prop('checked',value);
    }

    function initLayer(){
        let rules = _gisLayers.map(gisLayer => {
            return new OL.Rule({
                filter: new OL.Filter.Comparison({
                    type: OL.Filter.Comparison.EQUAL_TO,
                    property: "layerID",
                    value: gisLayer.id
                }),
                symbolizer: gisLayer.style
            });
        });

        let style = new OL.Style(DEFAULT_STYLE, { rules: rules } );

        _mapLayer = new OL.Layer.Vector("GIS Layers", {
            uniqueName: "__wmeGISLayers",
            styleMap: new OL.StyleMap(style)
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
            $('.gis-layers-state-checkbox:checked').length === 0 ? $('<div>').text('Turn on layer categories in the Settings tab.') : states.map(st => {
                return $('<fieldset>', {style:'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;'}).append(
                    $('<div>').css({'font-size':'11px'}).append(
                        $('<span>').append(
                            'Select ',
                            $('<a>', {href:"#"}).text("All").click(function(){
                                _ignoreFetch = true;
                                $(this).closest('fieldset').find("input").prop('checked', false).trigger('click');
                                _ignoreFetch = false;
                                fetchFeatures();
                            }),
                            " / ",
                            $('<a>', {href:'#'}).text("None").click(function(){
                                _ignoreFetch = true;
                                $(this).closest('fieldset').find("input").prop('checked', true).trigger('click');
                                _ignoreFetch = false;
                                fetchFeatures();
                            })
                        )
                    ),
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
                $('<legend>', {style:'margin-bottom:0px;border-bottom-style:none;width:auto;'}).append($('<span>', {style:'font-size:14px;font-weight:600;text-transform: uppercase;'}).text('Layer Categories')),
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
                setEnabled(!_settings.enabled);
            })
        );
    }

    function onMapMove() {
        if (_settings.enabled) fetchFeatures();
    }

    function onLayerCheckboxChanged(checked) {
        setEnabled(checked);
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
            '<li class="active"><a data-toggle="tab" href="#panel-gis-state-layers" aria-expanded="true">Layers</a></li>' +
            '<li><a data-toggle="tab" href="#panel-gis-layers-settings" aria-expanded="true">Settings</a></li>' +
            '</ul>',
            $('<div>', {class:'tab-content',style:'padding:8px;padding-top:2px'}).append(
                $('<div>', {class:'tab-pane active', id:'panel-gis-state-layers'}),
                $('<div>', {class:'tab-pane', id:'panel-gis-layers-settings'})
            )
        ).html();

        new Tab('GIS-L', content, initTab, null);
        WazeWrap.Interface.AddLayerCheckbox('Display', 'GIS Layers', _settings.enabled, onLayerCheckboxChanged);
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
                if (W.prefs) {
                    W.prefs.on('change:isImperial', function(){that.appendTab();});
                }
                W.app.modeController.model.bind('change:mode', function(){that.appendTab();});
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
