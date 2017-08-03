var map = null;
var rectangle = null;
var polyline = null;
var btnSelectStart = $('#select-start');
var btnSelectEnd = $('#select-end');
var btnDrawRoad = $('#draw-road');
var btnAddRoad = $('#add-road');
var clickType = 0;
var currentRoad = null;
function initMap() {
    map = new BMap.Map(document.getElementById('map'), {
        enableWheelZoom: true
    });
    map.centerAndZoom('太原', 13);


    $('#keyword').on('keyup', function (e) {
        if (e.keyCode !== 13) {
            return;
        }
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        local.search($('#keyword').val());
    });

    function showInfo(e){
        var value = e.point.lng + "," + e.point.lat;
        if (clickType == 1) {
            btnSelectStart.next().val(value);
        } else if (clickType == 2) {
            btnSelectEnd.next().val(value);
        } else {
            $('#map-point').text(value);
        }
		
	}
	map.addEventListener("click", showInfo);
}

function drawBox () {
    var box = config.global.boundingBox;
    if (!box) {
        return;
    }
    var pStart = new BMap.Point(box[0][0], box[0][1]);
    var pEnd = new BMap.Point(box[1][0], box[1][1]);
    if (rectangle != null) {
        map.removeOverlay(rectangle);
    }
	rectangle = new BMap.Polygon([
		new BMap.Point(pStart.lng,pStart.lat),
		new BMap.Point(pEnd.lng,pStart.lat),
		new BMap.Point(pEnd.lng,pEnd.lat),
		new BMap.Point(pStart.lng,pEnd.lat)
    ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5, fillOpacity: 0.1}); 
    map.addOverlay(rectangle);
    map.setViewport([pStart, pEnd]);
}
function transformPixel (pixel, w, h, rotate) {
    if (rotate == 0) {
        return pixel;
    }
    if (rotate == 90) {
        return [
            pixel[1],
            h - pixel[0]
        ];
    }
    if (rotate == 180) {
        return [
            pixel[0],
            h - pixel[1]
        ];
    }

    if (rotate == 270) {
        return [
            w - pixel[1],
            pixel[0]
        ];
    }
}
function drawRoad(road, start, end) {
    var bps = [];
    var globalConfig = config.global;
    
    for(var i = 0; i < road.length; ++i) {
        var points = road[i].points;
        console.log(points);
        var pixels = road[i].pixels;
        for (var j = 0; j < points.length; ++j) {
            console.log(points[j])
            bps.push(new BMap.Point(points[j][0], points[j][1]));
        }
        for (var k = 0; k < pixels.length; ++k) {
            road[i].pixels[k] = transformPixel(pixels[k], globalConfig.width, globalConfig.height, globalConfig.rotate || 0);
        }
    }
    if (polyline != null) {
        map.removeOverlay(polyline);
    }
    console.log(bps);
    polyline = new BMap.Polyline(bps, {strokeColor:"green", strokeWeight:4, strokeOpacity:0.5}); 
    map.addOverlay(polyline);

    var startArr = start.split(',');
    var endArr = end.split(',');
    currentRoad = {
        "type": "Road",
        "label": "道路",
        "renderOptions": {
            "lineWidth": 8
        },
        "path": {
            start: [parseFloat(startArr[0]), parseFloat(startArr[1])],
            end: [parseFloat(endArr[0]), parseFloat(endArr[1])],
            steps: road,
        }
    };
}

function initEvent() {
    $('#preview-form').attr('action', api + '/guidingscreen/screen/preview');
    $('#preview').on('click', function () {
        $('#preview-form input[name=configData]').val(JSON.stringify(window.config));
        $('#preview-form').submit();
        //$('#preview-image').attr('src', '');
        // $('#preview-image').attr('src', encodeURIComponent(api + '/guidingscreen/screen/preview?alwaysImage=1&configData=' + JSON.stringify(window.config)));
    });

    $('#release').on('click', function () {
        $.ajax({
            url: api + '/guidingscreen/screen/release?releaseTag=-&id=' + detail.id,
            dataType: 'jsonp',
            success: function () {
                alert('ok');
            }
        })
    });

    $('#draw-box').on('click', function () {
        drawBox();
    });

    btnSelectStart.on('click', function () {
        clickType = 1;
    });

    btnSelectEnd.on('click', function () {
        clickType = 2;
    });

    btnDrawRoad.on('click', function () {
        clickType = 0;
        var globalConfig = config.global;
        var start = btnSelectStart.next().val();
        var end = btnSelectEnd.next().val();
        var rotate = globalConfig.rotate || 0;
        var width = globalConfig.width;
        var height = globalConfig.height;
        if (rotate == 90 || rotate == 270) {
            width = globalConfig.height;
            height = globalConfig.width;
        }
        $.ajax({
            url: api + '/guidingscreen/util/route',
            dataType: 'jsonp',
            data: {
                origin: start,
                destination: end,
                leftBottomPoint: globalConfig.boundingBox[0].join(','),
                topRightPoint: globalConfig.boundingBox[1].join(','),
                width: width,
                height: height,
            },
            success: (rsp) => {
                drawRoad(rsp.data.route, start, end);
            }
        })
    });

    btnAddRoad.on('click', function () {
        if (!currentRoad) {
            return;
        }
        config.components.push(currentRoad);
        document.getElementById('textarea').value = JSON.stringify(config, null, 4);
        document.getElementById('textarea2canvas').click();
    });
}
function init () {
    initMap();
    initEvent();
}

init();