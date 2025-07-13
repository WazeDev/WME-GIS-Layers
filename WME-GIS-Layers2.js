/* eslint-disable camelcase */
/* eslint-disable brace-style, curly, nonblock-statement-body-position, no-template-curly-in-string, func-names */
// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2025.07.13.000
// @description  Adds GIS layers in WME
// @author       MapOMatic / JS55CT
// @match         *://*.waze.com/*editor*
// @exclude       *://*.waze.com/user/editor*
// @exclude       *://*.waze.com/editor/sdk/*
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @require      https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js
// @require      https://update.greasyfork.org/scripts/506614/1441195/ESTreeProcessor.js
// @require      https://update.greasyfork.org/scripts/509664/WME%20Utils%20-%20Bootstrap.js
// @require      https://update.greasyfork.org/scripts/516445/1480246/Make%20GM%20xhr%20more%20parallel%20again.js
// @require      https://WazeDev.github.io/wmeGisLBBOX/wmeGisLBBOX.js
// @connect      greasyfork.org
// @connect      github.io
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_setClipboard
// @license      GNU GPLv3
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// @connect      *
// @connect tigerweb.geo.census.gov
// @connect 136.234.13.165
// @connect 216.167.160.20
// @connect 35.172.145.31
// @connect 52.37.30.30
// @connect 54.213.14.253
// @connect 72.10.206.73
// @connect a2maps.a2gov.org
// @connect adairgis.integritygis.com
// @connect agis.charlottecountyfl.gov
// @connect ago.clarkcountyohio.gov
// @connect agomaps.larimer.org
// @connect ags.agdmaps.com
// @connect ags.bhamaps.com
// @connect ags.kitsapgov.com
// @connect ags.myokaloosa.com
// @connect ags.roseville.ca.us
// @connect ags1.wgxtreme.com
// @connect ags2maps.srcity.org
// @connect ags3.scgov.net
// @connect aldotgis.dot.state.al.us
// @connect alleganygis.allconet.org
// @connect alphagis.alpharetta.ga.us
// @connect andrewgis.integritygis.com
// @connect anrmaps.vermont.gov
// @connect ansoncountygis.com
// @connect apnsgis1.apsu.edu
// @connect apnsgis4.apsu.edu
// @connect app.mdt.mt.gov
// @connect apps.alamance-nc.com
// @connect apps.fs.usda.gov
// @connect apps.lickingcounty.gov
// @connect apps.vernoncounty.org
// @connect apps.wyoroad.info
// @connect arcgis-morrowarcgis-1015369042.us-east-1.elb.amazonaws.com
// @connect arcgis-web.chinohills.org
// @connect arcgis.atlantaregional.com
// @connect arcgis.c3gov.com
// @connect arcgis.cityofcapegirardeau.org
// @connect arcgis.cityofwatsonville.org
// @connect arcgis.clearfieldco.org
// @connect arcgis.co.beltrami.mn.us
// @connect arcgis.co.henry.ga.us
// @connect arcgis.co.lancaster.pa.us
// @connect arcgis.forneytx.gov
// @connect arcgis.gis.lacounty.gov
// @connect arcgis.kingsporttn.gov
// @connect arcgis.leaguecitytx.gov
// @connect arcgis.lewiscountywa.gov
// @connect arcgis.mobile311.com
// @connect arcgis.racinecounty.com
// @connect arcgis.tampagov.net
// @connect arcgis.tuscco.com
// @connect arcgis.vgsi.com
// @connect arcgis.water.nv.gov
// @connect arcgis.waxahachie.com
// @connect arcgis.yumacountyaz.gov
// @connect arcgis4.roktech.net
// @connect arcgis5.roktech.net
// @connect arcgisce.co.valencia.nm.us
// @connect arcgisserver.digital.mass.gov
// @connect arcgisserver.lincolncounty.org
// @connect arcgisserver.maine.gov
// @connect arcgisserver2.morpc.org
// @connect arcgissrv.cityofbartlesville.org
// @connect arcgiswap01.ci.temple.tx.us
// @connect arcgisweb.carteretcountync.gov
// @connect arcgisweb.countyofnewaygo.com
// @connect arcmobile.co.albany.wy.us
// @connect arcportal.florenceco.org
// @connect arcserv.co.washington.ar.us
// @connect arcserver.madisoncountyky.us
// @connect arcserver2.oconeesc.com
// @connect arcweb.hcad.org
// @connect ardmoregis.ardmorecity.org
// @connect arlgis.arlingtonva.us
// @connect atchisongis.integritygis.com
// @connect atlas.co.chelan.wa.us
// @connect atlas.geoportalmaps.com
// @connect audraingis.integritygis.com
// @connect batesgis.integritygis.com
// @connect bcgis.baltimorecountymd.gov
// @connect bcgis.brunswickcountync.gov
// @connect bcgishub.broward.org
// @connect bcmaps.bradfordco.org
// @connect bentongis.integritygis.com
// @connect biamaps.geoplatform.gov
// @connect bocagis.ci.boca-raton.fl.us
// @connect bonneville.esriemcs.com
// @connect bpagis.bossierparish.org
// @connect bryangis.bryan-county.org
// @connect buchanangis.integritygis.com
// @connect butlergis.integritygis.com
// @connect c39gisserver.co.richland.nd.us
// @connect ca.dep.state.fl.us
// @connect cagisonline.hamilton-co.org
// @connect calmaps.co.calumet.wi.us
// @connect caltrans-gis.dot.ca.gov
// @connect cama.shelbycountyauditors.com
// @connect camdengis.integritygis.com
// @connect cassweb3.co.cass.mn.us
// @connect cceo.co.comal.tx.us
// @connect ccmap.cccounty.us
// @connect cecilmaps.org
// @connect charitongis.integritygis.com
// @connect christiangis.integritygis.com
// @connect cloud.longviewtexas.gov
// @connect cloudgis.bonnercountyid.gov
// @connect co.knox.il.us
// @connect coagisweb.cabq.gov
// @connect com.blountgis.org
// @connect concordgis.ci.concord.ca.us
// @connect conservationgis.alabama.gov
// @connect coopergis.integritygis.com
// @connect covgis.cityofvacaville.com
// @connect coweta-gis-web.coweta.ga.us
// @connect cowlitzgis.net
// @connect crgis.cedar-rapids.org
// @connect cteco.uconn.edu
// @connect cty-gis-web.co.humboldt.ca.us
// @connect cw.townofclaytonnc.org
// @connect dadegis.integritygis.com
// @connect dallasgis.integritygis.com
// @connect data.wsdot.wa.gov
// @connect data1.digitaldataservices.com
// @connect dc-web-2.co.douglas.mn.us
// @connect dcgis.dekalbcountyga.gov
// @connect dcimapapps.countyofdane.com
// @connect dekalbgis.integritygis.com
// @connect delta.co.clatsop.or.us
// @connect dev.wilsonvillemaps.com
// @connect doniphangis.integritygis.com
// @connect dotapp9.dot.state.mn.us
// @connect douglasgis.integritygis.com
// @connect dtdapps.coloradodot.info
// @connect dungis.dunwoodyga.gov
// @connect dunklingis.integritygis.com
// @connect egis.baltimorecity.gov
// @connect egis.pinellas.gov
// @connect elb.elevatemaps.io
// @connect emapsplus.com
// @connect enigma.accgov.com
// @connect enterprise.firstmap.delaware.gov
// @connect eoc.franklin-gov.com
// @connect epv.ci.juneau.ak.us
// @connect eservices.co.crook.or.us
// @connect essex-gis.co.essex.ny.us
// @connect explore.opelika-al.gov
// @connect fcgis.franklincountypa.gov
// @connect feature.geographic.texas.gov
// @connect feature.tnris.org
// @connect fieldstone.orangecountync.gov
// @connect fremontgis.com
// @connect gasconadegis.integritygis.com
// @connect gateway.maps.rlid.org
// @connect gcgis.guilfordcountync.gov
// @connect geaugarealink.co.geauga.oh.us
// @connect geo.co.butler.pa.us
// @connect geo.co.harrison.ms.us
// @connect geo.dentoncad.com
// @connect geo.forsythco.com
// @connect geo.friscotexas.gov
// @connect geo.oit.ohio.gov
// @connect geo.sandag.org
// @connect geo.sanjoseca.gov
// @connect geo.statcan.gc.ca
// @connect geo.tompkins-co.org
// @connect geo.vbgov.com
// @connect geo1.oit.ohio.gov
// @connect geo2.co.dodge.wi.us
// @connect geodata.hawaii.gov
// @connect geodata.md.gov
// @connect geodata.sarpy.com
// @connect geodataportal.net
// @connect geonb.snb.ca
// @connect geopower.jws.com
// @connect geoweb.martin.fl.us
// @connect geoweb02.ci.richmond.ca.us
// @connect gis-2.warrencountyny.gov
// @connect gis-server.co.becker.mn.us
// @connect gis-server.co.montezuma.co.us
// @connect gis.aacounty.org
// @connect gis.abilenetx.com
// @connect gis.adamscounty.org
// @connect gis.addisontx.gov
// @connect gis.aecomonline.net
// @connect gis.allegancounty.org
// @connect gis.allencountyohio.com
// @connect gis.apachejunctionaz.gov
// @connect gis.arapahoegov.com
// @connect gis.arkansas.gov
// @connect gis.arlingtonva.us
// @connect gis.ashecountygov.com
// @connect gis.ashevillenc.gov
// @connect gis.atlantaga.gov
// @connect gis.auburnalabama.org
// @connect gis.auglaizecounty.org
// @connect gis.azdot.gov
// @connect gis.bakersfieldcity.us
// @connect gis.baycountyfl.gov
// @connect gis.beaufortcountysc.gov
// @connect gis.beaumonttexas.gov
// @connect gis.belmont.gov
// @connect gis.bentoncountyar.gov
// @connect gis.berkeleycountysc.gov
// @connect gis.bigstonecounty.gov
// @connect gis.bladenco.org
// @connect gis.blairco.org
// @connect gis.blm.gov
// @connect gis.blueearthcountymn.gov
// @connect gis.bransonmo.gov
// @connect gis.brevardfl.gov
// @connect gis.browncountywi.gov
// @connect gis.buncombecounty.org
// @connect gis.burkenc.org
// @connect gis.burleighco.com
// @connect gis.buttecounty.net
// @connect gis.caldwellcountync.org
// @connect gis.calhouncounty.org
// @connect gis.campbellca.gov
// @connect gis.campbellcountywy.gov
// @connect gis.carboncounty.com
// @connect gis.cayugacounty.us
// @connect gis.cccounty.us
// @connect gis.ccgisonline.com
// @connect gis.ccpa.net
// @connect gis.cedarfalls.com
// @connect gis.cedarhilltx.com
// @connect gis.cherokeega.com
// @connect gis.chippewa.mn
// @connect gis.chisagocountymn.gov
// @connect gis.ci.janesville.wi.us
// @connect gis.ci.mcminnville.or.us
// @connect gis.ci.waco.tx.us
// @connect gis.citruspa.org
// @connect gis.cityofaikensc.gov
// @connect gis.cityofberkeley.info
// @connect gis.cityofboston.gov
// @connect gis.cityofdenton.com
// @connect gis.cityofirvine.org
// @connect gis.cityofmiddletown.com
// @connect gis.cityofmoore.com
// @connect gis.cityofsanmateo.org
// @connect gis.cityofwestsacramento.org
// @connect gis.clevelandtn.gov
// @connect gis.cmpdd.org
// @connect gis.co.benton.or.us
// @connect gis.co.berks.pa.us
// @connect gis.co.carlton.mn.us
// @connect gis.co.carver.mn.us
// @connect gis.co.clarion.pa.us
// @connect gis.co.cumberland.nc.us
// @connect gis.co.douglas.or.us
// @connect gis.co.eau-claire.wi.us
// @connect gis.co.fairfield.oh.us
// @connect gis.co.fillmore.mn.us
// @connect gis.co.grand.co.us
// @connect gis.co.grant.mn.us
// @connect gis.co.grant.wi.gov
// @connect gis.co.green-lake.wi.us
// @connect gis.co.holmes.oh.us
// @connect gis.co.hubbard.mn.us
// @connect gis.co.isanti.mn.us
// @connect gis.co.josephine.or.us
// @connect gis.co.kittitas.wa.us
// @connect gis.co.linn.or.us
// @connect gis.co.mille-lacs.mn.us
// @connect gis.co.nezperce.id.us
// @connect gis.co.oneida.wi.us
// @connect gis.co.pepin.wi.us
// @connect gis.co.pierce.wi.us
// @connect gis.co.polk.mn.us
// @connect gis.co.richland.wi.us
// @connect gis.co.roseau.mn.us
// @connect gis.co.sangamon.il.us
// @connect gis.co.sauk.wi.us
// @connect gis.co.sherburne.mn.us
// @connect gis.co.stearns.mn.us
// @connect gis.co.stevens.mn.us
// @connect gis.co.tuscarawas.oh.us
// @connect gis.co.wadena.mn.us
// @connect gis.co.waseca.mn.us
// @connect gis.co.waushara.wi.us
// @connect gis.co.ym.mn.gov
// @connect gis.colorado.gov
// @connect gis.coloradosprings.gov
// @connect gis.columbiacountyga.gov
// @connect gis.columbiacountymaps.com
// @connect gis.columbiasc.gov
// @connect gis.columbusga.org
// @connect gis.concordnh.gov
// @connect gis.cookeville-tn.org
// @connect gis.corvallisoregon.gov
// @connect gis.cosb.us
// @connect gis.countyofriverside.us
// @connect gis.cowleycounty.org
// @connect gis.cranstonri.org
// @connect gis.cravencountync.gov
// @connect gis.crcog.org
// @connect gis.crookcounty.wy.gov
// @connect gis.crowwing.us
// @connect gis.cstx.gov
// @connect gis.danville-va.gov
// @connect gis.dauphincounty.org
// @connect gis.deerparktx.gov
// @connect gis.dekalbcountyga.gov
// @connect gis.delcopa.gov
// @connect gis.dentoncounty.gov
// @connect gis.districtiii.org
// @connect gis.dogis.org
// @connect gis.donaanacounty.org
// @connect gis.dot.nh.gov
// @connect gis.dot.nv.gov
// @connect gis.dot.state.oh.us
// @connect gis.douglascountyks.org
// @connect gis.dubuquecounty.us
// @connect gis.dupageco.org
// @connect gis.duplincountync.com
// @connect gis.dutchessny.gov
// @connect gis.eastgreenwichri.com
// @connect gis.edgecombecountync.gov
// @connect gis.edmondok.gov
// @connect gis.elkocountynv.net
// @connect gis.elpasotexas.gov
// @connect gis.emmetcounty.org
// @connect gis.eriecountypa.gov
// @connect gis.fortlauderdale.gov
// @connect gis.franklincountyohio.gov
// @connect gis.fultoncountyoh.com
// @connect gis.fwb.org
// @connect gis.fwp.mt.gov
// @connect gis.gallatin.mt.gov
// @connect gis.gallupnm.us
// @connect gis.garrettcounty.org
// @connect gis.gastongov.com
// @connect gis.gcrc.org
// @connect gis.gilacountyaz.gov
// @connect gis.gocolumbiamo.com
// @connect gis.goshencounty.org
// @connect gis.gptx.org
// @connect gis.grandcountyutah.net
// @connect gis.greenecountyohio.gov
// @connect gis.greenegovernment.com
// @connect gis.greensboro-nc.gov
// @connect gis.gscplanning.com
// @connect gis.hardeecounty.net
// @connect gis.harnett.org
// @connect gis.hartford.gov
// @connect gis.hawaiicounty.gov
// @connect gis.hcpafl.org
// @connect gis.hennepin.us
// @connect gis.huntingtonbeachca.gov
// @connect gis.iberiagov.net
// @connect gis.indot.in.gov
// @connect gis.interdev.com
// @connect gis.iowadot.gov
// @connect gis.itd.idaho.gov
// @connect gis.jacksonnc.org
// @connect gis.jccal.org
// @connect gis.johnson-county.com
// @connect gis.johnsoncitytn.org
// @connect gis.kalamazoocity.org
// @connect gis.kanawhacountyassessor.com
// @connect gis.kaufmancounty.net
// @connect gis.kcgov.us
// @connect gis.kcmn.us
// @connect gis.kentcountyde.gov
// @connect gis.kentcountymi.gov
// @connect gis.kleinfelder.com
// @connect gis.lacrossecounty.org
// @connect gis.lafayettecountywi.org
// @connect gis.lakecountyfl.gov
// @connect gis.lakecountyohio.gov
// @connect gis.lapazcountyaz.org
// @connect gis.laplata.co.us
// @connect gis.lasallecounty.org
// @connect gis.latah.id.us
// @connect gis.leecountyil.com
// @connect gis.lehighcounty.org
// @connect gis.leoc.net
// @connect gis.lincoln.ne.gov
// @connect gis.littleelm.org
// @connect gis.livingstoncounty.us
// @connect gis.lja.com
// @connect gis.lojic.org
// @connect gis.losalamosnm.us
// @connect gis.luzernecounty.org
// @connect gis.lyco.org
// @connect gis.lyon-county.org
// @connect gis.macombgov.org
// @connect gis.maconnc.org
// @connect gis.maderacounty.com
// @connect gis.marinpublic.com
// @connect gis.marionfl.org
// @connect gis.masoncountywa.gov
// @connect gis.massdot.state.ma.us
// @connect gis.mbakerintl.com
// @connect gis.mcgtn.org
// @connect gis.mckeancountypa.gov
// @connect gis.mcohio.org
// @connect gis.mendocinocounty.org
// @connect gis.mercercountypa.gov
// @connect gis.mesaaz.gov
// @connect gis.mifflincountypa.gov
// @connect gis.minnehahacounty.org
// @connect gis.miottawa.org
// @connect gis.missoulacounty.us
// @connect gis.modestogov.com
// @connect gis.mono.ca.gov
// @connect gis.montgomeryal.gov
// @connect gis.moorecountync.gov
// @connect gis.mytoddcounty.com
// @connect gis.napa.ca.gov
// @connect gis.nashcountync.gov
// @connect gis.nassaucountyny.gov
// @connect gis.nccde.org
// @connect gis.ne.gov
// @connect gis.neccog.org
// @connect gis.newedgeservices.com
// @connect gis.newhavenct.gov
// @connect gis.nhcgov.com
// @connect gis.niagaracounty.com
// @connect gis.nola.gov
// @connect gis.norrycopa.net
// @connect gis.northamptoncounty.org
// @connect gis.odot.state.or.us
// @connect gis.ohiodnr.gov
// @connect gis.okc.gov
// @connect gis.orangecountygov.com
// @connect gis.orangecountyva.gov
// @connect gis.osceola.org
// @connect gis.outagamie.org
// @connect gis.owensboro.org
// @connect gis.pandai.com
// @connect gis.pendercountync.gov
// @connect gis.pendoreilleco.org
// @connect gis.penndot.gov
// @connect gis.penndot.pa.gov
// @connect gis.peoriacounty.gov
// @connect gis.personcountync.gov
// @connect gis.pgatlas.com
// @connect gis.pikepa.org
// @connect gis.pinal.gov
// @connect gis.pittcountync.gov
// @connect gis.pittsburgca.gov
// @connect gis.polk-county.net
// @connect gis.popecountymn.gov
// @connect gis.port-orange.org
// @connect gis.pottcounty-ia.gov
// @connect gis.putnam-fl.com
// @connect gis.qac.org
// @connect gis.randolphcountync.gov
// @connect gis.rapides911.org
// @connect gis.rcgov.org
// @connect gis.renvillecountymn.com
// @connect gis.rileycountyks.gov
// @connect gis.rocklin.ca.us
// @connect gis.rowancountync.gov
// @connect gis.rrnm.gov
// @connect gis.rtcsnv.com
// @connect gis.rutherfordcountync.gov
// @connect gis.sanjuanco.com
// @connect gis.santa-clarita.com
// @connect gis.santacruzcounty.us
// @connect gis.santamonica.gov
// @connect gis.sawyerwi.org
// @connect gis.sccwi.gov
// @connect gis.shastacounty.gov
// @connect gis.sheboygancounty.com
// @connect gis.shelbycountytn.gov
// @connect gis.showmeboone.com
// @connect gis.siouxfalls.gov
// @connect gis.slocounty.ca.gov
// @connect gis.sncoapps.us
// @connect gis.southkingstownri.com
// @connect gis.steele.mn
// @connect gis.stlouiscountymn.gov
// @connect gis.sullivanny.us
// @connect gis.sumtercountyfl.gov
// @connect gis.surryinfo.net
// @connect gis.talbotdes.org
// @connect gis.tazewell.com
// @connect gis.texoma.cog.tx.us
// @connect gis.thecolonytx.gov
// @connect gis.thomsonreuters.com
// @connect gis.transportation.wv.gov
// @connect gis.transylvaniacounty.org
// @connect gis.traviscountytx.gov
// @connect gis.tularecounty.ca.gov
// @connect gis.ucdavis.edu
// @connect gis.ulstercountyny.gov
// @connect gis.unioncountync.gov
// @connect gis.vernon-ct.gov
// @connect gis.victorvilleca.gov
// @connect gis.warrensburg-mo.com
// @connect gis.washingtoncountyny.gov
// @connect gis.watertownwi.gov
// @connect gis.waukesha-wi.gov
// @connect gis.waukeshacounty.gov
// @connect gis.weatherfordtx.gov
// @connect gis.westmorelandcountypa.gov
// @connect gis.westplains.net
// @connect gis.whatcomcounty.us
// @connect gis.whitfieldcountyga.com
// @connect gis.wilco.org
// @connect gis.wilkescounty.net
// @connect gis.willcountyillinois.com
// @connect gis.wilson-co.com
// @connect gis.wilsonnc.org
// @connect gis.wiu.edu
// @connect gis.woodcountywi.gov
// @connect gis.worldviewsolutions.com
// @connect gis.wyo.gov
// @connect gis.yadkincountync.gov
// @connect gis.yanceycountync.org
// @connect gis.yavapaiaz.gov
// @connect gis.yellowstonecountymt.gov
// @connect gis.yolocounty.gov
// @connect gis.yolocounty.org
// @connect gis.yuba.org
// @connect gis1.acimap.us
// @connect gis1.georgetowncountysc.org
// @connect gis1.hamiltoncounty.in.gov
// @connect gis11.cama.io
// @connect gis11.services.ncdot.gov
// @connect gis12.cookcountyil.gov
// @connect gis2.arlingtontx.gov
// @connect gis2.arlingtonva.us
// @connect gis2.co.dakota.mn.us
// @connect gis2.co.marathon.wi.us
// @connect gis2.co.ozaukee.wi.us
// @connect gis2.erie.gov
// @connect gis2.gworks.com
// @connect gis2.idaho.gov
// @connect gis2.lawrenceks.org
// @connect gis2.orangeburgcounty.org
// @connect gis2.sandyspringsga.gov
// @connect gis2.totaland.com
// @connect gis21svweb.lincolnparish.org
// @connect gis3.cdmsmithgis.com
// @connect gis3.cmpdd.org
// @connect gis3.gwinnettcounty.com
// @connect gis3.gworks.com
// @connect gis3.montgomerycountymd.gov
// @connect gis3.richmondnc.com
// @connect gis4.montgomerycountymd.gov
// @connect gisago-qa.mcgi.state.mi.us
// @connect gisago.mcgi.state.mi.us
// @connect gisapp.adcogov.org
// @connect gisapp.mahoningcountyoh.gov
// @connect gisapps.cityofchicago.org
// @connect gisapps.glendaleca.gov
// @connect gisapps.rileycountyks.gov
// @connect gisapps.wicomicocounty.org
// @connect gisapps1.mapoakland.com
// @connect gisarcweb.jeffersoncountywv.org
// @connect gisccapps.charlestoncounty.org
// @connect gisdata.alleghenycounty.us
// @connect gisdata.dot.ca.gov
// @connect gisdata.farrwestengineering.com
// @connect gisdata.in.gov
// @connect gisdata.jeffersoncountyoh.com
// @connect gisdata.kingcounty.gov
// @connect gisdata.pandai.com
// @connect gisdata.pima.gov
// @connect gisdata.seattle.gov
// @connect gisdemo1.cdmsmith.com
// @connect gisdemo2.cdmsmith.com
// @connect gisentapp01.highpointnc.gov
// @connect gisext.lincoln.ne.gov
// @connect gishost.cdmsmithgis.com
// @connect gisinfo.co.portage.wi.gov
// @connect gisinfo.co.walworth.wi.us
// @connect gisinfo.lawrencevillega.org
// @connect gismap.augustaga.gov
// @connect gismap.cityofboise.org
// @connect gismap.co.juneau.wi.us
// @connect gismap.co.marshall.mn.us
// @connect gismap.co.norman.mn.us
// @connect gismap.co.red-lake.mn.us
// @connect gismapping.stafford.va.us
// @connect gismaps.cityofboise.org
// @connect gismaps.cityofgreer.org
// @connect gismaps.co.cerro-gordo.ia.us
// @connect gismaps.coconino.az.gov
// @connect gismaps.columbiapa.org
// @connect gismaps.flower-mound.com
// @connect gismaps.fultoncountyga.gov
// @connect gismaps.hctra.org
// @connect gismaps.kingcounty.gov
// @connect gismaps.redwoodcity.org
// @connect gismaps.sedgwickcounty.org
// @connect gismaps.wichita.gov
// @connect gismapserver.leegov.com
// @connect gismo.spokanecounty.org
// @connect gisonline.greenvillenc.gov
// @connect gisp.co.genesee.ny.us
// @connect gisp.mcgi.state.mi.us
// @connect gisportal.calaverascounty.gov
// @connect gisportal.champaignil.gov
// @connect gisportal.co.madison.il.us
// @connect gisportal.co.warren.oh.us
// @connect gisportal.dorchestercounty.net
// @connect gisportal.dot.ct.gov
// @connect gisportal.fnsb.gov
// @connect gisportal.ircgov.com
// @connect gisportal.ontarioca.gov
// @connect gisportal.stocktonca.gov
// @connect gisportal.stpgov.org
// @connect gispro.porterco.org
// @connect gisprod10.co.fresno.ca.us
// @connect gisprodops.chesco.org
// @connect gispub.cityofaspen.com
// @connect gispub.co.washington.or.us
// @connect gispublic.co.lake.ca.us
// @connect gispw.coloradosprings.gov
// @connect gisrevprxy.seattle.gov
// @connect giss3.cmpdd.org
// @connect gisserver.christiancountymo.gov
// @connect gisservice.cityofmesquite.com
// @connect gisservicemt.gov
// @connect gisservices.chathamcountync.gov
// @connect gisservices.chathamnc.org
// @connect gisservices.co.anoka.mn.us
// @connect gisservices.douglasnv.us
// @connect gisservices.its.ny.gov
// @connect gisservices.oakgov.com
// @connect gisservices2.suffolkcountyny.gov
// @connect gissites4.centrecountypa.gov
// @connect gissvr.watgov.org
// @connect gisweb-18.ci.killeen.tx.us
// @connect gisweb-adapters.bcpa.net
// @connect gisweb.albemarle.org
// @connect gisweb.birminghamal.gov
// @connect gisweb.casscountynd.gov
// @connect gisweb.champaignil.gov
// @connect gisweb.ci.manteca.ca.us
// @connect gisweb.co.aitkin.mn.us
// @connect gisweb.co.mower.mn.us
// @connect gisweb.co.wilkin.mn.us
// @connect gisweb.fdlco.wi.gov
// @connect gisweb.fortbendcountytx.gov
// @connect gisweb.jeffcowa.us
// @connect gisweb.miamidade.gov
// @connect gisweb.pwcva.gov
// @connect gisweb.wycokck.org
// @connect gisweb2014.gordoncounty.org
// @connect giswww.westchestergov.com
// @connect git.co.tioga.ny.us
// @connect gmdnags.colliercountyfl.gov
// @connect grant.co.jefferson.id.us
// @connect gweb01.co.olmsted.mn.us
// @connect harpergis.integritygis.com
// @connect haslet.halff.com
// @connect hazards.fema.gov
// @connect hdgis.ingham.org
// @connect heartlandmpo.com
// @connect helenamontanamaps.org
// @connect henrygis.integritygis.com
// @connect hgis.hialeahfl.gov
// @connect holtgis.integritygis.com
// @connect host.cdmsmithgis.com
// @connect hostingdata2.tighebond.com
// @connect hostingdata3.tighebond.com
// @connect huntsvillegis.com
// @connect ifgis.idahofallsidaho.gov
// @connect ihost.tularecounty.ca.gov
// @connect imap.klickitatcounty.org
// @connect ims.districtiii.org
// @connect intervector.leoncountyfl.gov
// @connect iowagis.integritygis.com
// @connect ira.property-appraiser.org
// @connect jeffarcgis.jeffersoncountywi.gov
// @connect joplingis.org
// @connect k3gis.com
// @connect kanplan.ksdot.gov
// @connect kcgis.kentoncounty.org
// @connect kenhagis.kenha.co.ke
// @connect kygisserver.ky.gov
// @connect lacledegis.integritygis.com
// @connect lafayettegis.integritygis.com
// @connect landrecords.greencountywi.org
// @connect lawrencegis.integritygis.com
// @connect lcapps.co.lucas.oh.us
// @connect lcmaps.lanecounty.org
// @connect lee-arcgis.leecountync.gov
// @connect lincolngis.integritygis.com
// @connect linngis.integritygis.com
// @connect lio.milwaukeecountywi.gov
// @connect livingstongis.integritygis.com
// @connect location.cabarruscounty.us
// @connect logis.loudoun.gov
// @connect loraincountyauditor.com
// @connect lrs.co.columbia.wi.us
// @connect lucity.sbpg.net
// @connect macongis.integritygis.com
// @connect madison.rexburg.org
// @connect madisongis.cityofalbany.net
// @connect manitowocmaps.info
// @connect map.claycountymn.gov
// @connect map.co.clear-creek.co.us
// @connect map.co.clearwater.mn.us
// @connect map.co.merced.ca.us
// @connect map.co.thurston.wa.us
// @connect map.co.trempealeau.wi.us
// @connect map.coppelltx.gov
// @connect map.eaglecounty.us
// @connect map.newberrycounty.net
// @connect map.opkansas.org
// @connect map.pikepass.com
// @connect map.stclairco.com
// @connect map.sussexcountyde.gov
// @connect map.wyoroad.info
// @connect map11.incog.org
// @connect mapd.kcmo.org
// @connect mapdata.baytown.org
// @connect mapdata.lasvegasnevada.gov
// @connect mapdata.tucsonaz.gov
// @connect mapit.fortworthtexas.gov
// @connect mapit.tarrantcounty.com
// @connect mapitwest.fortworthtexas.gov
// @connect mapping.adamscountypa.gov
// @connect mapping.kenoshacountywi.gov
// @connect mapping.mitchellcounty.org
// @connect mapping.modot.org
// @connect maps.adaok.com
// @connect maps.alexandercountync.gov
// @connect maps.alexandriava.gov
// @connect maps.austintexas.gov
// @connect maps.bannockcounty.us
// @connect maps.bayfieldcounty.wi.gov
// @connect maps.bcad.org
// @connect maps.berkeleywv.org
// @connect maps.boonecountyil.org
// @connect maps.bossierparishgis.org
// @connect maps.bouldercounty.org
// @connect maps.brazoriacountytx.gov
// @connect maps.brla.gov
// @connect maps.brookhavenga.gov
// @connect maps.bryantx.gov
// @connect maps.burlesontx.com
// @connect maps.butlercountyauditor.org
// @connect maps.canyonco.org
// @connect maps.capturecama.com
// @connect maps.casperwy.gov
// @connect maps.chautauquacounty.com
// @connect maps.cherokeecounty-nc.gov
// @connect maps.ci.longmont.co.us
// @connect maps.ci.nacogdoches.tx.us
// @connect maps.cityhs.net
// @connect maps.cityofconroe.org
// @connect maps.cityofhenderson.com
// @connect maps.cityofls.net
// @connect maps.cityofmadison.com
// @connect maps.cityofmobile.org
// @connect maps.cityofsherman.com
// @connect maps.cityoftulsa.org
// @connect maps.cityofwaterlooiowa.com
// @connect maps.clarkcountynv.gov
// @connect maps.claycountygov.com
// @connect maps.clermontauditor.org
// @connect maps.clintoncountypa.com
// @connect maps.co.blaine.id.us
// @connect maps.co.ellis.tx.us
// @connect maps.co.forsyth.nc.us
// @connect maps.co.goodhue.mn.us
// @connect maps.co.gov
// @connect maps.co.grayson.tx.us
// @connect maps.co.itasca.mn.us
// @connect maps.co.kendall.il.us
// @connect maps.co.kern.ca.us
// @connect maps.co.lincoln.wi.us
// @connect maps.co.palm-beach.fl.us
// @connect maps.co.polk.or.us
// @connect maps.co.pueblo.co.us
// @connect maps.co.ramsey.mn.us
// @connect maps.co.shawano.wi.us
// @connect maps.co.warren.oh.us
// @connect maps.co.washington.mn.us
// @connect maps.coj.net
// @connect maps.collincountytx.gov
// @connect maps.countyofmerced.com
// @connect maps.crc.ga.gov
// @connect maps.ctmetro.org
// @connect maps.currituckcountync.gov
// @connect maps.dancgis.org
// @connect maps.dcad.org
// @connect maps.delco-gis.org
// @connect maps.deltacountyco.gov
// @connect maps.deschutes.org
// @connect maps.desotocountyms.gov
// @connect maps.dmgov.org
// @connect maps.dotd.la.gov
// @connect maps.douglascountyga.gov
// @connect maps.douglascountywa.net
// @connect maps.dsm.city
// @connect maps.elbertcounty-co.gov
// @connect maps.escpa.org
// @connect maps.etcog.org
// @connect maps.evansvillegis.com
// @connect maps.fayetteville-ar.gov
// @connect maps.fishers.in.us
// @connect maps.flathead.mt.gov
// @connect maps.floridadisaster.org
// @connect maps.frederickcountymd.gov
// @connect maps.fredericksburgva.gov
// @connect maps.garfield-county.com
// @connect maps.garlandtx.gov
// @connect maps.gov.bc.ca
// @connect maps.grcity.us
// @connect maps.groton-ct.gov
// @connect maps.grundyco.org
// @connect maps.hayward-ca.gov
// @connect maps.haywoodnc.net
// @connect maps.highlandvillage.org
// @connect maps.hokecounty.org
// @connect maps.huerfano.us
// @connect maps.huntsvilleal.gov
// @connect maps.iredellcountync.gov
// @connect maps.itos.uga.edu
// @connect maps.jocogov.org
// @connect maps.kytc.ky.gov
// @connect maps.lacity.org
// @connect maps.lagrange-ga.org
// @connect maps.lakecountyil.gov
// @connect maps.laramiecounty.com
// @connect maps.lcwy.org
// @connect maps.lebanontn.org
// @connect maps.lex-co.com
// @connect maps.lexingtonky.gov
// @connect maps.libertymo.gov
// @connect maps.lincolncountysd.org
// @connect maps.linkgis.org
// @connect maps.matsugov.us
// @connect maps.mckinneytexas.org
// @connect maps.meshekgis.com
// @connect maps.miamigov.com
// @connect maps.midlandtexas.gov
// @connect maps.monroecounty.gov
// @connect maps.muskegoncountygis.com
// @connect maps.nashville.gov
// @connect maps.ncpafl.com
// @connect maps.nevadacountyca.gov
// @connect maps.nj.gov
// @connect maps.normanok.gov
// @connect maps.northaugustasc.gov
// @connect maps.ocgov.net
// @connect maps.opkansas.org
// @connect maps.orcity.org
// @connect maps.palmcoastgov.com
// @connect maps.parkco.us
// @connect maps.phoenix.gov
// @connect maps.pitkincounty.com
// @connect maps.planogis.org
// @connect maps.pottercountypa.net
// @connect maps.prcity.com
// @connect maps.raleighnc.gov
// @connect maps.richlandcountyoh.us
// @connect maps.rutherfordcountytn.gov
// @connect maps.santa-clarita.com
// @connect maps.santabarbaraca.gov
// @connect maps.sbcounty.gov
// @connect maps.sccmo.org
// @connect maps.semogis.com
// @connect maps.sfdpw.org
// @connect maps.sgcity.org
// @connect maps.shelbyal.com
// @connect maps.slocity.org
// @connect maps.spartanburgcounty.org
// @connect maps.springfieldmo.gov
// @connect maps.steamboatsprings.net
// @connect maps.stlouisco.com
// @connect maps.swaincountync.gov
// @connect maps.tippecanoe.in.gov
// @connect maps.townofcary.org
// @connect maps.udot.utah.gov
// @connect maps.vcgi.vermont.gov
// @connect maps.ventura.org
// @connect maps.victoriatx.org
// @connect maps.vilascountywi.gov
// @connect maps.vtrans.vermont.gov
// @connect maps.wake.gov
// @connect maps.washco-md.net
// @connect maps.washcowisco.gov
// @connect maps1.eriecounty.oh.gov
// @connect maps1.larimer.org
// @connect maps11.eriecounty.oh.gov
// @connect maps2.bgadd.org
// @connect maps2.cattco.org
// @connect maps2.ci.euless.tx.us
// @connect maps2.columbus.gov
// @connect maps2.dcgis.dc.gov
// @connect maps2.san-marcos.net
// @connect maps2.timmons.com
// @connect maps2.vcgov.org
// @connect maps6.stlouis-mo.gov
// @connect maps7.eriecounty.oh.gov
// @connect maps8.eriecounty.oh.gov
// @connect mapsdev.hamiltontn.gov
// @connect mapserv.cityofloveland.org
// @connect mapserv.mesquitenv.gov
// @connect mapservice.nmstatelands.org
// @connect mapservices.gis.saccounty.net
// @connect mapservices.gov.yk.ca
// @connect mapservices.pasda.psu.edu
// @connect mapservices.santacruzcountyaz.gov
// @connect mapservices.sccgov.org
// @connect mapservices.weather.noaa.gov
// @connect mapservices1.jeffco.us
// @connect mapservices2.jeffco.us
// @connect mariesgis.integritygis.com
// @connect mariongis.integritygis.com
// @connect mcdonaldgis.integritygis.com
// @connect mcgis.mesacounty.us
// @connect mcgis.mohave.gov
// @connect mcgis4.monroecounty-fl.gov
// @connect mcmap.montrosecounty.net
// @connect mcogis.co.marion.oh.us
// @connect millergis.integritygis.com
// @connect mms.hursttx.gov
// @connect mndotgis.dot.state.mn.us
// @connect moberlygis.integritygis.com
// @connect mobile.alamedaca.gov
// @connect moniteaugis.integritygis.com
// @connect morgangis.integritygis.com
// @connect msdisweb.missouri.edu
// @connect mycity2.houstontx.gov
// @connect navigator.state.or.us
// @connect newtongis.integritygis.com
// @connect nhgeodata.unh.edu
// @connect nobgis.cityofnoblesville.org
// @connect northlake.halff.com
// @connect nsgiwa.novascotia.ca
// @connect nspdcwebsrv.csuchico.edu
// @connect oak.co.lake-of-the-woods.mn.us
// @connect oc17maps.co.oconto.wi.us
// @connect ocgis4.ocfl.net
// @connect oncorng.co.ontario.ny.us
// @connect operationserver.ci.henderson.nc.us
// @connect orfmaps.norfolk.gov
// @connect osagegis.integritygis.com
// @connect pagis.org
// @connect pamap.putnam-fl.gov
// @connect parcelmap.ashtabulacounty.us
// @connect parcels.rsdigital.com
// @connect parcelviewer.geodecisions.com
// @connect pascogis.pascocountyfl.net
// @connect pgis.plantation.org
// @connect phelpsgis.integritygis.com
// @connect polaris2.mecklenburgcountync.gov
// @connect polkgis.integritygis.com
// @connect portal.carolinabeach.org
// @connect portal.carson.org
// @connect portal.henrico.us
// @connect programs.iowadnr.gov
// @connect propaccess.wadtx.com
// @connect propertyviewer.andersoncountysc.org
// @connect proxy2.roktech.net
// @connect psportal.harrisoncountywv.com
// @connect pubgis.ci.lubbock.tx.us
// @connect public.co.wasco.or.us
// @connect public1.co.waupaca.wi.us
// @connect publicmap01.co.st-clair.il.us
// @connect publicmaps.txkusa.org
// @connect pulaskigis.integritygis.com
// @connect putnamcountygis.com
// @connect pwmaps.cityofloveland.org
// @connect pwmaps.reno.gov
// @connect rallsgis.integritygis.com
// @connect raygis.integritygis.com
// @connect rc-arcgis01.co.rice.mn.us
// @connect rdsgis.nctgis.nct911.org
// @connect renogis3.renogov.org
// @connect roads.udot.utah.gov
// @connect rockgis.co.rock.wi.us
// @connect rockgis.rockfordil.gov
// @connect romefloyd.agdmaps.com
// @connect rptsgisweb.oswegocounty.com
// @connect salinegis.integritygis.com
// @connect saludacountysc.net
// @connect scgis.summitoh.net
// @connect scgisa.starkcountyohio.gov
// @connect sdgis.sd.gov
// @connect secure.boonecountygis.com
// @connect sedaliagis.integritygis.com
// @connect see-eldorado.edcgov.us
// @connect server.boundarycountyid.org
// @connect server1.mapxpress.net
// @connect server2.mapxpress.net
// @connect services.arcgis.com
// @connect services.gis.ca.gov
// @connect services.gisqatar.org.qa
// @connect services.mh-gis.com
// @connect services.nconemap.gov
// @connect services.putnamco.org
// @connect services.sagis.org
// @connect services.wvgis.wvu.edu
// @connect services1.arcgis.com
// @connect services2.arcgis.com
// @connect services2.integritygis.com
// @connect services3.arcgis.com
// @connect services5.arcgis.com
// @connect services6.arcgis.com
// @connect services7.arcgis.com
// @connect services8.arcgis.com
// @connect services9.arcgis.com
// @connect showlowmaps.com
// @connect skyview.hornershifrin.com
// @connect slcgis.stlucieco.gov
// @connect slco.org
// @connect smgis.sanmarcostx.gov
// @connect smithvillegis.integritygis.com
// @connect smpesri.scdot.org
// @connect socogis.sonomacounty.ca.gov
// @connect spatial.gishost.com
// @connect spatial.jacksoncountyor.gov
// @connect spatialags.vhb.com
// @connect stclairgis.integritygis.com
// @connect stmgis.stmarysmd.com
// @connect stokescountygis.com
// @connect stonegis.integritygis.com
// @connect svr4.sumtercountysc.org
// @connect tcgisws.tooeleco.gov
// @connect tcweb.co.teller.co.us
// @connect tfportal.tfid.org
// @connect tharcgis2.thewoodlands-tx.gov
// @connect tigerweb.geo.census.gov
// @connect tiogagis.tiogacountypa.us
// @connect tnmap.tn.gov
// @connect tpwd.texas.gov
// @connect tsc-gis-ags101a.schneidercorp.com
// @connect twu.newedgeservices.com
// @connect utility.arcgis.com
// @connect vernongis.integritygis.com
// @connect vginmaps.vdem.virginia.gov
// @connect vtransmap01.aot.state.vt.us
// @connect wallawallagis.com
// @connect warrengis.integritygis.com
// @connect wcg-gisweb.co.worcester.md.us
// @connect wcgis3.co.winnebago.wi.us
// @connect wcgisweb.washoecounty.us
// @connect wcoh.geopowered.com
// @connect web.binghamid.gov
// @connect web2.co.ottertail.mn.us
// @connect web2.kcsgis.com
// @connect web3.kcsgis.com
// @connect web4.kcsgis.com
// @connect web5.kcsgis.com
// @connect webadaptor.glynncounty-ga.gov
// @connect webgis.bedfordcountyva.gov
// @connect webgis.co.davidson.nc.us
// @connect webgis.durhamnc.gov
// @connect webgis.lafayetteassessor.com
// @connect webgis.providenceri.gov
// @connect webgis.waterburyct.org
// @connect webgis.yorbalindaca.gov
// @connect webmap.co.jackson.ms.us
// @connect webmap.jeffparish.net
// @connect webmap.trueautomation.com
// @connect webmaps.elkgrovecity.org
// @connect webmaps.sjcounty.net
// @connect webportal.co.marquette.wi.us
// @connect websrv31.clallamcountywa.gov
// @connect webstergis.integritygis.com
// @connect wfs.ksdot.org
// @connect wfs.schneidercorp.com
// @connect wvsams.mapwv.org
// @connect ww1.bucoks.com
// @connect www.1stdistrict.org
// @connect www.adacountyassessor.org
// @connect www.adamscountyarcserver.com
// @connect www.ancgis.com
// @connect www.bartowgis.org
// @connect www.bcgis.com
// @connect www.bcpao.us
// @connect www.centralilmaps.com
// @connect www.cmbgis.com
// @connect www.colesco.illinois.gov
// @connect www.ctgismaps2.ct.gov
// @connect www.denvergov.org
// @connect www.dmcwebgis.com
// @connect www.efsedge.com
// @connect www.finneycountygis.com
// @connect www.franklinmo.net
// @connect www.gcgis.org
// @connect www.gfgis.com
// @connect www.gis.hctx.net
// @connect www.gis.sjcfl.us
// @connect www.gismidwest.com
// @connect www.gisonline.ms.gov
// @connect www.greenwoodsc.gov
// @connect www.hernandocountygis-florida.us
// @connect www.hogarcmaps.org
// @connect www.horrycountysc.gov
// @connect www.landmarkgeospatial.com
// @connect www.laurenscountygis.org
// @connect www.mcgisweb.org
// @connect www.mchenrycountygis.org
// @connect www.midmogis.org
// @connect www.monroegis.org
// @connect www.mymanatee.org
// @connect www.ocgis.com
// @connect www.portlandmaps.com
// @connect www.sciotocountyengineer.org
// @connect www.semogis.com
// @connect www.sgrcmaps.com
// @connect www.sjmap.org
// @connect www.skagitcounty.net
// @connect www.smithcountymapsite.org
// @connect www.tgisites.com
// @connect www.valorgis.com
// @connect www.waynecounty.com
// @connect www.webgis.net
// @connect www.yamhillcountygis.com
// @connect www1.cityofwebster.com
// @connect www2.ci.lancaster.oh.us
// @connect www2.pottcounty.org
// @connect www3.multco.us
// @connect www7.co.union.oh.us
// @connect xara1-4.cityofpetaluma.net
// @connect xmaps.indy.gov
// ==/UserScript==

/* global WazeWrap */
/* global _ */
/* global turf */
/* global ESTreeProcessor */
/* global bootstrap */
/* global OpenLayers */

(async function main() {
  'use strict';

  const SHOW_UPDATE_MESSAGE = true;
  const SCRIPT_VERSION_CHANGES = [
     'Major update:',
     'Added Support for Additional Countries!',
     'Load only the layers for the country and the 1st level subdivision given the current WME viewport.',
     'Replaced US Census Tiger graph service with a new library using boundary boxes and GEOJSON objects.',
     'Updated ArcGIS web services to return EPSG:4326 (WGS 84) instead of EPSG:3857, aligning with the new SDK requirement for coordinates',
  ];

  // **************************************************************************************************************
  // IMPORTANT: Update this when releasing a new version of script that includes changes to the spreadsheet format
  //            that may cause old code to break.  This # should match the version listed in the spreadsheet
  //            i.e. update them at the same time.

  // const LAYER_DEF_VERSION = '2018.04.27.001';  // NOT ACTUALLY USED YET

  // **************************************************************************************************************
  // const UPDATE_MESSAGE = 'Bug fix due to WME update';
  // const UPDATE_MESSAGE = `<ul>${[
  //     'Added ability to shift layers. Right click a layer in the list to bring up the layer settings window.'
  // ].map(item => `<li>${item}</li>`).join('')}</ul><br>`;
  const GF_URL = 'https://greasyfork.org/scripts/369632-wme-gis-layers';
  // Used in tooltips to tell people who to report issues to.  Update if a new author takes ownership of this script.
  const SCRIPT_AUTHOR = 'MapOMatic / JS55CT';
  // const LAYER_INFO_URL = 'https://spreadsheets.google.com/feeds/list/1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw/o7gusx3/public/values?alt=json';
  const REQUEST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSevPQLz2ohu_LTge9gJ9Nv6PURmCmaSSjq0ayOJpGdRr2xI0g/viewform?usp=pp_url&entry.2116052852={username}';
  const PRIVATE_LAYERS = { 'nc-henderson-sl-signs': ['the_cre8r', 'mapomatic'] }; // case sensitive -- use all lower case

  const DEFAULT_LAYER_NAME = 'GIS Layers - Default';
  const ROAD_LAYER_NAME = 'GIS Layers - Roads';
  const DEFAULT_STYLE = {
    fillColor: '#000',
    pointRadius: 4,
    label: '${getLabel}',
    fillOpacity: '0.95',
    strokeColor: '#ffa500',
    strokeOpacity: '0.95',
    strokeWidth: 1.5,
    fontColor: '#ffc520',
    fontSize: '13',
    labelOutlineColor: 'black',
    labelOutlineWidth: 3,
  };
  const LAYER_STYLES = {
    cities: {
      fillOpacity: 0.3,
      fillColor: '#f65',
      strokeColor: '#f65',
      fontColor: '#f62',
    },
    forests_parks: {
      fillOpacity: 0.4,
      fillColor: '#585',
      strokeColor: '#484',
      fontColor: '#8b8',
    },
    milemarkers: {
      strokeColor: '#fff',
      fontColor: '#fff',
      fontWeight: 'bold',
      fillOpacity: 0,
      labelYOffset: 10,
      pointRadius: 2,
      fontSize: 12,
    },
    parcels: {
      fillOpacity: 0,
      fillColor: '#ffa500',
    },
    points: {
      strokeColor: '#000',
      fontColor: '#0ff',
      fillColor: '#0ff',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    post_offices: {
      strokeColor: '#000',
      fontColor: '#f84',
      fillColor: '#f84',
      fontWeight: 'bold',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    state_parcels: {
      fillOpacity: 0,
      strokeColor: '#e62',
      fillColor: '#e62',
      fontColor: '#e73',
    },
    state_points: {
      strokeColor: '#000',
      fontColor: '#3cf',
      fillColor: '#3cf',
      labelYOffset: -10,
      labelAlign: 'ct',
    },
    road_labels: {
      strokeOpacity: 0,
      fillOpacity: 0,
      fontColor: '#faf',
    },
    structures: {
      fillOpacity: 0,
      strokeColor: '#f7f',
      fontColor: '#f7f',
    },
  };
  let ROAD_STYLE;
  function initRoadStyle() {
    ROAD_STYLE = {
      pointRadius: 12,
      fillColor: '#369',
      pathLabel: '${getLabel}',
      label: '',
      fontColor: '#faf',
      labelSelect: true,
      pathLabelYOffset: '${getOffset}',
      pathLabelCurve: '${getSmooth}',
      pathLabelReadable: '${getReadable}',
      labelAlign: '${getAlign}',
      labelOutlineWidth: 3,
      labelOutlineColor: '#000',
      strokeWidth: 3,
      stroke: true,
      strokeColor: '#f0f',
      strokeOpacity: 0.4,
      fontWeight: 'bold',
      fontSize: 11,
    };
  }

  // eslint-disable-next-line no-unused-vars
  const _regexReplace = {
    // Strip leading zeros or blank full label for any label starting with a non-digit or
    // is a Zero Address, use with '' as replace.
    r0: /^(0+(\s.*)?|\D.*)/,
    // Strip Everything After Street Type to end of the string by use $1 and $2 capture
    // groups, use with replace '$1$2'
    // eslint-disable-next-line max-len
    r1: /^(.* )(Ave(nue)?|Dr(ive)?|St(reet)?|C(our)?t|Cir(cle)?|Blvd|Boulevard|Pl(ace)?|Ln|Lane|Fwy|Freeway|R(oa)?d|Ter(r|race)?|Tr(ai)?l|Way|Rte \d+|Route \d+)\b.*/gi,
    // Strip SPACE 5 Digits from end of string, use with replace ''
    r2: /\s\d{5}$/,
    // Strip Everything after a "~", ",", ";" to the end of the string, use with replace ''
    r3: /(~|,|;|\s?\r\n).*$/,
    // Move the digits after the last space to before the rest of the string using, use with
    // replace '$2 $1'
    r4: /^(.*)\s(\d+).*/,
    // Insert newline between digits (including "-") and everything after the digits,
    // except(and before) a ",", use with replace '$1\n$2'
    r5: /^([-\d]+)\s+([^,]+).*/,
    // Insert newline between digits and everything after the digits, use with
    // replace '$1\n$2'
    r6: /^(\d+)\s+(.*)/,
  };

  let _gisLayers = [];
  let _whatsInView = {};
  const alreadyLoadedCountries = new Set();
  const alreadyLoadedSubL1 = new Set();
  const WmeGisLBBOX = new wmeGisLBBOX(); // Create and reuse this instance as wmeGisLBBOX uses an instance-level cache (i.e., this.cache)
  let countrySubdivisionMapping = {};

  /**
   * Asynchronously builds a mapping from 'country-subdivision' identifiers to their respective names.
   *
   * This function retrieves country and subdivision data using the `WmeGisLBBOX.getCountriesAndSubsJson()` method.
   * It then iterates over the retrieved data to construct a mapping object where each key is a combination of
   * country and subdivision IDs, and the value is the corresponding name formatted as 'countryId - subdivisionName'.
   *
   * The mapping includes:
   * - Each country with a key in the format 'countryId-countryId' and its name.
   * - Each subdivision with a key in the format 'countryId-subdivisionId' and its name.
   *
   * @returns {Promise<Object>} A promise that resolves to an object representing the mapping of country and subdivision identifiers to names.
   */
  async function buildCountrySubdivisionMapping() {
    const countriesAndSubs = await WmeGisLBBOX.getCountriesAndSubsJson();
    for (const [countryId, countryData] of Object.entries(countriesAndSubs)) {
      const countryName = countryData.name;

      // Add country itself with key 'countryId-countryId'
      countrySubdivisionMapping[`${countryId}`] = countryName;
      countrySubdivisionMapping[`${countryId}-${countryId}`] = `${countryId} - ${countryName}`;

      if (countryData.subL1) {
        for (const [subId, subData] of Object.entries(countryData.subL1)) {
          const subName = subData.name;
          const key = `${countryId}-${subId}`;
          const value = `${countryId} - ${subName}`;
          countrySubdivisionMapping[key] = value;
        }
      }
    }
    return countrySubdivisionMapping;
  }

  /**
   * Helper object for managing mappings between country-subdivision keys and their full names.
   *
   * The `NameMapper` object provides utility functions to convert between full names and keys,
   * and to retrieve arrays of all keys or names within the `countrySubdivisionMapping`.
   */
  const NameMapper = {
    /**
     * Converts a full name to its corresponding key ('country-subdivision').
     *
     * @param {string} fullName - The full name to be converted.
     * @returns {string|undefined} The key corresponding to the given full name, or undefined if not found.
     */
    toKey(fullName) {
      // Attempt to find a matching key using the value from the mapping.
      return Object.entries(countrySubdivisionMapping).find(([key, value]) => value === fullName)?.[0];
    },

    /**
     * Converts a key ('country-subdivision') to its corresponding full name.
     *
     * @param {string} key - The key to be converted.
     * @returns {string|undefined} The full name corresponding to the given key, or undefined if not found.
     */
    toFullName(key) {
      return countrySubdivisionMapping[key];
    },

    /**
     * Retrieves an array of all full names in the `countrySubdivisionMapping`.
     *
     * @returns {Array<string>} An array containing all full names.
     */
    toFullNameArray() {
      return Object.values(countrySubdivisionMapping);
    },

    /**
     * Retrieves an array of all keys ('country-subdivision') in the `countrySubdivisionMapping`.
     *
     * @returns {Array<string>} An array containing all keys.
     */
    toKeyArray() {
      return Object.keys(countrySubdivisionMapping);
    },
  };

  const DEFAULT_VISIBLE_AT_ZOOM = 18;
  const SETTINGS_STORE_NAME = 'wme_gis_layers_fl';
  const scriptName = GM_info.script.name;
  const scriptVersion = GM_info.script.version;
  const downloadUrl = 'https://greasyfork.org/scripts/369632-wme-gis-layers/code/WME%20GIS%20Layers.user.js';
  const sdk = await bootstrap({ scriptUpdateMonitor: { downloadUrl } });
  let settings = {};
  let ignoreFetch = false;
  let lastToken = {};
  let userInfo;

  // Variables to store Label popup position and selected layer
  const layerLabels = {};
  let isPopupVisible = null;
  const popupPosition = { left: '50%', top: '50%' };
  let popupActiveLayer = null;
  let useAcronyms = false;
  let useTitleCase = false;
  let useStateHwy = false;
  let removeNewLines = false;

  const DEBUG = true;
  // function log(message) { console.log('GIS Layers:', message); }
  function logError(message, args = []) {
    console.error(`${scriptName}:`, message, ...args);
  }
  function logDebug(message, args = []) {
    if (DEBUG) console.debug(`${scriptName}:`, message, ...args);
  }
  // function logWarning(message) { console.warn('GIS Layers:', message); }

  let _layerSettingsDialog;

  class LayerSettingsDialog {
    #gisLayer;
    #minVisibleAtZoom = 12;
    #maxVisibleAtZoom = 22;
    #titleText;
    #shiftUpButton;
    #visibleAtZoomInput;

    constructor() {
      this.#titleText = $('<span>');
      const closeButton = $('<span>', {
        style: 'cursor:pointer;padding-left:4px;font-size:17px;color:#d6e6f3;float:right;',
        class: 'fa fa-window-close',
      }).click(() => this.#onCloseButtonClick());
      const shiftUpButton = LayerSettingsDialog.#createShiftButton('fa-angle-up').click(() => this.#onShiftButtonClick(0, 1));
      const shiftLeftButton = LayerSettingsDialog.#createShiftButton('fa-angle-left').click(() => this.#onShiftButtonClick(-1, 0));
      const shiftRightButton = LayerSettingsDialog.#createShiftButton('fa-angle-right').click(() => this.#onShiftButtonClick(1, 0));
      const shiftDownButton = LayerSettingsDialog.#createShiftButton('fa-angle-down').click(() => this.#onShiftButtonClick(0, -1));
      const resetOffsetButton = $('<button>', {
        class: 'form-control',
        style: 'height: 24px; width: auto; padding: 2px 6px 0px 6px; display: inline-block; float: right;',
      })
        .text('Reset')
        .click(() => this.#onResetOffsetButtonClick());

      this._dialogDiv = $('<div>', {
        style:
          'position: fixed; top: 15%; left: 400px; width: 200px; z-index: 100; background-color: #73a9bd; border-width: 1px; border-style: solid;' +
          'border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7); border-color: #50667b; padding: 4px;',
      }).append(
        $('<div>').append(
          // The extra div is needed here. When the header text wraps, the main dialog div won't expand properly without it.
          // HEADER
          $('<div>', { style: 'border-radius:5px 5px 0px 0px; padding: 4px; color: #fff; font-weight: bold; text-align:left; cursor: default;' }).append(closeButton, this.#titleText),
          // BODY
          $('<div>').append(
            $('<div>', { style: 'border-radius: 5px; width: 100%; padding: 4px; background-color:#d6e6f3; display:inline-block; margin-right:5px;' }).append(
              resetOffsetButton,
              $('<input>', {
                type: 'radio',
                id: 'gisLayerShiftAmt1',
                name: 'gisLayerShiftAmt',
                value: '1',
                checked: 'checked',
              }),
              $('<label>', { for: 'gisLayerShiftAmt1' }).text('1m'),
              $('<input>', {
                type: 'radio',
                id: 'gisLayerShiftAmt10',
                name: 'gisLayerShiftAmt',
                value: '10',
                style: 'margin-left: 6px',
              }),
              $('<label>', { for: 'gisLayerShiftAmt10' }).text('10m'),
              $('<div>', { style: 'padding: 4px' }).append(
                $('<table>', { style: 'table-layout:fixed; width:60px; height:84px; margin-left:auto;margin-right:auto;' }).append(
                  $('<tr>', { style: 'width: 20px; height: 28px;' }).append($('<td>', { align: 'center' }), $('<td>', { align: 'center' }).append(shiftUpButton), $('<td>', { align: 'center' })),
                  $('<tr>', { style: 'width: 20px; height: 28px;' }).append(
                    $('<td>', { align: 'center' }).append(shiftLeftButton),
                    $('<td>', { align: 'center' }),
                    $('<td>', { align: 'center' }).append(shiftRightButton)
                  ),
                  $('<tr>', { style: 'width: 20px; height: 28px;' }).append($('<td>', { align: 'center' }), $('<td>', { align: 'center' }).append(shiftDownButton), $('<td>', { align: 'center' }))
                )
              )
            ),
            $('<div>', { style: 'border-radius: 5px; width: 100%; padding: 4px; background-color: #d6e6f3; display: inline-block; margin-right: 5px; margin-top: 2px;' }).append(
              $('<div>', { style: 'display: flex; justify-content: flex-end; margin-bottom: 4px;' }).append(
                $('<button>', { class: 'form-control', style: 'height: 24px; width: auto; padding: 2px 6px 0px 6px;' }).text('Reset').click(this.#onResetVisibleAtZoomClick.bind(this))
              ),
              $('<div>').append(
                $('<label>', { for: 'visible-at-zoom-input' }).text('Visible at zoom:'),
                (this.#visibleAtZoomInput = $('<input>', {
                  type: 'number',
                  id: 'visible-at-zoom-input',
                  min: this.#minVisibleAtZoom,
                  max: this.#maxVisibleAtZoom,
                  style: 'margin-left: 4px;',
                }).change((v) => this.#onVisibleAtZoomChange(v)))
              ),
              $('<div>', { style: 'font-size: 13px; color: gray' }).text('Pan or zoom the map to refresh after changing.\n\nSetting this value too low may cause performance issues.')
            )
          )
        )
      );

      this.hide();
      this._dialogDiv.appendTo('body');

      if (typeof jQuery.ui !== 'undefined') {
        const that = this;
        this._dialogDiv.draggable({
          // Gotta nuke the height setting the dragging inserts otherwise the panel cannot dynamically resize
          stop() {
            that._dialogDiv.css('height', '');
          },
        });
      }
    }

    get gisLayer() {
      return this.#gisLayer;
    }

    set gisLayer(value) {
      if (value !== this.#gisLayer) {
        this.#gisLayer = value;
        this.#titleText.text(this.#gisLayer.name);
        this.#initVisibleAtZoomInput();
      }
    }

    #initVisibleAtZoomInput() {
      this.#visibleAtZoomInput.val(getGisLayerVisibleAtZoom(this.#gisLayer));
    }

    // eslint-disable-next-line class-methods-use-this
    getShiftAmount() {
      return $('input[name=gisLayerShiftAmt]:checked').val();
    }

    show() {
      this._dialogDiv.show();
    }

    hide() {
      this._dialogDiv.hide();
    }

    #onResetVisibleAtZoomClick() {
      settings.removeLayerSetting(this.#gisLayer.id, 'visibleAtZoom');
      this.#initVisibleAtZoomInput();
    }

    #onCloseButtonClick() {
      this.hide();
    }

    #onVisibleAtZoomChange() {
      const min = this.#minVisibleAtZoom;
      const max = this.#maxVisibleAtZoom;
      let value = parseInt(this.#visibleAtZoomInput.val(), 10);

      if (value < min) {
        value = min;
        this.#visibleAtZoomInput.val(value);
      } else if (value > max) {
        value = max;
        this.#visibleAtZoomInput.val(value);
      }

      settings.setLayerSetting(this.#gisLayer.id, 'visibleAtZoom', value);
      saveSettingsToStorage();
    }

    #onShiftButtonClick(x, y) {
      const shiftAmount = this.getShiftAmount();
      x *= shiftAmount;
      y *= shiftAmount;
      this.#shiftLayerFeatures(x, y);
      const { id } = this.gisLayer;
      let offset = settings.getLayerSetting(id, 'offset');
      if (!offset) {
        offset = { x: 0, y: 0 };
        settings.setLayerSetting(id, 'offset', offset);
      }
      offset.x += x;
      offset.y += y;
      saveSettingsToStorage();
    }

    #onResetOffsetButtonClick() {
      const offset = settings.getLayerSetting(this.gisLayer.id, 'offset');
      if (offset) {
        this.#shiftLayerFeatures(offset.x * -1, offset.y * -1);
        delete settings.layers[this.gisLayer.id].offset;
        saveSettingsToStorage();
      }
    }

    #shiftLayerFeatures(x, y) {
      // JS55CT Given the inputs have been updated to Degrees, shifting my meeters still make sence and works.
      const { isRoadLayer } = this.gisLayer;
      let featureCollection = isRoadLayer ? roadFeatures : defaultFeatures;
      const { distance, bearing } = LayerSettingsDialog.#calculateDistanceAndBearing(x, y);
      featureCollection = featureCollection.filter((f) => f.properties.layerID === this.gisLayer.id).map((f) => turf.transformTranslate(f, distance, bearing, { units: 'meters' }));
      if (isRoadLayer) {
        roadFeatures = featureCollection;
      } else {
        defaultFeatures = featureCollection;
      }
      const layerName = isRoadLayer ? ROAD_LAYER_NAME : DEFAULT_LAYER_NAME;
      const featureIds = featureCollection.map((f) => f.id);
      sdk.Map.removeFeaturesFromLayer({ layerName, featureIds });
      sdk.Map.addFeaturesToLayer({ layerName, features: featureCollection });
    }

    /**
     * Calculates the total distance and bearing from X and Y meter offsets.
     * @param {number} dx_meters - X offset in meters (east/west).
     * @param {number} dy_meters - Y offset in meters (north/south).
     * @returns {{distance: number, bearing: number}}
     */
    static #calculateDistanceAndBearing(dx_meters, dy_meters) {
      const distance = Math.sqrt(dx_meters ** 2 + dy_meters ** 2);

      // Calculate bearing in radians
      // Math.atan2(y, x) returns angle in radians between -PI and PI
      // Need to adjust to be 0-360 degrees clockwise from North
      const bearing_rad = Math.atan2(dx_meters, dy_meters); // dx_meters is 'x' (east), dy_meters is 'y' (north)

      // Convert to degrees and adjust for 0-360, clockwise from North
      let bearing_deg = bearing_rad * (180 / Math.PI);
      bearing_deg = (bearing_deg + 360) % 360; // Ensure positive and within 0-360 range

      return { distance, bearing: bearing_deg };
    }

    static #createShiftButton(fontAwesomeClass) {
      return $('<button>', {
        class: 'form-control',
        style: 'cursor:pointer;font-size:14px;padding: 3px;border-radius: 5px;width: 21px;height: 21px;',
      }).append($('<i>', { class: 'fa', style: 'vertical-align: super' }).addClass(fontAwesomeClass));
    }
  }

  function loadSettingsFromStorage() {
    const defaultSettings = {
      lastVersion: null,
      visibleLayers: [],
      onlyShowApplicableLayers: false,
      onlyShowApplicableLayersZoom: false,
      selectedSubL1: [],
      enabled: true,
      fillParcels: false,
      oneTimeAlerts: {},
      layers: {},
      shortcuts: {},
      isPopupVisible: false,
      useAcronyms: false,
      useTitleCase: false,
      useStateHwy: false,
      removeNewLines: false,
      collapsedSections: {},
    };

    let loadedSettings = {}; // Initialize as an empty object
    const storedSettings = localStorage.getItem(SETTINGS_STORE_NAME);

    if (storedSettings) {
      try {
        const parsed = JSON.parse(storedSettings);
        if (parsed && typeof parsed === 'object') {
          loadedSettings = parsed;
        } else {
          logDebug(`Stored settings under key "${SETTINGS_STORE_NAME}" were not a valid object.`);
        }
      } catch (e) {
        logError(`Failed to parse settings from localStorage key "${SETTINGS_STORE_NAME}":`, e);
        // loadedSettings remains {}
      }
    }

    // Merge defaultSettings and loadedSettings.
    // If loadedSettings is empty (due to error or no storage), it effectively uses defaults.
    settings = { ...defaultSettings, ...loadedSettings };

    isPopupVisible = settings.isPopupVisible;
    useAcronyms = settings.useAcronyms;
    useTitleCase = settings.useTitleCase;
    useStateHwy = settings.useStateHwy;
    removeNewLines = settings.removeNewLines;

    settings.getLayerSetting = function getLayerSetting(layerID, settingName) {
      const layerSettings = this.layers[layerID];
      if (!layerSettings) {
        return undefined;
      }
      return layerSettings[settingName];
    };
    settings.setLayerSetting = function setLayerSetting(layerID, settingName, value) {
      let layerSettings = this.layers[layerID];
      if (!layerSettings) {
        layerSettings = {};
        this.layers[layerID] = layerSettings;
      }
      layerSettings[settingName] = value;
    };
    settings.removeLayerSetting = function removeLayerSetting(layerID, settingName) {
      const layerSettings = this.layers[layerID];
      if (layerSettings) {
        delete layerSettings[settingName];
      }
    };

    // Handle legacy shortcut keys settings.
    // TODO: Delete this later, after most users have updated.
    if (settings.toggleHnsOnlyShortcut) {
      settings.shortcuts.toggleHnsOnly = settings.toggleHnsOnlyShortcut;
      delete settings.toggleHnsOnlyShortcut;
    }
    if (settings.toggleEnabledShortcut) {
      settings.shortcuts.toggleEnabled = settings.toggleEnabledShortcut;
      delete settings.toggleEnabledShortcut;
    }
  }

  function saveSettingsToStorage() {
    settings.shortcuts = {};
    sdk.Shortcuts.getAllShortcuts().forEach((shortcut) => {
      settings.shortcuts[shortcut.shortcutId] = shortcut.shortcutKeys;
    });
    settings.lastVersion = scriptVersion;
    settings.isPopupVisible = isPopupVisible;
    settings.useAcronyms = useAcronyms;
    settings.useTitleCase = useTitleCase;
    settings.useStateHwy = useStateHwy;
    settings.removeNewLines = removeNewLines;
    localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(settings));
    logDebug('Settings saved');
  }

  function getMaxAllowableOffsetForZoom(zoomLevel) {
    const zoomToOffsetMap = {
      12: 0.0009, // ~100 meters
      13: 0.00045, // ~50 meters
      14: 0.000225, // ~25 meters
      15: 0.0001125, // ~12.0 meters
      16: 0.000056, // ~6.0 meters
      17: 0.000028, // ~3.0 meters
      18: 0.000014, // ~1.5 meters
      19: 0.000007, // ~1.0 meters
      20: 0.000007, // ~1.0 meters
      21: 0.000007, // ~1.0 meters
      22: 0.000007, // ~1.0 meters
    };
    // Return the offset corresponding to the provided zoom level, or default to highest detail if not found
    return zoomToOffsetMap[zoomLevel] || zoomToOffsetMap[22];
  }

  function getUrl(extent, gisLayer, zoom) {
    const layerOffset = settings.getLayerSetting(gisLayer.id, 'offset') ?? { x: 0, y: 0 };
    const geometry = {
      xmin: extent[0] - layerOffset.x,
      ymin: extent[1] - layerOffset.y,
      xmax: extent[2] - layerOffset.x,
      ymax: extent[3] - layerOffset.y,
      spatialReference: {
        wkid: 4326,
      },
    };

    const maxAllowableOffset = getMaxAllowableOffsetForZoom(zoom);
    const geometryStr = JSON.stringify(geometry);

    let fields = gisLayer.labelFields;
    if (gisLayer.labelHeaderFields) {
      fields = fields.concat(gisLayer.labelHeaderFields);
    }
    if (gisLayer.distinctFields) {
      fields = fields.concat(gisLayer.distinctFields);
    }
    let url = `${gisLayer.url}/query?geometry=${encodeURIComponent(geometryStr)}`;
    url += gisLayer.token ? `&token=${gisLayer.token}` : '';
    url += `&outFields=${encodeURIComponent(fields.join(','))}`;
    url += '&returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometryType=esriGeometryEnvelope';
    url += `&inSR=${'4326'}`;
    url += '&outSR=4326&f=json';
    url += `&maxAllowableOffset=${maxAllowableOffset}`;
    url += gisLayer.where ? `&where=${encodeURIComponent(gisLayer.where)}` : '';

    logDebug(`Request URL: ${url}`);
    return url;
  }

  function hashString(value) {
    let hash = 0;
    if (value.length === 0) return hash;
    for (let i = 0; i < value.length; i++) {
      const chr = value.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      hash = (hash << 5) - hash + chr;
      // eslint-disable-next-line no-bitwise
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  /**
   * The function `getMapExtent` retrieves the map extent coordinates in the WGS84 projection.
   *
   * @param [projection='wgs84'] - The `projection` parameter allows you to specify the name for the WGS84
   * projection you wish to use when obtaining the map extent. Acceptable values include 'wgs84',
   * 'CRS84', '4326', and 'EPSG:4326'.
   *
   * @returns {Array} An array containing the WGS84 projection coordinates representing the map extent,
   * structured as [leftBottomLongitude, leftBottomLatitude, rightTopLongitude, rightTopLatitude].
   *
   * @throws Will throw an error if an unsupported projection type is specified.
   */
  function getMapExtent(projection = 'wgs84') {
    const wgs84Extent = sdk.Map.getMapExtent(); // Assume this provides WGS84 coordinates

    const wgs84Projections = ['wgs84', 'CRS84', '4326', 'EPSG:4326'];

    if (wgs84Projections.includes(projection.toLowerCase())) {
      return [wgs84Extent[0], wgs84Extent[1], wgs84Extent[2], wgs84Extent[3]];
    } else {
      throw new Error('Unsupported projection type');
    }
  }

  function getGisLayerVisibleAtZoom(gisLayer) {
    // Fetch override settings
    const overrideVisibleAtZoom = settings.getLayerSetting(gisLayer.id, 'visibleAtZoom');
    if (overrideVisibleAtZoom) {
      return overrideVisibleAtZoom;
    }
    // Check if the layer has its own 'visibleAtZoom'
    if (gisLayer.hasOwnProperty('visibleAtZoom')) {
      return gisLayer.visibleAtZoom;
    }
    return DEFAULT_VISIBLE_AT_ZOOM;
  }

  function getGisLayerLabelsVisibleAtZoom(gisLayer, layerVisibleAtZoom) {
    let labelsVisibleAtZoom;
    layerVisibleAtZoom = +layerVisibleAtZoom;
    if (gisLayer.hasOwnProperty('labelsVisibleAtZoom')) {
      labelsVisibleAtZoom = layerVisibleAtZoom + (+gisLayer.labelsVisibleAtZoom - (+gisLayer.visibleAtZoom ?? DEFAULT_VISIBLE_AT_ZOOM));
    } else {
      labelsVisibleAtZoom = layerVisibleAtZoom + 1;
    }
    if (labelsVisibleAtZoom < 1) labelsVisibleAtZoom = 1;
    return labelsVisibleAtZoom;
  }

  /**
   * Asynchronously determines which geographical regions are visible within the current map viewport.
   *
   * This function retrieves the current map extent in the WGS84 coordinate system and uses it to form a bounding box.
   * It then calls the `whatsInView` method from the `WmeGisLBBOX` module to identify intersecting geographical regions
   * within this bounding box. The analysis includes a high precision intersection check, although GeoJSON data is not returned.
   *
   * Process Overview:
   * 1. Obtains the current map extent using the `getMapExtent` function, specifying the "wgs84" coordinate system.
   * 2. Converts map extent into a viewport bounding box with properties `minLon`, `minLat`, `maxLon`, and `maxLat`.
   * 3. Configures `highPrecision` intersection checks to ensure detailed overlap evaluations.
   * 4. Invokes `WmeGisLBBOX.whatsInView`, passing in the viewport bounding box, precision flag, and setting
   *    the returnGeoJson flag to false.
   * 5. Stores the retrieved intersecting regions data in the `_whatsInView` variable.
   *
   * Features:
   * - Handles asynchronous operations to ensure responsive interaction and processing.
   * - Employs high precision checks for accurate geographical intersection analysis.
   *
   * @returns {Promise<void>} - No explicit return; results are indirectly stored in `_whatsInView`.
   */
  async function whatsInView() {
    const extentWgs84 = getMapExtent('wgs84');
    const highPrecision = true;
    const viewportBbox = {
      minLon: extentWgs84[0],
      minLat: extentWgs84[1],
      maxLon: extentWgs84[2],
      maxLat: extentWgs84[3],
    };

    _whatsInView = await WmeGisLBBOX.whatsInView(viewportBbox, highPrecision, false);
  }

  /**
   * Function to determine which GIS layers are fetchable based on multiple conditions.
   *
   * @param {boolean} checkVisibility - Indicates whether to apply visibility checks based on settings.
   * @returns {Array} filteredLayers - An array of GIS layers that have passed all fetchable checks.
   *
   * The function performs the following checks:
   * - Ensure the map is sufficiently zoomed by checking the zoom level from the SDK's map object. Return an empty array if the zoom is below 12.
   * - Filter through the global GIS layers array (_gisLayers) and:
   *   1. Check if the layer is enabled.
   *   2. Validate that the layer has a non-empty and defined URL.
   *   3. Confirm the country subdivision level 1 for the layer is selected in settings.
   *   4. If checkVisibility is true, verify if the layer ID is included in the array of visible layers from settings.
   *   5. Ensure the layer is visible based on its specified zoom level.
   *   6. Find and validate existence of corresponding country data within the current map view (_whatsInView), identified via ISO_ALPHA3 codes.
   *   7. Confirm the subdivision level 1 ID or country alpha code matches with the viewed country data (_whatsInView).
   *   8. If the layer has subdivision level 2 names, further check if subdivision level 2 names are in view as per the stored country subdivision hierarchy (_whatsInView).
   *
   * Valid layers passing all checks are added to the fetchableLayers array and the filtered collection is returned.
   */
  function getFetchableLayers(checkVisibility = true, checkZoomVisibility = true) {
    const zoom = sdk.Map.getZoomLevel();
    // If zoom level is below 12, log a message and return an empty array, as layers won't be fetched
    if (zoom < 12) {
      logDebug(`No layers fetched, zoom level is < 12!`);
      return [];
    }
    const fetchableLayers = []; // Array to hold fetchable layer IDs
    // Filter the GIS layers based on multiple conditions to determine which are fetchable
    const filteredLayers = _gisLayers.filter((gisLayer) => {
      if (gisLayer.enabled !== '1') return false; // Check if the layer is enabled; skip it if not

      // Ensure the layer has a valid URL; skip if it is empty or undefined
      if (!gisLayer.url || gisLayer.url.trim().length === 0) return false;

      // Check if the country subdivision level 1 is selected
      if (!settings.selectedSubL1.includes(gisLayer.countrySubL1)) return false;

      // Check if the layer ID is saved in settings as visible  - turn off when call from "Only show applicable layers"
      if (checkVisibility) {
        if (!settings.visibleLayers.includes(gisLayer.id)) return false;
      }

      if (checkZoomVisibility) {
        if (zoom < getGisLayerVisibleAtZoom(gisLayer)) return false; // Check if the layer is visible at the current zoom level
      }

      // Find the country data from the current view based on the ISO_ALPHA3 code
      const countryData = Object.values(_whatsInView).find((countryData) => countryData.ISO_ALPHA3 === gisLayer.country);

      if (!countryData) return false; // Skip if no matching country data is in view

      // Check if the subdivision level 1 (subL1) is in view
      const isSubL1InView = (gisLayer.subL1 && Object.values(countryData.subL1 || {}).some((subL1Data) => subL1Data.subL1_id === gisLayer.subL1)) || countryData.ISO_ALPHA3 === gisLayer.subL1;

      if (!isSubL1InView) return false; // If subL1 is not in view, skip the layer

      const hasSubL2 = gisLayer.subL2 && gisLayer.subL2.length > 0; // Check if the layer has subdivision level 2 names
      if (hasSubL2) {
        // Find the subdivision data entry that matches the layer's subL1 ID
        const subL1DataEntry = Object.entries(countryData.subL1 || {}).find(([_, subL1Details]) => subL1Details.subL1_id === gisLayer.subL1);
        const subL1Data = subL1DataEntry && subL1DataEntry[1]; // Retrieve the actual subL1 data object
        if (!subL1Data) {
          // If no matching subL1 data is found, skip the layer
          return false;
        }
        // Check if any subL2 names from the layer match those in the subL1 data's subL2 list
        const isSubL2InView = gisLayer.subL2.some((subL2Name) => subL1Data.subL2 && Object.keys(subL1Data.subL2).some((subL2InView) => subL2InView.toLowerCase() === subL2Name.toLowerCase()));
        if (!isSubL2InView) return false; // If no subL2 matches are found, skip the layer
      }

      fetchableLayers.push(gisLayer.id); // If the layer passes all checks, add its ID to the fetchable layers list
      return true;
    });
    return filteredLayers;
  }

  /**
   * Function to manage the visibility of GIS layer checkboxes based on user-defined settings.
   *
   * Utilizes the getFetchableLayers function to determine applicable layers, considering zoom levels specified by settings.onlyShowApplicableLayersZoom.
   *
   * The function:
   * - Fetches layers using getFetchableLayers with settings.onlyShowApplicableLayersZoom to determine which layers are relevant at the current zoom level.
   * - Iterates over each GIS layer, controlling the display of checkboxes associated with the layers using a computed visibility logic:
   *   1. Layers are shown if they are deemed applicable by the zoom setting (found in applicableLayers).
   *   2. All layers are displayed when settings.onlyShowApplicableLayers is turned off, overriding other filters.
   *   3. Layers are hidden if neither condition applies.
   *
   * This setup allows for independent as well as combined operation of the zoom and visibility settings.
   */
  function filterLayerCheckboxes() {
    const applicableLayers = getFetchableLayers(false, settings.onlyShowApplicableLayersZoom);
    _gisLayers.forEach((gisLayer) => {
      const layerContainerId = `#gis-layer-${gisLayer.id}-container`;
      // Default behavior is to hide all layers
      let showLayer = false;
      // Show layer if it's included in applicable layers based on the zoom setting
      if (applicableLayers.includes(gisLayer)) {
        showLayer = true;
      }
      // Show all layers if onlyShowApplicableLayers setting is false
      if (!settings.onlyShowApplicableLayers) {
        showLayer = true;
      }
      // Apply visibility based on computed showLayer logic
      if (showLayer) {
        $(layerContainerId).show();
        $(`#gis-layers-for-${gisLayer.subL1}`).show();
      } else {
        $(layerContainerId).hide();
        $(`#gis-layers-for-${gisLayer.subL1}`).hide();
      }
    });
  }

  const ROAD_ABBR = [
    [/\bAVENUE$/, 'AVE'],
    [/\bCIRCLE$/, 'CIR'],
    [/\bCOURT$/, 'CT'],
    [/\bDRIVE$/, 'DR'],
    [/\bLANE$/, 'LN'],
    [/\bPARK$/, 'PK'],
    [/\bPLACE$/, 'PL'],
    [/\bROAD$/, 'RD'],
    [/\bSTREET$/, 'ST'],
    [/\bTERRACE$/, 'TER'],
  ];

  const labelProcessingGlobalVariables = {
    Number,
    Math,
    Boolean,
    parseInt,
    Date,
    _regexReplace: {
      // Strip leading zeros or blank full label for any label starting with a non-digit or
      // is a Zero Address, use with '' as replace.
      r0: /^(0+(\s.*)?|\D.*)/,
      // Strip Everything After Street Type to end of the string by use $1 and $2 capture
      // groups, use with replace '$1$2'
      // eslint-disable-next-line max-len
      r1: /^(.* )(Ave(nue)?|Dr(ive)?|St(reet)?|C(our)?t|Cir(cle)?|Blvd|Boulevard|Pl(ace)?|Ln|Lane|Fwy|Freeway|R(oa)?d|Ter(r|race)?|Tr(ai)?l|Way|Rte \d+|Route \d+)\b.*/gi,
      // Strip SPACE 5 Digits from end of string, use with replace ''
      r2: /\s\d{5}$/,
      // Strip Everything after a "~", ",", ";" to the end of the string, use with replace ''
      r3: /(~|,|;|\s?\r\n).*$/,
      // Move the digits after the last space to before the rest of the string using, use with
      // replace '$2 $1'
      r4: /^(.*)\s(\d+).*/,
      // Insert newline between digits (including "-") and everything after the digits,
      // except(and before) a ",", use with replace '$1\n$2'
      r5: /^([-\d]+)\s+([^,]+).*/,
      // Insert newline between digits and everything after the digits, use with
      // replace '$1\n$2'
      r6: /^(\d+)\s+(.*)/,
    },
  };

  function processLabel(gisLayer, item, displayLabelsAtZoom, area, isPolyLine = false) {
    let label = '';
    if (gisLayer.labelHeaderFields) {
      label = `${gisLayer.labelHeaderFields
        .map((fieldName) => item.attributes[fieldName])
        .join(' ')
        .trim()}\n`;
    }
    if (sdk.Map.getZoomLevel() >= displayLabelsAtZoom || area >= 1000000) {
      // Raised this 1 million sq meeters
      label += gisLayer.labelFields
        .map((fieldName) => item.attributes[fieldName])
        .join(' ')
        .trim();
      if (gisLayer.processLabel) {
        if (gisLayer.labelProcessingError) {
          label = 'ERROR';
        } else {
          labelProcessingGlobalVariables.label = label;
          labelProcessingGlobalVariables.fieldValues = item.attributes;
          const result = ESTreeProcessor.execute(gisLayer.processLabel, labelProcessingGlobalVariables);
          label = result.output?.trim() ?? '';
        }
      }
    }

    if (!isPolyLine) {
      if (label && ['points', 'parcels', 'state_points', 'state_parcels'].includes(gisLayer.style)) {
        if (settings.addrLabelDisplay === 'hn') {
          const m = label.match(/^\d+/);
          label = m ? m[0] : '';
        } else if (settings.addrLabelDisplay === 'street') {
          const m = label.match(/^(?:\d+\s)?(.*)/);
          label = m ? m[1].trim() : '';
        } else if (settings.addrLabelDisplay === 'none') {
          label = '';
        }
      }
    }
    return label;
  }

  let lastFeatureId = 0;
  function generateFeatureId() {
    lastFeatureId++;
    return lastFeatureId;
  }

  // SDK: Remove these once Map.getFeaturesByProperty is implemented: https://issuetracker.google.com/issues/419596843
  let defaultFeatures = [];
  let roadFeatures = [];

  function processFeatures(data, token, gisLayer) {
    const features = [];

    if (data.skipIt) {
      // do nothing
    } else if (data.error) {
      logError(`Error in layer "${gisLayer.name}": ${data.error.message}`);
      $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
    } else {
      const items = data.features || [];
      if (!token.cancel) {
        let error = false;
        const distinctValues = [];
        items.forEach((item) => {
          const featuresToAdd = [];
          let skipIt = false;
          if (!token.cancel && !error) {
            const layerOffset = settings.getLayerSetting(gisLayer.id, 'offset') ?? { x: 0, y: 0 };

            if (gisLayer.distinctFields) {
              if (distinctValues.some((v) => gisLayer.distinctFields.every((fld) => v[fld] === item.attributes[fld]))) {
                skipIt = true;
              } else {
                const dist = {};
                gisLayer.distinctFields.forEach((fld) => (dist[fld] = item.attributes[fld]));
                distinctValues.push(dist);
              }
            }
            if (!skipIt) {
              let area = 0; // Default area is 0 for non-polygon features
              const displayLabelsAtZoom = getGisLayerLabelsVisibleAtZoom(gisLayer, getGisLayerVisibleAtZoom(gisLayer));
              if (item.geometry) {
                if (item.geometry.x) {
                  const feature = turf.point([item.geometry.x + layerOffset.x, item.geometry.y + layerOffset.y]);
                  const label = processLabel(gisLayer, item, displayLabelsAtZoom, '', false);

                  feature.properties = {
                    layerID: gisLayer.id,
                    label,
                  };
                  feature.id = generateFeatureId();
                  features.push(feature);

                  if (isPopupVisible) {
                    addLabelToLayer(gisLayer.name, label);
                  }
                } else if (item.geometry.points) {
                  const points = item.geometry.points.map((point) => turf.point([point[0] + layerOffset.x, point[1] + layerOffset.y]));
                  featuresToAdd.push(...points);

                  points.forEach((pointFeature) => {
                    const label = processLabel(gisLayer, item, displayLabelsAtZoom, '', false);
                    pointFeature.properties = {
                      layerID: gisLayer.id,
                      label,
                    };
                    pointFeature.id = generateFeatureId();
                    features.push(pointFeature);

                    if (isPopupVisible) {
                      addLabelToLayer(gisLayer.name, label);
                    }
                  });
                } else if (item.geometry.rings) {
                  const separatePolygons = [];
                  let currentOuterRing = null;
                  const innerRings = [];

                  item.geometry.rings.forEach((ringIn) => {
                    const ring = ringIn.map((point) => [point[0] + layerOffset.x, point[1] + layerOffset.y]);

                    if (turf.booleanClockwise(ring)) {
                      // Store previous polygon
                      if (currentOuterRing) {
                        separatePolygons.push({
                          outer: currentOuterRing,
                          inners: [...innerRings],
                        });
                      }
                      // Begin new outer ring and reset inner rings
                      currentOuterRing = ring;
                      innerRings.length = 0;
                    } else {
                      // It's an inner ring, push to current inner rings list
                      innerRings.push(ring);
                    }
                  });

                  // Add final polygon (if any)
                  if (currentOuterRing) {
                    separatePolygons.push({
                      outer: currentOuterRing,
                      inners: [...innerRings],
                    });
                  }

                  // Create features for each polygon group
                  separatePolygons.forEach(({ outer, inners }) => {
                    const polygonRings = [outer, ...inners];
                    const tempPolygon = turf.polygon(polygonRings);
                    const ringArea = turf.area(tempPolygon);
                    const label = processLabel(gisLayer, item, displayLabelsAtZoom, ringArea, false);

                    tempPolygon.properties = {
                      layerID: gisLayer.id,
                      label,
                    };
                    tempPolygon.id = generateFeatureId();

                    if (isPopupVisible) {
                      addLabelToLayer(gisLayer.name, label);
                    }
                    features.push(tempPolygon);
                  });
                } else if (data.geometryType === 'esriGeometryPolyline') {
                  const mls = turf.multiLineString(item.geometry.paths);
                  const e = getMapExtent('wgs84');
                  const bbox = [e[0], e[1], e[2], e[3]];
                  const clipped = turf.bboxClip(mls, bbox);

                  if (clipped.geometry.type === 'LineString') {
                    item.geometry.paths = [clipped.geometry.coordinates];
                  } else if (clipped.geometry.type === 'MultiLineString') {
                    item.geometry.paths = clipped.geometry.coordinates;
                  }

                  item.geometry.paths.forEach((path) => {
                    const pointList = path.map((point) => [point[0] + layerOffset.x, point[1] + layerOffset.y]);
                    const feature = turf.lineString(pointList);
                    feature.skipDupeCheck = true;
                    featuresToAdd.push(feature);
                    const label = processLabel(gisLayer, item, displayLabelsAtZoom, '', true);

                    feature.properties = {
                      layerID: gisLayer.id,
                      label,
                    };
                    feature.id = generateFeatureId();

                    if (isPopupVisible) {
                      addLabelToLayer(gisLayer.name, label);
                    }
                    features.push(feature);
                  });
                } else {
                  logDebug(`Unexpected feature type in layer: ${JSON.stringify(item)}`);
                  logError(`Error: Unexpected feature type in layer "${gisLayer.name}"`);
                  $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
                  error = true;
                }
              }
            }
          }
        });
      }
    }
    if (!token.cancel) {
      // Check for duplicate geometries.
      for (let i = 0; i < features.length; i++) {
        const f1 = features[i];
        if (f1.geometry.type === 'Point' && !f1.skipDupeCheck && f1.properties.label) {
          let labels = [f1.properties.label];
          for (let j = i + 1; j < features.length; j++) {
            const f2 = features[j];
            if (f2.geometry.type === 'Point' && !f2.skipDupeCheck && f2.properties.label && turf.distance(f1, f2, { units: 'meters' }) < 1) {
              features.splice(j, 1);
              labels.push(f2.properties.label);
              j--;
            }
          }
          labels = _.uniq(labels);
          if (labels.length > 1) {
            labels.forEach((label, idx) => {
              label = label
                .replace(/\n/g, ' ')
                .replace(/\s{2,}/, ' ')
                .replace(/\bUNIT\s.{1,5}$/i, '')
                .trim();
              ROAD_ABBR.forEach((abbr) => (label = label.replace(abbr[0], abbr[1])));
              labels[idx] = label;
            });
            labels = _.uniq(labels);
            labels.sort();
            if (labels.length > 12) {
              const len = labels.length;
              labels = labels.slice(0, 10);
              labels.push(`(${len - 10} more...)`);
            }
            f1.properties.label = _.uniq(labels).join('\n');
          } else {
            let { label } = f1.properties;
            ROAD_ABBR.forEach((abbr) => (label = label.replace(abbr[0], abbr[1])));
            f1.properties.label = label;
          }
        }
      }

      // Determine layer and source collection
      const isRoad = gisLayer.isRoadLayer;
      const layerName = isRoad ? ROAD_LAYER_NAME : DEFAULT_LAYER_NAME;
      const sourceCollection = isRoad ? roadFeatures : defaultFeatures;

      // Process the collection in one go
      const { featureIdsToRemove, remainingFeatures } = sourceCollection.reduce(
        (acc, feature) => {
          if (feature.properties.layerID === gisLayer.id) {
            acc.featureIdsToRemove.push(feature.id); // Collect IDs to remove
          } else {
            acc.remainingFeatures.push(feature); // Collect features to keep
          }
          return acc;
        },
        { featureIdsToRemove: [], remainingFeatures: [] }
      );

      // Initialize counters for individual feature addition
      let successCount = features.length;

      // Track the total processing time for the layer
      const layerStartTime = performance.now();

      sdk.Map.dangerouslyAddFeaturesToLayerWithoutValidation({ features, layerName });

      // Handle completion logging
      // Calculate and log the total processing time for the layer
      const layerEndTime = performance.now();
      const totalLayerDuration = layerEndTime - layerStartTime;
      logDebug(`layer: ${gisLayer.id} processed in ${totalLayerDuration.toFixed(2)} ms - ${successCount} features added`);

      // Remove features from the map (only if there are any)
      if (featureIdsToRemove.length > 0) {
        sdk.Map.removeFeaturesFromLayer({ layerName, featureIds: featureIdsToRemove });
      }

      // Create the new collection (kept + new)
      const newCollection = [...remainingFeatures, ...features];

      // Update the original reference (if needed, or handle based on your scope)
      if (isRoad) {
        roadFeatures = newCollection;
      } else {
        defaultFeatures = newCollection;
      }

      if (features.length) {
        $(`label[for="gis-layer-${gisLayer.id}"]`).css({ color: '#00a009' });
      }
    }
  } // END processFeatures()

  function copyTextToClipboard(text) {
    try {
      GM_setClipboard(text);
      logDebug(`Copy Text To Clipboard: ${text}`);
    } catch (err) {
      logError(`Failed to Text To Clipboard: ${err}`);
    }
  }

  function addLabelToLayer(layerName, label) {
    if (!layerLabels[layerName]) {
      layerLabels[layerName] = new Set();
    }
    layerLabels[layerName].add(label);
  }

  function replacePhrasesWithAcronyms(text) {
    // Order phrases such that compound phrases come before individual words
    const replacements = [
      // compound phrases here
      { phrase: 'Alternate Route', acronym: 'ALT' },
      { phrase: 'Army Air Field', acronym: 'AAF' },
      { phrase: 'County Highway', acronym: 'CH-' },
      { phrase: 'County Road', acronym: 'CR-' },
      { phrase: 'East Bound', acronym: 'EB' },
      { phrase: 'North Bound', acronym: 'NB' },
      { phrase: 'North East', acronym: 'NE' },
      { phrase: 'North West', acronym: 'NW' },
      { phrase: 'South Bound', acronym: 'SB' },
      { phrase: 'South East', acronym: 'SE' },
      { phrase: 'South West', acronym: 'SW' },
      { phrase: 'State Highway', acronym: 'SH-' },
      { phrase: 'State Route', acronym: 'SR-' },
      { phrase: 'State Rte', acronym: 'SR-' },
      { phrase: 'U.S. Highway', acronym: 'US-' },
      { phrase: 'U.S. Route', acronym: 'US-' },
      { phrase: 'U.S. Rte', acronym: 'US-' },
      { phrase: 'U.S.Rte', acronym: 'US-' },
      { phrase: 'US Highway', acronym: 'US-' },
      { phrase: 'U S Highway', acronym: 'US-' },
      { phrase: 'US Route', acronym: 'US-' },
      { phrase: 'U S Route', acronym: 'US-' },
      { phrase: 'US RTE', acronym: 'US-' },
      { phrase: 'U S RTE', acronym: 'US-' },
      { phrase: 'USRTE', acronym: 'US-' },
      { phrase: 'West Bound', acronym: 'WB' },
      // Start of single words list
      { phrase: 'Alley', acronym: 'Aly' },
      { phrase: 'Apartments', acronym: 'Apts' },
      { phrase: 'Avenue', acronym: 'Ave' },
      { phrase: 'Beach', acronym: 'Bch' },
      { phrase: 'Boulevard', acronym: 'Blvd' },
      { phrase: 'Bridge', acronym: 'Br' },
      { phrase: 'Business', acronym: 'BUS' },
      { phrase: 'Bypass', acronym: 'BYP' },
      { phrase: 'Canyon', acronym: 'Cyn' },
      { phrase: 'Captain', acronym: 'Capt' },
      { phrase: 'Causeway', acronym: 'Cswy' },
      { phrase: 'Center', acronym: 'Ctr' },
      { phrase: 'Circle', acronym: 'Cir' },
      { phrase: 'Colonel', acronym: 'Col.' },
      { phrase: 'Commander', acronym: 'Cmdr.' },
      { phrase: 'Connector', acronym: 'CONN' },
      { phrase: 'Corners', acronym: 'Cors' },
      { phrase: 'Corporal', acronym: 'Cpl.' },
      { phrase: 'Court', acronym: 'Ct' },
      { phrase: 'Cove', acronym: 'Cv' },
      { phrase: 'Creek', acronym: 'Crk' },
      { phrase: 'Crescent', acronym: 'Cres' },
      { phrase: 'Crossing', acronym: 'X-ing' },
      { phrase: 'Doctor', acronym: 'Dr.' },
      { phrase: 'Drive', acronym: 'Dr' },
      { phrase: 'East', acronym: 'E' },
      { phrase: 'Eastbound', acronym: 'EB' },
      { phrase: 'Eb', acronym: 'EB' },
      { phrase: 'Express', acronym: 'EXP' },
      { phrase: 'Expressway', acronym: 'Expwy' },
      { phrase: 'Extension', acronym: 'Ext' },
      { phrase: 'Fort', acronym: 'Ft.' },
      { phrase: 'Freeway', acronym: 'Fwy' },
      { phrase: 'General', acronym: 'Gen.' },
      { phrase: 'Governor', acronym: 'Gov.' },
      { phrase: 'Grove', acronym: 'Grv' },
      { phrase: 'Heights', acronym: 'Hts' },
      { phrase: 'Highway', acronym: 'Hwy' },
      { phrase: 'Honerable', acronym: 'Hon.' },
      { phrase: 'International', acronym: 'Intl' },
      { phrase: 'Interstate', acronym: 'I-' },
      { phrase: 'Junior', acronym: 'Jr.' },
      { phrase: 'Landing', acronym: 'Lndg' },
      { phrase: 'Lane', acronym: 'Ln' },
      { phrase: 'Lieutenant', acronym: 'Lt.' },
      { phrase: 'Loop', acronym: 'Lp' },
      { phrase: 'Major', acronym: 'Maj.' },
      { phrase: 'Manor', acronym: 'Mnr.' },
      { phrase: 'Meadow', acronym: 'Mdw' },
      { phrase: 'Mount', acronym: 'Mt' },
      { phrase: 'Mountain', acronym: 'Mtn' },
      { phrase: 'Mountains', acronym: 'Mtns' },
      { phrase: 'National', acronym: "Nat'l" },
      { phrase: 'North', acronym: 'N' },
      { phrase: 'Northbound', acronym: 'NB' },
      { phrase: 'Nb', acronym: 'NB' },
      { phrase: 'Northeast', acronym: 'NE' },
      { phrase: 'Northwest', acronym: 'NW' },
      { phrase: 'Park', acronym: 'Pk' },
      { phrase: 'Parkway', acronym: 'Pkwy' },
      { phrase: 'Parkways', acronym: 'Pkwys' },
      { phrase: 'Passage', acronym: 'Psge' },
      { phrase: 'Place', acronym: 'Pl' },
      { phrase: 'Plaza', acronym: 'Plz' },
      { phrase: 'Point', acronym: 'Pt' },
      { phrase: 'Points', acronym: 'Pts' },
      { phrase: 'President', acronym: 'Pres.' },
      { phrase: 'Professor', acronym: 'Prof.' },
      { phrase: 'Railroad', acronym: 'R.R.' },
      { phrase: 'Road', acronym: 'Rd' },
      { phrase: 'Recreational', acronym: 'Rec.' },
      { phrase: 'Reverend', acronym: 'Rev.' },
      { phrase: 'Route', acronym: 'SR-' },
      { phrase: 'Saint', acronym: 'St.' },
      { phrase: 'Sainte', acronym: 'Ste.' },
      { phrase: 'Senior', acronym: 'Sr.' },
      { phrase: 'Sergeant', acronym: 'Sgt.' },
      { phrase: 'Skyway', acronym: 'Skwy' },
      { phrase: 'South', acronym: 'S' },
      { phrase: 'Southbound', acronym: 'SB' },
      { phrase: 'Sb', acronym: 'SB' },
      { phrase: 'Southeast', acronym: 'SE' },
      { phrase: 'Southwest', acronym: 'SW' },
      { phrase: 'Springs', acronym: 'Spgs' },
      { phrase: 'Square', acronym: 'Sq' },
      { phrase: 'Station', acronym: 'Sta' },
      { phrase: 'Street', acronym: 'St' },
      { phrase: 'Terrace', acronym: 'Ter' },
      { phrase: 'Throughway', acronym: 'Thwy' },
      { phrase: 'Thruway', acronym: 'Thwy' },
      { phrase: 'Tollway', acronym: 'Tlwy' },
      { phrase: 'Township', acronym: 'Twp' },
      { phrase: 'Trafficway', acronym: 'Trfy' },
      { phrase: 'Trail', acronym: 'Trl' },
      { phrase: 'Tunnel', acronym: 'Tun' },
      { phrase: 'Turnpike', acronym: 'Tpk' },
      { phrase: 'Upper', acronym: 'Upr' },
      { phrase: 'U.S.', acronym: 'US' },
      { phrase: 'Valley', acronym: 'Vly' },
      { phrase: 'West', acronym: 'W' },
      { phrase: 'Westbound', acronym: 'WB' },
      { phrase: 'Wb', acronym: 'WB' },
      { phrase: '--', acronym: '-' },
      { phrase: ' -', acronym: '-' },
      { phrase: '- ', acronym: '-' },
      { phrase: '- -', acronym: '-' },
    ];

    let updatedText = text;

    // Replace phrases with their acronyms, case insensitive
    replacements.forEach(({ phrase, acronym }) => {
      const regex = new RegExp(`\\b${phrase}\\b`, 'gi'); // Uses \\b to match words with word boundaries
      updatedText = updatedText.replace(regex, acronym);
    });

    return updatedText;
  }

  function fixSateHwyRoadNames(text) {
    // Regular expression to capture patterns like "XXX ###", "XXX-###", "XXX###", as well as "Us Route #", "Us Rte #", and "Route #", "Rte #"
    const regex = /(?:([A-Z]{1,3})[-\s]?(\d{1,3})|(?:Us\s+(?:Rte|Route)\s+(\d{1,3}))|(?:Rte[-\s]?(\d{1,3})|Route\s+(\d{1,3})))\b/gi;

    // Replacement function formats matched patterns
    return text.replace(regex, (match, letters, numbers, usRouteNumber, rteNumber, routeNumber) => {
      if (usRouteNumber) {
        return `US-${usRouteNumber}`; // for "US Route"/s
      }
      if (rteNumber || routeNumber) {
        return `SR-${rteNumber || routeNumber}`; // Change "Rte" or "Route" to "SR"
      }
      if (letters && numbers) {
        return `${letters.toUpperCase()}-${numbers}`; // General format for other letter-number combos
      }
      return match;
    });
  }

  function titleCaseLabel(text) {
    // Read each line separately
    const lines = text.split('\n');
    return lines
      .map((line) => {
        const trimmedLine = line.trim(); // Trim the line to remove leading/trailing spaces
        const words = trimmedLine.split(' '); // Split the line into individual words
        // Capitalize the first letter of each word and convert the rest to lowercase
        const titleCasedLine = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '); // Recombine the words into a title-cased line
        return titleCasedLine; // Return the formatted line
      })
      .join('\n'); // Combine all the lines back into a single string separated by new lines
  }

  function processedLabel(label) {
    if (useTitleCase) {
      label = titleCaseLabel(label);
    }
    if (useAcronyms) {
      label = replacePhrasesWithAcronyms(label);
    }
    if (useStateHwy) {
      label = fixSateHwyRoadNames(label);
    }
    if (removeNewLines) {
      label = label.replace(/[\r\n]+/g, ' ');
    }
    return label;
  }

  function updatePopup(labels) {
    let popup = document.getElementById('layerLabelPopup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'layerLabelPopup';
      popup.style = `position: absolute; background: #d3d3d3; border: 2px solid #007bff; border-radius: 5px; 
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); z-index: 1000; width: 500px; max-width: 800px;
                height: 300px; resize: both; overflow: hidden; max-height: 700px; left: ${popupPosition.left}; top: ${popupPosition.top}; `; 
      const header = document.createElement('div');
      header.style = 'background: #007bff; color: #fff; padding: 5px; cursor: move; border-radius: 3px 3px 0 0; display: flex; justify-content: space-between; align-items: center; height: 30px; ';

      const title = document.createElement('span');
      title.innerText = 'GIS-L Layer Labels';
      header.appendChild(title);

      const closeButton = document.createElement('span');
      closeButton.innerText = '×';
      closeButton.style = 'cursor: pointer; font-size: 20px; margin-left: 10px; ';
      closeButton.addEventListener('click', () => {
        isPopupVisible = false;
        togglePopupVisibility();
        $('input[name="popupVisibility"][value="show"]').prop('checked', isPopupVisible);
        $('input[name="popupVisibility"][value="hide"]').prop('checked', !isPopupVisible);
        saveSettingsToStorage();
      });
      header.appendChild(closeButton);
      popup.appendChild(header);

      const formatOptionContainer = document.createElement('div');
      formatOptionContainer.style = 'background: #72767d; color: #fff;';
      
      const firstRow = document.createElement('div');
      firstRow.style = 'display: flex; gap: 10px; align-items: flex-start; justify-content: flex-start;';

      const formatCheckbox = document.createElement('input');
      formatCheckbox.type = 'checkbox';
      formatCheckbox.id = 'useTitleCaseCheckbox';
      formatCheckbox.style = 'margin-left: 10px';
      formatCheckbox.checked = useTitleCase;
      formatCheckbox.addEventListener('change', () => {
        useTitleCase = formatCheckbox.checked;
        updatePopupContent(labels);
        saveSettingsToStorage();
      });
      firstRow.appendChild(formatCheckbox);

      const formatCheckboxLabel = document.createElement('label');
      formatCheckboxLabel.htmlFor = 'useTitleCaseCheckbox';
      formatCheckboxLabel.innerText = 'Use Title Case';
      formatCheckboxLabel.style = 'font-weight: 100; width: 150px;';
      firstRow.appendChild(formatCheckboxLabel);

      const acronymCheckbox = document.createElement('input');
      acronymCheckbox.type = 'checkbox';
      acronymCheckbox.id = 'useacronymsCheckbox';
      acronymCheckbox.checked = useAcronyms;
      acronymCheckbox.addEventListener('change', () => {
        useAcronyms = acronymCheckbox.checked;
        updatePopupContent(labels);
        saveSettingsToStorage();
      });
      firstRow.appendChild(acronymCheckbox);

      const acronymCheckboxLabel = document.createElement('label');
      acronymCheckboxLabel.htmlFor = 'useacronymsCheckbox';
      acronymCheckboxLabel.innerText = 'Use Acronyms & Abbreviations';
      acronymCheckboxLabel.style = 'font-weight: 100;';
      firstRow.appendChild(acronymCheckboxLabel);
      formatOptionContainer.appendChild(firstRow);

      const secondRow = document.createElement('div');
      secondRow.style = 'display: flex; gap: 10px; align-items: flex-start; justify-content: flex-start;';

      const stateHwyCheckbox = document.createElement('input');
      stateHwyCheckbox.type = 'checkbox';
      stateHwyCheckbox.id = 'useStateHwyCheckbox';
      stateHwyCheckbox.style = 'margin-left: 10px';
      stateHwyCheckbox.checked = useStateHwy;
      stateHwyCheckbox.addEventListener('change', () => {
        useStateHwy = stateHwyCheckbox.checked;
        updatePopupContent(labels);
        saveSettingsToStorage();
      });
      secondRow.appendChild(stateHwyCheckbox);

      const stateHwyCheckboxLabel = document.createElement('label');
      stateHwyCheckboxLabel.htmlFor = 'useStateHwyCheckbox';
      stateHwyCheckboxLabel.innerText = 'Fix Highway Labels';

      stateHwyCheckboxLabel.style = 'font-weight: 100; width: 150px;';
      secondRow.appendChild(stateHwyCheckboxLabel);

      const removeNewLinesCheckbox = document.createElement('input');
      removeNewLinesCheckbox.type = 'checkbox';
      removeNewLinesCheckbox.id = 'removeNewLinesCheckbox';
      removeNewLinesCheckbox.checked = removeNewLines;
      removeNewLinesCheckbox.addEventListener('change', () => {
        removeNewLines = removeNewLinesCheckbox.checked;
        updatePopupContent(labels);
        saveSettingsToStorage();
      });
      secondRow.appendChild(removeNewLinesCheckbox);

      const removeNewLinesCheckboxLabel = document.createElement('label');
      removeNewLinesCheckboxLabel.htmlFor = 'removeNewLinesCheckbox';
      removeNewLinesCheckboxLabel.innerText = 'Remove New Lines';
      removeNewLinesCheckboxLabel.style = 'font-weight: 100;';
      secondRow.appendChild(removeNewLinesCheckboxLabel);

      formatOptionContainer.appendChild(secondRow);
      popup.appendChild(formatOptionContainer);

      const dropdownContainer = document.createElement('div');
      dropdownContainer.style = 'margin-bottom: 10px;';
      popup.appendChild(dropdownContainer);

      const contentContainer = document.createElement('div');
      contentContainer.style = 'padding: 5px; overflow-y: auto; overflow-x: auto; height: calc(100% - 110px);';

      popup.appendChild(contentContainer);

      const mapElement = document.getElementsByTagName('wz-page-content')[0];
      if (mapElement) {
        mapElement.appendChild(popup);
      }

      header.onmousedown = function (event) {
        event.preventDefault();
        const parentRect = mapElement.getBoundingClientRect();
        const initialX = event.clientX;
        const initialY = event.clientY;
        const offsetX = initialX - parentRect.left - popup.offsetLeft;
        const offsetY = initialY - parentRect.top - popup.offsetTop;

        document.onmousemove = function (ev) {
          popup.style.left = `${ev.clientX - offsetX - parentRect.left}px`;
          popup.style.top = `${ev.clientY - offsetY - parentRect.top}px`;

          popupPosition.left = popup.style.left;
          popupPosition.top = popup.style.top;
        };

        document.onmouseup = function () {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    }

    updatePopupContent(labels);
    popup.style.display = isPopupVisible ? 'block' : 'none';
  }

  function updatePopupContent(labels) {
    const dropdownContainer = document.querySelector('#layerLabelPopup div:nth-child(3)');
    const contentContainer = document.querySelector('#layerLabelPopup div:nth-child(4)');

    dropdownContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    const select = document.createElement('select');
    select.style = 'width: 100%; padding: 5px; border: 1px solid #ccc;';

    const sortedLayerNames = Object.keys(labels).sort();
    sortedLayerNames.forEach((layerName) => {
      const option = document.createElement('option');
      option.value = layerName;
      option.innerText = layerName;
      select.appendChild(option);

      const uniqueLabels = Array.from(labels[layerName]).sort();
      const tabContent = document.createElement('div');
      tabContent.style = 'display: none; width: 100%; white-space: pre;';

      const processedLabels = uniqueLabels
        .map((label) => {
          const text = processedLabel(label);
          const copyIcon = '<span style="cursor: pointer; margin-left: 5px;" title="Copy to clipboard">📋</span>';
          return `<li style="margin-bottom: 0.3em; color: #000000;" data-label="${text}">${text}${copyIcon}</li>`;
        })
        .join('');

      tabContent.innerHTML = `<ul style="padding-left: 20px; margin-top: 0;">${processedLabels}</ul>`;
      contentContainer.appendChild(tabContent);

      // Add copying functionality
      tabContent.querySelectorAll('li').forEach((li) => {
        const icon = li.querySelector('span');
        if (icon) {
          icon.addEventListener('click', () => {
            const textToCopy = li.getAttribute('data-label'); // Get the text from a custom data attribute
            copyTextToClipboard(textToCopy);
          });
        }
      });
    });

    dropdownContainer.appendChild(select);

    let selectedLayerIndex = sortedLayerNames.indexOf(popupActiveLayer);

    if (selectedLayerIndex === -1 && select.options.length > 0) {
      selectedLayerIndex = 0;
      popupActiveLayer = sortedLayerNames[selectedLayerIndex];
    }
    select.selectedIndex = selectedLayerIndex;

    const allContents = contentContainer.querySelectorAll('div');
    allContents.forEach((content, index) => {
      content.style.display = index === select.selectedIndex ? 'block' : 'none';
    });

    select.addEventListener('change', () => {
      const contents = contentContainer.querySelectorAll('div');
      contents.forEach((content, index) => {
        content.style.display = index === select.selectedIndex ? 'block' : 'none';
      });
      popupActiveLayer = select.value;
    });
  }

  /**
   * Asynchronously fetches GIS features based on the current map viewport and user interaction settings.
   *
   * This function coordinates the fetching of geographical layers mapped to the current viewport. It clears previous
   * labels if a popup is visible, checks zoom level constraints to optimize fetch operations, and updates the layer
   * visibility accordingly. The function initiates web requests for each visible and fetchable layer based on the user's
   * interaction and browser state settings.
   *
   * Process Overview:
   * 1. Clears label references if a popup is visible and returns early if fetching is ignored or zoom level is low.
   * 2. Calls `whatsInView` to ascertain which geographical areas are visible within the current bounds.
   * 3. Initializes token mechanism to track fetch processes and cancellation flags. Updates visual styling cues.
   * 4. Identifies layers eligible for fetching and removes features not mapped.
   * 5. Filters visible layers based on selections and logs the number slated for fetching.
   * 6. Iterates over each layer, constructing HTTP requests using their extent and fetching data asynchronously.
   *    - Handles successful responses by processing features and updates popup if required.
   *    - Logs and handles errors encountered during HTTP requests, ensuring robust error management.
   *
   * Features:
   * - Integrates zoom level and feature checks to optimize fetch operations, avoiding unnecessary requests.
   * - Provides error and debugging output to track the processing flow and exceptions.
   *
   * Parameters:
   * - No explicit parameters; utilizes global state and map interaction contexts.
   *
   * Error Handling:
   * - Logs HTTP request errors and feature processing issues to assist in debugging operations.
   *
   * @returns {Promise<void>} - No explicit return; operates based on side effects affecting global state.
   */
  async function fetchFeatures() {
    if (isPopupVisible) {
      Object.keys(layerLabels).forEach((key) => delete layerLabels[key]);
    }
    if (ignoreFetch) return;
    if (sdk.Map.getZoomLevel() < 12) {
      //filterLayerCheckboxes();
      return;
    }
    await whatsInView();
    lastToken.cancel = true;
    lastToken = { cancel: false, features: [], layersProcessed: 0 };
    $('.gis-subL1-layer-label').css({});
    let _layersCleared = false;
    let layersToFetch; // Start with declaration
    if (!_layersCleared) {
      _layersCleared = true;
      layersToFetch = getFetchableLayers(true, true);

      // Remove features of any layers that won't be mapped.
      _gisLayers.forEach((gisLayer) => {
        if (!layersToFetch.includes(gisLayer)) {
          let featureCollection = gisLayer.isRoadLayer ? roadFeatures : defaultFeatures;
          const layerName = gisLayer.isRoadLayer ? ROAD_LAYER_NAME : DEFAULT_LAYER_NAME;
          const featureIds = featureCollection.filter((f) => f.properties.layerID === gisLayer.id).map((f) => f.id);
          if (featureIds.length) {
            sdk.Map.removeFeaturesFromLayer({ layerName, featureIds });
            featureCollection = featureCollection.filter((f) => !featureIds.includes(f.id));
            if (gisLayer.isRoadLayer) {
              roadFeatures = featureCollection;
            } else {
              defaultFeatures = featureCollection;
            }
          }
        }
      });
    }
    filterLayerCheckboxes();
    logDebug(`Fetching ${layersToFetch.length} layers...`);
    logDebug(layersToFetch);
    let layersProcessedCount = 0; // Track processed layers
    const extentWGS84 = getMapExtent('wgs84'); //extentMercator = getMapExtent('mercator');

    layersToFetch.forEach((gisLayer) => {
      const zoom = sdk.Map.getZoomLevel();
      const url = getUrl(extentWGS84, gisLayer, zoom);
      
      GM_xmlhttpRequest({
        url,
        context: lastToken,
        method: 'GET',
        onload(res2) {
          if (res2.status < 400) {
            // Handle successful response
            try {
              const parsedData = $.parseJSON(res2.responseText);
              processFeatures(parsedData, res2.context, gisLayer);
            } catch (parseError) {
              logError(`Parsing error for layer "${gisLayer.id}": ${parseError.message}`);
              $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
            }

            // Update popup after processing all layers
            layersProcessedCount += 1;
            if (layersProcessedCount === layersToFetch.length && isPopupVisible) {
              updatePopup(layerLabels);
            }
          } else {
            // Handle HTTP error response
            logError(`HTTP error for layer "${gisLayer.id}": ${res2.status} ${res2.statusText}`);
            $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
          }
        },
        onerror(res3) {
          // Handle request error, particularly timeouts or network issues
          logError(`Could not fetch layer "${gisLayer.id}". Error: ${res3.statusText} (status code: ${res3.status})`);
          $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
        },
      });
    });
  }

  function showScriptInfoAlert() {
    /* Check version and alert on update */
    if (SHOW_UPDATE_MESSAGE && scriptVersion !== settings.lastVersion) {
      // alert(SCRIPT_VERSION_CHANGES);
      let releaseNotes = '';
      releaseNotes += "<p>What's New:</p>";
      if (SCRIPT_VERSION_CHANGES.length > 0) {
        releaseNotes += '<ul>';
        for (let idx = 0; idx < SCRIPT_VERSION_CHANGES.length; idx++) releaseNotes += `<li>${SCRIPT_VERSION_CHANGES[idx]}`;
        releaseNotes += '</ul>';
      } else {
        releaseNotes += '<ul><li>Nothing major.</ul>';
      }
      WazeWrap.Interface.ShowScriptUpdate(GM_info.script.name, scriptVersion, releaseNotes, GF_URL);
    }
  }

  async function setEnabled(value) {
    settings.enabled = value;
    saveSettingsToStorage();
    sdk.Map.setLayerVisibility({ layerName: DEFAULT_LAYER_NAME, visibility: value });
    sdk.Map.setLayerVisibility({ layerName: ROAD_LAYER_NAME, visibility: value });
    const color = value ? '#00bd00' : '#ccc';
    $('span#gis-layers-power-btn').css({ color });
    if (value) await fetchFeatures();
    sdk.LayerSwitcher.setLayerCheckboxChecked({ name: 'GIS Layers', isChecked: value });

    // Show/hide the popup based on the enabled state
    const popup = document.getElementById('layerLabelPopup');
    if (popup) {
      popup.style.display = value ? 'block' : 'none';
      isPopupVisible = value;
    }
  }

  async function onGisLayerToggleChanged() {
    const checked = $(this).is(':checked');
    const layerId = $(this).data('layer-id');
    const idx = settings.visibleLayers.indexOf(layerId);
    if (checked) {
      const gisLayer = _gisLayers.find((l) => l.id === layerId);
      if (gisLayer.oneTimeAlert) {
        const lastAlertHash = settings.oneTimeAlerts[layerId];
        const newAlertHash = hashString(gisLayer.oneTimeAlert);
        if (lastAlertHash !== newAlertHash) {
          // alert(`Layer: ${gisLayer.name}\n\nMessage:\n${gisLayer.oneTimeAlert}`);
          WazeWrap.Alerts.info(GM_info.script.name, `Layer: ${gisLayer.name}<br><br>Message:<br>${gisLayer.oneTimeAlert}`);
          settings.oneTimeAlerts[layerId] = newAlertHash;
          saveSettingsToStorage();
        }
      }
      if (idx === -1) settings.visibleLayers.push(layerId);
    } else if (idx > -1) settings.visibleLayers.splice(idx, 1);
    if (!ignoreFetch) {
      saveSettingsToStorage();
      await fetchFeatures();
    }
  }

  async function onOnlyShowApplicableLayersChanged() {
    settings.onlyShowApplicableLayers = $(this).is(':checked');
    saveSettingsToStorage();
    filterLayerCheckboxes();
  }

  async function onOnlyShowApplicableLayersZoomChanged() {
    settings.onlyShowApplicableLayersZoom = $(this).is(':checked');
    saveSettingsToStorage();
    filterLayerCheckboxes();
  }

  async function onSub1CheckChanged(evt) {
    const subL1 = evt.data;
    const idx = settings.selectedSubL1.indexOf(subL1);
    if (evt.target.checked) {
      if (idx === -1) settings.selectedSubL1.push(subL1);
    } else if (idx > -1) settings.selectedSubL1.splice(idx, 1);
    if (!ignoreFetch) {
      saveSettingsToStorage();
      initLayersTab();
      await fetchFeatures();
    }
  }

  function onLayerCheckboxChanged(args) {
    setEnabled(args.checked);
  }

  function setFillParcels(doFill) {
    [LAYER_STYLES.parcels, LAYER_STYLES.state_parcels].forEach((style) => {
      style.fillOpacity = doFill ? 0.2 : 0;
    });
  }

  async function onFillParcelsCheckedChanged(evt) {
    const { checked } = evt.target;
    setFillParcels(checked);
    settings.fillParcels = checked;
    saveSettingsToStorage();
    await fetchFeatures();
  }

  async function onMapMove() {
    if (settings.enabled) {
      await loadVisibleCountryData();
      await fetchFeatures();
    }
  }

  function onRefreshLayersClick() {
    const $btn = $('#gis-layers-refresh');
    if (!$btn.hasClass('fa-spin')) {
      $btn.css({ cursor: 'auto' });
      $btn.addClass('fa-spin');
      init(false);
    }
  }

  function onChevronClick(evt) {
    const $target = $(evt.currentTarget);
    const $div = $($target.siblings()[0]);
    const fieldsetId = $target.parent('fieldset').attr('id');
    const sectionKey = fieldsetId ? fieldsetId.replace('gis-layers-for-', '') : null;
    $($target.children()[0]).toggleClass('fa fa-fw fa-chevron-down').toggleClass('fa fa-fw fa-chevron-right');
    if ($div.css('display') === 'none') {
      $div.css('display', 'block');
      if (sectionKey) settings.collapsedSections[sectionKey] = false;
    } else {
      $div.css('display', 'none');
      if (sectionKey) settings.collapsedSections[sectionKey] = true;
    }
    if (sectionKey) saveSettingsToStorage();
  }

  async function doToggleABunch(evt, checkState) {
    ignoreFetch = true;
    $(evt.target).closest('fieldset').find('input').prop('checked', !checkState).trigger('click');
    ignoreFetch = false;
    saveSettingsToStorage();
    if (evt.data) initLayersTab();
    await fetchFeatures();
  }

  function onSelectAllClick(evt) {
    doToggleABunch(evt, true);
  }

  function onSelectNoneClick(evt) {
    doToggleABunch(evt, false);
  }

  async function onGisAddrDisplayChange(evt) {
    settings.addrLabelDisplay = evt.target.value;
    saveSettingsToStorage();
    await fetchFeatures();
  }

  function onAddressDisplayShortcutKey() {
    if (!$('#gisAddrDisplay-hn').is(':checked')) {
      $('#gisAddrDisplay-hn').click();
    } else {
      $('#gisAddrDisplay-all').click();
    }
  }

  function onToggleGisLayersShortcutKey() {
    setEnabled(!settings.enabled);
  }

  function togglePopupVisibility() {
    const popup = document.getElementById('layerLabelPopup');
    if (popup) {
      popup.style.display = isPopupVisible ? 'block' : 'none';
    }
    saveSettingsToStorage();
  }

  function initLayer() {
    const rules = _gisLayers
      .filter((gisLayer) => gisLayer.style && gisLayer.style !== 'roads')
      .map((gisLayer) => {
        let style;
        if (LAYER_STYLES.hasOwnProperty(gisLayer.style)) {
          style = LAYER_STYLES[gisLayer.style];
        } else {
          style = gisLayer.style;
        }
        return {
          predicate: (featureProperties) => featureProperties.layerID === gisLayer.id,
          style,
        };
      });

    setFillParcels(settings.fillParcels);

    try {
      sdk.Map.removeLayer({ layerName: DEFAULT_LAYER_NAME });
    } catch (e) {
      // If InvalidStateError, then the layer doesn't exist yet. Ignore the error
      if (!(e instanceof sdk.Errors.InvalidStateError)) {
        throw e;
      }
    }
    sdk.Map.addLayer({
      layerName: DEFAULT_LAYER_NAME,
      styleContext: {
        getLabel: (context) => context.feature?.properties?.label,
      },
      styleRules: [{ style: DEFAULT_STYLE }, ...rules],
      zIndexing: true,
    });

    try {
      sdk.Map.removeLayer({ layerName: ROAD_LAYER_NAME });
    } catch (e) {
      // If InvalidStateError, then the layer doesn't exist yet. Ignore the error
      if (!(e instanceof sdk.Errors.InvalidStateError)) {
        throw e;
      }
    }
    sdk.Map.addLayer({
      layerName: ROAD_LAYER_NAME,
      styleContext: {
        getLabel: (context) => context.feature?.properties?.label,
        getOffset: () => -(sdk.Map.getZoomLevel() + 5),
        getSmooth: () => '',
        getReadable: () => '1',
      },
      styleRules: [{ style: ROAD_STYLE }],
    });

    sdk.Map.setLayerVisibility({ layerName: DEFAULT_LAYER_NAME, visibility: settings.enabled });
    sdk.Map.setLayerVisibility({ layerName: ROAD_LAYER_NAME, visibility: settings.enabled });
  } // END InitLayer

  function initLayersTab() {
    const user = userInfo.userName.toLowerCase();
    const subL1 = _.uniq(_gisLayers.map((l) => l.countrySubL1)).filter((sub) => settings.selectedSubL1.includes(sub));

    $('#panel-gis-subL1-layers')
      .empty()
      .append(
        $('<div>', { class: 'controls-container' })
          .css({ 'padding-top': '0px' })
          .append(
            $('<input>', { type: 'checkbox', id: 'only-show-applicable-gis-layers' }).change(onOnlyShowApplicableLayersChanged).prop('checked', settings.onlyShowApplicableLayers),
            $('<label>', { for: 'only-show-applicable-gis-layers' }).css({ 'white-space': 'pre-line' }).text('Only show applicable layers for Region')
          ),
        $('<div>', { class: 'controls-container' })
          .css({ 'padding-top': '0px' })
          .append(
            $('<input>', { type: 'checkbox', id: 'only-show-applicable-gis-layers-for-zoom-level' })
              .change(onOnlyShowApplicableLayersZoomChanged)
              .prop('checked', settings.onlyShowApplicableLayersZoom),
            $('<label>', { for: 'only-show-applicable-gis-layers-for-zoom-level' }).css({ 'white-space': 'pre-line' }).text('Include Zoom Level in filter')
          ),
        $('.gis-layers-subL1-checkbox:checked').length === 0
          ? $('<div>').text('Turn on layer categories in the Settings tab.')
          : subL1.map((sub) =>
              $('<fieldset>', {
                id: `gis-layers-for-${sub}`,
                style: 'border:1px solid silver;padding:4px;border-radius:4px;-webkit-padding-before: 0;',
              }).append(
                $('<legend>', { style: 'margin-bottom:0px;border-bottom-style:none;width:auto;' })
                  .click(onChevronClick)
                  .append(
                    $('<i>', {
                      class: settings.collapsedSections[sub] ? 'fa fa-fw fa-chevron-right' : 'fa fa-fw fa-chevron-down',
                      style: 'cursor: pointer;font-size: 12px;margin-right: 4px',
                    }),
                    $('<span>', {
                      style: 'font-size:14px;font-weight:600;text-transform: uppercase; cursor: pointer',
                    }).text(NameMapper.toFullName(sub))
                  ),
                $('<div>', {
                  id: `${sub}_body`,
                  style: settings.collapsedSections[sub] ? 'display: none;' : 'display: block;',
                }).append(
                  $('<div>')
                    .css({ 'font-size': '11px' })
                    .append($('<span>').append('Select ', $('<a>', { href: '#' }).text('All').click(onSelectAllClick), ' / ', $('<a>', { href: '#' }).text('None').click(onSelectNoneClick))),
                  $('<div>', { class: 'controls-container', style: 'padding-top:0px;' }).append(
                    _gisLayers
                      .filter((l) => l.countrySubL1 === sub && (!PRIVATE_LAYERS.hasOwnProperty(l.id) || PRIVATE_LAYERS[l.id].includes(user)))
                      .map((gisLayer) => {
                        const id = `gis-layer-${gisLayer.id}`;
                        return $('<div>', { class: 'controls-container', id: `${id}-container` })
                          .css({ 'padding-top': '0px', display: 'block' })
                          .append(
                            $('<input>', { type: 'checkbox', id }).data('layer-id', gisLayer.id).change(onGisLayerToggleChanged).prop('checked', settings.visibleLayers.includes(gisLayer.id)),
                            $('<label>', { for: id, class: 'gis-subL1-layer-label' })
                              .css({ 'white-space': 'pre-line' })
                              .text(`${gisLayer.name}${gisLayer.restrictTo ? ' *' : ''}`)
                              .attr('title', gisLayer.restrictTo ? `Restricted to: ${gisLayer.restrictTo}` : '')
                              .contextmenu((evt) => {
                                evt.preventDefault();
                                // TODO - enable the layer if it isn't already.
                                // Tried using click function on the evt target, but that didn't work.
                                _layerSettingsDialog.gisLayer = gisLayer;
                                _layerSettingsDialog.show();
                              })
                          );
                      })
                  )
                )
              )
            )
      );
  }

  function initSettingsTab() {
    // Group layers by country
    const layersByCountry = _.groupBy(_gisLayers, 'country');

    const createRadioBtn = (name, value, text, checked) => {
      const id = `${name}-${value}`;
      return [
        $('<input>', {
          type: 'radio',
          id,
          name,
          value,
        }).prop('checked', checked),
        $('<label>', { for: id }).text(text).css({
          paddingLeft: '15px',
          marginRight: '4px',
        }),
      ];
    };
    $('#panel-gis-layers-settings')
      .empty()
      .append(
        $('<fieldset>', {
          style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;margin-top:-8px;',
        }).append(
          $('<legend>', {
            style: 'margin-bottom:0px;border-bottom-style:none;width:auto;',
          }).append(
            $('<span>', {
              style: 'font-size:14px;font-weight:600;text-transform: uppercase;',
            }).text('Labels')
          ),
          $('<div>', { id: 'labelSettings' }).append(
            $('<div>', { class: 'controls-container' })
              .css({ 'padding-top': '2px' })
              .append(
                $('<label>', { style: 'font-weight:normal;' }).text('Addresses:'),
                createRadioBtn('gisAddrDisplay', 'hn', 'HN', settings.addrLabelDisplay === 'hn'),
                createRadioBtn('gisAddrDisplay', 'street', 'Street', settings.addrLabelDisplay === 'street'),
                createRadioBtn('gisAddrDisplay', 'all', 'Both', settings.addrLabelDisplay === 'all'),
                createRadioBtn('gisAddrDisplay', 'none', 'None', settings.addrLabelDisplay === 'none'),
                $('<i>', {
                  class: 'waze-tooltip',
                  id: 'gisAddrDisplayInfo',
                  'data-toggle': 'tooltip',
                  style: 'margin-left:8px; font-size:12px',
                  'data-placement': 'bottom',
                  title: `This may not work properly for all layers. Please report issues to ${SCRIPT_AUTHOR}.`,
                }).tooltip(),
                $('<br>'),
                $('<label>', { style: 'font-weight:normal; margin-left:8px;' }).text('Label Popup:'),
                createRadioBtn('popupVisibility', 'show', 'Show', isPopupVisible),
                createRadioBtn('popupVisibility', 'hide', 'Hide', !isPopupVisible)
              )
          )
        )
      );

    // Create groups by country
    Object.keys(layersByCountry)
      .sort()
      .forEach((country) => {
        const subRegions = _.uniq(layersByCountry[country].map((l) => l.countrySubL1));

        $('#panel-gis-layers-settings').append(
          $('<fieldset>', { style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before:0;' }).append(
            $('<legend>', { style: 'margin-bottom:0px;border-bottom-style:none;width:auto;' })
              .click(onChevronClick)
              .append(
                $('<i>', { class: 'fa fa-fw fa-chevron-down', style: 'cursor: pointer;font-size: 12px;margin-right: 4px' }),
                $('<span>', { style: 'font-size:14px;font-weight:600;text-transform:uppercase;' }).text(NameMapper.toFullName(country))
              ),
            $('<div>', { id: `country_${country}_body` }).append(
              subRegions.map((countrySubL1) => {
                const fullName = NameMapper.toFullName(countrySubL1);
                const id = `gis-layer-enable-subL1-${countrySubL1}`;

                return $('<div>', { class: 'controls-container' })
                  .css({ 'padding-top': '0px', display: 'block' })
                  .append(
                    $('<input>', { type: 'checkbox', id, class: 'gis-layers-subL1-checkbox' }).change(countrySubL1, onSub1CheckChanged).prop('checked', settings.selectedSubL1.includes(countrySubL1)),
                    $('<label>', { for: id }).css({ 'white-space': 'pre-line',}).text(fullName)
                  );
              })
            )
          )
        );
      });

    $('#panel-gis-layers-settings').append(
      $('<fieldset>', { style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before:0;' }).append(
        $('<legend>', { style: 'margin-bottom:0px;border-bottom-style:none;width:auto;' }).append(
          $('<span>', { style: 'font-size:14px;font-weight:600;text-transform:uppercase;' }).text('Appearance')
        ),
        $('<div>', { class: 'controls-container' })
          .css({ 'padding-top': '2px' })
          .append(
            $('<input>', { type: 'checkbox', id: 'fill-parcels' }).change(onFillParcelsCheckedChanged).prop('checked', settings.fillParcels),
            $('<label>', { for: 'fill-parcels' }).css({ 'white-space': 'pre-line', }).text('Fill parcels') 
          )
      )
    );
    $('input[name="gisAddrDisplay"]').change(onGisAddrDisplayChange);
    $('input[name="popupVisibility"]').change(function () {
      isPopupVisible = $(this).val() === 'show';
      togglePopupVisibility();
    });
  }

  async function initTab(firstCall = true) {
    if (firstCall) {
      const content = $('<div>')
        .append(
          $('<span>', { style: 'font-size:14px;font-weight:600' }).text('GIS Layers'),
          $('<span>', { style: 'font-size:11px;margin-left:10px;color:#aaa;' }).text(GM_info.script.version),
          // <a href="https://docs.google.com/forms/d/e/1FAIpQLSevPQLz2ohu_LTge9gJ9Nv6PURmCmaSSjq0ayOJpGdRr2xI0g/viewform?usp=pp_url&entry.2116052852=test" target="_blank" style="color: #6290b7;font-size: 12px;margin-left: 8px;" title="Report broken layers, bugs, request new layers, script features">Report an issue</a>
          $('<a>', {
            href: REQUEST_FORM_URL.replace('{username}', userInfo.userName),
            target: '_blank',
            style: 'color: #6290b7;font-size: 12px;margin-left: 8px;',
            title: 'Report broken layers, bugs, request new layers, script features',
          }).text('Submit a request'),
          $('<span>', {
            id: 'gis-layers-refresh',
            class: 'fa fa-refresh',
            style: 'float: right;',
            'data-toggle': 'tooltip',
            title: 'Pull new layer info from master sheet and refresh all layers.',
          }),
          '<ul class="nav nav-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-gis-subL1-layers" aria-expanded="true">' +
            'Layers' +
            '</a></li>' +
            '<li><a data-toggle="tab" href="#panel-gis-layers-settings" aria-expanded="true">' +
            'Settings' +
            '</a></li> ' +
            '</ul>',
          $('<div>', { class: 'tab-content', style: 'padding:8px;padding-top:2px' }).append(
            $('<div>', { class: 'tab-pane active', id: 'panel-gis-subL1-layers', style: 'padding: 4px 0px 0px 0px; width: auto' }),
            $('<div>', { class: 'tab-pane', id: 'panel-gis-layers-settings', style: 'padding: 4px 0px 0px 0px; width: auto' })
          )
        )
        .html();

      const powerButtonColor = settings.enabled ? '#00bd00' : '#ccc';
      const labelText = $('<div>')
        .append(
          $('<span>', {
            class: 'fa fa-power-off',
            id: 'gis-layers-power-btn',
            style: `margin-right: 5px;cursor: pointer;color: ${powerButtonColor};font-size: 13px;`,
            title: 'Toggle GIS Layers',
          }),
          $('<span>', { title: 'GIS Layers' }).text('GIS-L')
        )
        .html();

      const { tabLabel, tabPane } = await sdk.Sidebar.registerScriptTab();
      tabLabel.innerHTML = labelText;
      tabPane.innerHTML = content;
      // Fix tab content div spacing.
      $(tabPane).parent().css({ width: 'auto', padding: '6px' });
      $('#gis-layers-power-btn').click(() => {
        setEnabled(!settings.enabled);

        // return false to prevent event from bubbling up the DOM tree and causing the GIS-L tab to activate
        return false;
      });
      $('#gis-layers-refresh').click(onRefreshLayersClick);
    }

    initSettingsTab();
    initLayersTab();
  }

  function initGui(firstCall = true) {
    initLayer();
    if (firstCall) {
      initTab(true);
      sdk.LayerSwitcher.addLayerCheckbox({ name: 'GIS Layers' });
      sdk.LayerSwitcher.setLayerCheckboxChecked({ name: 'GIS Layers', isChecked: settings.enabled });
      sdk.Events.on({ eventName: 'wme-layer-checkbox-toggled', eventHandler: onLayerCheckboxChanged });
      sdk.Events.on({ eventName: 'wme-map-move-end', eventHandler: onMapMove });
      showScriptInfoAlert();
    } else {
      initTab(firstCall);
    }
  }

  /**
   * Asynchronously loads GIS data for visible countries and subdivisions within the current map viewport.
   *
   * This function fetches data associated with countries and their subdivisions that are visible at the current zoom
   * level. It avoids redundant data loads by tracking which countries and subdivisions have already been processed,
   * thereby optimizing resource usage and enhancing loading efficiency.
   *
   * Process Overview:
   * 1. Checks the current zoom level and returns early if below the threshold, preventing data loading.
   * 2. Calls `whatsInView` to populate `_whatsInView` with currently visible country and subdivision data.
   * 3. Iterates over `_whatsInView` to extract unique country codes (`ISO_ALPHA3`) and subdivision codes (`subL1_id`).
   * 4. For each country code:
   *    - If it's not already loaded, initializes loading for all visible subdivisions.
   *    - For countries already loaded, filters subdivisions that haven't been loaded yet.
   *    - Calls `loadSpreadsheetAsync` to fetch and load the data and then updates the GUI.
   * 5. Tracks loaded subdivisions to prevent redundancy and logs the loading activity for debugging.
   *
   * Features:
   * - Efficiently manages GIS data loading based on visibility and ensures GUI updating post-data fetch.
   * - Uses sets to maintain unique country and region codes, enhancing data consistency.
   *
   * Parameters:
   * - No explicit parameters, utilizes global variables and state tracking.
   *
   * @returns {Promise<void>} - No explicit return; relies on side effects to update global state and UI.
   */
  async function loadVisibleCountryData() {
    try {
      const currentZoomLevel = sdk.Map.getZoomLevel();
      if (currentZoomLevel < 12) {
        return;
      }

      await whatsInView(); // This function populates _whatsInView with the current visible countries and subs

      const countryCodes = new Set();
      const regionCodes = new Set();

      for (const country in _whatsInView) {
        if (_whatsInView.hasOwnProperty(country)) {
          const countryInfo = _whatsInView[country];
          if (countryInfo.ISO_ALPHA3) {
            countryCodes.add(countryInfo.ISO_ALPHA3);
          }
          if (countryInfo.subL1) {
            for (const subdivision in countryInfo.subL1) {
              if (countryInfo.subL1.hasOwnProperty(subdivision)) {
                const subdivisionInfo = countryInfo.subL1[subdivision];
                if (subdivisionInfo.subL1_id) {
                  regionCodes.add(subdivisionInfo.subL1_id);
                }
              }
            }
          }
        }
      }

      for (const isoCode of countryCodes) {
        let newRegionCodesToLoad = new Set();

        if (!alreadyLoadedCountries.has(isoCode)) {
          logDebug(`Loading Layers for Country ${isoCode} with Subdivision(s): ${Array.from(regionCodes).join(', ')}`);
          newRegionCodesToLoad = new Set(regionCodes);
          alreadyLoadedCountries.add(isoCode);
        } else {
          regionCodes.forEach((regionCode) => {
            if (!alreadyLoadedSubL1.has(regionCode)) {
              logDebug(`Loading New Subdivision(s) ${regionCode} Layers for Country ${isoCode}`);
              newRegionCodesToLoad.add(regionCode);
            }
          });
        }

        if (newRegionCodesToLoad.size > 0) {
          await loadSpreadsheetAsync(isoCode, newRegionCodesToLoad);
          initGui(false); // Update GUI after loading data
        }

        newRegionCodesToLoad.forEach((regionCode) => {
          alreadyLoadedSubL1.add(regionCode);
        });
      }
    } catch (error) {
      logError(`Error in loadVisibleCountryData: ${error.message}`);
      throw error;
    }
  }

  /**
   * Asynchronously loads GIS layer definitions from a spreadsheet based on country ISO codes and visible subdivisions.
   *
   * This function retrieves GIS layer configuration data from a specified Google Sheets spreadsheet using the country
   * ISO code and checks against region codes for relevant subdivisions. It validates the spreadsheet structure, adjusts
   * layer properties, and filters layers based on access restrictions and visibility requirements.
   *
   * Process Overview:
   * 1. Constructs a URL using the country ISO code to access the appropriate tab in the spreadsheet.
   * 2. Fetches data from the spreadsheet using the constructed URL, handling any errors from the request.
   * 3. Validates the spreadsheet's column data against required field names ensuring script compatibility.
   * 4. Iterates over each layer definition row to:
   *    - Parse, trim, and convert field values appropriately (e.g., splitting strings and JSON parsing).
   *    - Compile label processing functions, handle style specifications, and validate subdivision visibility.
   *    - Evaluate access restrictions based on user rank and specific user attributes.
   *    - Construct a country-subdivision identifier and manage layer activation based on its defined settings.
   *    - Ensure layers are added to global layer tracking if they meet visibility and access criteria.
   *
   * Parameters:
   * - `isoCode`: ISO country code determining which spreadsheet tab to access for GIS layers.
   * - `regionCodes`: Set of region codes indicating visible subdivisions for filtering layers.
   *
   * Features:
   * - Utilizes Google Sheets API for configuration data retrieval.
   * - Integrates comprehensive error handling and debugging output.
   *
   * Error Handling:
   * - Throws errors for failed spreadsheet calls and logs issues with data parsing or processing tasks.
   *
   * @param {string} isoCode - Country ISO code for selecting the spreadsheet tab and data.
   * @param {Set<string>} regionCodes - Set of subdivision codes used to filter visible GIS layers.
   * @returns {Promise<Object>} - Object containing error information, if any occurs during processing.
   */
    async function loadSpreadsheetAsync(isoCode, regionCodes) {
    const LAYER_DEF_SPREADSHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw/values/';
    const API_KEY = 'YTJWNVBVRkplbUZUZVVGTlNXOWlVR1pWVjIxcE9VdHJNbVY0TTFoeWNrSlpXbFZuVmtWelRrMVVWUT09';
    const DEC = (s) => atob(atob(s));

    let data;
    try {
      const tabName = 'Layer Definitions v2';
      const url = `${LAYER_DEF_SPREADSHEET_URL}${tabName}?${DEC(API_KEY)}`;
      data = await $.getJSON(url);
    } catch (err) {
      throw new Error(`Spreadsheet call failed. (${err.status}: ${err.statusText})`);
    }

    const [, [minVersion], fieldNames, ...layerDefRows] = data.values;
    const REQUIRED_FIELD_NAMES = [
      'country',
      'subL1',
      'name',
      'id',
      'subL2',
      'url',
      'where',
      'labelFields',
      'processLabel',
      'style',
      'visibleAtZoom',
      'labelsVisibleAtZoom',
      'enabled',
      'restrictTo',
      'oneTimeAlert',
    ];

    const result = { error: null };
    const checkFieldNames = (fldName) => fieldNames.includes(fldName);

    if (scriptVersion < minVersion) {
      result.error = `Script must be updated to at least version ${minVersion} before layer definitions can be loaded.`;
    } else if (fieldNames.length < REQUIRED_FIELD_NAMES.length) {
      result.error = `Expected ${REQUIRED_FIELD_NAMES.length} columns in layer definition data. Spreadsheet returned ${fieldNames.length}.`;
    } else if (!REQUIRED_FIELD_NAMES.every(checkFieldNames)) {
      result.error = 'Script expected specific column names that are missing.';
    }

    if (!result.error) {
      layerDefRows
        .filter((row) => row.length)
        .forEach((layerDefRow) => {
          const layerDef = { enabled: '0' };
          let validSubL1 = false;
          let countryId = '';
          let subL1Upper = '';

          fieldNames.forEach((fldName, fldIdx) => {
            let value = layerDefRow[fldIdx];
            if (value !== undefined && value.trim().length > 0) {
              value = value.trim();
              if (fldName === 'subL2' || fldName === 'labelFields') {
                value = value.split(',').map((item) => item.trim());
              } else if (fldName === 'processLabel') {
                try {
                  value = ESTreeProcessor.compile(`function __$proc(){${value}} __$proc();`);
                } catch (ex) {
                  layerDef.labelProcessingError = true;
                  logError(`Error loading label processing function for layer "${layerDef.id}".`);
                  logDebug(ex);
                }
              } else if (fldName === 'style') {
                layerDef.isRoadLayer = value === 'roads';
                if (!layerDef.isRoadLayer && !LAYER_STYLES.hasOwnProperty(value)) {
                  try {
                    value = JSON.parse(value);
                  } catch (ex) {
                    logError(`Invalid style definition for layer "${layerDef.id}".`);
                  }
                }
              } else if (fldName === 'country') {
                countryId = value.toUpperCase();
              } else if (fldName === 'subL1') {
                subL1Upper = value.toUpperCase();
                layerDef[fldName] = subL1Upper;
                validSubL1 = regionCodes.has(subL1Upper) || subL1Upper === isoCode.toUpperCase();
              } else if (fldName === 'restrictTo') {
                try {
                  const values = value.split(',').map((v) => v.trim().toLowerCase());
                  layerDef.notAllowed = !values.some((entry) => {
                    const rankMatch = entry.match(/^r(\d)(\+am)?$/);
                    if (rankMatch) {
                      if (rankMatch[1] <= userInfo.rank + 1 && (!rankMatch[2] || userInfo.isAreaManager)) {
                        return true;
                      }
                    } else if (entry === 'am' && userInfo.isAreaManager) {
                      return true;
                    } else if (entry === userInfo.userName.toLowerCase()) {
                      return true;
                    }
                    return false;
                  });
                } catch (ex) {
                  logError(ex);
                }
              }
              layerDef[fldName] = value;
            } else if (fldName === 'labelFields') {
              layerDef[fldName] = [''];
            }
          });

          if (countryId === isoCode.toUpperCase() && subL1Upper) {
            layerDef['countrySubL1'] = `${countryId}-${subL1Upper}`;
          }

          const enabled = layerDef.enabled && !['0', 'false', 'no', 'n'].includes(layerDef.enabled.toString().trim().toLowerCase());
          if (validSubL1 && !layerDef.notAllowed && enabled) {
            const layerExists = _gisLayers.some((existingLayer) => existingLayer.id === layerDef.id);
            if (!layerExists) {
              _gisLayers.push(layerDef);
            }
          }
        });
    }

    return result;
  }

  function createShortcut(shortcutId, description, callback) {
    let shortcutKeys = settings.shortcuts?.[shortcutId] ?? null;
    if (shortcutKeys && sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys })) {
      shortcutKeys = null;
    }
    sdk.Shortcuts.createShortcut({
      shortcutId,
      shortcutKeys,
      description,
      callback,
    });
  }

  async function init(firstCall = true) {
    _gisLayers = [];
    _whatsInView = {};
    alreadyLoadedCountries.clear();
    alreadyLoadedSubL1.clear();
    countrySubdivisionMapping = {};

    if (firstCall) {
      userInfo = sdk.State.getUserInfo();
      labelProcessingGlobalVariables.W = W;
      labelProcessingGlobalVariables.sdk = sdk;
      initRoadStyle();
      loadSettingsFromStorage();
      createShortcut('toggleHnsOnly', 'Toggle HN-only address labels (GIS Layers)', onAddressDisplayShortcutKey);
      createShortcut('toggleEnabled', 'Toggle display of GIS Layers', onToggleGisLayersShortcutKey);
      installPathFollowingLabels();
      window.addEventListener('beforeunload', saveSettingsToStorage, false);
      _layerSettingsDialog = new LayerSettingsDialog();
      //await buildCountrySubdivisionMapping();
    }
    const t0 = performance.now();
    try {
      await buildCountrySubdivisionMapping();
      await loadVisibleCountryData();
      logDebug(`Loaded ${_gisLayers.length} layer definitions in ${Math.round(performance.now() - t0)} ms.`);
      initGui(firstCall);
      await fetchFeatures();
      $('#gis-layers-refresh').removeClass('fa-spin').css({ cursor: 'pointer' });
      logDebug('Initialized.');
    } catch (err) {
      logError(err);
    }
  }

  init();

  /*eslint-disable*/
  function installPathFollowingLabels() {
    // Copyright (c) 2015 by Jean-Marc.Viglino [at]ign.fr
    // Dual-licensed under the CeCILL-B Licence (http://www.cecill.info/)
    // and the Beerware license (http://en.wikipedia.org/wiki/Beerware),
    // feel free to use and abuse it in your projects (the code, not the beer ;-).
    //
    //* Overwrite the SVG function to allow text along a path
    //*	setStyle function
    //*
    //*	Add new options to the Openlayers.Style

    // pathLabel: {String} Label to draw on the path
    // pathLabelXOffset: {String} Offset along the line to start drawing text in pixel or %, default: "50%"
    // pathLabelYOffset: {Number} Distance of the line to draw the text
    // pathLabelCurve: {String} Smooth the line the label is drawn on (empty string for no)
    // pathLabelReadable: {String} Make the label readable (empty string for no)

    // *	Extra standard values : all label and text values

    //  *
    //  * Method: removeChildById
    //  * Remove child in a node.
    //  *

    function removeChildById(node, id) {
      if (node.querySelector) {
        var c = node.querySelector('#' + id);
        if (c) node.removeChild(c);
        return;
      }
      // For old browsers
      var c = node.childNodes;
      if (c)
        for (var i = 0; i < c.length; i++) {
          if (c[i].id === id) {
            node.removeChild(c[i]);
            return;
          }
        }
    }

    //  *
    //  * Method: setStyle
    //  * Use to set all the style attributes to a SVG node.
    //  *
    //  * Takes care to adjust stroke width and point radius to be
    //  * resolution-relative
    //  *
    //  * Parameters:
    //  * node - {SVGDomElement} An SVG element to decorate
    //  * style - {Object}
    //  * options - {Object} Currently supported options include
    //  *                              'isFilled' {Boolean} and
    //  *                              'isStroked' {Boolean}

    var setStyle = OpenLayers.Renderer.SVG.prototype.setStyle;
    OpenLayers.Renderer.SVG.LABEL_STARTOFFSET = { l: '0%', r: '100%', m: '50%' };

    OpenLayers.Renderer.SVG.prototype.pathText = function (node, style, suffix) {
      var label = this.nodeFactory(null, 'text');
      label.setAttribute('id', node._featureId + '_' + suffix);
      if (style.fontColor) label.setAttributeNS(null, 'fill', style.fontColor);
      if (style.fontStrokeColor) label.setAttributeNS(null, 'stroke', style.fontStrokeColor);
      if (style.fontStrokeWidth) label.setAttributeNS(null, 'stroke-width', style.fontStrokeWidth);
      if (style.fontOpacity) label.setAttributeNS(null, 'opacity', style.fontOpacity);
      if (style.fontFamily) label.setAttributeNS(null, 'font-family', style.fontFamily);
      if (style.fontSize) label.setAttributeNS(null, 'font-size', style.fontSize);
      if (style.fontWeight) label.setAttributeNS(null, 'font-weight', style.fontWeight);
      if (style.fontStyle) label.setAttributeNS(null, 'font-style', style.fontStyle);
      if (style.labelSelect === true) {
        label.setAttributeNS(null, 'pointer-events', 'visible');
        label._featureId = node._featureId;
      } else {
        label.setAttributeNS(null, 'pointer-events', 'none');
      }

      function getpath(pathStr, readeable) {
        var npath = pathStr.split(',');
        var pts = [];
        if (!readeable || Number(npath[0]) - Number(npath[npath.length - 2]) < 0) {
          while (npath.length) pts.push({ x: Number(npath.shift()), y: Number(npath.shift()) });
        } else {
          while (npath.length) pts.unshift({ x: Number(npath.shift()), y: Number(npath.shift()) });
        }
        return pts;
      }

      var path = this.nodeFactory(null, 'path');
      var tpid = node._featureId + '_t' + suffix;
      var tpath = node.getAttribute('points');
      if (style.pathLabelCurve) {
        var pts = getpath(tpath, style.pathLabelReadable);
        var p = pts[0].x + ' ' + pts[0].y;
        var dx, dy, s1, s2;
        dx = (pts[0].x - pts[1].x) / 4;
        dy = (pts[0].y - pts[1].y) / 4;
        for (var i = 1; i < pts.length - 1; i++) {
          p += ' C ' + (pts[i - 1].x - dx) + ' ' + (pts[i - 1].y - dy);
          dx = (pts[i - 1].x - pts[i + 1].x) / 4;
          dy = (pts[i - 1].y - pts[i + 1].y) / 4;
          s1 = Math.sqrt(Math.pow(pts[i - 1].x - pts[i].x, 2) + Math.pow(pts[i - 1].y - pts[i].y, 2));
          s2 = Math.sqrt(Math.pow(pts[i + 1].x - pts[i].x, 2) + Math.pow(pts[i + 1].y - pts[i].y, 2));
          p += ' ' + (pts[i].x + (s1 * dx) / s2) + ' ' + (pts[i].y + (s1 * dy) / s2);
          dx *= s2 / s1;
          dy *= s2 / s1;
          p += ' ' + pts[i].x + ' ' + pts[i].y;
        }
        p += ' C ' + (pts[i - 1].x - dx) + ' ' + (pts[i - 1].y - dy);
        dx = (pts[i - 1].x - pts[i].x) / 4;
        dy = (pts[i - 1].y - pts[i].y) / 4;
        p += ' ' + (pts[i].x + dx) + ' ' + (pts[i].y + dy);
        p += ' ' + pts[i].x + ' ' + pts[i].y;

        path.setAttribute('d', 'M ' + p);
      } else {
        if (style.pathLabelReadable) {
          var pts = getpath(tpath, style.pathLabelReadable);
          var p = '';
          for (var i = 0; i < pts.length; i++) p += ' ' + pts[i].x + ' ' + pts[i].y;
          path.setAttribute('d', 'M ' + p);
        } else path.setAttribute('d', 'M ' + tpath);
      }
      path.setAttribute('id', tpid);

      var defs = this.createDefs();
      removeChildById(defs, tpid);
      defs.appendChild(path);

      var textPath = this.nodeFactory(null, 'textPath');
      textPath.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + tpid);
      var align = style.labelAlign || OpenLayers.Renderer.defaultSymbolizer.labelAlign;
      label.setAttributeNS(null, 'text-anchor', OpenLayers.Renderer.SVG.LABEL_ALIGN[align[0]] || 'middle');
      textPath.setAttribute('startOffset', style.pathLabelXOffset || OpenLayers.Renderer.SVG.LABEL_STARTOFFSET[align[0]] || '50%');
      label.setAttributeNS(null, 'dominant-baseline', OpenLayers.Renderer.SVG.LABEL_ALIGN[align[1]] || 'central');
      if (style.pathLabelYOffset) label.setAttribute('dy', style.pathLabelYOffset);
      //textPath.setAttribute('method','stretch');
      //textPath.setAttribute('spacing','auto');

      textPath.textContent = style.pathLabel;
      label.appendChild(textPath);

      removeChildById(this.textRoot, node._featureId + '_' + suffix);
      this.textRoot.appendChild(label);
    };

    OpenLayers.Renderer.SVG.prototype.setStyle = function (node, style, options) {
      if (node._geometryClass === 'OpenLayers.Geometry.LineString' && style.pathLabel) {
        if (node._geometryClass === 'OpenLayers.Geometry.LineString' && style.pathLabel) {
          var drawOutline = !!style.labelOutlineWidth;
          // First draw text in halo color and size and overlay the
          // normal text afterwards
          if (drawOutline) {
            var outlineStyle = OpenLayers.Util.extend({}, style);
            outlineStyle.fontColor = outlineStyle.labelOutlineColor;
            outlineStyle.fontStrokeColor = outlineStyle.labelOutlineColor;
            outlineStyle.fontStrokeWidth = style.labelOutlineWidth;
            if (style.labelOutlineOpacity) outlineStyle.fontOpacity = style.labelOutlineOpacity;
            delete outlineStyle.labelOutlineWidth;
            this.pathText(node, outlineStyle, 'txtpath0');
          }
          this.pathText(node, style, 'txtpath');
          setStyle.apply(this, arguments);
        }
      } else setStyle.apply(this, arguments);
      return node;
    };

    //  *
    //  * Method: drawGeometry
    //  * Remove the textpath if no geometry is drawn.
    //  *
    //  * Parameters:
    //  * geometry - {<OpenLayers.Geometry>}
    //  * style - {Object}
    //  * featureId - {String}
    //  *
    //  * Returns:
    //  * {Boolean} true if the geometry has been drawn completely; null if
    //  *     incomplete; false otherwise

    var drawGeometry = OpenLayers.Renderer.SVG.prototype.drawGeometry;
    OpenLayers.Renderer.SVG.prototype.drawGeometry = function (geometry, style, id) {
      var rendered = drawGeometry.apply(this, arguments);
      if (rendered === false) {
        removeChildById(this.textRoot, id + '_txtpath');
        removeChildById(this.textRoot, id + '_txtpath0');
      }
      return rendered;
    };

    // *
    // * Method: eraseGeometry
    // * Erase a geometry from the renderer. In the case of a multi-geometry,
    // *     we cycle through and recurse on ourselves. Otherwise, we look for a
    // *     node with the geometry.id, destroy its geometry, and remove it from
    // *     the DOM.
    // *
    // * Parameters:
    // * geometry - {<OpenLayers.Geometry>}
    // * featureId - {String}

    var eraseGeometry = OpenLayers.Renderer.SVG.prototype.eraseGeometry;
    OpenLayers.Renderer.SVG.prototype.eraseGeometry = function (geometry, featureId) {
      eraseGeometry.apply(this, arguments);
      removeChildById(this.textRoot, featureId + '_txtpath');
      removeChildById(this.textRoot, featureId + '_txtpath0');
    };
  }
})();
