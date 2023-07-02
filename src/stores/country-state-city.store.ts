import { computed, reactive, ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

interface Country {
  name: string;
  id: number;
  iso2: string;
}

interface State {
  name: string;
  id: number;
  iso2: string;
}

interface City {
  name: string;
  id: number;
  iso2: string;
}

const APIKEY = 'U1k4OVVDUFpnMEtHNWlzQUo5V2phakUwT0J2VWNOa3ZrTXQ1SHhFSg==';

const api = {
  countries: 'https://api.countrystatecity.in/v1/countries'
};

const headers = {
  'X-CSCAPI-KEY': APIKEY
};

const requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow' as RequestRedirect
};


export const useCountryStateCityStore = defineStore('countryStateCity', () => {
  const countries: Ref<Country[] | null> = ref(null);
  const states: Ref<State[] | null> = ref(null);
  const cities: Ref<City[] | null> = ref(null);

  const selectedCountry: Ref<Country | null> = ref(null);
  const selectedState: Ref<State | null> = ref(null);
  const selectedCity: Ref<City | null> = ref(null);

  const areCountriesLoaded = computed(() => !!countries.value);
  const areStatesLoaded = computed(() => !!states.value);
  const areCitiesLoaded = computed(() => !!cities.value);


  const loadCountries = async () => {
    countries.value = await (await fetch(api.countries, {
      headers
    })).json();
  }

  const loadCountryStates = async (name: string) => {
    states.value = await (await fetch(`${api.countries}/${name}/states`,
      requestOptions
    )).json();

  }

  const loadStateCities = async (country: string, state: string) => {
    countries.value = await (await fetch(`${api.countries}/${country}/states/${state}/cities`,
      requestOptions
    )).json();
  }

  const setSelectedCountry =async(countryName: string | null) => {
    selectedCountry.value = countryName === null ? selectedCountry.value : (countries.value?.find(_ => _.name === countryName) || null);

    if (typeof selectedCountry.value === 'string') {
      await loadCountryStates(selectedCountry.value)
    }
  }

  const setSelectedState = async (stateName: string | null) => {
    selectedState.value = stateName === null ? selectedState.value : (states.value?.find(_ => _.name === stateName) || null);

    if (typeof selectedCountry.value === 'string' && typeof selectedState.value === 'string') {
      await loadStateCities(selectedCountry.value, selectedState.value)
    }
  }

  return {
    loadCountries,
    loadCountryStates,
    loadStateCities,
    setSelectedCountry,
    setSelectedState,
    countries,
    states
  };
});