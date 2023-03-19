const images = require.context('../../../../assets/icon/typeIcon', true);
export const dynamicImport = (imageName: string) => (images(`./${imageName}`).default);
