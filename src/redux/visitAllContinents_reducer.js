let initialState = {
    _cityAddParam: [
        {
            name: 'JFK',
            title: 'New York city',
            cost: {
                JFK: 0,
                OVB: 430,
                CPT: 538,
                PAR: 209,
                RIO: 219,
                SYD: 520,
                LAX: 73,
                PEK: 633,
                DXB: 276,
                SIN: 511,
            },
            lat: 260,
            lon: 280,
            continent: 'North America',
        },
        /* {
             name: 'OVB',
             title: 'Novosibirsk',
             cost: {
                 JFK: 306,
                 OVB: 0,
                 CPT: 404,
                 PAR: 126,
                 RIO: 545,
                 SYD: 543,
                 LAX: 440,
                 PEK: 558,
                 DXB: 140,
             },
             lat: 200,
             lon: 670,
             continent: 'Asia',
         },*/
        {
            name: 'CPT',
            title: 'Cape Town',
            cost: {
                JFK: 557,
                OVB: 1200,
                CPT: 0,
                PAR: 332,
                RIO: 622,
                SYD: 639,
                LAX: 771,
                PEK: 968,
                DXB: 283,
                SIN: 652,
            },
            lat: 710,
            lon: 523,
            continent: 'Africa',
        },
        {
            name: 'PAR',
            title: 'Paris',
            cost: {
                JFK: 202,
                OVB: 156,
                CPT: 394,
                PAR: 0,
                RIO: 279,
                SYD: 493,
                LAX: 311,
                PEK: 616,
                DXB: 58,
                SIN: 350,
            },
            lat: 200,
            lon: 480,
            continent: 'Europe',
        },
        {
            name: 'RIO',
            title: 'Rio de Janeiro',
            cost: {
                JFK: 262,
                OVB: 1350,
                CPT: 786,
                PAR: 339,
                RIO: 0,
                SYD: 723,
                LAX: 273,
                PEK: 1293,
                DXB: 636,
                SIN: 1255,
            },
            lat: 640,
            lon: 355,
            continent: 'South America',
        },
        {
            name: 'SYD',
            title: 'Sydney',
            cost: {
                JFK: 486,
                OVB: 526,
                CPT: 702,
                PAR: 347,
                RIO: 779,
                SYD: 0,
                LAX: 366,
                PEK: 477,
                DXB: 464,
                SIN: 214,
            },
            lat: 720,
            lon: 855,
            continent: 'Australia',
        },
        {
            name: 'LAX',
            title: 'Los Angeles',
            cost: {
                JFK: 51,
                OVB: 579,
                CPT: 614,
                PAR: 185,
                RIO: 293,
                SYD: 314,
                LAX: 0,
                PEK: 650,
                DXB: 406,
                SIN: 521,
            },
            lat: 280,
            lon: 165,
            continent: 'North America',
        },
        {
            name: 'PEK',
            title: 'Beijing',
            cost: {
                JFK: 695,
                OVB: 462,
                CPT: 890,
                PAR: 544,
                RIO: 1669,
                SYD: 729,
                LAX: 778,
                PEK: 0,
                DXB: 542,
                SIN: 631,
            },
            lat: 260,
            lon: 755,
            continent: 'Asia',
        },
        {
            name: 'DXB',
            title: 'Dubai',
            cost: {
                JFK: 325,
                OVB: 133,
                CPT: 359,
                PAR: 158,
                RIO: 451,
                SYD: 417,
                LAX: 381,
                PEK: 516,
                DXB: 0,
                SIN: 218,
            },
            lat: 350,
            lon: 615,
            continent: 'Asia',
        },
        {
            name: 'SIN',
            title: 'Singapore',
            cost: {
                JFK: 554,
                OVB: 495,
                CPT: 773,
                PAR: 325,
                RIO: 1221,
                SYD: 187,
                LAX: 588,
                PEK: 570,
                DXB: 267,
                SIN: 0,
            },
            lat: 490,
            lon: 755,
            continent: 'Asia',
        },
    ],
    gameResults: {
        1821: 'RIO-JFK-LAX-SYD-SIN-DXB-CPT-PAR',
    },
    getCityAddParam(x) {
        return this._cityAddParam[x];
    },
    getCostCity(thisCity, previousNumberСity) {
        return this._cityAddParam[previousNumberСity].cost[thisCity];
    },
    getPreviousNumberСity(previousСity) {
        for (let i = 0; i < this._cityAddParam.length; i++) {
            if (this._cityAddParam[i].name == previousСity) {
                return i;
            }
        }
    },
    getCityParameter(numberCity, param) {
        switch (param) {
            case 'lat':
                return this._cityAddParam[numberCity].lat;
            case 'lon':
                return this._cityAddParam[numberCity].lon;
            case 'title':
                return this._cityAddParam[numberCity].title;
            case 'continent':
                return this._cityAddParam[numberCity].continent;
            default:
                return
        }
    },
    continentsList: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;