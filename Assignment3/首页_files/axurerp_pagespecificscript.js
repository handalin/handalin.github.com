for(var i = 0; i < 214; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u203','hidden','none',500);

	SetPanelVisibility('u206','hidden','none',500);

}

if (true) {

SetGlobalVariableValue('good1', '10');

SetGlobalVariableValue('good2', '10');

SetGlobalVariableValue('good3', '10');

SetGlobalVariableValue('good4', '10');

SetGlobalVariableValue('good5', '10');

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u203','hidden','none',500);

	SetPanelVisibility('u206','hidden','none',500);

}

});

widgetIdToPanelStateChangeFunction['u2'] = function() {
var e = windowEvent;

if ((GetPanelState('u2')) == ('pd0u2')) {
function waitu22c2502c784046dd87e60d0549db3b011() {

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);
}
setTimeout(waitu22c2502c784046dd87e60d0549db3b011, 3000);

}

if (((GetPanelState('u2')) == ('pd1u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu3af393dccf4c47458f31f03779ef6f651() {

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);
}
setTimeout(waitu3af393dccf4c47458f31f03779ef6f651, 3000);

}

if (((GetPanelState('u2')) == ('pd2u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu05fd22a1acb1480598b4887c5f88f3401() {

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);
}
setTimeout(waitu05fd22a1acb1480598b4887c5f88f3401, 3000);

}

if (((GetPanelState('u2')) == ('pd3u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu5e6298b4e9d846b2a91cd732ddef52b51() {

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);
}
setTimeout(waitu5e6298b4e9d846b2a91cd732ddef52b51, 3000);

}

if (((GetPanelState('u2')) == ('pd4u2')) && ((GetGlobalVariableValue('ismoving')) == ('1'))) {
function waitu294a206c3ef74f6f9bc8bdd4cbc14ae51() {

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);
}
setTimeout(waitu294a206c3ef74f6f9bc8bdd4cbc14ae51, 3000);

}

}
gv_vAlignTable['u21'] = 'center';
$axure.eventManager.mouseover('u32', function(e) {
if (!IsTrueMouseOver('u32',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u32', function(e) {
if (!IsTrueMouseOut('u32',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u165'] = 'center';document.getElementById('u207_img').tabIndex = 0;

u207.style.cursor = 'pointer';
$axure.eventManager.click('u207', function(e) {

if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

}
});
document.getElementById('u130_img').tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

}
});
document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

SetGlobalVariableValue('good', '3');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u7', function(e) {
if (!IsTrueMouseOver('u7',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u7', function(e) {
if (!IsTrueMouseOut('u7',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u153'] = 'center';gv_vAlignTable['u17'] = 'center';gv_vAlignTable['u131'] = 'center';gv_vAlignTable['u135'] = 'center';gv_vAlignTable['u151'] = 'center';
$axure.eventManager.mouseover('u42', function(e) {
if (!IsTrueMouseOver('u42',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u42', function(e) {
if (!IsTrueMouseOut('u42',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u159'] = 'center';gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u101'] = 'center';
$axure.eventManager.mouseover('u14', function(e) {
if (!IsTrueMouseOver('u14',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u14', function(e) {
if (!IsTrueMouseOut('u14',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u48', function(e) {
if (!IsTrueMouseOver('u48',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u48', function(e) {
if (!IsTrueMouseOut('u48',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u105'] = 'center';gv_vAlignTable['u27'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u52', function(e) {
if (!IsTrueMouseOver('u52',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u52', function(e) {
if (!IsTrueMouseOut('u52',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u20', function(e) {
if (!IsTrueMouseOver('u20',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u20', function(e) {
if (!IsTrueMouseOut('u20',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u65'] = 'center';
$axure.eventManager.mouseover('u189', function(e) {
if (!IsTrueMouseOver('u189',e)) return;
if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u189', function(e) {
if (!IsTrueMouseOut('u189',e)) return;
if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

}
});
gv_vAlignTable['u189'] = 'top';
$axure.eventManager.mouseover('u24', function(e) {
if (!IsTrueMouseOver('u24',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u24', function(e) {
if (!IsTrueMouseOut('u24',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u163'] = 'center';gv_vAlignTable['u205'] = 'center';
$axure.eventManager.mouseover('u16', function(e) {
if (!IsTrueMouseOver('u16',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u16', function(e) {
if (!IsTrueMouseOut('u16',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u37'] = 'center';
$axure.eventManager.mouseover('u62', function(e) {
if (!IsTrueMouseOver('u62',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u62', function(e) {
if (!IsTrueMouseOut('u62',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

SetGlobalVariableValue('good', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u11', function(e) {
if (!IsTrueMouseOver('u11',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u11', function(e) {
if (!IsTrueMouseOut('u11',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u133'] = 'center';document.getElementById('u200_img').tabIndex = 0;

u200.style.cursor = 'pointer';
$axure.eventManager.click('u200', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u209', 'pd0u209','none','',500,'none','',500);

}
});

$axure.eventManager.mouseover('u34', function(e) {
if (!IsTrueMouseOver('u34',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u34', function(e) {
if (!IsTrueMouseOut('u34',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u208'] = 'center';gv_vAlignTable['u47'] = 'center';
$axure.eventManager.mouseover('u184', function(e) {
if (!IsTrueMouseOver('u184',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u184', function(e) {
if (!IsTrueMouseOut('u184',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

}
});
gv_vAlignTable['u184'] = 'top';gv_vAlignTable['u103'] = 'center';gv_vAlignTable['u149'] = 'center';
$axure.eventManager.mouseover('u44', function(e) {
if (!IsTrueMouseOver('u44',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u44', function(e) {
if (!IsTrueMouseOut('u44',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u179', function(e) {
if (!IsTrueMouseOver('u179',e)) return;
if (true) {

	SetPanelState('u174', 'pd1u174','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u179', function(e) {
if (!IsTrueMouseOut('u179',e)) return;
if (true) {

	SetPanelState('u174', 'pd0u174','none','',500,'none','',500);

}
});
gv_vAlignTable['u179'] = 'top';gv_vAlignTable['u57'] = 'center';u191.tabIndex = 0;

u191.style.cursor = 'pointer';
$axure.eventManager.click('u191', function(e) {

if (true) {

SetGlobalVariableValue('login', '0');

	SetPanelVisibility('u206','','none',500);

	SetPanelVisibility('u203','','none',500);

	SetPanelVisibility('u186','hidden','none',500);

}
});

$axure.eventManager.mouseover('u191', function(e) {
if (!IsTrueMouseOver('u191',e)) return;
if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u191', function(e) {
if (!IsTrueMouseOut('u191',e)) return;
if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

}
});
gv_vAlignTable['u191'] = 'top';gv_vAlignTable['u161'] = 'center';gv_vAlignTable['u6'] = 'center';document.getElementById('u168_img').tabIndex = 0;

u168.style.cursor = 'pointer';
$axure.eventManager.click('u168', function(e) {

if (true) {

	SetPanelVisibility('u86','hidden','none',500);

}
});
document.getElementById('u172_img').tabIndex = 0;

u172.style.cursor = 'pointer';
$axure.eventManager.click('u172', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u158_img').tabIndex = 0;

u158.style.cursor = 'pointer';
$axure.eventManager.click('u158', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u54', function(e) {
if (!IsTrueMouseOver('u54',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd1u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u54', function(e) {
if (!IsTrueMouseOut('u54',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u118_img').tabIndex = 0;

u118.style.cursor = 'pointer';
$axure.eventManager.click('u118', function(e) {

if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

}
});
gv_vAlignTable['u197'] = 'center';gv_vAlignTable['u67'] = 'center';
$axure.eventManager.mouseover('u38', function(e) {
if (!IsTrueMouseOver('u38',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u38', function(e) {
if (!IsTrueMouseOut('u38',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u176'] = 'center';
$axure.eventManager.mouseover('u26', function(e) {
if (!IsTrueMouseOver('u26',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u26', function(e) {
if (!IsTrueMouseOut('u26',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u119'] = 'center';gv_vAlignTable['u85'] = 'center';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u182'] = 'center';gv_vAlignTable['u10'] = 'center';document.getElementById('u204_img').tabIndex = 0;

u204.style.cursor = 'pointer';
$axure.eventManager.click('u204', function(e) {

if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

}
});
document.getElementById('u100_img').tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	SetPanelState('u86', 'pd0u86','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'center';gv_vAlignTable['u31'] = 'center';document.getElementById('u82_img').tabIndex = 0;

u82.style.cursor = 'pointer';
$axure.eventManager.click('u82', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u36', function(e) {
if (!IsTrueMouseOver('u36',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u36', function(e) {
if (!IsTrueMouseOut('u36',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u95'] = 'top';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u195'] = 'center';document.getElementById('u114_img').tabIndex = 0;

u114.style.cursor = 'pointer';
$axure.eventManager.click('u114', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
gv_vAlignTable['u33'] = 'center';document.getElementById('u160_img').tabIndex = 0;

u160.style.cursor = 'pointer';
$axure.eventManager.click('u160', function(e) {

if (true) {

}
});
gv_vAlignTable['u92'] = 'center';
$axure.eventManager.mouseover('u46', function(e) {
if (!IsTrueMouseOver('u46',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u46', function(e) {
if (!IsTrueMouseOut('u46',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u183', function(e) {
if (!IsTrueMouseOver('u183',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u183', function(e) {
if (!IsTrueMouseOut('u183',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

}
});
gv_vAlignTable['u183'] = 'top';u202.tabIndex = 0;

u202.style.cursor = 'pointer';
$axure.eventManager.click('u202', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});
document.getElementById('u126_img').tabIndex = 0;

u126.style.cursor = 'pointer';
$axure.eventManager.click('u126', function(e) {

if (true) {

}
});
gv_vAlignTable['u71'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

SetGlobalVariableValue('good', '4');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u5', function(e) {
if (!IsTrueMouseOver('u5',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u5', function(e) {
if (!IsTrueMouseOut('u5',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u30', function(e) {
if (!IsTrueMouseOver('u30',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u30', function(e) {
if (!IsTrueMouseOut('u30',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u43'] = 'center';gv_vAlignTable['u169'] = 'center';
$axure.eventManager.mouseover('u56', function(e) {
if (!IsTrueMouseOver('u56',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd2u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u56', function(e) {
if (!IsTrueMouseOut('u56',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u142_img').tabIndex = 0;

u142.style.cursor = 'pointer';
$axure.eventManager.click('u142', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u40', function(e) {
if (!IsTrueMouseOver('u40',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u40', function(e) {
if (!IsTrueMouseOut('u40',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u139'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u193'] = 'center';
$axure.eventManager.mouseover('u192', function(e) {
if (!IsTrueMouseOver('u192',e)) return;
if (true) {

	SetPanelState('u174', 'pd1u174','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u192', function(e) {
if (!IsTrueMouseOut('u192',e)) return;
if (true) {

	SetPanelState('u174', 'pd0u174','none','',500,'none','',500);

}
});
u211.tabIndex = 0;

u211.style.cursor = 'pointer';
$axure.eventManager.click('u211', function(e) {

if (true) {

	SetPanelState('u209', 'pd1u209','none','',500,'none','',500);

}
});
gv_vAlignTable['u211'] = 'top';document.getElementById('u164_img').tabIndex = 0;

u164.style.cursor = 'pointer';
$axure.eventManager.click('u164', function(e) {

if (true) {

}
});
gv_vAlignTable['u109'] = 'center';document.getElementById('u84_img').tabIndex = 0;

u84.style.cursor = 'pointer';
$axure.eventManager.click('u84', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u50', function(e) {
if (!IsTrueMouseOver('u50',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u50', function(e) {
if (!IsTrueMouseOut('u50',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u125'] = 'center';gv_vAlignTable['u97'] = 'top';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u123'] = 'center';document.getElementById('u134_img').tabIndex = 0;

u134.style.cursor = 'pointer';
$axure.eventManager.click('u134', function(e) {

if (true) {

	SetPanelVisibility('u86','hidden','none',500);

}
});
document.getElementById('u148_img').tabIndex = 0;

u148.style.cursor = 'pointer';
$axure.eventManager.click('u148', function(e) {

if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

}
});
gv_vAlignTable['u81'] = 'center';gv_vAlignTable['u41'] = 'center';
$axure.eventManager.mouseover('u177', function(e) {
if (!IsTrueMouseOver('u177',e)) return;
if (true) {

	SetPanelState('u174', 'pd1u174','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u177', function(e) {
if (!IsTrueMouseOut('u177',e)) return;
if (true) {

	SetPanelState('u174', 'pd0u174','none','',500,'none','',500);

}
});
gv_vAlignTable['u177'] = 'top';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

}
});
gv_vAlignTable['u94'] = 'center';
$axure.eventManager.mouseover('u60', function(e) {
if (!IsTrueMouseOver('u60',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd4u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u60', function(e) {
if (!IsTrueMouseOut('u60',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});

$axure.eventManager.mouseover('u190', function(e) {
if (!IsTrueMouseOver('u190',e)) return;
if (true) {

	SetPanelState('u186', 'pd1u186','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u190', function(e) {
if (!IsTrueMouseOut('u190',e)) return;
if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

}
});
gv_vAlignTable['u190'] = 'top';
$axure.eventManager.mouseover('u185', function(e) {
if (!IsTrueMouseOver('u185',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u185', function(e) {
if (!IsTrueMouseOut('u185',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

}
});
gv_vAlignTable['u185'] = 'top';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

SetGlobalVariableValue('good', '2');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u9', function(e) {
if (!IsTrueMouseOver('u9',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u9', function(e) {
if (!IsTrueMouseOut('u9',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u147'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u188'] = 'center';document.getElementById('u162_img').tabIndex = 0;

u162.style.cursor = 'pointer';
$axure.eventManager.click('u162', function(e) {

if (true) {

}
});
gv_vAlignTable['u117'] = 'center';gv_vAlignTable['u210'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u111'] = 'center';gv_vAlignTable['u141'] = 'center';gv_vAlignTable['u129'] = 'center';gv_vAlignTable['u143'] = 'center';
$axure.eventManager.mouseover('u58', function(e) {
if (!IsTrueMouseOver('u58',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u58', function(e) {
if (!IsTrueMouseOut('u58',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u173'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u171'] = 'center';document.getElementById('u98_img').tabIndex = 0;

u98.style.cursor = 'pointer';
$axure.eventManager.click('u98', function(e) {

if (true) {

	SetPanelState('u86', 'pd1u86','none','',500,'none','',500);

}
});
gv_vAlignTable['u145'] = 'center';gv_vAlignTable['u83'] = 'center';
$axure.eventManager.mouseover('u178', function(e) {
if (!IsTrueMouseOver('u178',e)) return;
if (true) {

	SetPanelState('u174', 'pd1u174','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u178', function(e) {
if (!IsTrueMouseOut('u178',e)) return;
if (true) {

	SetPanelState('u174', 'pd0u174','none','',500,'none','',500);

}
});
gv_vAlignTable['u178'] = 'top';gv_vAlignTable['u8'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

SetGlobalVariableValue('good', '5');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('商品信息.html');

}
});

$axure.eventManager.mouseover('u3', function(e) {
if (!IsTrueMouseOver('u3',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

}
});

$axure.eventManager.mouseout('u3', function(e) {
if (!IsTrueMouseOut('u3',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u96'] = 'top';document.getElementById('u196_img').tabIndex = 0;

u196.style.cursor = 'pointer';
$axure.eventManager.click('u196', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u86', 'pd2u86','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u196', function(e) {
if (!IsTrueMouseOver('u196',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelState('u186', 'pd1u186','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u196', function(e) {
if (!IsTrueMouseOut('u196',e)) return;
if (true) {

	SetPanelState('u186', 'pd0u186','none','',500,'none','',500);

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u49'] = 'center';gv_vAlignTable['u115'] = 'center';document.getElementById('u80_img').tabIndex = 0;

u80.style.cursor = 'pointer';
$axure.eventManager.click('u80', function(e) {

if (true) {

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u167'] = 'center';gv_vAlignTable['u155'] = 'center';document.getElementById('u93_img').tabIndex = 0;

u93.style.cursor = 'pointer';
$axure.eventManager.click('u93', function(e) {

if (true) {

	SetPanelVisibility('u86','hidden','none',500);

}
});
gv_vAlignTable['u12'] = 'center';gv_vAlignTable['u201'] = 'center';gv_vAlignTable['u199'] = 'center';gv_vAlignTable['u25'] = 'center';gv_vAlignTable['u59'] = 'center';gv_vAlignTable['u137'] = 'center';gv_vAlignTable['u90'] = 'center';
$axure.eventManager.mouseover('u18', function(e) {
if (!IsTrueMouseOver('u18',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u18', function(e) {
if (!IsTrueMouseOut('u18',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u88'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'center';
$axure.eventManager.mouseover('u22', function(e) {
if (!IsTrueMouseOver('u22',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd0u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u22', function(e) {
if (!IsTrueMouseOut('u22',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
gv_vAlignTable['u107'] = 'center';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u69'] = 'center';
$axure.eventManager.mouseover('u28', function(e) {
if (!IsTrueMouseOver('u28',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '0');

	SetPanelState('u2', 'pd3u2','none','',500,'fade','',500);

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u28', function(e) {
if (!IsTrueMouseOut('u28',e)) return;
if (true) {

SetGlobalVariableValue('ismoving', '1');

}
});
document.getElementById('u194_img').tabIndex = 0;

u194.style.cursor = 'pointer';
$axure.eventManager.click('u194', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('发现页面.html');

}
});

$axure.eventManager.mouseover('u194', function(e) {
if (!IsTrueMouseOver('u194',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u194', function(e) {
if (!IsTrueMouseOut('u194',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','none','',500,'none','',500);

}
});
