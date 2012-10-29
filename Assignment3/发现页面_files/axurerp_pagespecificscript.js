for(var i = 0; i < 142; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelVisibility('u131','hidden','none',500);

	SetPanelVisibility('u134','hidden','none',500);

}

});
document.getElementById('u122_img').tabIndex = 0;

u122.style.cursor = 'pointer';
$axure.eventManager.click('u122', function(e) {

if (true) {

    self.location.href="resources/reload.html#" + encodeURI($axure.globalVariableProvider.getLinkUrl($axure.pageData.url));

}
});

$axure.eventManager.mouseover('u122', function(e) {
if (!IsTrueMouseOver('u122',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u122', function(e) {
if (!IsTrueMouseOut('u122',e)) return;
if (true) {

	SetPanelState('u108', 'pd0u108','none','',500,'none','',500);

}
});
document.getElementById('u132_img').tabIndex = 0;

u132.style.cursor = 'pointer';
$axure.eventManager.click('u132', function(e) {

if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
});
u130.tabIndex = 0;

u130.style.cursor = 'pointer';
$axure.eventManager.click('u130', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u99'] = 'center';gv_vAlignTable['u110'] = 'center';document.getElementById('u135_img').tabIndex = 0;

u135.style.cursor = 'pointer';
$axure.eventManager.click('u135', function(e) {

if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
});
document.getElementById('u42_img').tabIndex = 0;

u42.style.cursor = 'pointer';
$axure.eventManager.click('u42', function(e) {

if (true) {

SetGlobalVariableValue('login', '1');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u55'] = 'center';gv_vAlignTable['u5'] = 'center';
$axure.eventManager.mouseover('u105', function(e) {
if (!IsTrueMouseOver('u105',e)) return;
if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u105', function(e) {
if (!IsTrueMouseOut('u105',e)) return;
if (true) {

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

}
});
gv_vAlignTable['u105'] = 'top';gv_vAlignTable['u27'] = 'center';gv_vAlignTable['u138'] = 'top';document.getElementById('u52_img').tabIndex = 0;

u52.style.cursor = 'pointer';
$axure.eventManager.click('u52', function(e) {

if (true) {

}
});
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u65'] = 'center';
$axure.eventManager.mouseover('u120', function(e) {
if (!IsTrueMouseOver('u120',e)) return;
if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u120', function(e) {
if (!IsTrueMouseOut('u120',e)) return;
if (true) {

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

}
});
gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u37'] = 'center';document.getElementById('u62_img').tabIndex = 0;

u62.style.cursor = 'pointer';
$axure.eventManager.click('u62', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u21_img').tabIndex = 0;

u21.style.cursor = 'pointer';
$axure.eventManager.click('u21', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}
});
gv_vAlignTable['u133'] = 'center';gv_vAlignTable['u7'] = 'center';gv_vAlignTable['u89'] = 'center';gv_vAlignTable['u39'] = 'center';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u31'] = 'center';
$axure.eventManager.mouseover('u112', function(e) {
if (!IsTrueMouseOver('u112',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u112', function(e) {
if (!IsTrueMouseOut('u112',e)) return;
if (true) {

	SetPanelState('u108', 'pd0u108','none','',500,'none','',500);

}
});
gv_vAlignTable['u112'] = 'top';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u16'] = 'center';gv_vAlignTable['u125'] = 'center';document.getElementById('u54_img').tabIndex = 0;

u54.style.cursor = 'pointer';
$axure.eventManager.click('u54', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u118', function(e) {
if (!IsTrueMouseOver('u118',e)) return;
if (true) {

	SetPanelState('u114', 'pd1u114','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u118', function(e) {
if (!IsTrueMouseOut('u118',e)) return;
if (true) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}
});
gv_vAlignTable['u118'] = 'top';gv_vAlignTable['u67'] = 'center';document.getElementById('u26_img').tabIndex = 0;

u26.style.cursor = 'pointer';
$axure.eventManager.click('u26', function(e) {

if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
});
u119.tabIndex = 0;

u119.style.cursor = 'pointer';
$axure.eventManager.click('u119', function(e) {

if (true) {

SetGlobalVariableValue('login', '0');

	SetPanelVisibility('u134','','none',500);

	SetPanelVisibility('u131','','none',500);

	SetPanelVisibility('u114','hidden','none',500);

}
});

$axure.eventManager.mouseover('u119', function(e) {
if (!IsTrueMouseOver('u119',e)) return;
if (true) {

	SetPanelState('u114', 'pd1u114','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u119', function(e) {
if (!IsTrueMouseOut('u119',e)) return;
if (true) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}
});
gv_vAlignTable['u119'] = 'top';gv_vAlignTable['u51'] = 'center';gv_vAlignTable['u101'] = 'center';document.getElementById('u100_img').tabIndex = 0;

u100.style.cursor = 'pointer';
$axure.eventManager.click('u100', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});
gv_vAlignTable['u23'] = 'top';gv_vAlignTable['u75'] = 'center';gv_vAlignTable['u95'] = 'center';gv_vAlignTable['u61'] = 'center';gv_vAlignTable['u116'] = 'center';document.getElementById('u88_img').tabIndex = 0;

u88.style.cursor = 'pointer';
$axure.eventManager.click('u88', function(e) {

if (true) {

}
});
gv_vAlignTable['u33'] = 'center';document.getElementById('u92_img').tabIndex = 0;

u92.style.cursor = 'pointer';
$axure.eventManager.click('u92', function(e) {

if (true) {

}
});
document.getElementById('u46_img').tabIndex = 0;

u46.style.cursor = 'pointer';
$axure.eventManager.click('u46', function(e) {

if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
});
gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u79'] = 'center';gv_vAlignTable['u127'] = 'center';gv_vAlignTable['u43'] = 'center';document.getElementById('u56_img').tabIndex = 0;

u56.style.cursor = 'pointer';
$axure.eventManager.click('u56', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u106', function(e) {
if (!IsTrueMouseOver('u106',e)) return;
if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u106', function(e) {
if (!IsTrueMouseOut('u106',e)) return;
if (true) {

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

}
});
gv_vAlignTable['u106'] = 'top';u139.tabIndex = 0;

u139.style.cursor = 'pointer';
$axure.eventManager.click('u139', function(e) {

if (true) {

	SetPanelState('u137', 'pd1u137','none','',500,'none','',500);

}
});
gv_vAlignTable['u139'] = 'top';gv_vAlignTable['u87'] = 'center';gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u104'] = 'center';gv_vAlignTable['u121'] = 'center';gv_vAlignTable['u97'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u123'] = 'center';document.getElementById('u76_img').tabIndex = 0;

u76.style.cursor = 'pointer';
$axure.eventManager.click('u76', function(e) {

if (true) {

	SetPanelState('u14', 'pd1u14','none','',500,'none','',500);

}
});
gv_vAlignTable['u81'] = 'center';document.getElementById('u128_img').tabIndex = 0;

u128.style.cursor = 'pointer';
$axure.eventManager.click('u128', function(e) {

if (true) {

SetGlobalVariableValue('check', '0');

	self.location.href=$axure.globalVariableProvider.getLinkUrl('搜索页面.html');

	SetPanelState('u137', 'pd0u137','none','',500,'none','',500);

}
});
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u91'] = 'center';document.getElementById('u70_img').tabIndex = 0;

u70.style.cursor = 'pointer';
$axure.eventManager.click('u70', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页.html');

}
});

$axure.eventManager.mouseover('u117', function(e) {
if (!IsTrueMouseOver('u117',e)) return;
if (true) {

	SetPanelState('u114', 'pd1u114','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u117', function(e) {
if (!IsTrueMouseOut('u117',e)) return;
if (true) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}
});
gv_vAlignTable['u117'] = 'top';gv_vAlignTable['u13'] = 'center';
$axure.eventManager.mouseover('u113', function(e) {
if (!IsTrueMouseOver('u113',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u113', function(e) {
if (!IsTrueMouseOut('u113',e)) return;
if (true) {

	SetPanelState('u108', 'pd0u108','none','',500,'none','',500);

}
});
gv_vAlignTable['u113'] = 'top';gv_vAlignTable['u29'] = 'center';gv_vAlignTable['u129'] = 'center';document.getElementById('u86_img').tabIndex = 0;

u86.style.cursor = 'pointer';
$axure.eventManager.click('u86', function(e) {

if (true) {

}
});
document.getElementById('u58_img').tabIndex = 0;

u58.style.cursor = 'pointer';
$axure.eventManager.click('u58', function(e) {

if (true) {

}
});

$axure.eventManager.mouseover('u111', function(e) {
if (!IsTrueMouseOver('u111',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u111', function(e) {
if (!IsTrueMouseOut('u111',e)) return;
if (true) {

	SetPanelState('u108', 'pd0u108','none','',500,'none','',500);

}
});
gv_vAlignTable['u111'] = 'top';gv_vAlignTable['u83'] = 'center';gv_vAlignTable['u3'] = 'center';document.getElementById('u96_img').tabIndex = 0;

u96.style.cursor = 'pointer';
$axure.eventManager.click('u96', function(e) {

if (true) {

	SetPanelVisibility('u14','hidden','none',500);

}
});
gv_vAlignTable['u49'] = 'center';document.getElementById('u124_img').tabIndex = 0;

u124.style.cursor = 'pointer';
$axure.eventManager.click('u124', function(e) {

if ((GetGlobalVariableValue('login')) != ('1')) {

	SetPanelState('u14', 'pd2u14','none','',500,'none','',500);

}

if ((GetGlobalVariableValue('login')) == ('1')) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('学品空间.html');

}
});

$axure.eventManager.mouseover('u124', function(e) {
if (!IsTrueMouseOver('u124',e)) return;
if ((GetGlobalVariableValue('login')) == ('1')) {

	SetPanelState('u114', 'pd1u114','none','',500,'swing','down',500);

}
});

$axure.eventManager.mouseout('u124', function(e) {
if (!IsTrueMouseOut('u124',e)) return;
if (true) {

	SetPanelState('u114', 'pd0u114','none','',500,'none','',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u93'] = 'center';gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u59'] = 'center';document.getElementById('u90_img').tabIndex = 0;

u90.style.cursor = 'pointer';
$axure.eventManager.click('u90', function(e) {

if (true) {

}
});
gv_vAlignTable['u18'] = 'center';gv_vAlignTable['u45'] = 'center';gv_vAlignTable['u77'] = 'center';gv_vAlignTable['u22'] = 'center';
$axure.eventManager.mouseover('u107', function(e) {
if (!IsTrueMouseOver('u107',e)) return;
if (true) {

	SetPanelState('u102', 'pd1u102','none','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u107', function(e) {
if (!IsTrueMouseOut('u107',e)) return;
if (true) {

	SetPanelState('u102', 'pd0u102','none','',500,'none','',500);

}
});
gv_vAlignTable['u107'] = 'top';gv_vAlignTable['u35'] = 'center';gv_vAlignTable['u136'] = 'center';document.getElementById('u28_img').tabIndex = 0;

u28.style.cursor = 'pointer';
$axure.eventManager.click('u28', function(e) {

if (true) {

	SetPanelState('u14', 'pd0u14','none','',500,'none','',500);

}
});
