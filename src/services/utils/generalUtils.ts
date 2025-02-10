import moment from 'moment'
import { GeneralSettings } from '@/enums/settings/generalSettings'

export const cloneDeep = (object: object) => {
    return JSON.parse(JSON.stringify(object))
}

export function utcToLocalDateFromNow(date?: string) {
    return moment.utc(date, moment.ISO_8601).local().fromNow()
}

export function utcToLocalDate(date?: string) {
    return moment
        .utc(date, moment.ISO_8601)
        .local()
        .format(GeneralSettings.DATETIME_FORMAT)
}

export function utcToFormattedDate(date: string, format: string) {
    return moment.utc(date, moment.ISO_8601).local().format(format)
}

export function generateCasualString(): string {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, function () {
        const r = (Math.random() * 16) | 0
        const v = r
        return v.toString(36)
    })
}

export function getDayOfWeekPosition(isoDate: string): {
    dayOfWeek: string
    weekPosition: number
} {
    const date = moment(isoDate)
    const dayOfWeek: string = date.format('dddd') // Nome completo del giorno della settimana (es. "Monday", "Tuesday", ...)
    const weekPosition: number = Math.ceil(date.date() / 7) // Calcola la posizione del giorno della settimana nel mese

    return {
        dayOfWeek: dayOfWeek,
        weekPosition: weekPosition
    }
}

export function getDayInMonth(isoDate: string): number {
    const date = moment(isoDate)
    return date.date()
}

export const truncateString = (string: string, length: number = 25): string => {
    if (!string) return string

    if (string.length <= length) {
        return string
    } else {
        return string.slice(0, length) + '...'
    }
}

export const fileSizeConvert = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    const size = parseFloat((bytes / Math.pow(k, i)).toFixed(2))
    return `${size} ${sizes[i]}`
}

export function getIntParameter(parameter: string | string[]): number {
    let parameterInt
    if (typeof parameter === 'string') {
        parameterInt = parseInt(parameter)
    } else if (Array.isArray(parameter) && parameter.length > 0) {
        parameterInt = parseInt(parameter[0])
    }
    return parameterInt
}

//TODO: It does not work correctly with all formats, some it simply opens in the browser
export const downloadFile = (url: string, fileName: string): void => {
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
}

export const hasObjectContent = (object: Record<string, any>): boolean => {
    return Object.keys(object).some((key) => {
        const value = object[key]
        if (Array.isArray(value)) {
            return value.length > 0
        } else if (typeof value === 'object' && value !== null) {
            return hasObjectContent(value)
        } else if (typeof value === 'string') {
            return value.trim() !== ''
        } else if (typeof value === 'boolean') {
            return value
        } else if (typeof value === 'number') {
            return !isNaN(value) && value !== 0
        }
        return false
    })
}

export function formattedTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600)
        .toString()
        .padStart(2, '0')
    const minutes = Math.floor((totalSeconds % 3600) / 60)
        .toString()
        .padStart(2, '0')
    const seconds = (totalSeconds % 60).toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
}

export function debounce(
    func: (...args: any[]) => void,
    wait = 500,
    immediate = false
) {
    let timeout: ReturnType<typeof setTimeout> | null

    const fn = function (this: any, ...args: any[]) {
        const later = () => {
            timeout = null
            if (!immediate) func.apply(this, args)
        }
        const callNow = immediate && !timeout
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(later, wait)

        if (callNow) func.apply(this, args)
    }

    return Object.assign(fn, {
        stop() {
            if (timeout) clearTimeout(timeout)
        }
    })
}

export default { cloneDeep }
