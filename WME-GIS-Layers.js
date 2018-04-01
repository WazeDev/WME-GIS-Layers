4// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2018.04.01.002
// @description  Adds GIS layers in WME
// @author       MapOMatic
// @include      /^https:\/\/(www|beta)\.waze\.com\/(?!user\/)(.{2,6}\/)?editor\/?.*$/
// @require      https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.4.4/proj4.js
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @license      GNU GPLv3
//
// @connect      23.96.59.134
// @connect      50.120.220.154
// @connect      54.213.14.253
// @connect      63.238.120.156
// @connect      72.10.206.73
// @connect      131.156.137.22
// @connect      136.234.11.196
// @connect      136.234.13.165
// @connect      161.6.109.206
// @connect      184.12.255.122
// @connect      204.63.176.116
// @connect      206.176.83.74
// @connect      216.81.174.57
// @connect      1stdistrict.org
// @connect      aacounty.org
// @connect      abilenetx.com
// @connect      acgov.org
// @connect      adacountyassessor.org
// @connect      adamscounty.org
// @connect      adamscounty.us
// @connect      adamscountyarcserver.com
// @connect      adcogov.org
// @connect      aecomonline.net
// @connect      agdmaps.com
// @connect      ak.us
// @connect      alexandriava.gov
// @connect      allconet.org
// @connect      alleghenycounty.us
// @connect      allencountyohio.com
// @connect      ancgis.com
// @connect      andersoncountysc.org
// @connect      apsu.edu
// @connect      ar.us
// @connect      arapahoegov.com
// @connect      arcgis.com
// @connect      arkansas.gov
// @connect      arlingtonva.us
// @connect      ashtabulacounty.us
// @connect      atlantaregional.com
// @connect      auglaizecounty.org
// @connect      augustaga.gov
// @connect      bakerprojects.com
// @connect      baltimorecountymd.gov
// @connect      bcad.org
// @connect      bcgis.com
// @connect      bcgov.net
// @connect      bcpa.net
// @connect      bedfordcountyva.gov
// @connect      bentoncountyar.gov
// @connect      berkeleycountysc.gov
// @connect      berkeleywv.org
// @connect      bgadd.org
// @connect      bgky.org
// @connect      bhamaps.com
// @connect      bisconsultants.com
// @connect      bonnercounty.us
// @connect      boonecountygis.com
// @connect      boonecountyil.org
// @connect      bouldercounty.org
// @connect      brevardcounty.us
// @connect      brookhavenga.gov
// @connect      broomfield.org
// @connect      broward.org
// @connect      brunswickcountync.gov
// @connect      bryan-county.org
// @connect      bryantx.gov
// @connect      bucoks.com
// @connect      burleighco.com
// @connect      butlercountyauditor.org
// @connect      cabellassessor.com
// @connect      calhouncounty.org
// @connect      cambriacountypa.gov
// @connect      canyonco.org
// @connect      carboncounty.com
// @connect      casperwy.gov
// @connect      casscountynd.gov
// @connect      cattco.org
// @connect      cayugacounty.us
// @connect      ccgisc.org
// @connect      ccgisonline.com
// @connect      ccgov.org
// @connect      ccpa.net
// @connect      cedar-rapids.org
// @connect      centralilmaps.com
// @connect      centrecountypa.gov
// @connect      charlestoncounty.org
// @connect      charlottecountyfl.gov
// @connect      chautauquacounty.com
// @connect      cherokeega.com
// @connect      chesco.org
// @connect      christiancountymo.gov
// @connect      citruspa.org
// @connect      cityhs.net
// @connect      cityofaspen.com
// @connect      cityofboise.org
// @connect      cityofboston.gov
// @connect      cityofcarrollton.com
// @connect      cityofmobile.org
// @connect      claycountygov.com
// @connect      claycountymn.gov
// @connect      clearfieldco.org
// @connect      clearwatercounty.org
// @connect      clermontauditor.org
// @connect      clevelandtn.gov
// @connect      clintoncountypa.com
// @connect      cmpdd.org
// @connect      cobbgis.org
// @connect      co.gov
// @connect      co.us
// @connect      coj.net
// @connect      colliergov.net
// @connect      coloradosprings.gov
// @connect      columbiacountyga.gov
// @connect      columbiapa.org
// @connect      cookcountyil.gov
// @connect      coppelltx.gov
// @connect      countyofkane.org
// @connect      countyofnewaygo.com
// @connect      cowleycounty.org
// @connect      crawfordcountypa.net
// @connect      cstx.gov
// @connect      dancgis.org
// @connect      dauphincounty.org
// @connect      dbqco.org
// @connect      dc.gov
// @connect      dcad.org
// @connect      de.us
// @connect      dekalbcountyga.gov
// @connect      deltacounty.com
// @connect      dentoncounty.com
// @connect      desotocountyms.gov
// @connect      dfwmaps.com
// @connect      digitaldataservices.com
// @connect      districtiii.org
// @connect      dmcwebgis.com
// @connect      dmgov.org
// @connect      dogis.org
// @connect      dorchestercounty.net
// @connect      douglascountyks.org
// @connect      douglasil.com
// @connect      dunwoodyga.gov
// @connect      dupageco.org
// @connect      dutchessny.gov
// @connect      efsedge.com
// @connect      elpasotexas.gov
// @connect      eaglecounty.us
// @connect      emapsplus.com
// @connect      emmetcounty.org
// @connect      erie.gov
// @connect      escpa.org
// @connect      ewashtenaw.org
// @connect      finneycountygis.com
// @connect      fl.us
// @connect      florenceco.org
// @connect      flower-mound.com
// @connect      fnsb.us
// @connect      forsythco.com
// @connect      fortworthtexas.gov
// @connect      franklincountyauditor.com
// @connect      franklincountypa.gov
// @connect      frederickcountymd.gov
// @connect      fremontgis.com
// @connect      friscotexas.gov
// @connect      fultoncountyga.gov
// @connect      fultoncountyoh.com
// @connect      fwb.org
// @connect      ga.us
// @connect      garfield-county.com
// @connect      garlandtx.gov
// @connect      garrettcounty.org
// @connect      gcgis.org
// @connect      geocortex.com
// @connect      geodataportal.net
// @connect      geoportalmaps.com
// @connect      geopowered.com
// @connect      georgetowncountysc.org
// @connect      gfgis.com
// @connect      gishost.com
// @connect      gisservicemt.gov
// @connect      gisworkshop.com
// @connect      gocolumbiamo.com
// @connect      goshencounty.org
// @connect      gptx.org
// @connect      grandgis.com
// @connect      greenegovernment.com
// @connect      greenwoodsc.gov
// @connect      grundyco.org
// @connect      gscplanning.com
// @connect      hamilton-co.org
// @connect      hamiltontn.gov
// @connect      harrisoncountywv.com
// @connect      hawaii.gov
// @connect      hcad.org
// @connect      hcpafl.org
// @connect      hcpao.org
// @connect      helenamontanamaps.org
// @connect      hendersonky.us
// @connect      hennepin.us
// @connect      hernandocountygis-fl.us
// @connect      highlandvillage.org
// @connect      honolulugis.org
// @connect      hornershifrin.com
// @connect      horrycounty.org
// @connect      huntingdoncounty.net
// @connect      id.us
// @connect      idaho.gov
// @connect      il.us
// @connect      in.gov
// @connect      incog.org
// @connect      integritygis.com
// @connect      interdev.com
// @connect      iowa.gov
// @connect      ircgov.com
// @connect      jacksongov.org
// @connect      jccal.org
// @connect      jeffco.us
// @connect      jeffparish.net
// @connect      johnsoncitytn.org
// @connect      k3gis.com
// @connect      kanawhacountyassessor.com
// @connect      kansasgis.org
// @connect      kcgov.us
// @connect      kcmo.org
// @connect      kcor.org
// @connect      kcsgis.com
// @connect      kentcountymi.gov
// @connect      kpb.us
// @connect      ky.gov
// @connect      lakecountyfl.gov
// @connect      lakecountyil.gov
// @connect      lakecountyohio.gov
// @connect      landmarkgeospatial.com
// @connect      laramiecounty.com
// @connect      larimer.org
// @connect      latisviewer.com
// @connect      laurenscountygis.org
// @connect      lawrenceks.org
// @connect      lcounty.com
// @connect      lcwy.org
// @connect      leecountyil.com
// @connect      leoncountyfl.gov
// @connect      lex-co.com
// @connect      lexingtonky.gov
// @connect      lincolncountysd.org
// @connect      linkgis.org
// @connect      linncounty.org
// @connect      livingstoncounty.us
// @connect      lojic.org
// @connect      longviewtexas.gov
// @connect      loraincountyauditor.com
// @connect      lyco.org
// @connect      ma.us
// @connect      madisoncountyky.us
// @connect      mahoningcountyoh.gov
// @connect      mapxpress.net
// @connect      marioncountyfl.org
// @connect      matsugov.us
// @connect      maurycounty-tn.gov
// @connect      mcegisohio.org
// @connect      mcgisweb.org
// @connect      mcgtn.org
// @connect      mchenrycountygis.org
// @connect      mckinneytexas.org
// @connect      md.gov
// @connect      md.us
// @connect      mercercountyohio.org
// @connect      mesacounty.us
// @connect      miamidade.gov
// @connect      midmogis.org
// @connect      missoulacounty.us
// @connect      missouri.edu
// @connect      mn.gov
// @connect      mn.us
// @connect      mo.us
// @connect      mobile311.com
// @connect      monroecounty.gov
// @connect      monroegis.org
// @connect      montcopa.org
// @connect      montgomerycountymd.gov
// @connect      montrosecounty.net
// @connect      ms.gov
// @connect      ms.us
// @connect      mt.gov
// @connect      mygisonline.com
// @connect      mymanatee.org
// @connect      nashville.gov
// @connect      nassaucountyny.gov
// @connect      nccde.org
// @connect      nd.gov
// @connect      nd.us
// @connect      ne.gov
// @connect      newberrycounty.net
// @connect      newedgeservices.com
// @connect      niagaracounty.com
// @connect      nj.us
// @connect      nola.gov
// @connect      normanok.gov
// @connect      norrycopa.net
// @connect      northamptoncounty.org
// @connect      ny.gov
// @connect      ny.us
// @connect      oakgov.com
// @connect      ocpafl.org
// @connect      odessa-tx.gov
// @connect      oh.us
// @connect      okaloosafl.com
// @connect      okc.gov
// @connect      orangeburgcounty.org
// @connect      orangecountygov.com
// @connect      oswegocounty.com
// @connect      ottertailcounty.net
// @connect      pa.us
// @connect      paducahky.gov
// @connect      pagis.org
// @connect      palmcoastgov.com
// @connect      pandai.com
// @connect      parkco.us
// @connect      parkcounty.org
// @connect      pascocountyfl.net
// @connect      paslc.org
// @connect      pcnygis.com
// @connect      perryco.org
// @connect      peoriacounty.org
// @connect      pgatlas.com
// @connect      phila.gov
// @connect      pikepa.org
// @connect      pinellascounty.org
// @connect      pitkincounty.com
// @connect      planogis.org
// @connect      plantation.org
// @connect      polkcountyiowa.gov
// @connect      polkcountymo.org
// @connect      polkpa.org
// @connect      port-orange.org
// @connect      pottcounty.org
// @connect      pottcounty-ia.gov
// @connect      property-appraiser.org
// @connect      putnamco.org
// @connect      putnam-fl.com
// @connect      qac.org
// @connect      rapc.info
// @connect      rcgov.org
// @connect      renogov.org
// @connect      renvillecountymn.com
// @connect      rexburg.org
// @connect      rileycountyks.gov
// @connect      roktech.net
// @connect      romega.us
// @connect      rowlett.com
// @connect      rsdigital.com
// @connect      rutherfordcountytn.gov
// @connect      saludacountysc.net
// @connect      sanantonio.gov
// @connect      sanduskycountygis.org
// @connect      sandyspringsga.gov
// @connect      sanmiguelcountyco.gov
// @connect      sarpy.com
// @connect      sccmo.org
// @connect      scgov.net
// @connect      sciotocountyengineer.org
// @connect      seminolecountyfl.gov
// @connect      semogis.com
// @connect      shelbyal.com
// @connect      showmeboone.com
// @connect      siouxcounty.org
// @connect      siouxfalls.org
// @connect      smithcountymapsite.org
// @connect      snco.us
// @connect      springfieldmo.gov
// @connect      starkcountyohio.gov
// @connect      stclairco.com
// @connect      stlouis-mo.gov
// @connect      stlouisco.com
// @connect      stlouiscountymn.gov
// @connect      suffolkcountyny.gov
// @connect      summitcountyco.gov
// @connect      summitoh.net
// @connect      sumtercountysc.org
// @connect      sussexcountyde.gov
// @connect      talbgov.org
// @connect      tampagov.net
// @connect      tazewell.com
// @connect      tgisites.com
// @connect      thempc.org
// @connect      thomsonreuters.com
// @connect      timmons.com
// @connect      tn.us
// @connect      traviscad.org
// @connect      trueautomation.com
// @connect      tuscaloosa-al.gov
// @connect      tx.us
// @connect      ulstercountyny.gov
// @connect      unionco.org
// @connect      vcgov.org
// @connect      virginia.gov
// @connect      wadtx.com
// @connect      warrencountyny.gov
// @connect      washco-md.net
// @connect      washoecounty.us
// @connect      waxahachie.com
// @connect      wcgis.us
// @connect      weatherfordtx.gov
// @connect      westchestergov.com
// @connect      whitfieldcountyga.com
// @connect      wichita.gov
// @connect      wilco.org
// @connect      willcogis.org
// @connect      williamsoncounty-tn.gov
// @connect      wilsontngis.com
// @connect      wisconsin.gov
// @connect      wiu.edu
// @connect      worldviewsolutions.com
// @connect      wvu.edu
// @connect      wy.gov
// @connect      wy.us
// @connect      wycokck.org
// @connect      wyo.gov
// @connect      ycpc.org
// @connect      yorkcountygov.com
// @connect      yumacountyaz.gov
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

    let _regexReplace = {
        // Strip leading zeros or blank full label for any label starting with a non-digit or is a Zero Address, use with '' as replace.
        r0: /^(0+(\s.*)?|\D.*)/,
        // Strip Everything After Street Type to end of the string by use $1 and $2 capture groups, use with replace '$1$2'
        r1: /^(.* )(Ave(nue)?|Dr(ive)?|St(reet)?|C(our)?t|Cir(cle)?|Blvd|Boulevard|Pl(ace)?|Ln|Lane|Fwy|Freeway|R(oa)?d|Ter(r|race)?|Tr(ai)?l|Way|Rte \d+|Route \d+)\b.*/gi,
        // Strip SPACE 5 Digits from end of string, use with replace ''
        r2: /\s\d{5}$/,
        // Strip Everything after a "~", ",", ";" to the end of the string, use with replace ''
        r3: /(~|,|;).*$/,
        // Move the digits after the last space to before the rest of the string using, us with replace '$2 $1'
        r4: /^(.*)\s(\d+).*/,
        // Insert newline between digits (including "-") and everything after the digits, except (and before) a ",", use with replace '$1\n$2'
        r5: /^([-\d]+)\s+([^,]+).*/,
        // Insert newline between digits and everything after the digits, use with replace '$1\n$2'
        r6: /^(\d+)\s+(.*)/,
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Benton Co - Address Points',
         id: 'ar-benton-co-points',
         url: 'http://gis.bentoncountyar.gov/arcgis/rest/services/Basemaps/Cadastral/MapServer/2',
         labelFields: ['FULL_ADDR'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Benton Co - Parcels',
         id: 'ar-benton-co-parcels',
         url: 'http://gis.bentoncountyar.gov/arcgis/rest/services/Basemaps/Cadastral/MapServer/14',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Craighead Co - Parcels',
         id: 'ar-craighead-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Craighead/Vector/MapServer/16',
         labelFields: ['Craighead.DBO.Craighead_CAMA.PH_ADD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Desha Co - Address Points',
         id: 'ar-desha-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Desha_County/Vector/MapServer/8',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Desha Co - Parcels',
         id: 'ar-desha-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Desha_County/Vector/MapServer/14',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Drew Co - Address Points',
         id: 'ar-drew-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Drew_County/Vector/MapServer/7',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR','PSTR_MOD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Drew Co - Parcels',
         id: 'ar-drew-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Drew_County/Vector/MapServer/13',
         labelFields: ['drew.DBO.DREW_PRMF.Street_Number','drew.DBO.DREW_PRMF.Street_Dir','drew.DBO.DREW_PRMF.Street_Name','drew.DBO.DREW_PRMF.Street_Type','drew.DBO.DREW_PRMF.Street_Type_Suffix'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grant Co - Address Points',
         id: 'ar-grant-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Hot Springs - City Address Points',
         id: 'ar-hot-springs-city-points',
         url: 'http://maps.cityhs.net/arcgiswebadaptor/rest/services/CHSCityWorks_Addressing/MapServer/0',
         labelFields: ['ADR_NUM','ADR_UNIT_TYP','ADR_UNIT_ID','PSTR_FULNAM'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Hot Springs - City Parcels (no labels)',
         id: 'ar-hot-springs-city-parcels',
         url: 'http://maps.cityhs.net/arcgiswebadaptor/rest/services/CHSCityWorks_Addressing/MapServer/13',
         labelFields: [],
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lincoln Co - Address Points',
         id: 'ar-lincoln-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lincoln_County/VectorAssessor/MapServer/6',
         labelFields: ['ADR_NUM','NUM_SUF','FULNAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Lincoln Co - Parcels',
         id: 'ar-lincoln-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lincoln_County/VectorAssessor/MapServer/13',
         labelFields: ['Street_Num','Street_Dir','Street_Nam','Street_Typ'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lonoke Co - Address Points',
         id: 'ar-lonoke-co-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lonoke/Lonoke_Vector/MapServer/0',
         labelFields: ['ADR_NUM','PRE_DIR','PSTR_NAME','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Lonoke Co - Parcels',
         id: 'ar-lonoke-co-parcels',
         url: 'http://www.efsedge.com/arcgis/rest/services/Lonoke/Lonoke_Vector/MapServer/12',
         labelFields: ['Lonoke.DBO.PADM.SNUM','Lonoke.DBO.PADM.SDIR','Lonoke.DBO.PADM.SSTR','Lonoke.DBO.PADM.SSTP'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'North Little Rock - City Address Points',
         id: 'ar-north-little-rock-city-points',
         url: 'http://pagis.org/arcgis/rest/services/APPS_NLR/Apps_BaseMapNLRZoningLandUse/MapServer/11',
         labelFields: ['HOUSENUM','UNIT','PREFIX','STREETNAME','STREETTYPE','SUFFIX'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'North Little Rock - City Parcels',
         id: 'ar-north-little-rock-city-parcels',
         url: 'http://pagis.org/arcgis/rest/services/APPS_NLR/Apps_BaseMapNLRZoningLandUse/MapServer/46',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Pulaski Co - Address Points',
         id: 'ar-pulaski-co-points',
         url: 'http://pagis.org/arcgis/rest/services/APPS/Apps_BaseMap/MapServer/9',
         labelFields: ['HOUSENUM','UNIT','PREFIX','STREETNAME','STREETTYPE','SUFFIX'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Pulaski Co - Parcels',
         id: 'ar-pulaski-co-parcels',
         url: 'http://pagis.org/arcgis/rest/services/APPS/Apps_BaseMap/MapServer/40',
         labelFields: ['PH_ADD'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sheridan - City Address Points',
         id: 'ar-sheridan-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/1',
         labelFields: ['ADR_NUM','PPRE_DIR','PSTR_NAM','PSTR_TYPE','PSUF_DIR'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Tull - City Address Points',
         id: 'ar-tull-city-points',
         url: 'http://www.efsedge.com/arcgis/rest/services/Grant/Grant_Vector/MapServer/2',
         labelFields: ['ADR_NUM','PSTR_FULNAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Washington Co - Address Points',
         id: 'ar-washington-co-points',
         url: 'http://arcserv.co.washington.ar.us/wcgis/rest/services/demo_IT/WashcoDynamic2/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'AR',
         style: DEFAULT_PT_STYLE},

        {name: 'Washington Co - Parcels (no labels)',
         id: 'ar-washington-co-parcels',
         url: 'http://arcserv.co.washington.ar.us/wcgis/rest/services/demo_IT/WashcoDynamic2/MapServer/14',
         labelFields: [],
         state: 'AR',
         style: DEFAULT_PARCEL_STYLE},

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

        {name: 'Adams Co - Address Points',
         id: 'co-adams-co-points',
         url: 'https://gisapp.adcogov.org/arcgis/rest/services/AdamsCountyBasic/MapServer/32',
         labelFields: ['ADDR_FULL'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Adams Co - Parcels',
         id: 'co-adams-co-parcels',
         url: 'https://gisapp.adcogov.org/arcgis/rest/services/AdamsCountyBasic/MapServer/33',
         labelFields: ['CONCATADDR1'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Alamosa Co - Parcels',
         id: 'co-alamosa-co-parcels',
         url: 'https://services1.arcgis.com/zH7gQ37AKcpvTX6d/ArcGIS/rest/services/AlamosaParcels/FeatureServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Arapahoe Co - Address Points',
         id: 'co-arapahoe-co-points',
         url: 'https://gis.arapahoegov.com/arcgis/rest/services/ArapaMAP_3_8_2/MapServer/3',
         labelFields: ['Full_Address'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Arapahoe Co - Parcels',
         id: 'co-arapahoe-co-parcels',
         url: 'https://gis.arapahoegov.com/arcgis/rest/services/ArapaMAP_3_8_2/MapServer/158',
         labelFields: ['Situs_Address'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Archuleta Co - Parcels',
         id: 'co-archuleta-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['SITUS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Aspen - City Address Points',
         id: 'co-aspen-city-points',
         url: 'https://gismap.cityofaspen.com/astro/rest/services/MapAspen/MapAspenNoAnno/MapServer/50',
         labelFields: ['ADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Aspen - City Parcels',
         id: 'co-aspen-city-parcels',
         url: 'https://gismap.cityofaspen.com/astro/rest/services/MapAspen/MapAspenNoAnno/MapServer/55',
         labelFields: ['SITUS_ADDRESS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boulder Co - Address Points',
         id: 'co-boulder-co-points',
         url: 'http://maps.bouldercounty.org/arcgis/rest/services/PARCELS/ADDRESS_POINTS/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Boulder Co - Parcels',
         id: 'co-boulder-co-parcels',
         url: 'http://maps.bouldercounty.org/arcgis/rest/services/PARCELS/PARCELS_OWNER/MapServer/0',
         labelFields: ['SITE_STR_NUM','SITE_STR_UNIT','SITE_STR_PFX','SITE_STREET','SITE_STR_SFX'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Broomfield Co - Address Points',
         id: 'co-broomfield-co-points',
         url: 'http://gis.broomfield.org/ArcGIS/rest/services/Assessor/Subdivisions_Parcels_2D/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Broomfield Co - Parcels',
         id: 'co-broomfield-co-parcels',
         url: 'http://gis.broomfield.org/ArcGIS/rest/services/Assessor/Subdivisions_Parcels_2D/MapServer/1',
         labelFields: ['FULL_ADDRESS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Colorado Springs - City Address Points',
         id: 'co-colorado-springs-city-points',
         url: 'https://gis.coloradosprings.gov/arcgis/rest/services/springsview/SpringsView_AllLayers/MapServer/122',
         labelFields: ['STREET','SUBADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Colorado Springs - City Parcels',
         id: 'co-colorado-springs-city-parcels',
         url: 'https://gis.coloradosprings.gov/arcgis/rest/services/springsview/SpringsView_AllLayers/MapServer/2',
         labelFields: ['MAINADDRES'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Commerce City - City Address Points',
         id: 'co-commerce-city-city-points',
         url: 'http://63.238.120.156/arcgis/rest/services/OpenData/AddressPoints/MapServer/0',
         labelFields: ['ADDR_HN','SUBADDR_TYPE','SUBADDR_UNIT','ADDR_PD','ADDR_SN','ADDR_ST','ADDR_SD'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Commerce City - City Parcels',
         id: 'co-commerce-city-city-parcels',
         url: 'http://63.238.120.156/arcgis/rest/services/OpenData/Parcel/MapServer/0',
         labelFields: ['ADDR_COMPLETE'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Conejos Co - Parcels',
         id: 'co-conejos-co-parcels',
         url: 'https://services1.arcgis.com/zH7gQ37AKcpvTX6d/ArcGIS/rest/services/ConejosParcels/FeatureServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Costilla Co - Parcels',
         id: 'co-costilla-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/CostillaCOFeatures/FeatureServer/2',
         labelFields: ['GIS_Site_Address'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Delta Co - Address Points',
         id: 'co-delta-co-points',
         url: 'http://maps.deltacounty.com/arcgis/rest/services/PARCEL_MAP_B_SERVICE/MapServer/0',
         labelFields: ['Full_Address'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Delta Co - Parcels',
         id: 'co-delta-co-parcels',
         url: 'http://maps.deltacounty.com/arcgis/rest/services/PARCEL_MAP_B_SERVICE/MapServer/9',
         labelFields: ['Full_Add'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Denver Co - Parcels',
         id: 'co-denver-co-parcels',
         url: 'https://services.arcgis.com/ue9rwulIoeLEI9bj/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['SITUS_AD_1'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Address Points',
         id: 'co-douglas-co-points',
         url: 'https://apps.douglas.co.us/arcgis/rest/services/Parcels/AddressPoints_WM/MapServer/1',
         labelFields: ['ADDRESS_SEARCH.STREET_NAME_FULL'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Douglas Co - Parcels (no labels)',
         id: 'co-douglas-co-parcels',
         url: 'https://apps.douglas.co.us/arcgis/rest/services/Parcels/Parcels_WM_Dynamic/MapServer/0',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Eagle Co - Address Points',
         id: 'co-eagle-co-points',
         url: 'https://gismap.eaglecounty.us/arcgiswa/rest/services/FlexApp/Address_ForLabel/MapServer/0',
         labelFields: ['Address'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Eagle Co - Parcels (no labels)',
         id: 'co-eagle-co-parcels',
         url: 'https://gismap.eaglecounty.us/arcgiswa/rest/services/FlexApp/Parcel_Viewer/MapServer/0',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

/*        {name: 'Fremont Co - Address Points',
         id: 'co-fremont-co-pts',
         url: 'http://fremontgis.com/arcgis_102/rest/services/FremontCO_GIS_Layers/MapServer/160',
         labelFields: ['GL_ADR_FUL'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},
Not a valid Address Point Layer
*/

        {name: 'Fremont Co - Parcels',
         id: 'co-fremont-co-parcels',
         url: 'http://fremontgis.com/arcgis_102/rest/services/parcels/MapServer/0',
         labelFields: ['SITE_ADDR'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Garfield Co - Parcels',
         id: 'co-garfield-co-parcels',
         url: 'http://gis.garfield-county.com/arcgis/rest/services/Development/GC_ParcelsNew/MapServer/0',
         labelFields: ['PHYSADDRESS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Gilpin Co - Address Points',
         id: 'co-gilpin-co-points',
         url: 'https://data1.digitaldataservices.com/arcgis/rest/services/GilpinCounty/Gilpin_ParcelOverlay/MapServer/0',
         labelFields: ['fulladdr'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Gilpin Co - Parcels',
         id: 'co-gilpin-co-parcels',
         url: 'https://data1.digitaldataservices.com/arcgis/rest/services/GilpinCounty/Gilpin_ParcelOverlay/MapServer/3',
         labelFields: ['gilpin.sde.AssessorTaxRoll.siteaddress'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Grand Co - Address Points',
         id: 'co-grand-co-points',
         url: 'http://grandgis.com/arcgis/rest/services/gcAddressPoints/MapServer/0',
         labelFields: ['STR_NUM','ST_PDIR','ROAD_NAME'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Grand Co - Parcels',
         id: 'co-grand-co-parcels',
         url: 'http://grandgis.com/arcgis/rest/services/ParcelsNew/MapServer/0',
         labelFields: ['GIS_ADD'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Jefferson Co - Address Points',
         id: 'co-jefferson-co-points',
         url: 'http://mapservices2.jeffco.us/arcgis/rest/services/jMap/Address/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Jefferson Co - Parcels',
         id: 'co-jefferson-co-parcels',
         url: 'http://mapservices2.jeffco.us/arcgis/rest/services/jMap/Parcel/MapServer/0',
         labelFields: ['PRPADDRESS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Parcels',
         id: 'co-lake-co-parcels',
         url: 'https://services1.arcgis.com/38PTfoP8IjlBsxZN/ArcGIS/rest/services/LC_Parcels/FeatureServer/0',
         labelFields: ['PASHOUSE','PASST','PASSNAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'La Plata Co - Address Points',
         id: 'co-la-plata-co-pts',
         url: 'http://lpcgis.laplata.co.us/arcgis/rest/services/Map_LayersJSC/MapServer/75',
         labelFields: ['PROPERTY_A'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'La Plata Co - Parcels',
         id: 'co-la-plata-co-parcels',
         url: 'http://lpcgis.laplata.co.us/arcgis/rest/services/Map_LayersJSC/MapServer/77',
         labelFields: ['SITE_ADDR'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Larimer Co - Address Points',
         id: 'co-larimer-co-pts',
         url: 'https://maps1.larimer.org/arcgis/rest/services/MapServices/Parcels/MapServer/0',
         labelFields: ['FULLADDRESS'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Larimer Co - Parcels',
         id: 'co-larimer-co-parcels',
         url: 'https://maps1.larimer.org/arcgis/rest/services/MapServices/Parcels/MapServer/3',
         labelFields: ['LOCADDRESS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Las Animas Co - Address Points',
         id: 'co-las-animas-co-points',
         url: 'https://services7.arcgis.com/NWWOCaXnjdetEWUz/ArcGIS/rest/services/Las_Animas_County_GIS/FeatureServer/4',
         labelFields: ['FSA'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Las Animas Co - Parcels',
         id: 'co-las-animas-co-parcels',
         url: 'https://services7.arcgis.com/NWWOCaXnjdetEWUz/ArcGIS/rest/services/Las_Animas_County_GIS/FeatureServer/5',
         labelFields: ['FullAddress'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Logan Co - Parcels',
         id: 'co-logan-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/LoganCOFeatures/FeatureServer/2',
         labelFields: ['GIS_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mesa Co - Parcels',
         id: 'co-mesa-co-parcels',
         url: 'https://mcgis.mesacounty.us/arcgis/rest/services/maps/ParcelOnly4Query/MapServer/0',
         labelFields: ['LOCATION'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Mineral Co - Parcels',
         id: 'co-mineral-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/MineralCOFeatures/FeatureServer/1',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montezuma Co - Address Points',
         id: 'co-montezuma-co-points',
         url: 'http://gis-server.co.montezuma.co.us/arcgis/rest/services/Address_Verification_Viewer/MapServer/0',
         labelFields: ['StreetNo','StreetDir','StreetName','StreetSuf','StDirSuffx'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Montezuma Co - Parcels',
         id: 'co-montezuma-co-parcels',
         url: 'http://gis-server.co.montezuma.co.us/arcgis/rest/services/Address_Verification_Viewer/MapServer/1',
         labelFields: ['LOCATIONADDRESS'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montrose Co - Address Points',
         id: 'co-montrose-co-points',
         url: 'https://mcmap2.montrosecounty.net/arcgis/rest/services/MontroseCOaddress/MapServer/0',
         labelFields: ['FSA'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Montrose Co - Parcels',
         id: 'co-montrose-co-parcels',
         url: 'https://mcmap2.montrosecounty.net/arcgis/rest/services/MontroseCOparcellabels/MapServer/0',
         labelFields: ['FULL_ADD'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Morgan Co - Parcels',
         id: 'co-morgan-co-parcels',
         url: 'https://services6.arcgis.com/iSzqv8eal4TO2oVb/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Otero Co - Parcels',
         id: 'co-otero-co-parcels',
         url: 'https://services3.arcgis.com/iHv2akjE3QDYWb0T/ArcGIS/rest/services/esri_OteroParcels_2018/FeatureServer/0',
         labelFields: ['PRCLADRS'],
         processLabel: function(label) { return label.replace(_regexReplace.r4, '$2 $1').replace(/^LAND\s.*/, ''); },
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Park Co - Address Points',
         id: 'co-park-co-points',
         url: 'http://maps.parkco.us/arcgis/rest/services/Addressing/Public_Addressing_Search/MapServer/0',
         labelFields: ['FSA'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Park Co - Parcels (no label)',
         id: 'co-park-co-parcels',
         url: 'http://maps.parkco.us/arcgis/rest/services/basemaps/Parcels_Main/MapServer/4',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pitkin Co - Parcels (no labels)',
         id: 'co-pitkin-co-parcels',
         url: 'https://maps.pitkincounty.com/arcgis/rest/services/Projects/AssessorsParcels/MapServer/0',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pueblo Co - Address Points',
         id: 'co-pueblo-co-points',
         url: 'http://maps.co.pueblo.co.us/outside/rest/services/pueblo_county_address_points/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Pueblo Co - Parcels (no labels)',
         id: 'co-pueblo-co-parcels',
         url: 'http://maps.co.pueblo.co.us/outside/rest/services/pueblo_county_parcels/MapServer/1',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rio Blanco Co - Address Points',
         id: 'co-rio-blanco-co-points',
         url: 'https://services1.arcgis.com/pfZ4YwxhgKucWn2S/ArcGIS/rest/services/RioBlancoCOfeatures/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Rio Blanco Co - Parcels',
         id: 'co-rio-blanco-co-parcels',
         url: 'https://services1.arcgis.com/pfZ4YwxhgKucWn2S/ArcGIS/rest/services/RioBlancoCOfeatures/FeatureServer/17',
         labelFields: ['STREETNO','STREETNAME'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rio Grande Co - Parcels (no labels)',
         id: 'co-rio-grande-co-parcels',
         url: 'http://maps.co.pueblo.co.us/outside/rest/services/riogrande/riogrande_county_parcels/MapServer/0',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Routt Co - Address Points',
         id: 'co-routt-co-points',
         url: 'http://maps.co.routt.co.us/arcgis/rest/services/PublicData/AddressPoints/MapServer/0',
         labelFields: ['Label'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Routt Co - Parcels',
         id: 'co-routt-co-parcels',
         url: 'http://maps.co.routt.co.us/arcgis/rest/services/PublicData/Parcels/MapServer/0',
         labelFields: ['PhysicalAddress'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Saguache Co - Parcels (no labels)',
         id: 'co-saguache-co-parcels',
         url: 'https://services1.arcgis.com/zH7gQ37AKcpvTX6d/ArcGIS/rest/services/SaguacheParcels/FeatureServer/0',
         labelFields: [],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'San Miguel Co - Address Points',
         id: 'co-san-miguel-co-points',
         url: 'https://maps.sanmiguelcountyco.gov/gis/rest/services/public/property_new/MapServer/0',
         labelFields: ['FSA'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'San Miguel Co - Parcels',
         id: 'co-san-miguel-co-parcels',
         url: 'https://maps.sanmiguelcountyco.gov/gis/rest/services/public/property_new/MapServer/2',
         labelFields: ['STREETADDR'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Sedgwick Co - Address Points',
         id: 'co-sedgwick-co-points',
         url: 'http://maps.co.gov/copubgis/rest/services/SedgwickCounty/SedgwickServices1031/MapServer/1',
         labelFields: ['Address_Nu','Direction','Street','Suffix'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Sedgwick Co - Parcels',
         id: 'co-sedgwick-co-parcels',
         url: 'http://maps.co.gov/copubgis/rest/services/SedgwickCounty/SedgwickServices1031/MapServer/3',
         labelFields: ['Situs_Addr'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Summit Co - Parcels',
         id: 'co-summit-co-parcels',
         url: 'https://gis.summitcountyco.gov/arcgis/rest/services/ParcelQueryTool/SummitMap1_v10/MapServer/0',
         labelFields: ['TextString'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Teller Co - Address Points',
         id: 'co-teller-co-points',
         url: 'https://cdsd.co.teller.co.us/arcgis/rest/services/Property/MapServer/5',
         labelFields: ['STREET'],
         state: 'CO',
         style: DEFAULT_PT_STYLE},

        {name: 'Teller Co - Parcels',
         id: 'co-teller-co-parcels',
         url: 'https://cdsd.co.teller.co.us/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['Teller_County.SDE.PARCEL.SITUSSTNUM','Teller_County.SDE.PARCEL.STRNAME'],
         state: 'CO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Yuma Co - Parcels',
         id: 'co-yuma-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/YumaCOFeatures/FeatureServer/4',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
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


        // Delaware
        // ************************************

        {name: 'New Castle Co - Parcels',
         id: 'de-new-castle-co-parcels',
         url: 'https://gis.nccde.org/agsserver/rest/services/BaseMaps/BaseLayers/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'DE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Castle Co - Address Points',
         id: 'de-new-castle-co-points',
         url: 'https://gis.nccde.org/agsserver/rest/services/BaseMaps/Addresses/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'DE',
         style: DEFAULT_PT_STYLE},

        {name: 'Kent Co - Parcels',
         id: 'de-kent-co-parcels',
         url: 'http://co.kent.de.us/arcgis/rest/services/KentCountyParcels/MapServer/0',
         labelFields: ['LOCATION'],
         state: 'DE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kent Co - Address Points',
         id: 'de-kent-co-points',
         url: 'http://co.kent.de.us/arcgis/rest/services/Structure/MapServer/0',
         labelFields: ['FullAddr'],
         state: 'DE',
         style: DEFAULT_PT_STYLE},

        {name: 'Sussex Co - Parcels (no data)',
         id: 'de-sussex-co-parcels',
         url: 'https://maps.sussexcountyde.gov/gis/rest/services/County_Layers/ParcelLines/MapServer/0',
         labelFields: [''],
         state: 'DE',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sussex Co - Address Points',
         id: 'de-sussex-co-points',
         url: 'https://maps.sussexcountyde.gov/gis/rest/services/County_Layers/911Addresses/MapServer/0',
         labelFields: ['Address'],
         state: 'DE',
         style: DEFAULT_PT_STYLE},


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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
         labelFields: ['SITUS_ADDR'],
         state: 'FL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Putnam Co - Address Points',
         id: 'fl-putnam-co-pts',
         url: 'http://gis.putnam-fl.com/putgis/rest/services/Operational/ParcelsPlus/MapServer/0',
         labelFields: ['FULLADDR'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
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
         url: 'https://services6.arcgis.com/ikurHvtarxfN6u3u/ArcGIS/rest/services/Addresses_Collector/FeatureServer/0',
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

        {name: 'Adams Co - Parcels',
         id: 'il-adams-co-parcels',
         url: 'https://www.adamscountyarcserver.com/adamscountyarcserver/rest/services/Adams_County_Basemap_Complete/MapServer/14',
         labelFields: ['SITE_AD'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Adams Co - Address Points',
         id: 'il-adams-co-pts',
         url: 'https://www.adamscountyarcserver.com/adamscountyarcserver/rest/services/Adams_County_Basemap_Complete/MapServer/1',
         labelFields: ['PRIMNO','PREDIR','STNAME','SUFFIX','POSTDIR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Alexander Co - No GIS
        // Bond Co - No GIS

        {name: 'Boone Co - Parcels',
         id: 'il-boone-co-parcels',
         url: 'http://maps.boonecountyil.org/arcgis/rest/services/Ownership_Parcels/MapServer/0',
         labelFields: ['add_full'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Boone Co - Address Points',
         id: 'il-boone-co-pts',
         url: 'http://maps.boonecountyil.org/arcgis/rest/services/Address_Labels/MapServer/0',
         labelFields: ['Full_Address'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Brown Co - No GIS
        // Bureau Co - No GIS
        // Calhoun Co - No GIS
        // Carroll Co - No GIS, $$$
        // Cass Co - qPublic

        {name: 'Champaign Co - Parcels (no data)',
         id: 'il-champaign-co-parcels',
         url: 'http://services.ccgisc.org/proxy/proxy.ashx?https://server.ccgisc.org/arcgisserver/rest/services/ArcGISOnline/AGO_TaxParcels/Mapserver/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Champaign Co - Address Points',
         id: 'il-champaign-co-pts',
         url: 'http://services.ccgisc.org/proxy/proxy.ashx?https://server.ccgisc.org/arcgisserver/rest/services/ArcGISOnline/AddressPoints/Mapserver/0',
         labelFields: ['StreetAddress'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Christian Co - Parcels',
         id: 'il-christian-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_christian_co_il_taxmap/MapServer/0',
         labelFields: ['SiteAddres'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Christian Co - Address Points - Not found

        {name: 'Clark Co - Parcels',
         id: 'il-clark-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/ClarkILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Clark Co - Address Points - Not found

        {name: 'Clay Co - Parcels',
         id: 'il-clay-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/ClayILFeatures/FeatureServer/4',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Clay Co - Address Points - Not found

        {name: 'Clinton Co - Parcels',
         id: 'il-clinton-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/ClintonILFeatures/FeatureServer/1',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Clinton Co - Address Points - Not found

        // Coles Co - Parcels - Unreliable address data
        // Coles Co - Address Points - Not found

        {name: 'Cook Co - Parcels',
         id: 'il-cook-co-parcels',
         url: 'https://gis1.cookcountyil.gov/arcgis/rest/services/cookVwrDynmc/MapServer/44',
         labelFields: ['HouseNo','Dir','Street','Suffix'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cook Co - Address Points',
         id: 'il-cook-co-pts',
         url: 'https://gis1.cookcountyil.gov/arcgis/rest/services/cookVwrDynmc/MapServer/62',
         labelFields: ['CMPADDABRV'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Crawford Co - Parcels',
         id: 'il-crawford-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/CrawfordILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Crawford Co - Address Points - Not found

        {name: 'Cumberland Co - Parcels',
         id: 'il-cumberland-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_cumberland_co_il_gismap/MapServer/0',
         labelFields: ['SITEADDRESS'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Cumberland Co - Address Points - Not found

        {name: 'DeWitt Co - Parcels',
         id: 'il-dewitt-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/DeWittILFeatures/FeatureServer/5',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // DeWitt Co - Address Points - Not found

        // DeKalb Co - Compass GIS

        {name: 'Douglas Co - Parcels',
         id: 'il-douglas-co-parcels',
         url: 'https://douglasil.com/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Douglas Co - Address Points',
         id: 'il-douglas-co-pts',
         url: 'https://douglasil.com/arcgis/rest/services/911Addresses/MapServer/0',
         labelFields: ['House','Dir','Street','Suffix'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'DuPage Co - Parcels',
         id: 'il-dupage-co-parcels',
         url: 'http://gis.dupageco.org/arcgis/rest/services/DuPage_County_IL/ParcelsWithRealEstateCC/MapServer/0',
         labelFields: ['PROPADDRL1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'DuPage Co - Address Points',
         id: 'il-dupage-co-pts',
         url: 'http://gis.dupageco.org/arcgis/rest/services/DuPage_County_IL/AddressPointsUnderDevelopment/MapServer/0',
         labelFields: ['STREET_NUM','STREET_NAME','STREET_TYPE','STREET_SUFFIX_DIR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Edgar Co - Parcels',
         id: 'il-edgar-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_edgar_co_il_taxmap_PAT_CIC/MapServer/0',
         labelFields: ['PropertyAddress1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Fayette Co - Address Points - Not found

        // Edwards Co - No GIS

        {name: 'Effingham Co - Parcels',
         id: 'il-effingham-co-parcels',
         url: 'https://services.arcgis.com/vj0V9Lal6oiz0YXp/ArcGIS/rest/services/Features/FeatureServer/3',
         labelFields: ['SiteAddress','SiteCSZ'],
         processLabel: function(label) { return label.replace(new RegExp((label.match(/ \d{5} (.*)/))[1],'g'),'').trim(); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Effingham Co - Address Points - Not found

        {name: 'Fayette Co - Parcels',
         id: 'il-fayette-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/FayetteILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Fayette Co - Address Points - Not found

        {name: 'Ford Co - Parcels',
         id: 'il-ford-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/FordILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Ford Co - Address Points - Not found

        {name: 'Franklin Co - Parcels',
         id: 'il-franklin-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/FranklinILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Franklin Co - Address Points - Not found

        {name: 'Fulton Co - Parcels',
         id: 'il-fulton-co-parcels',
         url: 'https://services7.arcgis.com/O9Z7JkIFFJ6nOIIq/ArcGIS/rest/services/Parcels/FeatureServer/0',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Fulton Co - Address Points - Not found

        // Gallatin Co - No GIS
        // Greene Co - No GIS

        {name: 'Grundy Co - Parcels',
         id: 'il-grundy-co-parcels',
         url: 'http://maps.grundyco.org/arcgis/rest/services/CountyWebsiteMaps/CountyParcelsBaseLayer_ParcelFabric_SPIE/MapServer/0',
         labelFields: ['GrundyParcels.dbo.GISParcelsLegalDescriptionIncluded.SitusAddr1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Grundy Co - Address Points - Not found

        {name: 'Hamilton Co - Parcels',
         id: 'il-hamilton-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/HamiltonILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Hamilton Co - Address Points - Not found

        // Hancock Co - No GIS
        // Hardon Co - No GIS
        // Henderson Co - No GIS

        {name: 'Henry Co - Parcels',
         id: 'il-henry-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/HenryILFeatures/FeatureServer/7',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Henry Co - Address Points - Not found

        {name: 'Iroquois Co - Parcels (bad data)',
         id: 'il-iroquois-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_Iroquois_co_il_taxmap_PAT/MapServer/146',
         labelFields: ['site_address'], //address information is imperfect
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Iroquois Co - Address Points - Not found

        {name: 'Jackson Co - Parcels',
         id: 'il-jackson-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_jackson_co_il_taxmap/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Jackson Co - Address Points - Not found

        // Jasper Co - No GIS

        {name: 'Jefferson Co - Parcels',
         id: 'il-jefferson-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/JeffersonILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Jefferson Co - Address Points - Not found

        {name: 'Jersey Co - Parcels',
         id: 'il-jersey-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/JerseyILFeatures/FeatureServer/6',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Jersey Co - Address Points - Not found

        // Jo Daviess County - No data $$$
        // Johnson Co - No GIS

        {name: 'Kane Co - Parcels',
         id: 'il-kane-co-parcels',
         url: 'http://gistech.countyofkane.org/DotNet2/proxy.ashx?http://gistech.countyofkane.org/ArcGIS/rest/services/KaneGISx/MapServer/13',
         labelFields: ['SiteAddres'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kane Co - Address Points',
         id: 'il-kane-co-pts',
         url: 'http://gistech.countyofkane.org/DotNet2/proxy.ashx?http://gistech.countyofkane.org/ArcGIS/rest/services/KaneGISx/MapServer/9',
         labelFields: ['FULL_ADR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Kankakee Co - Parcels',
         id: 'il-kankakee-co-parcels',
         url: 'http://k3gis.com:6080/arcgis/rest/services/Cadastral/Subdivisions_TaxParcels/MapServer/0',
         labelFields: ['site_addr'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kankakee Co - Address Points',
         id: 'il-kankakee-co-pts',
         url: 'http://k3gis.com:6080/arcgis/rest/services/Cadastral/Address_Points/MapServer/0',
         labelFields: ['house_number','house_number_suffix','prefix_directional','street_name','street_suffix','post_directional'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Kendall Co - Parcels',
         id: 'il-kendall-co-parcels',
         url: 'http://gis.co.kendall.il.us/arcgis/rest/services/CADASTRAL/parcels_pub/MapServer/0',
         labelFields: ['KENDGIS.DBO.GIS_DATA.site_address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Kendall Co - Structures',
         id: 'il-kendall-co-structures',
         url: 'http://gis.co.kendall.il.us/arcgis/rest/services/BASEMAPS/CADBase_pub/MapServer/0',
         labelFields: ['ADDRESS_WHOLE'],
         state: 'IL',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Kendall Co - Address Points',
         id: 'il-kendall-co-pts',
         url: 'http://gis.co.kendall.il.us/arcgis/rest/services/911/Site_Address_pub/MapServer/0',
         labelFields: ['HOUSE_NUMB','HOUSE_NU_1','PREFIX_DIR','STREET_NAM','STREET_SUF','POST_DIREC'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Knox Co - Parcels',
         id: 'il-knox-co-parcels',
         url: 'http://gis.co.knox.il.us/arcgis/rest/services/Test_1/Parcel_service_V4/MapServer/10',
         labelFields: ['GIS_Table.dbo.gis_data.site_addr'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Knox Co - Address Points - Not found

        {name: 'Lake Co - Parcels',
         id: 'il-lake-co-parcels',
         url: 'https://maps.lakecountyil.gov/arcgis/rest/services/GISMapping/WABParcels/MapServer/2',
         labelFields: ['pla_number','pla_numsuf','pla_direct','pla_name','pla_type','pla_suffix'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lake Co - Address Points',
         id: 'il-lake-co-pts',
         url: 'https://maps.lakecountyil.gov/arcgis/rest/services/GISMapping/WABAddress/MapServer/0',
         labelFields: ['FRG_PREDIR','FRG_HOUSE','FRG_STREET','FRG_SUFFIX'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'LaSalle Co - Parcels',
         id: 'il-lasalle-co-parcels',
         url: 'http://131.156.137.22/arcgis/rest/services/Lasalle_IL_PAT_TaxMap/MapServer/142',
         labelFields: ['SiteAddress'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // LaSalle Co - Address Points - Not found

        {name: 'Lawrence Co - Parcels',
         id: 'il-lawrence-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_lawrence_co_il_taxmap/MapServer/0',
         labelFields: ['location'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // LaSalle Co - Address Points - Not found

        {name: 'Lee Co - Parcels',
         id: 'il-lee-co-parcels',
         url: 'https://gis.leecountyil.com/server/rest/services/Parcel_Polygons/MapServer/0',
         labelFields: ['site_address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lee Co - Address Points',
         id: 'il-lee-co-pts',
         url: 'https://gis.leecountyil.com/server/rest/services/Addresses/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Livingston Co - No GIS

        {name: 'Logan Co - Parcels',
         id: 'il-logan-co-parcels',
         url: 'http://www.centralilmaps.com/arcgis/rest/services/Logan_Flex_Property/MapServer/4',
         labelFields: ['site_address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Logan Co - Address Points - Not found

        {name: 'Macon Co - Parcels',
         id: 'il-macon-co-parcels',
         url: 'http://macongis.co.macon.il.us/arcgis/rest/services/ParcelViewer/Parcels/MapServer/0',
         labelFields: ['SiteAddress'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Macon Co - Address Points',
         id: 'il-macon-co-pts',
         url: 'http://macongis.co.macon.il.us/arcgis/rest/services/AGOL/Addresses/MapServer/0',
         labelFields: ['HOUSE_NUMBER','PRE_DIR','STREET_NAME','STREET_TYPE','SUF_ST_DIR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Macoupin Co - Parcels',
         id: 'il-macoupin-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_macoupin_co_il_taxmap/MapServer/0',
         labelFields: ['Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Macoupin Co - Address Points - Not found

        // Madison Co - ArcGIS - password protected data

        {name: 'Marion Co - Parcels',
         id: 'il-marion-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/arcgis/rest/services/MarionILFeatures/FeatureServer/6',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Marion Co - Address Points - Not found

        // Marshall Co - No GIS
        // Mason Co - WTH

        {name: 'Massac Co - Parcels',
         id: 'il-massac-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_massac_co_il_taxmap/MapServer/0',
         labelFields: ['Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Massac Co - Address Points',
         id: 'il-massac-co-pts',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_massac_co_il_gis/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'McDonough Co - Parcels',
         id: 'il-mcdonough-co-parcels',
         url: 'http://gis.wiu.edu/arcgis/rest/services/mcdonough_highway/MapServer/21',
         labelFields: ['site_address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'McDonough Co - Address Points',
         id: 'il-mcdonough-co-pts',
         url: 'http://gis.wiu.edu/arcgis/rest/services/mcdonough_highway/MapServer/0',
         labelFields: ['FULL_ADD'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'McHenry Co - Parcels',
         id: 'il-mchenry-co-parcels',
         url: 'http://www.mchenrycountygis.org/arcgis/rest/services/parcels/MapServer/0',
         labelFields: ['SiteAddressStreet'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // McHenry Co - Address Points - Not found

        {name: 'McLean Co - Parcels (no data)',
         id: 'il-mclean-co-parcels',
         url: 'https://www.mcgisweb.org/mcgis/rest/services/ArcGISOpenData/ArcGISOpenData/MapServer/2',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'McLean Co - Address Points',
         id: 'il-mclean-co-pts',
         url: 'https://www.mcgisweb.org/mcgis/rest/services/ArcGISOpenData/ArcGISOpenData/MapServer/0',
         labelFields: ['ADDR_NUM','PrefixDirection','StreetName','SuffixType','SuffixDirection'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Menard Co - Parcels',
         id: 'il-menard-co-parcels',
         url: 'https://services5.arcgis.com/OYmyJWdTtTeTShSg/ArcGIS/rest/services/November_2017_Tax_Parcels/FeatureServer/0',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Menard Co - Address Points - Incomplete data

        // Mercer Co - No GIS

        {name: 'Monroe Co - Parcels',
         id: 'il-monroe-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/MonroeILFeatures/FeatureServer/9',
         labelFields: ['TSC_Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Monroe Co - Address Points - Not found

        // Montgomery Co - qPublic

        {name: 'Morgan Co - Parcels',
         id: 'il-morgan-co-parcels',
         url: 'https://services3.arcgis.com/95PFahBF8eyGEfuc/ArcGIS/rest/services/TaxParcels/FeatureServer/0',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Morgan Co - Address Points',
         id: 'il-morgan-co-pts',
         url: 'https://services3.arcgis.com/95PFahBF8eyGEfuc/ArcGIS/rest/services/MorganAddresses/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Moultrie Co - Parcels',
         id: 'il-moultrie-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_moultrie_co_il_taxmap3_web_mercator/MapServer/0',
         labelFields: ['Site_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Moultrie Co - Address Points - Not found

        // Ogle Co - qPublic

        {name: 'Peoria Co - Parcels',
         id: 'il-peoria-co-parcels',
         url: 'https://gis.peoriacounty.org/arcgis/rest/services/DP/LandRecords/MapServer/27',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Peoria Co - Address Points',
         id: 'il-peoria-co-pts',
         url: 'https://services.arcgis.com/iPiPjILCMYxPZWTc/arcgis/rest/services/Addresses/FeatureServer/0',
         labelFields: ['CombinedAddress'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Perry Co - No GIS

        {name: 'Piatt Co - Parcels',
         id: 'il-piatt-co-parcels',
         url: 'http://services.ccgisc.org/proxy/proxy.ashx?https://server.ccgisc.org/arcgisserver/rest/services/Webmap_Piatt/ParcelSearch/MapServer/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Piatt Co - Address Points',
         id: 'il-Piatt-co-pts',
         url: 'http://services.ccgisc.org/proxy/proxy.ashx?https://server.ccgisc.org/arcgisserver/rest/services/ArcGISOnline_Piatt/AddressPoints/MapServer/0',
         labelFields: ['Address'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Pike Co - No GIS
        // Pope Co - No GIS
        // Pulaski Co - No GIS
        // Putnam Co - WTH

        {name: 'Randolph Co - Parcels',
         id: 'il-randolph-co-parcels',
         url: 'https://services5.arcgis.com/pweYHqdOby1TE9DD/arcgis/rest/services/TaxParcelsFull/FeatureServer/0/',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Randolph Co - Address Points - Not found

        // Richland Co - WTH
        // Rock Island Co - No GIS

        {name: 'St. Clair Co - Parcels',
         id: 'il-stclair-co-parcels',
         url: 'http://publicmap.co.st-clair.il.us/gissvr7/rest/services/parcel_map_data/MapServer/29',
         labelFields: ['SITEADR1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // St. Clair Co - Address Points - Not found

        // Saline Co - No GIS

        {name: 'Sangamon Co - Parcels (no data)',
         id: 'il-sangamon-co-parcels',
         url: 'http://gismaps.co.sangamon.il.us/tpv/proxy.ashx?http://aberdeen/ArcGIS/rest/services/ParcelPoly/MapServer/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Sangamon Co - Address Points',
         id: 'il-sangamon-co-pts',
         url: 'http://gismaps.co.sangamon.il.us/tpv/proxy.ashx?http://aberdeen/ArcGIS/rest/services/AddressVerify/MapServer/0',
         labelFields: ['HN','HNSFFX','PREDIR','PRE_TYPE','STNAME','STTYPE','SUFDIR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Schuyler Co - Parcels',
         id: 'il-schuyler-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_schuyler_co_il_taxmap/MapServer/0',
         labelFields: ['site_address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Schuyler Co - Address Points - Not found

        // Scott Co - No GIS

        {name: 'Shelby Co - Parcels',
         id: 'il-shelby-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_shelby_co_il_taxmap/MapServer/0',
         labelFields: ['SiteAddres'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Schelby Co - Address Points - Not found

        {name: 'Stark Co - Parcels',
         id: 'il-stark-co-parcels',
         url: 'https://services6.arcgis.com/IMZwRRU1qL5MDxBH/arcgis/rest/services/LandParcels/FeatureServer/0/',
         labelFields: ['SiteAddress'],
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Stark Co - Address Points',
         id: 'il-stark-co-pts',
         url: 'https://services6.arcgis.com/IMZwRRU1qL5MDxBH/ArcGIS/rest/services/AddressPoints/FeatureServer/0',
         labelFields: ['House','Dir','Suffix','Street','Type','Addr_new'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Stephenson Co - Parcels',
         id: 'il-stephenson-co-parcels',
         url: 'http://www.wingis.org/proxy/proxy.ashx?http://map.wingis.org/ArcGIS/rest/services/1_Parcels/MapServer/3',
         labelFields: ['site_addre'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Stephenson Co - Address Points - Not found

        {name: 'Tazewell Co - Parcels (no data)',
         id: 'il-tazewell-co-parcels',
         url: 'https://gis.tazewell.com/maps/rest/services/WAB/TazCo_Parcels/MapServer/0',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Tazewell Co - Address Points',
         id: 'il-tazewell-co-pts',
         url: 'https://gis.tazewell.com/maps/rest/services/WAB/TazCo_AddressPts/MapServer/0',
         labelFields: ['FullAddress'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        // Union Co - No GIS

        {name: 'Vermillion Co - Parcels',
         id: 'il-vermillion-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_vermilion_co_il_taxmap/MapServer/0',
         labelFields: ['FullSiteAddress1'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Vermillion Co - Address Points - Not found

        // Wabash Co - No GIS
        // Warren Co - No GIS
        // Washington Co - No GIS
        // Wayne Co - No GIS

        {name: 'White Co - Parcels',
         id: 'il-white-co-parcels',
         url: 'https://services.arcgis.com/4YineAQdtmx0tv46/ArcGIS/rest/services/WhiteILFeatures/FeatureServer/3',
         labelFields: ['TSC_Site_Address'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // White Co - Address Points - Not found

        {name: 'Whiteside Co - Parcels',
         id: 'il-whiteside-co-parcels',
         url: 'https://services.arcgis.com/l0M0OC6J9QAHCiGx/ArcGIS/rest/services/TaxParcelQuery/FeatureServer/0',
         labelFields: ['SITEADDRESS'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Whiteside Co - Address Points',
         id: 'il-whitesided-co-pts',
         url: 'https://services.arcgis.com/l0M0OC6J9QAHCiGx/ArcGIS/rest/services/SiteAddresses/FeatureServer/0',
         labelFields: ['FULLADDR'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Will Co - Parcels',
         id: 'il-will-co-parcels',
         url: 'http://apps.willcogis.org/arcgis/rest/services/BasemapLayers/ParcelsLY_Dynamic/MapServer/0',
         labelFields: ['HOUSENUMBE','ADDR_FRACT','PREFIXDIRE','PREFIXTYPE','STREETNAME','SUFFIXTYPE','SUFFIXDIRE','ADDR_OTHER'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Will Co - Address Points',
         id: 'il-will-co-pts',
         url: 'http://apps.willcogis.org/arcgis/rest/services/BasemapLayers/AddressPoints/MapServer/0',
         labelFields: ['gisedit.DBO.Address_Points.HOUSENUMBE','gisedit.DBO.Address_Points.PREFIXDIRE','gisedit.DBO.Address_Points.STREETNAME','gisedit.DBO.Address_Points.SUFFIXTYPE'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Williamson Co - Parcels',
         id: 'il-williamson-co-parcels',
         url: 'http://services2.bhamaps.com/arcgis/rest/services/AGS_williamson_co_il_taxmap/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},
        // Williamson Co - Address Points - Not found

        {name: 'Winnebago Co - Parcels',
         id: 'il-winnebago-co-parcels',
         url: 'http://www.wingis.org/proxy/proxy.ashx?http://map.wingis.org/ArcGIS/rest/services/1_Parcels/MapServer/1',
         labelFields: ['LOPHouseNumber','LOPHouseNbrSuffix','LOPPrefixDirectional','LOPStreetName','LOPStreetSuffix','LOPPostDirectional'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Winnebago Co - Address Points',
         id: 'il-winnebago-co-pts',
         url: 'http://www.wingis.org/proxy/proxy.ashx?http://map.wingis.org/ArcGIS/rest/services/1_Layers/MapServer/16',
         labelFields: [''],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Woodford Co - Parcels',
         id: 'il-woodford-co-parcels',
         url: 'http://www.centralilmaps.com/arcgis/rest/services/Woodford/WoodfordGIS_Flex_New_20160509/MapServer/11',
         labelFields: ['SiteAddres'],
         state: 'IL',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Woodford Co - Address Points',
         id: 'il-woodford-co-pts',
         url: 'http://www.centralilmaps.com/arcgis/rest/services/Woodford/WoodfordGIS_Flex_New_20160509/MapServer/1',
         labelFields: ['SiteAddres'],
         state: 'IL',
         style: DEFAULT_PT_STYLE},

        {name: 'Rockford - City Address Points',
         id: 'il-rockford-city-pts',
         url: 'http://www.wingis.org/proxy/proxy.ashx?http://map.wingis.org/ArcGIS/rest/services/1_Layers/MapServer/17',
         labelFields: ['STNO','PREFIX','STNAME','SUFFIX','POSTDIR'],
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r3, '').replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Catahoula Parish - Parcels 2',
         id: 'la-catahoula-parish-parcels-2',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Catahoula_Services/MapServer/1',
         labelFields: ['par_address'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Livingston Parish - Parcels',
         id: 'la-livingston-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Livingston_Services/MapServer/8',
         labelFields: ['Par_Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [''],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'New Orleans - City Parcels',
         id: 'la-new-orleans-city-parcels',
         url: 'https://gis.nola.gov/arcgis/rest/services/GovernmentServices/PlanningServices/MapServer/1',
         labelFields: ['SITUS_NUM','SITUS_DIR','SITUS_STREET','SITUS_TYPE'],
         state: 'LA',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rapides Parish - Address Points',
         id: 'la-rapides-parish-points',
         url: 'https://rapcgis.rapc.info/server/rest/services/RAPC/addresses/MapServer/0',
         labelFields: ['Address'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'LA',
         style: DEFAULT_PT_STYLE},

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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'St Tammany Parish - Parcels',
         id: 'la-st-tammany-parish-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/StTammany_Services/MapServer/6',
         labelFields: ['prop_number','prop_street'],
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
         labelFields: ['address'],
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
         labelFields: ['ASST_HOUSE_NO','ASST_STREET_DIR','ASST_STREET_NAME','ASST_STREET_TYPE'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Anne Arundel Co - Address Points',
         id: 'md-anne-arundel-county-points',
         url: 'http://gis-world3.aacounty.org/arcgis/rest/services/Public/MyAA/MapServer/0',
         labelFields: ['ST_NUMBER','ST_NUMSUFF','ST_PREFIXD','ST_NAME','ST_TYPE','ST_SUFFIXD'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Baltimore - City Parcels',
         id: 'md-baltimore-city-parcels',
         url: 'http://gis.baltimorecity.gov/egis/rest/services/cityview/Realproperty/MapServer/0',
         labelFields: ['FULLADDR'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},
        // Baltimore - City Address Points (data not found. close, but not quite)
        // gis.baltimorecity.gov/egis/rest/services/Pictometry/Pictometry_Layers/MapServer/1

        {name: 'Baltimore Co - Parcels',
         id: 'md-baltimore-co-parcels',
         url: 'https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Property/Property/MapServer/1',
         labelFields: ['PREMISE_ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Baltimore Co - Address Points',
         id: 'md-baltimore-county-points',
         url: 'https://bcgis.baltimorecountymd.gov/arcgis/rest/services/Facilities/Address/MapServer/0',
         labelFields: ['ADDRLABEL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        // Calvert Co - Parcels (does not have a Shape field)
        // calvertgis.co.cal.md.us/arcgis/rest/services/PropertyMap/MapServer/2
        {name: 'Calvert Co - Address Points',
         id: 'md-calvert-county-points',
         url: 'http://calvertgis.co.cal.md.us/arcgis/rest/services/Basemaps/Topo_Base_Map_2011_Version2/MapServer/2',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        // Caroline Co - No GIS

        {name: 'Carroll Co - Parcels (no data)',
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
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Cecil Co - Address Points',
         id: 'md-cecil-county-points',
         url: 'https://cecilmaps.ccgov.org/arcgis/rest/services/ConsolidatedWebService/MapServer/1',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        // Charles Co - No GIS
        // Dorchester Co - No GIS

        {name: 'Frederick Co - Parcels',
         id: 'md-frederick-county-parcels',
         url: 'https://maps.frederickcountymd.gov/arcgis/rest/services/Planning/Parcels/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Frederick Co - Address Points',
         id: 'md-frederick-county-points',
         url: 'https://maps.frederickcountymd.gov/arcgis/rest/services/Planning/AddressLabels/MapServer/1',
         labelFields: ['NUM_FULL','ST_FULL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'Garrett Co - Parcels',
         id: 'md-garrett-county-parcels',
         url: 'https://maps.garrettcounty.org/arcweb/rest/services/P_and_Z/Parcels_and_Zoning/MapServer/7',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Garrett Co - Address Points',
         id: 'md-garrett-county-points',
         url: 'https://maps.garrettcounty.org/arcweb/rest/services/P_and_Z/Parcels_and_Zoning/MapServer/2',
         labelFields: ['STRUCTURE_NUMBER','STRUCTURE_NUMBER_SUFFIX','PREFIX_DIRECTIONAL','STREET_NAME','STREET_TYPE','SUFFIX_DIRECTIONAL'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        // Harford Co - No GIS
        // Howard Co - OpenLayers
        // Kent Co - No GIS

        {name: 'Montgomery Co - Parcels',
         id: 'md-montgomery-county-parcels',
         url: 'http://gis4.montgomerycountymd.gov/arcgis/rest/services/general/property/MapServer/0',
         labelFields: ['PREMISE_ADDR_HOUSENO','PREMISE_ADDR_DIRECTION','PREMISE_ADDR_STREET','PREMISE_ADDR_STREET_TYPE'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Montgomery Co - Structures',
         id: 'md-montgomery-county-structures',
         url: 'https://gis3.montgomerycountymd.gov/arcgis/rest/services/GDX/buildings/MapServer/0',
         labelFields: ['ADDRNUM','PRE_DIR','STREET_NAME','STREET_TYPE'],
         state: 'MD',
         style: DEFAULT_STRUCTURE_STYLE},

        {name: 'Prince George\'s Co - Parcels (no data)',
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
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Queene Anne\'s Co - Address Points',
         id: 'md-queen-anne-county-points',
         url: 'https://gis.qac.org/arcgis/rest/services/QAC_PUBLIC/QAC_Basemap/MapServer/0',
         labelFields: ['FULL_ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        {name: 'St. Mary\'s Co - Parcels (no data)',
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

        // Somerset Co - No GIS

        {name: 'Talbot Co - Parcels',
         id: 'md-talbot-county-parcels',
         url: 'http://maps.talbgov.org/arcgis/rest/services/TalbotWebMaps/PublicLandUse/MapServer/0',
         labelFields: ['ADDRESS'],
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
         labelFields: ['PremNum','PremNumSuff','PremDir','PremName','PremType'],
         state: 'MD',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Address Points',
         id: 'md-washington-county-points',
         url: 'https://maps.washco-md.net/arcgis/rest/services/General/AddressPoints/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'MD',
         style: DEFAULT_PT_STYLE},

        // Wicomico Co - No GIS
        // Worcester Co - No GIS


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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: "PARNO NOT IN ('1','2','3')",
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'State - Parcels (non-MDEM, LIMITED DATA)',
         id: 'ms-state-parcels2',
         url: 'http://www.gisonline.ms.gov/arcgis/rest/services/MDEQ/Basemap/MapServer/105',
         labelFields: ['ADDR2'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, '').replace(/"/g,''); },
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

         {name: 'Brandon - City Parcels',
         id: 'ms-brandon-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/Brandon2016/MapServer/8',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Biloxi - City Parcels',
         id: 'ms-biloxi-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Biloxi_Services/MapServer/6',
         labelFields: ['STNUM','DIR','ST_NAME'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [''],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Clinton - City Parcels',
         id: 'ms-clinton-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/Clinton/MapServer/24',
         labelFields: ['loc_num','loc_apt','loc_ns','loc_alpha'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Copiah Co - Address Points',
         id: 'ms-Copiah-co-pts',
         url: 'https://services3.arcgis.com/nJbIFHiSnaX0z0hS/ArcGIS/rest/services/CopiahLabelTest/FeatureServer/1',
         labelFields: ['NUMERICS','ROAD_NAME'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Copiah Co - Parcels',
         id: 'ms-copiah-co-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/County/Copiah_County/MapServer/3',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'D\'Iberville - City Address Points',
         id: 'ms-diberville-city-points',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diberville_Services/MapServer/2',
         labelFields: ['SIT_NO','SIT_NAME'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'D\'Iberville - City Parcels',
         id: 'ms-diberville-city-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Diberville_Services/MapServer/17',
         labelFields: ['STREET_NUM','STREET_NAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'Hinds Co - Parcels',
         id: 'ms-hinds-co-parcels',
         url: 'http://gisweb.co.hinds.ms.us/arcgis/rest/services/HindsParcelMap/MapServer/2',
         labelFields: ['loc_num','loc_apt','loc_ns','loc_alpha'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Jackson Co - Parcels',
         id: 'ms-jackson-co-parcels',
         url: 'https://webmap.co.jackson.ms.us/arcgis/rest/services/JacksonCounty/Parcel_2_Web/MapServer/2',
         labelFields: ['STRN','STRD','STRNM','STYPE'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Lamar Co - Parcels',
         id: 'ms-lamar-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/LamarCounty_Services/MapServer/59',
         labelFields: ['StreetNumber','StreetName'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'Madison Co - Parcels',
         id: 'ms-madison-co-parcel',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/County/Madison_County/MapServer/11',
         labelFields: ['STREET_NUM','STREET_NAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Magee - City Parcels',
         id: 'ms-magee-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/MageeViewer/MapServer/4',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'Pearl - City Address Points',
         id: 'ms-pearl-city-points',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/CityofPearl/MapServer/1',
         labelFields: ['FULL_ADDRE'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Pearl - City Parcels',
         id: 'ms-pearl-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/CityofPearl/MapServer/15',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Pelahatchie - City Parcels',
         id: 'ms-pelahatchie-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/Pelahatchie/MapServer/16',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pike Co - Parcels',
         id: 'ms-pike-co-parcel',
         url: 'https://ags.agdmaps.com/arcgis/rest/services/PikeMS/MapServer/22',
         labelFields: ['PROP_ADD_NUM','PROP_STREET'],
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Pontotoc Co - Parcels',
         id: 'ms-pontotoc-co-parcels',
         url: 'https://atlas.geoportalmaps.com/proxy.ashx?https://services.geoportalmaps.com/arcgis/rest/services/Pontotoc_Services/MapServer/5',
         labelFields: ['StreetNumber','StreetName'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         where: [],
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'MS',
         style: DEFAULT_PARCEL_STYLE},

         {name: 'Rankin Co - Address Points',
         id: 'ms-rankin-co-pts',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/County/RankinCounty/MapServer/3',
         labelFields: ['FULL_ADDRE'],
         state: 'MS',
         style: DEFAULT_PT_STYLE},

        {name: 'Rankin Co - Parcels',
         id: 'ms-rankin-co-parcel',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/County/RankinCounty/MapServer/8',
         labelFields: ['STREET_NUM','STREET'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'Warren Co - Parcels 2',
         id: 'ms-warren-co-parcels-2',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/County/Warren_County/MapServer/4',
         labelFields: ['STREET_NUM','STREET_NAM'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        {name: 'Yazoo City - City Parcels',
         id: 'ms-yazoo-city-city-parcels',
         url: 'http://gis.cmpdd.org/arcgis/rest/services/Cities/YazooCity/MapServer/4',
         labelFields: ['STR_NUM','STR_NAME'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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

        // Greene Co - Info from city of Springfield MO, has countywide data
        {name: 'Greene Co - Parcels',
         id: 'mo-greene-co-parcels',
         url: 'http://maps.springfieldmo.gov/arcgis/rest/services/Maps/GisViewer/MapServer/64',
         labelFields: ['L_ADRNO','L_ADRDIR','L_ADRSTR','L_ADRSUF'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Greene Co - Address Points',
         id: 'mo-greene-co-points',
         url: 'http://maps.springfieldmo.gov/arcgis/rest/services/Maps/GisViewer/MapServer/62',
         labelFields: ['PRIM_NUM','SUB_NUM','PRE_DIR','STR_NAM','STR_TYPE'],
         state: 'MO',
         style: DEFAULT_PT_STYLE},

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

        {name: 'Iron Co - Parcels',
         id: 'mo-iron-co-parcels',
         url: 'http://www.semogis.com/arcgis/rest/services/IronCo/IronAssess/MapServer/0',
         labelFields: ['SITE_ADD'],
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

        {name: 'Perry Co - Parcels',
         id: 'mo-perry-co-parcels',
         url: 'http://www.semogis.com/arcgis/rest/services/PerryCo/PerryAssess/MapServer/0',
         labelFields: ['SITE_ADD'],
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

        {name: 'St. Francois Co - Parcels',
         id: 'mo-stfrancois-co-parcels',
         url: 'http://www.semogis.com/arcgis/rest/services/StFranCo/CityBase/MapServer/6',
         labelFields: ['REALGISDATA__ADDRESS_1'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'St. Louis City - Parcels',
         id: 'mo-stl-city-parcels',
         url: 'https://stlgis.stlouis-mo.gov/arcgis/rest/services/public/STL_PUBLICMAP/MapServer/1',
         labelFields: ['ADDRNUM','ADDRSUF','STREETPRE','STREETNAME','STREETSUF','STRSUFDIR'],
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

        {name: 'Scott Co - Parcels',
         id: 'mo-scott-co-parcels',
         url: 'https://www.semogis.com/arcgis/rest/services/ScottCo/ScottAssess/MapServer/0',
         labelFields: ['SITE_ADDRESS'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Vernon Co - Parcels (no labels)',
         id: 'mo-vernon-co-parcels',
         url: 'http://vernongis.integritygis.com/Geocortex/Essentials/REST/sites/Vernon_County_MO/map/mapservices/1/rest/services/x/MapServer/6',
         labelFields: ['PARCELPIN'],
         state: 'MO',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Washington Co - Parcels',
         id: 'mo-washington-co-parcels',
         url: 'http://www.semogis.com/arcgis/rest/services/WashCo/WashAssess/MapServer/0',
         labelFields: ['HOUSENUM','ADDRESS'],
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

        {name: 'Douglas Co - Address Points',
         id: 'ne-douglas-co-points',
         url: 'https://gis.dogis.org/arcgis/rest/services/OpenData_layers/MapServer/32',
         labelFields: ['FULLADDR'],
         state: 'NE',
         style: DEFAULT_PT_STYLE},

        {name: 'Douglas Co - Parcels',
         id: 'ne-douglas-co-parcels',
         url: 'https://gis.dogis.org/arcgis/rest/services/Parcels/MapServer/0',
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Creek Co - Parcels',
         id: 'ok-Creek-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsCREEK_all/MapServer/0',
         labelFields: ['ADDRESS'],
         processLabel: function(label) { return label.replace(/^(.*?) ([EWNS] )?(\d+)$/,'$3 $2$1').replace(_regexReplace.r0, ''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Delaware Co - Parcels',
         id: 'ok-delaware-co-parcels',
         url: 'https://services.arcgis.com/bmlPdrfZm3kfidAc/ArcGIS/rest/services/ParcelS/FeatureServer/0',
         where: "Nbhd <> ''",
         labelFields: ['Situs'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r1, '$1$2').replace(_regexReplace.r0, ''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

/* Oklahoma City has it's own public facing API system. The developer portal details the API, which would include a JSON return from a URL GET / POST.
   however, this would require a special URL creation function apart from the sandard ESRI ARCGIS URL builder. It could potentially require a special
   JSON parse as I haven't had time to look at the actual JSON return from this special URL to see if it matches ESRI ARCGIS datasets.
   Developer API: https://data.okc.gov/portal/page/api
   Catalog of Maps: https://data.okc.gov/portal/page/catalog
   Address Layer Map: https://data.okc.gov/portal/page/viewer?datasetName=Address%20Zoning&view=map

   While browsing the Address layer map and applying different 'filters', I was able to locate the gis.okc.gov arcgis REST url. However, the data
   we would normally prefer to use (the one the map more than likely colates to, does not support the QUERY function:
   REST URL we would normally use: https://gis.okc.gov/arcgis/rest/services/Public/Data_OKC_Gov_Application_Service/MapServer
   REST URL that allows query, and appears to be apart of the Map system used for the Catalog above (Accela?),  but may contain incomplete data:
   https://gis.okc.gov/arcgis/rest/services/Accela/AccelaActionCenter/MapServer
*/

        {name: 'Oklahoma City - City Address Points',
         id: 'ok-oklahoma-city-city-points',
         url: 'https://gis.okc.gov/arcgis/rest/services/Accela/AccelaActionCenter/MapServer/11',
         labelFields: ['ADDRESS','FULLSTREETNAME'],
         processLabel: function(label) { return label.replace(/^99999.*/, ''); },
         state: 'OK',
         style: DEFAULT_PT_STYLE},

         {name: 'Oklahoma City - City Parcels',
         id: 'ok-oklahoma-city-city-parcels',
//         url: 'https://gis.okc.gov/arcgis/rest/services/Accela/AccelaActionCenter/MapServer/0', // Missing poly's in newer areas 2018.03.31
         url: 'https://gis.okc.gov/arcgis/rest/services/Accela/AGIS_PPLS_DEV/MapServer/4',
         labelFields: ['LotAddress'],
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Osage Co - Parcels',
         id: 'ok-Osage-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsOSAGE/MapServer/0',
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, '').replace(/\\/,''); },
         state: 'OK',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Rogers Co - Parcels',
         id: 'ok-Rogers-co-parcels',
         url: 'http://map7.incog.org/arcgis7wa/rest/services/parcelsROGERS/MapServer/0',
         where: "CAMA<>''",
         labelFields: ['SITUS'],
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r2, ''); },
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
         processLabel: function(label) { return label.replace(_regexReplace.r0, ''); },
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


        // South Caolina
        // *********************************

        // Abbeville Co - qPublic
        // Aiken Co - qPublic
        // Allendale Co - qPublic $$$

        {name: 'Anderson Co - Parcels',
         id: 'sc-anderson-co-parcels',
         url: 'http://propertyviewer.andersoncountysc.org/arcgis/rest/services/Address_Viewer/MapServer/5',
         labelFields: ['PHYS_ADDR'],
         processLabel: function(label) { return label.replace(/.* (\d.*)/,'$1'); },
         state: 'SC',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Anderson Co - Address Points',
         id: 'sc-anderson-co-pts',
         url: 'http://propertyviewer.andersoncountysc.org/arcgis/rest/services/Address_Viewer/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'SC',
         style: DEFAULT_PT_STYLE},

        // Bamberg Co - qPublic $$$
        // Barnwell Co - qPublic $$$

        {name: 'Beaufort Co - Parcels',
         id: 'sc-beaufort-co-parcels',
         url: 'http://webgis.bcgov.net/arcgis/rest/services/Parcels/MapServer/0',
         labelFields: ['GisData_DBO_GisFile_SitusAddre'],
         state: 'SC',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Beaufort Co - Address Points',
         id: 'sc-beaufort-co-pts',
         url: 'http://webgis.bcgov.net/arcgis/rest/services/Addresses/MapServer/0',
         labelFields: ['STADDRESS'],
         state: 'SC',
         style: DEFAULT_PT_STYLE},

        {name: 'Berkeley Co - Parcels',
         id: 'sc-berkeley-co-parcels',
         url: 'http://gis.berkeleycountysc.gov/arcgis/rest/services/desktop/internet_map/MapServer/3',
         labelFields: ['GIS_Address'],
         state: 'SC',
         style: DEFAULT_PARCEL_STYLE},

        {name: 'Berkeley Co - Address Points',
         id: 'sc-berkeley-co-pts',
         url: 'http://gis.berkeleycountysc.gov/arcgis/rest/services/desktop/internet_map/MapServer/0',
         labelFields: ['ADDRESS'],
         state: 'SC',
         style: DEFAULT_PT_STY
