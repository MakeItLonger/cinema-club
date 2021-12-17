import { getTrends, getPopular, getTop } from './services.js';

import renderCard from './renderCard.js';

const renderPlus = async (page, func, type) => {
  let data;

  if (!func || func === 'trends') {
    data = await getTrends('all', 'week', page);
  } else if (func === 'popular') {
    data = await getPopular(type, page);
  } else if (func === 'top') {
    data = await getTop(type, page);
  }

  const [...cards] = data.results;
  renderCard(cards, true, type);
};

export default renderPlus;
