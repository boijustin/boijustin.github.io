var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (!isMobile.any()) {
    document.getElementById("hero").style.backgroundAttachment = "fixed";
    document.getElementById("wall1").style.backgroundAttachment = "fixed";
    document.getElementById("wall2").style.backgroundAttachment = "fixed";

};



function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 4
    };
    var mapOptions = { center: new google.maps.LatLng(47.518128, -122.148743), zoom: 9 };
    var map = new google.maps.Map(document.getElementById("MapDiv"), mapOptions);
    addButtons(map);
}

function addButtons(map) {
    document.getElementById('btnTerrain').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });
    document.getElementById('btnRoadmap').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    });
    document.getElementById('btnHybrid').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    });
    document.getElementById('btnSatellite').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    });
}

google.maps.event.addDomListener(window, "load", initialize);