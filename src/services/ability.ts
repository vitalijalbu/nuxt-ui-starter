import Permission from '@/types/permission'
import { PureAbility } from '@casl/ability'

const ability = new PureAbility()

export const can = (
    permission: Permission['title'] | Permission['title'][],
    operator: 'OR' | 'AND' = 'OR',
    controlType: 'POSITIVE' | 'NEGATIVE' = 'POSITIVE'
) => {
    let check: boolean = false

    if (Array.isArray(permission)) {
        if (operator == 'OR') {
            check = false
            permission.forEach((element) => {
                if (ability.can(element, 'all')) {
                    check = true
                }
            })
        } else if (operator == 'AND') {
            check = true
            permission.forEach((element) => {
                if (!ability.can(element, 'all')) {
                    check = false
                }
            })
        }
    } else {
        check = ability.can(permission, 'all')
    }

    if (controlType == 'POSITIVE') {
        return check
    } else if (controlType == 'NEGATIVE') {
        return !check
    }
}

export default ability
