/* eslint-disable camelcase */
/* eslint-disable brace-style, curly, nonblock-statement-body-position, no-template-curly-in-string, func-names */
// ==UserScript==
// @name         WME GIS Layers
// @namespace    https://greasyfork.org/users/45389
// @version      2026.02.17.01
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
// @require      https://update.greasyfork.org/scripts/542477/1742119/wmeGisLBBOX.js
// @connect      greasyfork.org
// @connect      github.io
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @grant        GM_setClipboard
// @license      GNU GPLv3
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// @connect      *
// @connect tigerweb.geo.census.gov
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
// @connect ags.kitsap.gov
// @connect ags.myokaloosa.com
// @connect ags.roseville.ca.us
// @connect ags1.wgxtreme.com
// @connect ags2maps.srcity.org
// @connect ags3.scgov.net
// @connect al03montrevenue.kcsgis.com
// @connect al61portal.kcsgis.com
// @connect aldotgis.dot.state.al.us
// @connect alleganygis.allconet.org
// @connect alphagis.alpharetta.ga.us
// @connect andrewgis.integritygis.com
// @connect anrmaps.vermont.gov
// @connect ansoncountygis.com
// @connect api.milton.ca
// @connect apnsgis1.apsu.edu
// @connect apnsgis4.apsu.edu
// @connect app.mdt.mt.gov
// @connect apps.alamance-nc.com
// @connect apps.fs.usda.gov
// @connect apps.lickingcounty.gov
// @connect apps.saltlakecounty.gov
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
// @connect arcgis2.catawbacountync.gov
// @connect arcgis4.roktech.net
// @connect arcgis5.roktech.net
// @connect arcgisce2.co.valencia.nm.us
// @connect arcgisserver.digital.mass.gov
// @connect arcgisserver.lincolncountync.gov
// @connect arcgisserver.maine.gov
// @connect arcgisserver2.morpc.org
// @connect arcgissrv.cityofbartlesville.org
// @connect arcgiswap02.ci.temple.tx.us
// @connect arcgisweb.carteretcountync.gov
// @connect arcgisweb.countyofnewaygo.com
// @connect arcgisweb.welland.ca
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
// @connect atlas.unioncountync.gov
// @connect audraingis.integritygis.com
// @connect badcompany.sagis.org
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
// @connect carto.nationalmap.gov
// @connect cassweb.casscountymn.gov
// @connect cc-gisgw.clintoncountygov.com
// @connect cceo.co.comal.tx.us
// @connect ccgis.cayugacounty.us
// @connect ccmap.cccounty.us
// @connect cecilmaps.org
// @connect charitongis.integritygis.com
// @connect cherokeegis.integritygis.com
// @connect christiangis.integritygis.com
// @connect clarindagis.integritygis.com
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
// @connect cw2.townofclaytonnc.org
// @connect dadegis.integritygis.com
// @connect dallasgis.integritygis.com
// @connect data.calgary.ca
// @connect data.cityofchicago.org
// @connect data.ct.gov
// @connect data.edmonton.ca
// @connect data.novascotia.ca
// @connect data.winnipeg.ca
// @connect data.wsdot.wa.gov
// @connect data1.digitaldataservices.com
// @connect dc-web-2.co.douglas.mn.us
// @connect dcgis.dekalbcountyga.gov
// @connect dcgis.org
// @connect dcimapapps.countyofdane.com
// @connect dekalbgis.integritygis.com
// @connect delivery.maps.gov.bc.ca
// @connect delta.co.clatsop.or.us
// @connect dev.wilsonvillemaps.com
// @connect doniphangis.integritygis.com
// @connect douglasgis.integritygis.com
// @connect dtdapps.coloradodot.info
// @connect dungis.dunwoodyga.gov
// @connect dunklingis.integritygis.com
// @connect egis.baltimorecity.gov
// @connect egis.dot.ga.gov
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
// @connect fcgis.frederickcountymd.gov
// @connect feature.geographic.texas.gov
// @connect feature.tnris.org
// @connect fieldstone.orangecountync.gov
// @connect fragis.fra.dot.gov
// @connect fremontgis.com
// @connect gasconadegis.integritygis.com
// @connect gateway.maps.rlid.org
// @connect gcgis.guilfordcountync.gov
// @connect geaugarealink.co.geauga.oh.us
// @connect geo.co.butler.pa.us
// @connect geo.co.harrison.ms.us
// @connect geo.dentoncad.com
// @connect geo.forsythco.com
// @connect geo.lloydminster.ca
// @connect geo.sandag.org
// @connect geo.sanjoseca.gov
// @connect geo.skagitcountywa.gov
// @connect geo.statcan.gc.ca
// @connect geo.tompkins-co.org
// @connect geo.vbgov.com
// @connect geo2.co.dodge.wi.us
// @connect geodata.hawaii.gov
// @connect geodata.sarpy.com
// @connect geodataportal.net
// @connect geonb.snb.ca
// @connect geoportal.kelowna.ca
// @connect geopower.jws.com
// @connect geoservices.mapleridge.ca
// @connect geospatial.alberta.ca
// @connect geoweb.dnv.org
// @connect geoweb.martin.fl.us
// @connect geoweb02.ci.richmond.ca.us
// @connect gis-2.warrencountyny.gov
// @connect gis-erd-der.gnb.ca
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
// @connect gis.ashecountygov.com
// @connect gis.ashevillenc.gov
// @connect gis.ashland-ohio.com
// @connect gis.atlantaga.gov
// @connect gis.auburnalabama.org
// @connect gis.auglaizecounty.org
// @connect gis.azdot.gov
// @connect gis.bakersfieldcity.us
// @connect gis.baycountyfl.gov
// @connect gis.beaufortcountysc.gov
// @connect gis.beaumonttexas.gov
// @connect gis.belcogis.com
// @connect gis.bentoncountyar.gov
// @connect gis.berkeleycountysc.gov
// @connect gis.bigstonecounty.gov
// @connect gis.bladenco.org
// @connect gis.blaircountypa.gov
// @connect gis.blm.gov
// @connect gis.blueearthcountymn.gov
// @connect gis.bransonmo.gov
// @connect gis.brevardfl.gov
// @connect gis.broomecountyny.gov
// @connect gis.browncountywi.gov
// @connect gis.buncombecounty.org
// @connect gis.burkenc.org
// @connect gis.burleighco.com
// @connect gis.burlesontx.com
// @connect gis.burnaby.ca
// @connect gis.buttecounty.net
// @connect gis.caldwellcountync.org
// @connect gis.campbellca.gov
// @connect gis.campbellcountywy.gov
// @connect gis.carboncounty.com
// @connect gis.cccounty.us
// @connect gis.ccgisonline.com
// @connect gis.ccpa.net
// @connect gis.cedarfalls.com
// @connect gis.cedarhilltx.com
// @connect gis.cherokeecountyga.gov
// @connect gis.chestermere.ca
// @connect gis.chippewa.mn
// @connect gis.chisagocountymn.gov
// @connect gis.ci.janesville.wi.us
// @connect gis.ci.mcminnville.or.us
// @connect gis.ci.waco.tx.us
// @connect gis.ci.woodburn.or.us
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
// @connect gis.co.cumberland.nc.us
// @connect gis.co.door.wi.us
// @connect gis.co.douglas.or.us
// @connect gis.co.eau-claire.wi.us
// @connect gis.co.fairfield.oh.us
// @connect gis.co.fillmore.mn.us
// @connect gis.co.grand.co.us
// @connect gis.co.grant.mn.us
// @connect gis.co.grant.wi.gov
// @connect gis.co.green-lake.wi.us
// @connect gis.co.hubbard.mn.us
// @connect gis.co.isanti.mn.us
// @connect gis.co.josephine.or.us
// @connect gis.co.kittitas.wa.us
// @connect gis.co.linn.or.us
// @connect gis.co.marshall.mn.us
// @connect gis.co.mille-lacs.mn.us
// @connect gis.co.nezperce.id.us
// @connect gis.co.oneida.wi.us
// @connect gis.co.ottawa.oh.us
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
// @connect gis.co.waushara.wi.us
// @connect gis.co.ym.mn.gov
// @connect gis.colorado.gov
// @connect gis.coloradosprings.gov
// @connect gis.columbiacountyga.gov
// @connect gis.columbiacountymaps.com
// @connect gis.columbiasc.gov
// @connect gis.columbusga.org
// @connect gis.concordnh.gov
// @connect gis.cookcountyil.gov
// @connect gis.cookeville-tn.org
// @connect gis.corvallisoregon.gov
// @connect gis.cosb.us
// @connect gis.countyofnapa.org
// @connect gis.countyofriverside.us
// @connect gis.cranstonri.org
// @connect gis.cravencountync.gov
// @connect gis.crcog.org
// @connect gis.crookcounty.wy.gov
// @connect gis.crowwing.us
// @connect gis.cstx.gov
// @connect gis.cuyahogacounty.us
// @connect gis.danville-va.gov
// @connect gis.dauphincounty.org
// @connect gis.daviecountync.gov
// @connect gis.deerparktx.gov
// @connect gis.dekalbcountyga.gov
// @connect gis.delcopa.gov
// @connect gis.dentoncounty.gov
// @connect gis.dgcoks.gov
// @connect gis.districtiii.org
// @connect gis.donaanacounty.org
// @connect gis.dot.nv.gov
// @connect gis.dot.state.oh.us
// @connect gis.dubuquecounty.us
// @connect gis.dupageco.org
// @connect gis.duplinnc.gov
// @connect gis.dutchessny.gov
// @connect gis.eastgreenwichri.com
// @connect gis.edgecombecountync.gov
// @connect gis.edmondok.gov
// @connect gis.elkocountynv.net
// @connect gis.elpasotexas.gov
// @connect gis.emmetcounty.org
// @connect gis.erie.gov
// @connect gis.eriecountypa.gov
// @connect gis.fortlauderdale.gov
// @connect gis.franklincountyohio.gov
// @connect gis.fultoncountyoh.com
// @connect gis.fwb.org
// @connect gis.fwp.mt.gov
// @connect gis.gallatin.mt.gov
// @connect gis.gallupnm.us
// @connect gis.garrettcounty.org
// @connect gis.gastoncountync.gov
// @connect gis.gcgovny.com
// @connect gis.gcrc.org
// @connect gis.gilacountyaz.gov
// @connect gis.gocolumbiamo.com
// @connect gis.goshencounty.org
// @connect gis.gptx.org
// @connect gis.grandcountyutah.net
// @connect gis.greenecountyohio.gov
// @connect gis.greensboro-nc.gov
// @connect gis.gscplanning.com
// @connect gis.haldimandcounty.ca
// @connect gis.hardeecounty.net
// @connect gis.harnett.org
// @connect gis.hartford.gov
// @connect gis.hcpafl.org
// @connect gis.hennepin.us
// @connect gis.huntingtonbeachca.gov
// @connect gis.iberiagov.net
// @connect gis.idwr.idaho.gov
// @connect gis.indot.in.gov
// @connect gis.indy.gov
// @connect gis.interdev.com
// @connect gis.iowadot.gov
// @connect gis.itd.idaho.gov
// @connect gis.jacksonnc.org
// @connect gis.johnsoncitytn.org
// @connect gis.johnsoncountyiowa.gov
// @connect gis.kalamazoocity.org
// @connect gis.kanawhacountyassessor.com
// @connect gis.kaufmancounty.net
// @connect gis.kcgov.us
// @connect gis.kcmn.us
// @connect gis.kentcountyde.gov
// @connect gis.kentcountymi.gov
// @connect gis.kirkwoodmo.org
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
// @connect gis.lethbridge.ca
// @connect gis.lincoln.ne.gov
// @connect gis.lincolncountysd.gov
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
// @connect gis.mercercountypa.gov
// @connect gis.mesaaz.gov
// @connect gis.mifflincountypa.gov
// @connect gis.minnehahacounty.org
// @connect gis.miottawa.org
// @connect gis.missoulacounty.us
// @connect gis.mocogeo.org
// @connect gis.modestogov.com
// @connect gis.mono.ca.gov
// @connect gis.montgomeryal.gov
// @connect gis.moorecountync.gov
// @connect gis.moosejaw.ca
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
// @connect gis.orrsc.com
// @connect gis.osceola.org
// @connect gis.outagamie.org
// @connect gis.owensboro.org
// @connect gis.pandai.com
// @connect gis.pcmn.us
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
// @connect gis.princeedwardisland.ca
// @connect gis.putnam-fl.com
// @connect gis.qac.org
// @connect gis.qualicumbeach.com
// @connect gis.randolphcountync.gov
// @connect gis.rapides911.org
// @connect gis.rcgov.org
// @connect gis.rdck.bc.ca
// @connect gis.renvillecountymn.gov
// @connect gis.rileycountyks.gov
// @connect gis.rocklin.ca.us
// @connect gis.rowancountync.gov
// @connect gis.rrnm.gov
// @connect gis.rtcsnv.com
// @connect gis.rutherfordcountync.gov
// @connect gis.sanjuanco.com
// @connect gis.santacruzcounty.us
// @connect gis.santamonica.gov
// @connect gis.saskatchewan.ca
// @connect gis.sawyerwi.org
// @connect gis.sccwi.gov
// @connect gis.shastacounty.gov
// @connect gis.shelbycountytn.gov
// @connect gis.showmeboone.com
// @connect gis.siouxfalls.gov
// @connect gis.slocounty.ca.gov
// @connect gis.sncoapps.us
// @connect gis.southkingstownri.com
// @connect gis.steele.mn
// @connect gis.stlouiscountymn.gov
// @connect gis.stmaryscountymd.gov
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
// @connect gis.ucdavis.edu
// @connect gis.ulstercountyny.gov
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
// @connect gis2.arlingtontx.gov
// @connect gis2.co.dakota.mn.us
// @connect gis2.co.marathon.wi.us
// @connect gis2.co.ozaukee.wi.us
// @connect gis2.gworks.com
// @connect gis2.idaho.gov
// @connect gis2.lawrenceks.org
// @connect gis2.orangeburgcounty.org
// @connect gis2.sandyspringsga.gov
// @connect gis2.sheboygancounty.com
// @connect gis2.totaland.com
// @connect gis21svweb.lincolnparish.org
// @connect gis3.cdmsmithgis.com
// @connect gis3.cmpdd.org
// @connect gis3.gwinnettcounty.com
// @connect gis3.gworks.com
// @connect gis3.montgomerycountymd.gov
// @connect gis3.richmondnc.com
// @connect gis4.montgomerycountymd.gov
// @connect gis4.polkcountyiowa.gov
// @connect gisago-qa.mcgi.state.mi.us
// @connect gisago.mcgi.state.mi.us
// @connect gisapp.adcogov.org
// @connect gisapp.mahoningcountyoh.gov
// @connect gisapps.cityofchicago.org
// @connect gisapps.rileycountyks.gov
// @connect gisapps.wicomicocounty.org
// @connect gisapps1.mapoakland.com
// @connect gisarcweb.jeffersoncountywv.org
// @connect gisblue.mdc.mo.gov
// @connect gisccapps.charlestoncounty.org
// @connect gisdata.alleghenycounty.us
// @connect gisdata.dot.ca.gov
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
// @connect gisext.saskatoon.ca
// @connect gisext2.cnv.org
// @connect gishost.cdmsmithgis.com
// @connect gisinfo.co.portage.wi.gov
// @connect gisinfo.co.walworth.wi.us
// @connect gisinfo.lawrencevillega.org
// @connect gisinfo.wichitafallstx.gov
// @connect gismap.augustaga.gov
// @connect gismap.cityofboise.org
// @connect gismap.co.juneau.wi.us
// @connect gismap.co.marshall.mn.us
// @connect gismap.co.norman.mn.us
// @connect gismap.co.red-lake.mn.us
// @connect gismapping.stafford.va.us
// @connect gismaps.cityofboise.org
// @connect gismaps.cityofgreer.org
// @connect gismaps.columbiapa.org
// @connect gismaps.flower-mound.com
// @connect gismaps.fultoncountyga.gov
// @connect gismaps.guelph.ca
// @connect gismaps.hctra.org
// @connect gismaps.kingcounty.gov
// @connect gismaps.redwoodcity.org
// @connect gismaps.sedgwickcounty.org
// @connect gismaps.wichita.gov
// @connect gismapserver.leegov.com
// @connect gismo.spokanecounty.org
// @connect gisonline.greenvillenc.gov
// @connect gisp.geneseeny.gov
// @connect gisp.mcgi.state.mi.us
// @connect gisportal.calaverascounty.gov
// @connect gisportal.champaignil.gov
// @connect gisportal.co.jefferson.id.us
// @connect gisportal.co.madison.il.us
// @connect gisportal.co.warren.oh.us
// @connect gisportal.dorchestercounty.net
// @connect gisportal.dot.ct.gov
// @connect gisportal.fnsb.gov
// @connect gisportal.ircgov.com
// @connect gisportal.nct911.org
// @connect gisportal.ontarioca.gov
// @connect gisportal.stocktonca.gov
// @connect gisportal.whitehorse.ca
// @connect gispro.porterco.org
// @connect gisprod10.co.fresno.ca.us
// @connect gisprodops.chesco.org
// @connect gispub.cityofaspen.com
// @connect gispub.co.washington.or.us
// @connect gispublic.barrie.ca
// @connect gispublic.co.lake.ca.us
// @connect gispw.coloradosprings.gov
// @connect gisrevprxy.seattle.gov
// @connect gisserver.christiancountymo.gov
// @connect gisservice.cityofmesquite.com
// @connect gisservicemt.gov
// @connect gisservices.chathamcountync.gov
// @connect gisservices.chathamnc.org
// @connect gisservices.co.anoka.mn.us
// @connect gisservices.douglasnv.us
// @connect gisservices.halff.com
// @connect gisservices.its.ny.gov
// @connect gisservices.oakgov.com
// @connect gisservices.surrey.ca
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
// @connect gisweb.hendersoncountync.gov
// @connect gisweb.jeffcowa.us
// @connect gisweb.miamidade.gov
// @connect gisweb.pwcva.gov
// @connect gisweb.wycokck.org
// @connect gisweb2014.gordoncounty.org
// @connect giswebservices.countygp.ab.ca
// @connect giswww.westchestergov.com
// @connect gweb01.co.olmsted.mn.us
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
// @connect intervector.leoncountyfl.gov
// @connect jeffarcgis.jeffersoncountywi.gov
// @connect joplingis.org
// @connect k3gis.com
// @connect kanplan.ksdot.gov
// @connect kartes.cerema.fr
// @connect kcgis.kentoncounty.org
// @connect kenhagis.kenha.co.ke
// @connect kygisserver.ky.gov
// @connect lacledegis.integritygis.com
// @connect lafayettegis.integritygis.com
// @connect landrecords.greencountywi.org
// @connect lawrencegis.integritygis.com
// @connect lcenggis.co.lucas.oh.us
// @connect lcmaps.lanecounty.org
// @connect lee-arcgis.leecountync.gov
// @connect lincolngis.integritygis.com
// @connect lio.milwaukeecountywi.gov
// @connect livingstongis.integritygis.com
// @connect location.cabarruscounty.us
// @connect logis.loudoun.gov
// @connect lrs.co.columbia.wi.us
// @connect lucity.sbpg.net
// @connect macongis.integritygis.com
// @connect madison.rexburg.org
// @connect madisongis.cityofalbany.net
// @connect manitowocmaps.info
// @connect map.cariboord.bc.ca
// @connect map.claycountymn.gov
// @connect map.co.clear-creek.co.us
// @connect map.co.clearwater.mn.us
// @connect map.co.merced.ca.us
// @connect map.co.thurston.wa.us
// @connect map.co.trempealeau.wi.us
// @connect map.coppelltx.gov
// @connect map.dancgis.org
// @connect map.eaglecounty.us
// @connect map.haltonhills.ca
// @connect map.ksh.hu
// @connect map.newberrycounty.net
// @connect map.oshawa.ca
// @connect map.pikepass.com
// @connect map.rdn.bc.ca
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
// @connect mapping.burlington.ca
// @connect mapping.chilliwack.com
// @connect mapping.kenoshacountywi.gov
// @connect mapping.mitchellcountync.gov
// @connect mapping.modot.org
// @connect mappmycity.ca
// @connect maps.abbotsford.ca
// @connect maps.adaok.com
// @connect maps.alexandercountync.gov
// @connect maps.alexandriava.gov
// @connect maps.austintexas.gov
// @connect maps.banff.ca
// @connect maps.bannockcounty.us
// @connect maps.bayfieldcounty.wi.gov
// @connect maps.bcad.org
// @connect maps.belmont.gov
// @connect maps.berkeleywv.org
// @connect maps.boonecountyil.org
// @connect maps.bossierparishgis.org
// @connect maps.bouldercounty.org
// @connect maps.brazoriacountytx.gov
// @connect maps.brla.gov
// @connect maps.brookhavenga.gov
// @connect maps.bryantx.gov
// @connect maps.butlercountyauditor.org
// @connect maps.cambridge.ca
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
// @connect maps.civ.quest
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
// @connect maps.cvrd.ca
// @connect maps.dancgis.org
// @connect maps.dcad.org
// @connect maps.delco-gis.org
// @connect maps.deltacountyco.gov
// @connect maps.deschutes.org
// @connect maps.desotocountyms.gov
// @connect maps.dot.nh.gov
// @connect maps.dotd.la.gov
// @connect maps.douglascountyga.gov
// @connect maps.douglascountywa.net
// @connect maps.dsm.city
// @connect maps.durham.ca
// @connect maps.elbertcounty-co.gov
// @connect maps.etcog.org
// @connect maps.evansvillegis.com
// @connect maps.fayetteville-ar.gov
// @connect maps.fishers.in.us
// @connect maps.flathead.mt.gov
// @connect maps.floridadisaster.org
// @connect maps.fredericksburgva.gov
// @connect maps.garfield-county.com
// @connect maps.garlandtx.gov
// @connect maps.gov.bc.ca
// @connect maps.grcity.us
// @connect maps.groton-ct.gov
// @connect maps.grundyco.org
// @connect maps.haldimandcounty.on.ca
// @connect maps.hayward-ca.gov
// @connect maps.haywoodcountync.gov
// @connect maps.highlandvillage.org
// @connect maps.hokecounty.org
// @connect maps.huerfano.us
// @connect maps.huntsvilleal.gov
// @connect maps.iredellcountync.gov
// @connect maps.itos.uga.edu
// @connect maps.jocogov.org
// @connect maps.kamloops.ca
// @connect maps.kytc.ky.gov
// @connect maps.lacity.org
// @connect maps.lagrange-ga.org
// @connect maps.lakecountyil.gov
// @connect maps.laramiecounty.com
// @connect maps.lcauditor.com
// @connect maps.lcwy.org
// @connect maps.lebanontn.org
// @connect maps.lex-co.com
// @connect maps.lexingtonky.gov
// @connect maps.libertymo.gov
// @connect maps.linkgis.org
// @connect maps.london.ca
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
// @connect maps.ottawa.ca
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
// @connect maps.sgcityutah.gov
// @connect maps.shelbyal.com
// @connect maps.slocity.org
// @connect maps.springfieldmo.gov
// @connect maps.steamboatsprings.net
// @connect maps.stlouisco.com
// @connect maps.swaincountync.gov
// @connect maps.tippecanoe.in.gov
// @connect maps.townofcary.org
// @connect maps.udot.utah.gov
// @connect maps.vancouver.ca
// @connect maps.vcgi.vermont.gov
// @connect maps.ventura.org
// @connect maps.victoria.ca
// @connect maps.victoriatx.org
// @connect maps.vilascountywi.gov
// @connect maps.vtrans.vermont.gov
// @connect maps.wake.gov
// @connect maps.washco-md.net
// @connect maps.washcowisco.gov
// @connect maps.whiterockcity.ca
// @connect maps1.brampton.ca
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
// @connect mapservice.gov.in
// @connect mapservice.nmstatelands.org
// @connect mapservices.crd.bc.ca
// @connect mapservices.gis.saccounty.net
// @connect mapservices.gov.yk.ca
// @connect mapservices.nps.gov
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
// @connect mde.geodata.md.gov
// @connect mdgeodata.md.gov
// @connect millergis.integritygis.com
// @connect mms.hursttx.gov
// @connect moberlygis.integritygis.com
// @connect mobile.alamedaca.gov
// @connect moniteaugis.integritygis.com
// @connect morgangis.integritygis.com
// @connect mw1.delta.ca
// @connect mycity2.houstontx.gov
// @connect nanmap.nanaimo.ca
// @connect navigator.state.or.us
// @connect newtongis.integritygis.com
// @connect nhgeodata.unh.edu
// @connect nobgis.cityofnoblesville.org
// @connect northlake.halff.com
// @connect nsgiwa.novascotia.ca
// @connect nspdcwebsrv.csuchico.edu
// @connect oc17maps.co.oconto.wi.us
// @connect ocgis4.ocfl.net
// @connect oncorng.co.ontario.ny.us
// @connect opengis.regina.ca
// @connect operationserver.ci.henderson.nc.us
// @connect orfmaps.norfolk.gov
// @connect osagegis.integritygis.com
// @connect pagis.org
// @connect pamap.putnam-fl.gov
// @connect parcelmap.ashtabulacounty.us
// @connect parcelviewer.geodecisions.com
// @connect pascogis.pascocountyfl.net
// @connect pgis.plantation.org
// @connect phelpsgis.integritygis.com
// @connect polaris2.mecklenburgcountync.gov
// @connect polkgis.integritygis.com
// @connect portal.carolinabeach.org
// @connect portal.carson.org
// @connect portal.elmoreco.org
// @connect portal.henrico.gov
// @connect portal.niagarafalls.ca
// @connect portal.oakridgetn.gov
// @connect programs.iowadnr.gov
// @connect propertyviewer.andersoncountysc.org
// @connect proxy2.roktech.net
// @connect psportal.harrisoncountywv.com
// @connect pubgis.ci.lubbock.tx.us
// @connect public.co.wasco.or.us
// @connect public1.co.waupaca.wi.us
// @connect publicmap01.co.st-clair.il.us
// @connect publicmaps.co.goodhue.mn.us
// @connect publicmaps.txkusa.org
// @connect pulaskigis.integritygis.com
// @connect putnamcountygis.com
// @connect pwmaps.cityofloveland.org
// @connect pwmaps.reno.gov
// @connect rallsgis.integritygis.com
// @connect raygis.integritygis.com
// @connect rc-arcgis01.co.rice.mn.us
// @connect roads.udot.utah.gov
// @connect rockgis.co.rock.wi.us
// @connect rockgis.rockfordil.gov
// @connect romefloyd.agdmaps.com
// @connect rptsgisweb.oswegocounty.com
// @connect salinegis.integritygis.com
// @connect saludacountysc.net
// @connect sccgis.santacruzcountyca.gov
// @connect scgis.summitoh.net
// @connect scgisa.starkcountyohio.gov
// @connect sdgis.sd.gov
// @connect secure.boonecountygis.com
// @connect sedaliagis.integritygis.com
// @connect see-eldorado.edcgov.us
// @connect server.boundarycountyid.org
// @connect server1.mapxpress.net
// @connect server2.mapxpress.net
// @connect services.aadnc-aandc.gc.ca
// @connect services.arcgis.com
// @connect services.co.schuylkill.pa.us
// @connect services.gis.ca.gov
// @connect services.gisqatar.org.qa
// @connect services.integritygis.com
// @connect services.mh-gis.com
// @connect services.nconemap.gov
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
// @connect smgis.sanmarcostx.gov
// @connect smithvillegis.integritygis.com
// @connect smpesri.scdot.org
// @connect socogis.sonomacounty.ca.gov
// @connect spatial.gishost.com
// @connect spatial.jacksoncountyor.gov
// @connect spatialags.vhb.com
// @connect stclairgis.integritygis.com
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
// @connect twu.newedgeservices.com
// @connect utility.arcgis.com
// @connect vernongis.integritygis.com
// @connect vginmaps.vdem.virginia.gov
// @connect wallawallagis.com
// @connect warrengis.integritygis.com
// @connect washingtongis.integritygis.com
// @connect wcg-gisweb.co.worcester.md.us
// @connect wcgis3.co.winnebago.wi.us
// @connect wcgisweb.washoecounty.us
// @connect wcohgis.woodcountyohio.gov
// @connect web.binghamid.gov
// @connect web2.co.ottertail.mn.us
// @connect web2.kcsgis.com
// @connect web3.kcsgis.com
// @connect web4.kcsgis.com
// @connect web5.kcsgis.com
// @connect web6.kcsgis.com
// @connect webadaptor.glynncounty-ga.gov
// @connect webgis.bedfordcountyva.gov
// @connect webgis.co.davidson.nc.us
// @connect webgis.dot.state.mn.us
// @connect webgis.durhamnc.gov
// @connect webgis.lafayetteassessor.com
// @connect webgis.waterburyct.org
// @connect webgis.yorbalindaca.gov
// @connect webgis1.nic.in
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
// @connect ws.lioservices.lrc.gov.on.ca
// @connect wvsams.mapwv.org
// @connect ww1.bucoks.com
// @connect ww8.yorkmaps.ca
// @connect www.1stdistrict.org
// @connect www.adacountyassessor.org
// @connect www.adamscountyarcserver.com
// @connect www.ancgis.com
// @connect www.apps.geomatics.gov.nt.ca
// @connect www.bartowgis.org
// @connect www.bcpao.us
// @connect www.centralilmaps.com
// @connect www.cmbgis.com
// @connect www.colesco.illinois.gov
// @connect www.ctgismaps2.ct.gov
// @connect www.denvergov.org
// @connect www.dmcwebgis.com
// @connect www.efsedge.com
// @connect www.franklinmo.net
// @connect www.gcgis.org
// @connect www.gfgis.com
// @connect www.gis.hctx.net
// @connect www.gis.sjcfl.us
// @connect www.gismidwest.com
// @connect www.gisonline.ms.gov
// @connect www.greenwoodsc.gov
// @connect www.hogarcmaps.org
// @connect www.horrycountysc.gov
// @connect www.jfksgis.us
// @connect www.landmarkgeospatial.com
// @connect www.laurenscountygis.org
// @connect www.mcgisweb.org
// @connect www.mchenrycountygis.org
// @connect www.midmogis.org
// @connect www.monroegis.org
// @connect www.mymanatee.org
// @connect www.ocgis.com
// @connect www.portlandmaps.com
// @connect www.rdcogis.com
// @connect www.sciotocountyengineer.org
// @connect www.semogis.com
// @connect www.sgrcmaps.com
// @connect www.sjmap.org
// @connect www.smithcountymapsite.org
// @connect www.valorgis.com
// @connect www.waynecounty.com
// @connect www.webgis.net
// @connect www.wildlifedepartment.com
// @connect www.yamhillcountygis.com
// @connect www1.cityofwebster.com
// @connect www2.ci.lancaster.oh.us
// @connect www3.multco.us
// @connect www7.co.union.oh.us
// @connect xara1-4.cityofpetaluma.net
// ==/UserScript==

/* global $, WazeWrap, _, turf, ESTreeProcessor, bootstrap, OpenLayers, wmeGisLBBOX */

// Add modern UI styles using DOM injection (more compatible than GM_addStyle)
(function () {
  const style = document.createElement('style');
  style.textContent = `
/* Modern GIS Layers UI Styles */

/* Region Selector */
.region-selector {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.region-selector-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  cursor: pointer;
  padding: 4px;
  border-radius: 3px;
}

.region-selector-header:hover {
  background: #f8f9fa;
}

.region-selector-title {
  font-size: 12px;
  font-weight: 600;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.region-selector-toggle {
  font-size: 10px;
  color: #999;
  transition: transform 0.2s;
}

.region-selector.collapsed .region-selector-toggle {
  transform: rotate(-90deg);
}

.region-selector-body {
  background: #f8f9fa;
  border-radius: 3px;
  padding: 4px;
  max-height: 250px;
  overflow-y: auto;
}

.region-selector.collapsed .region-selector-body {
  display: none;
}

/* Country Group */
.country-group {
  margin-bottom: 8px;
}

.country-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px;
  background: white;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}

.country-header:hover {
  background: #e9ecef;
}

.country-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.country-toggle-icon {
  font-size: 9px;
  color: #999;
  transition: transform 0.2s;
}

.country-group.collapsed .country-toggle-icon {
  transform: rotate(-90deg);
}

.country-count {
  font-size: 10px;
  color: #999;
  font-weight: 600;
}

.country-subdivisions {
  padding-left: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3px;
}

.country-group.collapsed .country-subdivisions {
  display: none;
}

/* Subdivision Option */
.subdivision-option {
  display: flex;
  align-items: center;
  padding: 4px 4px;
  font-size: 11px;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.15s;
}

.subdivision-option:hover {
  background: white;
}

.subdivision-option input[type="checkbox"] {
  margin: 0 6px 0 0;
  cursor: pointer;
}

.subdivision-option label {
  margin: 0;
  cursor: pointer;
  font-weight: normal;
  font-size: 11px;
  color: #555;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subdivision-option.enabled label {
  font-weight: 600;
  color: #0066cc;
}

.subdivision-count {
  font-size: 9px;
  color: #999;
  margin-left: 4px;
  font-weight: 600;
}

/* Country-level checkbox */
.country-level-option {
  display: flex;
  align-items: center;
  padding: 4px 4px;
  padding-left: 16px;
  font-size: 11px;
  cursor: pointer;
  border-radius: 2px;
  transition: background 0.15s;
  margin-bottom: 2px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.5);
}

.country-level-option:hover {
  background: white;
}

.country-level-option input[type="checkbox"] {
  margin: 0 6px 0 0;
  cursor: pointer;
}

.country-level-option label {
  margin: 0;
  cursor: pointer;
  font-weight: normal;
  font-size: 10px;
  color: #777;
  flex: 1;
}

.country-level-option.enabled label {
  font-weight: 600;
  color: #0066cc;
}

/* Country-only */
.country-only {
  display: flex;
  align-items: center;
  padding: 4px 4px;
  background: white;
  border-radius: 3px;
  margin-bottom: 4px;
  cursor: pointer;
}

.country-only:hover {
  background: #e9ecef;
}

.country-only input[type="checkbox"] {
  margin: 0 6px 0 0;
  cursor: pointer;
}

.country-only label {
  margin: 0;
  cursor: pointer;
  font-size: 11px;
  font-weight: 600;
  color: #333;
  flex: 1;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.country-only.enabled label {
  color: #0066cc;
}

/* Quick Actions */
.filter-label {
  font-size: 9px;
  color: #666;
  margin-bottom: 3px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.region-quick-actions {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  font-size: 11px;
}

.region-action-button {
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: white;
  color: #666;
  font-size: 10px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.region-action-button:hover {
  background: #f8f9fa;
  border-color: #0066cc;
  color: #0066cc;
}

.region-quick-actions button {
  flex: 1;
  padding: 5px 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: white;
  color: #666;
  font-size: 10px;
  cursor: pointer;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.region-quick-actions button:hover {
  background: #f8f9fa;
  border-color: #0066cc;
  color: #0066cc;
}

.region-quick-actions .toggle-button.active {
  background: #0066cc;
  border-color: #0066cc;
  color: white;
  font-weight: 700;
}

.region-quick-actions .toggle-button.active:hover {
  background: #0052a3;
  border-color: #0052a3;
  color: white;
}

/* Stats Bar */
.gis-stats-bar {
  display: flex;
  justify-content: space-between;
  padding: 5px 6px;
  background: #e7f3ff;
  border: 1px solid #b3d9ff;
  border-radius: 3px;
  margin-bottom: 10px;
  font-size: 11px;
}

.gis-stats-bar .stat {
  color: #333;
}

.gis-stats-bar .stat strong {
  color: #0066cc;
  font-weight: 600;
}

/* Sticky Section */
.gis-sticky-section {
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  border-bottom: 2px solid #ddd;
  padding: 6px;
}

/* Region Fieldset - Modern styling */
.region-fieldset {
  border: 1px solid #ccc;
  padding: 0;
  border-radius: 4px;
  margin-bottom: 10px;
  display: none;
}

.region-fieldset.visible {
  display: block;
}

.region-legend {
  margin: 0 0 8px 10px;
  padding: 0 5px;
  border: none;
  width: auto;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  color: #333;
}

.region-legend:hover {
  color: #0066cc;
}

.region-legend .toggle-icon {
  font-size: 11px;
  margin-right: 6px;
  transition: transform 0.2s;
  display: inline-block;
}

.region-fieldset.collapsed .toggle-icon {
  transform: rotate(-90deg);
}

.region-body {
  padding: 0 4px 6px 4px;
}

.region-fieldset.collapsed .region-body {
  display: none;
}

.action-links {
  font-size: 11px;
  margin-bottom: 8px;
  color: #666;
}

.action-links a {
  color: #6290b7;
  cursor: pointer;
  text-decoration: none;
}

/* Category Fieldset */
.category-fieldset {
  border: 1px solid #e0e0e0;
  padding: 0;
  border-radius: 3px;
  margin-bottom: 8px;
  background: #fafafa;
}

.category-legend {
  margin: 0 0 6px 8px;
  padding: 0 4px;
  border: none;
  width: auto;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: #555;
}

.category-legend .toggle-icon {
  font-size: 10px;
  margin-right: 5px;
  transition: transform 0.2s;
  display: inline-block;
}

.category-fieldset.collapsed .toggle-icon {
  transform: rotate(-90deg);
}

.category-body {
  padding: 0 6px 6px 6px;
}

.category-fieldset.collapsed .category-body {
  display: none;
}

/* Empty State */
.gis-empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.gis-empty-state i {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.3;
}

.gis-empty-state p {
  font-size: 13px;
  margin: 0;
  line-height: 1.6;
}

/* Scrollbar */
.region-selector-body::-webkit-scrollbar {
  width: 8px;
}

.region-selector-body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.region-selector-body::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

/* Settings - Modern Section Card */
.settings-section {
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
}

.settings-section:hover {
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

/* Collapsible Section Header */
.settings-section-header {
  padding: 8px 8px;
  background: linear-gradient(to bottom, #f8f9fa 0%, #f0f1f3 100%);
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
}

.settings-section-header:hover {
  background: linear-gradient(to bottom, #f0f1f3 0%, #e8e9eb 100%);
}

.settings-section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.settings-section-title i {
  color: #0066cc;
  font-size: 14px;
}

.section-toggle-icon {
  font-size: 10px;
  color: #999;
  transition: transform 0.2s;
}

.settings-section.collapsed .section-toggle-icon {
  transform: rotate(-90deg);
}

/* Section Body */
.settings-section-body {
  padding: 8px;
  background: white;
}

.settings-section.collapsed .settings-section-body {
  display: none;
}

/* Setting Item Block */
.setting-item-block {
  margin-bottom: 14px;
}

.setting-item-block:last-child {
  margin-bottom: 0;
}

.wme-gis-panel .setting-label {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: #333;
  margin-bottom: 6px;
}

/* Pill-Style Radio Buttons */
.wme-gis-panel .pill-group {
  display: flex;
  background: #e9ecef;
  border-radius: 6px;
  padding: 2px;
  gap: 2px;
}

.wme-gis-panel .pill-option {
  flex: 1;
  position: relative;
}

.wme-gis-panel .pill-option input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.wme-gis-panel .pill-option label {
  display: block;
  text-align: center;
  padding: 6px 8px;
  font-size: 11px;
  font-weight: 600;
  color: #666;
  background: transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.wme-gis-panel .pill-option input[type="radio"]:checked + label {
  background: #0066cc;
  color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  font-weight: 700;
}

.wme-gis-panel .pill-option label:hover {
  color: #0066cc;
}

.wme-gis-panel .pill-option input[type="radio"]:checked + label:hover {
  background: #0052a3;
  color: white;
}

/* Toggle Switch */
.wme-gis-panel .toggle-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
}

.wme-gis-panel .toggle-switch > label:first-child {
  font-size: 12px;
  color: #555;
  margin: 0;
  cursor: pointer;
}

.wme-gis-panel .switch {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  flex-shrink: 0;
}

.wme-gis-panel .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.wme-gis-panel .toggle-switch .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .3s;
  border-radius: 20px;
}

.wme-gis-panel .toggle-switch .slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: .3s;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
}

.wme-gis-panel .toggle-switch input:checked + .slider {
  background-color: #0066cc;
}

.wme-gis-panel .toggle-switch input:checked + .slider:before {
  transform: translateX(16px);
}

/* Help Text */
.wme-gis-panel .help-text {
  font-size: 10px;
  color: #999;
  margin-top: 4px;
  line-height: 1.3;
  font-style: italic;
}

/* Select */
.wme-gis-panel .setting-select {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 12px;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.wme-gis-panel .setting-select:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

/* Number Input */
.wme-gis-panel .setting-input {
  width: 80px;
  padding: 6px 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 12px;
  text-align: center;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.wme-gis-panel .setting-input:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.wme-gis-panel .setting-unit {
  font-size: 11px;
  color: #999;
  margin-left: 6px;
  font-weight: 600;
}

/* Full Width Input */
.wme-gis-panel .setting-input-full {
  width: 100%;
  padding: 6px 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.wme-gis-panel .setting-input-full:focus {
  outline: none;
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

/* Button Group */
.wme-gis-panel .button-group {
  display: flex;
  gap: 6px;
}

/* Modern Buttons */
.wme-gis-panel .btn-primary-modern,
.wme-gis-panel .btn-secondary-modern,
.gis-popup-dialog .btn-primary-modern,
.gis-popup-dialog .btn-secondary-modern {
  flex: 1;
  padding: 8px 14px;
  border: none;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.wme-gis-panel .btn-primary-modern,
.gis-popup-dialog .btn-primary-modern {
  background: linear-gradient(to bottom, #0077dd 0%, #0066cc 100%);
  color: white;
}

.wme-gis-panel .btn-primary-modern:hover,
.gis-popup-dialog .btn-primary-modern:hover {
  background: linear-gradient(to bottom, #0066cc 0%, #0055aa 100%);
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.wme-gis-panel .btn-primary-modern:active,
.gis-popup-dialog .btn-primary-modern:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.wme-gis-panel .btn-secondary-modern,
.gis-popup-dialog .btn-secondary-modern {
  background: linear-gradient(to bottom, #f8f9fa 0%, #e9ecef 100%);
  color: #666;
  border: 1px solid #d0d0d0;
}

.wme-gis-panel .btn-secondary-modern:hover,
.gis-popup-dialog .btn-secondary-modern:hover {
  background: linear-gradient(to bottom, #e9ecef 0%, #dee2e6 100%);
  color: #333;
  box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  transform: translateY(-1px);
}

.wme-gis-panel .btn-secondary-modern:active,
.gis-popup-dialog .btn-secondary-modern:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0,0,0,0.08);
}

/* Full Width Button */
.wme-gis-panel .btn-full {
  width: 100%;
  padding: 10px 14px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: linear-gradient(to bottom, #0077dd 0%, #0066cc 100%);
  color: white;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.wme-gis-panel .btn-full:hover {
  background: linear-gradient(to bottom, #0066cc 0%, #0055aa 100%);
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  transform: translateY(-1px);
}

.wme-gis-panel .btn-full:active {
  transform: translateY(0);
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.wme-gis-panel .btn-full i {
  margin-right: 8px;
}

/* Description Text */
.wme-gis-panel .section-description {
  font-size: 11px;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

/* GIS Internal Tab Navigation - Make active tab blue (only for internal tabs, not WME tabs) */
.gis-internal-tabs > li.active > a,
.gis-internal-tabs > li.active > a:hover,
.gis-internal-tabs > li.active > a:focus {
  background-color: #0066cc !important;
  border-color: #0066cc !important;
  color: white !important;
  font-weight: 700;
}

.gis-internal-tabs > li > a {
  transition: all 0.2s;
}

.gis-internal-tabs > li > a:hover {
  background-color: #f0f8ff !important;
  border-color: #0066cc !important;
  color: #0066cc !important;
}

/* ========== DARK MODE SUPPORT ========== */
[wz-theme="dark"] .gis-sticky-section {
  background: #202124;
  border-bottom-color: #55595e;
}

[wz-theme="dark"] .region-selector-body {
  background: #3c4043;
}

[wz-theme="dark"] .region-selector-header {
  background: #202124;
  color: #e8eaed;
  border-bottom-color: #55595e;
}

[wz-theme="dark"] .region-selector-header:hover {
  background: #3c4043;
}

[wz-theme="dark"] .region-selector-title {
  color: #e8eaed;
}

[wz-theme="dark"] .region-selector-toggle {
  color: #e8eaed;
}

[wz-theme="dark"] .country-header {
  background: #202124;
  color: #e8eaed;
}

[wz-theme="dark"] .country-header:hover {
  background: #55595e;
}

[wz-theme="dark"] .country-name,
[wz-theme="dark"] .subdivision-option label,
[wz-theme="dark"] .country-level-option label,
[wz-theme="dark"] .country-only label {
  color: #e8eaed;
}

[wz-theme="dark"] .subdivision-option:hover,
[wz-theme="dark"] .country-level-option:hover {
  background: #202124;
}

[wz-theme="dark"] .country-only {
  background: #202124;
}

[wz-theme="dark"] .country-only:hover {
  background: #55595e;
}

[wz-theme="dark"] .country-level-option {
  background: rgba(60, 64, 67, 0.5);
}

[wz-theme="dark"] .gis-stats-bar {
  background: #1a3950;
  border-color: #55595e;
  color: #e8eaed;
}

[wz-theme="dark"] .gis-stats-bar .stat {
  color: #e8eaed;
}

[wz-theme="dark"] .region-fieldset {
  border-color: #55595e;
  background: #3c4043;
}

[wz-theme="dark"] .region-legend {
  color: #e8eaed;
}

[wz-theme="dark"] .region-legend:hover {
  color: #33ccff;
}

[wz-theme="dark"] .region-body {
  background: #3c4043;
}

[wz-theme="dark"] .gis-subL1-layer-label {
  color: #e8eaed;
}

[wz-theme="dark"] .action-links {
  color: #b7babf;
}

[wz-theme="dark"] .action-links a {
  color: #33ccff;
}

[wz-theme="dark"] .gis-empty-state {
  color: #b7babf;
}

[wz-theme="dark"] .settings-section {
  background: #3c4043;
  border-color: #55595e;
}

[wz-theme="dark"] .settings-section-header {
  background: linear-gradient(to bottom, #3c4043 0%, #202124 100%);
  border-bottom-color: #55595e;
}

[wz-theme="dark"] .settings-section-header:hover {
  background: linear-gradient(to bottom, #55595e 0%, #3c4043 100%);
}

[wz-theme="dark"] .settings-section-title {
  color: #e8eaed;
}

[wz-theme="dark"] .settings-section-body {
  background: #202124;
}

[wz-theme="dark"] .wme-gis-panel .setting-label {
  color: #e8eaed;
}

[wz-theme="dark"] .wme-gis-panel .pill-group {
  background: #3c4043;
}

[wz-theme="dark"] .wme-gis-panel .pill-option label {
  color: #b7babf;
}

[wz-theme="dark"] .wme-gis-panel .pill-option input[type="radio"]:checked + label {
  background: #0066cc;
  color: white;
}

[wz-theme="dark"] .wme-gis-panel .pill-option label:hover {
  color: #33ccff;
}

[wz-theme="dark"] .wme-gis-panel .pill-option input[type="radio"]:checked + label:hover {
  background: #0052a3;
  color: white;
}

[wz-theme="dark"] .wme-gis-panel .toggle-switch > label:first-child {
  color: #e8eaed;
}

[wz-theme="dark"] .wme-gis-panel .toggle-switch .slider {
  background-color: #55595e;
}

[wz-theme="dark"] .wme-gis-panel .setting-select,
[wz-theme="dark"] .wme-gis-panel .setting-input,
[wz-theme="dark"] .wme-gis-panel .setting-input-full {
  background: #3c4043;
  border-color: #55595e;
  color: #e8eaed;
}

[wz-theme="dark"] .wme-gis-panel .setting-select:focus,
[wz-theme="dark"] .wme-gis-panel .setting-input:focus,
[wz-theme="dark"] .wme-gis-panel .setting-input-full:focus {
  border-color: #33ccff;
  box-shadow: 0 0 0 3px rgba(51, 204, 255, 0.1);
}

[wz-theme="dark"] .wme-gis-panel .help-text,
[wz-theme="dark"] .wme-gis-panel .section-description {
  color: #90959c;
}

[wz-theme="dark"] .wme-gis-panel .btn-secondary-modern,
[wz-theme="dark"] .gis-popup-dialog .btn-secondary-modern {
  background: linear-gradient(to bottom, #3c4043 0%, #202124 100%);
  color: #e8eaed;
  border-color: #55595e;
}

[wz-theme="dark"] .wme-gis-panel .btn-secondary-modern:hover,
[wz-theme="dark"] .gis-popup-dialog .btn-secondary-modern:hover {
  background: linear-gradient(to bottom, #55595e 0%, #3c4043 100%);
  color: #e8eaed;
}

[wz-theme="dark"] .region-quick-actions button {
  background: #3c4043;
  border-color: #55595e;
  color: #b7babf;
}

[wz-theme="dark"] .region-quick-actions button:hover {
  background: #55595e;
  border-color: #33ccff;
  color: #33ccff;
}

[wz-theme="dark"] .region-action-button {
  background: #3c4043;
  border-color: #55595e;
  color: #b7babf;
}

[wz-theme="dark"] .region-action-button:hover {
  background: #55595e;
  border-color: #33ccff;
  color: #33ccff;
}

[wz-theme="dark"] .gis-internal-tabs > li > a:hover {
  background-color: #1a3950 !important;
}

[wz-theme="dark"] #gis-layer-search {
  background: #3c4043 !important;
  border-color: #55595e !important;
  color: #e8eaed !important;
}

[wz-theme="dark"] #gis-layer-search::placeholder {
  color: #90959c;
}

[wz-theme="dark"] .filter-label {
  color: #b7babf;
}

/* ========== POPUP DIALOGS LIGHT MODE ========== */
.gis-popup-dialog {
  background: #fff;
  border-color: #ddd;
}

.gis-dialog-header {
  background: #0066cc;
  color: #fff;
}

.gis-dialog-section {
  background: #fff;
  border-color: #e0e0e0;
}

.gis-dialog-section-title {
  color: #333;
}

.gis-dialog-section-text {
  color: #666;
}

.gis-dialog-select {
  background: #fff;
  border-color: #ccc;
  color: #333;
}

.gis-dialog-select:focus {
  border-color: #0066cc;
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1);
}

.gis-label-popup-options {
  background: #f5f7fa;
  border-bottom-color: #e0e0e0;
  color: #333;
}

.gis-label-popup-options label {
  color: #333;
}

.gis-label-popup-dropdown {
  background: #fff;
  border-bottom-color: #e0e0e0;
}

.gis-label-popup-content {
  background: #fff;
  color: #333;
}

#layerLabelPopup {
  background: #fff;
  border-color: #ddd;
}

#gis-layer-group-dialog {
  background: #f5f7fa;
  border-color: #ddd;
}

/* ========== POPUP DIALOGS DARK MODE ========== */
[wz-theme="dark"] .gis-popup-dialog {
  background: #3c4043;
  border-color: #55595e;
}

[wz-theme="dark"] .gis-dialog-header {
  background: #0066cc;
  color: #fff;
}

[wz-theme="dark"] .gis-dialog-section {
  background: #202124;
  border-color: #55595e;
}

[wz-theme="dark"] .gis-dialog-section > div:first-child {
  color: #e8eaed;
}

[wz-theme="dark"] .gis-dialog-section > div:nth-child(2) {
  color: #90959c;
}

[wz-theme="dark"] .gis-dialog-select {
  background: #3c4043;
  border-color: #55595e;
  color: #e8eaed;
}

[wz-theme="dark"] .gis-dialog-select:focus {
  border-color: #33ccff;
  box-shadow: 0 0 0 3px rgba(51, 204, 255, 0.1);
}

[wz-theme="dark"] .gis-label-popup-options {
  background: #202124;
  border-bottom-color: #55595e;
  color: #e8eaed;
}

[wz-theme="dark"] .gis-label-popup-options label {
  color: #e8eaed;
}

[wz-theme="dark"] .gis-label-popup-dropdown {
  background: #3c4043;
  border-bottom-color: #55595e;
}

[wz-theme="dark"] .gis-label-popup-content {
  background: #3c4043;
  color: #e8eaed;
}

[wz-theme="dark"] #layerLabelPopup {
  background: #3c4043;
  border-color: #55595e;
}

[wz-theme="dark"] .gis-label-popup-content li {
  color: #e8eaed !important;
}

[wz-theme="dark"] #gis-layer-group-dialog {
  background: #3c4043;
  border-color: #55595e;
}
`;
  document.head.appendChild(style);
})();

/**
 * Global dependencies used by this script:
 * @global {Object} $ - jQuery (used extensively for DOM manipulation) {@link https://jquery.com/}
 * @global {Object} WazeWrap - Waze Wrapper library (for alerts, interface functions)
 * @global {Object} _ - Lodash (for utility functions like _.uniq, _.groupBy, _.debounce) {@link https://lodash.com/}
 * @global {Object} turf - Turf.js (for geospatial operations like turf.point, turf.area, etc.) {@link https://turfjs.org/}
 * @global {Object} ESTreeProcessor - For processing custom label JavaScript
 * @global {Object} bootstrap - For SDK initialization
 * @global {Object} OpenLayers - For the path-following labels functionality
 * @global {Object} wmeGisLBBOX - For geographic boundary box operations
 */

/**
 * WME GIS Layers Script - Main initialization function
 *
 * Initializes and manages GIS layer functionality for Waze Map Editor including:
 * - Loading and displaying GIS layers from various data sources (ArcGIS, Socrata)
 * - Managing user settings and layer visibility
 * - Handling keyboard shortcuts and UI interactions
 * - Processing and styling map features
 * - Supporting custom layer groups and filtering
 *
 * @async
 * @function main
 * @returns {Promise<void>} Resolves when initialization is complete
 * @throws {Error} If critical initialization steps fail
 */
(async function main() {
  'use strict';

  // **************************************************************************************************************
  // IMPORTANT: Update this when releasing a new version of script
  // **************************************************************************************************************
  const SHOW_UPDATE_MESSAGE = true;
  const SCRIPT_VERSION_CHANGES = [
    '🎉 Major Update: Complete UI Redesign!',
    '✨ Region selector now on Layers tab (no more tab switching!)',
    '🔍 Added Search filter for layers alongside Viewport/Zoom',
    '🌙 Modern blue theme with full Dark Mode support',
    '📐 Better visual hierarchy, spacing, and consistency throughout'
  ];

  const GF_URL = 'https://greasyfork.org/scripts/369632-wme-gis-layers';
  // Used in tooltips to tell people who to report issues to.  Update if a new author takes ownership of this script.
  const SCRIPT_AUTHOR = 'MapOMatic / JS55CT';
  const REQUEST_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSevPQLz2ohu_LTge9gJ9Nv6PURmCmaSSjq0ayOJpGdRr2xI0g/viewform?usp=pp_url&entry.2116052852={username}';
  const DEFAULT_LAYER_NAME = 'GIS Layers - Default';
  const ROAD_LAYER_NAME = 'GIS Layers - Roads';

  /**
   * @typedef {Object} StyleDefinition
   * @property {string} [fillColor]
   * @property {number} [pointRadius]
   * @property {string} [label]
   * @property {number} [fillOpacity]
   * @property {string} [strokeColor]
   * @property {number} [strokeOpacity]
   * @property {number} [strokeWidth]
   * @property {string} [fontColor]
   * @property {number|string} [fontSize]
   * @property {string} [labelOutlineColor]
   * @property {number|string} [labelOutlineWidth]
   * @property {string} [fontWeight]
   * @property {number} [labelYOffset]
   * @property {string} [labelAlign]
   * @property {string} [pathLabel]
   * @property {boolean} [labelSelect]
   * @property {string|number} [pathLabelYOffset]
   * @property {string|number} [pathLabelCurve]
   * @property {string|number} [pathLabelReadable]
   * @property {boolean} [stroke]
   * @property {string} [fontFamily]
   * @property {string} [externalGraphic]        // URL of an external graphic image
   * @property {number} [graphicWidth]           // Width of the graphic in pixels
   * @property {number} [graphicHeight]          // Height of the graphic in pixels
   * @property {number} [graphicXOffset]         // Horizontal offset for graphic placement
   * @property {number} [graphicYOffset]         // Vertical offset for graphic placement
   */
  /** @type {StyleDefinition} */
  let DEFAULT_STYLE = null;
  /** @type {Object.<string, StyleDefinition>} */
  let LAYER_STYLES = {};
  /** @type {StyleDefinition} */
  let ROAD_STYLE = null;

  /**
   * @typedef {Object} GisLayer
   * @property {string} id - Unique identifier for the GIS layer
   * @property {number} enabled - 1 if the layer is enabled, 0 otherwise
   * @property {string} name - Human-readable name of the layer for display
   * @property {string} country - Country ISO_ALPHA3 code associated with the layer (e.g., "USA", "CAN")
   * @property {string} subL1 - Subdivision level 1 code (state/province, uppercased)
   * @property {string[]} [subL2] - Optional array of subdivision level 2 names (counties/regions)
   * @property {string} url - Service URL for the GIS layer (ArcGIS MapServer or Socrata endpoint)
   * @property {string} [where] - Optional SQL/query filter string for limiting results
   * @property {string[]} [labelFields] - Array of field names to use for feature labels
   * @property {string} [processLabel] - Optional JavaScript code for custom label processing
   * @property {boolean} [labelProcessingError] - True if an error occurred compiling processLabel
   * @property {Object|string} [style] - Style object for rendering or "roads" for road-specific styling
   * @property {boolean} [isRoadLayer] - True if this layer contains road/line features with path labels
   * @property {number|null} [visibleAtZoom] - Minimum zoom level for layer visibility (null = use default)
   * @property {number|null} [labelsVisibleAtZoom] - Minimum zoom level for label visibility
   * @property {string} [restrictTo] - Comma-separated access restrictions (ranks, usernames, "am" for area managers)
   * @property {boolean} [notAllowed] - True if current user doesn't meet restrictTo requirements
   * @property {string} [oneTimeAlert] - Alert message shown once when layer is first enabled
   * @property {'ArcGIS'|'SocrataV2'|'SocrataV3'|'Other'} [platform] - Detected service platform type
   * @property {string} countrySubL1 - Computed country-subL1 identifier (e.g., "USA-CALIFORNIA")
   */

  /**
   * Array of all loaded GIS layer definitions
   * @type {GisLayer[]}
   */
  let _gisLayers = [];

  /**
   * Information about a single country in results.
   * @typedef {object} WhatsInViewCountry
   * @property {string} ISO_ALPHA2
   * @property {string} ISO_ALPHA3
   * @property {number} Sub_level
   * @property {string} [source]
   * @property {Object<string, Object>|Object} subL1
   *   Intersecting subdivisions (states/counties/etc). Structure depends on country and precision.
   */

  /**
   * Main return type for whatsInView.
   * - Keys are country names, values are country info objects.
   * @typedef {Object.<string, WhatsInViewCountry>} WhatsInViewResult
   */

  /**
   * Current viewport intersection data showing visible countries and subdivisions
   * @type {WhatsInViewResult}
   */
  let _whatsInView = {};

  /**
   * Cached hash of the last checked map extent to avoid redundant whatsInView calls
   * @type {string|null}
   */
  let _lastExtentHash = null;

  /**
   * Set of country ISO_ALPHA3 codes that have already been loaded from the spreadsheet
   * @type {Set<string>}
   */
  const alreadyLoadedCountries = new Set();

  /**
   * Set of subdivision (subL1) codes that have already been loaded from the spreadsheet
   * @type {Set<string>}
   */
  const alreadyLoadedSubL1 = new Set();

  /**
   * @typedef {object} ViewportBBox
   * @property {number} minLon
   * @property {number} minLat
   * @property {number} maxLon
   * @property {number} maxLat
   */

  /**
   * @typedef {Object} ProcessedFeature
   * @property {string} type - GeoJSON feature type, typically "Feature"
   * @property {Object} geometry - GeoJSON geometry object
   * @property {string} geometry.type - Geometry type (Point, LineString, Polygon, etc.)
   * @property {Array} geometry.coordinates - Coordinate array structure varies by geometry type
   * @property {Object} properties - Feature properties
   * @property {string} properties.layerID - ID of the GIS layer this feature belongs to
   * @property {string} properties.label - Display label for the feature
   * @property {string|number} id - Unique identifier for the feature
   * @property {boolean} [skipDupeCheck] - If true, skip deduplication checks for this feature
   */

  /**
   * @typedef {Object} UserSession
   * @property {boolean} isAreaManager - True if user has area manager permissions
   * @property {boolean} isCountryManager - True if user has country manager permissions
   * @property {number} rank - User's editing rank (1-6, where 6 is highest)
   * @property {string} userName - User's Waze username
   */

  /**
   * @typedef {Object} WmeGisLBBOXViewportBbox
   * @property {number} minLon - Minimum longitude
   * @property {number} minLat - Minimum latitude
   * @property {number} maxLon - Maximum longitude
   * @property {number} maxLat - Maximum latitude
   */

  /**
   * @typedef {Object} WmeGisLBBOXCountry
   * @property {string} ISO_ALPHA2 - Two-letter country code
   * @property {string} ISO_ALPHA3 - Three-letter country code
   * @property {string} name - Country name
   * @property {number} Sub_level - Subdivision level depth
   * @property {string} source - Data source ("BBOX" or "GEOJSON")
   */

  /**
   * @typedef {Object} WmeGisLBBOX
   * @property {Object} cache - Internal cache for storing fetched JSON/GeoJSON data
   * @property {function(string): Promise<Object>} fetchJsonWithCache - Fetch JSON with caching
   * @property {function(WmeGisLBBOXViewportBbox): Promise<Array<WmeGisLBBOXCountry>>} getIntersectingCountries - Get countries intersecting viewport
   * @property {function(): Promise<Object>} getCountriesAndSubsJson - Get comprehensive country and subdivision data
   * @property {function(Object): void} cleanIntersectingData - Clean empty subdivisions from intersecting data
   * @property {function(string, string, string, WmeGisLBBOXViewportBbox, boolean=): Promise<boolean|Object>} fetchAndCheckGeoJsonIntersection - Check GeoJSON intersection
   * @property {function(WmeGisLBBOXViewportBbox, boolean=, boolean=): Promise<Object>} getIntersectingStatesAndCounties - Get intersecting US states and counties
   * @property {function(Object, WmeGisLBBOXViewportBbox): Promise<Object>} getIntersectingSubdivisions - Get intersecting subdivisions for a country
   * @property {function(WmeGisLBBOXViewportBbox, boolean=, boolean=): Promise<Object>} whatsInView - Main function to determine all regions in viewport
   */

  /** @type {WmeGisLBBOX} */
  const WmeGisLBBOX = new wmeGisLBBOX(); // Create and reuse this instance as wmeGisLBBOX uses an instance-level cache (i.e., this.cache)

  /**
   * Maps a string key (`countryId-countryId` or `countryId-subdivisionId`) to a full name string.
   * Example keys: "US-US", "US-CA", etc.
   * Example values: "US - United States", "US - California", etc.
   * @type {Object.<string, string>}
   */
  let countrySubdivisionMapping = {};

  /**
   * @typedef {Object} PopupPosition
   * @property {string} left - CSS left position (e.g., "50%", "100px")
   * @property {string} top - CSS top position (e.g., "50%", "200px")
   */

  /**
   * @typedef {Object.<string, Set<string>>} LayerLabelsMap
   * @description Maps layer names to Sets of unique label strings for popup display
   */

  /**
   * @typedef {Array<{phrase: RegExp, acronym: string}>} ReplacementPatterns
   * @description Array of regex patterns and their replacement acronyms for label processing
   */

  /**
   * @typedef {Object.<string, RegExp>} RegexReplaceMap
   * @description Map of regex patterns for label cleansing/transformation operations
   */

  /**
   * Common regexes used for label cleansing/transformation.
   * @type {RegexReplaceMap}
   */
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

  /**
   * Asynchronously loads and parses style definitions from a Google Spreadsheet "STYLE" sheet.
   *
   * This function fetches style data from a given Google Sheets document, expects a specific
   * tab layout (with headers: "STYLE TYPE", "STYLE NAME", "STYLE JSON") and parses the style
   * JSON blobs in each row, assigning them to global variables: `DEFAULT_STYLE`, `ROAD_STYLE`,
   * and populating the `LAYER_STYLES` dictionary as appropriate.
   *
   * The Google Sheets call returns a non-standard JSON envelope, so the function extracts the
   * JSON using a regex before parsing.
   *
   * If fetching or parsing fails at any stage, the function logs errors to the console and returns
   * an error object describing the problem.
   *
   * @async
   * @function
   * @returns {Promise<Object|void>} On error, returns an object with an `error` property describing the failure.
   *                                 On success, does not explicitly return but assigns global style variables.
   *
   * @example
   * await loadStylesFromSheetAsync();
   *
   * @throws Does not throw; errors are captured and reported both to console and by returned error objects.
   *
   * @global
   * @see DEFAULT_STYLE
   * @see ROAD_STYLE
   * @see LAYER_STYLES
   */
  async function loadStylesFromSheetAsync() {
    const TAB_NAME = 'STYLE';
    const SHEET_ID = '1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw';
    const STYLE_DEF_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(TAB_NAME)}`;

    try {
      const resp = await fetch(STYLE_DEF_URL);
      const text = await resp.text();
      const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);/);
      if (!match) {
        console.error('Failed to parse style Google Sheet data!');
        return { error: 'Failed to parse style Google Sheet data!' };
      }
      const json = JSON.parse(match[1]);
      const rows = json.table.rows;

      // Use first row as header
      const headerRow = rows[0]; // First row is header
      const headerCells = headerRow.c.map((cell) => (cell.v || '').trim());

      const typeIdx = headerCells.indexOf('STYLE TYPE');
      const nameIdx = headerCells.indexOf('STYLE NAME');
      const jsonIdx = headerCells.indexOf('STYLE JSON');

      if ([typeIdx, nameIdx, jsonIdx].some((idx) => idx === -1)) {
        console.error('Missing headers in first row of Styles tab!');
        return { error: 'Missing headers in first row of Styles tab!' };
      }

      for (let i = 1; i < rows.length; i++) {
        // start from row 1, skip header row
        const row = rows[i];
        const type = row.c[typeIdx] && row.c[typeIdx].v ? row.c[typeIdx].v.trim() : null;
        const name = row.c[nameIdx] && row.c[nameIdx].v ? row.c[nameIdx].v.trim() : null;
        let jsonString = row.c[jsonIdx] && row.c[jsonIdx].v ? row.c[jsonIdx].v.trim() : null;

        if (!type || !name || !jsonString) continue;

        // Clean semicolons, extra quotes (if present)
        if (jsonString.endsWith(';')) jsonString = jsonString.slice(0, -1);
        if (jsonString.startsWith('"') && jsonString.endsWith('"')) {
          jsonString = jsonString.slice(1, -1).replace(/""/g, '"');
        }

        let styleObj;
        try {
          styleObj = JSON.parse(jsonString);
        } catch (err) {
          console.warn(`Could not parse style for ${type}:${name}`, err, jsonString);
          continue;
        }

        if (type === 'DEFAULT_STYLE' && name === 'DEFAULT_STYLE') {
          DEFAULT_STYLE = styleObj;
        } else if (type === 'ROAD_STYLE' && name === 'ROAD_STYLE') {
          ROAD_STYLE = styleObj;
        } else if (type === 'LAYER_STYLES') {
          LAYER_STYLES[name] = styleObj;
        }
      }

      // Now merge ALL layer styles with DEFAULT_STYLE
      for (const [name, layerStyle] of Object.entries(LAYER_STYLES)) {
        LAYER_STYLES[name] = { ...DEFAULT_STYLE, ...layerStyle };
      }

      logDebug('Loaded styles: DEFAULT_STYLE', DEFAULT_STYLE);
      logDebug('Loaded styles: ROAD_STYLE', ROAD_STYLE);
      logDebug('Loaded styles: LAYER_STYLES', LAYER_STYLES);

      //return styles;
    } catch (err) {
      console.error('SpreadSheet call failed for styles', err);
      return { error: 'SpreadSheet call failed for styles' };
    }
  }

  /**
   * Asynchronously builds a mapping from country-subdivision identifiers to display names.
   *
   * @async
   * @returns {Promise<Object.<string, string>>} Resolves to mapping object where keys are "COUNTRY-SUBDIVISION" and values are display names
   * @throws {Error} If country/subdivision data cannot be retrieved
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
   * @namespace NameMapper
   * @description Utility object for converting between country-subdivision keys and display names
   */
  const NameMapper = {
    /**
     * Converts a full display name to its corresponding key
     * @memberof NameMapper
     * @param {string} fullName - Full name like "US - California"
     * @returns {string|undefined} Key like "US-CA", or undefined if not found
     */
    toKey(fullName) {
      return Object.entries(countrySubdivisionMapping).find(([, value]) => value === fullName)?.[0];
    },

    /**
     * Converts a key ("US-CA") to its full name ("US - California").
     * @memberof NameMapper
     * @param {string} key
     * @returns {string} The corresponding full name or undefined.
     */
    toFullName(key) {
      return countrySubdivisionMapping[key];
    },

    /**
     * Returns all full names in the mapping.
     * @memberof NameMapper
     * @returns {Array<string>} Array of all full names.
     */
    toFullNameArray() {
      return Object.values(countrySubdivisionMapping);
    },

    /**
     * Returns all keys in the mapping.
     * @memberof NameMapper
     * @returns {Array<string>} Array of all keys.
     */
    toKeyArray() {
      return Object.keys(countrySubdivisionMapping);
    },
  };

  /** @type {number} */
  const DEFAULT_VISIBLE_AT_ZOOM = 18;
  /** @type {string} */
  const SETTINGS_STORE_NAME = 'wme_gis_layers_fl';
  /** @type {string} */
  const scriptName = GM_info.script.name;
  /** @type {string} */
  const scriptVersion = GM_info.script.version;
  /** @type {string} */
  const downloadUrl = 'https://greasyfork.org/scripts/369632-wme-gis-layers/code/WME%20GIS%20Layers.user.js';

  /**
   * @typedef {Object} ScriptUpdateMonitorArgs
   * @property {string} [scriptVersion]
   * @property {string} downloadUrl
   * @property {string} [metaUrl]
   * @property {RegExp} [metaRegExp]
   */

  /**
   * @typedef {Object} BootstrapArgs
   * @property {string} [scriptName]
   * @property {string} [scriptId]
   * @property {boolean} [useWazeWrap=false]
   * @property {ScriptUpdateMonitorArgs} [scriptUpdateMonitor]
   * @property {(wmeSdk: Object) => void} [callback]
   */

  /**
   * Initializes WME SDK and starts ScriptUpdateMonitor using bootstrap().
   * @type {Object}
   */
  const sdk = await bootstrap(
    /** @type {BootstrapArgs} */ ({
      scriptUpdateMonitor: { downloadUrl },
    }),
  );

  /**
   * @typedef {Object} Offset
   * @property {number} x - X pixel offset
   * @property {number} y - Y pixel offset
   */

  /**
   * @typedef {Object} LayerSettings
   * @property {Offset=} offset - Optional XY offset for a layer.
   */

  /**
   * @typedef {Object} LayerGroupSettings
   * @property {Array<string>} selectedSubL1 - Array of selected sub-L1 region codes.
   * @property {Array<string>} visibleLayers - Array of visible layer IDs in this group.
   * @property {Object.<string, boolean>} collapsedSections - Map of section names to collapsed state (can be empty).
   * @property {string} addrLabelDisplay - Address label display mode ("all" in this sample).
   * @property {boolean} fillParcels - Whether to fill parcels in this group.
   * @property {string} [fontFamily] - Font family for labels in this group (optional, for groups saved after font feature).
   * @property {number} [fontSize] - Font size for labels in this group (optional, for groups saved after font feature).
   */

  /**
   * @typedef {Object} Settings
   * @property {string} lastVersion - The last version number this script saw, e.g., "2025.08.01.000".
   * @property {Array<string>} visibleLayers - Array of visible layer IDs.
   * @property {boolean} onlyShowApplicableLayers - Whether to show only applicable layers.
   * @property {boolean} onlyShowApplicableLayersZoom - Restrict showing applicable layers to a certain zoom.
   * @property {Array<string>} selectedSubL1 - Selected sub-L1 region codes (e.g., ["CAN-CAN", "USA-CT"]).
   * @property {boolean} enabled - Whether this script is enabled.
   * @property {boolean} fillParcels - Whether to fill parcel polygons.
   * @property {Object.<string, number>} oneTimeAlerts - Map of alert keys to offset numbers (possibly UNIX timestamps or magic numbers).
   * @property {Object.<string, LayerSettings>} layers - Map of layer IDs to layer settings.
   * @property {Object.<string, string>} shortcuts - Map of shortcut IDs to key combo strings, e.g. "2,67".
   * @property {boolean} isPopupVisible - Is the config/settings popup currently visible.
   * @property {boolean} useAcronyms - Whether to use acronyms for certain values.
   * @property {boolean} useTitleCase - Whether to use title case in labels.
   * @property {boolean} useStateHwy - Whether to use "State Hwy" format for roads.
   * @property {boolean} removeNewLines - Whether to remove new lines from names/labels.
   * @property {Object.<string, boolean>} collapsedSections - Map of section names (region codes, etc) to collapsed state.
   * @property {Object.<string, LayerGroupSettings>} layerGroups - Map of group names to per-group settings.
   * @property {string} addrLabelDisplay - Display mode for address labels ("all" in this sample).
   * @property {string} socrataAppToken - Token for Socrata API access.
   * @property {string} fontFamily - Font family for GIS layer labels (e.g., "Arial, sans-serif", "inherit").
   * @property {number} fontSize - Font size in pixels for GIS layer labels (default: 20).
   * @property {string} [toggleHnsOnlyShortcut] - legacy, only present Pre SDK migration, moved to shortcuts.toggleHnsOnlyShortcut
   * @property {string} [toggleEnabledShortcut] - legacy, only present Pre SDK migration, moved to shortcuts.toggleEnabledShortcut
   *
   * @property {(layerID: string, settingName: string) => *} getLayerSetting - Get a setting for a layer.
   * @property {(layerID: string, settingName: string, value: *) => void} setLayerSetting - Set a setting for a layer.
   * @property {(layerID: string, settingName?: string) => void} removeLayerSetting - Remove a setting or a whole layer.
   */

  /**
   * User and UI settings for script, with utility methods.
   * @type {Settings }
   */
  let settings = /** @type {any} */ ({});

  /** @type {boolean} */
  let ignoreFetch = false;

  /**
   * @typedef {Object} LastToken
   * @property {boolean} cancel - Set to true to request the operation to cancel.
   * @property {Array} features - Array of features being processed.
   * @property {number} layersProcessed - Number of layers processed.
   */

  /**
   * Tracks the current in-progress async request and provides control/status.
   * @type {LastToken}
   */
  let lastToken = { cancel: false, features: [], layersProcessed: 0 };

  /**
   * @typedef {Object} UserSession
   * @property {boolean} isAreaManager
   * @property {boolean} isCountryManager
   * @property {number} rank
   * @property {string} userName
   */

  /** @type {UserSession|null} */
  let userInfo = null;

  // Variables to store Label popup position and selected layer
  /**
   * Maps layer names to Sets of unique label strings for popup display
   * @type {LayerLabelsMap}
   */
  const layerLabels = {};

  /**
   * Tracks visibility state of the layer label popup
   * @type {boolean}
   */
  let isPopupVisible = false;

  /**
   * Stores the current position of the draggable popup
   * @type {PopupPosition}
   */
  const popupPosition = { left: '50%', top: '50%' };

  /** @type {string | null} */
  let popupActiveLayer = null;

  /** @type {boolean} */
  let useAcronyms = false;

  /** @type {boolean} */
  let useTitleCase = false;

  /** @type {boolean} */
  let useStateHwy = false;

  /** @type {boolean} */
  let removeNewLines = false;

  /** @type {boolean} */
  const DEBUG = true;

  /**
   * Error logging utility.
   * @param {string} message
   * @param {...any} args
   */
  function logError(message, ...args) {
    console.error(`${scriptName}:`, message, ...args);
  }

  /**
   * Logs a debug message if DEBUG is enabled.
   * @param {string} message
   * @param {...any} args
   */
  function logDebug(message, ...args) {
    if (DEBUG) console.debug(`${scriptName}:`, message, ...args);
  }

  /**
   * Global instance of the LayerSettingsDialog class for configuring individual GIS layer properties.
   *
   * This dialog provides users with:
   * - Layer offset controls (shift up/down/left/right by 1m or 10m)
   * - Zoom visibility settings (minimum zoom level for layer display)
   * - Reset functionality for both offsets and zoom settings
   *
   * The dialog is created during initialization and reused throughout the application lifecycle.
   * Access the dialog through right-click context menu on layer labels in the settings panel.
   *
   * @type {LayerSettingsDialog|undefined}
   */
  let _layerSettingsDialog;

  /**
   * Dialog for configuring individual GIS layer settings and properties.
   *
   * Provides an interactive UI for users to:
   * - Adjust layer positioning with directional shift controls (1m or 10m increments)
   * - Set minimum zoom level for layer visibility (12-22 range)
   * - Reset layer offsets to original position
   * - Reset zoom visibility to layer defaults
   *
   * The dialog is draggable and modal, appearing when users right-click on layer labels.
   * Changes are immediately applied to the map and persisted to user settings.
   *
   * @class LayerSettingsDialog
   */
  class LayerSettingsDialog {
    #gisLayer;
    #minVisibleAtZoom = 12;
    #maxVisibleAtZoom = 22;
    #titleText;
    #visibleAtZoomInput;
    #offsetDisplayDiv;

    constructor() {
      this.#titleText = $('<span>');

      const closeButton = $('<span>', {
        style: 'cursor:pointer;padding-left:14px;font-size:20px;color:#eaf6ff;float:right;',
        class: 'fa fa-window-close',
        title: 'Close',
      }).on('click', () => this.#onCloseButtonClick());

      const shiftUpButton = LayerSettingsDialog.#createShiftButton('fa-angle-up').on('click', () => this.#onShiftButtonClick(0, 1));
      const shiftLeftButton = LayerSettingsDialog.#createShiftButton('fa-angle-left').on('click', () => this.#onShiftButtonClick(-1, 0));
      const shiftRightButton = LayerSettingsDialog.#createShiftButton('fa-angle-right').on('click', () => this.#onShiftButtonClick(1, 0));
      const shiftDownButton = LayerSettingsDialog.#createShiftButton('fa-angle-down').on('click', () => this.#onShiftButtonClick(0, -1));
      const resetOffsetButton = $('<button>', {
        class: 'form-control',
        style:
          'height: 26px; width: auto; padding: 2px 12px 2px 12px; display: inline-block; float: right; font-weight:bold;background:#4d6a88;color:#eaf6ff;border-radius:5px;border:1px solid #4d6a88;margin-left:4px;',
      })
        .text('Reset')
        .on('click', () => this.#onResetOffsetButtonClick());

      //Offset display element
      this.#offsetDisplayDiv = $('<div>', {
        style: 'font-size:12px; color:#4d6a88; background:#d6e6f3; border-radius:6px; margin:4px 0 4px 0; padding:4px 8px; text-align:center; font-weight:bold;',
      });
      this.#updateOffsetDisplay();

      // Compose main dialog UI
      this._dialogDiv = $('<div>', {
        style:
          'position: fixed; top: 15%; left: 400px; width: 235px; z-index: 100; background: #73a9bd;' +
          'border-width: 1px; border-style: solid; border-radius: 14px; box-shadow: 5px 6px 14px rgba(0,0,0,0.58);' +
          'border-color: #50667b; padding: 0; font-family: inherit;',
      }).append(
        $('<div>').append(
          // HEADER
          $('<div>', {
            style: 'border-radius:14px 14px 0px 0px; padding: 5px 5px 5px 5px; color: #fff; background:#4d6a88;font-weight: bold; text-align:left; font-size:17px;',
          }).append(this.#titleText, closeButton),
          // BODY
          $('<div>', { style: 'padding: 5px 5px 5px 5px;' }).append(
            $('<div>', {
              style: 'border-radius: 7px; width: 100%; padding:8px 6px 10px 8px; background:#d6e6f3; margin-bottom:6px; margin-right:0; box-sizing:border-box;',
            }).append(
              resetOffsetButton,
              $('<input>', {
                type: 'radio',
                id: 'gisLayerShiftAmt1',
                name: 'gisLayerShiftAmt',
                value: '1',
                checked: 'checked',
                style: 'margin-left:4px;accent-color:#4d6a88;',
              }),
              $('<label>', { for: 'gisLayerShiftAmt1', style: 'margin-right:8px;margin-left:2px;color:#4d6a88;font-weight:600;font-size:13px;' }).text('1m'),
              $('<input>', {
                type: 'radio',
                id: 'gisLayerShiftAmt10',
                name: 'gisLayerShiftAmt',
                value: '10',
                style: 'margin-left: 6px;accent-color:#4d6a88;',
              }),
              $('<label>', { for: 'gisLayerShiftAmt10', style: 'color:#4d6a88;font-weight:600;font-size:13px;' }).text('10m'),
              $('<div>', { style: 'padding: 6px 0 0 0;' }).append(
                $('<table>', { style: 'table-layout:fixed; width:70px; height:84px; margin:auto;' }).append(
                  $('<tr>').append($('<td>', { align: 'center', style: 'width:20px;height:28px;' }), $('<td>', { align: 'center', style: 'width:20px;' }).append(shiftUpButton), $('<td>')),
                  $('<tr>').append($('<td>', { align: 'center' }).append(shiftLeftButton), $('<td>', { align: 'center' }), $('<td>', { align: 'center' }).append(shiftRightButton)),
                  $('<tr>').append($('<td>', { align: 'center' }), $('<td>', { align: 'center' }).append(shiftDownButton), $('<td>', { align: 'center' })),
                ),
              ),
            ),
            this.#offsetDisplayDiv,
            $('<div>', {
              style: 'border-radius: 7px; width:100%; padding:12px 8px 8px 10px; margin-top:2px; background: #d6e6f3; margin-right:0px;box-sizing:border-box;',
            }).append(
              $('<div>', { style: 'display: flex; justify-content: flex-end; margin-bottom: 8px;' }).append(
                $('<button>', {
                  class: 'form-control',
                  style: 'height: 26px; width:auto;padding: 2px 12px 2px 12px; background:#4d6a88;color:#eaf6ff;border:1px solid #4d6a88;font-weight:bold;border-radius:5px;',
                })
                  .text('Reset')
                  .on('click', this.#onResetVisibleAtZoomClick.bind(this)),
              ),
              $('<div>').append(
                $('<label>', { for: 'visible-at-zoom-input', style: 'font-size:14px;font-weight:bold;color:#4d6a88;' }).text('Visible at zoom:'),
                (this.#visibleAtZoomInput = $('<input>', {
                  type: 'number',
                  id: 'visible-at-zoom-input',
                  min: this.#minVisibleAtZoom,
                  max: this.#maxVisibleAtZoom,
                  style: 'margin-left: 6px; width:46px;font-size:13px;border-radius:3px;',
                }).change((v) => this.#onVisibleAtZoomChange(v))),
              ),
              $('<div>', { style: 'font-size: 12.5px; color: #4d6a88; margin-top:5px;white-space:pre-line;text-align:left;' }).text(
                'Pan or zoom the map to refresh after changing.\n\nSetting this value too low may cause performance issues.',
              ),
            ),
          ),
        ),
      );

      this.hide();
      this._dialogDiv.appendTo('body');

      if (typeof jQuery.ui !== 'undefined') {
        const that = this;
        this._dialogDiv.draggable({
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
        this.#updateOffsetDisplay();
      }
    }

    #initVisibleAtZoomInput() {
      this.#visibleAtZoomInput.val(getGisLayerVisibleAtZoom(this.#gisLayer));
    }

    getShiftAmount() {
      return $('input[name=gisLayerShiftAmt]:checked').val();
    }

    show() {
      this._dialogDiv.show();
      this.#updateOffsetDisplay();
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
      const shiftAmount = parseFloat(this.getShiftAmount());
      x *= shiftAmount;
      y *= shiftAmount;
      const { id } = this.gisLayer;
      let offset = settings.getLayerSetting(id, 'offset');
      if (!offset) {
        offset = { x: 0, y: 0 };
        settings.setLayerSetting(id, 'offset', offset);
      }
      offset.x += x;
      offset.y += y;
      saveSettingsToStorage();
      this.#updateOffsetDisplay(); // <--- UPDATE DISPLAY
      debouncedFetch(); // reload features using new offset
    }

    #onResetOffsetButtonClick() {
      const { id } = this.gisLayer;
      if (settings.getLayerSetting(id, 'offset')) {
        settings.removeLayerSetting(id, 'offset');
        saveSettingsToStorage();
        this.#updateOffsetDisplay(); // <--- UPDATE DISPLAY
        debouncedFetch(); //reload features removing offset
      } else {
        this.#updateOffsetDisplay(); // <--- Also update even if no offset was set
      }
    }

    #updateOffsetDisplay() {
      if (!this.#gisLayer || !this.#offsetDisplayDiv) return;
      const offset = settings.getLayerSetting(this.#gisLayer.id, 'offset') ?? { x: 0, y: 0 };
      const fmt = (v) => (typeof v === 'number' ? v.toFixed(0) : '0');
      this.#offsetDisplayDiv.html(`Current offset:<br>X = ${fmt(offset.x)} m  |  Y = ${fmt(offset.y)} m`);
    }

    static #createShiftButton(fontAwesomeClass) {
      return $('<button>', {
        class: 'form-control',
        style:
          'cursor:pointer;font-size:15px;padding: 3px;border-radius: 8px;width: 25px;height: 25px;background:#eaf6ff;border:1px solid #8ea0b7;color:#4d6a88;box-shadow:0 1.5px 4px #b6d0eb66;margin:1.5px;',
      }).append($('<i>', { class: 'fa', style: 'vertical-align: middle;font-size:16px;' }).addClass(fontAwesomeClass));
    }
  }

  /**
   * Applies the current font family and font size settings to the default and road layer styles.
   *
   * This function synchronizes the font settings from the user's saved preferences with the
   * global style objects used for rendering GIS features on the map. It handles both font
   * family selection and font size configuration, applying appropriate fallbacks when
   * settings are missing or invalid.
   *
   * Font Family Logic:
   * - If a valid font family is set and not 'inherit', applies it to both styles
   * - Otherwise, defaults both styles to 'inherit' to use system/browser defaults
   *
   * Font Size Logic:
   * - If a valid numeric font size is set, applies it to both styles
   * - Otherwise, defaults both styles to 20px as the fallback size
   *
   * Side Effects:
   * - Modifies {@link DEFAULT_STYLE.fontFamily} and {@link ROAD_STYLE.fontFamily}
   * - Modifies {@link DEFAULT_STYLE.fontSize} and {@link ROAD_STYLE.fontSize}
   * - Changes take effect on next map layer redraw/refresh
   *
   * @function applyFontSettingsToStyles
   * @returns {void} No return value - operates via side effects on global style objects
   *
   * @see {@link settings.fontFamily} - User's selected font family preference
   * @see {@link settings.fontSize} - User's selected font size preference
   * @see {@link DEFAULT_STYLE} - Style object for default GIS layer features
   * @see {@link ROAD_STYLE} - Style object for road/line GIS layer features
   * @see {@link loadSettingsFromStorage} - Calls this function after loading settings
   * @see {@link initSettingsTab} - Font controls call this function on change
   *
   * @example
   * // Called automatically when settings are loaded
   * loadSettingsFromStorage();
   * // applyFontSettingsToStyles() is called internally
   *
   * @example
   * // Called when user changes font settings
   * settings.fontFamily = 'Arial, sans-serif';
   * settings.fontSize = 24;
   * applyFontSettingsToStyles();
   * // Both DEFAULT_STYLE and ROAD_STYLE now use Arial at 24px
   *
   * @example
   * // Fallback behavior with invalid settings
   * settings.fontFamily = 'inherit';
   * settings.fontSize = null;
   * applyFontSettingsToStyles();
   * // Results in fontFamily: 'inherit', fontSize: 12
   */
  function applyFontSettingsToStyles() {
    // Apply font family
    if (settings.fontFamily && settings.fontFamily !== 'inherit') {
      DEFAULT_STYLE.fontFamily = settings.fontFamily;
      ROAD_STYLE.fontFamily = settings.fontFamily;
    } else {
      DEFAULT_STYLE.fontFamily = 'inherit';
      ROAD_STYLE.fontFamily = 'inherit';
    }

    // Apply font size
    if (settings.fontSize && typeof settings.fontSize === 'number') {
      DEFAULT_STYLE.fontSize = settings.fontSize;
      ROAD_STYLE.fontSize = settings.fontSize;
    } else {
      DEFAULT_STYLE.fontSize = 12; // fallback to default
      ROAD_STYLE.fontSize = 12;
    }

    // Update all LAYER_STYLES as well
    for (const styleObj of Object.values(LAYER_STYLES)) {
      if (styleObj && typeof styleObj === 'object') {
        styleObj.fontFamily = DEFAULT_STYLE.fontFamily;
        styleObj.fontSize = DEFAULT_STYLE.fontSize;
      }
    }
  }

  /**
   * Loads user settings from localStorage and initializes the global settings object.
   *
   * Performs the following operations:
   * - Retrieves stored settings from localStorage using {@link SETTINGS_STORE_NAME} key
   * - Merges stored settings with default values to ensure all required properties exist
   * - On first call only: Migrates legacy settings formats to current structure (selectedStates → selectedSubL1, shortcut formats)
   * - Assigns utility methods for layer-specific setting management
   * - Synchronizes global UI state variables with loaded settings
   * - Auto-saves if any migrations were performed (first call only)
   *
   * Migration Features (first call only):
   * - Converts old `selectedStates` array to `selectedSubL1` format (USA-STATE)
   * - Migrates legacy shortcut properties to `shortcuts` object structure
   * - Upgrades shortcut format from raw strings to `{raw, combo}` objects
   *
   * The resulting settings object includes utility methods:
   * - `getLayerSetting(layerID, settingName)` - Retrieve layer-specific setting
   * - `setLayerSetting(layerID, settingName, value)` - Set layer-specific setting
   * - `removeLayerSetting(layerID, settingName?)` - Remove setting or entire layer config
   *
   * @function loadSettingsFromStorage
   * @param {boolean} [firstCall=false] - Whether this is the initial script load (enables migrations)
   * @returns {void} No return value - modifies global {@link settings} object and UI state variables
   * @throws {Error} Logs parsing errors but continues with default settings
   *
   * @see {@link saveSettingsToStorage}
   * @see {@link SETTINGS_STORE_NAME}
   * @see {@link settings}
   *
   * @example
   * // Called during script initialization with migrations
   * loadSettingsFromStorage(true);
   *
   * @example
   * // Called during runtime refresh without migrations
   * loadSettingsFromStorage();
   * loadSettingsFromStorage(false);
   */
  function loadSettingsFromStorage(firstCall = false) {
    const defaultSettings = {
      lastVersion: '',
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
      layerGroups: {},
      addrLabelDisplay: 'all',
      socrataAppToken: '',
      fontFamily: 'inherit',
      fontSize: 12,
      getLayerSetting: function () {
        return undefined;
      },
      setLayerSetting: function () {},
      removeLayerSetting: function () {},
    };

    let loadedSettings = {};
    let migrated = false; // Track if any migration occurred
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
      }
    }

    // ---- MIGRATION SECTION: Only run on first call ----
    if (firstCall) {
      // MIGRATION: old selectedStates -> selectedSubL1
      if (loadedSettings.selectedStates && Array.isArray(loadedSettings.selectedStates)) {
        if (!Array.isArray(loadedSettings.selectedSubL1)) loadedSettings.selectedSubL1 = [];
        loadedSettings.selectedStates.forEach((stateCode) => {
          const converted = `USA-${stateCode}`;
          if (!loadedSettings.selectedSubL1.includes(converted)) {
            loadedSettings.selectedSubL1.push(converted);
          }
        });
        delete loadedSettings.selectedStates;
        migrated = true;
        logDebug('Migrated legacy selectedStates to selectedSubL1');
      }

      // Legacy shortcut keys migration
      if (loadedSettings.toggleHnsOnlyShortcut) {
        if (!loadedSettings.shortcuts) loadedSettings.shortcuts = {};
        loadedSettings.shortcuts.toggleHnsOnly = loadedSettings.toggleHnsOnlyShortcut;
        delete loadedSettings.toggleHnsOnlyShortcut;
        migrated = true;
      }
      if (loadedSettings.toggleEnabledShortcut) {
        if (!loadedSettings.shortcuts) loadedSettings.shortcuts = {};
        loadedSettings.shortcuts.toggleEnabled = loadedSettings.toggleEnabledShortcut;
        delete loadedSettings.toggleEnabledShortcut;
        migrated = true;
      }

      // MIGRATE legacy shortcut format
      if (loadedSettings.shortcuts && typeof loadedSettings.shortcuts === 'object') {
        let migratedShortcuts = false;
        Object.entries(loadedSettings.shortcuts).forEach(([shortcutId, shortcutValue]) => {
          if (typeof shortcutValue === 'string') {
            loadedSettings.shortcuts[shortcutId] = {
              raw: shortcutValue,
              combo: shortcutKeycodesToCombo(shortcutValue),
            };
            migratedShortcuts = true;
          }
        });
        if (migratedShortcuts) {
          logDebug('Migrated legacy shortcut RAW strings to {raw, combo} objects');
          migrated = true;
        }
      }
    }
    // ---- END MIGRATION SECTION ----

    // --- MERGE with defaults ---
    settings = { ...defaultSettings, ...loadedSettings };

    // --- Assign globals ---
    isPopupVisible = settings.isPopupVisible;
    useAcronyms = settings.useAcronyms;
    useTitleCase = settings.useTitleCase;
    useStateHwy = settings.useStateHwy;
    removeNewLines = settings.removeNewLines;

    // Apply font family and font size to styles
    applyFontSettingsToStyles();

    // --- Utility layer functions ---
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

    // Remove an individual setting or the entire layer if no settingName
    settings.removeLayerSetting = function removeLayerSetting(layerID, settingName) {
      if (typeof settingName === 'undefined') {
        // Remove the entire layer settings block
        delete this.layers[layerID];
      } else {
        const layerSettings = this.layers[layerID];
        if (layerSettings) {
          delete layerSettings[settingName];
          // If the layerSettings object is now empty, remove the layer entirely
          if (Object.keys(layerSettings).length === 0) {
            delete this.layers[layerID];
          }
        }
      }
    };

    // --- Save if migrated (after settings object is fully constructed) ---
    if (firstCall && migrated) {
      saveSettingsToStorage();
      logDebug('Settings saved after migration');
    }
  }

  // prettier-ignore
  const KEYCODE_MAP = {
  // Letters
  65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E', 70: 'F', 
  71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L', 
  77: 'M', 78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R', 
  83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 
  89: 'Y', 90: 'Z',
  // Numbers
  48: '0', 49: '1', 50: '2', 51: '3', 52: '4', 53: '5', 
  54: '6', 55: '7', 56: '8', 57: '9'
  };

  // Modifier letter to value mapping
  const MOD_LOOKUP = { C: 1, S: 2, A: 4 }; // (Meta/Ctrl share 'C')

  /**
   * Parses an integer bitmask string representing keyboard modifiers and returns a concatenated SDK combo string.
   *
   * Modifiers bitmask:
   *   1: Control or Meta ("C")
   *   2: Shift ("S")
   *   4: Alt ("A")
   *   8: Meta ("C") (treated as synonymous with Ctrl)
   *
   * For example, input "6" (bits 2 and 4 set) returns "SA", input "1" or "8" returns "C".
   *
   * @param {string|number} modifiers - The bitmask value as a string or number (e.g., "4", 6).
   * @returns {string} Concatenated string of modifier letters used by the SDK ("C", "S", "A").
   */
  function parseModifiers(modifiers) {
    const intMod = parseInt(modifiers, 10);
    let combos = ''; // SDK wants "A", "C", "S" concatenated, not array of words
    if (intMod & 1) combos += 'C'; // Ctrl or Meta → "C"
    if (intMod & 2) combos += 'S';
    if (intMod & 4) combos += 'A';
    if (intMod & 8) combos += 'C'; // Meta = "C", same as Ctrl per SDK doc
    return combos;
  }

  /**
   * Converts an SDK shortcut combo string (e.g., "A+P", "SA+L") to a raw keycode string (e.g., "4,80").
   * - If input is already in raw keycode format (e.g., "4,80"), returns it as-is.
   * - If the input is not a valid combo or raw string, returns it as-is.
   *
   * @param {string} comboStr - Shortcut string in SDK format (e.g., "A+P", "SA+L") or raw format (e.g., "4,80").
   * @returns {string} Raw keycode string (e.g., "4,80") or the original input if unparseable.
   */
  function comboToRawKeycodes(comboStr) {
    if (!comboStr || typeof comboStr !== 'string') return comboStr;
    // Already RAW (eg "4,80")
    if (comboStr.match(/^\d+,\d+$/)) return comboStr;

    // Parse "SA+L", "A+P", "C+Q", etc:
    const sdkMatch = comboStr.match(/^([ACS]+)\+([A-Z0-9])$/);
    if (sdkMatch) {
      const modStr = sdkMatch[1];
      const keyStr = sdkMatch[2];

      // Determine modifier bitmask
      let modValue = 0;
      for (const m of modStr) {
        if (MOD_LOOKUP[m]) modValue |= MOD_LOOKUP[m];
      }

      // Determine keycode
      // Letter: use ASCII
      let keyCode = keyStr.charCodeAt(0);

      // (If needed, Numbers: use numbers 0...9 → 48...57)
      if (keyStr >= '0' && keyStr <= '9') keyCode = keyStr.charCodeAt(0);

      return `${modValue},${keyCode}`;
    }

    // If input can't be parsed, fall through (could be a raw keycode fallback?)
    return comboStr;
  }

  /**
   * Converts a raw keycode shortcut string (e.g. "4,72") to a readable SDK combo format (e.g. "A+H").
   * - If the input is already in SDK combo format ("A+P" or "SA+L"), returns it as-is.
   * - If the input is blank or "None", returns `null`.
   * - Otherwise, parses the modifier and keycode to return a combo string.
   *
   * @param {string} keycodeStr - Raw shortcut string representing modifiers and key code (e.g. "4,72" or "A+P").
   * @returns {string|null} SDK combo string (e.g. "A+H", "SA+L"), the original string if unparseable, or `null` if input is blank/"None".
   */
  function shortcutKeycodesToCombo(keycodeStr) {
    if (!keycodeStr || keycodeStr === 'None' || keycodeStr === '') return null;

    if (typeof keycodeStr !== 'string') return keycodeStr;
    // Already in SDK format ("A+P"), return as-is
    if (/^[ACS]+\+.+$/.test(keycodeStr)) return keycodeStr;

    const [mod, key] = keycodeStr.split(',').map((x) => x.trim());
    if (mod === undefined || key === undefined) return keycodeStr;

    const modLetters = parseModifiers(mod);

    // SDK format wants a character ('A', '2'), else keycode number
    if ((key >= 65 && key <= 90) || (key >= 48 && key <= 57)) {
      const keyChar = KEYCODE_MAP[key];
      return modLetters ? `${modLetters}+${keyChar}` : keyChar;
    } else {
      return modLetters ? `${modLetters}+${key}` : key;
    }
  }

  /**
   * Saves current application settings and shortcut definitions to localStorage.
   *
   * Serializes the global {@link settings} object (including all user preferences,
   * layer configurations, and shortcut definitions) and stores it under the
   * {@link SETTINGS_STORE_NAME} key for persistence across browser sessions.
   *
   * Settings preserved include:
   * - Layer visibility states and custom configurations
   * - User interface preferences (enabled state, UI visibility)
   * - Keyboard shortcut mappings and custom key combinations
   * - Geographic selections (countries, states, etc.)
   * - Layer-specific settings (offsets, zoom levels, etc.)
   *
   * @function saveSettingsToStorage
   * @returns {void} No return value - data is persisted to localStorage
   * @throws {Error} May throw if localStorage quota exceeded or unavailable
   *
   * @see {@link loadSettingsFromStorage}
   * @see {@link SETTINGS_STORE_NAME}
   * @see {@link settings}
   *
   * @example
   * // Save after user changes a setting
   * settings.enabled = false;
   * saveSettingsToStorage();
   *
   * // Save after modifying layer settings
   * settings.setLayerSetting('layer1', 'visible', true);
   * saveSettingsToStorage();
   */
  function saveSettingsToStorage() {
    settings.shortcuts = {};

    /** @type {Shortcut[]} */
    const shortcuts = sdk.Shortcuts.getAllShortcuts();
    shortcuts.forEach(
      /** @param {Shortcut} shortcut */
      (shortcut) => {
        const raw = comboToRawKeycodes(shortcut.shortcutKeys);
        const combo = shortcutKeycodesToCombo(raw);
        settings.shortcuts[shortcut.shortcutId] = { raw, combo };
      },
    );

    settings.lastVersion = scriptVersion;
    settings.isPopupVisible = isPopupVisible;
    settings.useAcronyms = useAcronyms;
    settings.useTitleCase = useTitleCase;
    settings.useStateHwy = useStateHwy;
    settings.removeNewLines = removeNewLines;

    localStorage.setItem(SETTINGS_STORE_NAME, JSON.stringify(settings));
    logDebug('Settings saved');
  }

  /**
   * Returns the maximum allowable offset (in degrees) for a given map zoom level.
   * If no matching zoom level is found, uses the most detailed (22).
   * @param {number} zoomLevel
   * @returns {number}
   */
  function getMaxAllowableOffsetForZoom(zoomLevel) {
    const zoomToOffsetMap = {
      12: 0.0009, // ~100 meters
      13: 0.00045, // ~50 meters
      14: 0.000225, // ~25 meters
      15: 0.0001125, // ~12 meters
      16: 0.000056, // ~6 meters
      17: 0.000028, // ~3 meters
      18: 0.000014, // ~1.5 meters
      19: 0.000007, // ~1 meter
      20: 0.000007, // ~1 meter
      21: 0.000007, // ~1 meter
      22: 0.000007, // ~1 meter
    };
    // Always round to nearest integer for lookup
    const key = Math.round(zoomLevel);
    return zoomToOffsetMap[key] !== undefined ? zoomToOffsetMap[key] : zoomToOffsetMap[22];
  }

  /**
   * Constructs a GIS feature query URL for a layer based on platform type, map extent, and zoom level.
   *
   * Supports:
   * - ArcGIS: geometry envelope query
   * - Socrata V2: SODA API .geojson endpoint
   * - Socrata V3: SQL-in-query (GeoJSON response)
   *
   * Returns the fully constructed query URL (string) used for data requests.
   *
   * @function getUrl
   * @param {[number, number, number, number]} extent - Bounding box ([xmin, ymin, xmax, ymax]) in longitude/latitude (WGS84).
   * @param {GisLayer} gisLayer - The GIS layer definition (includes url, platform, labelFields, where, etc.).
   * @param {number} zoom - Current map zoom level (affects spatial offset/precision).
   * @returns {string} URL string for the HTTP GET request to fetch features for the layer. Returns empty string if platform unsupported or if required fields are missing.
   *
   * @example
   * const url = getUrl([-74.2, 40.7, -74.1, 40.8], { platform: 'ArcGIS', url: '...', labelFields: ['name'] }, 15);
   * // Returns constructed ArcGIS query URL
   */
  function getUrl(extent, gisLayer, zoom) {
    /**
     * Utility: gets fields or returns empty array
     * @param {unknown} fields
     * @returns {string[]}
     */
    const getFields = (fields) => (Array.isArray(fields) ? fields.slice() : []);

    // ----- ArcGIS -----
    if (gisLayer.platform === 'ArcGIS' || !gisLayer.platform) {
      const geometry = {
        xmin: extent[0],
        ymin: extent[1],
        xmax: extent[2],
        ymax: extent[3],
        spatialReference: { wkid: 4326 },
      };

      const maxAllowableOffset = getMaxAllowableOffsetForZoom(zoom);
      const fields = getFields(gisLayer.labelFields).join(',');

      const params = [
        `geometry=${encodeURIComponent(JSON.stringify(geometry))}`,
        `outFields=${encodeURIComponent(fields)}`,
        'returnGeometry=true',
        'spatialRel=esriSpatialRelIntersects',
        'geometryType=esriGeometryEnvelope',
        'inSR=4326',
        'outSR=4326',
        'f=json',
        `maxAllowableOffset=${maxAllowableOffset}`,
        gisLayer.where ? `where=${encodeURIComponent(gisLayer.where)}` : '',
      ].filter(Boolean);

      const url = `${gisLayer.url}/query?${params.join('&')}`;
      return url;
    }

    //----- Socrata V2 and V3 -----
    if (gisLayer.platform === 'SocrataV2' || gisLayer.platform === 'SocrataV3') {
      const labelFields = getFields(gisLayer.labelFields);
      if (labelFields.length === 0) {
        logDebug("labelFields must have the field name that holds the geometry points as the first element for Socrata URLs! Example: 'location', 'the_geom', 'geometry', etc.");
        return '';
      }
      const geomField = labelFields[0];

      // Build bounding box with buffer (north, west, south, east)
      const bufferDeg = 0.001;
      const [xmin, ymin, xmax, ymax] = extent;
      const boxClause = `within_box(${geomField},${ymax + bufferDeg},${xmin - bufferDeg},${ymin - bufferDeg},${xmax + bufferDeg})`;
      const isNotNullClause = `${geomField} IS NOT NULL`;

      // User WHERE (if any)
      let customWhere = '';
      if (typeof gisLayer.where === 'string' && gisLayer.where.trim()) {
        customWhere = gisLayer.where.trim();
      }

      // ----- V2: SODA -----
      if (gisLayer.platform === 'SocrataV2') {
        const selectClause = labelFields.join(',');
        const whereParts = [];
        if (customWhere) whereParts.push(customWhere);
        whereParts.push(boxClause);
        whereParts.push(isNotNullClause);
        const whereClause = whereParts.length ? `$where=${encodeURIComponent(whereParts.join(' AND '))}` : '';
        const params = [`$select=${encodeURIComponent(selectClause)}`, whereClause, `$limit=3000`].filter(Boolean);
        let urlBase = gisLayer.url + '.geojson';
        const url = urlBase + '?' + params.join('&');
        return url;
      }

      // ----- V3: "SQL-in-query-param" pattern -----
      if (gisLayer.platform === 'SocrataV3') {
        // V3 only supports SQL-in-query, **not** SoQL style params.
        // Build SQL string: SELECT ..., ... WHERE ... AND ... LIMIT ...
        const selectFieldsList = labelFields.join(', ');
        const whereParts = [];
        if (customWhere) whereParts.push(customWhere);
        whereParts.push(boxClause);
        whereParts.push(isNotNullClause);
        const whereSQL = whereParts.length ? `WHERE ${whereParts.join(' AND ')}` : '';
        const sql = `SELECT ${selectFieldsList} ${whereSQL} LIMIT 3000`;
        let urlBase = gisLayer.url + '/query.geojson';
        // NOTE: URL-encode the entire SQL string as the query's value
        const url = `${urlBase}?query=${encodeURIComponent(sql)}`;
        return url;
      }
    }

    // ----- Unknown -----
    logDebug('getUrl fallback (no matching platform type found for:', gisLayer);
    return '';
  }

  /**
   * Generates a simple hash code from a string using a basic polynomial rolling hash algorithm.
   *
   * This function creates a 32-bit signed integer hash that can be used for quick string comparisons,
   * caching keys, or generating pseudo-unique identifiers from string content. The algorithm is
   * deterministic - the same input will always produce the same hash value.
   *
   * @function hashString
   * @param {string} value - The input string to hash. Empty strings return 0.
   * @returns {number} A 32-bit signed integer hash code. Range: -2,147,483,648 to 2,147,483,647.
   *
   * @example
   * // Basic usage
   * const hash1 = hashString("Hello World");
   * const hash2 = hashString("Hello World");
   * console.log(hash1 === hash2); // true - same input produces same hash
   *
   * @example
   * // Using as cache key
   * const cacheKey = `layer_${hashString(layer.name + layer.url)}`;
   *
   * @example
   * // Edge cases
   * hashString(""); // Returns 0
   * hashString("a"); // Returns 97 (ASCII value of 'a')
   */
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
   * Retrieves the current map extent coordinates in the WGS84 projection.
   *
   * @param {'wgs84'|'CRS84'|'4326'|'EPSG:4326'} [projection='wgs84'] - Optional projection name
   *      (case-insensitive; allowed values: 'wgs84', 'CRS84', '4326', 'EPSG:4326').
   * @returns {[number, number, number, number]} An array of [leftBottomLongitude, leftBottomLatitude, rightTopLongitude, rightTopLatitude] in WGS84.
   * @throws {Error} If an unsupported projection type is specified.
   */
  function getMapExtent(projection = 'wgs84') {
    const wgs84Extent = sdk.Map.getMapExtent(); // [xmin, ymin, xmax, ymax] in WGS84

    const wgs84Projections = ['wgs84', 'CRS84', '4326', 'EPSG:4326'];

    if (wgs84Projections.includes(projection.toLowerCase())) {
      return [wgs84Extent[0], wgs84Extent[1], wgs84Extent[2], wgs84Extent[3]];
    } else {
      throw new Error('Unsupported projection type');
    }
  }

  /**
   * Returns the "visibleAtZoom" setting for a GIS layer,
   * considering layer settings overrides, the layer's own property,
   * and falling back to a global default if neither is found.
   *
   * @param {GisLayer} gisLayer - The GIS layer configuration object.
   * @returns {number} The zoom level at which the layer should be visible.
   */
  function getGisLayerVisibleAtZoom(gisLayer) {
    // Fetch override settings
    const overrideVisibleAtZoom = settings.getLayerSetting(gisLayer.id, 'visibleAtZoom');
    if (typeof overrideVisibleAtZoom === 'number') {
      return overrideVisibleAtZoom;
    }

    const val = gisLayer.visibleAtZoom;
    if (typeof val === 'number') {
      return val;
    }

    return DEFAULT_VISIBLE_AT_ZOOM;
  }

  /**
   * Calculates the zoom level at which labels for a GIS layer should become visible.
   * If the layer has a non-null 'labelsVisibleAtZoom' property, computes the offset from the layer's 'visibleAtZoom'
   * (with a fallback to a default if 'visibleAtZoom' is missing).
   * Otherwise, defaults to 'layerVisibleAtZoom + 1'.
   * Ensures the result is at least 1.
   *
   * @param {GisLayer} gisLayer - The GIS layer configuration object.
   * @param {number} layerVisibleAtZoom - The zoom level at which the layer itself becomes visible.
   * @returns {number} The computed zoom level at which the labels should be visible (>= 1).
   */
  function getGisLayerLabelsVisibleAtZoom(gisLayer, layerVisibleAtZoom) {
    layerVisibleAtZoom = +layerVisibleAtZoom;

    if (gisLayer.labelsVisibleAtZoom != null) {
      const baseVisibleAtZoom = gisLayer.visibleAtZoom != null ? +gisLayer.visibleAtZoom : DEFAULT_VISIBLE_AT_ZOOM;
      let labelsVisibleAtZoom = layerVisibleAtZoom + (+gisLayer.labelsVisibleAtZoom - baseVisibleAtZoom);

      if (labelsVisibleAtZoom < 1) labelsVisibleAtZoom = 1;
      return labelsVisibleAtZoom;
    } else {
      let labelsVisibleAtZoom = layerVisibleAtZoom + 1;
      if (labelsVisibleAtZoom < 1) labelsVisibleAtZoom = 1;
      return labelsVisibleAtZoom;
    }
  }

  /**
   * Asynchronously determines which geographical regions are visible within the current map viewport.
   *
   * Retrieves the current map extent in WGS84, constructs a {@link ViewportBBox},
   * and passes it to {@link WmeGisLBBOX.whatsInView} with high-precision intersection checks.
   * The results are stored in the (upper-scope) `_whatsInView` variable and also returned from this function.
   *
   * Caches results based on the current map extent. If the viewport has not changed since the last call,
   * and `forceRefresh` is not set, returns the cached result instead of recomputing.
   *
   * Steps:
   * 1. Gets current map extent in the "wgs84" coordinate system.
   * 2. If the extent is unchanged and `forceRefresh` is `false`, returns the cached result.
   * 3. Converts extent into a {@link ViewportBBox} with properties `minLon`, `minLat`, `maxLon`, `maxLat`.
   * 4. Calls {@link WmeGisLBBOX.whatsInView} with high-precision enabled and `returnGeoJson` disabled.
   * 5. Stores and returns the detailed intersecting regions as a {@link WhatsInViewResult}.
   *
   * @param {boolean} [forceRefresh=false] If true, forces a refresh even if the viewport has not changed.
   * @returns {Promise<WhatsInViewResult>} The intersecting regions as returned by {@link WmeGisLBBOX.whatsInView}.
   */
  async function whatsInView(forceRefresh = false) {
    const currentExtent = getMapExtent('wgs84');
    const extentHash = currentExtent.join(',');

    if (!forceRefresh && _whatsInView && _lastExtentHash === extentHash) {
      return _whatsInView;
    }

    _lastExtentHash = extentHash;
    const viewportBbox = {
      minLon: currentExtent[0],
      minLat: currentExtent[1],
      maxLon: currentExtent[2],
      maxLat: currentExtent[3],
    };

    /** @type {WhatsInViewResult} */
    _whatsInView = await WmeGisLBBOX.whatsInView(viewportBbox, true, false);
    return _whatsInView;
  }

  /**
   * Returns an array of fetchable GIS layers after applying multiple validation and filtering criteria.
   *
   * Checks performed include:
   * - Minimum map zoom (from SDK) must be >= 12.
   * - Layer must be enabled (`enabled === 1`).
   * - Layer must have a non-empty and defined URL.
   * - Layer's subdivision L1 (country/subL1) must match current settings selection.
   * - If `checkVisibility` is true, the layer's ID must be present in the set of visible layers from settings.
   * - If `checkZoomVisibility` is true, the layer must be visible for the current zoom level.
   * - Layer must match a country/subdivision actually visible in the map view (from `_whatsInView`).
   * - If the layer has subdivision level 2 (`subL2`), further filtered by active subdivision in view.
   *
   * @param {boolean} [checkVisibility=true] - If true, check whether each layer is visible in settings.
   * @param {boolean} [checkZoomVisibility=true] - If true, filter layers by their zoom visibility constraints.
   * @returns {GisLayer[]} Array of `GISLayer` objects that passed all checks and are eligible for fetching.
   */
  function getFetchableLayers(checkVisibility = true, checkZoomVisibility = true) {
    const zoom = sdk.Map.getZoomLevel();

    // If zoom level is below 12, log a message and return an empty array, as layers won't be fetched
    if (zoom < 12) {
      logDebug(`No layers fetched, zoom level is < 12!`);
      return [];
    }

    // Pre-compute sets for O(1) lookup performance
    const visibleLayersSet = new Set(settings.visibleLayers);
    const selectedSubL1Set = new Set(settings.selectedSubL1);
    const fetchableLayers = [];

    // Single pass with early exits for optimal performance
    for (const gisLayer of _gisLayers) {
      // Early exits for basic validation (fastest checks first)
      if (gisLayer.enabled !== 1 || !gisLayer.url?.trim() || !selectedSubL1Set.has(gisLayer.countrySubL1)) {
        continue;
      }

      // Check visibility settings if required
      if (checkVisibility && !visibleLayersSet.has(gisLayer.id)) {
        continue;
      }

      // Check zoom visibility if required
      if (checkZoomVisibility && zoom < getGisLayerVisibleAtZoom(gisLayer)) {
        continue;
      }

      // More expensive country/subdivision checks last
      if (isLayerInView(gisLayer)) {
        fetchableLayers.push(gisLayer);
      }
    }

    return fetchableLayers;
  }

  /**
   * Determines whether a given GIS layer is currently visible in the active map view.
   * A layer is considered "in view" if its country code (ISO_ALPHA3), subdivision level 1 (subL1),
   * and, if specified, subdivision level 2 (subL2), all match a corresponding entry in the current view's data.
   *
   * Returns `true` if the layer's country and subdivision identifiers are present in the view; `false` otherwise.
   *
   * @param {GisLayer} gisLayer - Layer object to check for map view presence.
   *   Should contain properties:
   *     - {string} gisLayer.country (ISO_ALPHA3 code),
   *     - {string} [gisLayer.subL1] (level-1 subdivision id),
   *     - {Array<string>} [gisLayer.subL2] (names/ids of level-2 subdivisions).
   * @returns {boolean} `true` if gisLayer is represented in the current view, `false` otherwise.
   *
   * @see _whatsInView - Map view data structure.
   * @see {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3|ISO_ALPHA3 codes}
   */
  function isLayerInView(gisLayer) {
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

    return true;
  }

  /**
   * Updates the visibility of GIS layer checkboxes and their parent containers
   * in the UI based on user-defined filter and zoom settings.
   *
   * Logic:
   * - Computes "applicable" GIS layers (using {@link getFetchableLayers} and the current zoom setting from {@link settings.onlyShowApplicableLayersZoom}).
   * - If {@link settings.onlyShowApplicableLayers} is false, all layers are shown regardless of applicability.
   * - Applicable layers' checkbox containers are shown, and non-applicable ones are hidden.
   * - Additionally, shows higher-level containers (`#gis-layers-for-<subL1>`) for any group that contains visible layers.
   *
   * Performance:
   * - Aggregates selectors to perform batched DOM show/hide operations, minimizing jQuery calls.
   *
   * Side Effects:
   * - Mutates the DOM, showing/hiding checkbox containers for each GIS layer and any relevant grouping containers.
   *
   * @function filterLayerCheckboxes
   * @returns {void}
   * @see {@link getFetchableLayers}
   * @see {@link settings}
   */
  function filterLayerCheckboxes() {
    const applicableLayers = getFetchableLayers(false, settings.onlyShowApplicableLayersZoom);
    const applicableSet = new Set(applicableLayers.map((l) => l.id));

    const showSelectors = [];
    const hideSelectors = [];
    const showSubL1 = new Set();

    _gisLayers.forEach((gisLayer) => {
      const selector = `#gis-layer-${gisLayer.id}-container`;
      const showLayer = applicableSet.has(gisLayer.id) || !settings.onlyShowApplicableLayers;

      if (showLayer) {
        showSelectors.push(selector);
        showSubL1.add(`#gis-layers-for-${gisLayer.subL1}`);
      } else {
        hideSelectors.push(selector);
      }
    });

    // Single DOM operations
    if (showSelectors.length) $(showSelectors.join(',')).show();
    if (hideSelectors.length) $(hideSelectors.join(',')).hide();
    if (showSubL1.size) $(Array.from(showSubL1).join(',')).show();
  }

  /**
   * @typedef {Object} LabelProcessingGlobals
   * @property {typeof Number} Number
   * @property {typeof Math} Math
   * @property {typeof Boolean} Boolean
   * @property {typeof parseInt} parseInt
   * @property {typeof Date} Date
   * @property {Object.<string, RegExp>} _regexReplace
   * @property {object} [sdk]
   */

  /** @type {LabelProcessingGlobals} */
  const labelProcessingGlobalVariables = {
    Number,
    Math,
    Boolean,
    parseInt,
    Date,
    _regexReplace,
    zoomLevel: null,
  };

  /**
   * Processes and generates a display label for a feature/item, using layer label fields,
   * zoom/area constraints, and optional ESTree/JS post-processing logic.
   * Applies address and content shortening based on style rules and settings.
   *
   * @param {GisLayer} gisLayer - GIS layer descriptor (with labelFields, style, processLabel, and possibly labelProcessingError).
   * @param {{attributes?: Object, properties?: Object, [field: string]: any}} item - The data source for the feature; may have `.attributes` (ArcGIS), `.properties` (GeoJSON), or fields directly.
   * @param {number} displayLabelsAtZoom - Minimum zoom level at which labels are displayed.
   * @param {number} area - Area of the feature in square meters (used for label display logic).
   * @param {boolean} [isPolyLine=false] - If true, the label logic is specific to polylines.
   * @returns {string} The processed label string for display (may be `''` if label is suppressed or error is present).
   */
  function processLabel(gisLayer, item, displayLabelsAtZoom, area, isPolyLine = false) {
    // Set zoomLevel at the start, just before use
    labelProcessingGlobalVariables.zoomLevel = sdk.Map.getZoomLevel();

    // --- Allow both ArcGIS and GeoJSON: resolve field source ---
    // If the item has .attributes, use that (ArcGIS); else .properties (GeoJSON); fallback: item itself.
    const fieldValues = item && typeof item === 'object' ? item.attributes || item.properties || item : {};
    let label = '';

    // --- Main label fields, only if zoom/area triggers label ---
    if (labelProcessingGlobalVariables.zoomLevel >= displayLabelsAtZoom || area >= 1000000) {
      label +=
        gisLayer.labelFields
          ?.map((fieldName) => fieldValues[fieldName])
          .join(' ')
          .trim() ?? '';

      // --- Optional ESTree/JS post-processing if configured ---
      if (gisLayer.processLabel) {
        if (gisLayer.labelProcessingError) {
          label = 'ERROR';
        } else {
          // Provide label and fields to processing context
          const ctx = {
            ...labelProcessingGlobalVariables,
            label,
            fieldValues,
          };
          const result = ESTreeProcessor.execute(gisLayer.processLabel, ctx);
          label = result.output?.trim() ?? '';
        }
      }
    }

    // --- Post-processing for certain styles (e.g., address shorteners) ---
    if (!isPolyLine) {
      if (label && ['points', 'parcels', 'state_points', 'state_parcels'].includes(gisLayer.style)) {
        const parsed = parseAddress(label);
        if (settings.addrLabelDisplay === 'hn') {
          label = parsed && parsed.houseNumber ? parsed.houseNumber : '';
        } else if (settings.addrLabelDisplay === 'street') {
          label = parsed && parsed.streetName ? parsed.streetName : '';
        } else if (settings.addrLabelDisplay === 'none') {
          label = '';
        }
      }
    }
    return label;
  }

  let lastFeatureId = 0;
  // SDK: Remove these once Map.getFeaturesByProperty is implemented: https://issuetracker.google.com/issues/419596843
  /** @type {ProcessedFeature[]} */
  let defaultFeatures = [];
  /** @type {ProcessedFeature[]} */
  let roadFeatures = [];

  /**
   * Offsets a geographic coordinate by a given distance in meters, accounting for latitude.
   *
   * Converts offset values in meters to degrees, using WGS84 (EPSG:4326) coordinate system.
   * X (east/west) offset is correctly scaled by the cosine of latitude.
   *
   * @param {number[]} coord           An array [longitude, latitude] in degrees.
   * @param {{x: number, y: number}} offsetInMeters
   *                                   Offset distances in meters:
   *                                     - x: meters east (positive) or west (negative)
   *                                     - y: meters north (positive) or south (negative)
   * @returns {number[]}               New coordinate [longitude, latitude] in degrees after offset.
   *
   * @example
   * // Move a point 50 meters north and 25 meters east
   * const newCoord = offsetCoord([-157.857, 21.304], {x: 25, y: 50});
   */

  function offsetCoord(coord, offsetInMeters) {
    const lat = coord[1];
    const latRads = (lat * Math.PI) / 180;
    const dLat = offsetInMeters.y / 111320;
    const dLon = offsetInMeters.x / (111320 * Math.cos(latRads));
    return [coord[0] + dLon, coord[1] + dLat];
  }

  /**
   * Returns a new geometry object with its coordinates offset by the given layerOffset.
   * Supports GeoJSON 'Point', 'LineString', 'MultiPoint', 'Polygon', 'MultiLineString', and 'MultiPolygon'.
   *
   * For supported geometry types, all coordinate values are translated by {@link layerOffset}.
   * Unknown or unsupported types are returned unchanged.
   *
   * @param {Object} geometry - GeoJSON-like geometry object.
   * @param {('Point'|'LineString'|'MultiPoint'|'Polygon'|'MultiLineString'|'MultiPolygon')} geometry.type - Geometry type name.
   * @param {Array|Array[]} geometry.coordinates - Coordinate array(s), in the format specified by the geometry type.
   * @param {{ x: number, y: number }} layerOffset - Offset to apply to each coordinate as {x, y}.
   * @returns {Object} A new geometry object of the same type with offset coordinates, or the input if type is not recognized.
   *
   * @see https://datatracker.ietf.org/doc/html/rfc7946#section-3.1
   */
  function offsetGeometry(geometry, layerOffset) {
    if (!geometry || !layerOffset || (layerOffset.x === 0 && layerOffset.y === 0)) {
      return geometry;
    }

    switch (geometry.type) {
      case 'Point':
        return { ...geometry, coordinates: offsetCoord(geometry.coordinates, layerOffset) };
      case 'LineString':
      case 'MultiPoint':
        return { ...geometry, coordinates: geometry.coordinates.map((coord) => offsetCoord(coord, layerOffset)) };
      case 'Polygon':
      case 'MultiLineString':
        return {
          ...geometry,
          coordinates: geometry.coordinates.map((ring) => ring.map((coord) => offsetCoord(coord, layerOffset))),
        };
      case 'MultiPolygon':
        return {
          ...geometry,
          coordinates: geometry.coordinates.map((poly) => poly.map((ring) => ring.map((coord) => offsetCoord(coord, layerOffset)))),
        };
      default:
        return geometry;
    }
  }

  /**
   * Clips a LineString or MultiLineString GeoJSON feature to the provided bounding box extent.
   *
   * Uses {@link turf.bboxClip} to perform the clipping operation.
   * If the feature is not a line, or clipping fails, returns the original input or null.
   *
   * Dependencies:
   * - [turf.bboxClip]{@link https://turfjs.org/docs/#bboxClip}
   *
   * @function clipLineFeatureToExtent
   * @param {Object} feature - GeoJSON Feature object with geometry of type LineString or MultiLineString.
   * @param {number[]} extent - Bounding box as [minX, minY, maxX, maxY] (WGS84 coordinates).
   * @returns {Object|null} The clipped feature, or null if the result is empty/outside.
   *
   * @example
   * const clipped = clipLineFeatureToExtent(lineFeature, [minX, minY, maxX, maxY]);
   */
  function clipLineFeatureToExtent(feature, extent) {
    if (!feature.geometry || !extent) return feature;
    const type = feature.geometry.type;
    if (type !== 'LineString' && type !== 'MultiLineString') return feature;
    try {
      const clipped = turf.bboxClip(feature, extent);
      // Ensure clipped geometry exists and has coordinates
      if (!clipped.geometry.coordinates || !clipped.geometry.coordinates.length) return null;
      return clipped;
    } catch (e) {
      return null;
    }
  }

  /**
   * Generates a monotonically increasing unique numeric identifier for GIS features.
   *
   * Used to assign the `.id` property of GeoJSON features for map updates and deduplication.
   *
   * @function generateFeatureId
   * @returns {number} Unique positive integer suitable for feature IDs.
   *
   * @example
   * const id = generateFeatureId();
   * feature.id = id;
   */
  function generateFeatureId() {
    lastFeatureId++;
    return lastFeatureId;
  }

  /**
   * Assigns layer properties and an ID to a GeoJSON feature.
   *
   * Adds or overwrites the following properties of the input feature:
   * - `properties.layerID`: set to `gisLayer.id`
   * - `properties.label`: set to the provided label
   * - `id`: set to a newly generated value from `generateFeatureId()`
   *
   * Modifies the input feature in-place and returns it.
   *
   * @param {Object} feature - A GeoJSON Feature object. Must have a `properties` field (object).
   * @param {GisLayer} gisLayer - Layer object containing at least an `id` property.
   * @param {string} label - The label to assign to the feature's properties.
   * @returns {Object} The modified feature with updated properties and ID.
   *
   * @example
   * const feature = { type: 'Feature', properties: {}, geometry: { type: 'Point', coordinates: [0, 0] } };
   * const layer = { id: 'roads' };
   * assignGisProperties(feature, layer, 'Highway');
   * // => feature.properties.layerID === 'roads'
   * // => feature.properties.label === 'Highway'
   * // => feature.id is set
   */
  function assignGisProperties(feature, gisLayer, label) {
    feature.properties = {
      ...feature.properties,
      layerID: gisLayer.id,
      label,
    };
    feature.id = generateFeatureId();
    return feature;
  }

  /**
   * Parses an address string into its house number and street components.
   *
   * This function splits addresses of the form "<houseNumber><suffix> <streetName>" using the following rules:
   * - The house number is a leading sequence of digits, optionally immediately followed by letters,
   *   digits, hyphens, or fraction unicode characters (such as "½"), attached without a space.
   *   Examples: "955A", "123-1", "123½".
   * - If a space appears after the house number, all following characters are treated as the street name.
   *   Example: "955A Cooke St" → houseNumber: "955A", streetName: "Cooke St"
   * - If there is a space between the numeric portion and the next character, the next word is considered part of the street name
   *   (e.g. "955 A Cooke St" → houseNumber: "955", streetName: "A Cooke St").
   * - Pure house number or pure street name are also supported.
   * - Returns null if the input does not match a recognized pattern.
   *
   * @param {string} address - The raw address string to parse.
   * @returns {Object|null} Parsed address object, or null if parsing fails. The object may have:
   *  - {string} houseNumber - The parsed house number, may include attached suffixes (as described above).
   *  - {number} numericPart - The numeric portion of the house number, parsed as an integer.
   *  - {string} streetName - The parsed street name, if present.
   *  - {boolean} hasHouseNumber - True if a house number was identified.
   *  - {boolean} hasStreetName - True if a street name was identified.
   *
   * @example
   * parseAddress("955A Cooke St"); // { houseNumber: "955A", numericPart: 955, streetName: "Cooke St", hasHouseNumber: true, hasStreetName: true }
   * parseAddress("955 A Cooke St"); // { houseNumber: "955", numericPart: 955, streetName: "A Cooke St", hasHouseNumber: true, hasStreetName: true }
   * parseAddress("123-1 Oak Rd");   // { houseNumber: "123-1", numericPart: 123, streetName: "Oak Rd", hasHouseNumber: true, hasStreetName: true }
   * parseAddress("Park Lane");      // { streetName: "Park Lane", hasHouseNumber: false, hasStreetName: true }
   */
  function parseAddress(address) {
    address = address.trim();
    // Match number plus trailing NO-SPACE suffixes (letters, hyphens, unicode fractions, digits)
    const mainMatch = address.match(/^([0-9]+(?:[A-Za-z½¼¾⁄\-0-9]*))\s+(.*)$/);
    if (mainMatch) {
      return {
        houseNumber: mainMatch[1],
        numericPart: parseInt(mainMatch[1], 10),
        streetName: mainMatch[2].trim(),
        hasHouseNumber: true,
        hasStreetName: true,
      };
    }
    // Only house number
    const hnOnly = address.match(/^([0-9]+[A-Za-z½¼¾⁄\-0-9]*)$/);
    if (hnOnly) {
      return {
        houseNumber: hnOnly[1],
        numericPart: parseInt(hnOnly[1], 10),
        hasHouseNumber: true,
        hasStreetName: false,
      };
    }
    // Only street name
    const streetOnly = address.match(/^([A-Za-z0-9\s]+)$/);
    if (streetOnly) {
      return {
        streetName: streetOnly[1].trim(),
        hasHouseNumber: false,
        hasStreetName: true,
      };
    }
    return null;
  }

  /**
   * Deduplicates GeoJSON Point features in-place based on proximity and consolidates addresses into street ranges.
   *
   * Uses a spatial grid to find and merge Points that are within ~1 meter of each other and have labels.
   * Groups addresses by street name and creates min-max ranges (e.g., "1101-1435 SW 11TH ST").
   * Handles alphanumeric house numbers (12A, 100½) with proper sorting.
   * Limits display to 10 street ranges with "<X more streets>" for additional ones.
   * Skips features marked with `skipDupeCheck`.
   *
   * Dependencies:
   * - {@link turf.distance} for spatial measurement
   * - {@link turf.flatten} (used upstream in processing pipeline)
   *
   * @function deduplicatePointFeatures
   * @param {Array<ProcessedFeature>} features - Array of GeoJSON features (should have `.geometry.type === "Point"` and `.properties.label`).
   * @returns {Array<ProcessedFeature>} The deduplicated array (modifies and returns original input).
   *
   * @example
   * // Input: Multiple points at same location with individual addresses
   * const features = [
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '1101 SW CHAPEL LN' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '1105 SW CHAPEL LN' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '1201 SW CHAPEL LN' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '1301 SW FLOYD LN' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '1305 SW FLOYD LN' } }
   * ];
   *
   * deduplicatePointFeatures(features);
   *
   * // Result: Single point with consolidated label:
   * // "1101-1201 SW CHAPEL LN\n1301-1305 SW FLOYD LN"
   *
   * @example
   * // Handles alphanumeric house numbers
   * const alphanumericFeatures = [
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '12A MAIN ST' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '12B MAIN ST' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '15 MAIN ST' } },
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '100½ OAK AVE' } }
   * ];
   *
   * deduplicatePointFeatures(alphanumericFeatures);
   *
   * // Result: Single point with label:
   * // "12A-15 MAIN ST\n100½ OAK AVE"
   *
   * @example
   * // Limits display when many streets are present
   * const manyStreets = [
   *   // ... 15 different streets with various house numbers at same location
   * ];
   *
   * deduplicatePointFeatures(manyStreets);
   *
   * // Result: Single point with label showing first 10 streets:
   * // "1101-1435 SW 11TH ST\n1302-1416 SW 12TH LN\n...\n<5 more streets>"
   *
   * @example
   * // Preserves features that are far apart
   * const distantFeatures = [
   *   { geometry: { type: 'Point', coordinates: [-122.1, 37.4] }, properties: { label: '123 NORTH ST' } },
   *   { geometry: { type: 'Point', coordinates: [-122.2, 37.5] }, properties: { label: '456 SOUTH ST' } } // >1 meter away
   * ];
   *
   * deduplicatePointFeatures(distantFeatures);
   *
   * // Result: Both points preserved as separate features (no merging)
   */
  function deduplicatePointFeatures(features) {
    const GRID_SIZE = 0.00004; // ~4 meters, safely includes possible nearby features globally
    const DEDUP_DISTANCE = 4; // meters
    const MAX_LABELS = 10; // Maximum number of labels to display
    const toRemove = new Set();
    const processed = new Set();

    // Group features by location first
    const locationGroups = new Map();

    // First pass: group all features by their grid location
    features.forEach((feature, index) => {
      if (feature.geometry.type !== 'Point' || feature.skipDupeCheck || !feature.properties.label) {
        return;
      }

      const [x, y] = feature.geometry.coordinates;
      const gridX = Math.floor(x / GRID_SIZE);
      const gridY = Math.floor(y / GRID_SIZE);
      const locationKey = `${gridX},${gridY}`;

      if (!locationGroups.has(locationKey)) {
        locationGroups.set(locationKey, []);
      }
      locationGroups.get(locationKey).push({ feature, index });
    });

    // Function to create street ranges from addresses
    function createStreetRanges(addresses) {
      // Parse each address, collecting what fields are present
      const parsedAddresses = addresses.map((address) => parseAddress(address));
      const allHaveHouseNumber = parsedAddresses.every((a) => a && a.hasHouseNumber && !a.hasStreetName);
      const allHaveStreetName = parsedAddresses.every((a) => a && a.hasStreetName && !a.hasHouseNumber);

      if (allHaveHouseNumber) {
        // Only house numbers, show as a range if possible
        const houseDatas = parsedAddresses.filter((a) => a);
        if (houseDatas.length === 1) {
          return [houseDatas[0].houseNumber];
        } else if (houseDatas.length > 1) {
          // Sort by numeric part
          const sortedHouses = houseDatas.sort((a, b) => {
            if (a.numericPart !== b.numericPart) {
              return a.numericPart - b.numericPart;
            }
            return a.houseNumber.localeCompare(b.houseNumber);
          });
          const minHouse = sortedHouses[0].houseNumber;
          const maxHouse = sortedHouses[sortedHouses.length - 1].houseNumber;
          if (minHouse === maxHouse) {
            return [minHouse];
          } else {
            return [`${minHouse}-${maxHouse}`];
          }
        }
        // If none, empty label
        return [];
      }

      if (allHaveStreetName) {
        // Only street names, group & show each (no house number range)
        const streets = Array.from(new Set(parsedAddresses.map((a) => a.streetName).filter((x) => x)));
        return streets.sort();
      }

      // Else: Original grouping logic, group by street
      const streetMap = new Map();
      parsedAddresses.forEach((parsed) => {
        if (!parsed || !parsed.houseNumber || !parsed.streetName) return;
        if (!streetMap.has(parsed.streetName)) {
          streetMap.set(parsed.streetName, []);
        }
        streetMap.get(parsed.streetName).push(parsed);
      });

      // Create ranges for each street
      const ranges = [];
      streetMap.forEach((houseData, streetName) => {
        if (houseData.length === 1) {
          ranges.push(`${houseData[0].houseNumber} ${streetName}`);
        } else {
          const sortedHouses = houseData.sort((a, b) => {
            if (a.numericPart !== b.numericPart) {
              return a.numericPart - b.numericPart;
            }
            return a.houseNumber.localeCompare(b.houseNumber);
          });

          const minHouse = sortedHouses[0].houseNumber;
          const maxHouse = sortedHouses[sortedHouses.length - 1].houseNumber;

          if (minHouse === maxHouse) {
            ranges.push(`${minHouse} ${streetName}`);
          } else {
            ranges.push(`${minHouse}-${maxHouse} ${streetName}`);
          }
        }
      });
      return ranges.sort();
    }

    // Second pass: for each location group, check distances and merge
    locationGroups.forEach((candidates) => {
      if (candidates.length <= 1) return; // No duplicates at this grid location

      // Find all features that are actually within 1 meter of each other
      const clusters = [];

      candidates.forEach((candidate) => {
        if (processed.has(candidate.index)) return;

        // Find all other candidates within 1 meter of this one
        const cluster = [candidate];

        candidates.forEach((other) => {
          if (other.index === candidate.index || processed.has(other.index)) return;

          const distance = turf.distance(candidate.feature, other.feature, { units: 'meters' });
          if (distance < DEDUP_DISTANCE) {
            cluster.push(other);
          }
        });

        if (cluster.length > 1) {
          // Mark all as processed
          cluster.forEach((item) => processed.add(item.index));
          clusters.push(cluster);
        }
      });

      // Process each cluster
      clusters.forEach((cluster) => {
        // Collect all labels from this cluster
        const allLabels = cluster.map((item) => item.feature.properties.label.trim()).filter((label) => label.length > 0);

        // Create street ranges from the addresses
        const streetRanges = createStreetRanges(allLabels);

        // Format the final label
        let finalLabel;
        if (streetRanges.length <= MAX_LABELS) {
          finalLabel = streetRanges.join('\n');
        } else {
          const visibleRanges = streetRanges.slice(0, MAX_LABELS);
          const hiddenCount = streetRanges.length - MAX_LABELS;
          finalLabel = visibleRanges.join('\n') + `\n<${hiddenCount} more streets>`;
        }

        // Keep the first feature, update its label
        const keepIndex = cluster[0].index;
        features[keepIndex].properties.label = finalLabel;

        // Mark the rest for removal
        cluster.slice(1).forEach((item) => {
          toRemove.add(item.index);
        });
      });
    });

    // Remove duplicate features in reverse order
    const sortedToRemove = Array.from(toRemove).sort((a, b) => b - a);
    sortedToRemove.forEach((index) => {
      features.splice(index, 1);
    });

    return features;
  }
  /**
   * Deduplicate overlapping Polygon features with identical geometry.
   * If multiple polygons share geometry, their labels are merged.
   * Each label is normalized by replacing any newline (`\n`) with a space,
   * collapsing multiple spaces, and trimming leading/trailing whitespace.
   * Duplicated labels are removed. Up to MAX_LABELS are included; if more
   * labels are present, the merged label is truncated and a summary is appended.
   *
   * @param {Array<Object>} features - Array of GeoJSON Polygon features,
   *    where each feature has a `.properties.label` string.
   * @returns {Array<Object>} The deduplicated features array (modified in-place).
   *
   * @example
   * // Given three overlapping polygons:
   * const features = [
   *   { geometry: { type: 'Polygon', coordinates: [[...]] }, properties: { label: "1A MAIN STREET\nNEW TOWN" } },
   *   { geometry: { type: 'Polygon', coordinates: [[...]] }, properties: { label: "1B MAIN STREET\nNEW TOWN" } },
   *   { geometry: { type: 'Polygon', coordinates: [[...]] }, properties: { label: "1C MAIN STREET\nNEW TOWN" } }
   * ];
   *
   * const result = deduplicatePolygonFeatures(features);
   *
   * // Result will be:
   * // [
   * //   {
   * //     geometry: { ... },
   * //     properties: {
   * //       label: "1A MAIN STREET NEW TOWN\n1B MAIN STREET NEW TOWN\n1C MAIN STREET NEW TOWN"
   * //     }
   * //   }
   * // ]
   *
   * // If more than MAX_LABELS (e.g. 10), the label will end with:
   * // <N more>
   */
  function deduplicatePolygonFeatures(features) {
    const geometryMap = new Map();
    const MAX_LABELS = 10;

    // 1. Index by stringified geometry key
    features.forEach((feature, idx) => {
      if (!feature.geometry || feature.geometry.type !== 'Polygon') return;

      // Use only exterior ring for key (if that's parcel convention)
      const key = JSON.stringify(feature.geometry.coordinates);
      if (!geometryMap.has(key)) geometryMap.set(key, []);
      geometryMap.get(key).push({ feature, idx });
    });

    // 2. "Suspicious" check — are any duplicates present?
    let hasDuplicates = false;
    for (const group of geometryMap.values()) {
      if (group.length > 1) {
        hasDuplicates = true;
        break;
      }
    }
    if (!hasDuplicates) return features; // Zero cost, very fast!

    // 3. Only process duplication if needed
    const toRemove = new Set();

    geometryMap.forEach((group) => {
      if (group.length < 2) return;

      // Merge and flatten labels: replace newlines with spaces, trim/collapse spaces, ensure uniqueness
      const labels = Array.from(
        new Set(
          group
            .map(({ feature }) => feature.properties && feature.properties.label)
            .filter(Boolean)
            .map((label) => label.replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim()),
        ),
      ).sort();

      let finalLabel = labels.slice(0, MAX_LABELS).join('\n');
      if (labels.length > MAX_LABELS) {
        finalLabel += `\n<${labels.length - MAX_LABELS} more>`;
      }

      group[0].feature.properties.label = finalLabel;
      group.slice(1).forEach(({ idx }) => toRemove.add(idx));
    });

    // 4. Remove duplicates (splice from end for index safety)
    Array.from(toRemove)
      .sort((a, b) => b - a)
      .forEach((idx) => features.splice(idx, 1));

    return features;
  }

  /**
   * Updates the given GIS map layer with a new set of features.
   *
   * - Removes all features belonging to the specified gisLayer from the appropriate global feature collection (`roadFeatures` or `defaultFeatures`).
   * - Adds the new features to the map and collection.
   * - Removes old features from the map layer.
   * - Updates global feature arrays and sets label color in the UI.
   *
   * @param {GisLayer} gisLayer - GIS layer descriptor. Should have at least: `id`, `isRoadLayer`.
   * @param {Object[]} features - Array of GeoJSON Feature objects to add to the layer.
   *
   * @returns {void}
   *
   * @example
   * updateGisLayerFeatures({ id: 'main', isRoadLayer: false }, [myPointFeature, myLineFeature]);
   */
  function updateGisLayerFeatures(gisLayer, features) {
    // **RACE condition Check**
    if (lastToken && lastToken.cancel) {
      logDebug(`Skipping map update for cancelled layer: ${gisLayer.id}`);
      return; // Don't add features to map
    }

    // Check if the layer checkbox is actually checked RIGHT NOW! Also part of the RACE condition Check
    const isLayerCurrentlyEnabled = $(`#gis-layer-${gisLayer.id}`).is(':checked');

    if (!isLayerCurrentlyEnabled) {
      logDebug(`Skipping map update - layer ${gisLayer.id} is currently disabled in UI`);
      return;
    }

    const isRoad = gisLayer.isRoadLayer;
    const layerName = isRoad ? ROAD_LAYER_NAME : DEFAULT_LAYER_NAME;
    // Use the current set of features for this layer type
    const sourceCollection = isRoad ? roadFeatures : defaultFeatures;

    // Separate out features belonging to this layer vs. those not
    const { featureIdsToRemove, remainingFeatures } = sourceCollection.reduce(
      (acc, feature) => {
        if (feature.properties.layerID === gisLayer.id) {
          acc.featureIdsToRemove.push(feature.id);
        } else {
          acc.remainingFeatures.push(feature);
        }
        return acc;
      },
      { featureIdsToRemove: [], remainingFeatures: [] },
    );

    // Add new features to the layer
    sdk.Map.dangerouslyAddFeaturesToLayerWithoutValidation({ features, layerName });

    // Remove old features from the layer
    if (featureIdsToRemove.length > 0) {
      sdk.Map.removeFeaturesFromLayer({ layerName, featureIds: featureIdsToRemove });
    }

    // Update the in-memory collections
    const newCollection = [...remainingFeatures, ...features];
    if (isRoad) {
      roadFeatures = newCollection;
    } else {
      defaultFeatures = newCollection;
    }

    // Feedback in UI
    if (features.length) {
      $(`label[for="gis-layer-${gisLayer.id}"]`).css({ color: '#00a009' });
    }
  }

  /**
   * Processes and adds GIS features from ArcGIS data to the appropriate map layer.
   *
   * - Handles ArcGIS response objects containing features and/or error.
   * - Supports Point, MultiPoint, Polygon, and Polyline geometries.
   * - Applies offset as configured in layer settings.
   * - Assigns feature properties and labels.
   * - Applies de-duplication for Points.
   * - Updates in-memory/global feature collections.
   * - Manages UI state/feedback for errors and successes.
   * - Aborts all work if `token.cancel` is true at key moments.
   *
   * @param {Object}   data      - ArcGIS response object. Should include `.features` (Array) and/or `.error`.
   * @param {Object}   token     - Cancellation token/object. If `token.cancel === true`, aborts processing.
   * @param {GisLayer} gisLayer  - GIS layer descriptor. Should have at least: `id`, `isRoadLayer`, `name`.
   *
   * @returns {void}
   *
   * @example
   * // Usage:
   * processFeaturesArcGIS(
   *   { features: [ { geometry: { x: 1, y: 2 } } ] },
   *   { cancel: false },
   *   { id: 'roads', isRoadLayer: true, name: 'Streets' }
   * );
   */
  function processFeaturesArcGIS(data, token, gisLayer) {
    const features = [];

    if (data.skipIt) return;

    const items = data.features || [];
    const layerOffset = settings.getLayerSetting(gisLayer.id, 'offset') ?? { x: 0, y: 0 };
    const extent = getMapExtent('wgs84');
    const displayLabelsAtZoom = getGisLayerLabelsVisibleAtZoom(gisLayer, getGisLayerVisibleAtZoom(gisLayer));

    if (!token.cancel) {
      let error = false;

      items.forEach((item) => {
        if (token.cancel || error) return;
        if (!item.geometry) return;

        //------ POINT ------
        if (item.geometry.x !== undefined && item.geometry.y !== undefined) {
          let feature = turf.point([item.geometry.x, item.geometry.y]);
          feature.geometry = offsetGeometry(feature.geometry, layerOffset);
          feature = assignGisProperties(feature, gisLayer, processLabel(gisLayer, item, displayLabelsAtZoom, '', false));
          if (isPopupVisible) addLabelToLayer(gisLayer.name, feature.properties.label);
          features.push(feature);

          //------ MULTI-POINT ------
        } else if (item.geometry.points) {
          item.geometry.points.forEach((point) => {
            let feature = turf.point(point);
            feature.geometry = offsetGeometry(feature.geometry, layerOffset);
            feature = assignGisProperties(feature, gisLayer, processLabel(gisLayer, item, displayLabelsAtZoom, '', false));
            if (isPopupVisible) addLabelToLayer(gisLayer.name, feature.properties.label);
            features.push(feature);
          });

          //------ FLATTENED POLYGONS ------
        } else if (item.geometry.rings) {
          const separatePolygons = [];
          let currentOuterRing = null;
          const innerRings = [];

          item.geometry.rings.forEach((ringIn) => {
            if (turf.booleanClockwise(ringIn)) {
              if (currentOuterRing) {
                separatePolygons.push({ outer: currentOuterRing, inners: [...innerRings] });
              }
              currentOuterRing = ringIn;
              innerRings.length = 0;
            } else {
              innerRings.push(ringIn);
            }
          });
          if (currentOuterRing) {
            separatePolygons.push({ outer: currentOuterRing, inners: [...innerRings] });
          }

          separatePolygons.forEach(({ outer, inners }) => {
            const polygonRings = [outer, ...inners];
            let feature = turf.polygon(polygonRings);
            feature.geometry = offsetGeometry(feature.geometry, layerOffset);

            const area = turf.area(feature);

            feature = assignGisProperties(feature, gisLayer, processLabel(gisLayer, item, displayLabelsAtZoom, area, false));
            if (isPopupVisible) addLabelToLayer(gisLayer.name, feature.properties.label);
            features.push(feature);
          });

          //------ POLYLINE ------
        } else if (data.geometryType === 'esriGeometryPolyline' && item.geometry.paths) {
          item.geometry.paths.forEach((path) => {
            let feature = turf.lineString(path);
            feature.geometry = offsetGeometry(feature.geometry, layerOffset);

            feature = clipLineFeatureToExtent(feature, extent) || null;
            if (!feature) return;

            feature = assignGisProperties(feature, gisLayer, processLabel(gisLayer, item, displayLabelsAtZoom, '', true));
            feature.skipDupeCheck = true;

            if (isPopupVisible) addLabelToLayer(gisLayer.name, feature.properties.label);
            features.push(feature);
          });

          //------ UNKNOWN / ERROR ------
        } else {
          logDebug(`Unexpected feature type in layer: ${JSON.stringify(item)}`);
          logError(`Error: Unexpected feature type in layer "${gisLayer.name}"`);
          $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red');
          error = true;
        }
      });
    }

    // ----- De-duplication and feature management -----
    if (!token.cancel) {
      // Only deduplicate if any Point features are present
      if (features.some((f) => f.geometry.type === 'Point')) {
        deduplicatePointFeatures(features);
      }

      // Deduplicate Polygons (Polygon and MultiPolygon) if present
      if (features.some((f) => f.geometry.type === 'Polygon' || f.geometry.type === 'MultiPolygon')) {
        deduplicatePolygonFeatures(features);
      }

      // Layer/collection logic handled by helper
      updateGisLayerFeatures(gisLayer, features);
    }
  }

  /**
   * Processes and adds features from a GeoJSON FeatureCollection or Feature array
   * to the appropriate GIS map layer. Handles geometry flattening, feature offsetting,
   * line clipping, label assignment, and deduplication. Updates global feature
   * collections and provides UI feedback.
   *
   * @param {Object} data           - The GeoJSON response data with a 'features' array, and possible 'error' and 'skipIt'.
   * @param {Object} token          - Cancellation/scoping token; if token.cancel is true, processing is aborted.
   * @param {GisLayer} gisLayer     - The layer descriptor object (should include at least id, name, isRoadLayer).
   *
   * @returns {void}
   */
  function processFeaturesGeoJSON(data, token, gisLayer) {
    const features = [];

    if (data.skipIt) return;

    const items = data.features || [];
    const layerOffset = settings.getLayerSetting(gisLayer.id, 'offset') ?? { x: 0, y: 0 };
    const extent = getMapExtent('wgs84'); // [minX, minY, maxX, maxY]
    const displayLabelsAtZoom = getGisLayerLabelsVisibleAtZoom(gisLayer, getGisLayerVisibleAtZoom(gisLayer));

    if (!token.cancel) {
      let error = false;

      items.forEach((item) => {
        if (token.cancel || error) return;
        if (!item.geometry) return;

        // Always GeoJSON feature. Use turf.flatten to ensure individual features.
        // flatten returns a FeatureCollection, so we need to iterate over .features
        // But "flatten" expects a Feature or FeatureCollection, so ensure type.
        let toFlatten = item;
        if (toFlatten.type !== 'Feature') {
          toFlatten = {
            type: 'Feature',
            geometry: item.geometry,
            properties: item.properties || {},
          };
        }
        const flatFeatures = turf.flatten(toFlatten).features;

        flatFeatures.forEach((feature) => {
          // Always offset geometry!
          feature.geometry = offsetGeometry(feature.geometry, layerOffset);

          // --- CLIP LINES TO EXTENT for LineString ---
          if (feature.geometry.type === 'LineString') {
            feature = clipLineFeatureToExtent(feature, extent) || null;
            if (!feature) return; // If fully outside, skip
          }

          // Calculate area for polygons (only needed for label)
          let area = '';
          if (feature.geometry.type === 'Polygon') {
            area = turf.area(feature);
          }

          feature = assignGisProperties(feature, gisLayer, processLabel(gisLayer, feature, displayLabelsAtZoom, area, feature.geometry.type === 'LineString'));

          if (isPopupVisible) addLabelToLayer(gisLayer.name, feature.properties.label);
          features.push(feature);
        });
      });
    }

    // ----- De-duplication and feature management -----
    if (!token.cancel) {
      // Only deduplicate if any Point features are present
      if (features.some((f) => f.geometry.type === 'Point')) {
        deduplicatePointFeatures(features);
      }

      // Deduplicate Polygons (Polygon and MultiPolygon) if present
      if (features.some((f) => f.geometry.type === 'Polygon' || f.geometry.type === 'MultiPolygon')) {
        deduplicatePolygonFeatures(features);
      }

      // Layer/collection logic handled by helper
      updateGisLayerFeatures(gisLayer, features);
    }
  }

  /**
   * Copies a string to the system clipboard using the userscript {@link GM_setClipboard} API.
   *
   * Logs the operation using {@link logDebug} or errors using {@link logError} as appropriate.
   *
   * @function copyTextToClipboard
   * @param {string} text - Text to copy to clipboard.
   * @returns {void}
   *
   * @see {@link GM_setClipboard}
   */
  function copyTextToClipboard(text) {
    try {
      GM_setClipboard(text);
      logDebug(`Copy Text To Clipboard: ${text}`);
    } catch (err) {
      logError(`Failed to Text To Clipboard: ${err}`);
    }
  }

  /**
   * Adds a feature label to the collection of labels for a map layer.
   * Used for populating the label popup and tracking unique labels per layer.
   *
   * @function addLabelToLayer
   * @param {string} layerName - Name of the GIS Layer (key in {@link layerLabels}).
   * @param {string} label - The label string to add for this layer.
   * @returns {void}
   *
   * @see {@link layerLabels}
   */
  function addLabelToLayer(layerName, label) {
    if (!layerLabels[layerName]) {
      layerLabels[layerName] = new Set();
    }
    layerLabels[layerName].add(label);
  }

  /**
   * Replaces known phrases with acronyms or abbreviations in a string, suitable for road labels.
   *
   * Searches for compound phrases and individual words (case-insensitive), and substitutes them with defined short forms.
   *
   * @function replacePhrasesWithAcronyms
   * @param {string} text - The string to process and shorten with acronyms.
   * @returns {string} The string with phrases replaced by their acronyms.
   *
   * @see {@link processedLabel}
   */
  function replacePhrasesWithAcronyms(text) {
    // Order phrases such that compound phrases come before individual words
    /** @type {ReplacementPatterns} */
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

  /**
   * Normalizes and abbreviates highway/route road names within a label string, e.g. "US Route 50" to "US-50", "Rte 5" to "SR-5".
   *
   * Uses regular expressions to identify and reformat standard highway/route patterns.
   *
   * @function fixSateHwyRoadNames
   * @param {string} text - Road label text to normalize.
   * @returns {string} Reformatted label string.
   *
   * @see {@link replacePhrasesWithAcronyms}
   * @see {@link processedLabel}
   */
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

  /**
   * Converts the input text to Title Case, capitalizing the first letter of each word on every line.
   *
   * Handles multi-line strings (splitting by newline), trimming spaces and joining them back.
   *
   * @function titleCaseLabel
   * @param {string} text - Input text to convert to title case.
   * @returns {string} Title-cased string.
   */
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

  /**
   * Applies user-selected label processing options in order: Title Case, acronyms/abbreviations, highway normalization, and new line removal.
   *
   * Each option draws from global state ({@link useTitleCase}, {@link useAcronyms}, {@link useStateHwy}, {@link removeNewLines}).
   *
   * @function processedLabel
   * @param {string} label - Raw label text to process for display.
   * @returns {string} Processed label string.
   *
   * @see {@link useTitleCase}
   * @see {@link useAcronyms}
   * @see {@link useStateHwy}
   * @see {@link removeNewLines}
   * @see {@link titleCaseLabel}
   * @see {@link replacePhrasesWithAcronyms}
   * @see {@link fixSateHwyRoadNames}
   */
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

  /**
   * Updates the visibility and content of the layer label popup UI element.
   *
   * Creates and manages a draggable, resizable popup dialog that displays collected
   * GIS layer labels. The popup features modern styling with a blue header, collapsible
   * options section, layer dropdown selector, and scrollable content area. Automatically
   * adapts to WME Editor's dark mode theme.
   *
   * **Popup Structure:**
   * - Header: Blue bar with title "GIS-L Layer Labels" and close button (draggable)
   * - Options Section: Checkboxes for label formatting (Title Case, Acronyms, Highway Labels, Remove New Lines)
   * - Dropdown: Selector to switch between different layer label collections
   * - Content: Scrollable list of labels with copy-to-clipboard functionality
   *
   * **Features:**
   * - Draggable by header for repositioning
   * - Resizable for adjusting dimensions
   * - Remembers position across page loads
   * - Modern blue theme (#0066cc) matching script styling
   * - Full dark mode support (adapts to WME theme)
   * - Label formatting options apply in real-time
   * - Copy labels to clipboard with click
   *
   * **Dependencies:**
   * - jQuery (`$`) for DOM selection and manipulation
   * - Native DOM APIs for element creation
   * - Global state: popupPosition, isPopupVisible, useTitleCase, useAcronyms, useStateHwy, removeNewLines
   *
   * **Side Effects:**
   * - Creates popup DOM element on first call (appends to wz-page-content)
   * - Directly mutates DOM elements; not a pure function
   * - Updates global popupPosition when dragged
   * - Calls {@link updatePopupContent} to refresh label display
   * - May trigger jQuery event handlers
   *
   * @function updatePopup
   * @param {LayerLabelsMap} labels - Map of layer names to label sets
   * @returns {void}
   *
   * @see {@link updatePopupContent}
   * @see {@link togglePopupVisibility}
   * @see {@link isPopupVisible}
   * @see {@link https://api.jquery.com/category/manipulation/} - jQuery DOM manipulation docs
   */
  function updatePopup(labels) {
    let popup = document.getElementById('layerLabelPopup');
    if (!popup) {
      popup = document.createElement('div');
      popup.id = 'layerLabelPopup';
      popup.className = 'gis-popup-dialog';
      popup.style = `position: absolute; border-radius: 8px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); z-index: 1000; width: 500px; max-width: 800px;
                height: 300px; resize: both; overflow: hidden; max-height: 700px; left: ${popupPosition.left}; top: ${popupPosition.top}; `;
      const header = document.createElement('div');
      header.className = 'gis-dialog-header';
      header.style = 'padding: 12px 16px; cursor: move; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center; font-weight: 600; font-size: 16px;';

      const title = document.createElement('span');
      title.innerText = 'GIS-L Layer Labels';
      header.appendChild(title);

      const closeButton = document.createElement('span');
      closeButton.innerText = '×';
      closeButton.style = 'cursor: pointer; font-size: 24px; margin-left: 10px; line-height: 1;';
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
      formatOptionContainer.className = 'gis-label-popup-options';
      formatOptionContainer.style = 'padding: 8px 12px;';

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
      formatCheckboxLabel.style = 'font-weight: 400; width: 150px; cursor: pointer;';
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
      acronymCheckboxLabel.style = 'font-weight: 400; cursor: pointer;';
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

      stateHwyCheckboxLabel.style = 'font-weight: 400; width: 150px; cursor: pointer;';
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
      removeNewLinesCheckboxLabel.style = 'font-weight: 400; cursor: pointer;';
      secondRow.appendChild(removeNewLinesCheckboxLabel);

      formatOptionContainer.appendChild(secondRow);
      popup.appendChild(formatOptionContainer);

      const dropdownContainer = document.createElement('div');
      dropdownContainer.className = 'gis-label-popup-dropdown';
      dropdownContainer.style = 'padding: 12px;';
      popup.appendChild(dropdownContainer);

      const contentContainer = document.createElement('div');
      contentContainer.className = 'gis-label-popup-content';
      contentContainer.style = 'padding: 12px; overflow-y: auto; overflow-x: auto; height: calc(100% - 140px);';

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

  /**
   * Updates the HTML contents of the layer label popup.
   * Typically called by {@link updatePopup} or feature-handling code to refresh popup display.
   *
   * @function updatePopupContent
   * @param {LayerLabelsMap} [labels] - Map of layer names to label sets
   * @returns {void}
   *
   * @see {@link layerLabels}
   */
  function updatePopupContent(labels) {
    const dropdownContainer = document.querySelector('#layerLabelPopup div:nth-child(3)');
    const contentContainer = document.querySelector('#layerLabelPopup div:nth-child(4)');

    contentContainer.style.fontFamily = settings.fontFamily || 'inherit';
    contentContainer.style.fontSize = (settings.fontSize || 13) + 'px';

    dropdownContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    const select = document.createElement('select');
    select.className = 'gis-dialog-select';
    select.style = 'width: 100%; padding: 8px 12px; border: 1px solid; border-radius: 4px; font-size: 13px;';

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
   * Asynchronously fetches GIS features for visible, user-selected map layers, based on current viewport and settings.
   * Uses per-host concurrency control to be respectful to individual servers while maximizing overall performance.
   *
   * Functionality:
   * - Clears existing feature labels if a popup is visible, then returns early if fetching is disabled or zoom is below threshold.
   * - Determines which map layers are both fetchable and visible, and removes features for layers not being fetched.
   * - Groups layers by hostname to implement per-server concurrency limits.
   * - Updates layer checkbox UI and logs intended fetch actions.
   * - For each eligible GIS layer:
   *    - Assembles an HTTP GET request (supports ArcGIS and Socrata platforms).
   *    - Handles required API tokens and warns about missing tokens for relevant platforms.
   *    - On successful response, delegates to the right feature processing function,
   *      updates features, tracks per-layer processing, and updates the popup if needed.
   *    - Logs and handles errors robustly (parsing, HTTP, platform, etc), including explicit UI feedback.
   *
   * Concurrency Strategy:
   * - Groups requests by hostname to avoid overwhelming individual servers.
   * - Limits concurrent requests per host (default: 5) while allowing parallel processing across different hosts.
   * - Processes hosts concurrently but controls per-host request batching with small delays between batches.
   * - Optimizes for scenarios where multiple layers may hit the same server.
   *
   * Notes:
   * - The function leverages global application state for layers, map zoom, in-memory features, and UI feedback.
   * - Relies on helper functions and several external APIs (e.g., `sdk.Map`, `GM_xmlhttpRequest`, jQuery).
   * - Per-host concurrency control ensures server-friendly behavior while maximizing overall performance.
   * - Total execution time is approximately equal to the slowest host rather than the sum of all requests.
   *
   * Error Handling:
   * - Logs parsing and HTTP errors with details, including hostname context.
   * - Sets UI labels to red for layers with errors or parsing issues.
   * - Alerts user if required API tokens are missing.
   * - Gracefully handles invalid URLs and network failures per host.
   *
   * Side Effects:
   * - Updates global feature collections (e.g., `roadFeatures`, `defaultFeatures`), label maps, popup contents, and UI highlighting.
   * - Modifies UI elements to indicate processing status and errors per layer.
   *
   * @async
   * @returns {Promise<void>} Does not resolve to a value. Operates via side effects on global state, the map, and the UI.
   *
   * @example
   * // Usually called without parameters, in response to map move/zoom or UI change:
   * await fetchFeatures();
   *
   * @example
   * // Example with multiple layers hitting the same server:
   * // - 3 layers to tigerweb.geo.census.gov → processed in one batch of 3
   * // - 2 layers to services1.arcgis.com → processed in one batch of 2
   * // - 1 layer each to different servers → processed immediately in parallel
   * // Total time ≈ time of slowest server, not sum of all requests
   */
  async function fetchFeatures() {
    // Cancel any pending debounced calls since we're doing immediate fetch
    if (debouncedFetch.cancel) {
      debouncedFetch.cancel();
    }

    const MAX_CONCURRENT_PER_HOST = 5; // Max concurrent requests per server

    // 1. Clear labels if popup is open
    if (isPopupVisible) {
      Object.keys(layerLabels).forEach((key) => delete layerLabels[key]);
    }

    // Early exit if data fetch is disabled or zoom is too low
    if (ignoreFetch) {
      return;
    }
    if (sdk.Map.getZoomLevel() < 12) {
      return;
    }

    await whatsInView();

    // Token object for cancellation of in-flight requests
    lastToken.cancel = true;
    lastToken = { cancel: false, features: [], layersProcessed: 0 };

    // Reset UI layer status
    $('.gis-subL1-layer-label').css({});

    let _layersCleared = false;
    let layersToFetch = [];

    // 2. Remove map features for layers that won't be fetched
    if (!_layersCleared) {
      _layersCleared = true;
      layersToFetch = getFetchableLayers(true, true);

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

    // **EARLY EXIT: No layers to fetch**
    if (layersToFetch.length === 0) {
      filterLayerCheckboxes(); // Update UI for layers coming into view
      logDebug('No layers to fetch!');
      return;
    }

    filterLayerCheckboxes(); // Update UI for layers coming into view

    let layersProcessedCount = 0;
    let successCount = 0;
    const extentWGS84 = getMapExtent('wgs84');
    const zoom = sdk.Map.getZoomLevel();

    // Group the layers that need fetching by host so requests can be batched for concurrency limiting
    const layersByHost = {};
    layersToFetch.forEach((gisLayer) => {
      const hostname = gisLayer.hostname;
      if (!layersByHost[hostname]) {
        layersByHost[hostname] = [];
      }
      layersByHost[hostname].push(gisLayer);
    });

    // Helper function: performs AJAX fetch, parses result, runs error handling & processing
    const fetchLayer = async (gisLayer) => {
      const url = getUrl(extentWGS84, gisLayer, zoom);
      const headers = {};
      const appToken = settings.socrataAppToken ? settings.socrataAppToken.trim() : '';
      const isSocrata = gisLayer.platform === 'SocrataV2' || gisLayer.platform === 'SocrataV3';
      if (isSocrata && appToken) {
        headers['X-App-Token'] = appToken;
      }
      if (gisLayer.platform === 'SocrataV3' && !appToken) {
        // Socrata V3 layers require a token (can't even attempt fetch)
        logDebug(`Socrata V3 layer "${gisLayer.id}" requires an App Token, but none was provided.`);
        WazeWrap.Alerts.warning(GM_info.script.name, `A Socrata App Token is required for layer "${gisLayer.name}".<br>Please provide one in the GIS Layers settings.`);
        return Promise.reject(new Error('Missing Socrata App Token'));
      }
      const fetchStart = performance.now();

      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          url,
          headers,
          context: lastToken,
          method: 'GET',
          onload(res2) {
            const fetchEnd = performance.now();
            const fetchDuration = fetchEnd - fetchStart;

            // ----------------------------------------
            // Cancellation check (RACE condition):
            // If the token was cancelled, cancel quietly (don't log UI as error).
            // ----------------------------------------
            if (res2.context.cancel) {
              layersProcessedCount += 1;
              resolve({ gisLayer, cancelled: true, fetchUrl: url, fetchDuration });
              return;
            }

            // ----------------------------------------
            // Error Handling Section
            // ----------------------------------------

            // -------------------------------
            // 1. HTTP status error:
            // If the response is a true HTTP error (status 400+), log it and update the UI.
            // -------------------------------
            if (res2.status >= 400) {
              const httpErrorMessage = `HTTP ${res2.status}: ${res2.statusText}`;
              const httpError = new Error(`HTTP error: ${res2.status} ${res2.statusText}`);
              logError(`HTTP error for layer "${gisLayer.id}": ${res2.status} ${res2.statusText}`);
              $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red').attr('title', `HTTP Error: ${httpErrorMessage}`);
              layersProcessedCount += 1;
              reject({
                gisLayer,
                error: httpError,
                type: 'http',
                fetchUrl: url,
                fetchDuration,
              });
              return;
            }

            // Otherwise: status < 400 (most API errors are in-body JSON), so parse JSON
            try {
              // ----------------------------------------
              // 2. JSON parsing error:
              // If the response can't parse as JSON, it's likely a server or connectivity bug.
              // ----------------------------------------
              const parsedData = $.parseJSON(res2.responseText);

              // ----------------------------------------
              // 3. ArcGIS REST/modern API "status:error"/"status:failed" error:
              // Detect ArcGIS's "status": "error" (or "failed") error pattern.
              // Logs details, marks UI red, rejects with message.
              // ----------------------------------------
              if ((parsedData.status === 'error' || parsedData.status === 'failed') && Array.isArray(parsedData.messages)) {
                const message = parsedData.messages.join('; ');
                const apiError = new Error(`API Error: ${message}`);
                logError(`API error for layer "${gisLayer.id}": ${message}`);
                $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red').attr('title', `API Error: ${message}`);
                layersProcessedCount += 1;
                reject({
                  gisLayer,
                  error: apiError,
                  type: 'api-error',
                  fetchUrl: url,
                  fetchDuration,
                });
                return;
              }

              // ----------------------------------------
              // 4. Classic API "error" property (SocRata, ArcGIS, etc)
              // API returns an "error" property -- could be object or boolean.
              // Logs details, marks UI red, rejects with message.
              // ----------------------------------------
              if (parsedData.error) {
                let errorMessage, errorCode;
                if (parsedData.error === true) {
                  errorMessage = parsedData.message || 'Unknown Socrata error';
                  errorCode = parsedData.code || parsedData.status;
                } else if (parsedData.error.message) {
                  errorMessage = parsedData.error.message;
                  errorCode = parsedData.error.code;
                } else {
                  errorMessage = parsedData.error;
                  errorCode = 'unknown';
                }
                const fullErrorMessage = `${errorMessage}${errorCode !== 'unknown' ? ` (Code: ${errorCode})` : ''}`;
                const apiError = new Error(`API Error: ${fullErrorMessage}`);
                logError(`API error for layer "${gisLayer.id}": ${fullErrorMessage}`);
                $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red').attr('title', `API Error: ${fullErrorMessage}`);
                layersProcessedCount += 1;
                reject({
                  gisLayer,
                  error: apiError,
                  type: 'api-error',
                  fetchUrl: url,
                  fetchDuration,
                });
                return;
              }

              // ----------------------------------------
              // Cancellation race: check again after parse
              // ----------------------------------------
              if (res2.context.cancel) {
                layersProcessedCount += 1;
                resolve({ gisLayer, cancelled: true, fetchUrl: url, fetchDuration });
                return;
              }

              // ----------------------------------------
              // Feature parsing/processing (success path)
              // ----------------------------------------
              let processingDuration = null;
              if (gisLayer.platform === 'ArcGIS' || !gisLayer.platform) {
                const processStart = performance.now();
                processFeaturesArcGIS(parsedData, res2.context, gisLayer);
                const processEnd = performance.now();
                processingDuration = processEnd - processStart;
              } else if (isSocrata) {
                const processStart = performance.now();
                processFeaturesGeoJSON(parsedData, res2.context, gisLayer);
                const processEnd = performance.now();
                processingDuration = processEnd - processStart;
              } else {
                logError(`Unknown platform "${gisLayer.platform}" for layer "${gisLayer.id}". Skipped processing.`);
              }
              layersProcessedCount += 1;
              successCount += 1;
              resolve({
                gisLayer,
                success: true,
                fetchUrl: url,
                fetchDuration,
                processingDuration,
              });
            } catch (parseError) {
              // ----------------------------------------
              // 2. JSON parsing error (catch block):
              // Logs details, marks UI red, rejects with error info.
              // ----------------------------------------
              const parseErrorMessage = `JSON parsing failed: ${parseError.message}`;
              logError(`Parsing error for layer "${gisLayer.id}": ${parseError.message}`);
              $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red').attr('title', `Parse Error: ${parseErrorMessage}`);

              layersProcessedCount += 1;
              reject({
                gisLayer,
                error: parseError,
                type: 'parse',
                fetchUrl: url,
                fetchDuration,
              });
            }
          },
          onerror(res3) {
            const fetchEnd = performance.now();
            const fetchDuration = fetchEnd - fetchStart;

            // ----------------------------------------
            // Cancellation check for network error:
            // If in-flight request was cancelled, mark as cancelled (not error).
            // ----------------------------------------
            if (res3.context && res3.context.cancel) {
              layersProcessedCount += 1;
              reject({
                gisLayer,
                error: new Error('Cancelled'),
                type: 'cancelled',
                fetchUrl: url,
                fetchDuration,
              });
              return;
            }

            // ----------------------------------------
            // 5. Network-level error handling:
            // Could be connection drop, DNS issue, server down, CORS, etc.
            // Logs details, marks UI red, rejects with error info.
            // ----------------------------------------
            const networkErrorMessage = `${res3.statusText || 'Network request failed'} ${res3.status ? `(${res3.status})` : ''}`.trim();
            const networkError = new Error(`Network error: ${res3.statusText} (status code: ${res3.status})`);
            logError(`Could not fetch layer "${gisLayer.id}". Error: ${res3.statusText} (status code: ${res3.status})`);
            $(`#gis-layer-${gisLayer.id}-container > label`).css('color', 'red').attr('title', `Network Error: ${networkErrorMessage}`);
            layersProcessedCount += 1;
            reject({
              gisLayer,
              error: networkError,
              type: 'network',
              fetchUrl: url,
              fetchDuration,
            });
          },
        });
      });
    };

    // Helper for per-host concurrency limiting: batches by host, adds inter-batch delay
    const processHostLayers = async (hostname, layers) => {
      const results = [];
      for (let i = 0; i < layers.length; i += MAX_CONCURRENT_PER_HOST) {
        const batch = layers.slice(i, i + MAX_CONCURRENT_PER_HOST);
        const promises = batch.map(fetchLayer);
        const batchResults = await Promise.allSettled(promises);
        results.push(...batchResults);
        // Add small delay if more batches remain for host
        if (i + MAX_CONCURRENT_PER_HOST < layers.length) {
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
      }
      return { hostname, results };
    };

    // 3. Kick off all host batches concurrently
    try {
      const hostPromises = Object.entries(layersByHost).map(([hostname, layers]) => processHostLayers(hostname, layers));
      const allHostResults = await Promise.all(hostPromises);

      // Build structured results for debugging/logging/user feedback
      const hostResultsSummary = {};
      allHostResults.forEach(({ hostname, results }) => {
        const successful = [];
        const failed = [];
        results.forEach((result, index) => {
          const layer = layersByHost[hostname][index];
          const layerInfo = {
            id: layer.id,
            name: layer.name,
            platform: layer.platform,
            url: layer.url,
          };
          if (result.status === 'fulfilled') {
            if (result.value.cancelled) {
              logDebug(`Layer ${layer.id} request was cancelled`);
            } else {
              successful.push({
                ...layerInfo,
                fetchUrl: result.value.fetchUrl,
                fetchDuration: result.value.fetchDuration + ' ms',
                processingDuration: result.value.processingDuration + ' ms',
              });
            }
          } else {
            if (result.reason.type === 'cancelled') {
              logDebug(`Layer ${layer.id} request was cancelled`);
            } else {
              failed.push({
                ...layerInfo,
                fetchUrl: result.reason.fetchUrl,
                fetchDuration: result.reason.fetchDuration + ' ms',
                processingDuration: result.reason.processingDuration + ' ms',
                error: result.reason.type || 'unknown',
                message: result.reason.error?.message || 'Unknown error',
              });
            }
          }
        });
        hostResultsSummary[hostname] = {
          successful,
          failed,
          counts: `${successful.length}/${successful.length + failed.length}`,
        };
      });

      // Log/Show final summary by host
      logDebug(`Fetch completed - ${successCount}/${layersToFetch.length} layers:`, hostResultsSummary);

      // If in popup mode and everything is processed, refresh popup
      if (layersProcessedCount === layersToFetch.length && isPopupVisible) {
        updatePopup(layerLabels);
      }
    } catch (error) {
      // ----------------------------------------
      // Unexpected global error catch for fetch process.
      // ----------------------------------------
      logError('Unexpected error during processing:', error);
    }
  }

  /**
   * Debounced version of the feature fetching process, designed to optimize map movement performance.
   *
   * This function delays execution by 250ms after the last call, preventing excessive server requests
   * during rapid map panning or zooming. It loads visible country data and fetches GIS features
   * only after the user has stopped interacting with the map for the debounce period.
   *
   * Usage:
   * - Called by onMapMove() to handle map pan/zoom events efficiently
   * - NOT used for direct UI interactions (checkboxes, buttons) which need immediate response
   * - Automatically cancelled if fetchFeatures() is called directly (user actions take priority)
   *
   * Performance Benefits:
   * - Reduces server load during rapid map movements
   * - Maintains responsive UI for deliberate user actions
   * - Works with existing per-host concurrency controls in fetchFeatures()
   *
   * @async
   * @function debouncedFetch
   * @returns {Promise<void>} Resolves when the debounced fetch operation completes, or immediately if cancelled.
   *
   * @example
   * // In onMapMove() - waits 250ms after last movement
   * debouncedFetch();
   *
   * @example
   * // Direct fetchFeatures() call cancels any pending debounced execution
   * await fetchFeatures(); // User clicked checkbox - executes immediately
   *
   * @see {@link fetchFeatures} - The underlying function that performs the actual data fetching
   * @see {@link onMapMove} - Primary caller of this debounced function
   * @see {@link loadVisibleCountryData} - Called before fetching features to ensure data availability
   */
  const debouncedFetch = _.debounce(async () => {
    if (settings.enabled) {
      await loadVisibleCountryData();
      await fetchFeatures();
    }
  }, 250);

  /**
   * Displays an informational alert dialog (via WME UI) with script and context information.
   * Used for "info" button or link clicks in the Layer tab.
   *
   * @function showScriptInfoAlert
   * @param {MouseEvent|Event} [evt] Optional event from the info button click.
   * @returns {void}
   *
   * @see {@link sdk.alert}
   * @see {@link getScriptInfo}
   */
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

  /**
   * Enables or disables GIS Layers on the map.
   * Updates the application state and triggers layer visibility changes.
   *
   * @function setEnabled
   * @param {boolean} isEnabled - Whether GIS Layers should be visible/enabled.
   * @returns {void}
   *
   * @see {@link settings.enabled}
   */
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

  /**
   * Event handler for toggling the visibility of a GIS Layer checkbox in the UI.
   * Updates {@link settings.visibleLayers} and triggers a feature refresh.
   *
   * @async
   * @function onGisLayerToggleChanged
   * @this {HTMLInputElement} Checkbox that triggered the event.
   * @returns {Promise<void>}
   *
   * @see {@link settings.visibleLayers}
   * @see {@link fetchFeatures}
   * @see {@link saveSettingsToStorage}
   */
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

  /**
   * Change event handler for the "Only show applicable layers" setting checkbox.
   * Updates {@link settings.onlyShowApplicableLayers} and refreshes layer checkboxes.
   *
   * @function onOnlyShowApplicableLayersChanged
   * @param {Event} [event] Change event (optional).
   * @returns {void}
   *
   * @see {@link settings.onlyShowApplicableLayers}
   * @see {@link saveSettingsToStorage}
   * @see {@link filterLayerCheckboxes}
   */
  async function onOnlyShowApplicableLayersChanged() {
    settings.onlyShowApplicableLayers = $(this).is(':checked');
    saveSettingsToStorage();
    filterLayerCheckboxes();
  }

  /**
   * Change event handler for the "Include Zoom Level in filter" setting checkbox.
   * Updates {@link settings.onlyShowApplicableLayersZoom} and refreshes layer checkboxes.
   *
   * @function onOnlyShowApplicableLayersZoomChanged
   * @param {Event} [event] Change event (optional).
   * @returns {void}
   *
   * @see {@link settings.onlyShowApplicableLayersZoom}
   * @see {@link saveSettingsToStorage}
   * @see {@link filterLayerCheckboxes}
   */
  async function onOnlyShowApplicableLayersZoomChanged() {
    settings.onlyShowApplicableLayersZoom = $(this).is(':checked');
    saveSettingsToStorage();
    filterLayerCheckboxes();
  }

  /**
   * Event handler for toggling a region (subL1) checkbox for GIS layer selection.
   * Updates {@link settings.selectedSubL1}, initializes layer tabs, and refreshes features.
   *
   * @async
   * @function onSub1CheckChanged
   * @param {string} subL1 Region/subdivision code being toggled.
   * @param {Event} evt Change event from the checkbox.
   * @returns {Promise<void>}
   *
   * @see {@link settings.selectedSubL1}
   * @see {@link saveSettingsToStorage}
   * @see {@link initLayersTab}
   * @see {@link fetchFeatures}
   */
  async function onSub1CheckChanged(subL1, evt) {
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

  async function batchUpdateSelectedSubL1() {
    // Gather all checked subL1's from DOM
    const checked = $('.gis-layers-subL1-checkbox:checked')
      .map(function () {
        return $(this).data('sub');
      })
      .get();

    settings.selectedSubL1 = checked;

    if (!ignoreFetch) {
      saveSettingsToStorage();
      initLayersTab();
      await fetchFeatures();
    }
  }

  /**
   * Handler for toggling the global "GIS Layers" on/off checkbox in the sidebar Layer Switcher.
   * Updates layer visibility using {@link setEnabled}.
   *
   * @function onLayerCheckboxChanged
   * @param {{checked: boolean}} args Callback argument with checkbox state.
   * @returns {void}
   *
   * @see {@link setEnabled}
   * @see {@link sdk.LayerSwitcher}
   */
  function onLayerCheckboxChanged(args) {
    setEnabled(args.checked);
  }

  /**
   * Sets the fill opacity for parcel style layers to display filled or unfilled appearance.
   *
   * Modifies the {@link LAYER_STYLES.parcels} and {@link LAYER_STYLES.state_parcels} objects' `fillOpacity` property.
   *
   * @function setFillParcels
   * @param {boolean} doFill - If true, parcels are filled with opacity 0.2; otherwise, not filled (opacity 0).
   * @returns {void}
   *
   * @see {@link LAYER_STYLES.parcels}
   * @see {@link LAYER_STYLES.state_parcels}
   */
  function setFillParcels(doFill) {
    [LAYER_STYLES.parcels, LAYER_STYLES.state_parcels].forEach((style) => {
      style.fillOpacity = doFill ? 0.2 : 0;
    });
  }

  /**
   * Handler for changes to the "Fill parcels" appearance checkbox.
   * Updates parcel fill style using {@link setFillParcels}, updates {@link settings}, and triggers a feature refresh.
   *
   * @async
   * @function onFillParcelsCheckedChanged
   * @param {Event} evt Change event from the checkbox.
   * @returns {Promise<void>}
   *
   * @see {@link setFillParcels}
   * @see {@link settings.fillParcels}
   * @see {@link saveSettingsToStorage}
   * @see {@link fetchFeatures}
   */
  async function onFillParcelsCheckedChanged(evt) {
    const { checked } = evt.target;
    setFillParcels(checked);
    settings.fillParcels = checked;
    saveSettingsToStorage();
    await fetchFeatures();
  }

  /**
   * Event handler for WME map pan/zoom actions.
   * If GIS layers are enabled ({@link settings.enabled}), loads visible country data then triggers a debounced feature fetch.
   *
   * @async
   * @function onMapMove
   * @param {Event} [event] Map move event (optional).
   * @returns {Promise<void>}
   *
   * @see {@link settings.enabled}
   * @see {@link loadVisibleCountryData}
   * @see {@link debouncedFetch}
   */
  async function onMapMove() {
    if (settings.enabled) {
      await loadVisibleCountryData();
      debouncedFetch(); // Changed from fetchFeatures()
    }
  }

  /**
   * Handler for the GIS Layers tab "refresh" button.
   * Reloads all layer data and UI without duplicating one-time setup by calling {@link init}.
   *
   * @function onRefreshLayersClick
   * @param {Event} [event] Click event from the refresh icon (optional).
   * @returns {void}
   *
   * @see {@link init}
   */
  function onRefreshLayersClick() {
    const $btn = $('#gis-layers-refresh');
    if (!$btn.hasClass('fa-spin')) {
      $btn.css({ cursor: 'auto' });
      $btn.addClass('fa-spin');
      init(false); // This will reset data and rebuild UI without duplicating one-time setup
    }
  }

  /**
   * Handler for chevron clicks expanding or collapsing region/group fieldsets in the UI.
   * Updates {@link settings.collapsedSections} and persists state.
   *
   * @function onChevronClick
   * @param {Event} evt Click event from the chevron icon.
   * @returns {void}
   *
   * @see {@link settings.collapsedSections}
   * @see {@link saveSettingsToStorage}
   */
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

  /**
   * Helper function for batch toggling region or layer checkboxes (select all/none).
   * Updates settings, optionally triggers {@link initLayersTab}, and re-fetches features.
   * Temporarily disables fetches during batch operation.
   *
   * @async
   * @function doToggleABunch
   * @param {Event} evt Click event from the select all/none control.
   * @param {boolean} checkState Desired checked state: true for select all, false for select none.
   * @returns {Promise<void>}
   *
   * @see {@link fetchFeatures}
   * @see {@link initLayersTab}
   * @see {@link saveSettingsToStorage}
   */
  async function doToggleABunch(evt, checkState) {
    ignoreFetch = true;
    $(evt.target).closest('fieldset').find('input').prop('checked', !checkState).trigger('click');
    ignoreFetch = false;
    saveSettingsToStorage();
    if (evt.data) initLayersTab();
    await fetchFeatures();
  }

  /**
   * Handler for "Select All" links used to check all region/layer checkboxes in the current fieldset.
   * Triggers a batch update using {@link doToggleABunch}.
   *
   * @async
   * @function onSelectAllClick
   * @param {Event} evt Click event from the link.
   * @returns {Promise<void>}
   *
   * @see {@link doToggleABunch}
   */
  function onSelectAllClick(evt) {
    doToggleABunch(evt, true);
  }

  /**
   * Handler for "Select None" links used to uncheck all region/layer checkboxes in the current fieldset.
   * Triggers a batch update using {@link doToggleABunch}.
   *
   * @async
   * @function onSelectNoneClick
   * @param {Event} evt Click event from the link.
   * @returns {Promise<void>}
   *
   * @see {@link doToggleABunch}
   */
  function onSelectNoneClick(evt) {
    doToggleABunch(evt, false);
  }

  /**
   * Handler for changes to the address label display radio buttons.
   * Updates {@link settings.addrLabelDisplay} and triggers a feature refresh.
   *
   * @async
   * @function onGisAddrDisplayChange
   * @param {Event} evt Radio button change event.
   * @returns {Promise<void>}
   *
   * @see {@link settings.addrLabelDisplay}
   * @see {@link saveSettingsToStorage}
   * @see {@link fetchFeatures}
   */
  async function onGisAddrDisplayChange(evt) {
    settings.addrLabelDisplay = evt.target.value;
    saveSettingsToStorage();
    await fetchFeatures();
  }

  /**
   * Keyboard shortcut handler for toggling address label display mode between HN-only and All.
   * Simulates radio button clicks in the UI.
   *
   * @function onAddressDisplayShortcutKey
   * @returns {void}
   *
   * @see {@link settings.addrLabelDisplay}
   */
  function onAddressDisplayShortcutKey() {
    if (!$('#gisAddrDisplay-hn').is(':checked')) {
      $('#gisAddrDisplay-hn').click();
    } else {
      $('#gisAddrDisplay-all').click();
    }
  }

  /**
   * Keyboard shortcut handler to toggle the enabled state of GIS Layers.
   * Calls {@link setEnabled} to update map layer visibility.
   *
   * @function onToggleGisLayersShortcutKey
   * @returns {void}
   *
   * @see {@link setEnabled}
   * @see {@link settings.enabled}
   */
  function onToggleGisLayersShortcutKey() {
    setEnabled(!settings.enabled);
  }

  /**
   * Toggles the visibility of the GIS Layer labels popup based on the {@link isPopupVisible} setting.
   *
   * - Locates the popup DOM element by its ID.
   * - Sets its display style to 'block' when {@link isPopupVisible} is true, 'none' otherwise.
   * - Persists the visibility state to {@link settings} storage via {@link saveSettingsToStorage}.
   *
   * @function togglePopupVisibility
   * @returns {void}
   *
   * @see {@link isPopupVisible}
   * @see {@link saveSettingsToStorage}
   * @see {@link settings}
   */
  function togglePopupVisibility() {
    const popup = document.getElementById('layerLabelPopup');
    if (popup) {
      popup.style.display = isPopupVisible ? 'block' : 'none';
    }
    saveSettingsToStorage();
  }

  /**
   * Initializes and configures GIS map layers on the map SDK.
   *
   * This function:
   * - Generates style rules for each GIS layer (excluding those with 'roads' style),
   * - Sets parcel fill visualization based on settings,
   * - Removes then adds map layers with appropriate styling and label contexts,
   * - Sets layer visibility according to current settings.
   *
   * Dependencies and required globals:
   * - _gisLayers: Array of GIS layer objects ({ id, style, ... })
   * - LAYER_STYLES: Object containing available layer styles
   * - settings: Layer-related user/application settings ({ fillParcels, enabled })
   * - sdk: WME SDK object
   * - DEFAULT_LAYER_NAME, ROAD_LAYER_NAME: String constants for layer names
   * - DEFAULT_STYLE, ROAD_STYLE: Style objects for layers
   * - setFillParcels: Function to update parcel visualization
   *
   * Side Effects:
   * - Modifies visible layers on the map via sdk.Map
   * - May throw or suppress errors depending on layer state
   *
   * @function initLayer
   */

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
          // `zoomLevel` is available in the predicate by the SDK as of v2.306
          predicate: (featureProperties, zoomLevel) => featureProperties.layerID === gisLayer.id,
          style,
        };
      });

    setFillParcels(settings.fillParcels);

    try {
      sdk.Map.removeLayer({ layerName: DEFAULT_LAYER_NAME });
    } catch (e) {
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
      if (!(e instanceof sdk.Errors.InvalidStateError)) {
        throw e;
      }
    }

    sdk.Map.addLayer({
      layerName: ROAD_LAYER_NAME,
      styleContext: {
        getLabel: (context) => context.feature?.properties?.label,
        // use ({ zoomLevel }) argument for dynamic props
        getOffset: ({ zoomLevel }) => -zoomLevel,
        getSmooth: () => '.01',
        getReadable: () => '1',
      },
      styleRules: [{ style: ROAD_STYLE }],
    });

    sdk.Map.setLayerVisibility({ layerName: DEFAULT_LAYER_NAME, visibility: settings?.enabled });
    sdk.Map.setLayerVisibility({ layerName: ROAD_LAYER_NAME, visibility: settings?.enabled });
  } // END InitLayer

  /**
   * Initializes and renders the GIS Layers tab user interface.
   *
   * This function rebuilds the '#panel-gis-subL1-layers' container DOM with a modern,
   * organized layout including a region selector at the top, search functionality,
   * stats bar, and layer checkboxes with filtering controls.
   *
   * Key Features:
   * - Region selector with country groups and subdivisions (collapsible, maintains scroll position)
   * - Search input for filtering layers by name
   * - Quick action buttons: Clear All Regions, Viewport Filter, Zoom Filter
   * - Stats bar showing selected regions, visible layers, and loaded features
   * - Layer checkboxes organized by country with collapsible sections
   * - Filtering options: Viewport, Zoom level, Search text
   * - Supports dark mode theming
   *
   * Dependencies (must be in scope when called):
   * - userInfo: { userName }
   * - settings: contains selectedSubL1, onlyShowApplicableLayers, onlyShowApplicableLayersZoom, visibleLayers, collapsedSections
   * - _gisLayers: List of GIS layer objects, each with { id, name, countrySubL1, restrictTo }
   * - NameMapper: object with method toFullName(subL1) -> string
   * - jQuery ($)
   * - Lodash (_)
   * - Event handlers: onOnlyShowApplicableLayersChanged, onOnlyShowApplicableLayersZoomChanged, onSelectAllClick, onSelectNoneClick, onChevronClick, onGisLayerToggleChanged, onSub1CheckChanged
   *
   * Side Effects:
   * - Modifies the DOM inside #panel-gis-subL1-layers
   * - Sets up interactive controls for GIS layer filtering and visibility
   * - Preserves region selector scroll position and collapsed states across rebuilds
   *
   * @function initLayersTab
   * @returns {void}
   */
  function initLayersTab() {
    // Save region selector scroll position and country collapse states before rebuilding DOM
    const $existingRegionBody = $('.region-selector-body');
    const savedScrollTop = $existingRegionBody.length ? $existingRegionBody.scrollTop() : 0;

    // Save whether the region selector itself is collapsed
    const regionSelectorCollapsed = $('.region-selector').hasClass('collapsed');

    // Save which country groups are collapsed
    const collapsedCountries = [];
    $('.country-group.collapsed').each(function () {
      const country = $(this).find('.country-header').data('country');
      if (country) collapsedCountries.push(country);
    });

    // Unbind all event handlers to prevent duplicates when reinitializing
    const $panel = $('#panel-gis-subL1-layers');
    $panel.off('click', '.region-legend');
    $panel.off('change', '.layer-item input[type="checkbox"]');
    $panel.off('contextmenu', '.gis-subL1-layer-label');
    $panel.off('click', '.select-all-link');
    $panel.off('click', '.select-none-link');
    $('#gis-clear-all-regions').off('click');
    $('#gis-viewport-filter').off('click');
    $('#gis-zoom-filter').off('click');
    $('#gis-layer-search').off('input');
    $('.gis-region-checkbox').off('change');
    $('.region-selector-header').off('click');
    $('.country-header').off('click');

    // Group layers by country for region selector
    const layersByCountry = _.groupBy(_gisLayers, 'country');
    const allSubL1 = _.uniq(_gisLayers.map((l) => l.countrySubL1));
    const selectedSubL1 = allSubL1.filter((sub) => settings?.selectedSubL1?.includes(sub));

    // Create sticky section with region selector, search, and stats
    const $stickySection = $('<div>', { class: 'gis-sticky-section' });

    // ========== REGION SELECTOR ==========
    const $regionSelector = $('<div>', { class: regionSelectorCollapsed ? 'region-selector collapsed' : 'region-selector' });

    // Region selector header
    const $regionHeader = $('<div>', { class: 'region-selector-header' }).append(
      $('<div>', { class: 'region-selector-title' }).append($('<i>', { class: 'fa fa-map-marker', style: 'margin-right: 6px;' }), 'Select Regions to Load'),
      $('<i>', { class: regionSelectorCollapsed ? 'fa fa-chevron-right region-selector-toggle' : 'fa fa-chevron-down region-selector-toggle' }),
    );

    // Region selector body with countries/subdivisions
    const $regionBody = $('<div>', { class: 'region-selector-body' });

    // Build country groups
    Object.keys(layersByCountry)
      .sort()
      .forEach((country) => {
        const subRegions = _.uniq(layersByCountry[country].map((l) => l.countrySubL1));
        const countrySubL1 = subRegions.find((sub) => sub.split('-')[0] === sub.split('-')[1]); // e.g., "USA-USA"
        const subdivisions = subRegions.filter((sub) => sub.split('-')[0] !== sub.split('-')[1]);

        if (subdivisions.length > 0) {
          // Country with subdivisions
          const isCollapsed = collapsedCountries.includes(country);
          const $countryGroup = $('<div>', { class: isCollapsed ? 'country-group collapsed' : 'country-group' });
          const $countryHeader = $('<div>', { class: 'country-header', 'data-country': country }).append(
            $('<div>', { class: 'country-name' }).append(
              $('<i>', { class: isCollapsed ? 'fa fa-chevron-right country-toggle-icon' : 'fa fa-chevron-down country-toggle-icon' }),
              $('<span>').text(NameMapper.toFullName(country)),
            ),
            $('<span>', { class: 'country-count' }).text(`${subdivisions.length} ${subdivisions.length === 1 ? 'subdivision' : 'subdivisions'}`),
          );

          const $subdivContainer = $('<div>', { class: 'country-subdivisions' });

          // Country-level option if it exists
          if (countrySubL1) {
            const id = `gis-region-${countrySubL1}`;
            const layerCount = _gisLayers.filter((l) => l.countrySubL1 === countrySubL1).length;
            const $countryLevelOption = $('<div>', { class: 'country-level-option' }).append(
              $('<input>', {
                type: 'checkbox',
                id,
                'data-sub': countrySubL1,
                'data-country': country,
                class: 'gis-region-checkbox',
              }).prop('checked', settings.selectedSubL1.includes(countrySubL1)),
              $('<label>', { for: id }).text(`${country} - Country Level`),
              $('<span>', { class: 'subdivision-count' }).text(`(${layerCount})`),
            );
            if (settings.selectedSubL1.includes(countrySubL1)) {
              $countryLevelOption.addClass('enabled');
            }
            $subdivContainer.append($countryLevelOption);
          }

          // Subdivision options
          subdivisions.forEach((subL1) => {
            const id = `gis-region-${subL1}`;
            const layerCount = _gisLayers.filter((l) => l.countrySubL1 === subL1).length;
            const $subdivOption = $('<div>', { class: 'subdivision-option' }).append(
              $('<input>', {
                type: 'checkbox',
                id,
                'data-sub': subL1,
                'data-country': country,
                class: 'gis-region-checkbox',
              }).prop('checked', settings.selectedSubL1.includes(subL1)),
              $('<label>', { for: id }).text(NameMapper.toFullName(subL1)),
              $('<span>', { class: 'subdivision-count' }).text(`(${layerCount})`),
            );
            if (settings.selectedSubL1.includes(subL1)) {
              $subdivOption.addClass('enabled');
            }
            $subdivContainer.append($subdivOption);
          });

          $countryGroup.append($countryHeader, $subdivContainer);
          $regionBody.append($countryGroup);
        } else {
          // Country-only region
          const subL1 = subRegions[0];
          const id = `gis-region-${subL1}`;
          const layerCount = _gisLayers.filter((l) => l.countrySubL1 === subL1).length;
          const $countryOnly = $('<div>', { class: 'country-only' }).append(
            $('<input>', {
              type: 'checkbox',
              id,
              'data-sub': subL1,
              'data-country': country,
              class: 'gis-region-checkbox',
            }).prop('checked', settings.selectedSubL1.includes(subL1)),
            $('<label>', { for: id }).text(NameMapper.toFullName(country)),
            $('<span>', { class: 'subdivision-count' }).text(`(${layerCount})`),
          );
          if (settings.selectedSubL1.includes(subL1)) {
            $countryOnly.addClass('enabled');
          }
          $regionBody.append($countryOnly);
        }
      });

    // Quick action buttons
    const $clearAllRow = $('<div>', { style: 'margin-top:8px;' }).append(
      $('<button>', {
        id: 'gis-clear-all-regions',
        class: 'region-action-button',
        style: 'width:100%;',
      }).text('Clear All Regions'),
    );

    const $filterRow = $('<div>', { style: 'margin-top:6px;' }).append(
      $('<div>', { class: 'filter-label' }).text('Filter to:'),
      $('<div>', { class: 'region-quick-actions', style: 'margin-top:0;' }).append(
        $('<button>', { id: 'gis-viewport-filter', class: settings.onlyShowApplicableLayers ? 'toggle-button active' : 'toggle-button' }).text('Viewport'),
        $('<button>', { id: 'gis-zoom-filter', class: settings.onlyShowApplicableLayersZoom ? 'toggle-button active' : 'toggle-button' }).text('Zoom'),
      ),
    );

    $regionSelector.append($regionHeader, $regionBody, $clearAllRow, $filterRow);

    // ========== SEARCH BAR ==========
    const $searchContainer = $('<div>', { class: 'controls-container', style: 'padding-top:0px;position:relative;margin-bottom:10px;' }).append(
      $('<input>', {
        type: 'text',
        id: 'gis-layer-search',
        placeholder: 'Search layers...',
        style: 'width:100%;padding:6px 28px 6px 8px;border:1px solid #ccc;border-radius:3px;font-size:12px;',
      }),
      $('<i>', { class: 'fa fa-search', style: 'position:absolute;right:10px;top:8px;color:#999;font-size:12px;pointer-events:none;' }),
    );

    // ========== STATS BAR ==========
    const visibleLayerCount = _gisLayers.filter((l) => selectedSubL1.includes(l.countrySubL1)).length;
    const activeLayerCount = settings.visibleLayers.filter((layerId) => {
      const layer = _gisLayers.find((l) => l.id === layerId);
      return layer && selectedSubL1.includes(layer.countrySubL1);
    }).length;

    const $statsBar = $('<div>', { class: 'gis-stats-bar' }).append(
      $('<div>', { class: 'stat' }).html(`Regions: <strong id="gis-region-count">${selectedSubL1.length}</strong>`),
      $('<div>', { class: 'stat' }).html(`Showing: <strong id="gis-showing-count">${visibleLayerCount}</strong>`),
      $('<div>', { class: 'stat' }).html(`Active: <strong id="gis-active-count">${activeLayerCount}</strong>`),
    );

    $stickySection.append($regionSelector, $searchContainer, $statsBar);

    // ========== SCROLLABLE LAYERS AREA ==========
    const $layersScrollable = $('<div>', { style: 'padding:6px;' });

    // Empty state (shown when no regions selected)
    const $emptyState = $('<div>', { class: 'gis-empty-state', id: 'gis-empty-state', style: selectedSubL1.length === 0 ? 'display:block;' : 'display:none;' }).append(
      $('<i>', { class: 'fa fa-map-o' }),
      $('<p>').html('<strong>No regions selected</strong><br>Select regions above to view available layers'),
    );

    $layersScrollable.append($emptyState);

    // Build region fieldsets ONLY for selected regions (performance optimization for large layer counts)
    selectedSubL1.forEach((sub) => {
      const layerCount = _gisLayers.filter((l) => l.countrySubL1 === sub).length;

      // Build class list including collapsed state from settings
      const fieldsetClasses = ['region-fieldset', 'visible'];
      if (settings?.collapsedSections?.[sub]) fieldsetClasses.push('collapsed');

      const $fieldset = $('<fieldset>', {
        id: `gis-layers-for-${sub}`,
        class: fieldsetClasses.join(' '),
        'data-sub': sub,
      });

      const $legend = $('<legend>', { class: 'region-legend' }).append(
        $('<i>', {
          class: settings?.collapsedSections[sub] ? 'fa fa-chevron-right toggle-icon' : 'fa fa-chevron-down toggle-icon',
        }),
        $('<span>').text(NameMapper.toFullName(sub)),
        $('<span>', { style: 'font-size:11px;color:#999;font-weight:normal;margin-left:6px;' }).text(`(${layerCount})`),
      );

      const $regionBody = $('<div>', {
        class: 'region-body',
        style: settings?.collapsedSections[sub] ? 'display:none;' : 'display:block;',
      });

      // Action links (Select All / None)
      const $actionLinks = $('<div>', { class: 'action-links' }).html('Select <a class="gis-select-all">All</a> / <a class="gis-select-none">None</a>');

      $regionBody.append($actionLinks);

      // List all layers directly (no category grouping since category field doesn't exist)
      const layersForRegion = _gisLayers.filter((l) => l.countrySubL1 === sub);

      // Create a container for all layers
      const $layersContainer = $('<div>', { style: 'padding-top:4px;' });

      layersForRegion.forEach((gisLayer) => {
        const id = `gis-layer-${gisLayer.id}`;
        const isChecked = settings?.visibleLayers?.includes(gisLayer.id);
        const $layerItem = $('<div>', {
          class: 'controls-container layer-item',
          id: `${id}-container`,
          style: 'padding-top:0px;display:flex;align-items:flex-start;padding:3px 0;margin-bottom:2px;',
        }).append(
          $('<input>', {
            type: 'checkbox',
            id,
            style: 'margin:2px 6px 0 0;flex-shrink:0;',
          })
            .data('layer-id', gisLayer.id)
            .prop('checked', isChecked),
          $('<label>', {
            for: id,
            class: 'gis-subL1-layer-label',
            style: 'font-size:12px;font-weight:normal;margin:0;cursor:pointer;line-height:1.4;flex:1;',
          })
            .text(`${gisLayer.name}${gisLayer.restrictTo ? ' *' : ''}`)
            .attr('title', gisLayer.restrictTo ? `Restricted to: ${gisLayer.restrictTo}` : ''),
        );

        $layersContainer.append($layerItem);
      });

      $regionBody.append($layersContainer);

      $fieldset.append($legend, $regionBody);
      $layersScrollable.append($fieldset);
    });

    // Clear and rebuild the layers tab
    $('#panel-gis-subL1-layers').empty().append($stickySection, $layersScrollable);

    // Restore region selector scroll position (use setTimeout to ensure DOM is fully rendered)
    if (savedScrollTop > 0) {
      setTimeout(() => {
        const $newRegionBody = $('.region-selector-body');
        if ($newRegionBody.length) {
          $newRegionBody.scrollTop(savedScrollTop);
        }
      }, 0);
    }

    // ========== EVENT HANDLERS ==========

    // Region selector collapse
    $regionHeader.on('click', function () {
      $regionSelector.toggleClass('collapsed');
    });

    // Country group toggle
    $('.country-header').on('click', function () {
      $(this).closest('.country-group').toggleClass('collapsed');
    });

    // Region checkbox change - rebuild layers tab to add/remove DOM elements
    $('.gis-region-checkbox').on('change', async function () {
      const subL1 = $(this).data('sub');
      const isChecked = $(this).is(':checked');

      // Update visual state
      $(this).closest('.subdivision-option, .country-only, .country-level-option').toggleClass('enabled', isChecked);

      // Update settings
      const idx = settings.selectedSubL1.indexOf(subL1);
      if (isChecked) {
        if (idx === -1) settings.selectedSubL1.push(subL1);
      } else if (idx > -1) {
        settings.selectedSubL1.splice(idx, 1);
      }

      if (!ignoreFetch) {
        saveSettingsToStorage();
        initLayersTab();
        await fetchFeatures();
      }
    });

    // Clear all regions button
    $('#gis-clear-all-regions').on('click', function () {
      $('.gis-region-checkbox')
        .prop('checked', false)
        .each(function () {
          $(this).closest('.subdivision-option, .country-only, .country-level-option').removeClass('enabled');
        });
      $('.region-fieldset').removeClass('visible');
      settings.selectedSubL1 = [];
      saveSettingsToStorage();
      initLayersTab();
      fetchFeatures();
    });

    // Viewport filter toggle
    $('#gis-viewport-filter').on('click', function () {
      $(this).toggleClass('active');
      settings.onlyShowApplicableLayers = $(this).hasClass('active');
      saveSettingsToStorage();
      filterLayerCheckboxes();
    });

    // Zoom filter toggle
    $('#gis-zoom-filter').on('click', function () {
      $(this).toggleClass('active');
      settings.onlyShowApplicableLayersZoom = $(this).hasClass('active');
      saveSettingsToStorage();
      filterLayerCheckboxes();
    });

    // Region legend collapse (using event delegation)
    $('#panel-gis-subL1-layers').on('click', '.region-legend', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const $fieldset = $(this).closest('.region-fieldset');
      const $regionBody = $fieldset.find('.region-body');
      const sub = $fieldset.data('sub');
      const isCollapsed = $fieldset.hasClass('collapsed');

      if (isCollapsed) {
        // Expand
        $fieldset.removeClass('collapsed');
        $regionBody.css('display', 'block');
        $(this).find('.toggle-icon').removeClass('fa-chevron-right').addClass('fa-chevron-down');
      } else {
        // Collapse
        $fieldset.addClass('collapsed');
        $regionBody.css('display', 'none');
        $(this).find('.toggle-icon').removeClass('fa-chevron-down').addClass('fa-chevron-right');
      }

      if (!settings.collapsedSections) settings.collapsedSections = {};
      settings.collapsedSections[sub] = !isCollapsed;
      saveSettingsToStorage();
    });

    // Layer checkbox change (using event delegation)
    $('#panel-gis-subL1-layers').on('change', '.layer-item input[type="checkbox"]', onGisLayerToggleChanged);

    // Right-click on layer label for settings (using event delegation)
    $('#panel-gis-subL1-layers').on('contextmenu', '.gis-subL1-layer-label', function (evt) {
      evt.preventDefault();
      const layerId = $(this).attr('for').replace('gis-layer-', '');
      const gisLayer = _gisLayers.find((l) => l.id === layerId);
      if (gisLayer) {
        _layerSettingsDialog.gisLayer = gisLayer;
        _layerSettingsDialog.show();
      }
    });

    // Select All / None within region (using event delegation)
    $('#panel-gis-subL1-layers').on('click', '.gis-select-all', async function (e) {
      e.preventDefault();
      const $checkboxes = $(this).closest('.region-body').find('input[type="checkbox"]');

      // Batch update to avoid multiple fetchFeatures calls
      $checkboxes.each(function () {
        const layerId = $(this).data('layer-id');
        if (!settings.visibleLayers.includes(layerId)) {
          settings.visibleLayers.push(layerId);
        }
        $(this).prop('checked', true);
      });

      if (!ignoreFetch) {
        saveSettingsToStorage();
        await fetchFeatures();
      }
    });

    $('#panel-gis-subL1-layers').on('click', '.gis-select-none', async function (e) {
      e.preventDefault();
      const $checkboxes = $(this).closest('.region-body').find('input[type="checkbox"]');

      // Batch update to avoid multiple fetchFeatures calls
      $checkboxes.each(function () {
        const layerId = $(this).data('layer-id');
        const idx = settings.visibleLayers.indexOf(layerId);
        if (idx > -1) {
          settings.visibleLayers.splice(idx, 1);
        }
        $(this).prop('checked', false);
      });

      if (!ignoreFetch) {
        saveSettingsToStorage();
        await fetchFeatures();
      }
    });

    // Search functionality
    let searchTimeout;
    $('#gis-layer-search').on('input', function () {
      clearTimeout(searchTimeout);
      const query = $(this).val().toLowerCase().trim();

      searchTimeout = setTimeout(function () {
        if (query === '') {
          $('.region-fieldset.visible .layer-item').show();
          updateLayerStats();
        } else {
          let matchCount = 0;
          $('.region-fieldset.visible').each(function () {
            const $region = $(this);
            $region.find('.layer-item').each(function () {
              const matches = $(this).find('label').text().toLowerCase().includes(query);
              $(this).toggle(matches);
              if (matches) matchCount++;
            });
          });

          $('#gis-showing-count').text(matchCount);
        }
      }, 200);
    });

    // Helper function to update stats
    function updateLayerStats() {
      const regionCount = $('.gis-region-checkbox:checked').length;
      const visibleLayers = $('.region-fieldset.visible .controls-container.layer-item:visible').length;
      const activeLayers = $('.region-fieldset.visible input[type="checkbox"]:checked').length;

      $('#gis-region-count').text(regionCount);
      $('#gis-showing-count').text(visibleLayers);
      $('#gis-active-count').text(activeLayers);

      // Show/hide empty state
      $('#gis-empty-state').toggle(regionCount === 0);
    }
  }

  /**
   * Initializes and renders the GIS Layers "Settings" tab UI.
   *
   * This function dynamically builds the user interface for the GIS settings panel,
   * allowing users to control label display, popup visibility, layer appearance,
   * and manage data access tokens. Settings are organized into collapsible sections
   * with modern styling and dark mode support.
   *
   * Settings Sections:
   * - Labels: Address display options (HN, Street, Both, None), font family/size selectors
   * - Label Popup: Show/Hide toggle for the layer labels popup window
   * - Appearance: Fill parcels toggle for polygon rendering style
   * - Custom Groups: Manage saved layer/region groups, Load All Layers button
   * - Tyler/Socrata Token: API token management with save/remove functionality
   *
   * Features:
   * - Pill-style radio buttons for address display and popup visibility
   * - Dropdown selectors for font family and numeric input for font size
   * - Token input field with password masking when saved
   * - "Manage Custom Groups" button to open group manager dialog
   * - "Load All Layers" button for bulk layer loading
   * - Modern blue theme with consistent styling across all controls
   * - Full dark mode support matching WME Editor theme
   *
   * Dependencies (must be defined in scope at runtime):
   * - _gisLayers: Array of GIS layer objects ({id, name, country, countrySubL1, ...})
   * - settings: Object containing UI/user state/settings (addrLabelDisplay, fontFamily, fontSize, fillParcels, socrataAppToken, etc.)
   * - SCRIPT_AUTHOR: String for author/contact (for tooltips)
   * - jQuery ($)
   * - Event/callback handlers: onFillParcelsCheckedChanged, onGisAddrDisplayChange, openLayerGroupManagerDialog, saveSettingsToStorage, loadSpreadsheetAsync, initTab, logDebug, logError, togglePopupVisibility
   * - isPopupVisible: Boolean flag for popup state (mutated)
   *
   * Side Effects:
   * - Rebuilds the DOM within #panel-gis-layers-settings
   * - Registers event handlers for all interactive controls
   * - May trigger async functions for loading layers and updating settings
   * - Persists settings to localStorage when changed
   *
   * @function initSettingsTab
   * @returns {void}
   */
  function initSettingsTab() {
    const $settingsContainer = $('<div>', { class: 'settings-content', style: 'padding:6px;' });

    // ========== LABELS SECTION (Expanded by default) ==========
    const $labelsSection = $('<div>', { class: 'settings-section' });
    const $labelsHeader = $('<div>', { class: 'settings-section-header' }).append(
      $('<div>', { class: 'settings-section-title' }).append($('<i>', { class: 'fa fa-tag' }), $('<span>').text('Labels')),
      $('<i>', { class: 'fa fa-chevron-down section-toggle-icon' }),
    );
    const $labelsBody = $('<div>', { class: 'settings-section-body' });

    // Addresses pill-group
    const $addressBlock = $('<div>', { class: 'setting-item-block' });
    $addressBlock.append($('<label>', { class: 'setting-label' }).text('Addresses:'));
    const $addressPillGroup = $('<div>', { class: 'pill-group' });
    ['hn', 'street', 'all', 'none'].forEach((value) => {
      const labels = { all: 'Both', hn: 'HN', street: 'Street', none: 'None' };
      const id = `gisAddrDisplay-${value}`;
      const $pillOption = $('<div>', { class: 'pill-option' }).append(
        $('<input>', {
          type: 'radio',
          name: 'gisAddrDisplay',
          value,
          id,
        }).prop('checked', settings.addrLabelDisplay === value),
        $('<label>', { for: id }).text(labels[value]),
      );
      $addressPillGroup.append($pillOption);
    });
    $addressBlock.append($addressPillGroup);

    // Label Popup pill-group
    const $popupBlock = $('<div>', { class: 'setting-item-block' });
    $popupBlock.append($('<label>', { class: 'setting-label' }).text('Label Popup:'));
    const $popupPillGroup = $('<div>', { class: 'pill-group' });
    [
      { value: 'show', label: 'Show' },
      { value: 'hide', label: 'Hide' },
    ].forEach((opt) => {
      const id = `popupVisibility-${opt.value}`;
      const checked = (opt.value === 'show' && isPopupVisible) || (opt.value === 'hide' && !isPopupVisible);
      const $pillOption = $('<div>', { class: 'pill-option' }).append(
        $('<input>', {
          type: 'radio',
          name: 'popupVisibility',
          value: opt.value,
          id,
        }).prop('checked', checked),
        $('<label>', { for: id }).text(opt.label),
      );
      $popupPillGroup.append($pillOption);
    });
    $popupBlock.append($popupPillGroup);

    // Font select block
    const fontOptions = [
      { value: 'inherit', label: 'Default' },
      { value: '"SF Pro Display", "Segoe UI", Tahoma, Arial, sans-serif', label: 'SF Pro / Segoe UI (Recommended)' },
      { value: 'Verdana, Geneva, sans-serif', label: 'Verdana' },
      { value: 'Tahoma, Geneva, Verdana, sans-serif', label: 'Tahoma' },
      { value: '"Source Sans Pro", "Segoe UI", Arial, sans-serif', label: 'Source Sans Pro' },
      { value: '"Roboto", "Segoe UI", Arial, sans-serif', label: 'Roboto' },
      { value: '"Inter", "Segoe UI", Arial, sans-serif', label: 'Inter' },
      { value: 'Arial, Helvetica, sans-serif', label: 'Arial' },
      { value: 'Trebuchet MS, Helvetica, sans-serif', label: 'Trebuchet MS' },
      { value: 'Arial Black, Arial, sans-serif', label: 'Arial Black' },
      { value: 'Impact, "Arial Black", sans-serif', label: 'Impact' },
      { value: 'Consolas, "SF Mono", Monaco, "Cascadia Code", monospace', label: 'Consolas (Monospace)' },
      { value: '"JetBrains Mono", Consolas, "Courier New", monospace', label: 'JetBrains Mono' },
      { value: '"Courier New", Courier, monospace', label: 'Courier New' },
    ];

    // Font select dropdown
    const $fontBlock = $('<div>', { class: 'setting-item-block' });
    $fontBlock.append($('<label>', { class: 'setting-label', for: 'gis-label-font-select' }).text('Font:'));
    const $fontSelect = $('<select>', { id: 'gis-label-font-select', class: 'setting-select' });
    fontOptions.forEach((opt) => {
      $fontSelect.append($('<option>', { value: opt.value, text: opt.label }).prop('selected', settings.fontFamily === opt.value));
    });
    $fontBlock.append($fontSelect);

    // Font size input
    const $sizeBlock = $('<div>', { class: 'setting-item-block' });
    $sizeBlock.append($('<label>', { class: 'setting-label', for: 'gis-label-font-size' }).text('Size:'));
    const $sizeInputRow = $('<div>', { style: 'display:flex;align-items:center;' }).append(
      $('<input>', {
        type: 'number',
        id: 'gis-label-font-size',
        class: 'setting-input',
        min: 8,
        max: 48,
        value: settings.fontSize || 20,
      }),
      $('<span>', { class: 'setting-unit' }).text('px'),
    );
    $sizeBlock.append($sizeInputRow);
    $sizeBlock.append($('<div>', { class: 'help-text' }).text('Recommended: 12-16px for readability'));

    // Assemble Labels section
    $labelsBody.append($addressBlock, $popupBlock, $fontBlock, $sizeBlock);
    $labelsSection.append($labelsHeader, $labelsBody);

    // ========== DISPLAY OPTIONS SECTION (Collapsed by default) ==========
    const $displaySection = $('<div>', { class: 'settings-section collapsed' });
    const $displayHeader = $('<div>', { class: 'settings-section-header' }).append(
      $('<div>', { class: 'settings-section-title' }).append($('<i>', { class: 'fa fa-eye' }), $('<span>').text('Display Options')),
      $('<i>', { class: 'fa fa-chevron-down section-toggle-icon' }),
    );
    const $displayBody = $('<div>', { class: 'settings-section-body' });

    const $fillParcelsToggle = $('<div>', { class: 'toggle-switch' }).append(
      $('<label>', { for: 'fill-parcels' }).text('Fill parcels with color'),
      $('<label>', { class: 'switch' }).append($('<input>', { type: 'checkbox', id: 'fill-parcels' }).prop('checked', settings.fillParcels), $('<span>', { class: 'slider' })),
    );
    $displayBody.append($fillParcelsToggle);
    $displaySection.append($displayHeader, $displayBody);

    // ========== LAYER GROUPINGS SECTION (Collapsed by default) ==========
    const $groupingsSection = $('<div>', { class: 'settings-section collapsed' });
    const $groupingsHeader = $('<div>', { class: 'settings-section-header' }).append(
      $('<div>', { class: 'settings-section-title' }).append($('<i>', { class: 'fa fa-layer-group' }), $('<span>').text('Layer Groupings')),
      $('<i>', { class: 'fa fa-chevron-down section-toggle-icon' }),
    );
    const $groupingsBody = $('<div>', { class: 'settings-section-body' });

    $groupingsBody.append(
      $('<p>', { class: 'section-description' }).text('Save and manage your custom layer configurations for quick recall.'),
      $('<button>', { id: 'gis-manager-launch-btn', class: 'btn-full' }).append($('<i>', { class: 'fa fa-cog' }), 'Manage Custom Groups'),
      $('<button>', {
        id: 'gis-load-all-btn',
        class: 'btn-full',
        style: 'margin-top:8px;background:linear-gradient(to bottom, #5d934a 0%, #548342 100%);border:1px solid #406927;',
        title: 'Load ALL country/state/region layers for custom grouping (slower)',
      }).append($('<i>', { class: 'fa fa-download' }), 'Load All Layers'),
    );
    $groupingsSection.append($groupingsHeader, $groupingsBody);

    // ========== API TOKENS SECTION (Expanded by default) ==========
    const $tokensSection = $('<div>', { class: 'settings-section' });
    const $tokensHeader = $('<div>', { class: 'settings-section-header' }).append(
      $('<div>', { class: 'settings-section-title' }).append($('<i>', { class: 'fa fa-key' }), $('<span>').text('API Tokens')),
      $('<i>', { class: 'fa fa-chevron-down section-toggle-icon' }),
    );
    const $tokensBody = $('<div>', { class: 'settings-section-body' });

    const hasToken = !!settings.socrataAppToken;
    const $tokenBlock = $('<div>', { class: 'setting-item-block' });
    $tokenBlock.append($('<label>', { class: 'setting-label', for: 'socrata-app-token-input' }).text('Tyler/Socrata App Token:'));
    $tokenBlock.append(
      $('<input>', {
        type: hasToken ? 'password' : 'text',
        id: 'socrata-app-token-input',
        class: 'setting-input-full',
        placeholder: hasToken ? 'Token is set' : 'Enter token...',
        value: hasToken ? settings.socrataAppToken : '',
        disabled: hasToken,
      }),
    );
    $tokenBlock.append($('<div>', { class: 'help-text' }).text('Improves API rate limits and required for V3 API'));

    const $tokenButtons = $('<div>', { class: 'button-group' }).append(
      $('<button>', { id: 'save-socrata-token-btn', class: hasToken ? 'btn-secondary-modern' : 'btn-primary-modern' }).text(hasToken ? 'Remove Token' : 'Save Token'),
    );
    $tokenBlock.append($tokenButtons);

    $tokensBody.append($tokenBlock);
    $tokensSection.append($tokensHeader, $tokensBody);

    // ========== ASSEMBLE ALL SECTIONS ==========
    $settingsContainer.append($labelsSection, $displaySection, $groupingsSection, $tokensSection);

    // Clear and set the settings panel
    $('#panel-gis-layers-settings').empty().append($settingsContainer);

    // ========== EVENT HANDLERS ==========

    // Collapsible section headers
    $('.settings-section-header').on('click', function () {
      $(this).closest('.settings-section').toggleClass('collapsed');
    });

    // Address label display change
    $('input[name="gisAddrDisplay"]').on('change', onGisAddrDisplayChange);

    // Prevent clicks on pill buttons from bubbling to section header
    $('.pill-group').on('click', function(e) {
      e.stopPropagation();
    });

    // Label popup visibility change
    $('input[name="popupVisibility"]').on('change', function () {
      isPopupVisible = $(this).val() === 'show';
      togglePopupVisibility();
    });

    // Font select change
    $('#gis-label-font-select').on('change', function () {
      settings.fontFamily = $(this).val();
      saveSettingsToStorage();
      applyFontSettingsToStyles();

      // Redraw visual layers to apply updated font
      try {
        sdk.Map.redrawLayer({ layerName: DEFAULT_LAYER_NAME });
        sdk.Map.redrawLayer({ layerName: ROAD_LAYER_NAME });
      } catch (e) {
        logError('Layer does not exist during style update', e);
      }
      updatePopup(layerLabels);
    });

    // Font size change
    $('#gis-label-font-size').on('change input', function () {
      const newSize = parseInt($(this).val(), 10);
      if (newSize >= 8 && newSize <= 48) {
        settings.fontSize = newSize;
        saveSettingsToStorage();
        applyFontSettingsToStyles();

        // Redraw visual layers to apply updated font size
        try {
          sdk.Map.redrawLayer({ layerName: DEFAULT_LAYER_NAME });
          sdk.Map.redrawLayer({ layerName: ROAD_LAYER_NAME });
        } catch (e) {
          logError('Layer does not exist during style update', e);
        }
        updatePopup(layerLabels);
      }
    });

    // Fill parcels toggle
    $('#fill-parcels').on('change', onFillParcelsCheckedChanged);

    // Manage Custom Groups button
    $('#gis-manager-launch-btn').on('click', openLayerGroupManagerDialog);

    // Load All Layers button
    $('#gis-load-all-btn').on('click', async function () {
      $(this).prop('disabled', true).html('<i class="fa fa-spinner fa-spin"></i> Loading...');
      try {
        await loadSpreadsheetAsync('ALL', 'ALL');
        initTab(false);
        logDebug('All layers loaded!');
        alert('All layers loaded successfully!');
      } catch (e) {
        logError(`Error in load all Layers: ${e.message || e}`);
        alert(`Failed to load all layers: ${e.message || e}`);
      }
      $(this).prop('disabled', false).html('<i class="fa fa-download"></i> Load All Layers');
    });

    // Save/Remove Token button (toggles based on whether token is set)
    $('#save-socrata-token-btn')
      .off('click')
      .on('click', function () {
        const hasToken = !!settings.socrataAppToken;

        if (hasToken) {
          // Remove token
          if (confirm('Are you sure you want to remove the Tyler/Socrata App Token?')) {
            settings.socrataAppToken = '';
            saveSettingsToStorage();

            // Update UI directly without full re-render
            $('#socrata-app-token-input')
              .attr('type', 'text')
              .attr('placeholder', 'Enter token...')
              .val('')
              .prop('disabled', false);

            $('#save-socrata-token-btn')
              .text('Save Token')
              .removeClass('btn-secondary-modern')
              .addClass('btn-primary-modern');

            alert('Token removed successfully.');
          }
        } else {
          // Save token
          const token = $('#socrata-app-token-input').val().trim();
          if (token) {
            settings.socrataAppToken = token;
            saveSettingsToStorage();

            // Update UI directly without full re-render
            $('#socrata-app-token-input')
              .attr('type', 'password')
              .attr('placeholder', 'Token is set')
              .val(token)
              .prop('disabled', true);

            $('#save-socrata-token-btn')
              .text('Remove Token')
              .removeClass('btn-primary-modern')
              .addClass('btn-secondary-modern');

            alert('Token saved successfully.');
          } else {
            alert('Please enter a token first.');
          }
        }
      });
  }

  /**
   * Initializes the GIS Layers tab UI.
   *
   * - On the first call, generates tab content dynamically and registers the tab with the sidebar.
   * - Sets various UI elements: labels, buttons, a report request link, refresh icon, and settings panel.
   * - Wires up event handlers for toggling GIS Layers and refreshing layer info.
   * - Always calls sub-initializers for settings and layers.
   *
   * @async
   * @function initTab
   * @param {boolean} [firstCall=true] - Whether this is the first initialization (controls tab registration and content rendering).
   * @returns {Promise<void>} Resolves when initialization is complete.
   */
  async function initTab(firstCall = true) {
    if (firstCall) {
      // Build the tab content UI, including version, report/request link, refresh button, and tab panes.
      const content = $('<div>')
        .append(
          // Script name and version.
          $('<span>', { style: 'font-size:14px;font-weight:600' }).text('GIS Layers'),
          $('<span>', { style: 'font-size:11px;margin-left:10px;color:#aaa;' }).text(GM_info.script.version),
          // Report/request Google Form link.
          $('<a>', {
            href: REQUEST_FORM_URL.replace('{username}', userInfo?.userName ?? ''),
            target: '_blank',
            style: 'color: #6290b7;font-size: 12px;margin-left: 8px;',
            title: 'Report broken layers, bugs, request new layers, script features',
          }).text('Submit a request'),
          // Refresh icon.
          $('<span>', {
            id: 'gis-layers-refresh',
            class: 'fa fa-refresh',
            style: 'float: right;',
            'data-toggle': 'tooltip',
            title: 'Pull new layer info from master sheet and refresh all layers.',
          }),
          // Nav tabs for layer/settings panels.
          '<ul class="nav nav-tabs gis-internal-tabs">' +
            '<li class="active"><a data-toggle="tab" href="#panel-gis-subL1-layers" aria-expanded="true">Layers</a></li>' +
            '<li><a data-toggle="tab" href="#panel-gis-layers-settings" aria-expanded="true">Settings</a></li>' +
            '</ul>',
          // Tab panels for layers and settings.
          $('<div>', { class: 'tab-content', style: 'padding:4px;padding-top:2px' }).append(
            $('<div>', { class: 'tab-pane active', id: 'panel-gis-subL1-layers', style: 'padding: 2px 0px 0px 0px; width: auto' }),
            $('<div>', { class: 'tab-pane', id: 'panel-gis-layers-settings', style: 'padding: 2px 0px 0px 0px; width: auto' }),
          ),
        )
        .html();

      // Build the "power" button and label.
      const powerButtonColor = settings.enabled ? '#00bd00' : '#ccc';
      const labelText = $('<div>')
        .append(
          $('<span>', {
            class: 'fa fa-power-off',
            id: 'gis-layers-power-btn',
            style: `margin-right: 5px;cursor: pointer;color: ${powerButtonColor};font-size: 13px;`,
            title: 'Toggle GIS Layers',
          }),
          $('<span>', { title: 'GIS Layers' }).text('GIS-L'),
        )
        .html();

      // Register a new script tab in the sidebar and fill in content.
      const { tabLabel, tabPane } = await sdk.Sidebar.registerScriptTab();
      tabLabel.innerHTML = labelText;
      tabPane.innerHTML = content;
      tabPane.classList.add('wme-gis-panel');

      // Tweak tab spacing and wire up power and refresh buttons.
      $(tabPane).parent().css({ width: 'auto', padding: '4px' });
      $('#gis-layers-power-btn').on('click', function () {
        setEnabled(!settings.enabled);

        // Prevent parent tab activation when toggling GIS-Layers.
        return false;
      });

      $('#gis-layers-refresh').on('click', onRefreshLayersClick);
    }

    // Always initialize settings and layer panels.
    initSettingsTab();
    initLayersTab();
  }

  /**
   * Initializes the GIS Layers script UI and event handlers, including tab content, layer controls, and listeners.
   *
   * - On first initialization, sets up the layer tab, adds the GIS Layers checkbox to the Layer Switcher,
   *   synchronizes its checked state with settings, subscribes to layer and map events, and displays the script info alert.
   * - On subsequent calls, reinitializes the tab contents with the current state.
   *
   * @function initGui
   * @param {boolean} [firstCall=true] - Whether this is the initial setup or a subsequent refresh.
   * @returns {void}
   */
  function initGui(firstCall = true) {
    initLayer();
    if (firstCall) {
      // One-time UI setup that should never be repeated
      initTab(true);
      sdk.LayerSwitcher.addLayerCheckbox({ name: 'GIS Layers' });
      sdk.LayerSwitcher.setLayerCheckboxChecked({ name: 'GIS Layers', isChecked: settings.enabled });
      sdk.Events.on({ eventName: 'wme-layer-checkbox-toggled', eventHandler: onLayerCheckboxChanged });
      sdk.Events.on({ eventName: 'wme-map-move-end', eventHandler: onMapMove });
      showScriptInfoAlert();
    } else {
      // Refreshable UI parts - always rebuild the tab contents
      initTab(false);
    }
  }

  /**
   * Opens the GIS Layer Group Manager dialog for managing saved layer/region groups.
   *
   * Features:
   * - Renders a draggable modal dialog with modern blue theme styling
   * - Allows the user to save, load, and delete "layer groups": sets of currently selected regions and visible GIS layers
   * - Uses native browser dialogs (confirm/prompt/alert) for user interactions
   * - Supports dark mode theming that adapts to WME Editor theme
   * - Includes "Clear All" functionality to reset all selections
   * - Prevents duplicate dialog instances
   * - Cleans up event handlers on close/escape
   *
   * Dialog Structure:
   * - Header: Blue bar with title and close button
   * - Section 1: Current Selection - "Clear All" and "Save as Group" buttons
   * - Section 2: My Saved Groups - Dropdown selector with "Load Group" and "Delete Group" buttons
   *
   * Integrations:
   * - settings: Global state object for storing/retrieving layer groups
   * - jQuery: For DOM manipulation and event handling
   * - Native dialogs: confirm(), prompt(), alert() for user interactions
   *
   * @function openLayerGroupManagerDialog
   * @returns {void}
   */
  function openLayerGroupManagerDialog() {
    if ($('#gis-layer-group-dialog').length) return;

    const scriptName = typeof GM_info !== 'undefined' ? GM_info.script.name : 'Layer Groups';

    // Header and close
    const $title = $('<span>').text(scriptName + ' — Layer Groups');
    const $close = $('<span>', {
      style: 'cursor:pointer;padding-left:14px;font-size:20px;color:#fff;float:right;',
      class: 'fa fa-window-close',
      title: 'Close',
      tabindex: 0,
    }).on('click keydown', function (e) {
      if (e.type === 'click' || (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' '))) $dlg.remove();
    });

    // Dialog container
    const $dlg = $('<div>', {
      id: 'gis-layer-group-dialog',
      class: 'gis-popup-dialog',
      style:
        'position:fixed; top:14%; left:420px; width:400px; z-index:99999;' +
        'border-width:1px; border-style:solid; border-radius:8px;' +
        'box-shadow:0 4px 16px rgba(0,0,0,0.2); padding:0; font-family:inherit;',
    });

    // Header
    $dlg.append(
      $('<div>', {
        class: 'gis-dialog-header',
        style: 'border-radius:8px 8px 0 0; padding: 12px 16px; font-weight:600; text-align:left; font-size:16px;',
      }).append($title, $close),
    );

    // --- Section: Current Selection ---
    const $section1 = $('<div>', {
      class: 'gis-dialog-section',
      style: 'border-radius: 6px; margin:12px; padding:16px; border: 1px solid;',
    }).append(
      $('<div>', { class: 'gis-dialog-section-title', style: 'font-size:15px;font-weight:600;margin-bottom:8px;' }).text('Current Selection'),
      $('<div>', { class: 'gis-dialog-section-text', style: 'font-size:13px;margin-bottom:16px;' }).text('Save or load your current visible layers and region selections as quick-access groups.'),
      $('<div>', { style: 'display:flex;gap:12px;align-items:center;margin-top:4px;' }).append(
        $('<button>', {
          class: 'GISGroupDlg-btn btn-secondary-modern',
          title: 'Remove all selected sub-regions and visible layers',
        })
          .text('Clear All')
          .on('click', function () {
            if (confirm('Are you sure you want to remove all visible layers and region selections?')) {
              settings.selectedSubL1 = [];
              settings.visibleLayers = [];
              settings.collapsedSections = {};
              saveSettingsToStorage();
              loadSettingsFromStorage();
              initGui(false);
              $dlg.remove();
            }
          }),
        $('<button>', {
          class: 'GISGroupDlg-btn btn-primary-modern',
          title: 'Save current layers and selections as a group',
        })
          .text('Save as Group')
          .on('click', function () {
            const name = prompt('Enter a name for this group:');
            if (!name || !name.trim()) return;
            settings.layerGroups = settings.layerGroups || {};
            if (settings.layerGroups[name]) {
              if (confirm('Group "' + name + '" exists. Overwrite?')) {
                doSaveGroup(name, true);
              }
            } else {
              doSaveGroup(name, false);
            }
            /**
             * @param {string} groupName - Name for the saved group.
             * @param {boolean} overwritten - If true, notify user it's an overwrite.
             * @returns {void}
             */
            function doSaveGroup(groupName, overwritten) {
              settings.layerGroups[groupName] = {
                selectedSubL1: [...settings.selectedSubL1],
                visibleLayers: [...settings.visibleLayers],
                collapsedSections: { ...settings.collapsedSections },
                addrLabelDisplay: settings.addrLabelDisplay,
                fillParcels: settings.fillParcels,
                fontFamily: settings.fontFamily,
                fontSize: settings.fontSize,
              };
              saveSettingsToStorage();
              loadSettingsFromStorage();
              populateGroupSelect();
              alert('Layer group saved as "' + groupName + '"' + (overwritten ? ' (overwritten)' : ''));
            }
          }),
      ),
    );

    // --- Section: My Saved Groups ---
    const $groupSelect = $('<select>', {
      id: 'gis-layer-group-select',
      class: 'gis-dialog-select',
      style:
        'font-size:13px; border-radius:4px; border:1px solid; padding:8px 12px;' +
        'width:100%; outline:none;' +
        'white-space:nowrap; overflow:hidden; text-overflow:ellipsis;',
    });

    /**
     * Populates the group selection drop-down with saved layer groups from settings.
     * If no groups exist, shows a disabled "No groups saved" message.
     *
     * @function populateGroupSelect
     * @returns {void}
     */
    function populateGroupSelect() {
      $groupSelect.empty();
      const groups = settings.layerGroups || {};
      if (Object.keys(groups).length === 0) {
        $groupSelect.append($('<option>', { disabled: true, selected: true, text: 'No groups saved' }));
        return;
      }
      $groupSelect.append($('<option>', { selected: true, disabled: true, text: 'Select group...' }));
      Object.keys(groups).forEach((groupName) => {
        $groupSelect.append($('<option>', { value: groupName, text: groupName, title: groupName }));
      });
    }
    populateGroupSelect();

    const $section2 = $('<div>', {
      class: 'gis-dialog-section',
      style: 'border-radius: 6px; margin:12px; padding:16px; border: 1px solid;',
    }).append(
      $('<div>', { class: 'gis-dialog-section-title', style: 'font-size:15px;font-weight:600;margin-bottom:12px;' }).text('My Saved Groups'),
      $('<div>', { style: 'margin-bottom:12px;' }).append($groupSelect),
      $('<div>', { style: 'display:flex;gap:12px;align-items:center;margin-top:6px;' }).append(
        $('<button>', {
          class: 'GISGroupDlg-btn btn-primary-modern',
          title: 'Load selected group',
        })
          .text('Load Group')
          .on('click', function () {
            const group = $groupSelect.val();
            if (typeof group !== 'string' || !(settings.layerGroups && settings.layerGroups[group])) {
              if (typeof WazeWrap !== 'undefined' && WazeWrap.Alerts && typeof WazeWrap.Alerts.info === 'function') {
                WazeWrap.Alerts.info(scriptName, 'Please select a group to load.');
              } else {
                alert('Please select a group to load.');
              }
              return;
            }
            const grp = settings.layerGroups[group];
            settings.selectedSubL1 = [...grp.selectedSubL1];
            settings.visibleLayers = [...grp.visibleLayers];
            settings.collapsedSections = { ...grp.collapsedSections };
            settings.addrLabelDisplay = grp.addrLabelDisplay;
            settings.fillParcels = grp.fillParcels;
            if (grp.fontFamily !== undefined) settings.fontFamily = grp.fontFamily;
            if (grp.fontSize !== undefined) settings.fontSize = grp.fontSize;
            saveSettingsToStorage();
            loadSettingsFromStorage();
            initGui(false);
            $dlg.remove();
          }),
        $('<button>', {
          class: 'GISGroupDlg-btn btn-secondary-modern',
          title: 'Delete selected group',
        })
          .text('Delete Group')
          .on('click', function () {
            const group = $groupSelect.val();
            if (typeof group !== 'string' || !(settings.layerGroups && settings.layerGroups[group])) {
              alert('Please select a group to delete.');
              return;
            }
            if (confirm('Delete group "' + group + '"?\nThis cannot be undone!')) {
              delete settings.layerGroups[group];
              saveSettingsToStorage();
              loadSettingsFromStorage();
              populateGroupSelect();
              alert('Group "' + group + '" deleted.');
            }
          }),
      ),
    );

    // Build and insert dialog
    $dlg.append($section1, $section2);
    $dlg.appendTo('body');

    // Make draggable if possible
    if (typeof jQuery.ui !== 'undefined') $dlg.draggable({ stop: () => $dlg.css('height', '') });

    $(document).on('keydown.gisLayerDialog', function (e) {
      if (e.key === 'Escape') $dlg.remove();
    });
    $dlg.on('remove', () => $(document).off('keydown.gisLayerDialog'));
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
      // Only load at suitable zoom levels
      const currentZoomLevel = sdk.Map.getZoomLevel();
      if (currentZoomLevel < 12) return;

      await whatsInView();

      /** @type {Set<string>} */
      const countryCodes = new Set();
      /** @type {Record<string, Set<string>>} */
      const countryRegionCodes = {};

      // Collect visible country and subdivision codes
      for (const c of Object.values(_whatsInView)) {
        if (!c?.ISO_ALPHA3) continue;
        countryCodes.add(c.ISO_ALPHA3);
        const regionSet = new Set();
        if (c.subL1) {
          for (const sub of Object.values(c.subL1)) {
            if (sub?.subL1_id) regionSet.add(sub.subL1_id);
          }
        }
        countryRegionCodes[c.ISO_ALPHA3] = regionSet;
      }

      // For each country, determine which regions need loading
      for (const isoCode of countryCodes) {
        const regionCodes = countryRegionCodes[isoCode];
        const newRegionCodesToLoad = new Set();
        let needToLoad = false;

        if (!alreadyLoadedCountries.has(isoCode)) {
          // First load for this country
          regionCodes.forEach((r) => newRegionCodesToLoad.add(r));
          needToLoad = true;
        } else {
          // Already loaded; only new visible subdivisions
          regionCodes.forEach((regionCode) => {
            if (!alreadyLoadedSubL1.has(regionCode)) {
              newRegionCodesToLoad.add(regionCode);
              needToLoad = true;
            }
          });
        }

        if (needToLoad) {
          await loadSpreadsheetAsync(isoCode, newRegionCodesToLoad);
          alreadyLoadedCountries.add(isoCode);
          initGui(false);
          newRegionCodesToLoad.forEach((regionCode) => alreadyLoadedSubL1.add(regionCode));
        }
      }
    } catch (error) {
      logError(`Error in loadVisibleCountryData: ${error && error.message ? error.message : error}`);
      throw error;
    }
  }

  /**
   * Compare two version strings ("2025.08.01.00", "2018.04.27.001")
   * Returns 1 if a > b, -1 if a < b, 0 if equal
   * @param {string} a
   * @param {string} b
   * @returns {number}
   */
  function compareVersions(a, b) {
    const splitA = a.split('.').map(Number);
    const splitB = b.split('.').map(Number);
    const maxLen = Math.max(splitA.length, splitB.length);
    for (let i = 0; i < maxLen; i++) {
      const numA = splitA[i] || 0;
      const numB = splitB[i] || 0;
      if (numA > numB) return 1;
      if (numA < numB) return -1;
    }
    return 0;
  }

  /**
   * Asynchronously loads GIS layer definitions from a Google Sheets spreadsheet.
   *
   * Fetches layer configuration data from a fixed tab in a Google Sheet using the Visualization API endpoint,
   * then parses, filters, and augments the data based on the provided country ISO code and region codes.
   * Returns an object with an error string if something goes wrong, or null if successful.
   *
   * @param {string} isoCode - Country ISO code, or "ALL" to load all layers.
   * @param {Set<string>|string} regionCodes - Set of region/subdivision codes, or "ALL" to load for all.
   * @returns {Promise<{ error: string|null }>} Promise resolving to { error } object.
   */
  async function loadSpreadsheetAsync(isoCode, regionCodes) {
    const TAB_NAME = 'Layer Definitions v2';
    const SHEET_ID = '1cEG3CvXSCI4TOZyMQTI50SQGbVhJ48Xip-jjWg4blWw';
    const LAYER_DEF_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(TAB_NAME)}`;

    const FIELD_INDEXES = {
      country: 0,
      subL1: 1,
      name: 2,
      id: 3,
      subL2: 4,
      url: 5,
      where: 6,
      labelFields: 7,
      processLabel: 8,
      style: 9,
      visibleAtZoom: 10,
      labelsVisibleAtZoom: 11,
      enabled: 12,
      restrictTo: 13,
      oneTimeAlert: 14,
    };

    const REQUIRED_FIELDS = Object.keys(FIELD_INDEXES);
    let dataObjects = [];
    /** @type {{ error: string | null }} */
    const result = { error: null };

    // Helper function to extract hostname from URL
    const getHostname = (url) => {
      try {
        return new URL(url).hostname;
      } catch (e) {
        logError(`Invalid URL during layer setup: ${url}`);
        return 'unknown';
      }
    };

    try {
      const resp = await fetch(LAYER_DEF_URL);
      const text = await resp.text();
      const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\);/);
      if (!match) {
        result.error = 'Failed to parse Google Sheet data!';
        logError(result.error);
        return result;
      }
      const json = JSON.parse(match[1]);

      const allRows = json.table.rows;

      const firstDataIdx = allRows.findIndex((r) => r.c?.[0]?.v && r.c?.[1]?.v && r.c?.[2]?.v && r.c?.[3]?.v && typeof r.c[0].v === 'string' && typeof r.c[1].v === 'string');
      if (firstDataIdx === -1) {
        result.error = 'Could not auto-detect start of data rows!';
        logError(result.error);
        return result;
      }

      function rowToObj(row) {
        const obj = {};
        for (let key of REQUIRED_FIELDS) {
          const idx = FIELD_INDEXES[key];
          const cell = row.c && row.c[idx];
          let value = cell && cell.v !== undefined && cell.v !== null ? cell.v : null;

          // Coerce known numeric fields
          if (key === 'visibleAtZoom' || key === 'labelsVisibleAtZoom') {
            obj[key] = value !== null && value !== undefined && value !== '' ? Number(value) : null;
          } else {
            obj[key] = value;
          }
        }
        return obj;
      }

      dataObjects = allRows
        .slice(firstDataIdx)
        .map(rowToObj)
        .filter((obj) => obj.country && obj.subL1);

      // --- VERSION CHECK ---
      let minVersion = '';
      if (dataObjects.length && /^\d+\.\d+\.\d+\.\d+$/.test(dataObjects[0].country)) {
        minVersion = dataObjects[0].country;
        dataObjects = dataObjects.slice(1);
      }
      if (typeof scriptVersion !== 'undefined' && minVersion && compareVersions(scriptVersion, minVersion) < 0) {
        result.error = `Script must be updated to at least version ${minVersion} before layer definitions can be loaded.`;
        logError(result.error);
      }

      const loadAll = (typeof isoCode === 'string' && isoCode.toUpperCase() === 'ALL') || (typeof regionCodes === 'string' && regionCodes.toUpperCase() === 'ALL');
      if (!loadAll && (!regionCodes || typeof regionCodes.has !== 'function')) {
        regionCodes = new Set();
      }

      if (!result.error) {
        dataObjects.forEach((row) => {
          // Normalize the enabled column: only 1 gets enabled, everything else (including blank) is 0
          let enabledVal = (row.enabled || '').toString().trim().toLowerCase();
          row.enabled = enabledVal === '1' ? 1 : 0;

          if (row.enabled !== 1) return; // Skip rows not enabled

          // It's now always 1 or 0 across all rows
          const layerDef = { enabled: row.enabled };
          let countryId = '',
            subL1Upper = '';

          REQUIRED_FIELDS.forEach((fldName) => {
            let value = row[fldName];

            // Always assign zoom fields as numbers
            if (fldName === 'visibleAtZoom' || fldName === 'labelsVisibleAtZoom') {
              layerDef[fldName] = value !== null && value !== undefined && value !== '' ? Number(value) : null;
              return;
            }

            // Special array fields
            if ((fldName === 'subL2' || fldName === 'labelFields') && typeof value === 'string') {
              layerDef[fldName] = value.split(',').map((item) => item.trim());
              return;
            }

            // Special label processor
            if (fldName === 'processLabel' && typeof value === 'string') {
              try {
                layerDef[fldName] = ESTreeProcessor.compile(`function __$proc(){${value}} __$proc();`);
              } catch (ex) {
                layerDef.labelProcessingError = true;
                logError(`Error loading label processing function for layer "${layerDef.id}".`, ex);
              }
              return;
            }

            // Style parsing
            if (fldName === 'style' && typeof value === 'string') {
              layerDef.isRoadLayer = value === 'roads';
              if (!layerDef.isRoadLayer && typeof LAYER_STYLES !== 'undefined' && !LAYER_STYLES.hasOwnProperty(value)) {
                try {
                  value = JSON.parse(value);
                } catch (ex) {
                  logError(`Invalid style definition for layer "${layerDef.id}".`, ex);
                }
              }
              layerDef[fldName] = value;
              return;
            }

            // Uppercase helpers
            if (fldName === 'country' && typeof value === 'string') countryId = value.toUpperCase();
            if (fldName === 'subL1' && typeof value === 'string') {
              subL1Upper = value.toUpperCase();
              layerDef[fldName] = subL1Upper;
              return;
            }

            // RestrictTo parser
            if (fldName === 'restrictTo' && typeof value === 'string') {
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
                  } else if (entry === userInfo.userName?.toLowerCase()) {
                    return true;
                  }
                  return false;
                });
              } catch (ex) {
                logError(ex);
              }
              layerDef.restrictTo = value;
              return;
            }

            if (fldName === 'labelFields' && (!value || typeof value !== 'string')) {
              layerDef[fldName] = [''];
              return;
            }

            // Assign all other fields where value is not null/undefined
            if (value !== undefined && value !== null) {
              layerDef[fldName] = value;
            }
          });

          // Platform detection
          if (typeof layerDef.url === 'string') {
            const url = layerDef.url;
            if (/\/rest\/(services|Shared)\//i.test(url) || /\/MapServer(\/\d*)?$/i.test(url) || /\/gis\/rest\//i.test(url)) {
              layerDef.platform = 'ArcGIS';
            } else if (/\/resource\/[a-z0-9-]+$/i.test(url)) {
              layerDef.platform = 'SocrataV2';
            } else if (/\/api\/v3\/views\/[a-z0-9-]+/i.test(url)) {
              layerDef.platform = 'SocrataV3';
            } else {
              layerDef.platform = 'Other';
            }

            // **ADD HOSTNAME PRE-COMPUTATION**
            layerDef.hostname = getHostname(layerDef.url);
          } else {
            layerDef.platform = 'Other';
            layerDef.hostname = 'unknown';
          }

          let validSubL1 = false;
          if (loadAll) {
            layerDef.countrySubL1 = `${layerDef.country || ''}-${layerDef.subL1 || ''}`;
            validSubL1 = true;
          } else {
            if (countryId === isoCode.toUpperCase() && subL1Upper) {
              layerDef['countrySubL1'] = `${countryId}-${subL1Upper}`;
            }
            validSubL1 = regionCodes && (regionCodes.has(subL1Upper) || subL1Upper === isoCode.toUpperCase());
          }
          if (validSubL1 && !layerDef.notAllowed) {
            const layerExists = typeof _gisLayers !== 'undefined' && _gisLayers.some((existingLayer) => existingLayer.id === layerDef.id);
            if (!layerExists && typeof _gisLayers !== 'undefined') {
              _gisLayers.push(layerDef);
            }
          }
        });
      }
    } catch (err) {
      result.error = `Spreadsheet call failed. ${err && err.message ? err.message : err}`;
      logError(result.error, err);
    }

    if (!dataObjects.length) {
      result.error = 'Spreadsheet was empty or did not return any valid rows.';
      logError(result.error);
      return result;
    }
    return result;
  }

  /**
   * Registers a keyboard shortcut with the SDK, ensuring the shortcut keys are not already in use.
   * Logs errors if the shortcut keys are in use or registration fails.
   *
   * @param {string} shortcutId - Unique identifier for the shortcut.
   * @param {string} description - Human-readable description of the shortcut.
   * @param {() => void} callback - Callback to execute when the shortcut is triggered.
   * @returns {boolean} Returns `true` if registration succeeded, otherwise `false`.
   *
   * @see {@link sdk.Shortcuts.createShortcut}
   * @see {@link logError}
   * @see {@link logDebug}
   */
  function createShortcut(shortcutId, description, callback) {
    const shortcutObj = settings.shortcuts?.[shortcutId] ?? null;
    let shortcutKeys = shortcutObj?.combo ?? null;

    // Always convert to combo format for SDK
    if (shortcutKeys) {
      if (sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys })) {
        logError(`Shortcut Keys "${shortcutKeys}" are already in use by another script. "${description}" will not be set with these keys.`);
        shortcutKeys = null;
      }
    }

    try {
      sdk.Shortcuts.createShortcut({
        shortcutId,
        shortcutKeys,
        description,
        callback,
      });
      logDebug(`Shortcut Registration successful for "${description}" with keys: "${shortcutKeys}"`);
      return true;
    } catch (e) {
      logError(`Failed to register Shortcut "${description}" (${shortcutKeys}): ${e.message || e}`);
      return false;
    }
  }

  /**
   * Initializes the GIS layers and related global state.
   * On the first call, loads user info, settings, sets up shortcuts, GUI handlers, and event listeners.
   * On every call, loads country and subdivision mappings and visible country data, updates the GUI and features.
   *
   * @async
   * @param {boolean} [firstCall=true] - Whether this is the initial invocation (triggers full setup).
   * @returns {Promise<void>} Resolves when initialization steps are complete.
   */
  async function init(firstCall = true) {
    if (firstCall) {
      await loadStylesFromSheetAsync(); // Load Style data from Sheet 1st!

      // One-time initialization
      userInfo = sdk.State.getUserInfo();
      loadSettingsFromStorage(true);

      // Register shortcuts with stored keys (if set), else with no keys (user must assign)
      createShortcut('toggleHnsOnly', 'Toggle HN-only address labels', onAddressDisplayShortcutKey);
      createShortcut('toggleEnabled', 'Toggle display of GIS Layers', onToggleGisLayersShortcutKey);

      installPathFollowingLabels();
      window.addEventListener('beforeunload', saveSettingsToStorage, false);
      _layerSettingsDialog = new LayerSettingsDialog();

      const tBuildMap0 = performance.now();
      await buildCountrySubdivisionMapping();
      logDebug('buildCountrySubdivisionMapping took ' + Math.round(performance.now() - tBuildMap0) + 'ms');
    } else {
      // Refresh - clear everything for complete reload
      _gisLayers = [];
      alreadyLoadedCountries.clear();
      alreadyLoadedSubL1.clear();
    }

    const t0 = performance.now();
    try {
      await loadVisibleCountryData();
      logDebug(`Loaded ${_gisLayers.length} layer definitions in ${Math.round(performance.now() - t0)} ms.`);

      if (firstCall) {
        const tGui = performance.now();
        initGui(firstCall); // Only need to do this at startup
        logDebug(`initGui: ${Math.round(performance.now() - tGui)} ms`);
      }

      const t2 = performance.now();
      await fetchFeatures();
      logDebug(`fetchFeatures: ${Math.round(performance.now() - t2)} ms`);

      $('#gis-layers-refresh').removeClass('fa-spin').css({ cursor: 'pointer' });
      logDebug('Initialized.');
    } catch (err) {
      logError(err);
    }
  }
  init();

  /**
   * Enhances OpenLayers SVG renderer to support path-following text labels on line features.
   *
   * After calling this function, styles can support:
   *   - pathLabel: {String} text drawn along the path
   *   - pathLabelXOffset: {String} start offset, px or %, default "50%"
   *   - pathLabelYOffset: {Number} vertical offset from the path
   *   - pathLabelCurve: {String} smooth path text (empty for none)
   *   - pathLabelReadable: {String} reverse direction if needed for readability
   *   - All standard label/text style values (color, font, outline, etc.)
   *
   * Internally:
   *   - Adds `pathText` for text-on-path SVG creation
   *   - Overrides `setStyle` to support path label styling and outline/halo
   *   - Overrides `drawGeometry` and `eraseGeometry` to clean up text paths
   *
   * Call once during startup before rendering vector layers with path labels.
   *
   * @returns {void}
   * @copyright Jean-Marc Viglino, 2015 (CeCILL-B / Beerware License)
   * @see http://www.cecill.info/
   * @see http://en.wikipedia.org/wiki/Beerware
   */
  function installPathFollowingLabels() {
    /**
     * Removes a child element with the specified id from a DOM node.
     *
     * Handles both standard and older browser DOM APIs.
     *
     * @param {Node} node - The parent DOM node.
     * @param {string} id - The id of the child element to remove.
     * @returns {void}
     */
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

    /**
     * Creates a gentle, consistent curve for smooth text flow without direction changes
     */
    function createConsistentCurve(points, curveIntensity) {
      // Clamp curveIntensity for sanity
      curveIntensity = Math.max(0, Math.min(0.04, curveIntensity || 0.012));
      if (points.length < 2) return 'M ' + points[0].x + ' ' + points[0].y;
      if (points.length === 2) {
        return 'M ' + points[0].x + ' ' + points[0].y + ' L ' + points[1].x + ' ' + points[1].y;
      }
      // For longer paths
      var path = 'M ' + points[0].x + ' ' + points[0].y;
      for (var i = 1; i < points.length; i++) {
        var prev = points[i - 1];
        var curr = points[i];
        var segLen = Math.sqrt(Math.pow(curr.x - prev.x, 2) + Math.pow(curr.y - prev.y, 2));
        if (segLen < 5) {
          path += ' L ' + curr.x + ' ' + curr.y;
          continue;
        }
        var perpX = -(curr.y - prev.y) / segLen;
        var perpY = +(curr.x - prev.x) / segLen;
        var offsetMag = Math.min(segLen * curveIntensity, 8); // MAX 8px offset per segment
        var controlX = (prev.x + curr.x) / 2 + perpX * offsetMag;
        var controlY = (prev.y + curr.y) / 2 + perpY * offsetMag;
        path += ' Q ' + controlX + ' ' + controlY + ' ' + curr.x + ' ' + curr.y;
      }
      return path;
    }

    var setStyle = OpenLayers.Renderer.SVG.prototype.setStyle;
    OpenLayers.Renderer.SVG.LABEL_STARTOFFSET = { l: '0%', r: '100%', m: '50%' };

    /**
     * Renders text as an SVG textPath following a geometry path.
     *
     * Applies OpenLayers/extra path label style options (see installPathFollowingLabels).
     *
     * @param {SVGElement} node - The SVG node representing the feature.
     * @param {Object} style - Style object.
     * @param {string} suffix - Suffix for unique element IDs.
     * @returns {void}
     */
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

      /**
       * Parses a path string into an array of x/y points, optionally reversing for readability.
       *
       * @param {string} pathStr - The path string (comma-separated numbers).
       * @param {boolean|string} readeable - If true, reverse the point order (for text readability).
       * @returns {Array<{x: number, y: number}>} Array of point objects.
       */
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

        // Use consistent curve generation that prevents text splitting
        var curveIntensity = parseFloat(style.pathLabelCurve) || 0.012;
        path.setAttribute('d', createConsistentCurve(pts, curveIntensity));
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

      textPath.textContent = style.pathLabel;
      label.appendChild(textPath);

      removeChildById(this.textRoot, node._featureId + '_' + suffix);
      this.textRoot.appendChild(label);
    };

    /**
     * Sets style attributes on an SVG node, adding support for text labels following paths.
     *
     * If the geometry is a line and the style includes path label options,
     * draws the label (and optional outline/halo) along the path.
     *
     * @param {SVGElement} node - The SVG node.
     * @param {Object} style - Style object, can include path label options.
     * @param {Object} [options] - Additional options (isFilled, isStroked, etc).
     * @returns {SVGElement} The styled SVG node.
     */
    OpenLayers.Renderer.SVG.prototype.setStyle = function (node, style, options) {
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
      } else setStyle.apply(this, arguments);
      return node;
    };

    var drawGeometry = OpenLayers.Renderer.SVG.prototype.drawGeometry;

    /**
     * Draws a geometry, removing textPaths if geometry was not fully rendered.
     *
     * @param {OpenLayers.Geometry} geometry - Geometry to render.
     * @param {Object} style - Style options.
     * @param {string} id - Feature ID.
     * @returns {boolean|null} True if geometry is drawn, null if incomplete, false otherwise.
     */
    OpenLayers.Renderer.SVG.prototype.drawGeometry = function (geometry, style, id) {
      var rendered = drawGeometry.apply(this, arguments);
      if (rendered === false) {
        removeChildById(this.textRoot, id + '_txtpath');
        removeChildById(this.textRoot, id + '_txtpath0');
      }
      return rendered;
    };

    var eraseGeometry = OpenLayers.Renderer.SVG.prototype.eraseGeometry;

    /**
     * Erases geometry from the renderer and removes associated textPath labels from the DOM.
     *
     * @param {OpenLayers.Geometry} geometry - Geometry to erase.
     * @param {string} featureId - Feature ID.
     * @returns {void}
     */
    OpenLayers.Renderer.SVG.prototype.eraseGeometry = function (geometry, featureId) {
      eraseGeometry.apply(this, arguments);
      removeChildById(this.textRoot, featureId + '_txtpath');
      removeChildById(this.textRoot, featureId + '_txtpath0');
    };
  }
})();
