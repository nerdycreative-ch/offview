var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "300", //'700' or 'responsive'
    background_color: "red",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#175041",
    state_hover_color: "#298f74",
    state_url: "",
    border_size: "1.5",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    CHE159: {
      name: "Genève",
      description: "De"
    },
    CHE160: {
      name: "Jura"
    },
    CHE161: {
      name: "Neuchâtel"
    },
    CHE162: {
      name: "Aargau"
    },
    CHE163: {
      name: "Lucerne"
    },
    CHE164: {
      name: "Nidwalden"
    },
    CHE165: {
      name: "Valais"
    },
    CHE166: {
      name: "Appenzell Ausserrhoden"
    },
    CHE167: {
      name: "Sankt Gallen"
    },
    CHE168: {
      name: "Ticino"
    },
    CHE169: {
      name: "Glarus"
    },
    CHE170: {
      name: "Graubünden"
    },
    CHE171: {
      name: "Schaffhausen"
    },
    CHE173: {
      name: "Schwyz"
    },
    CHE174: {
      name: "Thurgau"
    },
    CHE175: {
      name: "Uri"
    },
    CHE176: {
      name: "Zürich"
    },
    CHE177: {
      name: "Zug"
    },
    CHE3421: {
      name: "Fribourg"
    },
    CHE3422: {
      name: "Vaud"
    },
    CHE3423: {
      name: "Basel-Landschaft"
    },
    CHE3424: {
      name: "Bern"
    },
    CHE3425: {
      name: "Basel-Stadt"
    },
    CHE3426: {
      name: "Solothurn"
    },
    CHE3427: {
      name: "Obwalden"
    },
    CHE3473: {
      name: "Appenzell Innerrhoden"
    }
  },
  locations: {},
  labels: {
    "0": {
      name: "Genève",
      parent_id: "CHE159",
      x: 23.7,
      y: 522.6
    },
    "1": {
      name: "Jura",
      parent_id: "CHE160",
      x: 264.2,
      y: 143.4
    },
    "2": {
      name: "Neuchâtel",
      parent_id: "CHE161",
      x: 193.6,
      y: 262.1
    },
    "3": {
      name: "Aargau",
      parent_id: "CHE162",
      x: 493,
      y: 112.1
    },
    "4": {
      name: "Lucerne",
      parent_id: "CHE163",
      x: 474.8,
      y: 231.6
    },
    "5": {
      name: "Nidwalden",
      parent_id: "CHE164",
      x: 542.1,
      y: 281.3
    },
    "6": {
      name: "Valais",
      parent_id: "CHE165",
      x: 392.2,
      y: 524.4
    },
    "7": {
      name: "Appenzell Ausserrhoden",
      parent_id: "CHE166",
      x: 734.7,
      y: 145
    },
    "8": {
      name: "Sankt Gallen",
      parent_id: "CHE167",
      x: 730,
      y: 166.3
    },
    "9": {
      name: "Ticino",
      parent_id: "CHE168",
      x: 620.6,
      y: 472.4
    },
    "10": {
      name: "Glarus",
      parent_id: "CHE169",
      x: 694.2,
      y: 276.5
    },
    "11": {
      name: "Graubünden",
      parent_id: "CHE170",
      x: 831.8,
      y: 365.3
    },
    "12": {
      name: "Schaffhausen",
      parent_id: "CHE171",
      x: 573.9,
      y: 28.4
    },
    "13": {
      name: "Schwyz",
      parent_id: "CHE173",
      x: 618.5,
      y: 251
    },
    "14": {
      name: "Thurgau",
      parent_id: "CHE174",
      x: 685.8,
      y: 71.9
    },
    "15": {
      name: "Uri",
      parent_id: "CHE175",
      x: 598.4,
      y: 321.1
    },
    "16": {
      name: "Zürich",
      parent_id: "CHE176",
      x: 598,
      y: 128.7
    },
    "17": {
      name: "Zug",
      parent_id: "CHE177",
      x: 574.6,
      y: 213.4
    },
    "18": {
      name: "Fribourg",
      parent_id: "CHE3421",
      x: 258,
      y: 370.4
    },
    "19": {
      name: "Vaud",
      parent_id: "CHE3422",
      x: 143.2,
      y: 370.2
    },
    "20": {
      name: "Basel-Landschaft",
      parent_id: "CHE3423",
      x: 411.1,
      y: 117.8
    },
    "21": {
      name: "Bern",
      parent_id: "CHE3424",
      x: 385.5,
      y: 370.3
    },
    "22": {
      name: "Basel-Stadt",
      parent_id: "CHE3425",
      x: 360.5,
      y: 80
    },
    "23": {
      name: "Solothurn",
      parent_id: "CHE3426",
      x: 348.6,
      y: 188.2
    },
    "24": {
      name: "Obwalden",
      parent_id: "CHE3427",
      x: 498.3,
      y: 311.7
    },
    "25": {
      name: "Appenzell Innerrhoden",
      parent_id: "CHE3473",
      x: 760.2,
      y: 163
    },
    "26": {
      name: "Bern",
      x: 335.4,
      y: 290.2,
      parent_type: "location",
      parent_id: "0"
    },
    "27": {
      name: "Genève",
      parent_id: "CHE159",
      x: 23.7,
      y: 522.6
    },
    "28": {
      name: "Jura",
      parent_id: "CHE160",
      x: 264.2,
      y: 143.4
    },
    "29": {
      name: "Neuchâtel",
      parent_id: "CHE161",
      x: 193.6,
      y: 262.1
    },
    "30": {
      name: "Aargau",
      parent_id: "CHE162",
      x: 493,
      y: 112.1
    },
    "31": {
      name: "Lucerne",
      parent_id: "CHE163",
      x: 474.8,
      y: 231.6
    },
    "32": {
      name: "Nidwalden",
      parent_id: "CHE164",
      x: 542.1,
      y: 281.3
    },
    "33": {
      name: "Valais",
      parent_id: "CHE165",
      x: 392.2,
      y: 524.4
    },
    "34": {
      name: "Appenzell Ausserrhoden",
      parent_id: "CHE166",
      x: 734.7,
      y: 145
    },
    "35": {
      name: "Sankt Gallen",
      parent_id: "CHE167",
      x: 730,
      y: 166.3
    },
    "36": {
      name: "Ticino",
      parent_id: "CHE168",
      x: 620.6,
      y: 472.4
    },
    "37": {
      name: "Glarus",
      parent_id: "CHE169",
      x: 694.2,
      y: 276.5
    },
    "38": {
      name: "Graubünden",
      parent_id: "CHE170",
      x: 831.8,
      y: 365.3
    },
    "39": {
      name: "Schaffhausen",
      parent_id: "CHE171",
      x: 573.9,
      y: 28.4
    },
    "40": {
      name: "Schwyz",
      parent_id: "CHE173",
      x: 618.5,
      y: 251
    },
    "41": {
      name: "Thurgau",
      parent_id: "CHE174",
      x: 685.8,
      y: 71.9
    },
    "42": {
      name: "Uri",
      parent_id: "CHE175",
      x: 598.4,
      y: 321.1
    },
    "43": {
      name: "Zürich",
      parent_id: "CHE176",
      x: 598,
      y: 128.7
    },
    "44": {
      name: "Zug",
      parent_id: "CHE177",
      x: 574.6,
      y: 213.4
    },
    "45": {
      name: "Fribourg",
      parent_id: "CHE3421",
      x: 258,
      y: 370.4
    },
    "46": {
      name: "Vaud",
      parent_id: "CHE3422",
      x: 143.2,
      y: 370.2
    },
    "47": {
      name: "Basel-Landschaft",
      parent_id: "CHE3423",
      x: 411.1,
      y: 117.8
    },
    "48": {
      name: "Bern",
      parent_id: "CHE3424",
      x: 385.5,
      y: 370.3
    },
    "49": {
      name: "Basel-Stadt",
      parent_id: "CHE3425",
      x: 360.5,
      y: 80
    },
    "50": {
      name: "Solothurn",
      parent_id: "CHE3426",
      x: 348.6,
      y: 188.2
    },
    "51": {
      name: "Obwalden",
      parent_id: "CHE3427",
      x: 498.3,
      y: 311.7
    },
    "52": {
      name: "Appenzell Innerrhoden",
      parent_id: "CHE3473",
      x: 760.2,
      y: 163
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};