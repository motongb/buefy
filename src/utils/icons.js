import config from '../utils/config'
import {merge} from '../utils/helpers'

const mdiIcons = {
    sizes: {
        'default': 'mdi-24px',
        'is-small': '',
        'is-medium': 'mdi-36px',
        'is-large': 'mdi-48px'
    },
    iconPrefix: 'mdi-'
}

const faIcons = () => {
    const faIconPrefix = config && config.defaultIconComponent ? '' : 'fa-'
    return {
        sizes: {
            'default': faIconPrefix + 'lg',
            'is-small': '',
            'is-medium': faIconPrefix + '2x',
            'is-large': faIconPrefix + '3x'
        },
        iconPrefix: faIconPrefix,
        internalIcons: {
            'information': 'info-circle',
            'alert': 'exclamation-triangle',
            'alert-circle': 'exclamation-circle',
            'chevron-right': 'angle-right',
            'chevron-left': 'angle-left',
            'chevron-down': 'angle-down',
            'eye-off': 'eye-slash',
            'menu-down': 'caret-down',
            'menu-up': 'caret-up'
        }
    }
}

const getIcons = () => {
    let icons = {
        mdi: mdiIcons,
        fa: faIcons(),
        fas: faIcons(),
        far: faIcons(),
        fad: faIcons()
    }

    if (config && config.customIconPacks) {
        icons = merge(icons, config.customIconPacks)
    }

    return icons
}

export default getIcons
