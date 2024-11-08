/* eslint-disable camelcase */
/* eslint-disable brace-style, curly, nonblock-statement-body-position, no-template-curly-in-string, func-names */
// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2024.11.08.000
// @description  Adds GIS layers in WME
// @author       MapOMatic
// @match         *://*.waze.com/*editor*
// @exclude       *://*.waze.com/user/editor*
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @require      https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js
// @require      https://update.greasyfork.org/scripts/506614/1441195/ESTreeProcessor.js
// @require      https://raw.githubusercontent.com/Tampermonkey/utils/refs/heads/main/requires/gh_2215_make_GM_xhr_more_parallel_again.js
// @connect      greasyfork.org
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @license      GNU GPLv3
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// @connect      *
// @connect tigerweb.geo.census.gov
// @connect 136.234.13.165
// @connect 216.167.160.20
// @connect 35.172.145.31
// @connect 52.37.30.30
// @connect 54.213.14.253
// @connect 65.183.210.212
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
// @connect ags10s1.dot.illinois.gov
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
// @connect apps.douglas.co.us
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
// @connect clearfieldco.org
// @connect cloud.longviewtexas.gov
// @connect cloudgis.bonnercountyid.gov
// @connect co.knox.il.us
// @connect coagisweb.cabq.gov
// @connect com.blountgis.org
// @connect conservationgis.alabama.gov
// @connect coopergis.integritygis.com
// @connect covgis.cityofvacaville.com
// @connect coweta-gis-web.coweta.ga.us
// @connect cowlitzgis.net
// @connect crgis.cedar-rapids.org
// @connect cteco.uconn.edu
// @connect currituckncgov.com
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
// @connect doniphangis.integritygis.com
// @connect dotapp9.dot.state.mn.us
// @connect douglasgis.integritygis.com
// @connect dtdapps.coloradodot.info
// @connect dungis.dunwoodyga.gov
// @connect dunklingis.integritygis.com
// @connect ecgis.co.ellis.tx.us
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
// @connect feature.geographic.texas.gov
// @connect feature.tnris.org
// @connect fieldstone.orangecountync.gov
// @connect firstmap.gis.delaware.gov
// @connect fremontgis.com
// @connect gasconadegis.integritygis.com
// @connect gcgis.guilfordcountync.gov
// @connect geaugarealink.co.geauga.oh.us
// @connect geo.co.harrison.ms.us
// @connect geo.dentoncad.com
// @connect geo.forsythco.com
// @connect geo.friscotexas.gov
// @connect geo.oit.ohio.gov
// @connect geo.sandag.org
// @connect geo.sanjoseca.gov
// @connect geo.tompkins-co.org
// @connect geo1.oit.ohio.gov
// @connect geo2.co.dodge.wi.us
// @connect geodata.hawaii.gov
// @connect geodata.md.gov
// @connect geodata.sarpy.com
// @connect geodataportal.net
// @connect geoint2.odessa-tx.gov
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
// @connect gis.bgky.org
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
// @connect gis.carboncounty.com
// @connect gis.cayugacounty.us
// @connect gis.cccounty.us
// @connect gis.ccgisonline.com
// @connect gis.ccgov.net
// @connect gis.ccpa.net
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
// @connect gis.clark.wa.gov
// @connect gis.clevelandtn.gov
// @connect gis.cmpdd.org
// @connect gis.co.benton.or.us
// @connect gis.co.berks.pa.us
// @connect gis.co.butler.pa.us
// @connect gis.co.carlton.mn.us
// @connect gis.co.carver.mn.us
// @connect gis.co.clarion.pa.us
// @connect gis.co.cumberland.nc.us
// @connect gis.co.douglas.or.us
// @connect gis.co.eau-claire.wi.us
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
// @connect gis.co.routt.co.us
// @connect gis.co.sangamon.il.us
// @connect gis.co.sauk.wi.us
// @connect gis.co.sherburne.mn.us
// @connect gis.co.stearns.mn.us
// @connect gis.co.stevens.mn.us
// @connect gis.co.tuscarawas.oh.us
// @connect gis.co.wadena.mn.us
// @connect gis.co.waseca.mn.us
// @connect gis.co.waushara.wi.us
// @connect gis.co.wood.wi.us
// @connect gis.co.ym.mn.gov
// @connect gis.cobbcounty.org
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
// @connect gis.dbqco.org
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
// @connect gis.dupageco.org
// @connect gis.duplincountync.com
// @connect gis.dutchessny.gov
// @connect gis.eastgreenwichri.com
// @connect gis.ebparks.org
// @connect gis.edgecombecountync.gov
// @connect gis.edmondok.gov
// @connect gis.elkocountynv.net
// @connect gis.elpasotexas.gov
// @connect gis.emmetcounty.org
// @connect gis.eriecountypa.gov
// @connect gis.fortlauderdale.gov
// @connect gis.franklincountyohio.gov
// @connect gis.franklincountypa.gov
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
// @connect gis.interdev.com
// @connect gis.inyoco.com
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
// @connect gis.linncounty.org
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
// @connect gis.mckeancountypa.gov
// @connect gis.mcohio.org
// @connect gis.mendocinocounty.org
// @connect gis.mercercountyohio.org
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
// @connect gis.salkeiz.k12.or.us
// @connect gis.sanjuanco.com
// @connect gis.santa-clarita.com
// @connect gis.santacruzcounty.us
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
// @connect gis.stlucieco.gov
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
// @connect gis.weatherfordtx.gov
// @connect gis.westplains.net
// @connect gis.whitfieldcountyga.com
// @connect gis.wilco.org
// @connect gis.wilkescounty.net
// @connect gis.willcountyillinois.com
// @connect gis.wilson-co.com
// @connect gis.wilsonnc.org
// @connect gis.wiu.edu
// @connect gis.worldviewsolutions.com
// @connect gis.wyo.gov
// @connect gis.yadkincountync.gov
// @connect gis.yanceycountync.org
// @connect gis.yavapaiaz.gov
// @connect gis.yolocounty.gov
// @connect gis.yolocounty.org
// @connect gis.yuba.org
// @connect gis1.acimap.us
// @connect gis1.georgetowncountysc.org
// @connect gis1.hamiltoncounty.in.gov
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
// @connect gis2.waukcogeo.com
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
// @connect gisp1.polkcountyiowa.gov
// @connect gisportal.champaignil.gov
// @connect gisportal.co.calaveras.ca.us
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
// @connect harrisonms.geopowered.com
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
// @connect map.stclairco.com
// @connect map.sussexcountyde.gov
// @connect map.wyoroad.info
// @connect map9.incog.org
// @connect mapd.kcmo.org
// @connect mapdata.baytown.org
// @connect mapdata.lasvegasnevada.gov
// @connect mapit.fortworthtexas.gov
// @connect mapitwest.fortworthtexas.gov
// @connect mapnew.polkpa.org
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
// @connect maps.clarkcountynv.gov
// @connect maps.claycountygov.com
// @connect maps.clermontauditor.org
// @connect maps.clintoncountypa.com
// @connect maps.co.blaine.id.us
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
// @connect maps.co.yellowstone.mt.gov
// @connect maps.coj.net
// @connect maps.collincountytx.gov
// @connect maps.countyofmerced.com
// @connect maps.crc.ga.gov
// @connect maps.ctmetro.org
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
// @connect maps.grcity.us
// @connect maps.groton-ct.gov
// @connect maps.grundyco.org
// @connect maps.hayward-ca.gov
// @connect maps.haywoodnc.net
// @connect maps.highlandvillage.org
// @connect maps.hokecounty.org
// @connect maps.huerfano.us
// @connect maps.huntsvilleal.gov
// @connect maps.indiana.edu
// @connect maps.iredellcountync.gov
// @connect maps.itos.uga.edu
// @connect maps.jocogov.org
// @connect maps.kpb.us
// @connect maps.kytc.ky.gov
// @connect maps.lacity.org
// @connect maps.lagrange-ga.org
// @connect maps.lakecountyil.gov
// @connect maps.laramiecounty.com
// @connect maps.lcwy.org
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
// @connect maps.muskegoncountygis.com
// @connect maps.nashville.gov
// @connect maps.nassauflpa.com
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
// @connect maps.raleighnc.gov
// @connect maps.richlandcountyoh.us
// @connect maps.rutherfordcountytn.gov
// @connect maps.sanmiguelcountyco.gov
// @connect maps.santa-clarita.com
// @connect maps.santabarbaraca.gov
// @connect maps.sccmo.org
// @connect maps.semogis.com
// @connect maps.sfdpw.org
// @connect maps.sgcity.org
// @connect maps.shelbyal.com
// @connect maps.slocity.org
// @connect maps.spartanburgcounty.org
// @connect maps.springfieldmo.gov
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
// @connect maps2.tucsonaz.gov
// @connect maps2.vcgov.org
// @connect maps6.stlouis-mo.gov
// @connect maps7.eriecounty.oh.gov
// @connect maps8.eriecounty.oh.gov
// @connect mapsdev.hamiltontn.gov
// @connect mapserv.cityofloveland.org
// @connect mapserv.mesquitenv.gov
// @connect mapservice.nmstatelands.org
// @connect mapservices.gis.saccounty.net
// @connect mapservices.pasda.psu.edu
// @connect mapservices.santacruzcountyaz.gov
// @connect mapservices.sccgov.org
// @connect mapservices.weather.noaa.gov
// @connect mapservices1.jeffco.us
// @connect mapservices2.jeffco.us
// @connect mariesgis.integritygis.com
// @connect mariongis.integritygis.com
// @connect mcdonaldgis.integritygis.com
// @connect mcggis.mcgtn.org
// @connect mcgis.mesacounty.us
// @connect mcgis.mohave.gov
// @connect mcgis4.monroecounty-fl.gov
// @connect mcmap2.montrosecounty.net
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
// @connect ndgishub.nd.gov
// @connect newtongis.integritygis.com
// @connect nhgeodata.unh.edu
// @connect northlake.halff.com
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
// @connect scgisa.starkcountyohio.gov
// @connect sdgis.sd.gov
// @connect secure.boonecountygis.com
// @connect sedaliagis.integritygis.com
// @connect see-eldorado.edcgov.us
// @connect sei.cloudsmartgis.com
// @connect seminolearcgis.seminolecountyfl.gov
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
// @connect summitmaps.summitoh.net
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
// @connect warrensburggis.integritygis.com
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
// @connect webgis.co.humboldt.ca.us
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
// @connect www.iqmap.org
// @connect www.landmarkgeospatial.com
// @connect www.laurenscountygis.org
// @connect www.mcgisweb.org
// @connect www.mchenrycountygis.org
// @connect www.midmogis.org
// @connect www.monroegis.org
// @connect www.mymanatee.org
// @connect www.ocgis.com
// @connect www.sciotocountyengineer.org
// @connect www.semogis.com
// @connect www.sgrcmaps.com
// @connect www.sjmap.org
// @connect www.skagitcounty.net
// @connect www.smithcountymapsite.org
// @connect www.tgisites.com
// @connect www.unionco.org
// @connect www.valorgis.com
// @connect www.waynecounty.com
// @connect www.wcgis.us
// @connect www.webgis.net
// @connect www1.cityofwebster.com
// @connect www2.ci.lancaster.oh.us
// @connect www2.pottcounty.org
// @connect www3.multco.us
// @connect www7.co.union.oh.us
// @connect xara1-4.cityofpetaluma.net
// @connect xmaps.indy.gov
// ==/UserScript==

/* global OpenLayers */
/* global W */
/* global WazeWrap */
/* global _ */
/* global turf */
/* global ESTreeProcessor */

(function main() {
    'use strict';

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
    const SCRIPT_AUTHOR = 'MapOMatic';
    // const LAYER_INFO_URL = 'https://spreadsheets.google.com/feeds/list/1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw/o7gusx3/public/values?alt=json';
    const LAYER_DEF_SPREADSHEET_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw/values/layerDefs';
    const API_KEY = 'YTJWNVBVRkplbUZUZVVGTlNXOWlVR1pWVjIxcE9VdHJNbVY0TTFoeWNrSlpXbFZuVmtWelRrMVVWUT09';
    const REQUEST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSevPQLz2ohu_LTge9gJ9Nv6PURmCmaSSjq0ayOJpGdRr2xI0g/viewform?usp=pp_url&entry.2116052852={username}';
    const DEC = s => atob(atob(s));
    const PRIVATE_LAYERS = { 'nc-henderson-sl-signs': ['the_cre8r', 'mapomatic'] }; // case sensitive -- use all lower case
    // const COUNTRIES = {
    //     'United States': {
    //         sheetId: '1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw',
    //         sheetLayerRange: 'layerDefs'
    //     }
    // };
    const DEFAULT_STYLE = {
        fillColor: '#000',
        pointRadius: 4,
        label: '${label}',
        strokeColor: '#ffa500',
        strokeOpacity: '0.95',
        strokeWidth: 1.5,
        fontColor: '#ffc520',
        fontSize: '13',
        labelOutlineColor: 'black',
        labelOutlineWidth: 3
    };
    const LAYER_STYLES = {
        cities: {
            fillOpacity: 0.3,
            fillColor: '#f65',
            strokeColor: '#f65',
            fontColor: '#f62'
        },
        forests_parks: {
            fillOpacity: 0.4,
            fillColor: '#585',
            strokeColor: '#484',
            fontColor: '#8b8'
        },
        milemarkers: {
            strokeColor: '#fff',
            fontColor: '#fff',
            fontWeight: 'bold',
            fillOpacity: 0,
            labelYOffset: 10,
            pointRadius: 2,
            fontSize: 12
        },
        parcels: {
            fillOpacity: 0,
            fillColor: '#ffa500'
        },
        points: {
            strokeColor: '#000',
            fontColor: '#0ff',
            fillColor: '#0ff',
            labelYOffset: -10,
            labelAlign: 'ct'
        },
        post_offices: {
            strokeColor: '#000',
            fontColor: '#f84',
            fillColor: '#f84',
            fontWeight: 'bold',
            labelYOffset: -10,
            labelAlign: 'ct'
        },
        state_parcels: {
            fillOpacity: 0,
            strokeColor: '#e62',
            fillColor: '#e62',
            fontColor: '#e73'
        },
        state_points: {
            strokeColor: '#000',
            fontColor: '#3cf',
            fillColor: '#3cf',
            labelYOffset: -10,
            labelAlign: 'ct'
        },
        road_labels: {
            strokeOpacity: 0,
            fillOpacity: 0,
            fontColor: '#faf'
        },
        structures: {
            fillOpacity: 0,
            strokeColor: '#f7f',
            fontColor: '#f7f'
        }
    };
    let ROAD_STYLE;
    function initRoadStyle() {
        ROAD_STYLE = new OpenLayers.Style({
            pointRadius: 12,
            fillColor: '#369',
            pathLabel: '${label}',
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
            fontSize: 11
        }, {
            context: {
                getOffset() { return -(W.map.getZoom() + 5); },
                getSmooth() { return ''; },
                getReadable() { return '1'; },
                getAlign() { return 'cb'; }
            }
        });
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
        r6: /^(\d+)\s+(.*)/
    };

    let _gisLayers = [];

    const _layerRefinements = [
        {
            id: 'us-post-offices',
            labelHeaderFields: ['LOCALE_NAME']
        }
    ];

    const STATES = {
        _states: [
            ['US (Country)', 'US', -1], ['Alabama', 'AL', 1], ['Alaska', 'AK', 2],
            ['American Samoa', 'AS', 60], ['Arizona', 'AZ', 4], ['Arkansas', 'AR', 5],
            ['California', 'CA', 6], ['Colorado', 'CO', 8], ['Connecticut', 'CT', 9],
            ['Delaware', 'DE', 10], ['District of Columbia', 'DC', 11], ['Florida', 'FL', 12],
            ['Georgia', 'GA', 13], ['Guam', 'GU', 66], ['Hawaii', 'HI', 15], ['Idaho', 'ID', 16],
            ['Illinois', 'IL', 17], ['Indiana', 'IN', 18], ['Iowa', 'IA', 19],
            ['Kansas', 'KS', 20], ['Kentucky', 'KY', 21], ['Louisiana', 'LA', 22],
            ['Maine', 'ME', 23], ['Maryland', 'MD', 24], ['Massachusetts', 'MA', 25],
            ['Michigan', 'MI', 26], ['Minnesota', 'MN', 27], ['Mississippi', 'MS', 28],
            ['Missouri', 'MO', 29], ['Montana', 'MT', 30], ['Nebraska', 'NE', 31],
            ['Nevada', 'NV', 32], ['New Hampshire', 'NH', 33], ['New Jersey', 'NJ', 34],
            ['New Mexico', 'NM', 35], ['New York', 'NY', 36], ['North Carolina', 'NC', 37],
            ['North Dakota', 'ND', 38], ['Northern Mariana Islands', 'MP', 69], ['Ohio', 'OH', 39],
            ['Oklahoma', 'OK', 40], ['Oregon', 'OR', 41], ['Pennsylvania', 'PA', 42],
            ['Puerto Rico', 'PR', 72], ['Rhode Island', 'RI', 44], ['South Carolina', 'SC', 45],
            ['South Dakota', 'SD', 46], ['Tennessee', 'TN', 47], ['Texas', 'TX', 48],
            ['Utah', 'UT', 49], ['Vermont', 'VT', 50], ['Virgin Islands', 'VI', 78],
            ['Virginia', 'VA', 51], ['Washington', 'WA', 53], ['West Virginia', 'WV', 54],
            ['Wisconsin', 'WI', 55], ['Wyoming', 'WY', 56]
        ],
        toAbbr(fullName) { return this._states.find(a => a[0] === fullName)[1]; },
        toFullName(abbr) { return this._states.find(a => a[1] === abbr)[0]; },
        toFullNameArray() { return this._states.map(a => a[0]); },
        toAbbrArray() { return this._states.map(a => a[1]); },
        fromId(id) { return this._states.find(a => a[2] === id); }
    };
    const DEFAULT_VISIBLE_AT_ZOOM = 18;
    const SETTINGS_STORE_NAME = 'wme_gis_layers_fl';
    const COUNTIES_URL = 'https://tigerweb.geo.census.gov/arcgis/rest/services/Census2020/State_County/MapServer/1/';
    const ALERT_UPDATE = false;
    const SCRIPT_NAME = GM_info.script.name;
    const SCRIPT_VERSION = GM_info.script.version;
    const DOWNLOAD_URL = 'https://greasyfork.org/scripts/369632-wme-gis-layers/code/WME%20GIS%20Layers.user.js';
    const SCRIPT_VERSION_CHANGES = [];
    let _mapLayer = null;
    let _roadLayer = null;
    let _settings = {};
    let _ignoreFetch = false;
    let _lastToken = {};

    const DEBUG = true;
    // function log(message) { console.log('GIS Layers:', message); }
    function logError(message) { console.error(`${SCRIPT_NAME}:`, message); }
    function logDebug(message) { if (DEBUG) console.debug(`${SCRIPT_NAME}:`, message); }
    // function logWarning(message) { console.warn('GIS Layers:', message); }

    let _layerSettingsDialog;

    class LayerSettingsDialog {
        constructor() {
            this._$titleText = $('<span>');
            this._$closeButton = $('<span>', {
                style: 'cursor:pointer;padding-left:4px;font-size:17px;color:#d6e6f3;float:right;',
                class: 'fa fa-window-close'
            }).click(() => this._onCloseButtonClick());
            this._$shiftUpButton = LayerSettingsDialog._createShiftButton('fa-angle-up').click(() => this._onShiftButtonClick(0, 1));
            this._$shiftLeftButton = LayerSettingsDialog._createShiftButton('fa-angle-left').click(() => this._onShiftButtonClick(-1, 0));
            this._$shiftRightButton = LayerSettingsDialog._createShiftButton('fa-angle-right').click(() => this._onShiftButtonClick(1, 0));
            this._$shiftDownButton = LayerSettingsDialog._createShiftButton('fa-angle-down').click(() => this._onShiftButtonClick(0, -1));
            this._$resetButton = $('<button>', {
                class: 'form-control',
                style: 'height: 24px; width: auto; padding: 2px 6px 0px 6px; display: inline-block; float: right;'
            }).text('Reset').click(() => this._onResetButtonClick());

            this._dialogDiv = $('<div>', {
                style: 'position: fixed; top: 15%; left: 400px; width: 200px; z-index: 100; background-color: #73a9bd; border-width: 1px; border-style: solid;'
                    + 'border-radius: 10px; box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.7); border-color: #50667b; padding: 4px;'
            }).append($('<div>').append( // The extra div is needed here. When the header text wraps, the main dialog div won't expand properly without it.
                // HEADER
                $('<div>', { style: 'border-radius:5px 5px 0px 0px; padding: 4px; color: #fff; font-weight: bold; text-align:left; cursor: default;' }).append(
                    this._$closeButton,
                    this._$titleText
                ),
                // BODY
                $('<div>', { style: 'border-radius: 5px; width: 100%; padding: 4px; background-color:#d6e6f3; display:inline-block; margin-right:5px;' }).append(
                    this._$resetButton,
                    $('<input>', {
                        type: 'radio', id: 'gisLayerShiftAmt1', name: 'gisLayerShiftAmt', value: '1', checked: 'checked'
                    }),
                    $('<label>', { for: 'gisLayerShiftAmt1' }).text('1m'),
                    $('<input>', {
                        type: 'radio', id: 'gisLayerShiftAmt10', name: 'gisLayerShiftAmt', value: '10', style: 'margin-left: 6px'
                    }),
                    $('<label>', { for: 'gisLayerShiftAmt10' }).text('10m'),
                    $('<div>', { style: 'padding: 4px' }).append(
                        $('<table>', { style: 'table-layout:fixed; width:60px; height:84px; margin-left:auto;margin-right:auto;' }).append(
                            $('<tr>', { style: 'width: 20px; height: 28px;' }).append(
                                $('<td>', { align: 'center' }),
                                $('<td>', { align: 'center' }).append(this._$shiftUpButton),
                                $('<td>', { align: 'center' })
                            ),
                            $('<tr>', { style: 'width: 20px; height: 28px;' }).append(
                                $('<td>', { align: 'center' }).append(this._$shiftLeftButton),
                                $('<td>', { align: 'center' }),
                                $('<td>', { align: 'center' }).append(this._$shiftRightButton)
                            ),
                            $('<tr>', { style: 'width: 20px; height: 28px;' }).append(
                                $('<td>', { align: 'center' }),
                                $('<td>', { align: 'center' }).append(this._$shiftDownButton),
                                $('<td>', { align: 'center' })
                            )
                        )
                    )
                )
            ));

            this.hide();
            this._dialogDiv.appendTo('body');

            if (typeof jQuery.ui !== 'undefined') {
                const that = this;
                this._dialogDiv.draggable({
                    // Gotta nuke the height setting the dragging inserts otherwise the panel cannot dynamically resize
                    stop() { that._dialogDiv.css('height', ''); }
                });
            }
        }

        get gisLayer() {
            return this._gisLayer;
        }

        set gisLayer(value) {
            if (value !== this._gisLayer) {
                this._gisLayer = value;
                this.title = value.name;
            }
        }

        get title() {
            return this._$titleText.text();
        }

        set title(value) {
            this._$titleText.text(value);
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

        _onCloseButtonClick() {
            this.hide();
        }

        _onShiftButtonClick(x, y) {
            const shiftAmount = this.getShiftAmount();
            x *= shiftAmount;
            y *= shiftAmount;
            this._shiftLayerFeatures(x, y);
            const { id } = this._gisLayer;
            let offset = _settings.getLayerSetting(id, 'offset');
            if (!offset) {
                offset = { x: 0, y: 0 };
                _settings.setLayerSetting(id, 'offset', offset);
            }
            offset.x += x;
            offset.y += y;
            saveSettingsToStorage();
        }

        _onResetButtonClick() {
            const offset = _settings.getLayerSetting(this._gisLayer.id, 'offset');
            if (offset) {
                this._shiftLayerFeatures(offset.x * -1, offset.y * -1);
                delete _settings.layers[this._gisLayer.id].offset;
                saveSettingsToStorage();
            }
        }

        _shiftLayerFeatures(x, y) {
            const layer = this.gisLayer.isRoadLayer ? _roadLayer : _mapLayer;
            layer.getFeaturesByAttribute('layerID', this.gisLayer.id).forEach(f => f.geometry.move(x, y));
            layer.redraw();
        }

        static _createShiftButton(fontAwesomeClass) {
            return $('<button>', {
                class: 'form-control',
                style: 'cursor:pointer;font-size:14px;padding: 3px;border-radius: 5px;width: 21px;height: 21px;'
            }).append(
                $('<i>', { class: 'fa', style: 'vertical-align: super' }).addClass(fontAwesomeClass)
            );
        }
    }

    function loadSettingsFromStorage() {
        const loadedSettings = $.parseJSON(localStorage.getItem(SETTINGS_STORE_NAME));
        const defaultSettings = {
            lastVersion: null,
            visibleLayers: [],
            onlyShowApplicableLayers: false,
            selectedStates: [],
            enabled: true,
            fillParcels: false,
            toggleHnsOnlyShortcut: '',
            toggleEnabledShortcut: '',
            oneTimeAlerts: {},
            layers: {}
        };
        _settings = loadedSettings || defaultSettings;
        Object.keys(defaultSettings).forEach(prop => {
            if (!_settings.hasOwnProperty(prop)) {
                _settings[prop] = defaultSettings[prop];
            }
        });

        _settings.getLayerSetting = function getLayerSetting(layerID, settingName) {
            const layerSettings = this.layers[layerID];
            if (!layerSettings) {
                return undefined;
            }
            return layerSettings[settingName];
        };
        _settings.setLayerSetting = function setLayerSetting(layerID, settingName, value) {
            let layerSettings = this.layers[layerID];
            if (!layerSettings) {
                layerSettings = {};
                this.layers[layerID] = layerSettings;
            }
            layerSettings[settingName] = value;
        };
    }

    function saveSettingsToStorage() {
        // Check for existance of action first, due to WME beta issue.
        if (W.accelerators.Actions.GisLayersAddrDisplay) {
            let keys = '';
            const { shortcut } = W.accelerators.Actions.GisLayersAddrDisplay;
            if (shortcut) {
                if (shortcut.altKey) keys += 'A';
                if (shortcut.shiftKey) keys += 'S';
                if (shortcut.ctrlKey) keys += 'C';
                if (keys.length) keys += '+';
                if (shortcut.keyCode) keys += shortcut.keyCode;
            }
            _settings.toggleHnsOnlyShortcut = keys;
        }
        if (W.accelerators.Actions.GisLayersToggleEnabled) {
            let keys = '';
            const { shortcut } = W.accelerators.Actions.GisLayersToggleEnabled;
            if (shortcut) {
                if (shortcut.altKey) keys += 'A';
                if (shortcut.shiftKey) keys += 'S';
                if (shortcut.ctrlKey) keys += 'C';
                if (keys.length) keys += '+';
                if (shortcut.keyCode) keys += shortcut.keyCode;
            }
            _settings.toggleEnabledShortcut = keys;
        }
        _settings.lastVersion = SCRIPT_VERSION;
        localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(_settings));
        logDebug('Settings saved');
    }

    function getOLMapExtent() {
        let extent = W.map.getExtent();
        if (Array.isArray(extent)) {
            extent = new OpenLayers.Bounds(extent);
            extent.transform('EPSG:4326', 'EPSG:3857');
        }
        return extent;
    }

    function getUrl(extent, gisLayer) {
        if (gisLayer.spatialReference) {
            const proj = new OpenLayers.Projection(`EPSG:${gisLayer.spatialReference}`);
            extent.transform(W.map.getProjectionObject(), proj);
        }
        let layerOffset = _settings.getLayerSetting(gisLayer.id, 'offset');
        if (!layerOffset) {
            layerOffset = { x: 0, y: 0 };
        }
        const geometry = {
            xmin: extent.left - layerOffset.x,
            ymin: extent.bottom - layerOffset.y,
            xmax: extent.right - layerOffset.x,
            ymax: extent.top - layerOffset.y,
            spatialReference: {
                wkid: gisLayer.spatialReference ? gisLayer.spatialReference : 102100,
                latestWkid: gisLayer.spatialReference ? gisLayer.spatialReference : 3857
            }
        };
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
        url += `&inSR=${gisLayer.spatialReference ? gisLayer.spatialReference : '102100'}`;
        url += '&outSR=3857&f=json';
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
            hash = ((hash << 5) - hash) + chr;
            // eslint-disable-next-line no-bitwise
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    function getCountiesUrl(extent) {
        const geometry = {
            xmin: extent.left,
            ymin: extent.bottom,
            xmax: extent.right,
            ymax: extent.top,
            spatialReference: { wkid: 102100, latestWkid: 3857 }
        };
        const url = `${COUNTIES_URL}/query?geometry=${encodeURIComponent(JSON.stringify(geometry))}`;
        return `${url}&outFields=BASENAME%2CSTATE&returnGeometry=false&spatialRel=esriSpatialRelIntersects`
            + '&geometryType=esriGeometryEnvelope&inSR=102100&outSR=3857&f=json';
    }

    let _countiesInExtent = [];

    function getFetchableLayers(getInvisible) {
        if (W.map.getZoom() < 12) return [];
        return _gisLayers.filter(gisLayer => {
            const isValidUrl = gisLayer.url && gisLayer.url.trim().length > 0;
            const isVisible = (getInvisible || _settings.visibleLayers.includes(gisLayer.id))
                && _settings.selectedStates.includes(gisLayer.state);
            const isInState = gisLayer.state === 'US' || _countiesInExtent.some(county => county.stateInfo[1] === gisLayer.state);
            // Be sure to use hasOwnProperty when checking this, since 0 is a valid value.
            const isValidZoom = getInvisible || W.map.getZoom() >= (gisLayer.hasOwnProperty('visibleAtZoom')
                ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM);
            return isValidUrl && isInState && isVisible && isValidZoom;
        });
    }

    function filterLayerCheckboxes() {
        const applicableLayers = getFetchableLayers(true).filter(layer => {
            const hasCounties = layer.hasOwnProperty('counties');
            return (hasCounties && layer.counties.some(countyName => _countiesInExtent.some(county => county.name === countyName.toLowerCase()
                && layer.state === county.stateInfo[1]))) || !hasCounties;
        });
        const statesToHide = STATES.toAbbrArray();

        _gisLayers.forEach(gisLayer => {
            const id = `#gis-layer-${gisLayer.id}-container`;
            if (!_settings.onlyShowApplicableLayers || applicableLayers.includes(gisLayer)) {
                $(id).show();
                $(`#gis-layers-for-${gisLayer.state}`).show();
                const idx = statesToHide.indexOf(gisLayer.state);
                if (idx > -1) statesToHide.splice(idx, 1);
            } else {
                $(id).hide();
            }
        });
        if (_settings.onlyShowApplicableLayers) {
            statesToHide.forEach(st => $(`#gis-layers-for-${st}`).hide());
        }
    }

    const ROAD_ABBR = [
        [/\bAVENUE$/, 'AVE'], [/\bCIRCLE$/, 'CIR'], [/\bCOURT$/, 'CT'], [/\bDRIVE$/, 'DR'],
        [/\bLANE$/, 'LN'], [/\bPARK$/, 'PK'], [/\bPLACE$/, 'PL'], [/\bROAD$/, 'RD'], [/\bSTREET$/, 'ST'],
        [/\bTERRACE$/, 'TER']
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
            r6: /^(\d+)\s+(.*)/
        }
    };

    function processLabel(gisLayer, item, displayLabelsAtZoom, area, isPolyLine = false) {
        let label = '';
        if (gisLayer.labelHeaderFields) {
            label = `${gisLayer.labelHeaderFields.map(
                fieldName => item.attributes[fieldName]
            ).join(' ').trim()}\n`;
        }
        if (W.map.getZoom() >= displayLabelsAtZoom || area >= 5000) {
            label += gisLayer.labelFields.map(
                fieldName => item.attributes[fieldName]
            ).join(' ').trim();
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
            if (label && [
                LAYER_STYLES.points, LAYER_STYLES.parcels, LAYER_STYLES.state_points,
                LAYER_STYLES.state_parcels
            ].includes(gisLayer.style)) {
                if (_settings.addrLabelDisplay === 'hn') {
                    const m = label.match(/^\d+/);
                    label = m ? m[0] : '';
                } else if (_settings.addrLabelDisplay === 'street') {
                    const m = label.match(/^(?:\d+\s)?(.*)/);
                    label = m ? m[1].trim() : '';
                }
                else if (_settings.addrLabelDisplay === 'none') {
                    label = '';
                }
            }
        }
        return label;
    }
    function processFeatures(data, token, gisLayer) {
        const features = [];
        if (data.skipIt) {
            // do nothing
        } else if (data.error) {
            logError(`Error in layer "${gisLayer.name}": ${data.error.message}`);
        } else {
            const items = data.features || [];
            if (!token.cancel) {
                let error = false;
                const distinctValues = [];
                items.forEach(item => {
                    let skipIt = false;
                    if (!token.cancel && !error) {
                        let feature;
                        let featureGeometry;
                        let area;
                        if (gisLayer.distinctFields) {
                            if (distinctValues.some(v => gisLayer.distinctFields.every(
                                fld => v[fld] === item.attributes[fld]
                            ))) {
                                skipIt = true;
                            } else {
                                const dist = {};
                                gisLayer.distinctFields.forEach(fld => (dist[fld] = item.attributes[fld]));
                                distinctValues.push(dist);
                            }
                        }
                        if (!skipIt) {
                            let isPolyLine = false;
                            let layerOffset = _settings.getLayerSetting(gisLayer.id, 'offset');
                            if (!layerOffset) {
                                layerOffset = { x: 0, y: 0 };
                            }
                            // Special handling for this layer, because it doesn't have a geometry property.
                            // Coordinates are stored in the attributes.
                            if (gisLayer.id === 'nc-richmond-co-pts') {
                                const pt = new OpenLayers.Geometry.Point(item.attributes.XCOOR, item.attributes.YCOOR);
                                pt.transform(W.map.getOLMap().displayProjection, W.map.getProjectionObject());
                                item.geometry = pt;
                            }
                            if (item.geometry) {
                                if (item.geometry.x) {
                                    featureGeometry = new OpenLayers.Geometry.Point(
                                        item.geometry.x + layerOffset.x,
                                        item.geometry.y + layerOffset.y
                                    );
                                } else if (item.geometry.points) {
                                    // @TODO Fix for multiple points instead of just grabbing first.
                                    featureGeometry = new OpenLayers.Geometry.Point(
                                        item.geometry.points[0][0] + layerOffset.x,
                                        item.geometry.points[0][1] + layerOffset.y
                                    );
                                } else if (item.geometry.rings) {
                                    const rings = [];
                                    item.geometry.rings.forEach(ringIn => {
                                        const pnts = [];
                                        for (let i = 0; i < ringIn.length; i++) {
                                            pnts.push(new OpenLayers.Geometry.Point(
                                                ringIn[i][0] + layerOffset.x,
                                                ringIn[i][1] + layerOffset.y
                                            ));
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
                                    // We have to handle polylines differently since each item can have multiple features.
                                    // In terms of ArcGIS, each feature's geometry can have multiple paths.  For instance
                                    // a single road can be broken into parts that are physically not connected to each other.
                                    const hasVisibleAtZoom = gisLayer.hasOwnProperty('visibleAtZoom');
                                    const hasLabelsVisibleAtZoom = gisLayer.hasOwnProperty('labelsVisibleAtZoom');
                                    const displayLabelsAtZoom = hasLabelsVisibleAtZoom ? gisLayer.labelsVisibleAtZoom
                                        : (hasVisibleAtZoom ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM) + 1;
                                    const label = processLabel(gisLayer, item, displayLabelsAtZoom, area, true);

                                    // Use Turf library to clip the geometry to the screen bounds.
                                    // This allows labels to stay in view on very long roads.
                                    const mls = turf.multiLineString(item.geometry.paths);
                                    const e = getOLMapExtent();
                                    const bbox = [e.left, e.bottom, e.right, e.top];
                                    const clipped = turf.bboxClip(mls, bbox);
                                    if (clipped.geometry.type === 'LineString') {
                                        item.geometry.paths = [clipped.geometry.coordinates];
                                    } else if (clipped.geometry.type === 'MultiLineString') {
                                        item.geometry.paths = clipped.geometry.coordinates;
                                    }

                                    item.geometry.paths.forEach(path => {
                                        const pointList = [];
                                        path.forEach(point => pointList.push(new OpenLayers.Geometry.Point(
                                            point[0] + layerOffset.x,
                                            point[1] + layerOffset.y
                                        )));
                                        featureGeometry = new OpenLayers.Geometry.LineString(pointList);
                                        featureGeometry.skipDupeCheck = true;

                                        const attributes = {
                                            layerID: gisLayer.id,
                                            label
                                        };

                                        const lineFeature = new OpenLayers.Feature.Vector(featureGeometry, attributes);
                                        features.push(lineFeature);
                                    });
                                    isPolyLine = true;
                                } else {
                                    logDebug(`Unexpected feature type in layer: ${JSON.stringify(item)}`);
                                    logError(`Error: Unexpected feature type in layer "${gisLayer.name}"`);
                                    error = true;
                                }
                                if (!error && !isPolyLine) {
                                    const hasVisibleAtZoom = gisLayer.hasOwnProperty('visibleAtZoom');
                                    const hasLabelsVisibleAtZoom = gisLayer.hasOwnProperty('labelsVisibleAtZoom');
                                    const displayLabelsAtZoom = hasLabelsVisibleAtZoom ? gisLayer.labelsVisibleAtZoom
                                        : (hasVisibleAtZoom ? gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM) + 1;
                                    const label = processLabel(gisLayer, item, displayLabelsAtZoom, area);
                                    const attributes = {
                                        layerID: gisLayer.id,
                                        label
                                    };
                                    feature = new OpenLayers.Feature.Vector(featureGeometry, attributes);
                                    features.push(feature);
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
                if (!f1.geometry.skipDupeCheck) {
                    const c1 = f1.geometry.getCentroid();
                    let labels = [f1.attributes.label];
                    for (let j = i + 1; j < features.length; j++) {
                        const f2 = features[j];
                        if (!f2.geometry.skipDupeCheck && f2.geometry.getCentroid().distanceTo(c1) < 1) {
                            features.splice(j, 1);
                            labels.push(f2.attributes.label);
                            j--;
                        }
                    }
                    labels = _.uniq(labels);
                    if (labels.length > 1) {
                        labels.forEach((label, idx) => {
                            label = label.replace(/\n/g, ' ').replace(/\s{2,}/, ' ').replace(/\bUNIT\s.{1,5}$/i, '').trim();
                            ROAD_ABBR.forEach(abbr => (label = label.replace(abbr[0], abbr[1])));
                            labels[idx] = label;
                        });
                        labels = _.uniq(labels);
                        labels.sort();
                        if (labels.length > 12) {
                            const len = labels.length;
                            labels = labels.slice(0, 10);
                            labels.push(`(${len - 10} more...)`);
                        }
                        f1.attributes.label = _.uniq(labels).join('\n');
                    } else {
                        let { label } = f1.attributes;
                        ROAD_ABBR.forEach(abbr => (label = label.replace(abbr[0], abbr[1])));
                        f1.attributes.label = label;
                    }
                }
            }

            const layer = gisLayer.isRoadLayer ? _roadLayer : _mapLayer;
            layer.removeFeatures(layer.getFeaturesByAttribute('layerID', gisLayer.id));
            layer.addFeatures(features);

            if (features.length) {
                $(`label[for="gis-layer-${gisLayer.id}"]`).css({ color: '#00a009' });
            }
        }
    } // END processFeatures()

    function fetchFeatures() {
        if (_ignoreFetch) return;
        if (W.map.getZoom() < 12) {
            filterLayerCheckboxes();
            return;
        }
        _lastToken.cancel = true;
        _lastToken = { cancel: false, features: [], layersProcessed: 0 };
        $('.gis-state-layer-label').css({ color: '#777' });

        let _layersCleared = false;

        // if (layersToFetch.length) {
        const extent = getOLMapExtent();
        GM_xmlhttpRequest({
            url: getCountiesUrl(extent),
            method: 'GET',
            onload(res) {
                if (res.status < 400) {
                    const data = $.parseJSON(res.responseText);
                    if (data.error) {
                        logError(`Error in US Census counties data: ${data.error.message}`);
                    } else {
                        _countiesInExtent = data.features.map(feature => {
                            const name = feature.attributes.BASENAME.toLowerCase();
                            const stateInfo = STATES.fromId(parseInt(feature.attributes.STATE, 10));
                            return { name, stateInfo };
                        });
                        logDebug(`US Census counties: ${_countiesInExtent.map(c => `${c.name} ${c.stateInfo[1]}`).join(', ')}`);

                        let layersToFetch;
                        if (!_layersCleared) {
                            _layersCleared = true;
                            layersToFetch = getFetchableLayers();

                            // Remove features of any layers that won't be mapped.
                            _gisLayers.forEach(gisLayer => {
                                if (!layersToFetch.includes(gisLayer)) {
                                    _mapLayer.removeFeatures(_mapLayer.getFeaturesByAttribute('layerID', gisLayer.id));
                                    _roadLayer.removeFeatures(_roadLayer.getFeaturesByAttribute('layerID', gisLayer.id));
                                }
                            });
                        }

                        layersToFetch = layersToFetch.filter(layer => !layer.hasOwnProperty('counties')
                            || layer.counties.some(countyName => _countiesInExtent.some(county => county.name === countyName.toLowerCase()
                                && layer.state === county.stateInfo[1])));
                        filterLayerCheckboxes();
                        logDebug(`Fetching ${layersToFetch.length} layers...`);
                        logDebug(layersToFetch);
                        layersToFetch.forEach(gisLayer => {
                            const url = getUrl(extent, gisLayer);
                            GM_xmlhttpRequest({
                                url,
                                context: _lastToken,
                                method: 'GET',
                                onload(res2) {
                                    if (res2.status < 400) { // Handle stupid issue where http 4## is considered success
                                        processFeatures($.parseJSON(res2.responseText), res2.context, gisLayer);
                                    } else {
                                        logDebug(`HTTP request error: ${JSON.stringify(res2)}`);
                                        logError(`Could not fetch layer "${gisLayer.id}". Request returned ${res2.status}`);
                                    }
                                },
                                onerror(res3) {
                                    logDebug(`xmlhttpRequest error:${JSON.stringify(res3)}`);
                                    logError(`Could not fetch layer "${gisLayer.id}". An error was thrown.`);
                                }
                            });
                        });
                    }
                } else {
                    logDebug(`HTTP request error: ${JSON.stringify(res)}`);
                    logError(`Could not fetch counties from US Census site.  Request returned ${res.status}`);
                }
            },
            onerror(res) {
                logDebug(`xmlhttpRequest error:${JSON.stringify(res)}`);
                logError('Could not fetch counties from US Census site.  An error was thrown.');
            }
        });
    }

    function showScriptInfoAlert() {
        /* Check version and alert on update */
        if (ALERT_UPDATE && SCRIPT_VERSION !== _settings.lastVersion) {
            // alert(SCRIPT_VERSION_CHANGES);
            let releaseNotes = '';
            releaseNotes += '<p>What\'s New:</p>';
            if (SCRIPT_VERSION_CHANGES.length > 0) {
                releaseNotes += '<ul>';
                for (let idx = 0; idx < SCRIPT_VERSION_CHANGES.length; idx++)
                    releaseNotes += `<li>${SCRIPT_VERSION_CHANGES[idx]}`;
                releaseNotes += '</ul>';
            }
            else {
                releaseNotes += '<ul><li>Nothing major.</ul>';
            }
            WazeWrap.Interface.ShowScriptUpdate(GM_info.script.name, SCRIPT_VERSION, releaseNotes, GF_URL);
        }
    }

    function setEnabled(value) {
        _settings.enabled = value;
        saveSettingsToStorage();
        _mapLayer.setVisibility(value);
        _roadLayer.setVisibility(value);
        const color = value ? '#00bd00' : '#ccc';
        $('span#gis-layers-power-btn').css({ color });
        if (value) fetchFeatures();
        $('#layer-switcher-item_gis_layers').prop('checked', value);
    }

    function onGisLayerToggleChanged() {
        const checked = $(this).is(':checked');
        const layerId = $(this).data('layer-id');
        const idx = _settings.visibleLayers.indexOf(layerId);
        if (checked) {
            const gisLayer = _gisLayers.find(l => l.id === layerId);
            if (gisLayer.oneTimeAlert) {
                const lastAlertHash = _settings.oneTimeAlerts[layerId];
                const newAlertHash = hashString(gisLayer.oneTimeAlert);
                if (lastAlertHash !== newAlertHash) {
                    // alert(`Layer: ${gisLayer.name}\n\nMessage:\n${gisLayer.oneTimeAlert}`);
                    WazeWrap.Alerts.info(GM_info.script.name, `Layer: ${gisLayer.name}<br><br>Message:<br>${gisLayer.oneTimeAlert}`);
                    _settings.oneTimeAlerts[layerId] = newAlertHash;
                    saveSettingsToStorage();
                }
            }
            if (idx === -1) _settings.visibleLayers.push(layerId);
        } else if (idx > -1) _settings.visibleLayers.splice(idx, 1);
        if (!_ignoreFetch) {
            saveSettingsToStorage();
            fetchFeatures();
        }
    }

    function onOnlyShowApplicableLayersChanged() {
        _settings.onlyShowApplicableLayers = $(this).is(':checked');
        saveSettingsToStorage();
        fetchFeatures();
    }

    function onStateCheckChanged(evt) {
        const state = evt.data;
        const idx = _settings.selectedStates.indexOf(state);
        if (evt.target.checked) {
            if (idx === -1) _settings.selectedStates.push(state);
        } else if (idx > -1) _settings.selectedStates.splice(idx, 1);
        if (!_ignoreFetch) {
            saveSettingsToStorage();
            initLayersTab();
            fetchFeatures();
        }
    }

    function onLayerCheckboxChanged(checked) {
        setEnabled(checked);
    }

    function setFillParcels(doFill) {
        [LAYER_STYLES.parcels, LAYER_STYLES.state_parcels].forEach(style => {
            style.fillOpacity = doFill ? 0.2 : 0;
        });
    }

    function onFillParcelsCheckedChanged(evt) {
        const { checked } = evt.target;
        setFillParcels(checked);
        _settings.fillParcels = checked;
        saveSettingsToStorage();
        fetchFeatures();
    }

    function onMapMove() {
        if (_settings.enabled) fetchFeatures();
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
        $($target.children()[0])
            .toggleClass('fa fa-fw fa-chevron-down')
            .toggleClass('fa fa-fw fa-chevron-right');
        const $div = $($target.siblings()[0]);
        if ($div.css('display') === 'none') {
            $div.css('display', 'block');
        } else {
            $div.css('display', 'none');
        }
    }

    function doToggleABunch(evt, checkState) {
        _ignoreFetch = true;
        $(evt.target).closest('fieldset').find('input').prop('checked', !checkState).trigger('click');
        _ignoreFetch = false;
        saveSettingsToStorage();
        if (evt.data) initLayersTab();
        fetchFeatures();
    }

    function onSelectAllClick(evt) {
        doToggleABunch(evt, true);
    }

    function onSelectNoneClick(evt) {
        doToggleABunch(evt, false);
    }

    function onGisAddrDisplayChange(evt) {
        _settings.addrLabelDisplay = evt.target.value;
        saveSettingsToStorage();
        fetchFeatures();
    }

    function onAddressDisplayShortcutKey() {
        if (!$('#gisAddrDisplay-hn').is(':checked')) {
            $('#gisAddrDisplay-hn').click();
        } else {
            $('#gisAddrDisplay-all').click();
        }
    }

    function onToggleGisLayersShortcutKey() {
        setEnabled(!_settings.enabled);
    }

    function initLayer() {
        const rules = _gisLayers.map(gisLayer => new OpenLayers.Rule({
            filter: new OpenLayers.Filter.Comparison({
                type: OpenLayers.Filter.Comparison.EQUAL_TO,
                property: 'layerID',
                value: gisLayer.id
            }),
            symbolizer: gisLayer.style
        }));

        setFillParcels(_settings.fillParcels);

        const style = new OpenLayers.Style(DEFAULT_STYLE, { rules });
        let existingLayer;
        let uniqueName;

        uniqueName = 'wmeGISLayersDefault';
        existingLayer = W.map.layers.find(l => l.uniqueName === uniqueName); // Note: W.map.getLayerByUniqueName(...) isn't working.
        if (existingLayer) W.map.removeLayer(existingLayer);
        _mapLayer = new OpenLayers.Layer.Vector('GIS Layers - Default', {
            uniqueName,
            styleMap: new OpenLayers.StyleMap(style)
        });

        uniqueName = 'wmeGISLayersRoads';
        existingLayer = W.map.layers.find(l => l.uniqueName === uniqueName); // Note: W.map.getLayerByUniqueName(...) isn't wworking.
        if (existingLayer) W.map.removeLayer(existingLayer);
        _roadLayer = new OpenLayers.Layer.Vector('GIS Layers - Roads', {
            uniqueName,
            styleMap: new OpenLayers.StyleMap(ROAD_STYLE)
        });

        _mapLayer.setVisibility(_settings.enabled);
        _roadLayer.setVisibility(_settings.enabled);

        W.map.addLayers([_roadLayer, _mapLayer]);
    } // END InitLayer

    function initLayersTab() {
        const user = W.loginManager.user.attributes.userName.toLowerCase();
        const states = _.uniq(_gisLayers.map(l => l.state)).filter(st => _settings.selectedStates.includes(st));

        $('#panel-gis-state-layers').empty().append(
            $('<div>', { class: 'controls-container' }).css({ 'padding-top': '0px' }).append(
                $('<input>', { type: 'checkbox', id: 'only-show-applicable-gis-layers' }).change(
                    onOnlyShowApplicableLayersChanged
                ).prop('checked', _settings.onlyShowApplicableLayers),
                $('<label>', { for: 'only-show-applicable-gis-layers' })
                    .css({ 'white-space': 'pre-line' }).text('Only show applicable layers')
            ),
            $('.gis-layers-state-checkbox:checked').length === 0
                ? $('<div>').text('Turn on layer categories in the Settings tab.')
                : states.map(st => $('<fieldset>', {
                    id: `gis-layers-for-${st}`,
                    style: 'border:1px solid silver;padding:4px;border-radius:4px;-webkit-padding-before: 0;'
                }).append(
                    $('<legend>', { style: 'margin-bottom:0px;border-bottom-style:none;width:auto;' })
                        .click(onChevronClick).append(
                            $('<i>', {
                                class: 'fa fa-fw fa-chevron-down',
                                style: 'cursor: pointer;font-size: 12px;margin-right: 4px'
                            }),
                            $('<span>', {
                                style: 'font-size:14px;font-weight:600;text-transform: uppercase; cursor: pointer'
                            }).text(STATES.toFullName(st))
                        ),
                    $('<div>', { id: `${st}_body` }).append(
                        $('<div>').css({ 'font-size': '11px' }).append(
                            $('<span>').append(
                                'Select ',
                                $('<a>', { href: '#' })
                                    .text('All')
                                    .click(onSelectAllClick),
                                ' / ',
                                $('<a>', { href: '#' })
                                    .text('None')
                                    .click(onSelectNoneClick)
                            )
                        ),
                        $('<div>', { class: 'controls-container', style: 'padding-top:0px;' }).append(
                            _gisLayers.filter(l => (l.state === st && (!PRIVATE_LAYERS.hasOwnProperty(l.id)
                                || PRIVATE_LAYERS[l.id].includes(user))))
                                .map(gisLayer => {
                                    const id = `gis-layer-${gisLayer.id}`;
                                    return $('<div>', { class: 'controls-container', id: `${id}-container` })
                                        .css({ 'padding-top': '0px', display: 'block' })
                                        .append(
                                            $('<input>', { type: 'checkbox', id })
                                                .data('layer-id', gisLayer.id)
                                                .change(onGisLayerToggleChanged)
                                                .prop('checked', _settings.visibleLayers.includes(gisLayer.id)),
                                            $('<label>', { for: id, class: 'gis-state-layer-label' })
                                                .css({ 'white-space': 'pre-line' })
                                                .text(`${gisLayer.name}${gisLayer.restrictTo ? ' *' : ''}`)
                                                .attr('title', gisLayer.restrictTo ? `Restricted to: ${gisLayer.restrictTo}` : '')
                                                .contextmenu(evt => {
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
                ))
        );
    }

    function initSettingsTab() {
        const states = _.uniq(_gisLayers.map(l => l.state));
        const createRadioBtn = (name, value, text, checked) => {
            const id = `${name}-${value}`;
            return [$('<input>', {
                type: 'radio', id, name, value
            }).prop('checked', checked), $('<label>', { for: id }).text(text).css({
                paddingLeft: '15px', marginRight: '4px'
            })];
        };
        $('#panel-gis-layers-settings').empty().append(
            $('<fieldset>', {
                style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;margin-top:-8px;'
            }).append(
                $('<legend>', {
                    style: 'margin-bottom:0px;border-bottom-style:none;width:auto;'
                }).append($('<span>', {
                    style: 'font-size:14px;font-weight:600;text-transform: uppercase;'
                }).text('Labels')),
                $('<div>', { id: 'labelSettings' }).append(
                    $('<div>', { class: 'controls-container' }).css({ 'padding-top': '2px' }).append(
                        $('<label>', { style: 'font-weight:normal;' }).text('Addresses:'),
                        createRadioBtn('gisAddrDisplay', 'hn', 'HN', _settings.addrLabelDisplay === 'hn'),
                        createRadioBtn('gisAddrDisplay', 'street', 'Street', _settings.addrLabelDisplay === 'street'),
                        createRadioBtn('gisAddrDisplay', 'all', 'Both', _settings.addrLabelDisplay === 'all'),
                        createRadioBtn('gisAddrDisplay', 'none', 'None', _settings.addrLabelDisplay === 'none'),
                        $('<i>', {
                            class: 'waze-tooltip',
                            id: 'gisAddrDisplayInfo',
                            'data-toggle': 'tooltip',
                            style: 'margin-left:8px; font-size:12px',
                            'data-placement': 'bottom',
                            title: `This may not work properly for all layers. Please report issues to ${SCRIPT_AUTHOR}.`
                        }).tooltip()
                    )
                )
            ),
            $('<fieldset>', {
                style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;'
            }).append(
                $('<legend>', {
                    style: 'margin-bottom:0px;border-bottom-style:none;width:auto;'
                }).append($('<span>', {
                    style: 'font-size:14px;font-weight:600;text-transform: uppercase;'
                }).text('Layer Categories')),
                $('<div>', { id: 'states_body' }).append(
                    $('<div>').css({ 'font-size': '11px' }).append(
                        $('<span>').append(
                            'Select ',
                            $('<a>', { href: '#' }).text('All').click(true, onSelectAllClick),
                            ' / ',
                            $('<a>', { href: '#' }).text('None').click(true, onSelectNoneClick)
                        )
                    ),
                    $('<div>', { class: 'controls-container', style: 'padding-top:0px;' }).append(
                        states.map(st => {
                            const fullName = STATES.toFullName(st);
                            const id = `gis-layer-enable-state-${st}`;
                            return $('<div>', { class: 'controls-container' })
                                .css({ 'padding-top': '0px', display: 'block' })
                                .append(
                                    $('<input>', { type: 'checkbox', id, class: 'gis-layers-state-checkbox' })
                                        .change(st, onStateCheckChanged)
                                        .prop('checked', _settings.selectedStates.includes(st)),
                                    $('<label>', { for: id }).css({ 'white-space': 'pre-line', color: '#777' }).text(fullName)
                                );
                        })
                    )
                )
            )
        );
        $('#panel-gis-layers-settings').append(
            $('<fieldset>', { style: 'border:1px solid silver;padding:8px;border-radius:4px;-webkit-padding-before: 0;' })
                .append(
                    $('<legend>', { style: 'margin-bottom:0px;border-bottom-style:none;width:auto;' })
                        .append(
                            $('<span>', { style: 'font-size:14px;font-weight:600;text-transform: uppercase;' })
                                .text('Appearance')
                        ),
                    $('<div>', { class: 'controls-container' }).css({ 'padding-top': '2px' }).append(
                        $('<input>', { type: 'checkbox', id: 'fill-parcels' })
                            .change(onFillParcelsCheckedChanged)
                            .prop('checked', _settings.fillParcels),
                        $('<label>', { for: 'fill-parcels' }).css({ 'white-space': 'pre-line', color: '#777' }).text('Fill parcels')
                    )
                )
        );
        $('input[name=gisAddrDisplay]').change(onGisAddrDisplayChange);
    }

    async function initTab(firstCall = true) {
        if (firstCall) {
            const { user } = W.loginManager;
            const content = $('<div>').append(
                $('<span>', { style: 'font-size:14px;font-weight:600' }).text('GIS Layers'),
                $('<span>', { style: 'font-size:11px;margin-left:10px;color:#aaa;' }).text(GM_info.script.version),
                // <a href="https://docs.google.com/forms/d/e/1FAIpQLSevPQLz2ohu_LTge9gJ9Nv6PURmCmaSSjq0ayOJpGdRr2xI0g/viewform?usp=pp_url&entry.2116052852=test" target="_blank" style="color: #6290b7;font-size: 12px;margin-left: 8px;" title="Report broken layers, bugs, request new layers, script features">Report an issue</a>
                $('<a>', {
                    href: REQUEST_FORM_URL.replace('{username}', user.attributes.userName),
                    target: '_blank',
                    style: 'color: #6290b7;font-size: 12px;margin-left: 8px;',
                    title: 'Report broken layers, bugs, request new layers, script features'
                }).text('Submit a request'),
                $('<span>', {
                    id: 'gis-layers-refresh',
                    class: 'fa fa-refresh',
                    style: 'float: right;',
                    'data-toggle': 'tooltip',
                    title: 'Pull new layer info from master sheet and refresh all layers.'
                }),
                '<ul class="nav nav-tabs">'
                + '<li class="active"><a data-toggle="tab" href="#panel-gis-state-layers" aria-expanded="true">'
                + 'Layers'
                + '</a></li>'
                + '<li><a data-toggle="tab" href="#panel-gis-layers-settings" aria-expanded="true">'
                + 'Settings'
                + '</a></li> '
                + '</ul>',
                $('<div>', { class: 'tab-content', style: 'padding:8px;padding-top:2px' }).append(
                    $('<div>', { class: 'tab-pane active', id: 'panel-gis-state-layers', style: 'padding: 4px 0px 0px 0px; width: auto' }),
                    $('<div>', { class: 'tab-pane', id: 'panel-gis-layers-settings', style: 'padding: 4px 0px 0px 0px; width: auto' })
                )
            ).html();

            const powerButtonColor = _settings.enabled ? '#00bd00' : '#ccc';
            const labelText = $('<div>').append(
                $('<span>', {
                    class: 'fa fa-power-off',
                    id: 'gis-layers-power-btn',
                    style: `margin-right: 5px;cursor: pointer;color: ${powerButtonColor};font-size: 13px;`,
                    title: 'Toggle GIS Layers'
                }),
                $('<span>', { title: 'GIS Layers' }).text('GIS-L')
            ).html();

            const { tabLabel, tabPane } = W.userscripts.registerSidebarTab('GIS-L');
            tabLabel.innerHTML = labelText;
            tabPane.innerHTML = content;
            // Fix tab content div spacing.
            $(tabPane).parent().css({ width: 'auto', padding: '6px' });

            await W.userscripts.waitForElementConnected(tabPane);
            $('#gis-layers-power-btn').click(evt => {
                setEnabled(!_settings.enabled);

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

            WazeWrap.Interface.AddLayerCheckbox('Display', 'GIS Layers', _settings.enabled, onLayerCheckboxChanged);
            // W.map.events.register('moveend', null, onMapMove);
            WazeWrap.Events.register('moveend', null, onMapMove);
            showScriptInfoAlert();
        } else {
            initTab(firstCall);
        }
    }

    async function loadSpreadsheetAsync() {
        let data;
        try {
            data = await $.getJSON(`${LAYER_DEF_SPREADSHEET_URL}?${DEC(API_KEY)}`);
        } catch (err) {
            throw new Error(`Spreadsheet call failed. (${err.status}: ${err.statusText})`);
        }
        const [[minVersion], fieldNames, ...layerDefRows] = data.values;
        const REQUIRED_FIELD_NAMES = [
            'state', 'name', 'id', 'counties', 'url', 'where', 'labelFields',
            'processLabel', 'style', 'visibleAtZoom', 'labelsVisibleAtZoom', 'enabled',
            'restrictTo', 'oneTimeAlert'
        ];
        const result = { error: null };
        const checkFieldNames = fldName => fieldNames.includes(fldName);

        if (SCRIPT_VERSION < minVersion) {
            result.error = `Script must be updated to at least version ${
                minVersion} before layer definitions can be loaded.`;
        } else if (fieldNames.length < REQUIRED_FIELD_NAMES.length) {
            result.error = `Expected ${
                REQUIRED_FIELD_NAMES.length} columns in layer definition data.  Spreadsheet returned ${
                fieldNames.length}.`;
        } else if (!REQUIRED_FIELD_NAMES.every(fldName => checkFieldNames(fldName))) {
            result.error = 'Script expected to see the following column names in the layer '
                + `definition spreadsheet:\n${REQUIRED_FIELD_NAMES.join(', ')}\n`
                + `But the spreadsheet returned these:\n${fieldNames.join(', ')}`;
        }
        if (!result.error) {
            layerDefRows.filter(row => row.length).forEach(layerDefRow => {
                const layerDef = { enabled: '0' };
                fieldNames.forEach((fldName, fldIdx) => {
                    let value = layerDefRow[fldIdx];
                    if (value !== undefined && value.trim().length > 0) {
                        value = value.trim();
                        if (fldName === 'counties' || fldName === 'labelFields') {
                            value = value.split(',').map(item => item.trim());
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
                            if (LAYER_STYLES.hasOwnProperty(value)) {
                                value = LAYER_STYLES[value];
                            } else if (!layerDef.isRoadLayer) {
                                // If style is not defined, try to read in as JSON (custom style)
                                try {
                                    value = JSON.parse(value);
                                } catch (ex) {
                                    // ignore error
                                }
                            }
                        } else if (fldName === 'state') {
                            value = value ? value.toUpperCase() : value;
                        } else if (fldName === 'restrictTo') {
                            try {
                                const { user } = W.loginManager;
                                const values = value.split(',').map(v => v.trim().toLowerCase());
                                layerDef.notAllowed = !values.some(entry => {
                                    const rankMatch = entry.match(/^r(\d)(\+am)?$/);
                                    if (rankMatch) {
                                        if (rankMatch[1] <= (user.attributes.rank + 1) && (!rankMatch[2] || user.attributes.isAreaManager)) {
                                            return true;
                                        }
                                    } else if (entry === 'am' && user.attributes.isAreaManager) {
                                        return true;
                                    } else if (entry === user.attributes.userName.toLowerCase()) {
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
                const enabled = layerDef.enabled && !['0', 'false', 'no', 'n'].includes(layerDef.enabled.toString().trim().toLowerCase());
                if (!layerDef.notAllowed && (enabled || layerDef.restrictTo)) {
                    _gisLayers.push(layerDef);
                }
            });
        }

        return result;
    }

    function loadScriptUpdateMonitor() {
        try {
            const updateMonitor = new WazeWrap.Alerts.ScriptUpdateMonitor(SCRIPT_NAME, SCRIPT_VERSION, DOWNLOAD_URL, GM_xmlhttpRequest);
            updateMonitor.start();
        } catch (ex) {
            // Report, but don't stop if ScriptUpdateMonitor fails.
            logError(ex);
        }
    }

    async function init(firstCall = true) {
        _gisLayers = [];
        if (firstCall) {
            labelProcessingGlobalVariables.W = W;
            loadScriptUpdateMonitor();
            initRoadStyle();
            loadSettingsFromStorage();
            installPathFollowingLabels();
            new WazeWrap.Interface.Shortcut(
                'GisLayersAddrDisplay',
                'Toggle HN-only address labels (GIS Layers)',
                'layers',
                'layersToggleGisAddressLabelDisplay',
                _settings.toggleHnsOnlyShortcut,
                onAddressDisplayShortcutKey,
                null
            ).add();
            new WazeWrap.Interface.Shortcut(
                'GisLayersToggleEnabled',
                'Toggle display of GIS Layers',
                'layers',
                'layersToggleGisLayersEnabled',
                _settings.toggleEnabledShortcut,
                onToggleGisLayersShortcutKey,
                null
            ).add();
            window.addEventListener('beforeunload', saveSettingsToStorage, false);
            _layerSettingsDialog = new LayerSettingsDialog();
        }
        const t0 = performance.now();
        try {
            const result = await loadSpreadsheetAsync();
            if (result.error) {
                logError(result.error);
                return;
            }
            _layerRefinements.forEach(layerRefinement => {
                const layerDef = _gisLayers.find(layerDef2 => layerDef2.id === layerRefinement.id);
                if (layerDef) {
                    Object.keys(layerRefinement).forEach(fldName => {
                        const value = layerRefinement[fldName];
                        if (fldName !== 'id' && layerDef.hasOwnProperty(fldName)) {
                            logDebug(`The "${fldName}" property of layer "${
                                layerDef.id}" has a value hardcoded in the script, and also defined in the spreadsheet.`
                                + ' The spreadsheet value takes precedence.');
                        } else if (value) layerDef[fldName] = value;
                    });
                } else {
                    logDebug(`Refined layer "${layerRefinement.id}" does not have a corresponding layer defined`
                        + ' in the spreadsheet.  It can probably be removed from the script.');
                }
            });
            logDebug(`Loaded ${_gisLayers.length} layer definitions in ${Math.round(performance.now() - t0)} ms.`);
            initGui(firstCall);
            fetchFeatures();
            $('#gis-layers-refresh').removeClass('fa-spin').css({ cursor: 'pointer' });
            logDebug('Initialized.');
        } catch (err) {
            logError(err);
        }
    }

    function onWmeReady() {
        if (WazeWrap && WazeWrap.Ready) {
            logDebug('Initializing...');
            init();
        } else {
            setTimeout(onWmeReady, 100);
        }
    }

    function bootstrap() {
        if (typeof W === 'object' && W.userscripts?.state.isReady) {
            onWmeReady();
        } else {
            document.addEventListener('wme-ready', onWmeReady, { once: true });
        }
    }

    bootstrap();

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
            if (c) for (var i = 0; i < c.length; i++) {
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
        OpenLayers.Renderer.SVG.LABEL_STARTOFFSET = { 'l': '0%', 'r': '100%', 'm': '50%' };

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
                    p += ' ' + (pts[i].x + s1 * dx / s2) + ' ' + (pts[i].y + s1 * dy / s2);
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
                    var drawOutline = (!!style.labelOutlineWidth);
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
