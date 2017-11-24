export var CoordTrans = {
    num: {
        bj: {
            num: Math.sin(Math.PI / 4),
            num2: Math.sin(Math.PI / 6)
        },
        gz: {
            num: Math.sin(Math.PI / 4),
            num2: Math.sin(Math.PI / 4)
        },
        sz: {
            num: Math.sin(Math.PI / 4),
            num2: Math.sin(Math.PI / 4)
        },
        sh: {
            num: Math.sin(Math.PI / 4),
            num2: Math.sin(Math.PI / 4)
        }
    },
    //此处为配准使用的参考点
    correct_pts: {
        bj: [{
            j: 116.305687,
            w: 39.990912,
            utm_x: 12947230.73,
            utm_y: 4836903.65,
            x: 630412,
            y: 547340
        },
        {
            j: 116.381837,
            w: 40.000198,
            utm_x: 12955707.8,
            utm_y: 4838247.62,
            x: 667412,
            y: 561832
        },
        {
            j: 116.430651,
            w: 39.995216,
            utm_x: 12961141.81,
            utm_y: 4837526.55,
            x: 686556,
            y: 573372
        },
        {
            j: 116.474111,
            w: 39.976323,
            utm_x: 12965979.81,
            utm_y: 4834792.55,
            x: 697152,
            y: 586816
        },
        {
            j: 116.280328,
            w: 39.953159,
            utm_x: 12944407.75,
            utm_y: 4831441.53,
            x: 603272,
            y: 549976
        },
        {
            j: 116.316117,
            w: 39.952496,
            utm_x: 12948391.8,
            utm_y: 4831345.64,
            x: 618504,
            y: 557872
        },
        {
            j: 116.350477,
            w: 39.938107,
            utm_x: 12952216.78,
            utm_y: 4829264.65,
            x: 627044,
            y: 568220
        },
        {
            j: 116.432025,
            w: 39.947158,
            utm_x: 12961294.76,
            utm_y: 4830573.59,
            x: 666280,
            y: 584016
        },
        {
            j: 116.46873,
            w: 39.949516,
            utm_x: 12965380.79,
            utm_y: 4830914.63,
            x: 683328,
            y: 591444
        },
        {
            j: 116.280077,
            w: 39.913823,
            utm_x: 12944379.8,
            utm_y: 4825753.62,
            x: 586150,
            y: 558552
        },
        {
            j: 116.308625,
            w: 39.91374,
            utm_x: 12947557.79,
            utm_y: 4825741.62,
            x: 598648,
            y: 564732
        },
        {
            j: 116.369853,
            w: 39.912979,
            utm_x: 12954373.73,
            utm_y: 4825631.62,
            x: 624561,
            y: 578039
        },
        {
            j: 116.433552,
            w: 39.914694,
            utm_x: 12961464.75,
            utm_y: 4825879.53,
            x: 652972,
            y: 591348
        },
        {
            j: 116.457034,
            w: 39.914273,
            utm_x: 12964078.78,
            utm_y: 4825818.67,
            x: 663028,
            y: 596444
        },
        {
            j: 116.490927,
            w: 39.914127,
            utm_x: 12967851.77,
            utm_y: 4825797.57,
            x: 677968,
            y: 604188
        },
        {
            j: 116.483839,
            w: 39.877198,
            utm_x: 12967062.73,
            utm_y: 4820460.67,
            x: 658596,
            y: 610312
        },
        {
            j: 116.405777,
            w: 39.864461,
            utm_x: 12958372.82,
            utm_y: 4818620.62,
            x: 619256,
            y: 596088
        },
        {
            j: 116.35345,
            w: 39.859774,
            utm_x: 12952547.74,
            utm_y: 4817943.6,
            x: 594633,
            y: 585851
        },
        {
            j: 116.403818,
            w: 39.9141,
            utm_x: 12958154.74,
            utm_y: 4825793.66,
            x: 639699,
            y: 585226
        },
        {
            j: 116.318111,
            w: 39.891101,
            utm_x: 12948613.78,
            utm_y: 4822469.56,
            x: 592856,
            y: 571480
        },
        {
            j: 116.413047,
            w: 39.907238,
            utm_x: 12959182.12,
            utm_y: 4824801.76,
            x: 640680,
            y: 588704
        },
        {
            j: 116.390843,
            w: 39.906113,
            utm_x: 12956710.35,
            utm_y: 4824639.16,
            x: 630620,
            y: 584108
        },
        {
            j: 116.446527,
            w: 39.899438,
            utm_x: 12962909.14,
            utm_y: 4823674.4,
            x: 651752,
            y: 597416
        },
        {
            j: 116.388665,
            w: 39.95527,
            utm_x: 12956467.9,
            utm_y: 4831746.87,
            x: 650656,
            y: 572800
        },
        {
            j: 116.398343,
            w: 39.939704,
            utm_x: 12957545.26,
            utm_y: 4829495.6,
            x: 648036,
            y: 578452
        },
        {
            j: 116.355101,
            w: 39.973581,
            utm_x: 12952731.53,
            utm_y: 4834395.82,
            x: 643268,
            y: 560944
        },
        {
            j: 116.380727,
            w: 39.88464,
            utm_x: 12955584.23,
            utm_y: 4821535.94,
            x: 616920,
            y: 586496
        },
        {
            j: 116.360843,
            w: 39.946452,
            utm_x: 12953370.73,
            utm_y: 4830471.48,
            x: 635293,
            y: 568765
        },
        {
            j: 116.340955,
            w: 39.973421,
            utm_x: 12951156.79,
            utm_y: 4834372.67,
            x: 638420,
            y: 558632
        },
        {
            j: 116.322585,
            w: 40.023941,
            utm_x: 12949111.83,
            utm_y: 4841684.79,
            x: 652135,
            y: 543802
        },
        {
            j: 116.356486,
            w: 39.883341,
            utm_x: 12952885.71,
            utm_y: 4821348.24,
            x: 606050,
            y: 581443
        },
        {
            j: 116.339592,
            w: 39.992259,
            utm_x: 12951005.06,
            utm_y: 4837098.59,
            x: 645664,
            y: 554400
        },
        {
            j: 116.3778,
            w: 39.86392,
            utm_x: 12955258.4,
            utm_y: 4818542.48,
            x: 606848,
            y: 590328
        },
        {
            j: 116.377354,
            w: 39.964124,
            utm_x: 12955208.75,
            utm_y: 4833027.64,
            x: 649911,
            y: 568581
        },
        {
            j: 116.361837,
            w: 39.963897,
            utm_x: 12953481.39,
            utm_y: 4832994.8,
            x: 643286,
            y: 565175
        },
        {
            j: 116.441397,
            w: 39.939403,
            utm_x: 12962338.06,
            utm_y: 4829452.07,
            x: 666772,
            y: 587728
        },
        {
            j: 116.359176,
            w: 40.006631,
            utm_x: 12953185.16,
            utm_y: 4839178.78,
            x: 660440,
            y: 555411
        }
        ],
        sz: [{
            'w': 22.498861,
            'utm_x': 12677279.029193671,
            'utm_y': 2555027.9501714734,
            'j': 113.880696,
            'y': 1104472,
            'x': 947240
        },
        {
            'w': 22.500706,
            'utm_x': 12683920.978881944,
            'utm_y': 2555248.973138607,
            'j': 113.940361,
            'y': 1122320,
            'x': 974864
        },
        {
            'w': 22.576848,
            'utm_x': 12675897.984563945,
            'utm_y': 2564373.058056766,
            'j': 113.86829,
            'y': 1074048,
            'x': 979136
        },
        {
            'w': 22.55689,
            'utm_x': 12680064.05051775,
            'utm_y': 2561981.0013635466,
            'j': 113.905714,
            'y': 1092484,
            'x': 986240
        },
        {
            'w': 22.58066,
            'utm_x': 12678671.98513852,
            'utm_y': 2564829.983373251,
            'j': 113.893209,
            'y': 1080528,
            'x': 992088
        },
        {
            'w': 22.595751,
            'utm_x': 12678298.949465925,
            'utm_y': 2566638.9913895614,
            'j': 113.889858,
            'y': 1074484,
            'x': 997960
        },
        {
            'w': 22.557499,
            'utm_x': 12684523.001238672,
            'utm_y': 2562053.9875916084,
            'j': 113.945769,
            'y': 1104696,
            'x': 1004564
        },
        {
            'w': 22.648419,
            'utm_x': 12676422.97299485,
            'utm_y': 2572954.0513219936,
            'j': 113.873006,
            'y': 1051384,
            'x': 1015916
        },
        {
            'w': 22.562664,
            'utm_x': 12690460.958807131,
            'utm_y': 2562673.0054078405,
            'j': 113.99911,
            'y': 1119860,
            'x': 1030228
        },
        {
            'w': 22.646618,
            'utm_x': 12683008.037804369,
            'utm_y': 2572738.0652955617,
            'j': 113.93216,
            'y': 1070324,
            'x': 1041496
        },
        {
            'w': 22.571091,
            'utm_x': 12695789.992135335,
            'utm_y': 2563683.019582462,
            'j': 114.046981,
            'y': 1131924,
            'x': 1055628
        },
        {
            'w': 22.704467,
            'utm_x': 12682276.994753957,
            'utm_y': 2579677.075645295,
            'j': 113.925593,
            'y': 1048536,
            'x': 1066348
        },
        {
            'w': 22.547152,
            'utm_x': 12702917.96800879,
            'utm_y': 2560813.9850610085,
            'j': 114.111012,
            'y': 1160352,
            'x': 1072596
        },
        {
            'w': 22.546192,
            'utm_x': 12704502.952164687,
            'utm_y': 2560698.9417545213,
            'j': 114.12525,
            'y': 1165256,
            'x': 1078452
        },
        {
            'w': 22.5714,
            'utm_x': 12702350.00978689,
            'utm_y': 2563720.0558210905,
            'j': 114.10591,
            'y': 1150556,
            'x': 1081960
        },
        {
            'w': 22.555004,
            'utm_x': 12704883.001041513,
            'utm_y': 2561754.9738317807,
            'j': 114.128664,
            'y': 1163304,
            'x': 1084172
        },
        {
            'w': 22.551925,
            'utm_x': 12706255.028694374,
            'utm_y': 2561385.978019464,
            'j': 114.140989,
            'y': 1168216,
            'x': 1088116
        },
        {
            'w': 22.693756,
            'utm_x': 12690318.02302569,
            'utm_y': 2578392.0635360866,
            'j': 113.997826,
            'y': 1075100,
            'x': 1092860
        },
        {
            'w': 22.573769,
            'utm_x': 12705731.042149788,
            'utm_y': 2564004.003107545,
            'j': 114.136282,
            'y': 1159404,
            'x': 1096572
        },
        {
            'w': 22.583238,
            'utm_x': 12706369.021093281,
            'utm_y': 2565139.002548978,
            'j': 114.142013,
            'y': 1157896,
            'x': 1103632
        },
        {
            'w': 22.605844,
            'utm_x': 12704694.980375737,
            'utm_y': 2567848.984570506,
            'j': 114.126975,
            'y': 1145540,
            'x': 1107972
        },
        {
            'w': 22.637228,
            'utm_x': 12702545.043656897,
            'utm_y': 2571612.010208761,
            'j': 114.107662,
            'y': 1128764,
            'x': 1114460
        },
        {
            'w': 22.62496,
            'utm_x': 12707132.013185183,
            'utm_y': 2570140.9407190788,
            'j': 114.148867,
            'y': 1145732,
            'x': 1127028
        },
        {
            'w': 22.644524,
            'utm_x': 12707016.01701364,
            'utm_y': 2572486.9446672536,
            'j': 114.147825,
            'y': 1138800,
            'x': 1135876
        },
        {
            'w': 22.640188,
            'utm_x': 12711515.0431873,
            'utm_y': 2571966.966986786,
            'j': 114.18824,
            'y': 1152692,
            'x': 1151836
        },
        {
            'w': 22.59807,
            'utm_x': 12720011.039168343,
            'utm_y': 2566916.995355996,
            'j': 114.26456,
            'y': 1191212,
            'x': 1165180
        },
        {
            'w': 22.668221,
            'utm_x': 12714081.987256048,
            'utm_y': 2575329.007304823,
            'j': 114.211299,
            'y': 1150576,
            'x': 1175404
        },
        {
            'w': 22.702591,
            'utm_x': 12717292.031020584,
            'utm_y': 2579452.0022288463,
            'j': 114.240135,
            'y': 1148204,
            'x': 1204600
        },
        {
            'w': 22.731786,
            'utm_x': 12717795.9798388,
            'utm_y': 2582955.0308636553,
            'j': 114.244662,
            'y': 1139532,
            'x': 1220540
        },
        {
            'w': 22.727494,
            'utm_x': 12720675.957721734,
            'utm_y': 2582439.9980541077,
            'j': 114.270533,
            'y': 1148992,
            'x': 1230084
        },
        {
            'w': 22.716335,
            'utm_x': 12725500.040345404,
            'utm_y': 2581101.0132384477,
            'j': 114.313868,
            'y': 1166316,
            'x': 1244102
        }
        ],
        gz: [{
            j: 113.335098,
            w: 23.147289,
            utm_x: 12616542.68,
            utm_y: 2632892.7,
            x: 1129109,
            y: 1073920
        },
        {
            j: 113.320932,
            w: 23.146956,
            utm_x: 12614965.71,
            utm_y: 2632852.62,
            x: 1125620,
            y: 1071640
        },
        {
            j: 113.321435,
            w: 23.140119,
            utm_x: 12615021.7,
            utm_y: 2632029.65,
            x: 1124032,
            y: 1072882
        },
        {
            j: 113.321471,
            w: 23.119165,
            utm_x: 12615025.71,
            utm_y: 2629507.68,
            x: 1118932,
            y: 1076530
        },
        {
            j: 113.340201,
            w: 23.118616,
            utm_x: 12617110.75,
            utm_y: 2629441.61,
            x: 1123238,
            y: 1079667
        },
        {
            j: 113.358068,
            w: 23.116323,
            utm_x: 12619099.71,
            utm_y: 2629165.66,
            x: 1126968,
            y: 1083116
        },
        {
            j: 113.357529,
            w: 23.131271,
            utm_x: 12619039.71,
            utm_y: 2630964.68,
            x: 1130508,
            y: 1080440
        },
        {
            j: 113.365811,
            w: 23.150595,
            utm_x: 12619961.67,
            utm_y: 2633290.66,
            x: 1137205,
            y: 1078567
        },
        {
            j: 113.294145,
            w: 23.118467,
            utm_x: 12611983.76,
            utm_y: 2629423.68,
            x: 1112245,
            y: 1072043
        },
        {
            j: 113.28615,
            w: 23.121525,
            utm_x: 12611093.75,
            utm_y: 2629791.7,
            x: 1110993,
            y: 1070197
        },
        {
            j: 113.307152,
            w: 23.055497,
            utm_x: 12613431.71,
            utm_y: 2621847.21,
            x: 1100144,
            y: 1085123
        },
        {
            j: 113.333445,
            w: 23.052687,
            utm_x: 12616358.66,
            utm_y: 2621509.2,
            x: 1105784,
            y: 1089948
        },
        {
            j: 113.347476,
            w: 23.048755,
            utm_x: 12617920.6,
            utm_y: 2621036.24,
            x: 1108099,
            y: 1093064
        },
        {
            j: 113.385774,
            w: 23.036574,
            utm_x: 12622183.96,
            utm_y: 2619571.12,
            x: 1113850,
            y: 1101834
        },
        {
            j: 113.364185,
            w: 22.89798,
            utm_x: 12619780.66,
            utm_y: 2602910.64,
            x: 1073186,
            y: 1123374
        },
        {
            j: 113.404577,
            w: 22.906481,
            utm_x: 12624277.13,
            utm_y: 2603932.06,
            x: 1084888,
            y: 1128692
        },
        {
            j: 113.430856,
            w: 22.913156,
            utm_x: 12627202.52,
            utm_y: 2604734.12,
            x: 1092892,
            y: 1131761
        },
        {
            j: 113.384554,
            w: 22.933021,
            utm_x: 12622048.15,
            utm_y: 2607121.32,
            x: 1086975,
            y: 1120403
        },
        {
            j: 113.263566,
            w: 23.146333,
            utm_x: 12608579.68,
            utm_y: 2632777.63,
            x: 1111742,
            y: 1062098
        },
        {
            j: 113.239213,
            w: 23.152996,
            utm_x: 12605868.69,
            utm_y: 2633579.69,
            x: 1107616,
            y: 1056740
        },
        {
            j: 113.253865,
            w: 23.131628,
            utm_x: 12607499.76,
            utm_y: 2631007.65,
            x: 1105912,
            y: 1062966
        },
        {
            j: 113.240767,
            w: 23.088434,
            utm_x: 12606041.68,
            utm_y: 2625809.7,
            x: 1092270,
            y: 1068184
        },
        {
            j: 113.279628,
            w: 23.088284,
            utm_x: 12610367.72,
            utm_y: 2625791.65,
            x: 1101412,
            y: 1074883
        },
        {
            j: 113.462271,
            w: 23.107058,
            utm_x: 12630699.66,
            utm_y: 2628050.7,
            x: 1148752,
            y: 1101736
        },
        {
            j: 113.401618,
            w: 23.052957,
            utm_x: 12623947.73,
            utm_y: 2621541.68,
            x: 1121925,
            y: 1101535
        },
        {
            j: 113.422504,
            w: 23.05905,
            utm_x: 12626272.77,
            utm_y: 2622274.61,
            x: 1128470,
            y: 1104049
        },
        {
            j: 113.362506,
            w: 23.107149,
            utm_x: 12619593.75,
            utm_y: 2628061.65,
            x: 1125835,
            y: 1085505
        },
        {
            j: 113.419629,
            w: 23.143176,
            utm_x: 12625952.73,
            utm_y: 2632397.61,
            x: 1148133,
            y: 1089052
        },
        {
            j: 113.23315,
            w: 23.062251,
            utm_x: 12605193.75,
            utm_y: 2622659.67,
            x: 1084184,
            y: 1071368
        },
        {
            j: 113.314525,
            w: 23.101412,
            utm_x: 12614252.48,
            utm_y: 2627371.29,
            x: 1113011,
            y: 1078426
        },
        {
            j: 113.307947,
            w: 23.131369,
            utm_x: 12613520.21,
            utm_y: 2630976.47,
            x: 1118622,
            y: 1072198
        }
        ],
        sh: [{
            j: 121.524411,
            w: 31.245875,
            utm_x: 13528182.75,
            utm_y: 3642354.51,
            x: 1086581,
            y: 1065728
        },
        {
            j: 121.419229,
            w: 31.244887,
            utm_x: 13516473.81,
            utm_y: 3642226.51,
            x: 1032616,
            y: 1029148
        },
        {
            j: 121.405637,
            w: 31.237871,
            utm_x: 13514960.74,
            utm_y: 3641317.54,
            x: 1022724,
            y: 1027244
        },
        {
            j: 121.415348,
            w: 31.222879,
            utm_x: 13516041.78,
            utm_y: 3639375.47,
            x: 1018548,
            y: 1036980
        },
        {
            j: 121.422561,
            w: 31.224261,
            utm_x: 13516844.73,
            utm_y: 3639554.48,
            x: 1022976,
            y: 1038908
        },
        {
            j: 121.412581,
            w: 31.204148,
            utm_x: 13515733.75,
            utm_y: 3636949.48,
            x: 1006568,
            y: 1043696
        },
        {
            j: 121.443025,
            w: 31.206202,
            utm_x: 13519122.8,
            utm_y: 3637215.49,
            x: 1022656,
            y: 1053704
        },
        {
            j: 121.524061,
            w: 31.246917,
            utm_x: 13528143.79,
            utm_y: 3642489.52,
            x: 1082052,
            y: 1064124
        },
        {
            j: 121.529343,
            w: 31.217769,
            utm_x: 13528731.78,
            utm_y: 3638713.59,
            x: 1072696,
            y: 1079064
        },
        {
            j: 121.530268,
            w: 31.210341,
            utm_x: 13528834.75,
            utm_y: 3637751.53,
            x: 1068748,
            y: 1082416
        },
        {
            j: 121.511601,
            w: 31.227303,
            utm_x: 13526756.73,
            utm_y: 3639948.53,
            x: 1069276,
            y: 1068716
        },
        {
            j: 121.4966,
            w: 31.243614,
            utm_x: 13525086.81,
            utm_y: 3642061.58,
            x: 1071220,
            y: 1056805
        },
        {
            j: 121.485021,
            w: 31.26138,
            utm_x: 13523797.82,
            utm_y: 3644363.54,
            x: 1075708,
            y: 1045540
        },
        {
            j: 121.465114,
            w: 31.278803,
            utm_x: 13521581.76,
            utm_y: 3646621.48,
            x: 1073740,
            y: 1031268
        },
        {
            j: 121.454784,
            w: 31.266566,
            utm_x: 13520431.82,
            utm_y: 3645035.58,
            x: 1063591,
            y: 1033191
        },
        {
            j: 121.46851,
            w: 31.24951,
            utm_x: 13521959.81,
            utm_y: 3642825.48,
            x: 1060200,
            y: 1044520
        },
        {
            j: 121.446384,
            w: 31.248422,
            utm_x: 13519496.73,
            utm_y: 3642684.51,
            x: 1048784,
            y: 1037750
        },
        {
            j: 121.509499,
            w: 31.246469,
            utm_x: 13526522.73,
            utm_y: 3642431.47,
            x: 1079309,
            y: 1060105
        },
        {
            j: 121.481643,
            w: 31.283943,
            utm_x: 13523421.78,
            utm_y: 3647287.68,
            x: 1087096,
            y: 1035304
        },
        {
            j: 121.508054,
            w: 31.280609,
            utm_x: 13526361.87,
            utm_y: 3646855.56,
            x: 1098432,
            y: 1045648
        },
        {
            j: 121.493854,
            w: 31.19121,
            utm_x: 13524781.12,
            utm_y: 3635274.07,
            x: 1039624,
            y: 1077288
        },
        {
            j: 121.500079,
            w: 31.185541,
            utm_x: 13525474.09,
            utm_y: 3634540.04,
            x: 1039960,
            y: 1081640
        },
        {
            j: 121.484482,
            w: 31.202846,
            utm_x: 13523737.82,
            utm_y: 3636780.87,
            x: 1041388,
            y: 1069232
        },
        {
            j: 121.480877,
            w: 31.189587,
            utm_x: 13523336.51,
            utm_y: 3635063.92,
            x: 1032484,
            y: 1073640
        },
        {
            j: 121.502652,
            w: 31.195209,
            utm_x: 13525760.52,
            utm_y: 3635791.9,
            x: 1046384,
            y: 1078728
        }
        ]
    },
    getLnglatIndex: function (city, x, y) {
        var leftTop = 0;
        var rightBottom = 0;
        var minDis = 10000000,
            secMinDis = 1000000000;
        for (var i = 0; i < this.correct_pts[city].length; i++) {
            var dis = this.getDis(this.correct_pts[city][i].x, this.correct_pts[city][i].y, x, y);
            if (dis < secMinDis) {
                if (dis < minDis) {
                    secMinDis = minDis;
                    minDis = dis;
                    rightBottom = leftTop;
                    leftTop = i;
                } else {

                    rightBottom = i;
                }
            }
        }
        return {
            lt: leftTop,
            rb: rightBottom
        };
    },
    getOMapIndex_mm: function (city, utm_x, utm_y) {
        var leftTop = 0;
        var rightBottom = 0;
        var minDis = 1294723000,
            secMinDis = 1294723000;
        for (var i = 0; i < this.correct_pts[city].length; i++) {
            //alert(correct_pts[i].j +',jgh,'+correct_pts[i].w+',jgh,'+j+',jgh,'+w);
            var dis = this.getDis(this.correct_pts[city][i].utm_x, this.correct_pts[city][i].utm_y, utm_x, utm_y);
            //alert(dis);
            if (dis < secMinDis) {
                if (dis < minDis) {
                    secMinDis = minDis;
                    minDis = dis;
                    rightBottom = leftTop;
                    leftTop = i;
                } else {

                    rightBottom = i;
                }

            }
            //alert(dis +',jgh,'+leftTop+',jgh,'+rightBottom+',jgh,'+minDis+',jgh,'+secMinDis);
        }
        return {
            lt: leftTop,
            rb: rightBottom
        };
    },

    getDis: function (x, y, x1, y1) {
        return Math.abs(x - x1) + Math.abs(y - y1);
    },
    //从标准平面坐标得到地图坐标
    toMap: function (city, x, y) {
        var x2 = (x - y) * this.num[city].num;
        var y2 = (x + y) * this.num[city].num * this.num[city].num2;

        return {
            x: x2,
            y: y2
        };
    },
    //从地图坐标得到标准平面坐标
    fromMap: function (city, x, y) {
        y = y / this.num[city].num2;
        var x2 = (x + y) / (this.num[city].num * 2);
        var y2 = (y - x) / (this.num[city].num * 2);

        return {
            x: x2,
            y: y2
        };
    },
    //得到小范围地图精度
    getDgPix_mm: function (city, index0, index1) {
        //var index0=0;
        //var index1=1;
        var px_1 = this.fromMap(city, this.correct_pts[city][index0].x, this.correct_pts[city][index0].y);
        var px_2 = this.fromMap(city, this.correct_pts[city][index1].x, this.correct_pts[city][index1].y);

        var x_1 = px_1.x,
            y_1 = px_1.y;
        var x_2 = px_2.x,
            y_2 = px_2.y;
        //var dj1=gpsToDegree(correct_pts[index0].j),dw1=gpsToDegree(correct_pts[index0].w);
        //var dj2=gpsToDegree(correct_pts[index1].j),dw2=gpsToDegree(correct_pts[index1].w);
        var dj1 = this.correct_pts[city][index0].utm_x,
            dw1 = this.correct_pts[city][index0].utm_y;
        var dj2 = this.correct_pts[city][index1].utm_x,
            dw2 = this.correct_pts[city][index1].utm_y;
        //alert(dj1+','+dj2+','+dw1+','+dw2+','+x_1+','+x_2+','+y_1+','+y_2);
        var a = Math.abs((dj2 - dj1) * 100000 / (x_2 - x_1));
        var b = Math.abs((dw2 - dw1) * 100000 / (y_2 - y_1));
        //a,b每十万像素对应的经纬度
        //alert(a+',ddddxy,'+b);
        return {
            j: a,
            w: b,
            x: 100000 / a,
            y: 100000 / b
        };
    },
    //从经纬度得到地图像素值,如需将地图坐标转换成经纬则反过来算即可
    //小范围内地图满足线性关系
    getPx_mm: function (city, utm_x, utm_y, index0, index1) {
        //var index0=0;
        //var index1=1;
        var px_src = this.correct_pts[city][index0];
        var gp_src = this.correct_pts[city][index0];
        var dgPix = this.getDgPix_mm(city, index0, index1);
        var px_1 = this.fromMap(city, px_src.x, px_src.y);
        //var dj1=gpsToDegree(gp_src.j),dw1=gpsToDegree(gp_src.w);
        var dj1 = gp_src.utm_x,
            dw1 = gp_src.utm_y;
        //var dj=gpsToDegree(j_arr),dw=gpsToDegree(w_arr);
        var dj = utm_x,
            dw = utm_y;

        var x_1 = px_1.x;
        var y_1 = px_1.y;

        var dj_s = dj - dj1,
            dw_s = dw - dw1;
        var x = dj_s * dgPix.x + x_1;
        var y = -dw_s * dgPix.y + y_1;
        //alert(dgPix.x+',xy,'+dgPix.y);

        var r = this.toMap(city, x, y);
        return r;
    },
    getJw_mm: function (city, x, y, index0, index1) {
        //var index0=0;
        //var index1=1;
        var mappx_src = this.correct_pts[city][index0];
        var gp_src = this.correct_pts[city][index0];
        var dgPix = this.getDgPix_mm(city, index0, index1);

        var px = this.fromMap(city, x, y);
        var px_src = this.fromMap(city, mappx_src.x, mappx_src.y);
        //var dj1=gpsToDegree(gp_src.j),dw1=gpsToDegree(gp_src.w);
        var dj1 = gp_src.utm_x,
            dw1 = gp_src.utm_y;
        //alert(dgPix.x+',xy,'+dgPix.y);

        var x_1 = px_src.x;
        var y_1 = px_src.y;

        var px_s = px.x - x_1,
            py_s = y_1 - px.y;
        //alert(dgPix.x+','+dgPix.y);
        var gp_j = px_s / dgPix.x + dj1;
        var gp_w = py_s / dgPix.y + dw1;
        return {
            lng: gp_j,
            lat: gp_w
        };
        //return {j:degreeToGps(gp_j),w:degreeToGps(gp_w)};
    },
    getOMap_pts: function (city, pts) {
        return this.getOMap_index(city, pts.lng, pts.lat, pts.lt, pts.rb);
    },
    getMapJw_pts: function (city, pts) {
        return this.getMapJw_index(city, pts.lng, 9998336 - pts.lat, pts.lt, pts.rb);
    },
    getOMap_index: function (city, utm_x, utm_y, lt, rb) {
        var index = null;
        if (!lt || !rb) {
            index = this.getOMapIndex_mm(city, utm_x, utm_y);
        } else {
            index = {
                lt: lt,
                rb: rb
            };
        }
        var xy = this.getPx_mm(city, utm_x, utm_y, index.lt, index.rb);
        return {
            x: Math.floor(xy.x),
            y: 9998336 - Math.floor(xy.y),
            lt: index.lt,
            rb: index.rb
        };
    },
    getMapJw_index: function (city, x, y, lt, rb) {
        let index = null;
        if (!lt || !rb) {
            index = this.getLnglatIndex(city, x, y);
        } else {
            index = {
                lt: lt,
                rb: rb
            };
        }
        var lnglat = this.getJw_mm(city, x, y, index.lt, index.rb);
        return {
            lng: lnglat.lng,
            lat: lnglat.lat,
            lt: index.lt,
            rb: index.rb
        };
    }
};