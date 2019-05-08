
// 1 打开相机

let configObject ={};
if (appName ==='taobao'){
    configObject ={
        "isModelTracking";true
    }
}
Tida.AR.scanOpenCamera(configObject,function () {

})

// 2 初始marker
Tida.AR.initMarkerTracker({
        tbMarkerRes: {
            'url':'https://gw.alicdn.com/bao/uploaded/TB1nRh2bBUSMeJjSszbXXberFXa.zip',
            'md5':'gywx'},
        'markers':[{'id':'1'}]
    },
    markers: [
    {
        id: "logo1",
        markerIconUrl: "https://github.com/BBoy-Long/ARDemo/blob/master/gywxMarker.png",
        filter: ""
    }
]
}, function(result) {

})

// 3 开始扫描
Tida.AR.startScan( {}, function(result) {
    console.log("AR.startScan success: " , result);
})

// 4 开始marker追踪
Tida.AR.startMarkerTracking({}, function(result) {
    console.log("AR.startMarkerTracking success: " , result);

})

// 5 追踪状态
document.addEventListener('AR.updateMarkerTrackingState', function(result){
    //此处处理result中返回的数据

})

// 6 停止marker追踪
Tida.AR.stopMarkerTracking({}, function(result) {
    console.log("AR.stopMarkerTracking success: " , result);

})

// 7 停止扫描
Tida.AR.startScan( {}, function(result) {
    console.log("AR.startScan success: " , result);
})

// 8 关闭摄像头
Tida.AR.scanCloseCamera( {}, function(result) {
    console.log("AR.scanCloseCamera success: " , result);
})


