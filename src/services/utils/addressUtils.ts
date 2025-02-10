import Country from '@/types/country'
import { GooglePlaces } from '@/enums/googleApi/GooglePlaces'
import Address from '@/types/address'

export const getCountryByIsoCode = (
    countryIsoCode: Country['isoCode'],
    countries: Country[]
): Country | undefined => {
    return countries.find((country) => country.isoCode == countryIsoCode)
}

export const getPlaceInfo = (
    placeResult: google.maps.places.PlaceResult
): Partial<Address> => {
    const composedAddress: Partial<Address> = {}

    let primaryAddressTmp: string | undefined = undefined
    let streetNumberTmp: string | undefined = undefined

    placeResult.address_components?.forEach((addressComponent) => {
        if (addressComponent.types.includes(GooglePlaces.ROUTE)) {
            primaryAddressTmp = addressComponent.long_name
        } else if (
            addressComponent.types.includes(GooglePlaces.STREET_NUMBER)
        ) {
            streetNumberTmp = addressComponent.long_name
        } else if (addressComponent.types.includes(GooglePlaces.POSTAL_CODE)) {
            composedAddress.zipCode = addressComponent.long_name
        } else if (addressComponent.types.includes(GooglePlaces.COUNTRY)) {
            composedAddress.countryIsoCode =
                addressComponent.short_name.toLowerCase()
        } else if (addressComponent.types.includes(GooglePlaces.LOCALITY)) {
            composedAddress.city = addressComponent.long_name
        } else if (
            addressComponent.types.includes(
                GooglePlaces.ADMINISTRATIVE_AREA_LEVEL_2
            )
        ) {
            composedAddress.province = addressComponent.short_name
        } else if (
            addressComponent.types.includes(
                GooglePlaces.ADMINISTRATIVE_AREA_LEVEL_1
            ) &&
            !composedAddress.province
        ) {
            composedAddress.province = addressComponent.short_name
        }
    })

    if (primaryAddressTmp) {
        composedAddress.primaryAddress = `${primaryAddressTmp}${
            streetNumberTmp ? `, ${streetNumberTmp}` : ''
        }`
    }

    composedAddress.latitude = placeResult.geometry?.location?.lat()
    composedAddress.longitude = placeResult.geometry?.location?.lng()

    return composedAddress
}
