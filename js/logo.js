var runAnimation = true;
var openAperture, count = 0;
var tl = 0;

window.onload = init;

function init () {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");
	  
	  openAperture = setInterval(function(){updateIris(ctx)},60);
	  
	  /* then these
	  draw(ctx);
	  stingray(ctx);
	  */
	  
}

    function draw(ctx) {

      var alpha = ctx.globalAlpha;
      var gradient;

      ctx.save();
      ctx.beginPath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(47.4, 66.1);
      ctx.bezierCurveTo(47.4, 70.5, 44.9, 74.4, 41.0, 76.2);
      ctx.bezierCurveTo(39.7, 76.8, 37.6, 77.6, 32.5, 77.6);
      ctx.lineTo(20.5, 77.6);
      ctx.lineTo(20.5, 73.4);
      ctx.lineTo(33.2, 73.4);
      ctx.bezierCurveTo(35.8, 73.4, 37.5, 73.2, 39.5, 72.2);
      ctx.bezierCurveTo(41.5, 71.2, 42.9, 68.7, 42.9, 66.2);
      ctx.bezierCurveTo(42.9, 63.8, 41.6, 60.6, 37.7, 59.5);
      ctx.bezierCurveTo(36.3, 59.1, 34.8, 59.0, 30.6, 59.0);
      ctx.bezierCurveTo(30.2, 59.0, 29.9, 59.0, 29.5, 59.0);
      ctx.bezierCurveTo(22.5, 58.6, 18.8, 53.2, 18.8, 48.1);
      ctx.bezierCurveTo(18.8, 43.6, 21.3, 39.7, 25.3, 37.8);
      ctx.bezierCurveTo(26.6, 37.2, 28.8, 36.5, 33.9, 36.5);
      ctx.lineTo(45.5, 36.5);
      ctx.lineTo(42.8, 40.7);
      ctx.lineTo(33.2, 40.7);
      ctx.bezierCurveTo(30.5, 40.7, 28.8, 40.9, 26.8, 41.9);
      ctx.bezierCurveTo(24.8, 42.9, 23.3, 45.5, 23.3, 48.0);
      ctx.bezierCurveTo(23.3, 50.4, 24.7, 53.6, 28.6, 54.7);
      ctx.bezierCurveTo(29.8, 55.1, 34.2, 55.2, 35.8, 55.2);
      ctx.lineTo(36.8, 55.3);
      ctx.bezierCurveTo(43.8, 55.7, 47.4, 61.0, 47.4, 66.1);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(117.3, 77.2);
      ctx.lineTo(117.3, 36.2);
      ctx.lineTo(112.7, 36.2);
      ctx.lineTo(112.7, 69.0);
      ctx.lineTo(90.6, 36.3);
      ctx.lineTo(84.8, 36.3);
      ctx.lineTo(84.8, 77.2);
      ctx.lineTo(89.4, 77.2);
      ctx.lineTo(89.4, 42.3);
      ctx.lineTo(112.9, 77.2);
      ctx.lineTo(117.3, 77.2);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(47.4, 40.7);
      ctx.lineTo(56.9, 40.7);
      ctx.lineTo(56.9, 77.1);
      ctx.lineTo(61.5, 77.1);
      ctx.lineTo(61.5, 40.7);
      ctx.lineTo(70.6, 40.7);
      ctx.lineTo(70.6, 36.4);
      ctx.lineTo(50.4, 36.4);
      ctx.lineTo(47.4, 40.7);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(74.9, 77.2);
      ctx.lineTo(79.5, 77.2);
      ctx.lineTo(79.5, 36.4);
      ctx.lineTo(74.9, 36.4);
      ctx.lineTo(74.9, 77.2);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(142.2, 77.5);
      ctx.lineTo(142.3, 77.5);
      ctx.bezierCurveTo(152.1, 77.5, 162.8, 70.2, 163.7, 58.0);
      ctx.lineTo(163.7, 57.8);
      ctx.lineTo(135.9, 57.8);
      ctx.lineTo(135.9, 62.0);
      ctx.lineTo(158.2, 62.0);
      ctx.bezierCurveTo(156.6, 67.6, 150.4, 73.3, 142.4, 73.3);
      ctx.lineTo(142.4, 73.3);
      ctx.bezierCurveTo(132.8, 73.3, 125.1, 65.8, 125.0, 56.6);
      ctx.bezierCurveTo(125.0, 47.3, 132.7, 39.7, 142.2, 39.7);
      ctx.bezierCurveTo(148.8, 39.7, 154.0, 43.5, 156.2, 47.3);
      ctx.lineTo(156.2, 47.3);
      ctx.lineTo(161.5, 47.3);
      ctx.lineTo(161.4, 46.9);
      ctx.bezierCurveTo(159.9, 43.2, 153.3, 35.4, 142.2, 35.4);
      ctx.lineTo(142.1, 35.4);
      ctx.bezierCurveTo(128.6, 35.5, 120.4, 46.4, 120.4, 56.6);
      ctx.bezierCurveTo(120.4, 67.9, 130.4, 77.5, 142.2, 77.5);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(240.7, 77.1);
      ctx.lineTo(245.3, 77.1);
      ctx.lineTo(245.3, 62.8);
      ctx.lineTo(259.5, 35.7);
      ctx.lineTo(254.4, 35.7);
      ctx.lineTo(242.9, 57.9);
      ctx.lineTo(231.6, 35.8);
      ctx.lineTo(226.5, 35.8);
      ctx.lineTo(240.7, 62.8);
      ctx.lineTo(240.7, 77.1);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(183.1, 61.7);
      ctx.bezierCurveTo(190.8, 60.9, 194.7, 54.8, 194.7, 49.2);
      ctx.bezierCurveTo(194.7, 44.1, 191.9, 39.6, 187.3, 37.5);
      ctx.bezierCurveTo(185.8, 36.8, 183.4, 36.0, 177.6, 36.0);
      ctx.lineTo(166.9, 36.0);
      ctx.lineTo(166.9, 77.1);
      ctx.lineTo(171.6, 77.1);
      ctx.lineTo(171.6, 40.2);
      ctx.lineTo(178.4, 40.2);
      ctx.bezierCurveTo(181.4, 40.2, 183.5, 40.4, 185.8, 41.7);
      ctx.bezierCurveTo(188.3, 42.9, 190.1, 46.0, 190.1, 49.1);
      ctx.bezierCurveTo(190.1, 52.0, 188.4, 56.0, 183.7, 57.3);
      ctx.bezierCurveTo(182.0, 57.8, 180.4, 57.9, 175.2, 57.9);
      ctx.lineTo(174.6, 57.9);
      ctx.lineTo(190.3, 77.1);
      ctx.lineTo(193.2, 72.9);
      ctx.lineTo(183.1, 61.7);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group

      // theStingrayAffair/Compound Path/Group/Group
      ctx.save();

      // theStingrayAffair/Compound Path/Group/Group/Path
      ctx.save();
      ctx.moveTo(224.7, 35.8);
      ctx.lineTo(224.7, 77.2);
      ctx.lineTo(220.1, 77.2);
      ctx.lineTo(220.1, 62.9);
      ctx.lineTo(205.8, 63.0);
      ctx.lineTo(195.9, 77.1);
      ctx.lineTo(190.3, 77.1);
      ctx.lineTo(190.3, 77.1);
      ctx.lineTo(190.3, 77.1);
      ctx.lineTo(191.9, 74.8);
      ctx.lineTo(193.2, 72.9);
      ctx.lineTo(219.0, 35.8);
      ctx.lineTo(224.7, 35.8);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Group/Path
      ctx.moveTo(220.1, 42.1);
      ctx.lineTo(208.7, 58.7);
      ctx.lineTo(220.1, 58.7);
      ctx.lineTo(220.1, 42.1);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group
      ctx.restore();
      ctx.restore();

      // theStingrayAffair/Compound Path/Group/Path
      ctx.save();
      ctx.moveTo(177.6, 104.8);
      ctx.lineTo(162.1, 104.8);
      ctx.lineTo(162.1, 86.7);
      ctx.lineTo(182.2, 86.7);
      ctx.lineTo(185.2, 82.5);
      ctx.lineTo(157.5, 82.5);
      ctx.lineTo(157.5, 104.8);
      ctx.lineTo(137.8, 104.8);
      ctx.lineTo(137.8, 86.7);
      ctx.lineTo(154.0, 86.7);
      ctx.lineTo(154.0, 82.5);
      ctx.lineTo(133.2, 82.5);
      ctx.lineTo(133.2, 123.1);
      ctx.lineTo(137.8, 123.1);
      ctx.lineTo(137.8, 109.0);
      ctx.lineTo(157.5, 109.0);
      ctx.lineTo(157.5, 123.1);
      ctx.lineTo(162.1, 123.1);
      ctx.lineTo(162.1, 109.0);
      ctx.lineTo(174.7, 109.0);
      ctx.lineTo(177.6, 104.8);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Group

      // theStingrayAffair/Compound Path/Group/Group/Group
      ctx.save();

      // theStingrayAffair/Compound Path/Group/Group/Group/Path
      ctx.save();
      ctx.moveTo(122.6, 82.4);
      ctx.lineTo(128.2, 82.4);
      ctx.lineTo(128.2, 123.1);
      ctx.lineTo(123.6, 123.1);
      ctx.lineTo(123.6, 109.6);
      ctx.lineTo(109.3, 109.6);
      ctx.lineTo(100.1, 123.1);
      ctx.lineTo(94.5, 123.1);
      ctx.lineTo(122.6, 82.4);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Group/Group/Path
      ctx.moveTo(123.6, 88.7);
      ctx.lineTo(112.3, 105.4);
      ctx.lineTo(123.6, 105.4);
      ctx.lineTo(123.6, 88.7);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Group/Group
      ctx.restore();

      // theStingrayAffair/Compound Path/Group/Group/Group/Path
      ctx.save();
      ctx.moveTo(203.5, 82.4);
      ctx.lineTo(203.5, 123.1);
      ctx.lineTo(198.9, 123.1);
      ctx.lineTo(198.9, 109.6);
      ctx.lineTo(184.6, 109.6);
      ctx.lineTo(175.3, 123.1);
      ctx.lineTo(169.8, 123.1);
      ctx.lineTo(197.8, 82.4);
      ctx.lineTo(203.5, 82.4);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Group/Group/Path
      ctx.moveTo(198.8, 88.7);
      ctx.lineTo(187.5, 105.4);
      ctx.lineTo(198.8, 105.4);
      ctx.lineTo(198.8, 88.7);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Path
      ctx.restore();
      ctx.restore();
      ctx.moveTo(210.4, 123.1);
      ctx.lineTo(215.0, 123.1);
      ctx.lineTo(215.0, 82.5);
      ctx.lineTo(210.4, 82.6);
      ctx.lineTo(210.4, 123.1);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Group/Path
      ctx.moveTo(249.1, 95.7);
      ctx.bezierCurveTo(249.0, 90.6, 246.2, 86.1, 241.7, 84.0);
      ctx.bezierCurveTo(240.2, 83.3, 237.7, 82.5, 231.9, 82.5);
      ctx.lineTo(221.3, 82.6);
      ctx.lineTo(221.3, 123.1);
      ctx.lineTo(225.9, 123.1);
      ctx.lineTo(225.9, 86.8);
      ctx.lineTo(232.8, 86.7);
      ctx.bezierCurveTo(235.8, 86.7, 237.8, 87.0, 240.2, 88.2);
      ctx.bezierCurveTo(242.7, 89.4, 244.4, 92.5, 244.4, 95.6);
      ctx.bezierCurveTo(244.5, 98.6, 242.8, 102.5, 238.1, 103.8);
      ctx.bezierCurveTo(236.3, 104.4, 234.6, 104.4, 229.6, 104.5);
      ctx.lineTo(229.0, 104.5);
      ctx.lineTo(243.0, 123.1);
      ctx.lineTo(248.8, 123.1);
      ctx.lineTo(237.5, 108.2);
      ctx.bezierCurveTo(245.1, 107.4, 249.1, 101.4, 249.1, 95.7);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.restore();
      ctx.moveTo(25.0, 32.2);
      ctx.lineTo(28.2, 32.2);
      ctx.lineTo(28.2, 13.1);
      ctx.lineTo(34.5, 13.1);
      ctx.lineTo(34.5, 10.2);
      ctx.lineTo(20.6, 10.2);
      ctx.lineTo(18.5, 13.1);
      ctx.lineTo(25.0, 13.1);
      ctx.lineTo(25.0, 32.2);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(40.1, 22.4);
      ctx.lineTo(49.9, 22.4);
      ctx.lineTo(49.9, 32.2);
      ctx.lineTo(53.1, 32.2);
      ctx.lineTo(53.1, 10.2);
      ctx.lineTo(49.9, 10.2);
      ctx.lineTo(49.9, 19.4);
      ctx.lineTo(40.1, 19.4);
      ctx.lineTo(40.1, 10.2);
      ctx.lineTo(36.9, 10.2);
      ctx.lineTo(36.9, 32.2);
      ctx.lineTo(40.1, 32.2);
      ctx.lineTo(40.1, 22.4);
      ctx.closePath();

      // theStingrayAffair/Compound Path/Path
      ctx.moveTo(58.7, 29.3);
      ctx.lineTo(58.7, 22.6);
      ctx.lineTo(70.6, 22.6);
      ctx.lineTo(70.6, 19.6);
      ctx.lineTo(58.7, 19.6);
      ctx.lineTo(58.7, 13.1);
      ctx.lineTo(70.6, 13.1);
      ctx.lineTo(70.6, 10.2);
      ctx.lineTo(55.5, 10.2);
      ctx.lineTo(55.5, 32.2);
      ctx.lineTo(70.6, 32.2);
      ctx.lineTo(70.6, 29.3);
      ctx.lineTo(58.7, 29.3);
      ctx.closePath();
      gradient = ctx.createLinearGradient(139.0, 123.1, 139.0, 10.2);
      gradient.addColorStop(0.00, "rgb(122, 207, 234)");
      gradient.addColorStop(0.57, "rgb(93, 161, 202)");
      gradient.addColorStop(0.99, "rgb(63, 114, 170)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();

      // sheddAquarium/Compound Path
      ctx.save();
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(94.6, 137.6);
      ctx.bezierCurveTo(94.7, 139.0, 95.6, 139.9, 97.0, 139.9);
      ctx.bezierCurveTo(98.2, 139.9, 99.3, 139.0, 99.3, 137.7);
      ctx.bezierCurveTo(99.3, 135.9, 97.5, 135.5, 96.7, 135.2);
      ctx.bezierCurveTo(95.7, 134.9, 93.8, 134.5, 93.8, 132.2);
      ctx.bezierCurveTo(93.8, 130.5, 95.2, 129.2, 97.0, 129.2);
      ctx.bezierCurveTo(98.8, 129.2, 100.1, 130.6, 100.1, 132.3);
      ctx.lineTo(99.0, 132.3);
      ctx.bezierCurveTo(99.0, 131.1, 98.1, 130.2, 97.0, 130.2);
      ctx.bezierCurveTo(95.7, 130.2, 94.9, 131.2, 94.9, 132.2);
      ctx.bezierCurveTo(94.9, 133.6, 96.1, 133.9, 97.6, 134.3);
      ctx.bezierCurveTo(100.4, 135.1, 100.4, 137.2, 100.4, 137.6);
      ctx.lineTo(100.4, 137.6);
      ctx.bezierCurveTo(100.4, 139.4, 99.0, 141.0, 97.0, 141.0);
      ctx.bezierCurveTo(95.5, 141.0, 93.5, 140.1, 93.5, 137.6);
      ctx.lineTo(94.6, 137.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(103.5, 129.4);
      ctx.lineTo(104.7, 129.4);
      ctx.lineTo(104.7, 134.4);
      ctx.lineTo(110.6, 134.4);
      ctx.lineTo(110.6, 129.4);
      ctx.lineTo(111.7, 129.4);
      ctx.lineTo(111.7, 140.8);
      ctx.lineTo(110.6, 140.8);
      ctx.lineTo(110.6, 135.4);
      ctx.lineTo(104.7, 135.4);
      ctx.lineTo(104.6, 140.8);
      ctx.lineTo(103.5, 140.8);
      ctx.lineTo(103.5, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(115.4, 129.4);
      ctx.lineTo(121.7, 129.4);
      ctx.lineTo(121.7, 130.4);
      ctx.lineTo(116.6, 130.4);
      ctx.lineTo(116.6, 134.5);
      ctx.lineTo(121.5, 134.5);
      ctx.lineTo(121.5, 135.5);
      ctx.lineTo(116.6, 135.5);
      ctx.lineTo(116.5, 139.7);
      ctx.lineTo(121.7, 139.7);
      ctx.lineTo(121.7, 140.8);
      ctx.lineTo(115.4, 140.8);
      ctx.lineTo(115.4, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(125.2, 129.4);
      ctx.lineTo(128.5, 129.4);
      ctx.bezierCurveTo(129.9, 129.4, 131.3, 129.7, 132.2, 130.3);
      ctx.bezierCurveTo(134.3, 131.6, 134.8, 133.7, 134.8, 135.1);
      ctx.bezierCurveTo(134.8, 136.2, 134.4, 138.5, 132.2, 139.8);
      ctx.bezierCurveTo(131.3, 140.4, 129.9, 140.8, 128.5, 140.8);
      ctx.lineTo(125.2, 140.8);
      ctx.lineTo(125.2, 129.4);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(126.3, 139.7);
      ctx.lineTo(128.0, 139.7);
      ctx.bezierCurveTo(129.0, 139.7, 130.6, 139.7, 131.9, 138.8);
      ctx.bezierCurveTo(132.6, 138.2, 133.7, 137.0, 133.7, 135.1);
      ctx.bezierCurveTo(133.7, 133.5, 132.9, 132.1, 131.8, 131.3);
      ctx.bezierCurveTo(130.7, 130.6, 129.7, 130.4, 128.0, 130.4);
      ctx.lineTo(126.3, 130.4);
      ctx.lineTo(126.3, 139.7);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(138.1, 129.4);
      ctx.lineTo(141.5, 129.4);
      ctx.bezierCurveTo(142.9, 129.4, 144.3, 129.7, 145.2, 130.3);
      ctx.bezierCurveTo(147.2, 131.6, 147.8, 133.7, 147.8, 135.1);
      ctx.bezierCurveTo(147.8, 136.2, 147.4, 138.5, 145.2, 139.8);
      ctx.bezierCurveTo(144.3, 140.4, 142.9, 140.8, 141.5, 140.8);
      ctx.lineTo(138.1, 140.8);
      ctx.lineTo(138.1, 129.4);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(139.3, 139.7);
      ctx.lineTo(140.9, 139.7);
      ctx.bezierCurveTo(142.0, 139.7, 143.5, 139.7, 144.8, 138.8);
      ctx.bezierCurveTo(145.5, 138.2, 146.6, 137.0, 146.6, 135.1);
      ctx.bezierCurveTo(146.6, 133.6, 145.9, 132.1, 144.7, 131.3);
      ctx.bezierCurveTo(143.7, 130.6, 142.6, 130.4, 140.9, 130.4);
      ctx.lineTo(139.3, 130.4);
      ctx.lineTo(139.3, 139.7);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(160.9, 129.4);
      ctx.lineTo(162.2, 129.4);
      ctx.lineTo(167.1, 140.8);
      ctx.lineTo(165.8, 140.8);
      ctx.lineTo(164.2, 136.9);
      ctx.lineTo(158.9, 136.9);
      ctx.lineTo(157.2, 140.8);
      ctx.lineTo(156.0, 140.8);
      ctx.lineTo(160.9, 129.4);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(159.3, 135.9);
      ctx.lineTo(163.7, 135.9);
      ctx.lineTo(161.5, 130.7);
      ctx.lineTo(159.3, 135.9);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(180.7, 141.0);
      ctx.bezierCurveTo(179.3, 141.0, 178.8, 140.5, 178.2, 140.0);
      ctx.bezierCurveTo(176.7, 141.0, 175.1, 141.0, 174.7, 141.0);
      ctx.bezierCurveTo(171.3, 141.0, 168.6, 138.3, 168.6, 135.1);
      ctx.bezierCurveTo(168.6, 132.1, 170.9, 129.2, 174.8, 129.2);
      ctx.bezierCurveTo(178.3, 129.2, 180.9, 131.8, 180.9, 135.2);
      ctx.bezierCurveTo(180.9, 136.7, 180.3, 138.2, 179.0, 139.3);
      ctx.bezierCurveTo(179.7, 139.9, 180.2, 140.0, 180.7, 140.0);
      ctx.lineTo(180.7, 141.0);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(172.4, 136.1);
      ctx.bezierCurveTo(175.2, 136.1, 176.8, 137.4, 178.2, 138.6);
      ctx.bezierCurveTo(179.3, 137.5, 179.8, 136.3, 179.8, 135.1);
      ctx.bezierCurveTo(179.8, 132.3, 177.4, 130.2, 174.8, 130.2);
      ctx.bezierCurveTo(172.3, 130.2, 169.8, 132.1, 169.8, 135.2);
      ctx.bezierCurveTo(169.8, 135.8, 169.8, 136.1, 170.0, 136.5);
      ctx.bezierCurveTo(170.4, 136.4, 171.2, 136.1, 172.4, 136.1);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(174.8, 140.0);
      ctx.bezierCurveTo(175.1, 140.0, 176.3, 140.0, 177.3, 139.2);
      ctx.bezierCurveTo(177.1, 139.0, 176.0, 138.2, 175.7, 138.1);
      ctx.bezierCurveTo(174.2, 137.1, 172.4, 137.1, 172.2, 137.1);
      ctx.bezierCurveTo(171.2, 137.1, 170.8, 137.3, 170.4, 137.5);
      ctx.bezierCurveTo(170.7, 138.1, 172.1, 140.0, 174.8, 140.0);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(184.3, 129.4);
      ctx.lineTo(184.3, 136.5);
      ctx.bezierCurveTo(184.3, 137.3, 184.5, 138.1, 184.7, 138.6);
      ctx.bezierCurveTo(185.4, 139.8, 186.5, 140.0, 187.1, 140.0);
      ctx.bezierCurveTo(187.6, 140.0, 188.8, 139.8, 189.4, 138.6);
      ctx.bezierCurveTo(189.7, 138.1, 189.8, 137.3, 189.8, 136.5);
      ctx.lineTo(189.8, 129.4);
      ctx.lineTo(191.0, 129.4);
      ctx.lineTo(191.0, 136.5);
      ctx.bezierCurveTo(191.0, 137.4, 190.8, 138.3, 190.5, 138.9);
      ctx.bezierCurveTo(189.8, 140.6, 188.2, 141.0, 187.1, 141.0);
      ctx.bezierCurveTo(186.0, 141.0, 184.4, 140.6, 183.6, 138.9);
      ctx.bezierCurveTo(183.4, 138.3, 183.2, 137.4, 183.2, 136.5);
      ctx.lineTo(183.2, 129.4);
      ctx.lineTo(184.3, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(198.4, 129.4);
      ctx.lineTo(199.7, 129.4);
      ctx.lineTo(204.6, 140.8);
      ctx.lineTo(203.4, 140.8);
      ctx.lineTo(201.7, 137.0);
      ctx.lineTo(196.4, 137.0);
      ctx.lineTo(194.7, 140.8);
      ctx.lineTo(193.6, 140.8);
      ctx.lineTo(198.4, 129.4);
      ctx.closePath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(196.8, 135.9);
      ctx.lineTo(201.3, 135.9);
      ctx.lineTo(199.1, 130.7);
      ctx.lineTo(196.8, 135.9);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(207.3, 129.4);
      ctx.lineTo(210.2, 129.4);
      ctx.bezierCurveTo(211.8, 129.4, 212.5, 129.6, 213.0, 129.8);
      ctx.bezierCurveTo(214.3, 130.4, 215.1, 131.7, 215.1, 133.1);
      ctx.bezierCurveTo(215.1, 134.7, 213.9, 136.4, 211.7, 136.5);
      ctx.lineTo(214.9, 140.8);
      ctx.lineTo(213.5, 140.8);
      ctx.lineTo(209.6, 135.6);
      ctx.bezierCurveTo(211.0, 135.6, 211.5, 135.6, 212.0, 135.5);
      ctx.bezierCurveTo(213.3, 135.1, 213.9, 134.1, 213.9, 133.0);
      ctx.bezierCurveTo(213.9, 132.2, 213.4, 131.2, 212.7, 130.9);
      ctx.bezierCurveTo(212.0, 130.5, 211.4, 130.4, 210.5, 130.4);
      ctx.lineTo(208.5, 130.4);
      ctx.lineTo(208.5, 140.8);
      ctx.lineTo(207.3, 140.8);
      ctx.lineTo(207.3, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(219.0, 129.4);
      ctx.lineTo(220.2, 129.4);
      ctx.lineTo(220.2, 140.8);
      ctx.lineTo(219.0, 140.8);
      ctx.lineTo(219.0, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(226.7, 129.4);
      ctx.lineTo(226.7, 136.5);
      ctx.bezierCurveTo(226.7, 137.3, 226.8, 138.1, 227.1, 138.6);
      ctx.bezierCurveTo(227.8, 139.9, 228.9, 140.0, 229.4, 140.0);
      ctx.bezierCurveTo(230.0, 140.0, 231.1, 139.9, 231.8, 138.6);
      ctx.bezierCurveTo(232.1, 138.1, 232.2, 137.3, 232.2, 136.5);
      ctx.lineTo(232.2, 129.4);
      ctx.lineTo(233.3, 129.4);
      ctx.lineTo(233.3, 136.5);
      ctx.bezierCurveTo(233.3, 137.5, 233.2, 138.3, 232.9, 138.9);
      ctx.bezierCurveTo(232.1, 140.6, 230.5, 141.0, 229.4, 141.0);
      ctx.bezierCurveTo(228.4, 141.0, 226.8, 140.6, 226.0, 138.9);
      ctx.bezierCurveTo(225.7, 138.3, 225.6, 137.5, 225.6, 136.5);
      ctx.lineTo(225.6, 129.4);
      ctx.lineTo(226.7, 129.4);
      ctx.closePath();
      ctx.fill();

      // sheddAquarium/Compound Path
      ctx.beginPath();

      // sheddAquarium/Compound Path/Path
      ctx.moveTo(237.5, 129.4);
      ctx.lineTo(239.3, 129.4);
      ctx.lineTo(243.4, 139.1);
      ctx.lineTo(247.6, 129.4);
      ctx.lineTo(249.3, 129.4);
      ctx.lineTo(249.3, 140.8);
      ctx.lineTo(248.2, 140.8);
      ctx.lineTo(248.2, 130.6);
      ctx.lineTo(248.2, 130.6);
      ctx.lineTo(243.9, 140.8);
      ctx.lineTo(242.9, 140.8);
      ctx.lineTo(238.7, 130.6);
      ctx.lineTo(238.7, 130.6);
      ctx.lineTo(238.7, 140.8);
      ctx.lineTo(237.5, 140.8);
      ctx.lineTo(237.5, 129.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // gala2013/Compound Path
      ctx.save();
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(168.1, 152.7);
      ctx.bezierCurveTo(167.8, 156.1, 164.8, 158.2, 162.0, 158.2);
      ctx.bezierCurveTo(158.6, 158.2, 155.9, 155.4, 155.9, 152.3);
      ctx.bezierCurveTo(155.9, 149.3, 158.4, 146.4, 162.0, 146.4);
      ctx.bezierCurveTo(165.0, 146.4, 167.0, 148.4, 167.4, 149.6);
      ctx.lineTo(166.1, 149.6);
      ctx.bezierCurveTo(165.4, 148.5, 163.9, 147.4, 162.0, 147.4);
      ctx.bezierCurveTo(159.2, 147.4, 157.1, 149.7, 157.1, 152.3);
      ctx.bezierCurveTo(157.1, 154.8, 159.1, 157.1, 162.1, 157.1);
      ctx.bezierCurveTo(164.5, 157.1, 166.3, 155.3, 166.7, 153.8);
      ctx.lineTo(160.3, 153.8);
      ctx.lineTo(160.3, 152.7);
      ctx.lineTo(168.1, 152.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(174.6, 146.6);
      ctx.lineTo(175.9, 146.6);
      ctx.lineTo(180.8, 158.0);
      ctx.lineTo(179.6, 158.0);
      ctx.lineTo(177.9, 154.1);
      ctx.lineTo(172.6, 154.1);
      ctx.lineTo(171.0, 158.0);
      ctx.lineTo(169.8, 158.0);
      ctx.lineTo(174.6, 146.6);
      ctx.closePath();

      // gala2013/Compound Path/Path
      ctx.moveTo(173.1, 153.1);
      ctx.lineTo(177.5, 153.1);
      ctx.lineTo(175.3, 147.9);
      ctx.lineTo(173.1, 153.1);
      ctx.closePath();
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(184.1, 146.6);
      ctx.lineTo(185.2, 146.6);
      ctx.lineTo(185.2, 156.9);
      ctx.lineTo(190.0, 156.9);
      ctx.lineTo(190.0, 158.0);
      ctx.lineTo(184.1, 158.0);
      ctx.lineTo(184.1, 146.6);
      ctx.closePath();
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(196.7, 146.6);
      ctx.lineTo(198.0, 146.6);
      ctx.lineTo(202.9, 158.0);
      ctx.lineTo(201.6, 158.0);
      ctx.lineTo(200.0, 154.1);
      ctx.lineTo(194.6, 154.1);
      ctx.lineTo(193.0, 158.0);
      ctx.lineTo(191.8, 158.0);
      ctx.lineTo(196.7, 146.6);
      ctx.closePath();

      // gala2013/Compound Path/Path
      ctx.moveTo(195.1, 153.1);
      ctx.lineTo(199.5, 153.1);
      ctx.lineTo(197.3, 147.9);
      ctx.lineTo(195.1, 153.1);
      ctx.closePath();
      ctx.fill();


      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(212.9, 156.9);
      ctx.lineTo(216.9, 153.1);
      ctx.bezierCurveTo(218.3, 151.8, 219.1, 151.0, 219.1, 149.8);
      ctx.bezierCurveTo(219.1, 148.6, 218.1, 147.4, 216.6, 147.4);
      ctx.bezierCurveTo(216.4, 147.4, 214.2, 147.4, 214.2, 150.3);
      ctx.lineTo(213.0, 150.3);
      ctx.lineTo(213.0, 150.2);
      ctx.bezierCurveTo(213.0, 147.2, 215.2, 146.4, 216.7, 146.4);
      ctx.bezierCurveTo(219.0, 146.4, 220.3, 148.4, 220.3, 149.8);
      ctx.bezierCurveTo(220.3, 151.2, 219.6, 152.1, 218.2, 153.4);
      ctx.lineTo(214.5, 156.9);
      ctx.lineTo(220.2, 157.0);
      ctx.lineTo(220.2, 158.0);
      ctx.lineTo(212.9, 158.0);
      ctx.lineTo(212.9, 156.9);
      ctx.closePath();
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(231.6, 153.8);
      ctx.bezierCurveTo(231.6, 155.0, 231.4, 155.8, 231.0, 156.4);
      ctx.bezierCurveTo(230.2, 157.9, 228.7, 158.2, 227.8, 158.2);
      ctx.bezierCurveTo(226.9, 158.2, 225.3, 157.9, 224.5, 156.4);
      ctx.bezierCurveTo(224.1, 155.8, 223.9, 155.0, 223.9, 153.8);
      ctx.lineTo(223.9, 150.5);
      ctx.bezierCurveTo(223.9, 149.6, 224.1, 148.9, 224.4, 148.4);
      ctx.bezierCurveTo(225.1, 147.0, 226.5, 146.4, 227.8, 146.4);
      ctx.bezierCurveTo(229.0, 146.4, 230.4, 147.0, 231.2, 148.4);
      ctx.bezierCurveTo(231.4, 148.9, 231.6, 149.6, 231.6, 150.5);
      ctx.lineTo(231.6, 153.8);
      ctx.closePath();

      // gala2013/Compound Path/Path
      ctx.moveTo(230.4, 150.8);
      ctx.bezierCurveTo(230.4, 150.7, 230.4, 149.3, 229.9, 148.6);
      ctx.bezierCurveTo(229.4, 147.8, 228.5, 147.4, 227.8, 147.4);
      ctx.bezierCurveTo(227.0, 147.4, 226.1, 147.8, 225.6, 148.6);
      ctx.bezierCurveTo(225.1, 149.3, 225.1, 150.7, 225.1, 150.8);
      ctx.lineTo(225.1, 153.6);
      ctx.bezierCurveTo(225.1, 154.0, 225.1, 155.3, 225.5, 155.9);
      ctx.bezierCurveTo(226.0, 156.8, 226.8, 157.2, 227.8, 157.2);
      ctx.bezierCurveTo(228.7, 157.2, 229.5, 156.8, 230.0, 155.9);
      ctx.bezierCurveTo(230.4, 155.3, 230.4, 154.0, 230.4, 153.7);
      ctx.lineTo(230.4, 150.8);
      ctx.closePath();
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(236.6, 147.6);
      ctx.lineTo(234.6, 147.6);
      ctx.lineTo(234.6, 146.6);
      ctx.lineTo(237.7, 146.6);
      ctx.lineTo(237.7, 158.0);
      ctx.lineTo(236.6, 158.0);
      ctx.lineTo(236.6, 147.6);
      ctx.closePath();
      ctx.fill();

      // gala2013/Compound Path
      ctx.beginPath();

      // gala2013/Compound Path/Path
      ctx.moveTo(242.9, 149.4);
      ctx.bezierCurveTo(242.9, 147.5, 244.3, 146.4, 245.8, 146.4);
      ctx.bezierCurveTo(247.5, 146.4, 248.7, 147.7, 248.7, 149.3);
      ctx.bezierCurveTo(248.7, 150.4, 248.1, 151.0, 247.5, 151.5);
      ctx.bezierCurveTo(249.2, 152.3, 249.4, 153.8, 249.4, 154.5);
      ctx.bezierCurveTo(249.4, 156.7, 247.7, 158.2, 245.8, 158.2);
      ctx.bezierCurveTo(244.7, 158.2, 242.3, 157.6, 242.1, 154.4);
      ctx.lineTo(243.3, 154.4);
      ctx.bezierCurveTo(243.3, 155.0, 243.4, 155.4, 243.7, 155.9);
      ctx.bezierCurveTo(244.1, 156.6, 244.8, 157.2, 245.8, 157.2);
      ctx.bezierCurveTo(247.2, 157.2, 248.3, 156.2, 248.3, 154.5);
      ctx.bezierCurveTo(248.3, 153.4, 247.5, 152.4, 246.3, 152.1);
      ctx.bezierCurveTo(246.0, 152.0, 245.7, 152.0, 245.0, 152.0);
      ctx.lineTo(245.0, 151.0);
      ctx.bezierCurveTo(245.1, 151.0, 245.3, 151.0, 245.4, 151.0);
      ctx.bezierCurveTo(247.2, 151.0, 247.5, 149.8, 247.5, 149.2);
      ctx.bezierCurveTo(247.5, 148.5, 247.1, 147.4, 245.8, 147.4);
      ctx.bezierCurveTo(244.8, 147.4, 244.0, 148.2, 244.0, 149.4);
      ctx.lineTo(242.9, 149.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // beLikeBond/Compound Path
      ctx.save();
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(85.1, 23.0);
      ctx.lineTo(87.5, 23.0);
      ctx.bezierCurveTo(90.4, 23.0, 90.5, 25.1, 90.5, 25.4);
      ctx.bezierCurveTo(90.5, 26.5, 89.8, 27.0, 89.5, 27.3);
      ctx.bezierCurveTo(90.4, 27.7, 91.0, 28.5, 91.0, 29.6);
      ctx.bezierCurveTo(91.0, 30.5, 90.6, 31.3, 90.0, 31.7);
      ctx.bezierCurveTo(89.2, 32.1, 88.6, 32.2, 87.7, 32.2);
      ctx.lineTo(85.1, 32.2);
      ctx.lineTo(85.1, 23.0);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(86.1, 27.0);
      ctx.lineTo(87.2, 27.0);
      ctx.bezierCurveTo(87.9, 27.0, 88.4, 26.9, 88.8, 26.7);
      ctx.bezierCurveTo(89.3, 26.5, 89.6, 25.9, 89.6, 25.4);
      ctx.bezierCurveTo(89.6, 25.0, 89.4, 24.7, 89.2, 24.4);
      ctx.bezierCurveTo(88.8, 24.0, 88.2, 23.8, 87.3, 23.8);
      ctx.lineTo(86.1, 23.8);
      ctx.lineTo(86.1, 27.0);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(86.1, 31.4);
      ctx.lineTo(87.4, 31.4);
      ctx.bezierCurveTo(88.1, 31.4, 88.6, 31.4, 89.1, 31.2);
      ctx.bezierCurveTo(89.7, 30.9, 90.1, 30.3, 90.1, 29.6);
      ctx.bezierCurveTo(90.1, 28.9, 89.6, 28.2, 89.0, 28.0);
      ctx.bezierCurveTo(88.6, 27.8, 88.2, 27.8, 87.2, 27.8);
      ctx.lineTo(86.1, 27.8);
      ctx.lineTo(86.1, 31.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(194, 161, 3)";
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(93.5, 23.0);
      ctx.lineTo(98.6, 23.0);
      ctx.lineTo(98.6, 23.8);
      ctx.lineTo(94.4, 23.8);
      ctx.lineTo(94.4, 27.1);
      ctx.lineTo(98.5, 27.1);
      ctx.lineTo(98.5, 28.0);
      ctx.lineTo(94.4, 28.0);
      ctx.lineTo(94.4, 31.4);
      ctx.lineTo(98.6, 31.4);
      ctx.lineTo(98.6, 32.2);
      ctx.lineTo(93.5, 32.2);
      ctx.lineTo(93.5, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(106.4, 23.0);
      ctx.lineTo(107.3, 23.0);
      ctx.lineTo(107.3, 31.4);
      ctx.lineTo(111.1, 31.4);
      ctx.lineTo(111.1, 32.2);
      ctx.lineTo(106.4, 32.2);
      ctx.lineTo(106.4, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(113.6, 23.0);
      ctx.lineTo(114.5, 23.0);
      ctx.lineTo(114.5, 32.2);
      ctx.lineTo(113.6, 32.2);
      ctx.lineTo(113.6, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(117.9, 23.0);
      ctx.lineTo(118.8, 23.0);
      ctx.lineTo(118.8, 28.3);
      ctx.lineTo(118.8, 28.3);
      ctx.lineTo(123.1, 23.0);
      ctx.lineTo(124.2, 23.0);
      ctx.lineTo(120.6, 27.5);
      ctx.lineTo(124.2, 32.2);
      ctx.lineTo(123.1, 32.2);
      ctx.lineTo(120.0, 28.2);
      ctx.lineTo(118.8, 29.7);
      ctx.lineTo(118.8, 32.2);
      ctx.lineTo(117.9, 32.2);
      ctx.lineTo(117.9, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(126.4, 23.0);
      ctx.lineTo(131.5, 23.0);
      ctx.lineTo(131.5, 23.8);
      ctx.lineTo(127.3, 23.8);
      ctx.lineTo(127.3, 27.1);
      ctx.lineTo(131.3, 27.1);
      ctx.lineTo(131.3, 28.0);
      ctx.lineTo(127.3, 28.0);
      ctx.lineTo(127.3, 31.4);
      ctx.lineTo(131.5, 31.4);
      ctx.lineTo(131.5, 32.2);
      ctx.lineTo(126.4, 32.2);
      ctx.lineTo(126.4, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(139.1, 23.0);
      ctx.lineTo(141.4, 23.0);
      ctx.bezierCurveTo(144.4, 23.0, 144.5, 25.1, 144.5, 25.4);
      ctx.bezierCurveTo(144.5, 26.5, 143.8, 27.0, 143.5, 27.3);
      ctx.bezierCurveTo(144.4, 27.7, 145.0, 28.5, 145.0, 29.6);
      ctx.bezierCurveTo(145.0, 30.5, 144.6, 31.3, 143.9, 31.7);
      ctx.bezierCurveTo(143.2, 32.1, 142.6, 32.2, 141.7, 32.2);
      ctx.lineTo(139.1, 32.2);
      ctx.lineTo(139.1, 23.0);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(140.0, 27.0);
      ctx.lineTo(141.2, 27.0);
      ctx.bezierCurveTo(141.9, 27.0, 142.4, 26.9, 142.8, 26.7);
      ctx.bezierCurveTo(143.2, 26.5, 143.6, 25.9, 143.6, 25.4);
      ctx.bezierCurveTo(143.6, 25.0, 143.4, 24.7, 143.2, 24.4);
      ctx.bezierCurveTo(142.8, 24.0, 142.2, 23.8, 141.3, 23.8);
      ctx.lineTo(140.0, 23.8);
      ctx.lineTo(140.0, 27.0);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(140.0, 31.4);
      ctx.lineTo(141.3, 31.4);
      ctx.bezierCurveTo(142.1, 31.4, 142.6, 31.4, 143.1, 31.2);
      ctx.bezierCurveTo(143.7, 30.9, 144.1, 30.3, 144.1, 29.6);
      ctx.bezierCurveTo(144.1, 28.9, 143.6, 28.2, 143.0, 28.0);
      ctx.bezierCurveTo(142.5, 27.8, 142.2, 27.8, 141.2, 27.8);
      ctx.lineTo(140.0, 27.8);
      ctx.lineTo(140.0, 31.4);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(152.2, 22.8);
      ctx.bezierCurveTo(154.8, 22.8, 157.1, 24.9, 157.1, 27.6);
      ctx.bezierCurveTo(157.1, 30.3, 154.8, 32.4, 152.2, 32.4);
      ctx.bezierCurveTo(149.6, 32.4, 147.3, 30.3, 147.3, 27.6);
      ctx.bezierCurveTo(147.3, 24.7, 149.7, 22.8, 152.2, 22.8);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(152.2, 31.6);
      ctx.bezierCurveTo(154.3, 31.6, 156.2, 29.8, 156.2, 27.6);
      ctx.bezierCurveTo(156.2, 25.4, 154.4, 23.6, 152.2, 23.6);
      ctx.bezierCurveTo(150.1, 23.6, 148.2, 25.3, 148.2, 27.6);
      ctx.bezierCurveTo(148.2, 29.8, 150.0, 31.6, 152.2, 31.6);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(159.7, 23.0);
      ctx.lineTo(161.0, 23.0);
      ctx.lineTo(166.1, 30.7);
      ctx.lineTo(166.2, 30.7);
      ctx.lineTo(166.2, 23.0);
      ctx.lineTo(167.1, 23.0);
      ctx.lineTo(167.1, 32.2);
      ctx.lineTo(166.2, 32.2);
      ctx.lineTo(160.7, 24.1);
      ctx.lineTo(160.6, 24.1);
      ctx.lineTo(160.6, 32.2);
      ctx.lineTo(159.7, 32.2);
      ctx.lineTo(159.7, 23.0);
      ctx.closePath();
      ctx.fill();

      // beLikeBond/Compound Path
      ctx.beginPath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(170.2, 23.0);
      ctx.lineTo(172.9, 23.0);
      ctx.bezierCurveTo(174.1, 23.0, 175.2, 23.2, 176.0, 23.7);
      ctx.bezierCurveTo(177.6, 24.7, 178.1, 26.5, 178.1, 27.6);
      ctx.bezierCurveTo(178.1, 28.5, 177.7, 30.3, 176.0, 31.5);
      ctx.bezierCurveTo(175.2, 32.0, 174.1, 32.2, 172.9, 32.2);
      ctx.lineTo(170.2, 32.2);
      ctx.lineTo(170.2, 23.0);
      ctx.closePath();

      // beLikeBond/Compound Path/Path
      ctx.moveTo(171.2, 31.4);
      ctx.lineTo(172.5, 31.4);
      ctx.bezierCurveTo(173.3, 31.4, 174.6, 31.4, 175.7, 30.6);
      ctx.bezierCurveTo(176.2, 30.2, 177.1, 29.2, 177.1, 27.6);
      ctx.bezierCurveTo(177.1, 26.4, 176.5, 25.2, 175.6, 24.5);
      ctx.bezierCurveTo(174.7, 24.0, 173.9, 23.8, 172.5, 23.8);
      ctx.lineTo(171.2, 23.8);
      ctx.lineTo(171.2, 31.4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // box/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(270.0, 170.0);
      ctx.lineTo(0.0, 170.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(270.0, 0.0);
      ctx.lineTo(270.0, 170.0);
      ctx.closePath();
      ctx.restore();
    }





function stingray(ctx) {
		
	var thePulse = [];
	
	//initialize the pulse
	thePulse.push({
		pl: 1, // how many pulse lines
		pd: 0,
		pa: 0
	});
		
	
	function drawRay(ctx) {
	var theNewCanvasWidth = window.innerWidth * .9;
	canvas.width = theNewCanvasWidth
	canvas.height = theNewCanvasWidth
		
	// calculate scale.
	var newScale = theNewCanvasWidth / 270;
	ctx.scale(newScale,newScale);
	
	draw(ctx);
		
	var p = thePulse[0];	
	  
      ctx.beginPath();
	  ctx.translate(9.3,84);
      ctx.moveTo(65.3, 55.9);
      ctx.bezierCurveTo(64.9, 55.0, 64.7, 54.6, 64.4, 53.5);
      ctx.bezierCurveTo(64.3, 53.1, 64.1, 52.0, 64.9, 51.7);
      ctx.bezierCurveTo(65.5, 51.6, 66.1, 52.5, 66.4, 52.9);
      ctx.bezierCurveTo(67.3, 53.8, 68.7, 55.1, 70.2, 54.4);
      ctx.bezierCurveTo(72.1, 53.5, 74.8, 25.3, 80.6, 18.6);
      ctx.bezierCurveTo(88.3, 9.6, 92.0, 9.0, 93.2, 7.3);
      ctx.bezierCurveTo(94.4, 5.5, 92.4, 4.4, 88.4, 3.5);
      ctx.bezierCurveTo(84.4, 2.5, 71.8, 3.9, 65.2, 4.2);
      ctx.bezierCurveTo(57.6, 4.4, 48.6, 6.0, 41.5, 2.3);
      ctx.bezierCurveTo(38.4, 0.7, 34.8, -1.3, 31.4, 1.1);
      ctx.bezierCurveTo(30.7, 1.7, 30.1, 2.5, 29.4, 3.0);
      ctx.bezierCurveTo(27.6, 4.4, 25.4, 4.6, 23.6, 5.9);
      ctx.bezierCurveTo(22.9, 6.4, 21.4, 8.2, 21.5, 9.6);
      ctx.bezierCurveTo(21.6, 11.1, 21.4, 12.6, 21.2, 14.1);
      ctx.bezierCurveTo(20.9, 17.2, 19.9, 20.1, 18.8, 23.0);
      ctx.bezierCurveTo(17.7, 26.0, 16.5, 28.9, 15.2, 31.8);
      ctx.bezierCurveTo(14.4, 33.4, 13.7, 34.9, 12.8, 36.3);
      ctx.bezierCurveTo(9.3, 42.3, 1.3, 55.5, 0.5, 59.0);
      ctx.bezierCurveTo(-0.2, 62.5, -0.3, 64.4, 1.3, 65.0);
      ctx.bezierCurveTo(2.9, 65.5, 6.1, 61.3, 17.7, 58.7);
      ctx.bezierCurveTo(32.8, 55.4, 52.6, 65.2, 55.4, 63.7);
      ctx.bezierCurveTo(56.6, 63.1, 55.6, 61.8, 55.2, 61.0);
      ctx.bezierCurveTo(54.7, 60.1, 54.3, 58.4, 56.0, 58.8);
      ctx.bezierCurveTo(57.6, 59.1, 63.5, 66.2, 76.6, 71.9);
      ctx.bezierCurveTo(88.6, 77.0, 109.9, 80.3, 126.7, 68.2);
      ctx.bezierCurveTo(127.6, 67.6, 129.4, 66.3, 129.3, 66.2);
      ctx.bezierCurveTo(129.2, 66.0, 127.6, 67.3, 126.5, 67.9);
      ctx.bezierCurveTo(124.3, 69.0, 121.4, 70.2, 118.4, 71.3);
      ctx.bezierCurveTo(114.0, 72.8, 109.4, 73.7, 104.8, 73.8);
      ctx.bezierCurveTo(102.2, 74.0, 99.6, 73.8, 97.0, 73.4);
      ctx.bezierCurveTo(94.1, 73.0, 91.3, 72.2, 88.5, 71.3);
      ctx.bezierCurveTo(72.6, 65.7, 67.3, 59.7, 65.3, 55.9);
      ctx.closePath();
		if (p.pa == 1){
		for (var x = 0; x < p.pl; x +=1){
			  ctx.strokeStyle = "rgba(255, 255, 0,.02)";
			  ctx.lineWidth = x    ;//+ x*5 + 4*x
			  ctx.stroke();
		  }
		}
      ctx.fillStyle = "rgba(193, 160, 3, " + p.pa + ")";
      ctx.fill();
	  
	  
      // stingray/Path
      ctx.globalAlpha = p.pa * 0.30;
      ctx.beginPath();
      ctx.moveTo(52.4, 52.7);
      ctx.bezierCurveTo(52.4, 52.7, 27.8, 44.3, 25.7, 21.7);
      ctx.bezierCurveTo(25.7, 21.7, 29.6, 36.6, 40.1, 44.4);
      ctx.bezierCurveTo(50.6, 52.3, 52.4, 52.7, 52.4, 52.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // stingray/Path
      ctx.beginPath();
      ctx.moveTo(58.8, 49.0);
      ctx.bezierCurveTo(58.8, 49.0, 62.3, 23.3, 43.0, 11.3);
      ctx.bezierCurveTo(43.0, 11.3, 54.6, 21.5, 57.0, 34.4);
      ctx.bezierCurveTo(59.3, 47.3, 58.8, 49.0, 58.8, 49.0);
      ctx.closePath();
      ctx.fill();
	  
	  updatePulse();
  
	}

	
	
	function updatePulse(){
		var y = thePulse[0].pl;
		var d = thePulse[0].pd;
		var a = thePulse[0].pa;
		
		if (a < 1) {
			thePulse[0].pa = a + a + .0001;
		} else if (a > 1) {
			thePulse[0].pa = 1;
		}
		
		if (d == 0){
			y -= 1;
			thePulse[0].pl = y;
			
			if (y < 1){
				thePulse[0].pd = 1;
			}
			 
		} else if (d == 1) {
			y += 1;
			thePulse[0].pl = y;
			
			if (y > 20){
				thePulse[0].pd = 0;
			}
			
		} else {
			  console.log(y);
		}
		

	}

setInterval(function(){drawRay(ctx)},60);
}
	

function drawIris(ctx) {
      var gradient;
      ctx.beginPath();
      ctx.moveTo(2.0, 2.0);
      ctx.bezierCurveTo(156.0, 2.0, 346.8, 109.2, 346.8, 218.4);
      ctx.bezierCurveTo(346.8, 268.8, 324.5, 282.9, 324.5, 282.9);
      ctx.bezierCurveTo(324.5, 282.9, 327.8, 190.9, 199.6, 190.9);
      ctx.bezierCurveTo(71.3, 190.9, 2.0, 260.1, 2.0, 260.1);
      ctx.lineTo(2.0, 2.0);
      ctx.closePath();

      gradient = ctx.createLinearGradient(283.9, 324.0, -18.0, 22.0);
      gradient.addColorStop(0.00, "rgb(153, 216, 235)");
      gradient.addColorStop(0.16, "rgb(76, 154, 203)");
      gradient.addColorStop(0.32, "rgb(0, 92, 171)");
      gradient.addColorStop(0.44, "rgb(0, 75, 149)");
      gradient.addColorStop(0.61, "rgb(1, 58, 128)");

      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 4.0;
      ctx.strokeStyle = "rgb(1, 58, 128)";
      ctx.stroke();	

	for (var i = 0; i < 8; i++) {
		ctx.translate(324, 281);
		ctx.rotate(-45*(Math.PI/180));
		ctx.translate(-324, -281);
	}

}
	
function updateIris(ctx) {	

		
	var theNewCanvasWidth = window.innerWidth * .9;
	canvas.width = theNewCanvasWidth;
	canvas.height = theNewCanvasWidth;
	
	var newScale = theNewCanvasWidth / 640;
	ctx.scale(newScale,newScale);
	
		ctx.translate(13*count,-(35*count)); //+13 -30
		for (var i = 0; i < 8; i += 1) {
			drawIris(ctx);
			ctx.translate(324, 281);
			ctx.rotate(-45*(Math.PI/180));
			ctx.translate(-324-tl, -281-tl); //126,119
		}
		tl += 12;//23
	
	if (count > 9){
		window.clearInterval(openAperture);
	  //draw(ctx);
	  stingray(ctx);
	} else {
	count += .5;
	}

}