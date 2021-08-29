import internalConfig from '../../../../../internalConfig';
import i18n from '../../../../../i18n';

/**
 * @typedef {Object} PageContext
 * @property {label: string, link: string} prev
 * @property {label: string, link: string} next
 * @property {string} repositoryEditUrl
 * @property {string}repositoryProvider
 * @property {string} slug
 */

/**
 * @description 
 * Hydrate Gatsby pageContext in order to rewrite rocketseat theme beaviour
 * 
 * @param {PageContext} pageContext 
 * @returns {PageContext}
 */
export default function hydratePageContext(pageContext) {
    const {prev, slug} = pageContext;

    /**
     * Add prev property if it's absent and current page is not main
     */
    if(!prev && slug !== internalConfig.mainPageSlug) {
        pageContext.prev = {
            label: i18n.mainPageLabel,
            link: internalConfig.mainPageSlug
        };
    }
}