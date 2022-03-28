let initialState = {
    _cityAddParam: [
        {
            name: 'JFK',
            title: 'New York city',
            cost: {
                JFK: 0,
                OVB: 430,
                CPT: 538,
                CDG: 209,
                RIO: 219,
                SYD: 520,
                LAX: 73,
                PEK: 633,
                DXB: 276,
            },
            lat: 190,
            lon: 320,
            continent: 'North America',
        },
/*        {
            name: 'OVB',
            title: 'Novosibirsk',
            cost: {
                JFK: 306,
                OVB: 0,
                CPT: 404,
                CDG: 126,
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
                CDG: 332,
                RIO: 622,
                SYD: 639,
                LAX: 771,
                PEK: 968,
                DXB: 283,
            },
            lat: 380,
            lon: 545,
            continent: 'Africa',
        },
        {
            name: 'CDG',
            title: 'Paris',
            cost: {
                JFK: 202,
                OVB: 156,
                CPT: 394,
                CDG: 0,
                RIO: 279,
                SYD: 493,
                LAX: 311,
                PEK: 616,
                DXB: 58,
            },
            lat: 165,
            lon: 500,
            continent: 'Europe',
        },
        {
            name: 'RIO',
            title: 'Rio de Janeiro',
            cost: {
                JFK: 262,
                OVB: 1350,
                CPT: 786,
                CDG: 339,
                RIO: 0,
                SYD: 723,
                LAX: 273,
                PEK: 1293,
                DXB: 636,
            },
            lat: 350,
            lon: 390,
            continent: 'South America',
        },
        {
            name: 'SYD',
            title: 'Sydney',
            cost: {
                JFK: 486,
                OVB: 526,
                CPT: 702,
                CDG: 347,
                RIO: 779,
                SYD: 0,
                LAX: 366,
                PEK: 477,
                DXB: 464,
            },
            lat: 380,
            lon: 860,
            continent: 'Australia',
        },
        {
            name: 'LAX',
            title: 'Los Angeles',
            cost: {
                JFK: 51,
                OVB: 579,
                CPT: 614,
                CDG: 185,
                RIO: 293,
                SYD: 314,
                LAX: 0,
                PEK: 650,
                DXB: 406,
            },
            lat: 195,
            lon: 210,
            continent: 'North America',
        },
        {
            name: 'PEK',
            title: 'Beijing',
            cost: {
                JFK: 695,
                OVB: 462,
                CPT: 890,
                CDG: 544,
                RIO: 1669,
                SYD: 729,
                LAX: 778,
                PEK: 0,
                DXB: 542,
            },
            lat: 190,
            lon: 760,
            continent: 'Asia',
        },
        {
            name: 'DXB',
            title: 'Dubai',
            cost: {
                JFK: 325,
                OVB: 133,
                CPT: 359,
                CDG: 158,
                RIO: 451,
                SYD: 417,
                LAX: 381,
                PEK: 516,
                DXB: 0,
            },
            lat: 225,
            lon: 630,
            continent: 'Asia',
        },
    ],
    getCityAddParam(x){
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
            default:
                return
        }
    },
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default usersReducer;