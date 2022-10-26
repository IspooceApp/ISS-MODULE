const express = require('express');
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 8000

const modules = {
    "1": {
        "module": "Zarya Module",
        "launchDate": "Nov. 20, 1998",
        "installedDate": "",
        "images": ["https://qph.cf2.quoracdn.net/main-qimg-f67068cb94aef39f12448a86e9562c4a-lq"],
        "nation": "Russia, USA",
        "type": "Space Station central module",
        "operator": "NASA, Rosaviakosmos",
        "contractors": "GKNPTs Khrunichev",
        "equipment": "",
        "configuration": "77K (TKS) based module",
        "propulsion": "",
        "power": "2 deployable solar arrays, batteries",
        "lifetime": "15 years",
        "mass": "19323 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "2": {
        "module": "Unity Module",
        "launchDate": "Dec. 4, 1998",
        "installedDate": "Dec. 6, 1998",
        "images": ["https://i.pinimg.com/originals/9f/36/29/9f36293b911c41877e702beb8a73901b.jpg"],
        "nation": "USA",
        "type": "Space station node module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "3": {
        "module": "Zvezda Service Module",
        "launchDate": "July 12, 2000",
        "installedDate": "July 25, 2000",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/a/a8/View_of_the_bottom_of_Zvezda.jpg"],
        "nation": "Russia",
        "type": "Space Station service module",
        "operator": "Rosaviakosmos",
        "contractors": "GKNPTs Khrunichev",
        "equipment": "",
        "configuration": "DOS type station",
        "propulsion": "",
        "power": "2 deployable solar arrays, batteries",
        "lifetime": "",
        "mass": "20295 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },
    "4": {
        "module": "Z1 (Zenith) Truss",
        "launchDate": "Oct. 11, 2000",
        "installedDate": " Oct. 14, 2000",
        "images": ["https://space.skyrocket.de/img_sat/its-z1__1.jpg"],
        "nation": "USA",
        "type": "Space Station truss structure",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "8755 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "5": {
        "module": "U.S. Destiny Laboratory Module",
        "launchDate": "Feb. 7, 2001",
        "installedDate": "Feb. 10, 2001",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/7/76/ISS_Destiny_Lab.jpg"],
        "nation": "USA",
        "type": "Space station laboratory module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "14515 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },
    "6": {
        "module": "External Stowage Platform-1",
        "launchDate": "March 8, 2001",
        "installedDate": "March 13, 2001",
        "images": ["https://upload.wikimedia.org/wikipedia/commons/e/e8/STS-102_EVA_ORUs.png"],
        "nation": "",
        "type": "Space Station logistic module",
        "operator": "",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "7": {
        "module": "Space Station Robotic Manipulator System (Canadarm2)",
        "launchDate": "April 19, 2001",
        "installedDate": "April 22, 2001",
        "images": ["https://space.skyrocket.de/img_sat/mplm-2__1.jpg"],
        "nation": "Canada",
        "type": "Space Station logistic module",
        "operator": "",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "",
        "power": "via ISS",
        "lifetime": "",
        "mass": "1640 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "8": {
        "module": "Quest Airlock",
        "launchDate": "July 12, 2001",
        "installedDate": "July 15, 2001",
        "images": ["https://space.skyrocket.de/img_sat/jam__1.jpg"],
        "nation": "USA",
        "type": "Space Station airlock module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "6064 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },
    "9": {
        "module": "Pirs Docking Compartment",
        "launchDate": "Sept. 14, 2001",
        "installedDate": "Sept. 16, 2001",
        "images": ["https://space.skyrocket.de/img_sat/dc-1__2.jpg", "https://space.skyrocket.de/img_sat/progress-m-mim-2__1.jpg"],
        "nation": "Russia",
        "type": "Space Station docking and airlock module",
        "operator": "RAKA",
        "contractors": "RKK Energiya",
        "equipment": "",
        "configuration": "",
        "propulsion": "KTDU-80 (propulsion module)",
        "power": "2 deployable fixed solar arrays, batteries (during free flight); via ISS (docked)",
        "lifetime": "5 years (design)",
        "mass": "3900 kg (DC 1); 6900 kg (DC 1 and propulsion module)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "10": {
        "module": "S0 (Starboard) Truss",
        "launchDate": "April 8, 2002",
        "installedDate": "April 11, 2002",
        "images": ["https://space.skyrocket.de/img_sat/its-s0__1.jpg"],
        "nation": "USA",
        "type": "Space Station truss structure",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "13970 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "11": {
        "module": "S1 (Starboard) Truss",
        "launchDate": "Oct 7, 2002",
        "installedDate": "Oct 10, 2002",
        "images": ["https://space.skyrocket.de/img_sat/its-s1__2.jpg"],
        "nation": "USA",
        "type": "Space Station truss structure",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "12477 kg (#P1); 12572 kg (#S1)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "12": {
        "module": "External Stowage Platform-2",
        "launchDate": "July 26, 2005",
        "installedDate": "July 30, 2005",
        "images": ["https://space.skyrocket.de/img_sat/mplm-2__1.jpg"],
        "nation": "Italy",
        "type": "Space Station logistic module",
        "operator": "NASA",
        "contractors": "Alenia Spazio",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "13": {
        "module": "P3/P4 (Port) Truss & Solar Arrays",
        "launchDate": "Sept. 9, 2006",
        "installedDate": "Sept. 12, 2006",
        "images": ["https://space.skyrocket.de/img_sat/its-p3-4__1.jpg"],
        "nation": "USA",
        "type": "Space Station Truss and Photo Voltaic Module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "Solar Arrays",
        "lifetime": "",
        "mass": "15900 kg (#P3/4); 16183 kg (#S3/4)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },


    "14": {
        "module": "P5 (Port) Truss Spacer",
        "launchDate": "Dec. 9, 2006",
        "installedDate": "Dec. 12, 2006",
        "images": ["https://space.skyrocket.de/img_sat/its-p5__1.jpg"],
        "nation": "USA",
        "type": "Space Station Truss",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "1864 kg (#P5); 1819 kg (#S5)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },


    "15": {
        "module": "S3/S4 (Starboard) Truss & Solar Arrays",
        "launchDate": "June 8, 2007",
        "installedDate": "June 11, 2007",
        "images": ["https://space.skyrocket.de/img_sat/its-p3-4__1.jpg"],
        "nation": "USA",
        "type": "Space Station Truss and Photo Voltaic Module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "Solar Arrays",
        "lifetime": "",
        "mass": "15900 kg (#P3/4); 16183 kg (#S3/4)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },


    "16": {
        "module": "S5 (Starboard) Truss Spacer and External Stowage Platform-3 (ESP-3)",
        "launchDate": "Aug. 8, 2007",
        "installedDate": "Aug. 11/14, 2007",
        "images": ["https://space.skyrocket.de/img_sat/its-p5__1.jpg"],
        "nation": "USA",
        "type": "Space Station Truss",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "1864 kg (#P5); 1819 kg (#S5)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },


    "17": {
        "module": "Harmony Module",
        "launchDate": "Oct. 23, 2007",
        "installedDate": "Oct. 26, 2007",
        "images": ["https://space.skyrocket.de/img_sat/node-3__1.jpg"],
        "nation": "USA, Italy",
        "type": "Space station node module",
        "operator": "NASA",
        "contractors": "Alenia Spazio",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "13600 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },


    "18": {
        "module": "Columbus Laboratory Module",
        "launchDate": "Feb. 7, 2008",
        "installedDate": "Feb. 11, 2008",
        "images": ["https://space.skyrocket.de/img_sat/columbus_cof__3.jpg"],
        "nation": "Europe",
        "type": "Space station laboratory module",
        "operator": "ESA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "10 years",
        "mass": "10275 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "19": {
        "module": "Japanese Logistics Module and Dextre",
        "launchDate": "March 11, 2008",
        "installedDate": "March 14/18, 2008",
        "images": ["https://space.skyrocket.de/img_sat/jem-elm__2.jpg"],
        "nation": "Japan",
        "type": "Space station laboratory module",
        "operator": "ESA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "20": {
        "module": "Japanese Pressurized Module (Kibo)",
        "launchDate": "May 31, 2008",
        "installedDate": "June 3, 2008",
        "images": ["https://space.skyrocket.de/img_sat/jem__2.jpg"],
        "nation": "Japan",
        "type": "Space station laboratory module",
        "operator": "ESA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "21": {
        "module": "S6 (Starboard) Truss Spacer and Solar Arrays",
        "launchDate": "March 15, 2009",
        "installedDate": "March 19, 2009",
        "images": ["https://space.skyrocket.de/img_sat/its-p6__2.jpg"],
        "nation": "USA",
        "type": "Space Station Truss and Photo Voltaic Module",
        "operator": "NASA",
        "contractors": "Boeing",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "2 deployable solar arrays, batteries",
        "lifetime": "",
        "mass": "15873 kg (#P6); 15824 kg (#S6)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "22": {
        "module": "Japanese Exposed Facility",
        "launchDate": "July 15, 2009",
        "installedDate": "July 18, 2009",
        "images": ["ihttps://space.skyrocket.de/img_sat/jem-ef__1.jpg"],
        "nation": "Japan",
        "type": "Space station laboratory module",
        "operator": "ESA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "23": {
        "module": "Poisk Mini-Research Module-2",
        "launchDate": "Nov. 10, 2009",
        "installedDate": "Nov. 12, 2009",
        "images": ["https://space.skyrocket.de/img_sat/progress-m-mim-2__1.jpg", "https://space.skyrocket.de/img_sat/dc-1__2.jpg"],
        "nation": "Russia",
        "type": "Space Station docking and airlock module",
        "operator": "RAKA",
        "contractors": "RKK Energiya",
        "equipment": "",
        "configuration": "",
        "propulsion": "KTDU-80 (propulsion module)",
        "power": "2 deployable fixed solar arrays, batteries (during free flight); via ISS (docked)",
        "lifetime": "5 years (design)",
        "mass": "3900 kg (DC 1); 6900 kg (DC 1 and propulsion module)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "24": {
        "module": "EXPRESS Logistics Carrier-1 and 2 (ELC-1 and ELC-2)",
        "launchDate": "Nov. 16, 2009",
        "installedDate": "Nov. 18/21, 2009",
        "images": ["https://space.skyrocket.de/img_sat/elc__1.jpg"],
        "nation": "USA",
        "type": "Space Station logistic carrier",
        "operator": "NASA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "25": {
        "module": "Tranquility Module and Cupola",
        "launchDate": "Feb. 8, 2010",
        "installedDate": "Feb. 12/15, 2010",
        "images": ["https://space.skyrocket.de/img_sat/node-3__1.jpg"],
        "nation": "USA, Italy",
        "type": "Space station node module",
        "operator": "NASA",
        "contractors": "Alenia Spazio",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "",
        "lifetime": "",
        "mass": "13600 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "26": {
        "module": "Rassvet Mini-Research Module-1",
        "launchDate": "May 14, 2010",
        "installedDate": "May 18, 2010",
        "images": ["https://space.skyrocket.de/img_sat/mrm-1__1.jpg"],
        "nation": "Russia",
        "type": "Space Station module",
        "operator": "",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "",
        "power": "via ISS",
        "lifetime": "",
        "mass": "4700 kg (dry)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "27": {
        "module": "Permanent Multipurpose Module and EXPRESS Logistics Carrier-4 (ELC-4)",
        "launchDate": "Feb. 24, 2011",
        "installedDate": "Feb 26 & March 01, 2011",
        "images": ["https://space.skyrocket.de/img_sat/elc__1.jpg", "https://space.skyrocket.de/img_sat/pmm__1.jpg"],
        "nation": "USA",
        "type": "Space Station logistic carrier",
        "operator": "NASA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "28": {
        "module": "Alpha Magnetic Spectrometer-2 (AMS-2) and EXPRESS Logistics Carrier-3 (ELC-3)",
        "launchDate": "May 16, 2011",
        "installedDate": "May 18/19, 2011",
        "images": ["https://space.skyrocket.de/img_sat/ams-02__1.jpg"],
        "nation": "",
        "type": "Space station experiment module",
        "operator": "NASA",
        "contractors": "",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "3 years",
        "mass": "~ 7000 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "29": {
        "module": "Bigelow Expandable Activity Module (BEAM)",
        "launchDate": "April 8, 2016",
        "installedDate": "April 16, 2016",
        "images": ["https://space.skyrocket.de/img_sat/beam__4.jpg", "https://space.skyrocket.de/img_sat/beam__3.jpg"],
        "nation": "USA",
        "type": "Technology, inflatable structures",
        "operator": "Bigelow Aerospace → NASA Johnson Space Center",
        "contractors": "Bigelow Aerospace",
        "equipment": "",
        "configuration": "Inflatable structure",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "2 years",
        "mass": "1360 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "30": {
        "module": "NanoRacks Bishop Airlock",
        "launchDate": "Dec. 6, 2020",
        "installedDate": "Dec. 19, 2020",
        "images": ["https://space.skyrocket.de/img_sat/nanoracks-airlock__1.jpg"],
        "nation": "USA",
        "type": "Airlock module",
        "operator": "NanoRacks",
        "contractors": "Thales Alenia Space",
        "equipment": "",
        "configuration": "",
        "propulsion": "None",
        "power": "via ISS",
        "lifetime": "",
        "mass": "1090 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "31": {
        "module": "Nauka Multipurpose Laboratory Module",
        "launchDate": "",
        "installedDate": "",
        "images": ["https://space.skyrocket.de/img_sat/mlm__1.jpg", "https://space.skyrocket.de/img_sat/mlm__2.jpg"],
        "nation": "Russia",
        "type": "Space Station module",
        "operator": "Rosaviakosmos",
        "contractors": "GKNPTs Khrunichev",
        "equipment": "",
        "configuration": "77K (TKS) based module",
        "propulsion": "",
        "power": "2 deployable solar arrays, batteries",
        "lifetime": "15 years",
        "mass": "20350 kg",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    },

    "32": {
        "module": "Prichal Docking Module",
        "launchDate": "Nov. 24, 2021",
        "installedDate": "Nov. 26, 2021",
        "images": ["https://space.skyrocket.de/img_sat/progress-m-um__1.jpg", "https://space.skyrocket.de/img_sat/um__1.jpg"],
        "nation": "Russia",
        "type": "Space Station node module",
        "operator": "RAKA",
        "contractors": "RKK Energiya",
        "equipment": "",
        "configuration": "",
        "propulsion": "KTDU-80 (propulsion module",
        "power": "2 deployable fixed solar arrays, batteries (during free flight); via ISS (docked)",
        "lifetime": "5 years",
        "mass": "4000 kg (UM); 8180 kg (UM and propulsion module)",
        "orbit": "400 km x 400 km, 51.6° (typical)"
    }

}

app.use(cors())

app.get('/:moduleID', (req, res) => {
    const moduleID = req.params.moduleID;
    const module = (modules)[`${moduleID}`]
    res.send(module)
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})