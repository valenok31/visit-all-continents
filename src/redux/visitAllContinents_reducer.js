import axios from "axios";

const SET_SAVE_RESULTS = 'SET_SAVE_RESULTS';
const GET_SAVE_RESULTS = 'GET_SAVE_RESULTS';
const SET_QUEUE_CONTINENTS = 'SET_QUEUE_CONTINENTS';
const SET_SWITCH_LOADING = 'SET_SWITCH_LOADING';

let initialState = {
    _cityAddParam: [
        {
            name: 'PER',
            title: 'Перт',
            cost: {
                PER: 0,
                MEL: 135,
                SYD: 122,
                SIN: 119,
                DXB: 490,
                PEK: 807,
                CAS: 987,
                CAI: 749,
                JNB: 939,
                IST: 493,
                FRA: 687,
                CDG: 503,
                LHR: 379,
                JFK: 893,
                LAX: 887,
                ATL: 1183,
                SCL: 1369,
                BOG: 1397,
                GRU: 1030,
            },
            lon: 775,
            lat: 690,
            continent: 'Австралия',
        },
        {
            name: 'MEL',
            title: 'Мельбурн',
            cost: {
                PER: 135,
                MEL: 0,
                SYD: 24,
                SIN: 155,
                DXB: 463,
                PEK: 1471,
                CAS: 811,
                CAI: 585,
                JNB: 930,
                IST: 575,
                FRA: 567,
                CDG: 414,
                LHR: 388,
                JFK: 709,
                LAX: 394,
                ATL: 786,
                SCL: 1126,
                BOG: 947,
                GRU: 923,
            },
            lon: 840,
            lat: 734,
            continent: 'Австралия',
        },
        {
            name: 'SYD',
            title: 'Сидней',
            cost: {
                PER: 122,
                MEL: 30,
                SYD: 0,
                SIN: 182,
                DXB: 543,
                PEK: 687,
                CAS: 858,
                CAI: 647,
                JNB: 820,
                IST: 604,
                FRA: 623,
                CDG: 542,
                LHR: 442,
                JFK: 485,
                LAX: 363,
                ATL: 649,
                SCL: 941,
                BOG: 739,
                GRU: 924,
            },
            lon: 860,
            lat: 710,
            continent: 'Австралия',
        },
        {
            name: 'SIN',
            title: 'Сингапур',
            cost: {
                PER: 119,
                MEL: 147,
                SYD: 182,
                SIN: 0,
                DXB: 232,
                PEK: 432,
                CAS: 470,
                CAI: 384,
                JNB: 628,
                IST: 301,
                FRA: 220,
                CDG: 254,
                LHR: 189,
                JFK: 484,
                LAX: 549,
                ATL: 691,
                SCL: 828,
                BOG: 820,
                GRU: 888,
            },
            lon: 755,
            lat: 490,
            continent: 'Азия',
        },
        {
            name: 'DXB',
            title: 'Дубай',
            cost: {
                PER: 490,
                MEL: 432,
                SYD: 420,
                SIN: 207,
                DXB: 0,
                PEK: 334,
                CAS: 220,
                CAI: 169,
                JNB: 270,
                IST: 128,
                FRA: 186,
                CDG: 119,
                LHR: 165,
                JFK: 447,
                LAX: 667,
                ATL: 805,
                SCL: 728,
                BOG: 652,
                GRU: 636,
            },
            lon: 615,
            lat: 350,
            continent: 'Азия',
        },
        {
            name: 'PEK',
            title: 'Пекин',
            cost: {
                PER: 807,
                MEL: 529,
                SYD: 543,
                SIN: 318,
                DXB: 334,
                PEK: 0,
                CAS: 999,
                CAI: 852,
                JNB: 1214,
                IST: 588,
                //756
                FRA: 156,
                CDG: 743,
                LHR: 461,
                JFK: 819,
                //833
                LAX: 219,
                ATL: 1858,
                SCL: 991,
                BOG: 1308,
                GRU: 1091,
            },
            lon: 760,
            lat: 260,
            continent: 'Азия',
        },
        {
            name: 'CAS',
            title: 'Касабланка',
            cost: {
                PER: 987,
                MEL: 811,
                SYD: 953,
                SIN: 470,
                DXB: 201,
                PEK: 999,
                CAS: 0,
                CAI: 218,
                JNB: 305,
                IST: 109,
                FRA: 35,
                CDG: 39,
                LHR: 23,
                JFK: 383,
                LAX: 501,
                ATL: 744,
                SCL: 634,
                BOG: 521,
                GRU: 415,
            },
            lon: 455,
            lat: 290,
            continent: 'Африка',
        },
        {
            name: 'CAI',
            title: 'Каир',
            cost: {
                PER: 749,
                MEL: 585,
                SYD: 634,
                SIN: 370,
                DXB: 151,
                PEK: 852,
                CAS: 218,
                CAI: 0,
                JNB: 245,
                IST: 145,
                FRA: 159,
                CDG: 150,
                LHR: 138,
                JFK: 399,
                LAX: 364,
                ATL: 542,
                SCL: 763,
                BOG: 690,
                GRU: 559,
            },
            lon: 553,
            lat: 310,
            continent: 'Африка',
        },
        {
            name: 'JNB',
            title: 'Йоханнесбург',
            cost: {
                PER: 939,
                MEL: 886,
                SYD: 820,
                SIN: 627,
                DXB: 270,
                PEK: 1214,
                CAS: 305,
                CAI: 250,
                JNB: 0,
                IST: 288,
                FRA: 277,
                CDG: 360,
                LHR: 281,
                JFK: 619,
                LAX: 637,
                ATL: 803,
                SCL: 1010,
                BOG: 1069,
                GRU: 517,
            },
            lon: 545,
            lat: 660,
            continent: 'Африка',
        },
        {
            name: 'IST',
            title: 'Стамбул',
            cost: {
                PER: 493,
                MEL: 625,
                SYD: 472,
                SIN: 276,
                DXB: 138,
                PEK: 596,
                CAS: 109,
                CAI: 127,
                JNB: 288,
                IST: 0,
                FRA: 65,
                CDG: 66,
                LHR: 56,
                JFK: 345,
                LAX: 475,
                ATL: 421,
                SCL: 539,
                BOG: 463,
                GRU: 340,
            },
            lon: 545,
            lat: 244,
            continent: 'Европа',
        },
        {
            name: 'FRA',
            title: 'Франкфурт-на-Майне',
            cost: {
                PER: 682,
                MEL: 607,
                SYD: 470,
                SIN: 338,
                DXB: 97,
                PEK: 1266,
                CAS: 35,
                CAI: 100,
                JNB: 277,
                IST: 76,
                FRA: 0,
                CDG: 23,
                LHR: 8,
                JFK: 264,
                LAX: 362,
                ATL: 351,
                SCL: 459,
                BOG: 364,
                GRU: 345,
            },
            lon: 495,
            lat: 190,
            continent: 'Европа',
        },
        {
            name: 'CDG',
            title: 'Париж',
            cost: {
                PER: 503,
                MEL: 395,
                SYD: 362,
                SIN: 254,
                DXB: 101,
                PEK: 743,
                CAS: 39,
                CAI: 111,
                JNB: 360,
                IST: 88,
                FRA: 32,
                CDG: 0,
                LHR: 17,
                JFK: 228,
                LAX: 349,
                ATL: 456,
                SCL: 433,
                BOG: 357,
                GRU: 264,
            },
            lon: 480,
            lat: 204,
            continent: 'Европа',
        },
        {
            name: 'LHR',
            title: 'Лондон',
            cost: {
                PER: 345,
                MEL: 378,
                SYD: 298,
                SIN: 190,
                DXB: 77,
                PEK: 607,
                CAS: 18,
                CAI: 91,
                JNB: 281,
                IST: 66,
                FRA: 8,
                CDG: 28,
                LHR: 0,
                JFK: 261,
                LAX: 375,
                ATL: 333,
                SCL: 454,
                BOG: 473,
                GRU: 303,
            },
            lon: 473,
            lat: 180,
            continent: 'Европа',
        },
        {
            name: 'JFK',
            title: 'Нью-Йорк',
            cost: {
                PER: 804,
                MEL: 648,
                SYD: 494,
                SIN: 468,
                DXB: 311,
                PEK: 792,
                CAS: 309,
                CAI: 352,
                JNB: 550,
                IST: 361,
                FRA: 214,
                CDG: 201,
                LHR: 222,
                JFK: 0,
                LAX: 74,
                ATL: 24,
                SCL: 260,
                BOG: 89,
                GRU: 262,
            },
            lon: 289,
            lat: 250,
            continent: 'Северная Америка',
        },
        {
            name: 'LAX',
            title: 'Лос-Анжелес',
            cost: {
                PER: 887,
                MEL: 354,
                SYD: 344,
                SIN: 466,
                DXB: 439,
                PEK: 851,
                CAS: 501,
                CAI: 364,
                JNB: 551,
                IST: 464,
                FRA: 335,
                CDG: 327,
                LHR: 326,
                JFK: 79,
                LAX: 0,
                ATL: 93,
                SCL: 250,
                BOG: 205,
                GRU: 306,
            },
            lon: 167,
            lat: 290,
            continent: 'Северная Америка',
        },
        {
            name: 'ATL',
            title: 'Атланта',
            cost: {
                PER: 1023,
                MEL: 739,
                SYD: 693,
                SIN: 607,
                DXB: 429,
                PEK: 1913,
                CAS: 506,
                CAI: 506,
                JNB: 522,
                IST: 466,
                FRA: 493,
                CDG: 365,
                LHR: 331,
                JFK: 24,
                LAX: 73,
                ATL: 0,
                SCL: 113,
                BOG: 124,
                GRU: 430,
            },
            lon: 250,
            lat: 290,
            continent: 'Северная Америка',
        },
        {
            name: 'SCL',
            title: 'Сантьяго',
            cost: {
                PER: 1457,
                MEL: 813,
                SYD: 797,
                SIN: 1267,
                DXB: 919,
                PEK: 3373,
                CAS: 956,
                CAI: 762,
                JNB: 1428,
                IST: 734,
                FRA: 642,
                CDG: 615,
                LHR: 565,
                JFK: 294,
                LAX: 320,
                ATL: 429,
                SCL: 0,
                BOG: 128,
                GRU: 130,
            },
            lon: 290,
            lat: 708,
            continent: 'Южная Америка',
        },
        {
            name: 'BOG',
            title: 'Богота',
            cost: {
                PER: 1330,
                MEL: 901,
                SYD: 703,
                SIN: 819,
                DXB: 819,
                PEK: 3982,
                CAS: 520,
                CAI: 689,
                JNB: 994,
                IST: 558,
                FRA: 555,
                CDG: 526,
                LHR: 488,
                JFK: 163,
                LAX: 178,
                ATL: 161,
                SCL: 150,
                BOG: 0,
                GRU: 341,
            },
            lon: 270,
            lat: 476,
            continent: 'Южная Америка',
        },
        {
            name: 'GRU',
            title: 'Сан-Паулу',
            cost: {
                PER: 981,
                MEL: 878,
                SYD: 875,
                SIN: 888,
                DXB: 600,
                PEK: 1238,
                CAS: 389,
                CAI: 577,
                JNB: 517,
                IST: 572,
                FRA: 400,
                CDG: 317,
                LHR: 317,
                JFK: 199,
                LAX: 382,
                ATL: 677,
                SCL: 115,
                BOG: 283,
                GRU: 0,
            },
            lon: 348,
            lat: 644,
            continent: 'Южная Америка',
        },

    ],
    gameResults: [],
    get paramCity() {
        return this._cityAddParam;
    },
    queueContinents: [],
    getCostCity(thisCity, previousNumberСity) {
        return this.paramCity[previousNumberСity].cost[thisCity];
    },
    getPreviousNumberCity(previousCity) {
        for (let i = 0; i < this.paramCity.length; i++) {
            if (this.paramCity[i].name == previousCity) {
                return i;
            }
        }
    },
    getCityParameter(numberCity, param) {
        switch (param) {
            case 'lat':
                return this.paramCity[numberCity].lat;
            case 'lon':
                return this.paramCity[numberCity].lon;
            case 'title':
                return this.paramCity[numberCity].title;
            case 'continent':
                return this.paramCity[numberCity].continent;
            case 'name':
                return this.paramCity[numberCity].name;
            default:
                return
        }
    },
    switchLoading: true,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SAVE_RESULTS:
            postResult(action.results, action.way);
            return state;

        case GET_SAVE_RESULTS:
            return {
                ...state,
                gameResults: action.gameResults,
            }

        case SET_QUEUE_CONTINENTS:
            if (action.queueContinent) {
                return {
                    ...state,
                    queueContinents: action.queueContinent,
                }
            } else {
                return {
                    ...state,
                    queueContinents: [],
                }
            }

        case SET_SWITCH_LOADING:
            return {
                ...state,
                switchLoading: action.switchLoading,
            }

        default:
            return state;
    }
}

export const setSaveResults = (results, way) => ({
    type: SET_SAVE_RESULTS, results, way
});
export const getSaveResults = (gameResults) => ({
    type: GET_SAVE_RESULTS, gameResults
});

export const setQueueContinents = (queueContinent) => ({
    type: SET_QUEUE_CONTINENTS, queueContinent
});

export const setSwitchLoading = (switchLoading) => ({
    type: SET_SWITCH_LOADING, switchLoading
});


let postResult = (result, way) => {
    axios.post('https://62617d9673499e9af90d4345.mockapi.io/api/v1/gameResults', {
        result: result,
        way: way,
    })
        .then(function (response) {
            //console.log(response.data);
        })
        .catch(function (error) {
            //console.log(error);
        });

}


export default usersReducer;