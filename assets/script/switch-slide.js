class switchSlide {

    /**
    * @description go a slide forward.
    * @param {string} from - starting slide (any valid CSS-Selector) *required.
    * @param {string} to - final slide (any valid CSS-Selector) *required.
    * @param {string} style - must be set to 'slide_top-bottom' or 'slide_bottom-top' *required.
    */

    goFwd(from, to, style) {
        if (from === undefined || from === null) {
            throw new Error('@param `from` required!');
        } else if (to === undefined || to === null) {
            throw new Error('@param `to` required!');
        } else if (style === undefined || style === null) {
            throw new Error('@param `style` required!');
        }
        else if (style !== 'slide_top-bottom' && style !== 'slide_bottom-top') {
            throw new Error('@param `style` invalid!');
        }
        else {
            const startSlide = document.querySelector(from);
            const finalSlide = document.querySelector(to);

            finalSlide.classList.remove('hide-slide');
            finalSlide.classList.add(style);
            setTimeout(() => {
                startSlide.classList.add('hide-slide');
                finalSlide.classList.remove(style);
            }, 1000)
        }
    }

    /**
    * @deprecated Not in use.
    * @description go a slide backwards.
    * @param {string} from - starting slide (any valid CSS-Selector) *required.
    * @param {string} to - final slide (any valid CSS-Selector) *required.
    * @param {string} style - must be set to 'slide_top-bottom' or 'slide_bottom-top' *required.
    */

    goBwd(from, to, style) {
        throw new Error('Method not in use.')
    }
}

export const slide = new switchSlide();