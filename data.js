var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso-al-predio",
      "name": "Ingreso al predio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.26727666037771414,
        "pitch": 0.06842390456877823,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.2759151633937247,
          "pitch": 0.03808075013077428,
          "rotation": 0,
          "target": "1-acceso-vehicular"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-acceso-vehicular",
      "name": "Acceso vehicular",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41677351770586135,
          "pitch": 0.018837783374486605,
          "rotation": 0,
          "target": "3-acceso-vehicular-ii"
        },
        {
          "yaw": 0.4227175308156852,
          "pitch": 0.010753516628968285,
          "rotation": 0,
          "target": "2-acceso-peatonal"
        },
        {
          "yaw": 2.765035521233294,
          "pitch": 0.09849224927446798,
          "rotation": 0,
          "target": "0-ingreso-al-predio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-acceso-peatonal",
      "name": "Acceso peatonal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.297271701629624,
          "pitch": 0.008449195256822861,
          "rotation": 0,
          "target": "4-playn"
        },
        {
          "yaw": 3.1093476913701696,
          "pitch": 0.014853059239905875,
          "rotation": 0,
          "target": "1-acceso-vehicular"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-acceso-vehicular-ii",
      "name": "Acceso vehicular II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2440907509184935,
          "pitch": 0.04678988588923971,
          "rotation": 0,
          "target": "1-acceso-vehicular"
        },
        {
          "yaw": -0.9256563646550866,
          "pitch": -0.002744165376094898,
          "rotation": 0,
          "target": "7-estacionamiento-"
        },
        {
          "yaw": 1.5649536208828279,
          "pitch": 0.04591673502221383,
          "rotation": 0,
          "target": "14-pileta-adaptada-i"
        },
        {
          "yaw": 0.3977946365430647,
          "pitch": 0.040244973136839945,
          "rotation": 0,
          "target": "52-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-playn",
      "name": "Playón",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8401453371747962,
          "pitch": -0.03151611649702346,
          "rotation": 0,
          "target": "2-acceso-peatonal"
        },
        {
          "yaw": -1.4602215902060038,
          "pitch": -0.027763142016492992,
          "rotation": 0,
          "target": "16-pileta-adaptada-iii"
        },
        {
          "yaw": -0.013789045240505615,
          "pitch": 0.0027353753951064874,
          "rotation": 0,
          "target": "5-acceso-peatonal-03"
        },
        {
          "yaw": 1.6496104193716654,
          "pitch": 0.022902786874897885,
          "rotation": 0,
          "target": "44-corral-cabras-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-acceso-peatonal-03",
      "name": "Acceso peatonal 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0817339892251265,
          "pitch": 0.03912914641555609,
          "rotation": 0,
          "target": "4-playn"
        },
        {
          "yaw": -0.16094131485726315,
          "pitch": -0.007537699988048985,
          "rotation": 0,
          "target": "19-vista-frente"
        },
        {
          "yaw": 1.4844479399752881,
          "pitch": 0.0455578462522368,
          "rotation": 0,
          "target": "47-corral-cerdos-"
        },
        {
          "yaw": 2.139158371186638,
          "pitch": 0.04508429304353001,
          "rotation": 0,
          "target": "43-parque"
        },
        {
          "yaw": -1.7101077146069272,
          "pitch": 0.0012251355828389876,
          "rotation": 0,
          "target": "52-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-ingreso-al-edificio",
      "name": "Ingreso al edificio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.63761043164987,
          "pitch": 0.05672448006577646,
          "rotation": 0,
          "target": "19-vista-frente"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "8-acceso-baos-personal--ingreso-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-estacionamiento-",
      "name": "Estacionamiento ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1396669995298687,
          "pitch": 0.026330037430678743,
          "rotation": 0,
          "target": "3-acceso-vehicular-ii"
        },
        {
          "yaw": 1.248514753712639,
          "pitch": 0.10504235176443188,
          "rotation": 0,
          "target": "17-logo"
        },
        {
          "yaw": -0.41750779240420854,
          "pitch": 0.04865456676805202,
          "rotation": 0,
          "target": "9-vista-lateral"
        },
        {
          "yaw": 1.0362716135434198,
          "pitch": 0.016869062308874305,
          "rotation": 0,
          "target": "27-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-acceso-baos-personal--ingreso-",
      "name": "Acceso Baños personal / ingreso ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0216215055631075,
          "pitch": 0.20780593239400424,
          "rotation": 0,
          "target": "6-ingreso-al-edificio"
        },
        {
          "yaw": 0.22500333485130852,
          "pitch": 0.1343410641995746,
          "rotation": 0,
          "target": "10-ingreso-a-cocina-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-vista-lateral",
      "name": "Vista lateral",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0044095903477377,
          "pitch": 0.023734969806056938,
          "rotation": 0,
          "target": "7-estacionamiento-"
        },
        {
          "yaw": 0.18348956163450403,
          "pitch": -0.017375548951683584,
          "rotation": 0.7853981633974483,
          "target": "51-generador"
        },
        {
          "yaw": 2.104873555308494,
          "pitch": 0.0063471429787611555,
          "rotation": 0,
          "target": "30-habitacin-mujeres-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ingreso-a-cocina-",
      "name": "Ingreso a cocina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5676230365356894,
          "pitch": 0.13552847124490697,
          "rotation": 0,
          "target": "11-ingreso-a-taller--secretara"
        },
        {
          "yaw": -3.0540360252875516,
          "pitch": 0.15928766978722209,
          "rotation": 0,
          "target": "6-ingreso-al-edificio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-ingreso-a-taller--secretara",
      "name": "Ingreso a taller / secretaría",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.13875045353301,
          "pitch": 0.08870396257904467,
          "rotation": 0,
          "target": "10-ingreso-a-cocina-"
        },
        {
          "yaw": -0.005891264245853733,
          "pitch": 0.0910614752330261,
          "rotation": 0,
          "target": "18-secretara"
        },
        {
          "yaw": -1.5885978687588018,
          "pitch": 0.0871817322502082,
          "rotation": 0,
          "target": "12-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-estar",
      "name": "Estar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.951519423055066,
          "pitch": 0.10255683577355867,
          "rotation": 0,
          "target": "11-ingreso-a-taller--secretara"
        },
        {
          "yaw": 1.8752498837296745,
          "pitch": 0.10384513245864291,
          "rotation": 0,
          "target": "20-direccin"
        },
        {
          "yaw": -0.5410929094683343,
          "pitch": 0.0605227322116928,
          "rotation": 10.995574287564278,
          "target": "35-pasillo-central-i"
        },
        {
          "yaw": 1.583849426258114,
          "pitch": 0.04178780916963731,
          "rotation": 4.71238898038469,
          "target": "33-acceso-consultorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-pista-de-equinos-",
      "name": "Pista de equinos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9682637592784094,
          "pitch": 0.029895099737613506,
          "rotation": 0,
          "target": "48-gallinero-"
        },
        {
          "yaw": 1.9676469687374274,
          "pitch": 0.04514071326795843,
          "rotation": 0,
          "target": "19-vista-frente"
        },
        {
          "yaw": -2.3401922182393715,
          "pitch": 0.026632719624622325,
          "rotation": 5.497787143782138,
          "target": "53-parque-iii"
        },
        {
          "yaw": 0.23395072873448441,
          "pitch": 0.03143101816153404,
          "rotation": 0,
          "target": "55-quincho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-pileta-adaptada-i",
      "name": "Pileta adaptada I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.27294313501503886,
          "pitch": 0.0355136256406432,
          "rotation": 0,
          "target": "16-pileta-adaptada-iii"
        },
        {
          "yaw": -1.0623293966196705,
          "pitch": 0.09321678484275964,
          "rotation": 0,
          "target": "15-pileta--adaptada-ii"
        },
        {
          "yaw": -2.4216958251476566,
          "pitch": 0.026135905712564522,
          "rotation": 0,
          "target": "3-acceso-vehicular-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-pileta--adaptada-ii",
      "name": "Pileta  adaptada II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1233020676003918,
          "pitch": 0.09517307742767755,
          "rotation": 0,
          "target": "14-pileta-adaptada-i"
        },
        {
          "yaw": -1.2588796811238012,
          "pitch": 0.0922328130863761,
          "rotation": 0,
          "target": "16-pileta-adaptada-iii"
        },
        {
          "yaw": 2.8943081231374244,
          "pitch": 0.05172803741748311,
          "rotation": 0,
          "target": "52-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-pileta-adaptada-iii",
      "name": "Pileta adaptada III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.004391735239606,
          "pitch": 0.07731572444445867,
          "rotation": 0,
          "target": "4-playn"
        },
        {
          "yaw": 0.657285586808781,
          "pitch": 0.1252655854965976,
          "rotation": 0,
          "target": "15-pileta--adaptada-ii"
        },
        {
          "yaw": 0.08229234599931345,
          "pitch": 0.046936639855475804,
          "rotation": 0,
          "target": "14-pileta-adaptada-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-logo",
      "name": "Logo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9302404716842041,
          "pitch": 0.139673679724428,
          "rotation": 0,
          "target": "6-ingreso-al-edificio"
        },
        {
          "yaw": -1.3276780355895497,
          "pitch": -0.0024362018353549786,
          "rotation": 0,
          "target": "7-estacionamiento-"
        },
        {
          "yaw": 2.040961887311557,
          "pitch": 0.11538096542531484,
          "rotation": 0,
          "target": "19-vista-frente"
        },
        {
          "yaw": -2.608376160504788,
          "pitch": 0.023515304015045757,
          "rotation": 0,
          "target": "52-parque-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-secretara",
      "name": "Secretaría",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.0868626350498953,
        "pitch": 0.3022610541012156,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.4735202577557427,
          "pitch": 0.08718085860107294,
          "rotation": 0,
          "target": "11-ingreso-a-taller--secretara"
        },
        {
          "yaw": 3.034248473381558,
          "pitch": 0.09479023111213358,
          "rotation": 0,
          "target": "33-acceso-consultorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-vista-frente",
      "name": "Vista frente",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.21354978278656844,
        "pitch": 0.1473240338613664,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.4912637793428587,
          "pitch": 0.04291184239725432,
          "rotation": 0,
          "target": "17-logo"
        },
        {
          "yaw": -0.14730497527989606,
          "pitch": 0.015724123459960992,
          "rotation": 0,
          "target": "6-ingreso-al-edificio"
        },
        {
          "yaw": -2.5974517308453997,
          "pitch": 0.01927507887726776,
          "rotation": 0,
          "target": "5-acceso-peatonal-03"
        },
        {
          "yaw": 2.2753829584004874,
          "pitch": 0.09545517824671634,
          "rotation": 0,
          "target": "42-corral-gansos"
        },
        {
          "yaw": 0.9036674270503724,
          "pitch": 0.050614740553577064,
          "rotation": 0,
          "target": "13-pista-de-equinos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-direccin",
      "name": "Dirección",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.4570674922132838,
        "pitch": 0.29332941356283726,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.9133309733347295,
          "pitch": 0.12808384453353838,
          "rotation": 0,
          "target": "12-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-aula-arte-",
      "name": "Aula arte ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6665807489582836,
          "pitch": 0.12865778584349563,
          "rotation": 0,
          "target": "34-pasillo-aulas-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-aula-audiovisual",
      "name": "Aula audiovisual",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.80695011897647,
          "pitch": 0.05331994927973227,
          "rotation": 0,
          "target": "32-pasillo-aulas-iii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bao-adaptado",
      "name": "Baño adaptado",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.052981180638774,
          "pitch": 0.15884362798473006,
          "rotation": 0,
          "target": "58-pa-i"
        },
        {
          "yaw": -1.16288785192528,
          "pitch": 0.13003168296919831,
          "rotation": 0,
          "target": "24-bao-adaptado-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bao-adaptado-ii",
      "name": "Baño adaptado II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1784974034810265,
          "pitch": 0.04010245757426034,
          "rotation": 0,
          "target": "25-ducha"
        },
        {
          "yaw": 1.1911729567793952,
          "pitch": -0.055071066205799823,
          "rotation": 0,
          "target": "26-bao-adaptado-iii"
        },
        {
          "yaw": -2.9978035750039425,
          "pitch": 0.1458433520590603,
          "rotation": 0,
          "target": "23-bao-adaptado"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-ducha",
      "name": "Ducha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0590643979801975,
          "pitch": 0.21144459512177427,
          "rotation": 0,
          "target": "24-bao-adaptado-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bao-adaptado-iii",
      "name": "Baño Adaptado III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2791698975853762,
          "pitch": -0.04664132748728811,
          "rotation": 0,
          "target": "24-bao-adaptado-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-comedor-",
      "name": "Comedor ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0281662728488143,
          "pitch": 0.03064058568718231,
          "rotation": 0,
          "target": "36-pasillo-central-ii"
        },
        {
          "yaw": 1.9412511288346481,
          "pitch": 0.032226744730689205,
          "rotation": 0.7853981633974483,
          "target": "35-pasillo-central-i"
        },
        {
          "yaw": -1.0122829093350258,
          "pitch": -0.009636181769000274,
          "rotation": 0,
          "target": "7-estacionamiento-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-consultorio",
      "name": "Consultorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.16919008055047513,
        "pitch": 0.2660929622118502,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.5108733067527247,
          "pitch": 0.06324836754995644,
          "rotation": 0,
          "target": "33-acceso-consultorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-habitacin-hombres-pa",
      "name": "Habitación hombres PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9728345937923457,
          "pitch": 0.017953412397696766,
          "rotation": 0,
          "target": "58-pa-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-habitacin-mujeres-pb",
      "name": "Habitación mujeres PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.680485753404133,
          "pitch": 0.09951868656032659,
          "rotation": 0,
          "target": "37-pasillo-central-iii"
        },
        {
          "yaw": -0.8258497782315111,
          "pitch": 0.043812463500012555,
          "rotation": 0,
          "target": "9-vista-lateral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-habitacin-hombres-pb",
      "name": "Habitación hombres PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.01819839266211,
          "pitch": 0.19689158195954626,
          "rotation": 0,
          "target": "41-pasillo-sector-hombres-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-pasillo-aulas-iii",
      "name": "Pasillo aulas III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0415420386142245,
          "pitch": 0.0532484146673724,
          "rotation": 0,
          "target": "34-pasillo-aulas-ii"
        },
        {
          "yaw": 1.6051342532786457,
          "pitch": 0.13638108086424694,
          "rotation": 0,
          "target": "22-aula-audiovisual"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-acceso-consultorio",
      "name": "Acceso consultorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.134679824329665,
          "pitch": 0.09017013564571208,
          "rotation": 1.5707963267948966,
          "target": "12-estar"
        },
        {
          "yaw": 2.938651803440777,
          "pitch": 0.0693643852453345,
          "rotation": 0,
          "target": "18-secretara"
        },
        {
          "yaw": -0.18510598879010765,
          "pitch": 0.06902787522643195,
          "rotation": 0,
          "target": "34-pasillo-aulas-ii"
        },
        {
          "yaw": 1.5007845181327575,
          "pitch": 0.14789816428604396,
          "rotation": 0,
          "target": "28-consultorio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-pasillo-aulas-ii",
      "name": "Pasillo aulas II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0436058645659756,
          "pitch": 0.0522310356764315,
          "rotation": 0.7853981633974483,
          "target": "12-estar"
        },
        {
          "yaw": -0.21136580677242733,
          "pitch": 0.11875495792242674,
          "rotation": 0,
          "target": "32-pasillo-aulas-iii"
        },
        {
          "yaw": 2.916367723943506,
          "pitch": 0.06229016562224743,
          "rotation": 0,
          "target": "33-acceso-consultorio"
        },
        {
          "yaw": 1.3839671032788203,
          "pitch": 0.2025709756656333,
          "rotation": 0,
          "target": "21-aula-arte-"
        },
        {
          "yaw": -2.374723257723822,
          "pitch": 0.12935160718619443,
          "rotation": 0,
          "target": "56-aula--taller-de-cocina-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pasillo-central-i",
      "name": "Pasillo central I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9558355401917105,
          "pitch": 0.07962827542809414,
          "rotation": 0.7853981633974483,
          "target": "12-estar"
        },
        {
          "yaw": -0.3365347590684955,
          "pitch": 0.06936226558246616,
          "rotation": 0,
          "target": "27-comedor-"
        },
        {
          "yaw": 0.06233318757122852,
          "pitch": 0.007602656063195212,
          "rotation": 0,
          "target": "36-pasillo-central-ii"
        },
        {
          "yaw": 0.3039218482940793,
          "pitch": 0.0778681188374648,
          "rotation": 1.5707963267948966,
          "target": "41-pasillo-sector-hombres-pb"
        },
        {
          "yaw": 2.9603541950374233,
          "pitch": 0.05140486215058715,
          "rotation": 0,
          "target": "56-aula--taller-de-cocina-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-pasillo-central-ii",
      "name": "Pasillo central II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.039454851245928,
          "pitch": 0.02796613584448515,
          "rotation": 0,
          "target": "35-pasillo-central-i"
        },
        {
          "yaw": 0.07880782971235867,
          "pitch": 0.057444861636970046,
          "rotation": 0,
          "target": "37-pasillo-central-iii"
        },
        {
          "yaw": -1.250897021192829,
          "pitch": 0.319009315857663,
          "rotation": 0,
          "target": "27-comedor-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-pasillo-central-iii",
      "name": "Pasillo central III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.934077889755475,
          "pitch": 0.061176645356141535,
          "rotation": 0,
          "target": "36-pasillo-central-ii"
        },
        {
          "yaw": 0.23846647240323193,
          "pitch": 0.009575617474460785,
          "rotation": 0,
          "target": "30-habitacin-mujeres-pb"
        },
        {
          "yaw": -0.12405838351024556,
          "pitch": 0.01814592324013553,
          "rotation": 17.27875959474387,
          "target": "38-acceso-a-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-acceso-a-escaleras",
      "name": "Acceso a escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1302450925994147,
          "pitch": 0.09852610600425571,
          "rotation": 0,
          "target": "37-pasillo-central-iii"
        },
        {
          "yaw": -0.06764693659702736,
          "pitch": 0.04698820234675338,
          "rotation": 0,
          "target": "39-escaleras-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-escaleras-i",
      "name": "Escaleras I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.020649786970619033,
          "pitch": -0.39840376921333487,
          "rotation": 0,
          "target": "40-escaleras-ii"
        },
        {
          "yaw": 1.7546244017620118,
          "pitch": 0.007396921896463127,
          "rotation": 0,
          "target": "38-acceso-a-escaleras"
        },
        {
          "yaw": -1.6479138513950033,
          "pitch": -0.04723660500261495,
          "rotation": 0,
          "target": "7-estacionamiento-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-escaleras-ii",
      "name": "Escaleras II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4276589073559816,
          "pitch": 0.12447186448481773,
          "rotation": 3.141592653589793,
          "target": "39-escaleras-i"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "57-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-pasillo-sector-hombres-pb",
      "name": "Pasillo sector Hombres PB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.797175550419147,
          "pitch": 0.04104468369828851,
          "rotation": 4.71238898038469,
          "target": "35-pasillo-central-i"
        },
        {
          "yaw": -0.02356097265038848,
          "pitch": 0.11725355016474026,
          "rotation": 1.5707963267948966,
          "target": "31-habitacin-hombres-pb"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-corral-gansos",
      "name": "Corral gansos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1325490801256564,
          "pitch": 0.060956146920524645,
          "rotation": 0,
          "target": "19-vista-frente"
        },
        {
          "yaw": -0.009492886377097776,
          "pitch": 0.018085907605843943,
          "rotation": 0,
          "target": "49-huerta"
        },
        {
          "yaw": 1.2890758528141966,
          "pitch": 0.028206682681583217,
          "rotation": 0,
          "target": "43-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-parque",
      "name": "Parque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8814686210313827,
          "pitch": 0.00132182890079946,
          "rotation": 0,
          "target": "44-corral-cabras-"
        },
        {
          "yaw": -0.31054153196934564,
          "pitch": -0.01223139281292518,
          "rotation": 0,
          "target": "5-acceso-peatonal-03"
        },
        {
          "yaw": 0.6587843499440176,
          "pitch": 0.006017826059341758,
          "rotation": 0,
          "target": "42-corral-gansos"
        },
        {
          "yaw": 1.2255242381440397,
          "pitch": 0.04167852035979358,
          "rotation": 0,
          "target": "46-corral-ovejas-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-corral-cabras-",
      "name": "Corral cabras ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3363773106517485,
          "pitch": 0.046199194608560035,
          "rotation": 0,
          "target": "45-tirolesa"
        },
        {
          "yaw": -1.3980114221581506,
          "pitch": 0.011858870654517517,
          "rotation": 0,
          "target": "46-corral-ovejas-"
        },
        {
          "yaw": -2.529572770820611,
          "pitch": 0.0324762605091351,
          "rotation": 0,
          "target": "43-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-tirolesa",
      "name": "Tirolesa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.103544060479491,
          "pitch": 0.14601367606042004,
          "rotation": 0.7853981633974483,
          "target": "44-corral-cabras-"
        },
        {
          "yaw": 1.700009716555357,
          "pitch": 0.04046119265155923,
          "rotation": 0,
          "target": "43-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-corral-ovejas-",
      "name": "Corral ovejas ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.222632462574703,
          "pitch": 0.048425126573402366,
          "rotation": 0,
          "target": "44-corral-cabras-"
        },
        {
          "yaw": -0.6226802730766252,
          "pitch": 0.08018801847872226,
          "rotation": 0,
          "target": "47-corral-cerdos-"
        },
        {
          "yaw": -3.069395637293507,
          "pitch": 0.052809461607996155,
          "rotation": 0,
          "target": "43-parque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-corral-cerdos-",
      "name": "Corral cerdos ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8104542214240809,
          "pitch": 0.027053351757922783,
          "rotation": 0,
          "target": "46-corral-ovejas-"
        },
        {
          "yaw": -2.248800364694164,
          "pitch": 0.021707002235459072,
          "rotation": 0,
          "target": "49-huerta"
        },
        {
          "yaw": -1.4981275607098468,
          "pitch": -0.00006231648039900506,
          "rotation": 0,
          "target": "48-gallinero-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-gallinero-",
      "name": "Gallinero ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8251447165557746,
          "pitch": 0.046929283626178986,
          "rotation": 0,
          "target": "47-corral-cerdos-"
        },
        {
          "yaw": -2.9330019340771827,
          "pitch": 0.0348777285299704,
          "rotation": 0.7853981633974483,
          "target": "49-huerta"
        },
        {
          "yaw": -0.6995184669334797,
          "pitch": 0.028176708200797762,
          "rotation": 0,
          "target": "13-pista-de-equinos-"
        },
        {
          "yaw": -0.44583586204480596,
          "pitch": 0.02383644379941785,
          "rotation": 0,
          "target": "55-quincho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-huerta",
      "name": "Huerta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.08691615332652702,
          "pitch": 0,
          "rotation": 5.497787143782138,
          "target": "48-gallinero-"
        },
        {
          "yaw": 0.793775671214231,
          "pitch": 0.040796484841793657,
          "rotation": 0,
          "target": "47-corral-cerdos-"
        },
        {
          "yaw": 3.0934340786057497,
          "pitch": 0.13939226742636635,
          "rotation": 0,
          "target": "42-corral-gansos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-consultorio",
      "name": "Consultorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "51-generador",
      "name": "Generador",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3855025433837778,
          "pitch": 0.015443939231865045,
          "rotation": 1.5707963267948966,
          "target": "53-parque-iii"
        },
        {
          "yaw": 0.47594758213998034,
          "pitch": 0.048146455814158884,
          "rotation": 5.497787143782138,
          "target": "9-vista-lateral"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-parque-ii",
      "name": "Parque II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.25523393043010323,
          "pitch": 0,
          "rotation": 0,
          "target": "5-acceso-peatonal-03"
        },
        {
          "yaw": 2.635085842821198,
          "pitch": 0.04104675193228147,
          "rotation": 0,
          "target": "3-acceso-vehicular-ii"
        },
        {
          "yaw": -2.368005445280847,
          "pitch": 0.007186725602663202,
          "rotation": 0,
          "target": "7-estacionamiento-"
        },
        {
          "yaw": -0.9817862176821244,
          "pitch": -0.014235203221158343,
          "rotation": 0,
          "target": "17-logo"
        },
        {
          "yaw": 1.5612834825772097,
          "pitch": 0.04293578770753115,
          "rotation": 0,
          "target": "15-pileta--adaptada-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-parque-iii",
      "name": "Parque III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.040611899482994,
          "pitch": 0.08377338851234484,
          "rotation": 0,
          "target": "51-generador"
        },
        {
          "yaw": -2.571614188556442,
          "pitch": 0.01461410697808141,
          "rotation": 0.7853981633974483,
          "target": "13-pista-de-equinos-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-parque-iv",
      "name": "Parque IV",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "55-quincho",
      "name": "Quincho",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.031199340931920005,
          "pitch": -0.005044210736857124,
          "rotation": 0,
          "target": "48-gallinero-"
        },
        {
          "yaw": 1.726555223931542,
          "pitch": 0.050586992890563565,
          "rotation": 0,
          "target": "13-pista-de-equinos-"
        },
        {
          "yaw": 1.0510322197821829,
          "pitch": 0.04720703619284272,
          "rotation": 0,
          "target": "19-vista-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-aula--taller-de-cocina-",
      "name": "Aula / Taller de cocina ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7569961192252705,
          "pitch": 0.03549624892739445,
          "rotation": 0,
          "target": "34-pasillo-aulas-ii"
        },
        {
          "yaw": -2.3213282377704942,
          "pitch": 0.013326169983830738,
          "rotation": 0,
          "target": "35-pasillo-central-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-ingreso-pa",
      "name": "Ingreso PA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.644542703993796,
          "pitch": 0.0078012315946836,
          "rotation": 4.71238898038469,
          "target": "40-escaleras-ii"
        },
        {
          "yaw": 0.16685122526700802,
          "pitch": -0.020508045430748467,
          "rotation": 0,
          "target": "58-pa-i"
        },
        {
          "yaw": -0.19201862883651089,
          "pitch": -0.04045925969491293,
          "rotation": 4.71238898038469,
          "target": "59-pa-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-pa-i",
      "name": "PA I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.961152335447685,
          "pitch": 0.025542636884612335,
          "rotation": 0,
          "target": "57-ingreso-pa"
        },
        {
          "yaw": -1.2081322328360447,
          "pitch": -0.03446487919236141,
          "rotation": 0,
          "target": "29-habitacin-hombres-pa"
        },
        {
          "yaw": -0.24768816194506194,
          "pitch": -0.022987626381290482,
          "rotation": 0,
          "target": "23-bao-adaptado"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-pa-ii",
      "name": "PA II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9055836020597265,
          "pitch": 0.040398801287869546,
          "rotation": 1.5707963267948966,
          "target": "57-ingreso-pa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-pa-iii",
      "name": "PA III",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.002249991196100254,
          "pitch": -0.05371800279534966,
          "rotation": 0,
          "target": "23-bao-adaptado"
        },
        {
          "yaw": 3.1329114023018363,
          "pitch": 0.01585690082030311,
          "rotation": 0,
          "target": "59-pa-ii"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DINAD TOUR VIRTUAL -Centro III",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
