noStroke();

//moon setup
var moonX = 75;
var moonY = -25;


//meteor setup
var meteorX = -10;
var meteorY = random(30,200);
var meteorRadius = random(5,11);
var meteorRadiusChange = random(-0.05,0);
var meteorXChange = meteorRadius*random(2,2.5);
var meteorYChange = random (0.3,1.2);


//draw
draw = function() {
    //background
    background(29, 40, 115);

    //250 twinkling stars
    //I used a spreadheet to generate random star layouts, 
    //and the walking dinosaur constellation showed up randomly =D 
    fill(247, 245, 210);
    
        ellipse(162,290,random(4,5),random(4,5));
        ellipse(78,189,random(4,5),random(4,5));
        ellipse(139,298,random(4,5),random(4,5));
        ellipse(231,271,random(4,5),random(4,5));
        ellipse(92,289,random(4,5),random(4,5));
        ellipse(194,0,random(4,5),random(4,5));
        ellipse(190,160,random(4,5),random(4,5));
        ellipse(299,194,random(4,5),random(4,5));
        ellipse(232,297,random(4,5),random(4,5));
        ellipse(218,167,random(4,5),random(4,5));
        ellipse(283,60,random(2,3),random(2,3));
        ellipse(318,10,random(2,3),random(2,3));
        ellipse(156,-2,random(2,3),random(2,3));
        ellipse(149,18,random(2,3),random(2,3));
        ellipse(180,35,random(3,4),random(3,4));
        ellipse(178,326,random(3,4),random(3,4));
        ellipse(397,291,random(2,3),random(2,3));
        ellipse(140,144,random(3,4),random(3,4));
        ellipse(121,3,random(2,3),random(2,3));
        ellipse(278,198,random(2,3),random(2,3));
        ellipse(318,262,random(2,3),random(2,3));
        ellipse(403,89,random(3,4),random(3,4));
        ellipse(373,342,random(3,4),random(3,4));
        ellipse(285,129,random(3,4),random(3,4));
        ellipse(396,282,random(2,3),random(2,3));
        ellipse(285,186,random(2,3),random(2,3));
        ellipse(37,254,random(3,4),random(3,4));
        ellipse(37,143,random(3,4),random(3,4));
        ellipse(250,119,random(2,3),random(2,3));
        ellipse(209,69,random(2,3),random(2,3));
        ellipse(254,297,random(2,3),random(2,3));
        ellipse(159,261,random(3,4),random(3,4));
        ellipse(6,66,random(3,4),random(3,4));
        ellipse(222,290,random(2,3),random(2,3));
        ellipse(190,238,random(3,4),random(3,4));
        ellipse(108,155,random(3,4),random(3,4));
        ellipse(330,118,random(3,4),random(3,4));
        ellipse(105,238,random(3,4),random(3,4));
        ellipse(263,10,random(2,3),random(2,3));
        ellipse(380,265,random(2,3),random(2,3));
        ellipse(19,275,random(3,4),random(3,4));
        ellipse(201,244,random(3,4),random(3,4));
        ellipse(83,171,random(3,4),random(3,4));
        ellipse(390,98,random(3,4),random(3,4));
        ellipse(58,166,random(3,4),random(3,4));
        ellipse(69,184,random(2,3),random(2,3));
        ellipse(108,296,random(2,3),random(2,3));
        ellipse(5,36,random(2,3),random(2,3));
        ellipse(117,308,random(3,4),random(3,4));
        ellipse(228,249,random(3,4),random(3,4));
        ellipse(340,345,random(2,3),random(2,3));
        ellipse(90,127,random(2,3),random(2,3));
        ellipse(85,177,random(2,3),random(2,3));
        ellipse(135,123,random(3,4),random(3,4));
        ellipse(264,344,random(2,3),random(2,3));
        ellipse(136,53,random(3,4),random(3,4));
        ellipse(270,166,random(2,3),random(2,3));
        ellipse(375,262,random(3,4),random(3,4));
        ellipse(262,228,random(3,4),random(3,4));
        ellipse(167,250,random(3,4),random(3,4));
        ellipse(113,192,random(3,4),random(3,4));
        ellipse(132,340,random(3,4),random(3,4));
        ellipse(100,108,random(3,4),random(3,4));
        ellipse(231,73,random(2,3),random(2,3));
        ellipse(243,252,random(3,4),random(3,4));
        ellipse(49,343,random(2,3),random(2,3));
        ellipse(273,211,random(2,3),random(2,3));
        ellipse(53,54,random(3,4),random(3,4));
        ellipse(86,250,random(2,3),random(2,3));
        ellipse(170,200,random(3,4),random(3,4));
        ellipse(348,198,random(2,3),random(2,3));
        ellipse(304,331,random(3,4),random(3,4));
        ellipse(390,344,random(3,4),random(3,4));
        ellipse(135,126,random(3,4),random(3,4));
        ellipse(193,73,random(2,3),random(2,3));
        ellipse(4,13,random(3,4),random(3,4));
        ellipse(396,27,random(2,3),random(2,3));
        ellipse(368,28,random(3,4),random(3,4));
        ellipse(313,281,random(3,4),random(3,4));
        ellipse(312,147,random(3,4),random(3,4));
        ellipse(125,102,random(1,2),random(1,2));
        ellipse(245,242,random(1,2),random(1,2));
        ellipse(203,346,random(1,2),random(1,2));
        ellipse(240,226,random(1,2),random(1,2));
        ellipse(183,121,random(1,2),random(1,2));
        ellipse(17,51,random(1,2),random(1,2));
        ellipse(180,293,random(1,2),random(1,2));
        ellipse(308,297,random(1,2),random(1,2));
        ellipse(324,27,random(1,2),random(1,2));
        ellipse(94,92,random(1,2),random(1,2));
        ellipse(113,124,random(1,2),random(1,2));
        ellipse(303,313,random(1,2),random(1,2));
        ellipse(240,217,random(1,2),random(1,2));
        ellipse(176,235,random(1,2),random(1,2));
        ellipse(231,328,random(1,2),random(1,2));
        ellipse(187,323,random(1,2),random(1,2));
        ellipse(139,96,random(1,2),random(1,2));
        ellipse(257,282,random(1,2),random(1,2));
        ellipse(353,151,random(1,2),random(1,2));
        ellipse(132,28,random(1,2),random(1,2));
        ellipse(27,88,random(1,2),random(1,2));
        ellipse(330,331,random(1,2),random(1,2));
        ellipse(226,138,random(1,2),random(1,2));
        ellipse(368,149,random(1,2),random(1,2));
        ellipse(375,121,random(1,2),random(1,2));
        ellipse(150,53,random(1,2),random(1,2));
        ellipse(88,310,random(1,2),random(1,2));
        ellipse(5,250,random(1,2),random(1,2));
        ellipse(-1,258,random(1,2),random(1,2));
        ellipse(220,265,random(1,2),random(1,2));
        ellipse(305,316,random(1,2),random(1,2));
        ellipse(-2,202,random(1,2),random(1,2));
        ellipse(51,297,random(1,2),random(1,2));
        ellipse(93,317,random(1,2),random(1,2));
        ellipse(148,178,random(1,2),random(1,2));
        ellipse(244,183,random(1,2),random(1,2));
        ellipse(170,310,random(1,2),random(1,2));
        ellipse(128,350,random(1,2),random(1,2));
        ellipse(370,248,random(1,2),random(1,2));
        ellipse(332,-3,random(1,2),random(1,2));
        ellipse(128,153,random(1,2),random(1,2));
        ellipse(211,328,random(1,2),random(1,2));
        ellipse(266,71,random(1,2),random(1,2));
        ellipse(41,179,random(1,2),random(1,2));
        ellipse(209,343,random(1,2),random(1,2));
        ellipse(347,205,random(1,2),random(1,2));
        ellipse(319,41,random(1,2),random(1,2));
        ellipse(308,206,random(1,2),random(1,2));
        ellipse(-2,202,random(1,2),random(1,2));
        ellipse(369,193,random(1,2),random(1,2));
        ellipse(169,102,random(1,2),random(1,2));
        ellipse(188,162,random(1,2),random(1,2));
        ellipse(352,207,random(1,2),random(1,2));
        ellipse(246,322,random(1,2),random(1,2));
        ellipse(323,272,random(1,2),random(1,2));
        ellipse(314,193,random(1,2),random(1,2));
        ellipse(115,80,random(1,2),random(1,2));
        ellipse(221,263,random(1,2),random(1,2));
        ellipse(304,169,random(1,2),random(1,2));
        ellipse(316,52,random(1,2),random(1,2));
        ellipse(64,55,random(1,2),random(1,2));
        ellipse(294,343,random(1,2),random(1,2));
        ellipse(62,224,random(1,2),random(1,2));
        ellipse(153,108,random(1,2),random(1,2));
        ellipse(229,135,random(1,2),random(1,2));
        ellipse(112,229,random(1,2),random(1,2));
        ellipse(144,335,random(1,2),random(1,2));
        ellipse(103,154,random(1,2),random(1,2));
        ellipse(54,214,random(1,2),random(1,2));
        ellipse(335,314,random(1,2),random(1,2));
        ellipse(396,298,random(1,2),random(1,2));
        ellipse(78,57,random(1,2),random(1,2));
        ellipse(293,66,random(1,2),random(1,2));
        ellipse(65,114,random(1,2),random(1,2));
        ellipse(246,92,random(1,2),random(1,2));
        ellipse(152,274,random(1,2),random(1,2));
        ellipse(303,208,random(1,2),random(1,2));
        ellipse(138,217,random(1,2),random(1,2));
        ellipse(52,248,random(1,2),random(1,2));
        ellipse(53,302,random(1,2),random(1,2));
        ellipse(215,343,random(1,2),random(1,2));
        ellipse(256,134,random(1,2),random(1,2));
        ellipse(99,49,random(1,2),random(1,2));
        ellipse(381,327,random(1,2),random(1,2));
        ellipse(312,41,random(1,2),random(1,2));
        ellipse(171,315,random(1,2),random(1,2));
        ellipse(396,184,random(1,2),random(1,2));
        ellipse(227,145,random(1,2),random(1,2));
        ellipse(41,182,random(1,2),random(1,2));
        ellipse(394,41,random(1,2),random(1,2));
        ellipse(174,98,random(1,2),random(1,2));
        ellipse(395,300,random(1,2),random(1,2));
        ellipse(136,235,random(1,2),random(1,2));
        ellipse(288,288,random(1,2),random(1,2));
        ellipse(76,27,random(1,2),random(1,2));
        ellipse(0,333,random(1,2),random(1,2));
        ellipse(189,102,random(1,2),random(1,2));
        ellipse(6,52,random(1,2),random(1,2));
        ellipse(-2,269,random(1,2),random(1,2));
        ellipse(291,43,random(1,2),random(1,2));
        ellipse(67,2,random(1,2),random(1,2));
        ellipse(198,197,random(1,2),random(1,2));
        ellipse(113,308,random(1,2),random(1,2));
        ellipse(101,87,random(1,2),random(1,2));
        ellipse(276,198,random(1,2),random(1,2));
        ellipse(80,254,random(1,2),random(1,2));
        ellipse(79,268,random(1,2),random(1,2));
        ellipse(40,108,random(1,2),random(1,2));
        ellipse(188,133,random(1,2),random(1,2));
        ellipse(392,47,random(1,2),random(1,2));
        ellipse(244,188,random(1,2),random(1,2));
        ellipse(372,154,random(1,2),random(1,2));
        ellipse(20,189,random(1,2),random(1,2));
        ellipse(127,50,random(1,2),random(1,2));
        ellipse(92,183,random(1,2),random(1,2));
        ellipse(191,36,random(1,2),random(1,2));
        ellipse(280,260,random(1,2),random(1,2));
        ellipse(293,82,random(1,2),random(1,2));
        ellipse(363,338,random(1,2),random(1,2));
        ellipse(328,310,random(1,2),random(1,2));
        ellipse(151,3,random(1,2),random(1,2));
        ellipse(292,45,random(1,2),random(1,2));
        ellipse(143,312,random(1,2),random(1,2));
        ellipse(204,109,random(1,2),random(1,2));
        ellipse(308,67,random(1,2),random(1,2));
        ellipse(240,168,random(1,2),random(1,2));
        ellipse(261,25,random(1,2),random(1,2));
        ellipse(270,65,random(1,2),random(1,2));
        ellipse(101,52,random(1,2),random(1,2));
        ellipse(315,313,random(1,2),random(1,2));
        ellipse(169,295,random(1,2),random(1,2));
        ellipse(195,285,random(1,2),random(1,2));
        ellipse(142,311,random(1,2),random(1,2));
        ellipse(196,250,random(1,2),random(1,2));
        ellipse(342,119,random(1,2),random(1,2));
        ellipse(53,44,random(1,2),random(1,2));
        ellipse(361,122,random(1,2),random(1,2));
        ellipse(308,94,random(1,2),random(1,2));
        ellipse(12,273,random(1,2),random(1,2));
        ellipse(186,49,random(1,2),random(1,2));
        ellipse(141,301,random(1,2),random(1,2));
        ellipse(388,30,random(1,2),random(1,2));
        ellipse(382,118,random(1,2),random(1,2));
        ellipse(-1,193,random(1,2),random(1,2));
        ellipse(397,123,random(1,2),random(1,2));
        ellipse(230,131,random(1,2),random(1,2));
        ellipse(326,203,random(1,2),random(1,2));
        ellipse(385,153,random(1,2),random(1,2));
        ellipse(248,279,random(1,2),random(1,2));
        ellipse(193,45,random(1,2),random(1,2));
        ellipse(5,17,random(1,2),random(1,2));
        ellipse(41,280,random(1,2),random(1,2));
        ellipse(210,21,random(1,2),random(1,2));
        ellipse(363,117,random(1,2),random(1,2));
        ellipse(114,208,random(1,2),random(1,2));
        ellipse(57,241,random(1,2),random(1,2));
        ellipse(255,196,random(1,2),random(1,2));
        ellipse(304,349,random(1,2),random(1,2));
        ellipse(200,262,random(1,2),random(1,2));
        ellipse(161,64,random(1,2),random(1,2));
        ellipse(280,240,random(1,2),random(1,2));
        ellipse(325,87,random(1,2),random(1,2));
        ellipse(236,47,random(1,2),random(1,2));
        ellipse(338,235,random(1,2),random(1,2));
        ellipse(293,327,random(1,2),random(1,2));
        ellipse(216,201,random(1,2),random(1,2));
        ellipse(388,176,random(1,2),random(1,2));
        ellipse(46,175,random(1,2),random(1,2));
        ellipse(69,56,random(1,2),random(1,2));
        ellipse(302,154,random(1,2),random(1,2));



    //moon glows
    //wide faint glow
        fill(255, 255, 255,15);
        
            ellipse(moonX,moonY,120,120);
    
        //medium glow
        fill(255, 255, 255,50);
        
            ellipse(moonX,moonY,95,95);
        
        //small bright glow
        fill(255, 255, 255,130);
        
            ellipse(moonX,moonY,86,86);
        
    //the moon itself
    fill(255, 254, 242);
    
        ellipse(moonX,moonY,80,80);


        //lighter craters
        var moonShade1 = -8;
        fill(250+moonShade1, 248+moonShade1, 225+moonShade1,170);
        
            ellipse(moonX-24,moonY-3,21,26);
            ellipse(moonX-8,moonY-14,28,28);
            ellipse(moonX+12,moonY-16,24,24);
            ellipse(moonX-13,moonY+12,21,23);
            ellipse(moonX-16,moonY+23,13,12);
    
        //darker craters
        var moonShade2 = -16;
        fill(250+moonShade2, 248+moonShade2, 225+moonShade2,180);
    
            ellipse(moonX-13,moonY-21,18,16);
            ellipse(moonX-1,moonY-11,20,18);
        
            ellipse(moonX+17,moonY-23,12,13);
            ellipse(moonX+25,moonY-9,11,12);
            ellipse(moonX+14,moonY-2,10,10);
        
            ellipse(moonX-20,moonY+11,17,18);
            ellipse(moonX-5,moonY+23,13,12);
        
    
    
    //meteor
    fill(230, 215, 0);
    
        ellipse(meteorX, meteorY, random(meteorRadius*1.5,meteorRadius*1.8), random(meteorRadius*0.8,meteorRadius*1.2));

    fill(252, 249, 210);
    
        ellipse(meteorX, meteorY, random(meteorRadius*1,meteorRadius*1.3), random(meteorRadius*0.8,meteorRadius*1.2));
        
    //meteor trails
        //short trail    
        fill(255, 251, 130);
        
        for(var i =0; i < 0.4*meteorRadius; i++){
            ellipse(meteorX-meteorRadius*random(-0.3,2.0), meteorY-meteorRadius*random(-0.5,0.5), random(3,5), random(1,4));
        }
    
        //medium trail    
        fill(204, 203, 182);
        
        for(var i =0; i < 0.75*meteorRadius; i++){
            ellipse(meteorX-meteorRadius*random(-0.5,8), meteorY-meteorRadius*random(-0.4,0.4), random(3,5), random(1,4));
        }
    
        //long trail    
        fill(252, 240, 65);
        
        for(var i =0; i < 0.75*meteorRadius; i++){
            ellipse(meteorX-meteorRadius*random(-0.5,12), meteorY-meteorRadius*random(-0.2,0.2), random(3,5), random(1,4));
        }

   
    
    //hills
    fill(20, 51, 64);
    
        curve(983,479,112,400,450,400,-144,2000);
    
    fill(21, 55, 71);
    
        curve(957,442,-75,400,250,400,1015,1514);
    
    
    //moon animation
    moonX += 0.055;
    moonY += 0.1;
    
        if(moonY >= 360){
            moonY = -60;
            moonX = random(60,180);
        }
    
    //meteor animation
    meteorX += meteorXChange;
    meteorY += meteorYChange;
    meteorRadius += meteorRadiusChange;
    
    
        if(meteorX >= 420+(meteorRadius*random(20,400))){
            meteorX = -10;
            meteorY = random(30,200);
            meteorRadius = random(5,11);
            meteorRadiusChange = random(-0.05,0);
            meteorXChange = meteorRadius*random(1.5,2);
            meteorYChange = random (0.3,1.2);
        }
    
    
};



